import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  Bj as r,
  DB as i,
  FA as a,
  FBt as o,
  HFt as s,
  LNt as c,
  Nu as l,
  OB as u,
  PA as d,
  PBt as f,
  Pu as p,
  Qst as m,
  Rj as h,
  SCt as g,
  VRt as _,
  Vrt as v,
  XOt as y,
  ZSt as b,
  kLt as x,
  okt as S,
  qrt as C,
  yCt as w,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as T,
  $l as E,
  Air as D,
  BRr as O,
  MOr as k,
  Mir as A,
  QOr as j,
  Ql as ee,
  Rzn as M,
  Uft as N,
  Ujn as P,
  Ycr as F,
  cc as I,
  fBr as L,
  gdt as R,
  hdt as te,
  lBr as ne,
  lkr as re,
  mdt as ie,
  pdt as z,
  qjn as ae,
  sc as oe,
  wLr as B,
  zOr as se,
  zRr as V,
  zzn as ce,
} from "./app-initial-ad16eaadf81f.js";
import { n as le, t as ue } from "./inline-reference-trigger-921d6e3f5a6c.js";
import { l as de, n as fe, t as pe, u as me } from "./chatgpt-product-analytics-ae26af19ef1e.js";
function he(e, t, n, r, i) {
  let a = e.get(V),
    o = e.get(O),
    s = e.get(D).pathname;
  if (
    a == null ||
    e.value.routeKind !== `chatgpt-thread` ||
    s !== e.value.pathname ||
    r.shouldBlockExternalEgress ||
    !navigator.onLine
  )
    return;
  let c = JSON.stringify([
    a,
    o,
    r.conversationId,
    r.messageId,
    r.productReference?.start_idx,
    n.id || n.query || n.title,
  ]);
  if (e.get(H, c)) return;
  let l = !1,
    u,
    d = async () => {
      try {
        let t = await te();
        if (l || e.get(V) !== a || e.get(O) !== o || e.get(D).pathname !== s || e.get(H, c)) return;
        (e.set(H, c, !0), t(e, n, r, i));
      } catch {}
    },
    f = () => {
      u == null && !l && (u = requestAnimationFrame(() => void d()));
    },
    p =
      typeof IntersectionObserver > `u`
        ? void 0
        : new IntersectionObserver(
            (e) => {
              e.some((e) => e.isIntersecting) && f();
            },
            { threshold: 0, rootMargin: `0px 0px 300px 0px` },
          );
  return (
    p == null ? f() : p.observe(t),
    () => {
      ((l = !0), p?.disconnect(), u != null && cancelAnimationFrame(u));
    }
  );
}
var H;
function ge() {
  return (ge = e(() => {
    (z(), b(), A(), B(), se(), (H = g(k, (e) => !1)));
  }))();
}
async function _e(e, t, n, r) {
  let i = e.get(V),
    a = t.contentReferences.indexOf(n),
    o = t.contentReferenceMessageIds?.[a] ?? t.messageId;
  if (
    i == null ||
    o == null ||
    t.shouldBlockExternalEgress ||
    e.value.routeKind !== `chatgpt-thread` ||
    e.value.conversationId !== t.conversationId
  )
    return;
  let s = typeof n.start_idx == `number` ? n.start_idx : 0,
    c;
  n.type === `product_group` && typeof n.query == `string`
    ? (c = n.query)
    : n.type !== `explore_more` && (c = `product_carousel:${s}`);
  let l = { accountId: i, turn: t, rootMessageId: o, category: c, sourceContentReference: n },
    u = e.get(F),
    d = await R(),
    f = e.get(F);
  i === e.get(V) && f?.pathname === u?.pathname && f?.search === u?.search && d(e, l, r);
}
var ve;
function U() {
  return (U = e(() => {
    (z(),
      b(),
      B(),
      T(),
      re(),
      ae(),
      (ve = w(j, (e, { get: t }) => (e.accountId !== t(V) || t(P, e.turn.conversationId) ? null : e))));
  }))();
}
function ye(e) {
  let t = (0, W.c)(15),
    {
      className: n,
      children: r,
      "data-testid": i,
      fallback: a,
      inline: o,
      product: s,
      productIndex: c,
      reference: l,
      onBack: u,
      surfaceLocation: d,
      engagementReference: f,
    } = e,
    p = o !== void 0 && o,
    m = d === void 0 ? `response` : d,
    h = I();
  if (h == null) {
    let e;
    return (
      t[0] === a ? (e = t[1]) : ((e = (0, K.jsx)(K.Fragment, { children: a })), (t[0] = a), (t[1] = e)),
      e
    );
  }
  let g;
  return (
    t[2] !== r ||
    t[3] !== n ||
    t[4] !== h ||
    t[5] !== f ||
    t[6] !== a ||
    t[7] !== p ||
    t[8] !== u ||
    t[9] !== s ||
    t[10] !== c ||
    t[11] !== l ||
    t[12] !== m ||
    t[13] !== i
      ? ((g = (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(K.Fragment, {
              children: (0, K.jsx)(be, {
                className: n,
                context: h,
                "data-testid": i,
                fallback: a,
                inline: p,
                product: s,
                productIndex: c,
                reference: l,
                onBack: u,
                surfaceLocation: m,
                engagementReference: f,
                children: r,
              }),
            }),
            null,
          ],
        })),
        (t[2] = r),
        (t[3] = n),
        (t[4] = h),
        (t[5] = f),
        (t[6] = a),
        (t[7] = p),
        (t[8] = u),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l),
        (t[12] = m),
        (t[13] = i),
        (t[14] = g))
      : (g = t[14]),
    g
  );
}
function be(e) {
  let n = (0, W.c)(41),
    {
      className: r,
      children: i,
      context: a,
      "data-testid": o,
      fallback: s,
      inline: c,
      product: l,
      productIndex: u,
      reference: d,
      onBack: f,
      surfaceLocation: p,
      engagementReference: m,
    } = e,
    g = p === void 0 ? `response` : p,
    _ = t(k),
    v = S(),
    y = (0, G.useRef)(null),
    b = (0, G.useContext)(ee);
  if (_.value.routeKind !== `chatgpt-thread`) {
    let e;
    return (
      n[0] === s ? (e = n[1]) : ((e = (0, K.jsx)(K.Fragment, { children: s })), (n[0] = s), (n[1] = e)),
      e
    );
  }
  if (
    g === `response` &&
    a.productDetailsInteractionSource !== `browse` &&
    (a.productDetailsSidebarType == null || a.productDetailsSidebarType === `product`) &&
    (l.provider !== `baklava_product_feed` || l.product_lookup_key == null) &&
    l.offers == null &&
    l.url?.trim() &&
    h(l.url) != null &&
    s != null
  ) {
    let e;
    return (
      n[2] === s ? (e = n[3]) : ((e = (0, K.jsx)(K.Fragment, { children: s })), (n[2] = s), (n[3] = e)),
      e
    );
  }
  let x = d == null ? -1 : a.contentReferences.indexOf(d),
    w = a.contentReferenceMessageIds?.[x] ?? a.messageId,
    T =
      a.productDetailsInteractionSource ??
      (d?.type === `product` || d?.type === `product_entity` ? `inline_link` : `carousel`),
    E = a.shouldBlockExternalEgress || b === `restricted`,
    O;
  n[4] !== a || n[5] !== u || n[6] !== d || n[7] !== w || n[8] !== T || n[9] !== E
    ? ((O = {
        ...a,
        messageId: w,
        productReference: d,
        productDetailsProductIndex: u,
        productDetailsInteractionSource: T,
        shouldBlockExternalEgress: E,
      }),
      (n[4] = a),
      (n[5] = u),
      (n[6] = d),
      (n[7] = w),
      (n[8] = T),
      (n[9] = E),
      (n[10] = O))
    : (O = n[10]);
  let A = O,
    j;
  n[11] !== m ||
  n[12] !== v ||
  n[13] !== f ||
  n[14] !== l ||
  n[15] !== A ||
  n[16] !== u ||
  n[17] !== d ||
  n[18] !== _ ||
  n[19] !== g
    ? ((j = async (e) => {
        let t = _.get(V),
          n = _.get(D).pathname;
        if (t == null || _.value.routeKind !== `chatgpt-thread` || n !== _.value.pathname) return;
        let r =
            d?.type === `product_entity` && e.currentTarget.closest(`th`) != null
              ? { ...A, productReference: { ...d, render_as: `table` } }
              : A,
          i = JSON.stringify([A.messageId, d?.start_idx, l.id]);
        (fe(
          _,
          l,
          r,
          u,
          (d?.type !== `product` && r.productReference?.render_as !== `table`) ||
            d?.render_as === `block` ||
            y.current !== i,
          { target: e.target, reference: m, surfaceLocation: g },
        ),
          (y.current = i));
        try {
          let e = await ie();
          if (_.get(V) !== t || _.get(D).pathname !== n) return;
          e(
            _,
            l,
            r,
            v.locale,
            void 0,
            void 0,
            f,
            r.messageId == null || r.shouldBlockExternalEgress || f != null
              ? void 0
              : (e) => {
                  _e(_, r, { type: `explore_more` }, e);
                },
          );
        } catch {
          _.get(V) === t &&
            _.get(D).pathname === n &&
            _.get(C).danger(
              v.formatMessage({
                id: `chatgpt.productDetails.openError`,
                defaultMessage: `Couldn't open product details. Try again.`,
                description: `Error shown when loading the shopping product details panel fails`,
              }),
              { errorAnalytics: { toastId: `chatgpt.productDetails.openError` } },
            );
        }
      }),
      (n[11] = m),
      (n[12] = v),
      (n[13] = f),
      (n[14] = l),
      (n[15] = A),
      (n[16] = u),
      (n[17] = d),
      (n[18] = _),
      (n[19] = g),
      (n[20] = j))
    : (j = n[20]);
  let M = j,
    N = c ? ue : `button`,
    P;
  n[21] !== v.locale || n[22] !== l || n[23] !== A || n[24] !== _ || n[25] !== g
    ? ((P = (e) => (e == null || g !== `response` ? void 0 : he(_, e, l, A, v.locale))),
      (n[21] = v.locale),
      (n[22] = l),
      (n[23] = A),
      (n[24] = _),
      (n[25] = g),
      (n[26] = P))
    : (P = n[26]);
  let F;
  n[27] !== v || n[28] !== l.title
    ? ((F = v.formatMessage(
        {
          id: `chatgpt.productDetails.open`,
          defaultMessage: `View details for {product}`,
          description: `Accessible label for opening details about a shopping product`,
        },
        { product: l.title },
      )),
      (n[27] = v),
      (n[28] = l.title),
      (n[29] = F))
    : (F = n[29]);
  let I = c ? void 0 : `button`,
    L;
  n[30] === M ? (L = n[31]) : ((L = (e) => void M(e)), (n[30] = M), (n[31] = L));
  let R;
  return (
    n[32] !== N ||
    n[33] !== i ||
    n[34] !== r ||
    n[35] !== L ||
    n[36] !== P ||
    n[37] !== F ||
    n[38] !== I ||
    n[39] !== o
      ? ((R = (0, K.jsx)(N, {
          ref: P,
          className: r,
          "aria-label": F,
          "data-testid": o,
          type: I,
          onClick: L,
          children: i,
        })),
        (n[32] = N),
        (n[33] = i),
        (n[34] = r),
        (n[35] = L),
        (n[36] = P),
        (n[37] = F),
        (n[38] = I),
        (n[39] = o),
        (n[40] = R))
      : (R = n[40]),
    R
  );
}
var W, G, K;
function xe() {
  return (xe = e(() => {
    ((W = f()),
      z(),
      b(),
      (G = o()),
      y(),
      A(),
      B(),
      v(),
      r(),
      E(),
      se(),
      le(),
      pe(),
      ge(),
      oe(),
      U(),
      (K = c()));
  }))();
}
function q(e) {
  let t = He.get(e.node);
  return (t ?? ((t = { attempts: new Set(), failures: new Set() }), He.set(e.node, t)), t);
}
function Se({ product: e, productId: t, citationType: n, surface: r }) {
  return JSON.stringify([t || (e.product_lookup_key?.data ? e.product_lookup_key : e.url || e.title), n, r]);
}
function Ce(
  e,
  {
    product: t,
    productId: n,
    imageUrl: r,
    citationType: i,
    surface: a,
    isShoppingResearch: o,
    isVirtualTryOnImage: s = !1,
  },
) {
  let c = Ne(r),
    l = c === `images.openai.com`,
    u = l ? Pe(r) : ``,
    d = e.get(L)?.getContext().user,
    f = d?.country,
    p = we(),
    m = Ee(r);
  return {
    product_id: n,
    citation_type: i,
    surface: a,
    image_url: s || (r !== `` && !/^https?:\/\//i.test(r)) ? void 0 : r,
    tags: s ? [`vto_image`] : void 0,
    image_url_hostname: c,
    from_oai_images: l,
    is_authenticated: d?.custom?.auth_status == null ? void 0 : d.custom.auth_status === `logged_in`,
    ...p,
    ...m,
    oai_img_path_prefix: u || void 0,
    has_showcase_metadata: !!t.showcase_metadata,
    provider: x(_()).safeParse(t.providers).data?.[0] ?? t.provider,
    user_country: f,
    is_shopping_research: o,
  };
}
function we() {
  let e = {};
  if (
    typeof navigator > `u` ||
    (typeof navigator.onLine == `boolean` && (e.client_online = navigator.onLine),
    !Te(navigator) || !navigator.connection)
  )
    return e;
  let { connection: t } = navigator;
  typeof t.effectiveType == `string` &&
    t.effectiveType.length > 0 &&
    (e.client_effective_connection_type = t.effectiveType);
  let n = J(t.rtt);
  n !== void 0 && (e.client_rtt_ms = n);
  let r = J(t.downlink);
  return (
    r !== void 0 && (e.client_downlink_mbps = r),
    typeof t.saveData == `boolean` && (e.client_save_data = t.saveData),
    e
  );
}
function Te(e) {
  return `connection` in e;
}
function Ee(e) {
  let t = { image_resource_timing_available: !1 };
  if (!e || typeof performance > `u` || typeof performance.getEntriesByName != `function`) return t;
  try {
    let n = De(e);
    if (!n) return t;
    t.image_resource_timing_available = !0;
    let r = J(n.responseStatus);
    r !== void 0 && ((t.image_resource_response_status = r), (t.image_resource_status_bucket = ke(r)));
    let i = J(n.duration);
    i !== void 0 && (t.image_resource_duration_ms = i);
    let a = J(n.responseStart);
    a !== void 0 && (t.image_resource_response_start_ms = a);
    let o = J(n.responseEnd);
    o !== void 0 && (t.image_resource_response_end_ms = o);
    let s = J(n.transferSize);
    s !== void 0 && (t.image_resource_transfer_size_bytes = s);
    let c = J(n.encodedBodySize);
    c !== void 0 && (t.image_resource_encoded_body_size_bytes = c);
    let l = J(n.decodedBodySize);
    (l !== void 0 && (t.image_resource_decoded_body_size_bytes = l),
      n.nextHopProtocol && (t.image_resource_next_hop_protocol = n.nextHopProtocol));
  } catch {
    return t;
  }
  return t;
}
function De(e) {
  let t = performance.getEntriesByName(e, `resource`);
  for (let e = t.length - 1; e >= 0; --e) {
    let n = t[e];
    if (Oe(n)) return n;
  }
}
function Oe(e) {
  return e.entryType === `resource`;
}
function J(e) {
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function ke(e) {
  return e === 0 ? `no_http_response` : e >= 100 && e < 600 ? `${Math.floor(e / 100)}xx` : `unknown`;
}
function Ae(e, t) {
  return {
    citation_type: e.citation_type,
    surface: e.surface,
    reason: t,
    product_provider: e.provider ?? `unknown`,
    has_showcase_metadata: Y(e.has_showcase_metadata),
    from_oai_images: Y(e.from_oai_images),
    image_origin: je(e),
    oai_img_path_prefix: Me(e.oai_img_path_prefix),
    image_resource_timing_available: Y(e.image_resource_timing_available),
    image_resource_response_status: e.image_resource_response_status?.toString() ?? `unknown`,
    image_resource_status_bucket: e.image_resource_status_bucket ?? `unknown`,
    client_online: Y(e.client_online),
    client_effective_connection_type: e.client_effective_connection_type ?? `unknown`,
    client_save_data: Y(e.client_save_data),
    user_country: e.user_country ?? `unknown`,
    is_authenticated: Y(e.is_authenticated),
    is_shopping_research: Y(e.is_shopping_research),
  };
}
function Y(e) {
  return e === void 0 ? `unknown` : e ? `true` : `false`;
}
function je(e) {
  return e.image_url
    ? e.from_oai_images
      ? `oai_images`
      : e.image_url_hostname
        ? `external`
        : `invalid_url`
    : `missing_url`;
}
function Me(e) {
  let t = e?.split(`/`).filter(Boolean).join(`_`);
  return t && t.length > 0 ? t : `none`;
}
function X(e, t, n, r) {
  e.get(M).count(`shopping`, t, Ae(n, r));
}
function Ne(e) {
  if (!e) return ``;
  try {
    return new URL(e).hostname;
  } catch {
    return ``;
  }
}
function Pe(e) {
  if (!e) return ``;
  try {
    let { pathname: t } = new URL(e),
      n = t.split(`/`).filter(Boolean),
      r = [];
    for (let e of n) {
      if (e.length > 16 || r.length >= 2) break;
      r.push(e);
    }
    return r.length === 0 ? `` : r.join(`/`) + (r.length > 1 ? `/` : ``);
  } catch {
    return ``;
  }
}
function Fe() {
  let e = Error(`Product image load error`);
  return (
    typeof Error.captureStackTrace == `function` && Error.captureStackTrace(e, Ie),
    ze(e.stack?.trim() || e.message)
  );
}
function Ie(e) {
  if (e instanceof Error) {
    let t = e.name || `Error`,
      n = e.message.trim(),
      r = n ? `${t}: ${n}` : t;
    return ze(e.stack?.trim() || r);
  }
  return typeof e == `string` && e ? ze(e) : Fe();
}
function Z(e, t) {
  let { reason: n } = t,
    r = Se(t);
  if (q(e).failures.has(r)) return;
  q(e).failures.add(r);
  let i = Ce(e, t);
  (Be(`shopping.product_image.not_rendered`, {
    ...i,
    reason: n,
    ...(n === `load_error`
      ? {
          error_stack_trace: t.isVirtualTryOnImage
            ? `Virtual try-on image failed to load`
            : t.errorStackTrace,
        }
      : {}),
  }),
    X(e, `product_image.not_rendered`, i, n),
    n === `missing_url` && X(e, Ve, i, n));
}
function Q(e, t) {
  let { imageFetchResponseStatus: n } = t,
    r = Se(t);
  if (q(e).attempts.has(r)) return;
  q(e).attempts.add(r);
  let i = Ce(e, t);
  (Be(`shopping.product_image.load_attempt`, { ...i, image_fetch_response_status: n }),
    X(e, Ve, i, `load_attempt`));
}
function Le(e, t, n, r) {
  (Q(e, { ...t, imageFetchResponseStatus: r?.imageFetchResponseStatus }),
    Z(e, { ...t, reason: `load_error`, errorStackTrace: Ie(n) }));
}
function Re(e, t) {
  (Q(e, t), Z(e, { ...t, reason: `load_timeout` }));
}
function ze(e) {
  return e.length > 2e3 ? e.slice(0, 2e3) + `…` : e;
}
function Be(e, t) {
  let n = {};
  for (let [e, r] of Object.entries(t)) r !== void 0 && (n[e] = r);
}
var Ve, He;
function Ue() {
  return (Ue = e(() => {
    (s(), ce(), N(), ne(), (Ve = `product_image.render_opportunity`), (He = new WeakMap()));
  }))();
}
function We(e) {
  let n = (0, Ke.c)(46),
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p;
  n[0] === e
    ? ((r = n[1]),
      (i = n[2]),
      (a = n[3]),
      (o = n[4]),
      (s = n[5]),
      (c = n[6]),
      (l = n[7]),
      (u = n[8]),
      (d = n[9]),
      (f = n[10]),
      (p = n[11]))
    : (({
        product: l,
        reference: d,
        imageAnalytics: i,
        hasFallbackImage: r,
        loadTimeoutMs: a,
        onLoad: c,
        onError: s,
        src: f,
        alt: p,
        loading: o,
        ...u
      } = e),
      (n[0] = e),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = o),
      (n[5] = s),
      (n[6] = c),
      (n[7] = l),
      (n[8] = u),
      (n[9] = d),
      (n[10] = f),
      (n[11] = p));
  let h = p === void 0 ? `` : p,
    g = t(m),
    _ = I(),
    v = (0, $.useRef)(null),
    y = (0, $.useRef)(null),
    b = (0, $.useRef)(void 0),
    x = (0, $.useRef)(void 0),
    S;
  n[12] !== i || n[13] !== l || n[14] !== d || n[15] !== g || n[16] !== f || n[17] !== _
    ? ((S = () => ({
        ...i,
        isShoppingResearch:
          d?.type === `product` && i.surface !== `block` ? me(g, _, d) : i.isShoppingResearch,
        product: l,
        productId: l.id ?? ``,
        imageUrl: f,
        isVirtualTryOnImage: l.shopping_vto?.generated_images?.some((e) => e.vto_image_url === f),
      })),
      (n[12] = i),
      (n[13] = l),
      (n[14] = d),
      (n[15] = g),
      (n[16] = f),
      (n[17] = _),
      (n[18] = S))
    : (S = n[18]);
  let C = S,
    w;
  n[19] !== C || n[20] !== g ? ((w = () => Re(g, C())), (n[19] = C), (n[20] = g), (n[21] = w)) : (w = n[21]);
  let T = (0, $.useEffectEvent)(w),
    E;
  n[22] !== a || n[23] !== o || n[24] !== T
    ? ((E = () => {
        if (a == null || y.current === v.current) return;
        let e = !1,
          t = () => {
            e || y.current === v.current || ((e = !0), (b.current = setTimeout(() => T(), a)));
          };
        return (
          o === `lazy` && v.current != null && typeof IntersectionObserver < `u`
            ? ((x.current = new IntersectionObserver((e) => {
                let [n] = e;
                n.isIntersecting && (x.current?.disconnect(), t());
              })),
              x.current.observe(v.current))
            : t(),
          () => {
            (clearTimeout(b.current), x.current?.disconnect());
          }
        );
      }),
      (n[22] = a),
      (n[23] = o),
      (n[24] = T),
      (n[25] = E))
    : (E = n[25]);
  let D;
  (n[26] !== a || n[27] !== o || n[28] !== f
    ? ((D = [f, a, o]), (n[26] = a), (n[27] = o), (n[28] = f), (n[29] = D))
    : (D = n[29]),
    (0, $.useEffect)(E, D));
  let O;
  n[30] !== C || n[31] !== c || n[32] !== g
    ? ((O = (e) => {
        ((y.current = e.currentTarget), clearTimeout(b.current), x.current?.disconnect(), Q(g, C()), c?.(e));
      }),
      (n[30] = C),
      (n[31] = c),
      (n[32] = g),
      (n[33] = O))
    : (O = n[33]);
  let k;
  n[34] !== C || n[35] !== r || n[36] !== s || n[37] !== g
    ? ((k = (e) => {
        ((y.current = e.currentTarget), clearTimeout(b.current), x.current?.disconnect());
        let t = Ge(e.currentTarget);
        (r ? Q(g, { ...C(), imageFetchResponseStatus: t }) : Le(g, C(), e, { imageFetchResponseStatus: t }),
          s?.(e));
      }),
      (n[34] = C),
      (n[35] = r),
      (n[36] = s),
      (n[37] = g),
      (n[38] = k))
    : (k = n[38]);
  let A;
  return (
    n[39] !== h || n[40] !== o || n[41] !== u || n[42] !== f || n[43] !== O || n[44] !== k
      ? ((A = (0, qe.jsx)(`img`, { ref: v, ...u, alt: h, src: f, loading: o, onLoad: O, onError: k }, f)),
        (n[39] = h),
        (n[40] = o),
        (n[41] = u),
        (n[42] = f),
        (n[43] = O),
        (n[44] = k),
        (n[45] = A))
      : (A = n[45]),
    A
  );
}
function Ge(e) {
  try {
    if (typeof performance > `u` || typeof performance.getEntriesByName != `function`) return;
    let t = performance.getEntriesByName(e.currentSrc || e.src, `resource`);
    for (let e of t.toReversed())
      if (e.entryType === `resource` && `responseStatus` in e && typeof e.responseStatus == `number`)
        return e.responseStatus;
  } catch {}
}
var Ke, $, qe;
function Je() {
  return (Je = e(() => {
    ((Ke = f()), b(), ($ = o()), n(), de(), oe(), Ue(), (qe = c()));
  }))();
}
function Ye(e) {
  let t = (0, Xe.c)(5),
    { alt: n, compact: r } = e,
    o = r !== void 0 && r ? p : a,
    s;
  t[0] === o ? (s = t[1]) : ((s = (0, Ze.jsx)(i, { asset: o })), (t[0] = o), (t[1] = s));
  let c;
  return (
    t[2] !== n || t[3] !== s
      ? ((c = (0, Ze.jsx)(`div`, {
          "data-theme": `light`,
          className: `absolute inset-0 flex items-center justify-center text-tertiary`,
          role: `img`,
          "aria-label": n,
          children: s,
        })),
        (t[2] = n),
        (t[3] = s),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
var Xe, Ze;
function Qe() {
  return (Qe = e(() => {
    ((Xe = f()), l(), d(), u(), (Ze = c()));
  }))();
}
export { Ue as a, xe as c, ve as d, Je as i, U as l, Qe as n, Z as o, We as r, ye as s, Ye as t, _e as u };
//# sourceMappingURL=product-image-placeholder-138c9a2a6059.js.map
