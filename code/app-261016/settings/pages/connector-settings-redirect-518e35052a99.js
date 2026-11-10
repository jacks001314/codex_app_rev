import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  KSt as n,
  Kyt as r,
  LNt as i,
  Mst as a,
  NSt as o,
  PBt as s,
  SSt as c,
  USt as l,
  VSt as u,
  ZSt as d,
  jst as f,
  nCt as p,
  sct as m,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $f as h,
  DMn as g,
  Fat as _,
  HOn as v,
  Iat as y,
  OMn as b,
  Qf as x,
  Rmr as S,
  UOn as C,
  XT as w,
  Xmr as T,
  eE as E,
  emr as D,
  ep as O,
  iOt as k,
  imr as A,
  nmr as j,
  oOt as M,
  rmr as N,
  vhr as P,
  yhr as F,
} from "./app-initial-ad16eaadf81f.js";
import { n as I, t as L } from "./app-connect-modal-763ad0733e86.js";
import { n as R, t as z } from "./app-connect-link-navigation-8abfdb199032.js";
import { n as B } from "./app-connect-load-state-80040a1f57f3.js";
import { n as V } from "./app-connect-modal-by-id-ee9e7bc8d7c4.js";
function H(e) {
  let t = (0, U.c)(34),
    { connectorId: n, options: r } = e,
    i = l(),
    o = (0, W.useRef)(!1),
    { markAppConnectOAuthPending: s } = b(),
    c;
  t[0] !== n || t[1] !== r.productSku
    ? ((c = S(n, { productSku: r.productSku })), (t[0] = n), (t[1] = r.productSku), (t[2] = c))
    : (c = t[2]);
  let { data: u, isPending: d, isFetching: f, refetch: p } = a(c),
    m;
  t[3] !== i || t[4] !== r
    ? ((m = () => {
        o.current || ((o.current = !0), R(r) || i(`/settings/plugins-settings`, { replace: !0 }));
      }),
      (t[3] = i),
      (t[4] = r),
      (t[5] = m))
    : (m = t[5]);
  let h = m;
  if (u == null) {
    let e;
    t[6] === h
      ? (e = t[7])
      : ((e = (e) => {
          e || h();
        }),
        (t[6] = h),
        (t[7] = e));
    let n;
    t[8] === p
      ? (n = t[9])
      : ((n = () => {
          p();
        }),
        (t[8] = p),
        (t[9] = n));
    let r;
    return (
      t[10] !== f || t[11] !== d || t[12] !== e || t[13] !== n
        ? ((r = (0, G.jsx)(B, { isPending: d, isFetching: f, onOpenChange: e, onRetry: n })),
          (t[10] = f),
          (t[11] = d),
          (t[12] = e),
          (t[13] = n),
          (t[14] = r))
        : (r = t[14]),
      r
    );
  }
  let g = u.logo_url_dark ?? null,
    _ = u.distribution_channel ?? null,
    v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = []), (t[15] = v)) : (v = t[15]);
  let y;
  t[16] !== u.description ||
  t[17] !== u.logo_url ||
  t[18] !== u.name ||
  t[19] !== n ||
  t[20] !== g ||
  t[21] !== _
    ? ((y = {
        id: n,
        name: u.name,
        description: u.description,
        logoUrl: u.logo_url,
        logoUrlDark: g,
        distributionChannel: _,
        appMetadata: null,
        branding: null,
        iconAssets: null,
        iconDarkAssets: null,
        installUrl: null,
        isAccessible: !1,
        isEnabled: !1,
        labels: null,
        pluginDisplayNames: v,
      }),
      (t[16] = u.description),
      (t[17] = u.logo_url),
      (t[18] = u.name),
      (t[19] = n),
      (t[20] = g),
      (t[21] = _),
      (t[22] = y))
    : (y = t[22]);
  let x;
  t[23] === h
    ? (x = t[24])
    : ((x = (e) => {
        e || h();
      }),
      (t[23] = h),
      (t[24] = x));
  let C;
  t[25] !== s || t[26] !== r
    ? ((C = (e) => {
        s({ ...e, appConnectOptions: r, returnTo: r.redirectAfter ?? `/settings/plugins-settings` });
      }),
      (t[25] = s),
      (t[26] = r),
      (t[27] = C))
    : (C = t[27]);
  let w;
  return (
    t[28] !== h || t[29] !== r || t[30] !== y || t[31] !== x || t[32] !== C
      ? ((w = (0, G.jsx)(L, {
          oauthReferrer: `connect_route`,
          allowBrowserFallback: !1,
          app: y,
          appConnectOptions: r,
          closeOnOAuthStarted: !1,
          onOpenChange: x,
          onConnected: h,
          onOAuthStarted: C,
        })),
        (t[28] = h),
        (t[29] = r),
        (t[30] = y),
        (t[31] = x),
        (t[32] = C),
        (t[33] = w))
      : (w = t[33]),
    w
  );
}
var U, W, G;
function K() {
  return (K = e(() => {
    ((U = s()), f(), (W = t()), o(), I(), T(), z(), V(), g(), (G = i()));
  }))();
}
function q(e) {
  let t = (0, J.c)(25),
    { startConnection: i, openSettings: a } = e,
    o = i !== void 0 && i,
    s = a !== void 0 && a,
    d = u(),
    f = l(),
    { connectorId: m } = n(),
    { accountId: g, userId: _, isLoading: b } = A(),
    { isLoading: S } = j(),
    C = g != null && _ != null,
    T = new URLSearchParams(d.search),
    E = (m ?? T.get(`connector`))?.trim() ?? ``,
    D = C && !b && !S && !!E,
    O;
  t[0] === D ? (O = t[1]) : ((O = { enabled: D }), (t[0] = D), (t[1] = O));
  let { data: M, isPending: N, isFetching: P, isError: I, refetch: L } = p(w, { appId: E }, O);
  if (!E) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(c, { to: `/settings/plugins-settings`, replace: !0 })), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (b || S || (C && N)) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(v, { fillParent: !0, debugName: `ConnectorSettingsRedirect` })), (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (!C) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(c, { to: `/settings/plugins-settings`, replace: !0 })), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let R = F(E, T, window.location.origin),
    z = o || T.get(`add-connector-link`) === `true`;
  if (M == null && z) return (0, Y.jsx)(H, { connectorId: E, options: R }, `${g}:${_}:${E}:${d.key}`);
  if (I || M === void 0) {
    let e;
    t[5] === f
      ? (e = t[6])
      : ((e = (e) => {
          e || f(`/settings/plugins-settings`, { replace: !0 });
        }),
        (t[5] = f),
        (t[6] = e));
    let n;
    t[7] === L
      ? (n = t[8])
      : ((n = () => {
          L();
        }),
        (t[7] = L),
        (t[8] = n));
    let r;
    return (
      t[9] !== P || t[10] !== e || t[11] !== n
        ? ((r = (0, Y.jsx)(B, { isPending: !1, isFetching: P, onOpenChange: e, onRetry: n })),
          (t[9] = P),
          (t[10] = e),
          (t[11] = n),
          (t[12] = r))
        : (r = t[12]),
      r
    );
  }
  let V = h(E, M);
  if (V.type === `app`) return (0, Y.jsx)(c, { to: x(V), replace: !0 });
  if (s && !z) {
    let e = new URLSearchParams(),
      t = T.get(`linkId`);
    return (
      t != null && e.set(`linkId`, t),
      (0, Y.jsx)(c, {
        replace: !0,
        to: { pathname: y(V.pluginId, `apps`, E), search: e.toString() },
        state: d.state,
      })
    );
  }
  let U = c,
    W = k({ pluginId: V.pluginId, pluginName: V.pluginId, remoteMarketplaceName: r }),
    G;
  t[13] !== g || t[14] !== E || t[15] !== R || t[16] !== z || t[17] !== _
    ? ((G = z ? { accountId: g, userId: _, connectorId: E, options: R } : void 0),
      (t[13] = g),
      (t[14] = E),
      (t[15] = R),
      (t[16] = z),
      (t[17] = _),
      (t[18] = G))
    : (G = t[18]);
  let K;
  t[19] === G
    ? (K = t[20])
    : ((K = { pluginDetailDeepLinkMode: `view`, connectorSetup: G }), (t[19] = G), (t[20] = K));
  let q;
  return (
    t[21] !== U || t[22] !== W || t[23] !== K
      ? ((q = (0, Y.jsx)(U, { to: W, replace: !0, state: K })),
        (t[21] = U),
        (t[22] = W),
        (t[23] = K),
        (t[24] = q))
      : (q = t[24]),
    q
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = s()), d(), m(), o(), P(), V(), K(), N(), D(), C(), M(), _(), O(), E(), (Y = i()));
  }))();
}
X();
export { q as ConnectorSettingsRedirect };
//# sourceMappingURL=connector-settings-redirect-518e35052a99.js.map
