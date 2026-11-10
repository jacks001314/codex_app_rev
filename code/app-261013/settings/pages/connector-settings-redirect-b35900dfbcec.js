import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Avt as t,
  Ext as n,
  Pxt as r,
  Xot as i,
  Yot as a,
  _xt as o,
  kxt as s,
  oxt as c,
  rst as l,
  vzt as u,
  wxt as d,
  xMt as f,
  yzt as p,
  zxt as m,
} from "./app-shared-bbfeca5e5737.js";
import {
  Kur as h,
  Qf as g,
  Sdr as _,
  Xf as v,
  Zf as y,
  akn as b,
  bTn as x,
  dat as S,
  dur as C,
  fur as w,
  git as T,
  hit as E,
  idr as D,
  lur as O,
  okn as k,
  pur as A,
  sat as j,
  xdr as M,
  xit as N,
  yTn as P,
  yit as F,
} from "./app-initial-5851df3f6cb1.js";
import { n as I, t as L } from "./app-connect-modal-fb7e1b0124f4.js";
import { n as R, t as z } from "./app-connect-link-navigation-c4d344c7d84d.js";
import { n as B } from "./app-connect-load-state-bbeb24b226fa.js";
import { n as V } from "./app-connect-modal-by-id-a3e486d4397f.js";
function H(e) {
  let t = (0, U.c)(34),
    { connectorId: r, options: a } = e,
    o = n(),
    s = (0, W.useRef)(!1),
    { markAppConnectOAuthPending: c } = k(),
    l;
  t[0] !== r || t[1] !== a.productSku
    ? ((l = h(r, { productSku: a.productSku })), (t[0] = r), (t[1] = a.productSku), (t[2] = l))
    : (l = t[2]);
  let { data: u, isPending: d, isFetching: f, refetch: p } = i(l),
    m;
  t[3] !== o || t[4] !== a
    ? ((m = () => {
        s.current || ((s.current = !0), R(a) || o(`/settings/plugins-settings`, { replace: !0 }));
      }),
      (t[3] = o),
      (t[4] = a),
      (t[5] = m))
    : (m = t[5]);
  let g = m;
  if (u == null) {
    let e;
    t[6] === g
      ? (e = t[7])
      : ((e = (e) => {
          e || g();
        }),
        (t[6] = g),
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
  let _ = u.logo_url_dark ?? null,
    v = u.distribution_channel ?? null,
    y;
  t[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = []), (t[15] = y)) : (y = t[15]);
  let b;
  t[16] !== u.description ||
  t[17] !== u.logo_url ||
  t[18] !== u.name ||
  t[19] !== r ||
  t[20] !== _ ||
  t[21] !== v
    ? ((b = {
        id: r,
        name: u.name,
        description: u.description,
        logoUrl: u.logo_url,
        logoUrlDark: _,
        distributionChannel: v,
        appMetadata: null,
        branding: null,
        iconAssets: null,
        iconDarkAssets: null,
        installUrl: null,
        isAccessible: !1,
        isEnabled: !1,
        labels: null,
        pluginDisplayNames: y,
      }),
      (t[16] = u.description),
      (t[17] = u.logo_url),
      (t[18] = u.name),
      (t[19] = r),
      (t[20] = _),
      (t[21] = v),
      (t[22] = b))
    : (b = t[22]);
  let x;
  t[23] === g
    ? (x = t[24])
    : ((x = (e) => {
        e || g();
      }),
      (t[23] = g),
      (t[24] = x));
  let S;
  t[25] !== c || t[26] !== a
    ? ((S = (e) => {
        c({ ...e, appConnectOptions: a, returnTo: a.redirectAfter ?? `/settings/plugins-settings` });
      }),
      (t[25] = c),
      (t[26] = a),
      (t[27] = S))
    : (S = t[27]);
  let C;
  return (
    t[28] !== g || t[29] !== a || t[30] !== b || t[31] !== x || t[32] !== S
      ? ((C = (0, G.jsx)(L, {
          oauthReferrer: `connect_route`,
          allowBrowserFallback: !1,
          app: b,
          appConnectOptions: a,
          closeOnOAuthStarted: !1,
          onOpenChange: x,
          onConnected: g,
          onOAuthStarted: S,
        })),
        (t[28] = g),
        (t[29] = a),
        (t[30] = b),
        (t[31] = x),
        (t[32] = S),
        (t[33] = C))
      : (C = t[33]),
    C
  );
}
var U, W, G;
function K() {
  return (K = e(() => {
    ((U = u()), a(), (W = p()), o(), I(), D(), z(), V(), b(), (G = f()));
  }))();
}
function q(e) {
  let r = (0, J.c)(25),
    { startConnection: i, openSettings: a } = e,
    o = i !== void 0 && i,
    l = a !== void 0 && a,
    u = d(),
    f = n(),
    { connectorId: p } = s(),
    { accountId: h, userId: g, isLoading: b } = A(),
    { isLoading: x } = C(),
    S = h != null && g != null,
    w = new URLSearchParams(u.search),
    E = (p ?? w.get(`connector`))?.trim() ?? ``,
    D = S && !b && !x && !!E,
    O;
  r[0] === D ? (O = r[1]) : ((O = { enabled: D }), (r[0] = D), (r[1] = O));
  let { data: k, isPending: M, isFetching: N, isError: I, refetch: L } = m(j, { appId: E }, O);
  if (!E) {
    let e;
    return (
      r[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(c, { to: `/settings/plugins-settings`, replace: !0 })), (r[2] = e))
        : (e = r[2]),
      e
    );
  }
  if (b || x || (S && M)) {
    let e;
    return (
      r[3] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(P, { fillParent: !0, debugName: `ConnectorSettingsRedirect` })), (r[3] = e))
        : (e = r[3]),
      e
    );
  }
  if (!S) {
    let e;
    return (
      r[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(c, { to: `/settings/plugins-settings`, replace: !0 })), (r[4] = e))
        : (e = r[4]),
      e
    );
  }
  let R = _(E, w, window.location.origin),
    z = o || w.get(`add-connector-link`) === `true`;
  if (k == null && z) return (0, Y.jsx)(H, { connectorId: E, options: R }, `${h}:${g}:${E}:${u.key}`);
  if (I || k === void 0) {
    let e;
    r[5] === f
      ? (e = r[6])
      : ((e = (e) => {
          e || f(`/settings/plugins-settings`, { replace: !0 });
        }),
        (r[5] = f),
        (r[6] = e));
    let t;
    r[7] === L
      ? (t = r[8])
      : ((t = () => {
          L();
        }),
        (r[7] = L),
        (r[8] = t));
    let n;
    return (
      r[9] !== N || r[10] !== e || r[11] !== t
        ? ((n = (0, Y.jsx)(B, { isPending: !1, isFetching: N, onOpenChange: e, onRetry: t })),
          (r[9] = N),
          (r[10] = e),
          (r[11] = t),
          (r[12] = n))
        : (n = r[12]),
      n
    );
  }
  let V = y(E, k);
  if (V.type === `app`) return (0, Y.jsx)(c, { to: v(V), replace: !0 });
  if (l && !z) {
    let e = new URLSearchParams(),
      t = w.get(`linkId`);
    return (
      t != null && e.set(`linkId`, t),
      (0, Y.jsx)(c, {
        replace: !0,
        to: { pathname: T(V.pluginId, `apps`, E), search: e.toString() },
        state: u.state,
      })
    );
  }
  let U = c,
    W = F({ pluginId: V.pluginId, pluginName: V.pluginId, remoteMarketplaceName: t }),
    G;
  r[13] !== h || r[14] !== E || r[15] !== R || r[16] !== z || r[17] !== g
    ? ((G = z ? { accountId: h, userId: g, connectorId: E, options: R } : void 0),
      (r[13] = h),
      (r[14] = E),
      (r[15] = R),
      (r[16] = z),
      (r[17] = g),
      (r[18] = G))
    : (G = r[18]);
  let K;
  r[19] === G
    ? (K = r[20])
    : ((K = { pluginDetailDeepLinkMode: `view`, connectorSetup: G }), (r[19] = G), (r[20] = K));
  let q;
  return (
    r[21] !== U || r[22] !== W || r[23] !== K
      ? ((q = (0, Y.jsx)(U, { to: W, replace: !0, state: K })),
        (r[21] = U),
        (r[22] = W),
        (r[23] = K),
        (r[24] = q))
      : (q = r[24]),
    q
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = u()), r(), l(), o(), M(), V(), K(), w(), O(), x(), N(), E(), g(), S(), (Y = f()));
  }))();
}
X();
export { q as ConnectorSettingsRedirect };
//# sourceMappingURL=connector-settings-redirect-b35900dfbcec.js.map
