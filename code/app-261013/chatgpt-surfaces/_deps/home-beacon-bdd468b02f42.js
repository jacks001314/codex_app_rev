import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Vxt as i,
  _xt as a,
  gSt as ee,
  vzt as o,
  wot as s,
  wxt as te,
  yzt as c,
  zxt as ne,
} from "./app-shared-bbfeca5e5737.js";
import {
  BQt as re,
  Fin as l,
  GQt as ie,
  HQt as ae,
  Hin as oe,
  QQt as se,
  VQt as ce,
  WQt as u,
  XQt as d,
  YQt as le,
  aDr as ue,
  aIr as f,
  e$t as p,
  eDr as m,
  fur as de,
  iQt as h,
  lQt as g,
  oIr as fe,
  pQt as _,
  pur as pe,
  qQt as me,
  rQt as he,
  tQt as ge,
  uQt as v,
  vQt as _e,
} from "./app-initial-5851df3f6cb1.js";
import {
  Jy as y,
  Uy as ve,
  Xy as ye,
  Yy as be,
  Zy as b,
  ab as xe,
  bb as Se,
  cb as Ce,
  lb as x,
  nb as S,
  ob as C,
  sb as w,
  tb as we,
  ub as Te,
  yb as Ee,
} from "./app-primary-fe8a450b3b04.js";
function De({ accountId: e, authMethod: t, isAuthLoading: n }) {
  return !n && t === `chatgpt` && e != null;
}
function Oe({ isAuthLoading: e }) {
  return e;
}
function T(e, t, n) {
  return n == null ? `${e}:session:${t}` : `${e}:${t}:${n.conversationId}:${n.messageId}`;
}
function E(e, t, n, r) {
  if (r?.suppressLifecycle === !0) return !1;
  let i = T(t, n.beacon_id, r);
  return (
    !e.get(y).has(i) &&
    (e.set(y, (e) => {
      let t = new Set(e);
      return (t.add(i), t);
    }),
    v(
      r == null
        ? { beacon: n, eventType: `view`, accountId: t }
        : { beacon: n, eventType: `view`, metadata: r },
    ),
    !0)
  );
}
function D(e, r) {
  let a = (0, O.c)(33),
    o = e === void 0 ? `codex` : e,
    {
      shouldSuppressFocusedModal: s,
      clientContext: c,
      clientContextReady: l,
      composerSelectionContext: u,
    } = r === void 0 ? {} : r,
    d = s === void 0 ? w : s,
    f = l === void 0 || l,
    p = te(),
    m = n(t),
    { accountId: de, authMethod: g, isLoading: _, userId: v } = pe(),
    { data: y } = oe(),
    ve = ue(),
    b = i(fe),
    Se = i(Ce),
    x = i(se),
    S = i(ie),
    C = (0, k.useContext)(be),
    T = i(ce),
    E = i(me),
    D = ve.getContext().user?.customIDs?.account_id,
    j = de ?? y?.id ?? D ?? v ?? null,
    M = De({ accountId: j, authMethod: g, isAuthLoading: _ }),
    N;
  a[0] === _ ? (N = a[1]) : ((N = Oe({ isAuthLoading: _ })), (a[0] = _), (a[1] = N));
  let P = N,
    F =
      j == null
        ? null
        : Ee({ accountId: j, locale: b.locale, navigationKey: p.key, pathname: p.pathname, product: o }),
    I = ne(we, {
      accountId: j,
      locale: b.locale,
      pathname: p.pathname,
      product: o,
      shouldFetch: M,
      clientContext: c,
      clientContextReady: f,
      composerSelectionContext: u,
      shouldSuppressFocusedModal: d,
      visitKey: F ?? ``,
    }),
    L = JSON.stringify([j, b.locale, p.pathname, o, F ?? ``, c, u]),
    R;
  a[2] === L ? (R = a[3]) : ((R = { activeKey: L, cleanupGeneration: 0 }), (a[2] = L), (a[3] = R));
  let ke = (0, k.useRef)(R),
    z,
    B;
  (a[4] !== b.locale ||
  a[5] !== c ||
  a[6] !== u ||
  a[7] !== p.pathname ||
  a[8] !== o ||
  a[9] !== L ||
  a[10] !== j ||
  a[11] !== m ||
  a[12] !== F
    ? ((z = () => {
        let e = ke.current,
          t = (e.cleanupGeneration += 1);
        return (
          (e.activeKey = L),
          () => {
            queueMicrotask(() => {
              (e.cleanupGeneration === t || e.activeKey !== L) &&
                (ee(m, xe, {
                  accountId: j,
                  locale: b.locale,
                  pathname: p.pathname,
                  product: o,
                  clientContext: c,
                  composerSelectionContext: u,
                  shouldSuppressFocusedModal: w,
                  visitKey: F ?? ``,
                }),
                ee(m, _e, F ?? ``));
            });
          }
        );
      }),
      (B = [b.locale, c, u, p.pathname, o, L, j, m, F]),
      (a[4] = b.locale),
      (a[5] = c),
      (a[6] = u),
      (a[7] = p.pathname),
      (a[8] = o),
      (a[9] = L),
      (a[10] = j),
      (a[11] = m),
      (a[12] = F),
      (a[13] = z),
      (a[14] = B))
    : ((z = a[13]), (B = a[14])),
    (0, k.useEffect)(z, B));
  let V = I.status === `selected` ? I.beacon : null,
    Ae =
      !x &&
      M &&
      le({
        activeClaims: S,
        isCurrentHomeBeacon: !0,
        isHomepageTakeoverOwner: V != null && h(V),
        isPageContextUpsellSuppressionEnabled: E,
      }),
    je = !x && M && (T || Ae),
    H;
  a[15] !== x || a[16] !== E || a[17] !== S
    ? ((H = !x && ae({ activeClaims: S, isPageContextUpsellSuppressionEnabled: E }).has(re.NonLegalBanners)),
      (a[15] = x),
      (a[16] = E),
      (a[17] = S),
      (a[18] = H))
    : (H = a[18]);
  let Me = H,
    U = null;
  x ? (U = A) : M && !je && (U = V);
  let W;
  a[19] === U ? (W = a[20]) : ((W = U != null && he(U) ? U : null), (a[19] = U), (a[20] = W));
  let G = W;
  G != null && Te(G) && !Se && (G = null);
  let K;
  a[21] === U ? (K = a[22]) : ((K = U != null && ge(U) ? U : null), (a[21] = U), (a[22] = K));
  let q = K,
    J;
  a[23] !== G || a[24] !== C
    ? ((J = ye(G != null && h(G), C)), (a[23] = G), (a[24] = C), (a[25] = J))
    : (J = a[25]);
  let { isPending: Ne, isUnavailable: Pe } = J;
  (G?.beacon_id === `codex_fast_mode_home_banner` && c?.codex_fast_mode_eligible !== !0 && (G = null),
    (Ne || Pe) && (G = null));
  let Fe = !x && M && I.status === `pending`,
    Ie = !x && M && (I.status === `pending` || I.status === `selected`),
    Y = P || (Ie && !Pe) || G != null || Me,
    X = x ? `debug` : j,
    Z = G != null,
    Q = !x && (P || Fe || Ne),
    $;
  return (
    a[26] !== G || a[27] !== q || a[28] !== Y || a[29] !== X || a[30] !== Z || a[31] !== Q
      ? (($ = {
          accountId: X,
          beacon: G,
          containerBeacon: q,
          isEligible: Z,
          isLoading: Q,
          shouldSuppressVanillaPromos: Y,
        }),
        (a[26] = G),
        (a[27] = q),
        (a[28] = Y),
        (a[29] = X),
        (a[30] = Z),
        (a[31] = Q),
        (a[32] = $))
      : ($ = a[32]),
    $
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = o()),
      r(),
      (k = c()),
      a(),
      de(),
      g(),
      Se(),
      C(),
      S(),
      _(),
      l(),
      ve(),
      p(),
      b(),
      f(),
      u(),
      x(),
      s(),
      m(),
      (A = {
        type: `beacon_ui_response`,
        beacon_id: d,
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
//# sourceMappingURL=home-beacon-bdd468b02f42.js.map
