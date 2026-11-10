import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  AO as n,
  Brt as r,
  CO as i,
  CPt as a,
  Cot as o,
  IDt as s,
  Irt as c,
  Ixt as l,
  Jbt as u,
  Pxt as d,
  RSt as ee,
  SPt as f,
  TO as te,
  Vxt as ne,
  e3 as re,
  hz as p,
  jDt as m,
  mz as ie,
  rst as h,
  t3 as ae,
  vzt as oe,
  wot as se,
  xMt as g,
  yzt as _,
  zSt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Dr as y,
  AOn as b,
  B1t as x,
  Bl as S,
  GMr as ce,
  HGn as le,
  IXn as ue,
  JPn as C,
  Ll as w,
  QDr as T,
  Qb as E,
  Rl as D,
  Ul as O,
  VGn as k,
  XDr as A,
  XPn as de,
  Xb as fe,
  Xl as pe,
  Yb as me,
  Zl as j,
  e$n as M,
  eDr as N,
  eOr as P,
  iZn as F,
  kOn as he,
  nDr as ge,
  nx as _e,
  ox as I,
  pZn as L,
  rx as R,
  t$n as ve,
  tNr as z,
  tx as B,
  vXn as V,
  yXn as H,
  yjn as U,
  z1t as ye,
} from "./app-initial-5851df3f6cb1.js";
import { i as W, n as be } from "./chatgpt-ecosystem-widget-86361a1e1747.js";
import { n as G, r as xe, t as K } from "./engagement-4e2b4c5a0bbe.js";
import { n as q, r as Se } from "./chatgpt-ecosystem-widget-launch-2a2c56ed75ca.js";
import { n as Ce, t as J } from "./use-ecosystem-widget-launch-7c7990ac8eb9.js";
import { n as we, r as Y, t as Te } from "./quote-action-5a2dc8ce8a55.js";
function Ee(e, t, n) {
  try {
    let { contentReferenceIndex: r, entityMetadata: i, provider: a, shownEvents: o, turnContext: s } = n,
      c = s.contentReferenceMessageIds?.[r] ?? s.messageId,
      l = e.get(L, s.browserConversationId ?? s.conversationId);
    if (e.get(P) === y || (t === `shown` && l == null) || c == null || c.startsWith(`WEB:`)) return;
    let u = X(n);
    if (t === `shown` && o.current.has(u)) return;
    let d = k(a?.launcherPayload?.appUri);
    (t === `clicked` &&
      n.presentation === `hover` &&
      T(e, B, {
        actionType: me.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        linkType: R.CHATGPT_LINK_TYPE_LOCAL_BUSINESS_RESERVATION,
        linkAffordance: _e.CHATGPT_LINK_AFFORDANCE_BUTTON,
        contentReferenceType: `map`,
        url: d ?? void 0,
        conversationId: l ?? void 0,
        messageId: c,
        assistantMessageId: c,
        turnOrdinal: K(e, s.browserConversationId ?? s.conversationId, c),
        parentContext: {
          entityId: k(i.entity_data?.id) ?? void 0,
          entityCategory: `local_business`,
          messageId: c,
        },
        surfaceLocation: fe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      }),
      T(e, S, {
        eventType:
          t === `shown`
            ? D.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN
            : D.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED,
        action:
          t === `shown` ? w.CHATGPT_CONTENT_REFERENCE_ACTION_SHOW : w.CHATGPT_CONTENT_REFERENCE_ACTION_CLICK,
        conversationId: l ?? void 0,
        messageId: c,
        contentReferenceType: n.presentation === `hover` ? `map` : `entity_metadata`,
        businessId: k(i.entity_data?.id) ?? void 0,
        ctaType: `reserve`,
        linkType: `local_business_reservation`,
        ctaSurface: Z(n),
        sectionLocation: `response`,
        connectorId: d == null ? void 0 : V(void 0, d)?.connectorId,
      }),
      t === `shown` && o.current.add(u));
  } catch {}
}
function X(e) {
  let {
    contentReferenceIndex: t,
    entityMetadata: n,
    provider: r,
    reservationWebsiteUrl: i,
    turnContext: a,
  } = e;
  return ee([
    a.browserConversationId ?? a.conversationId,
    a.contentReferenceMessageIds?.[t] ?? a.messageId,
    k(n.entity_data?.id),
    Z(e),
    r?.provider,
    k(r?.provider_restaurant_id),
    k(r?.launcherPayload?.appUri),
    r?.launcherPayload?.toolInput,
    i,
  ]);
}
function Z(e) {
  return e.presentation === `hover`
    ? `map_card`
    : e.entityMetadata.layout === `two-lines`
      ? `business_metadata`
      : `business_sidebar`;
}
function De() {
  return (De = e(() => {
    (O(), I(), v(), A(), H(), U(), G());
  }))();
}
function Oe(e) {
  let n = (0, Fe.c)(83),
    {
      children: r,
      contentReferenceIndex: i,
      onReservationPickerOpenChange: a,
      presentation: d,
      reference: ee,
      turnContext: f,
    } = e,
    p = d === void 0 ? `metadata` : d,
    m = l(o),
    h = ne(ce),
    ae = (0, Q.useRef)(new Set()),
    oe = (0, Q.useContext)(pe),
    se = ge(`2673474834`),
    g = ue(ee),
    _;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = he()), (n[0] = _)) : (_ = n[0]);
  let v = ge(_),
    y;
  n[1] !== h || n[2] !== v
    ? ((y = (e) => h != null && v && e.launcherPayload != null), (n[1] = h), (n[2] = v), (n[3] = y))
    : (y = n[3]);
  let b = (g?.entity_data?.reservation_providers ?? []).filter(y),
    x;
  n[4] !== i || n[5] !== m || n[6] !== f
    ? ((x = {
        launch: (e) => {
          let t = f.browserConversationId ?? f.conversationId;
          if (ve(t)) throw Error(`Wait for this conversation to finish saving, then try again.`);
          return Se({
            scope: m,
            hostId: f.hostId,
            chatGptConversationId: t,
            payload: e,
            sourceMessageId: f.contentReferenceMessageIds?.[i] ?? f.messageId,
          });
        },
        onError: Ae,
      }),
      (n[4] = i),
      (n[5] = m),
      (n[6] = f),
      (n[7] = x))
    : (x = n[7]);
  let S = Ce(x);
  if (g == null || g.layout === `one-line` || f.shouldBlockExternalEgress || oe === `restricted`) {
    let e;
    return (n[8] === r ? (e = n[9]) : ((e = r?.(null) ?? null), (n[8] = r), (n[9] = e)), e);
  }
  let C =
      h != null && p !== `hover` && !g.entity_data?.reservation_providers?.some(ke) && se
        ? Ne(g.entity_data?.reservation_providers)
        : null,
    w = k(g.metadata?.map_url),
    T = k(g.entity_data?.website_url),
    D = k(g.entity_data?.phone),
    O = b.length > 0 || C != null,
    A = ye(g.entity_data?.service_providers),
    j = h != null && v && (f.canRequestQuote ?? !f.isReadOnly) && !O && A.length > 0,
    M = D != null && ((!O && !j) || w == null || T == null),
    N = Number(O) + Number(j) + Number(w != null) + Number(T != null) + Number(M);
  if (N === 0 || (g.layout === `two-lines` && N <= 1)) {
    let e;
    return (n[10] === r ? (e = n[11]) : ((e = r?.(null) ?? null), (n[10] = r), (n[11] = e)), e);
  }
  let P = {
      contentReferenceIndex: i,
      entityMetadata: g,
      reservationWebsiteUrl: C,
      shownEvents: ae,
      turnContext: f,
      presentation: p,
    },
    F = (e) => {
      let t = f.contentReferenceMessageIds?.[i] ?? f.messageId;
      xe(m, {
        actionType: me.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        entityAffordance: e,
        entityId: k(g.entity_data?.id) ?? void 0,
        entityCategory: g.entity_type,
        messageId: t,
        assistantMessageId: t,
        conversationId: f.browserConversationId ?? f.conversationId,
        contentReferenceStartIndex: c(le(ee.start_idx)),
        contentReferenceType: p === `hover` ? `entity` : g.type,
        surfaceLocation: (p === `hover` ? f.conversationType !== `sidebar` : g.layout === `two-lines`)
          ? fe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE
          : fe.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        isGenui: !1,
      });
    },
    _e = (e, t) => {
      (p !== `hover` && F(t),
        Ee(m, `clicked`, { ...P, provider: e }),
        p === `hover` && ie(),
        S.launch(e.launcherPayload));
    },
    I = (e, t, n) => {
      (F(n), de({ event: e, href: t, initiator: `markdown_link_click`, originHostId: f.hostId }));
    },
    L = p === `hover` ? `flex-auto justify-center` : void 0,
    R = p === `hover` ? `dialog` : `entityAction`,
    z = p === `hover` || N >= 2 ? `primary` : `outlineSurface`,
    B = null;
  if (b.length > 1) {
    let e = p === `hover` ? `cardAction` : `entityAction`,
      r;
    n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(s, {
          id: `chatgpt.entityMetadata.reserve`,
          defaultMessage: `Reserve`,
          description: `Action label for making a reservation at a local business`,
        })),
        (n[12] = r))
      : (r = n[12]);
    let i;
    (n[13] !== L || n[14] !== z || n[15] !== e
      ? ((i = (0, $.jsx)(t, { className: L, color: z, radius: `full`, size: e, children: r })),
        (n[13] = L),
        (n[14] = z),
        (n[15] = e),
        (n[16] = i))
      : (i = n[16]),
      (B = (0, $.jsx)(Me, {
        onReservationPickerOpenChange: a,
        onOpenChange: (e) => {
          e && p !== `hover` && F(E.CHATGPT_ENTITY_AFFORDANCE_RESERVE);
        },
        triggerButton: i,
        children: b.map((e, t) =>
          (0, $.jsxs)(
            te.Item,
            {
              onClick: () => _e(e, E.CHATGPT_ENTITY_AFFORDANCE_RESERVE_PROVIDER),
              children: [
                (0, $.jsx)(je, { ...P, provider: e }),
                Pe(e) ??
                  (0, $.jsx)(s, {
                    id: `chatgpt.entityMetadata.reservationProvider`,
                    defaultMessage: `Reservation`,
                    description: `Fallback label for a reservation provider when its name is unavailable`,
                  }),
              ],
            },
            `${e.provider ?? `reservation`}-${String(t)}`,
          ),
        ),
      })));
  } else if (b[0] != null) {
    let e = p === `hover` ? `cardAction` : `entityAction`,
      r = () => _e(b[0], E.CHATGPT_ENTITY_AFFORDANCE_RESERVE),
      i;
    n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(s, {
          id: `chatgpt.entityMetadata.reserve`,
          defaultMessage: `Reserve`,
          description: `Action label for making a reservation at a local business`,
        })),
        (n[17] = i))
      : (i = n[17]);
    let a;
    (n[18] !== L || n[19] !== z || n[20] !== e || n[21] !== r
      ? ((a = (0, $.jsx)(t, { className: L, color: z, radius: `full`, size: e, onClick: r, children: i })),
        (n[18] = L),
        (n[19] = z),
        (n[20] = e),
        (n[21] = r),
        (n[22] = a))
      : (a = n[22]),
      (B = a));
  } else if (C != null) {
    let e = p === `hover` ? `cardAction` : `entityAction`,
      r = (e) => {
        (Ee(m, `clicked`, { ...P, provider: null }), I(e, C, E.CHATGPT_ENTITY_AFFORDANCE_RESERVE));
      },
      i;
    n[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(s, {
          id: `chatgpt.entityMetadata.reserveWebsite`,
          defaultMessage: `Reserve`,
          description: `Action label for opening a local business reservation website`,
        })),
        (n[23] = i))
      : (i = n[23]);
    let a;
    (n[24] !== L || n[25] !== z || n[26] !== e || n[27] !== r
      ? ((a = (0, $.jsx)(t, { className: L, color: z, radius: `full`, size: e, onClick: r, children: i })),
        (n[24] = L),
        (n[25] = z),
        (n[26] = e),
        (n[27] = r),
        (n[28] = a))
      : (a = n[28]),
      (B = a));
  }
  let V =
      B == null
        ? null
        : (0, $.jsxs)($.Fragment, {
            children: [B, O && b.length <= 1 ? (0, $.jsx)(je, { ...P, provider: b[0] ?? null }) : null],
          }),
    H;
  n[29] !== L ||
  n[30] !== R ||
  n[31] !== i ||
  n[32] !== g ||
  n[33] !== j ||
  n[34] !== F ||
  n[35] !== A ||
  n[36] !== f ||
  n[37] !== N
    ? ((H =
        j &&
        (0, $.jsx)(Te, {
          analyticsMessageId: f.contentReferenceMessageIds?.[i],
          businessId: k(g.entity_data?.id),
          ctaSurface: g.layout === `two-lines` ? `business_metadata` : `business_sidebar`,
          onAction: () => F(E.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
          providers: A,
          trigger: (0, $.jsx)(t, {
            className: L,
            color: N >= 2 ? `primary` : `outlineSurface`,
            radius: `full`,
            size: R,
            children: (0, $.jsx)(we, {}),
          }),
          turnContext: f,
        })),
      (n[29] = L),
      (n[30] = R),
      (n[31] = i),
      (n[32] = g),
      (n[33] = j),
      (n[34] = F),
      (n[35] = A),
      (n[36] = f),
      (n[37] = N),
      (n[38] = H))
    : (H = n[38]);
  let U;
  n[39] !== L || n[40] !== R || n[41] !== j || n[42] !== O || n[43] !== w || n[44] !== I || n[45] !== N
    ? ((U =
        w == null
          ? null
          : (0, $.jsx)(t, {
              className: L,
              color: !O && !j && N >= 2 ? `primary` : `outlineSurface`,
              radius: `full`,
              size: R,
              onClick: (e) => I(e, w, E.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS),
              children: (0, $.jsx)(s, {
                id: `chatgpt.entityMetadata.directions`,
                defaultMessage: `Directions`,
                description: `Action label for opening directions to a local business`,
              }),
            })),
      (n[39] = L),
      (n[40] = R),
      (n[41] = j),
      (n[42] = O),
      (n[43] = w),
      (n[44] = I),
      (n[45] = N),
      (n[46] = U))
    : (U = n[46]);
  let W;
  n[47] !== L ||
  n[48] !== R ||
  n[49] !== j ||
  n[50] !== O ||
  n[51] !== w ||
  n[52] !== I ||
  n[53] !== N ||
  n[54] !== T
    ? ((W =
        T == null
          ? null
          : (0, $.jsx)(t, {
              className: L,
              color: !O && !j && w == null && N >= 2 ? `primary` : `outlineSurface`,
              radius: `full`,
              size: R,
              onClick: (e) => I(e, T, E.CHATGPT_ENTITY_AFFORDANCE_WEBSITE),
              children: (0, $.jsx)(s, {
                id: `chatgpt.entityMetadata.website`,
                defaultMessage: `Website`,
                description: `Action label for opening a local business website`,
              }),
            })),
      (n[47] = L),
      (n[48] = R),
      (n[49] = j),
      (n[50] = O),
      (n[51] = w),
      (n[52] = I),
      (n[53] = N),
      (n[54] = T),
      (n[55] = W))
    : (W = n[55]);
  let G;
  n[56] !== L || n[57] !== R || n[58] !== I || n[59] !== D || n[60] !== M
    ? ((G = M
        ? (0, $.jsx)(re, {
            className: L,
            color: `outlineSurface`,
            href: `tel:${D}`,
            radius: `full`,
            size: R,
            onClick: (e) => I(e, `tel:${D}`, E.CHATGPT_ENTITY_AFFORDANCE_CALL),
            children: (0, $.jsx)(s, {
              id: `chatgpt.entityMetadata.call`,
              defaultMessage: `Call`,
              description: `Action label for calling a local business`,
            }),
          })
        : null),
      (n[56] = L),
      (n[57] = R),
      (n[58] = I),
      (n[59] = D),
      (n[60] = M),
      (n[61] = G))
    : (G = n[61]);
  let K;
  n[62] !== V || n[63] !== H || n[64] !== U || n[65] !== W || n[66] !== G
    ? ((K = (0, $.jsxs)(`div`, {
        className: `mt-3 flex min-w-0 flex-wrap gap-2 select-none`,
        children: [H, V, U, W, G],
      })),
      (n[62] = V),
      (n[63] = H),
      (n[64] = U),
      (n[65] = W),
      (n[66] = G),
      (n[67] = K))
    : (K = n[67]);
  let q = K,
    J;
  n[68] !== q || n[69] !== r || n[70] !== V
    ? ((J = r ? r(V) : q), (n[68] = q), (n[69] = r), (n[70] = V), (n[71] = J))
    : (J = n[71]);
  let Y;
  n[72] !== S.close ||
  n[73] !== S.dialog ||
  n[74] !== f.browserConversationId ||
  n[75] !== f.conversationId ||
  n[76] !== f.hostId
    ? ((Y =
        S.dialog == null
          ? null
          : (0, $.jsx)(be, {
              conversationId: u(f.browserConversationId ?? f.conversationId),
              hostId: f.hostId,
              onClose: S.close,
              state: S.dialog,
            })),
      (n[72] = S.close),
      (n[73] = S.dialog),
      (n[74] = f.browserConversationId),
      (n[75] = f.conversationId),
      (n[76] = f.hostId),
      (n[77] = Y))
    : (Y = n[77]);
  let X;
  n[78] === Y ? (X = n[79]) : ((X = (0, $.jsx)($.Fragment, { children: Y })), (n[78] = Y), (n[79] = X));
  let Z;
  return (
    n[80] !== J || n[81] !== X
      ? ((Z = (0, $.jsxs)($.Fragment, { children: [J, X] })), (n[80] = J), (n[81] = X), (n[82] = Z))
      : (Z = n[82]),
    Z
  );
}
function ke(e) {
  return e.launcherPayload != null;
}
function Ae(e) {
  a.error(`ChatGPT entity reservation launch failed`, { safe: {}, sensitive: { error: e } });
}
function je(e) {
  let t = (0, Fe.c)(12),
    n = l(o),
    r;
  t[0] === e ? (r = t[1]) : ((r = X(e)), (t[0] = e), (t[1] = r));
  let i = r,
    a = e.turnContext.trackShownImpressions !== !1,
    s;
  t[2] === e
    ? (s = t[3])
    : ((s = (t) => {
        Ee(t, `shown`, e);
      }),
      (t[2] = e),
      (t[3] = s));
  let c = (0, Q.useEffectEvent)(s),
    u;
  t[4] !== c || t[5] !== n || t[6] !== a
    ? ((u = () => {
        if (a) return n.watch((e) => c(e));
      }),
      (t[4] = c),
      (t[5] = n),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== i || t[9] !== n || t[10] !== a
      ? ((d = [n, i, a]), (t[8] = i), (t[9] = n), (t[10] = a), (t[11] = d))
      : (d = t[11]),
    (0, Q.useLayoutEffect)(u, d),
    null
  );
}
function Me(e) {
  let t = (0, Fe.c)(15),
    n,
    r,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]))
    : (({ onReservationPickerOpenChange: r, onOpenChange: n, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = a));
  let o;
  t[4] === r
    ? (o = t[5])
    : ((o = () => {
        r?.(!1);
      }),
      (t[4] = r),
      (t[5] = o));
  let s = (0, Q.useEffectEvent)(o),
    c;
  t[6] === s ? (c = t[7]) : ((c = () => () => s()), (t[6] = s), (t[7] = c));
  let l;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = []), (t[8] = l)) : (l = t[8]),
    (0, Q.useLayoutEffect)(c, l));
  let u;
  t[9] !== n || t[10] !== r
    ? ((u = (e) => {
        (r?.(e), n?.(e));
      }),
      (t[9] = n),
      (t[10] = r),
      (t[11] = u))
    : (u = t[11]);
  let d;
  return (
    t[12] !== a || t[13] !== u
      ? ((d = (0, $.jsx)(i, { ...a, onOpenChange: u })), (t[12] = a), (t[13] = u), (t[14] = d))
      : (d = t[14]),
    d
  );
}
function Ne(e) {
  for (let t of e ?? []) {
    let e = k(t.provider_reservation_url);
    if (e != null) return e;
  }
  return null;
}
function Pe(e) {
  return k(e.provider_name) ?? (e.provider == null ? null : (Ie[e.provider] ?? null));
}
var Fe, Q, $, Ie;
function Le() {
  return (Le = e(() => {
    ((Fe = oe()),
      I(),
      r(),
      d(),
      h(),
      F(),
      (Q = _()),
      m(),
      z(),
      ae(),
      n(),
      C(),
      p(),
      b(),
      j(),
      se(),
      N(),
      f(),
      W(),
      q(),
      M(),
      G(),
      x(),
      Y(),
      J(),
      De(),
      ($ = g()),
      (Ie = { opentable: `OpenTable`, resy: `Resy`, yelp: `Yelp` }));
  }))();
}
export { Le as n, Oe as t };
//# sourceMappingURL=entity-metadata-20ad0c486b12.js.map
