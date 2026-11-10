import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  Ixt as r,
  Mz as i,
  Nz as a,
  Pxt as o,
  TLt as s,
  VDt as c,
  Xl as l,
  YA as u,
  Yl as d,
  ZA as f,
  aSt as p,
  hot as m,
  jDt as h,
  lot as g,
  nA as _,
  nSt as v,
  pIt as y,
  rA as b,
  vzt as x,
  wot as S,
  xMt as C,
  yzt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as T,
  FFr as E,
  GMr as D,
  Iwr as O,
  OPr as k,
  Pdt as A,
  XMr as j,
  Xl as ee,
  Zl as M,
  bOn as N,
  cut as P,
  dIn as F,
  dut as I,
  gwr as te,
  jPr as L,
  lIr as ne,
  lut as re,
  nc as ie,
  qwr as ae,
  rc as oe,
  sIr as R,
  tNr as z,
  uIn as se,
  uut as ce,
  wOn as le,
  zFr as ue,
} from "./app-initial-5851df3f6cb1.js";
import { n as de, t as fe } from "./inline-reference-trigger-3262d63a1649.js";
import { d as pe, n as me, t as he, u as ge } from "./chatgpt-product-analytics-d7be3b581237.js";
function _e(e, t, n, r, i) {
  let a = e.get(D),
    o = e.get(j),
    s = e.get(R).pathname;
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
  if (e.get(B, c)) return;
  let l = !1,
    u,
    d = async () => {
      try {
        let t = await ce();
        if (l || e.get(D) !== a || e.get(j) !== o || e.get(R).pathname !== s || e.get(B, c)) return;
        (e.set(B, c, !0), t(e, n, r, i));
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
var B;
function ve() {
  return (ve = e(() => {
    (P(), o(), ne(), z(), T(), (B = p(te, (e) => !1)));
  }))();
}
async function ye(e, t, n, r) {
  let i = e.get(D),
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
    u = e.get(E),
    d = await I(),
    f = e.get(E);
  i === e.get(D) && f?.pathname === u?.pathname && f?.search === u?.search && d(e, l, r);
}
var be;
function V() {
  return (V = e(() => {
    (P(),
      o(),
      z(),
      ue(),
      ae(),
      le(),
      (be = v(O, (e, { get: t }) => (e.accountId !== t(D) || t(N, e.turn.conversationId) ? null : e))));
  }))();
}
function xe(e) {
  let t = (0, H.c)(15),
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
    h = oe();
  if (h == null) {
    let e;
    return (
      t[0] === a ? (e = t[1]) : ((e = (0, W.jsx)(W.Fragment, { children: a })), (t[0] = a), (t[1] = e)),
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
      ? ((g = (0, W.jsxs)(W.Fragment, {
          children: [
            (0, W.jsx)(W.Fragment, {
              children: (0, W.jsx)(Se, {
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
function Se(e) {
  let t = (0, H.c)(41),
    {
      className: n,
      children: i,
      context: a,
      "data-testid": o,
      fallback: s,
      inline: l,
      product: d,
      productIndex: f,
      reference: p,
      onBack: h,
      surfaceLocation: g,
      engagementReference: _,
    } = e,
    v = g === void 0 ? `response` : g,
    y = r(te),
    b = c(),
    x = (0, U.useRef)(null),
    S = (0, U.useContext)(ee);
  if (y.value.routeKind !== `chatgpt-thread`) {
    let e;
    return (
      t[0] === s ? (e = t[1]) : ((e = (0, W.jsx)(W.Fragment, { children: s })), (t[0] = s), (t[1] = e)),
      e
    );
  }
  if (
    v === `response` &&
    a.productDetailsInteractionSource !== `browse` &&
    (a.productDetailsSidebarType == null || a.productDetailsSidebarType === `product`) &&
    (d.provider !== `baklava_product_feed` || d.product_lookup_key == null) &&
    d.offers == null &&
    d.url?.trim() &&
    u(d.url) != null &&
    s != null
  ) {
    let e;
    return (
      t[2] === s ? (e = t[3]) : ((e = (0, W.jsx)(W.Fragment, { children: s })), (t[2] = s), (t[3] = e)),
      e
    );
  }
  let C = p == null ? -1 : a.contentReferences.indexOf(p),
    w = a.contentReferenceMessageIds?.[C] ?? a.messageId,
    T =
      a.productDetailsInteractionSource ??
      (p?.type === `product` || p?.type === `product_entity` ? `inline_link` : `carousel`),
    E = a.shouldBlockExternalEgress || S === `restricted`,
    O;
  t[4] !== a || t[5] !== f || t[6] !== p || t[7] !== w || t[8] !== T || t[9] !== E
    ? ((O = {
        ...a,
        messageId: w,
        productReference: p,
        productDetailsProductIndex: f,
        productDetailsInteractionSource: T,
        shouldBlockExternalEgress: E,
      }),
      (t[4] = a),
      (t[5] = f),
      (t[6] = p),
      (t[7] = w),
      (t[8] = T),
      (t[9] = E),
      (t[10] = O))
    : (O = t[10]);
  let k = O,
    A;
  t[11] !== _ ||
  t[12] !== b ||
  t[13] !== h ||
  t[14] !== d ||
  t[15] !== k ||
  t[16] !== f ||
  t[17] !== p ||
  t[18] !== y ||
  t[19] !== v
    ? ((A = async (e) => {
        let t = y.get(D),
          n = y.get(R).pathname;
        if (t == null || y.value.routeKind !== `chatgpt-thread` || n !== y.value.pathname) return;
        let r =
            p?.type === `product_entity` && e.currentTarget.closest(`th`) != null
              ? { ...k, productReference: { ...p, render_as: `table` } }
              : k,
          i = JSON.stringify([k.messageId, p?.start_idx, d.id]);
        (me(
          y,
          d,
          r,
          f,
          (p?.type !== `product` && r.productReference?.render_as !== `table`) ||
            p?.render_as === `block` ||
            x.current !== i,
          { target: e.target, reference: _, surfaceLocation: v },
        ),
          (x.current = i));
        try {
          let e = await re();
          if (y.get(D) !== t || y.get(R).pathname !== n) return;
          e(
            y,
            d,
            r,
            b.locale,
            void 0,
            void 0,
            h,
            r.messageId == null || r.shouldBlockExternalEgress || h != null
              ? void 0
              : (e) => {
                  ye(y, r, { type: `explore_more` }, e);
                },
          );
        } catch {
          y.get(D) === t &&
            y.get(R).pathname === n &&
            y
              .get(m)
              .danger(
                b.formatMessage({
                  id: `chatgpt.productDetails.openError`,
                  defaultMessage: `Couldn't open product details. Try again.`,
                  description: `Error shown when loading the shopping product details panel fails`,
                }),
                { errorAnalytics: { toastId: `chatgpt.productDetails.openError` } },
              );
        }
      }),
      (t[11] = _),
      (t[12] = b),
      (t[13] = h),
      (t[14] = d),
      (t[15] = k),
      (t[16] = f),
      (t[17] = p),
      (t[18] = y),
      (t[19] = v),
      (t[20] = A))
    : (A = t[20]);
  let j = A,
    M = l ? fe : `button`,
    N;
  t[21] !== b.locale || t[22] !== d || t[23] !== k || t[24] !== y || t[25] !== v
    ? ((N = (e) => (e == null || v !== `response` ? void 0 : _e(y, e, d, k, b.locale))),
      (t[21] = b.locale),
      (t[22] = d),
      (t[23] = k),
      (t[24] = y),
      (t[25] = v),
      (t[26] = N))
    : (N = t[26]);
  let P;
  t[27] !== b || t[28] !== d.title
    ? ((P = b.formatMessage(
        {
          id: `chatgpt.productDetails.open`,
          defaultMessage: `View details for {product}`,
          description: `Accessible label for opening details about a shopping product`,
        },
        { product: d.title },
      )),
      (t[27] = b),
      (t[28] = d.title),
      (t[29] = P))
    : (P = t[29]);
  let F = l ? void 0 : `button`,
    I;
  t[30] === j ? (I = t[31]) : ((I = (e) => void j(e)), (t[30] = j), (t[31] = I));
  let L;
  return (
    t[32] !== M ||
    t[33] !== i ||
    t[34] !== n ||
    t[35] !== I ||
    t[36] !== N ||
    t[37] !== P ||
    t[38] !== F ||
    t[39] !== o
      ? ((L = (0, W.jsx)(M, {
          ref: N,
          className: n,
          "aria-label": P,
          "data-testid": o,
          type: F,
          onClick: I,
          children: i,
        })),
        (t[32] = M),
        (t[33] = i),
        (t[34] = n),
        (t[35] = I),
        (t[36] = N),
        (t[37] = P),
        (t[38] = F),
        (t[39] = o),
        (t[40] = L))
      : (L = t[40]),
    L
  );
}
var H, U, W;
function Ce() {
  return (Ce = e(() => {
    ((H = x()),
      P(),
      o(),
      (U = w()),
      h(),
      ne(),
      z(),
      g(),
      f(),
      M(),
      T(),
      de(),
      he(),
      ve(),
      ie(),
      V(),
      (W = C()));
  }))();
}
function G(e) {
  let t = He.get(e.node);
  return (t ?? ((t = { attempts: new Set(), failures: new Set() }), He.set(e.node, t)), t);
}
function we({ product: e, productId: t, citationType: n, surface: r }) {
  return JSON.stringify([t || (e.product_lookup_key?.data ? e.product_lookup_key : e.url || e.title), n, r]);
}
function Te(
  e,
  {
    product: t,
    productId: n,
    imageUrl: r,
    citationType: i,
    surface: a,
    isShoppingResearch: o,
    isVirtualTryOnImage: c = !1,
  },
) {
  let l = Fe(r),
    u = l === `images.openai.com`,
    d = u ? Ie(r) : ``,
    f = e.get(L)?.getContext().user,
    p = f?.country,
    m = Ee(),
    h = Oe(r);
  return {
    product_id: n,
    citation_type: i,
    surface: a,
    image_url: c || (r !== `` && !/^https?:\/\//i.test(r)) ? void 0 : r,
    tags: c ? [`vto_image`] : void 0,
    image_url_hostname: l,
    from_oai_images: u,
    is_authenticated: f?.custom?.auth_status == null ? void 0 : f.custom.auth_status === `logged_in`,
    ...m,
    ...h,
    oai_img_path_prefix: d || void 0,
    has_showcase_metadata: !!t.showcase_metadata,
    provider: y(s()).safeParse(t.providers).data?.[0] ?? t.provider,
    user_country: p,
    is_shopping_research: o,
  };
}
function Ee() {
  let e = {};
  if (
    typeof navigator > `u` ||
    (typeof navigator.onLine == `boolean` && (e.client_online = navigator.onLine),
    !De(navigator) || !navigator.connection)
  )
    return e;
  let { connection: t } = navigator;
  typeof t.effectiveType == `string` &&
    t.effectiveType.length > 0 &&
    (e.client_effective_connection_type = t.effectiveType);
  let n = K(t.rtt);
  n !== void 0 && (e.client_rtt_ms = n);
  let r = K(t.downlink);
  return (
    r !== void 0 && (e.client_downlink_mbps = r),
    typeof t.saveData == `boolean` && (e.client_save_data = t.saveData),
    e
  );
}
function De(e) {
  return `connection` in e;
}
function Oe(e) {
  let t = { image_resource_timing_available: !1 };
  if (!e || typeof performance > `u` || typeof performance.getEntriesByName != `function`) return t;
  try {
    let n = ke(e);
    if (!n) return t;
    t.image_resource_timing_available = !0;
    let r = K(n.responseStatus);
    r !== void 0 && ((t.image_resource_response_status = r), (t.image_resource_status_bucket = je(r)));
    let i = K(n.duration);
    i !== void 0 && (t.image_resource_duration_ms = i);
    let a = K(n.responseStart);
    a !== void 0 && (t.image_resource_response_start_ms = a);
    let o = K(n.responseEnd);
    o !== void 0 && (t.image_resource_response_end_ms = o);
    let s = K(n.transferSize);
    s !== void 0 && (t.image_resource_transfer_size_bytes = s);
    let c = K(n.encodedBodySize);
    c !== void 0 && (t.image_resource_encoded_body_size_bytes = c);
    let l = K(n.decodedBodySize);
    (l !== void 0 && (t.image_resource_decoded_body_size_bytes = l),
      n.nextHopProtocol && (t.image_resource_next_hop_protocol = n.nextHopProtocol));
  } catch {
    return t;
  }
  return t;
}
function ke(e) {
  let t = performance.getEntriesByName(e, `resource`);
  for (let e = t.length - 1; e >= 0; --e) {
    let n = t[e];
    if (Ae(n)) return n;
  }
}
function Ae(e) {
  return e.entryType === `resource`;
}
function K(e) {
  return typeof e == `number` && Number.isFinite(e) ? e : void 0;
}
function je(e) {
  return e === 0 ? `no_http_response` : e >= 100 && e < 600 ? `${Math.floor(e / 100)}xx` : `unknown`;
}
function Me(e, t) {
  return {
    citation_type: e.citation_type,
    surface: e.surface,
    reason: t,
    product_provider: e.provider ?? `unknown`,
    has_showcase_metadata: q(e.has_showcase_metadata),
    from_oai_images: q(e.from_oai_images),
    image_origin: Ne(e),
    oai_img_path_prefix: Pe(e.oai_img_path_prefix),
    image_resource_timing_available: q(e.image_resource_timing_available),
    image_resource_response_status: e.image_resource_response_status?.toString() ?? `unknown`,
    image_resource_status_bucket: e.image_resource_status_bucket ?? `unknown`,
    client_online: q(e.client_online),
    client_effective_connection_type: e.client_effective_connection_type ?? `unknown`,
    client_save_data: q(e.client_save_data),
    user_country: e.user_country ?? `unknown`,
    is_authenticated: q(e.is_authenticated),
    is_shopping_research: q(e.is_shopping_research),
  };
}
function q(e) {
  return e === void 0 ? `unknown` : e ? `true` : `false`;
}
function Ne(e) {
  return e.image_url
    ? e.from_oai_images
      ? `oai_images`
      : e.image_url_hostname
        ? `external`
        : `invalid_url`
    : `missing_url`;
}
function Pe(e) {
  let t = e?.split(`/`).filter(Boolean).join(`_`);
  return t && t.length > 0 ? t : `none`;
}
function J(e, t, n, r) {
  e.get(se).count(`shopping`, t, Me(n, r));
}
function Fe(e) {
  if (!e) return ``;
  try {
    return new URL(e).hostname;
  } catch {
    return ``;
  }
}
function Ie(e) {
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
function Le() {
  let e = Error(`Product image load error`);
  return (
    typeof Error.captureStackTrace == `function` && Error.captureStackTrace(e, Re),
    Z(e.stack?.trim() || e.message)
  );
}
function Re(e) {
  if (e instanceof Error) {
    let t = e.name || `Error`,
      n = e.message.trim(),
      r = n ? `${t}: ${n}` : t;
    return Z(e.stack?.trim() || r);
  }
  return typeof e == `string` && e ? Z(e) : Le();
}
function Y(e, t) {
  let { reason: n } = t,
    r = we(t);
  if (G(e).failures.has(r)) return;
  G(e).failures.add(r);
  let i = Te(e, t);
  (Ve(`shopping.product_image.not_rendered`, {
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
    J(e, `product_image.not_rendered`, i, n),
    n === `missing_url` && J(e, Q, i, n));
}
function X(e, t) {
  let { imageFetchResponseStatus: n } = t,
    r = we(t);
  if (G(e).attempts.has(r)) return;
  G(e).attempts.add(r);
  let i = Te(e, t);
  (Ve(`shopping.product_image.load_attempt`, { ...i, image_fetch_response_status: n }),
    J(e, Q, i, `load_attempt`));
}
function ze(e, t, n, r) {
  (X(e, { ...t, imageFetchResponseStatus: r?.imageFetchResponseStatus }),
    Y(e, { ...t, reason: `load_error`, errorStackTrace: Re(n) }));
}
function Be(e, t) {
  (X(e, t), Y(e, { ...t, reason: `load_timeout` }));
}
function Z(e) {
  return e.length > 2e3 ? e.slice(0, 2e3) + `…` : e;
}
function Ve(e, t) {
  let n = {};
  for (let [e, r] of Object.entries(t)) r !== void 0 && (n[e] = r);
}
var Q, He;
function Ue() {
  return (Ue = e(() => {
    (n(), F(), A(), k(), (Q = `product_image.render_opportunity`), (He = new WeakMap()));
  }))();
}
function We(e) {
  let n = (0, Ke.c)(46),
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  n[0] === e
    ? ((i = n[1]),
      (a = n[2]),
      (o = n[3]),
      (s = n[4]),
      (c = n[5]),
      (l = n[6]),
      (u = n[7]),
      (d = n[8]),
      (f = n[9]),
      (p = n[10]),
      (m = n[11]))
    : (({
        product: u,
        reference: f,
        imageAnalytics: a,
        hasFallbackImage: i,
        loadTimeoutMs: o,
        onLoad: l,
        onError: c,
        src: p,
        alt: m,
        loading: s,
        ...d
      } = e),
      (n[0] = e),
      (n[1] = i),
      (n[2] = a),
      (n[3] = o),
      (n[4] = s),
      (n[5] = c),
      (n[6] = l),
      (n[7] = u),
      (n[8] = d),
      (n[9] = f),
      (n[10] = p),
      (n[11] = m));
  let h = m === void 0 ? `` : m,
    g = r(t),
    _ = oe(),
    v = (0, $.useRef)(null),
    y = (0, $.useRef)(null),
    b = (0, $.useRef)(void 0),
    x = (0, $.useRef)(void 0),
    S;
  n[12] !== a || n[13] !== u || n[14] !== f || n[15] !== g || n[16] !== p || n[17] !== _
    ? ((S = () => ({
        ...a,
        isShoppingResearch:
          f?.type === `product` && a.surface !== `block` ? pe(g, _, f) : a.isShoppingResearch,
        product: u,
        productId: u.id ?? ``,
        imageUrl: p,
        isVirtualTryOnImage: u.shopping_vto?.generated_images?.some((e) => e.vto_image_url === p),
      })),
      (n[12] = a),
      (n[13] = u),
      (n[14] = f),
      (n[15] = g),
      (n[16] = p),
      (n[17] = _),
      (n[18] = S))
    : (S = n[18]);
  let C = S,
    w;
  n[19] !== C || n[20] !== g ? ((w = () => Be(g, C())), (n[19] = C), (n[20] = g), (n[21] = w)) : (w = n[21]);
  let T = (0, $.useEffectEvent)(w),
    E;
  n[22] !== o || n[23] !== s || n[24] !== T
    ? ((E = () => {
        if (o == null || y.current === v.current) return;
        let e = !1,
          t = () => {
            e || y.current === v.current || ((e = !0), (b.current = setTimeout(() => T(), o)));
          };
        return (
          s === `lazy` && v.current != null && typeof IntersectionObserver < `u`
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
      (n[22] = o),
      (n[23] = s),
      (n[24] = T),
      (n[25] = E))
    : (E = n[25]);
  let D;
  (n[26] !== o || n[27] !== s || n[28] !== p
    ? ((D = [p, o, s]), (n[26] = o), (n[27] = s), (n[28] = p), (n[29] = D))
    : (D = n[29]),
    (0, $.useEffect)(E, D));
  let O;
  n[30] !== C || n[31] !== l || n[32] !== g
    ? ((O = (e) => {
        ((y.current = e.currentTarget), clearTimeout(b.current), x.current?.disconnect(), X(g, C()), l?.(e));
      }),
      (n[30] = C),
      (n[31] = l),
      (n[32] = g),
      (n[33] = O))
    : (O = n[33]);
  let k;
  n[34] !== C || n[35] !== i || n[36] !== c || n[37] !== g
    ? ((k = (e) => {
        ((y.current = e.currentTarget), clearTimeout(b.current), x.current?.disconnect());
        let t = Ge(e.currentTarget);
        (i ? X(g, { ...C(), imageFetchResponseStatus: t }) : ze(g, C(), e, { imageFetchResponseStatus: t }),
          c?.(e));
      }),
      (n[34] = C),
      (n[35] = i),
      (n[36] = c),
      (n[37] = g),
      (n[38] = k))
    : (k = n[38]);
  let A;
  return (
    n[39] !== h || n[40] !== s || n[41] !== d || n[42] !== p || n[43] !== O || n[44] !== k
      ? ((A = (0, qe.jsx)(`img`, { ref: v, ...d, alt: h, src: p, loading: s, onLoad: O, onError: k }, p)),
        (n[39] = h),
        (n[40] = s),
        (n[41] = d),
        (n[42] = p),
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
    ((Ke = x()), o(), ($ = w()), S(), ge(), ie(), Ue(), (qe = C()));
  }))();
}
function Ye(e) {
  let t = (0, Xe.c)(5),
    { alt: n, compact: r } = e,
    a = r !== void 0 && r ? l : b,
    o;
  t[0] === a ? (o = t[1]) : ((o = (0, Ze.jsx)(i, { asset: a })), (t[0] = a), (t[1] = o));
  let s;
  return (
    t[2] !== n || t[3] !== o
      ? ((s = (0, Ze.jsx)(`div`, {
          "data-theme": `light`,
          className: `absolute inset-0 flex items-center justify-center text-tertiary`,
          role: `img`,
          "aria-label": n,
          children: o,
        })),
        (t[2] = n),
        (t[3] = o),
        (t[4] = s))
      : (s = t[4]),
    s
  );
}
var Xe, Ze;
function Qe() {
  return (Qe = e(() => {
    ((Xe = x()), d(), _(), a(), (Ze = C()));
  }))();
}
export { Ue as a, Ce as c, be as d, Je as i, V as l, Qe as n, Y as o, We as r, xe as s, Ye as t, ye as u };
//# sourceMappingURL=product-image-placeholder-81b1dc646f67.js.map
