import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  NCt as i,
  NSt as a,
  PBt as o,
  Qst as ee,
  VSt as te,
  ZSt as s,
  iCt as c,
  nCt as ne,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $$t as l,
  $Qt as u,
  B$t as re,
  CIr as ie,
  Ejr as ae,
  J$t as oe,
  K$t as se,
  QQt as ce,
  SIr as d,
  U$t as le,
  V$t as ue,
  W$t as de,
  XQt as fe,
  Y$t as f,
  Z$t as pe,
  a$t as p,
  c$t as m,
  i$t as h,
  imr as me,
  jcn as he,
  p$t as ge,
  rmr as _e,
  wcn as g,
  xjr as ve,
  z$t as ye,
} from "./app-initial-ad16eaadf81f.js";
import {
  Ab as be,
  Cb as xe,
  Db as Se,
  Hb as Ce,
  Mb as we,
  Ob as _,
  Ub as v,
  Vb as Te,
  _b as Ee,
  db as y,
  gb as b,
  jb as x,
  kb as S,
  vb as De,
  wb as C,
  yb as w,
} from "./app-primary-3e00728c2a4c.js";
function Oe({ accountId: e, authMethod: t, isAuthLoading: n }) {
  return !n && t === `chatgpt` && e != null;
}
function ke({ isAuthLoading: e }) {
  return e;
}
function T(e, t, n) {
  return n == null ? `${e}:session:${t}` : `${e}:${t}:${n.conversationId}:${n.messageId}`;
}
function E(e, t, n, r) {
  if (r?.suppressLifecycle === !0) return !1;
  let i = T(t, n.beacon_id, r);
  return (
    !e.get(b).has(i) &&
    (e.set(b, (e) => {
      let t = new Set(e);
      return (t.add(i), t);
    }),
    p(
      r == null
        ? { beacon: n, eventType: `view`, accountId: t }
        : { beacon: n, eventType: `view`, metadata: r },
    ),
    !0)
  );
}
function D(e, n) {
  let r = (0, O.c)(33),
    a = e === void 0 ? `codex` : e,
    {
      shouldSuppressFocusedModal: o,
      clientContext: s,
      clientContextReady: l,
      composerSelectionContext: d,
    } = n === void 0 ? {} : n,
    le = o === void 0 ? S : o,
    f = l === void 0 || l,
    p = te(),
    m = t(ee),
    { accountId: h, authMethod: _e, isLoading: g, userId: ve } = me(),
    { data: Ce } = he(),
    _ = ae(),
    v = c(ie),
    y = c(be),
    b = c(pe),
    x = c(de),
    C = (0, k.useContext)(Ee),
    w = c(re),
    T = c(se),
    E = _.getContext().user?.customIDs?.account_id,
    D = h ?? Ce?.id ?? E ?? ve ?? null,
    j = Oe({ accountId: D, authMethod: _e, isAuthLoading: g }),
    M;
  r[0] === g ? (M = r[1]) : ((M = ke({ isAuthLoading: g })), (r[0] = g), (r[1] = M));
  let N = M,
    P =
      D == null
        ? null
        : Te({ accountId: D, locale: v.locale, navigationKey: p.key, pathname: p.pathname, product: a }),
    F = ne(xe, {
      accountId: D,
      locale: v.locale,
      pathname: p.pathname,
      product: a,
      shouldFetch: j,
      clientContext: s,
      clientContextReady: f,
      composerSelectionContext: d,
      shouldSuppressFocusedModal: le,
      visitKey: P ?? ``,
    }),
    I = JSON.stringify([D, v.locale, p.pathname, a, P ?? ``, s, d]),
    L;
  r[2] === I ? (L = r[3]) : ((L = { activeKey: I, cleanupGeneration: 0 }), (r[2] = I), (r[3] = L));
  let Ae = (0, k.useRef)(L),
    R,
    z;
  (r[4] !== v.locale ||
  r[5] !== s ||
  r[6] !== d ||
  r[7] !== p.pathname ||
  r[8] !== a ||
  r[9] !== I ||
  r[10] !== D ||
  r[11] !== m ||
  r[12] !== P
    ? ((R = () => {
        let e = Ae.current,
          t = (e.cleanupGeneration += 1);
        return (
          (e.activeKey = I),
          () => {
            queueMicrotask(() => {
              (e.cleanupGeneration === t || e.activeKey !== I) &&
                (i(m, Se, {
                  accountId: D,
                  locale: v.locale,
                  pathname: p.pathname,
                  product: a,
                  clientContext: s,
                  composerSelectionContext: d,
                  shouldSuppressFocusedModal: S,
                  visitKey: P ?? ``,
                }),
                i(m, ge, P ?? ``));
            });
          }
        );
      }),
      (z = [v.locale, s, d, p.pathname, a, I, D, m, P]),
      (r[4] = v.locale),
      (r[5] = s),
      (r[6] = d),
      (r[7] = p.pathname),
      (r[8] = a),
      (r[9] = I),
      (r[10] = D),
      (r[11] = m),
      (r[12] = P),
      (r[13] = R),
      (r[14] = z))
    : ((R = r[13]), (z = r[14])),
    (0, k.useEffect)(R, z));
  let B = F.status === `selected` ? F.beacon : null,
    je =
      !b &&
      j &&
      oe({
        activeClaims: x,
        isCurrentHomeBeacon: !0,
        isHomepageTakeoverOwner: B != null && u(B),
        isPageContextUpsellSuppressionEnabled: T,
      }),
    Me = !b && j && (w || je),
    V;
  r[15] !== b || r[16] !== T || r[17] !== x
    ? ((V = !b && ue({ activeClaims: x, isPageContextUpsellSuppressionEnabled: T }).has(ye.NonLegalBanners)),
      (r[15] = b),
      (r[16] = T),
      (r[17] = x),
      (r[18] = V))
    : (V = r[18]);
  let Ne = V,
    H = null;
  b ? (H = A) : j && !Me && (H = B);
  let U;
  r[19] === H ? (U = r[20]) : ((U = H != null && ce(H) ? H : null), (r[19] = H), (r[20] = U));
  let W = U;
  W != null && we(W) && !y && (W = null);
  let G = c(null);
  G != null && G === D && (W = null);
  let K;
  r[21] === H ? (K = r[22]) : ((K = H != null && fe(H) ? H : null), (r[21] = H), (r[22] = K));
  let q = K,
    J;
  r[23] !== W || r[24] !== C
    ? ((J = De(W != null && u(W), C)), (r[23] = W), (r[24] = C), (r[25] = J))
    : (J = r[25]);
  let { isPending: Pe, isUnavailable: Fe } = J;
  (W?.beacon_id === `codex_fast_mode_home_banner` && s?.codex_fast_mode_eligible !== !0 && (W = null),
    (Pe || Fe) && (W = null));
  let Ie = !b && j && F.status === `pending`,
    Le = !b && j && (F.status === `pending` || F.status === `selected`),
    Y = N || (Le && !Fe) || W != null || Ne,
    X = b ? `debug` : D,
    Z = W != null,
    Q = !b && (N || Ie || Pe),
    $;
  return (
    r[26] !== W || r[27] !== q || r[28] !== Y || r[29] !== X || r[30] !== Z || r[31] !== Q
      ? (($ = {
          accountId: X,
          beacon: W,
          containerBeacon: q,
          isEligible: Z,
          isLoading: Q,
          shouldSuppressVanillaPromos: Y,
        }),
        (r[26] = W),
        (r[27] = q),
        (r[28] = Y),
        (r[29] = X),
        (r[30] = Z),
        (r[31] = Q),
        (r[32] = $))
      : ($ = r[32]),
    $
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = o()),
      s(),
      (k = r()),
      a(),
      v(),
      _e(),
      h(),
      Ce(),
      _(),
      C(),
      m(),
      g(),
      y(),
      l(),
      w(),
      d(),
      le(),
      x(),
      n(),
      ve(),
      (A = {
        type: `beacon_ui_response`,
        beacon_id: f,
        beacon_name: `Codex App Home Beacon Debug`,
        show_timing: `immediate`,
        ui_info: {
          type: `beacon_banner_info`,
          title: `Codex app home banner`,
          description: `Local debug preview`,
          informational_link: null,
          icon_image_url: null,
          icon_image_url_dark: null,
          icon_image_size: `large`,
          banner_position: null,
          banner_design: `default`,
          dismiss_variant: `dismiss_on_send`,
        },
        action_items: [
          {
            id: `learn_more`,
            action_v2: { action_enum: `open_url`, url: `/settings` },
            text: `Learn more`,
            type: `primary`,
            icon_url: null,
            description: null,
          },
        ],
      }));
  }))();
}
export { E as n, D as r, j as t };
//# sourceMappingURL=home-beacon-b81b49ffbe31.js.map
