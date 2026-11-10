import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qit as o,
  Qst as s,
  RFt as c,
  X3 as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  ZSt as p,
  ck as m,
  iCt as ee,
  iwt as h,
  lB as te,
  nat as ne,
  rk as re,
  rwt as ie,
  sct as ae,
  tk as g,
  tkt as _,
  uB as v,
  uSt as oe,
  zFt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $jn as b,
  $l as x,
  B1n as S,
  Bl as C,
  C1n as w,
  CMr as T,
  Cjr as se,
  Dx as E,
  Gl as D,
  Hl as O,
  L$n as k,
  Mx as A,
  O2n as j,
  Ox as M,
  Qjn as ce,
  Ql as le,
  R$n as N,
  SMr as P,
  SRn as ue,
  Sx as de,
  VPn as fe,
  bRn as F,
  bUt as pe,
  dYn as me,
  k2n as he,
  kx as I,
  t1n as ge,
  uYn as L,
  wLr as R,
  wx as z,
  xMr as B,
  xUt as V,
  xjr as H,
  xx as _e,
  yMr as U,
  zRr as ve,
  zl as W,
} from "./app-initial-ad16eaadf81f.js";
import { i as G, n as ye } from "./chatgpt-ecosystem-widget-f627221f36cd.js";
import { n as K, r as be, t as q } from "./engagement-af28f336ab5e.js";
import { n as xe, r as Se } from "./chatgpt-ecosystem-widget-launch-53c875439c23.js";
import { n as Ce, t as J } from "./use-ecosystem-widget-launch-c611c15f8eee.js";
import { n as we, r as Y, t as Te } from "./quote-action-daf832b35bc9.js";
function Ee(e, t, n) {
  try {
    let { contentReferenceIndex: r, entityMetadata: i, provider: a, shownEvents: o, turnContext: s } = n,
      c = s.contentReferenceMessageIds?.[r] ?? s.messageId,
      l = e.get(S, s.browserConversationId ?? s.conversationId);
    if (e.get(T) === P || (t === `shown` && l == null) || c == null || c.startsWith(`WEB:`)) return;
    let u = X(n);
    if (t === `shown` && o.current.has(u)) return;
    let d = L(a?.launcherPayload?.appUri);
    (t === `clicked` &&
      n.presentation === `hover` &&
      B(e, E, {
        actionType: _e.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        linkType: I.CHATGPT_LINK_TYPE_LOCAL_BUSINESS_RESERVATION,
        linkAffordance: M.CHATGPT_LINK_AFFORDANCE_BUTTON,
        contentReferenceType: `map`,
        url: d ?? void 0,
        conversationId: l ?? void 0,
        messageId: c,
        assistantMessageId: c,
        turnOrdinal: q(e, s.browserConversationId ?? s.conversationId, c),
        parentContext: {
          entityId: L(i.entity_data?.id) ?? void 0,
          entityCategory: `local_business`,
          messageId: c,
        },
        surfaceLocation: de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
      }),
      B(e, O, {
        eventType:
          t === `shown`
            ? C.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN
            : C.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED,
        action:
          t === `shown` ? W.CHATGPT_CONTENT_REFERENCE_ACTION_SHOW : W.CHATGPT_CONTENT_REFERENCE_ACTION_CLICK,
        conversationId: l ?? void 0,
        messageId: c,
        contentReferenceType: n.presentation === `hover` ? `map` : `entity_metadata`,
        businessId: L(i.entity_data?.id) ?? void 0,
        ctaType: `reserve`,
        linkType: `local_business_reservation`,
        ctaSurface: Z(n),
        sectionLocation: `response`,
        connectorId: d == null ? void 0 : k(void 0, d)?.connectorId,
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
  return ie([
    a.browserConversationId ?? a.conversationId,
    a.contentReferenceMessageIds?.[t] ?? a.messageId,
    L(n.entity_data?.id),
    Z(e),
    r?.provider,
    L(r?.provider_restaurant_id),
    L(r?.launcherPayload?.appUri),
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
    (D(), A(), h(), U(), N(), fe(), K());
  }))();
}
function Oe(e) {
  let n = (0, Fe.c)(83),
    {
      children: r,
      contentReferenceIndex: i,
      onReservationPickerOpenChange: a,
      presentation: c,
      reference: u,
      turnContext: f,
    } = e,
    p = c === void 0 ? `metadata` : c,
    m = t(s),
    h = ee(ve),
    ne = (0, Q.useRef)(new Set()),
    ie = (0, Q.useContext)(le),
    ae = se(`2673474834`),
    g = ge(u),
    v;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((v = ce()), (n[0] = v)) : (v = n[0]);
  let y = se(v),
    b;
  n[1] !== h || n[2] !== y
    ? ((b = (e) => h != null && y && e.launcherPayload != null), (n[1] = h), (n[2] = y), (n[3] = b))
    : (b = n[3]);
  let x = (g?.entity_data?.reservation_providers ?? []).filter(b),
    S;
  n[4] !== i || n[5] !== m || n[6] !== f
    ? ((S = {
        launch: (e) => {
          let t = f.browserConversationId ?? f.conversationId;
          if (he(t)) throw Error(`Wait for this conversation to finish saving, then try again.`);
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
      (n[7] = S))
    : (S = n[7]);
  let C = Ce(S);
  if (g == null || g.layout === `one-line` || f.shouldBlockExternalEgress || ie === `restricted`) {
    let e;
    return (n[8] === r ? (e = n[9]) : ((e = r?.(null) ?? null), (n[8] = r), (n[9] = e)), e);
  }
  let w =
      h != null && p !== `hover` && !g.entity_data?.reservation_providers?.some(ke) && ae
        ? Ne(g.entity_data?.reservation_providers)
        : null,
    T = L(g.metadata?.map_url),
    E = L(g.entity_data?.website_url),
    D = L(g.entity_data?.phone),
    O = x.length > 0 || w != null,
    k = pe(g.entity_data?.service_providers),
    A = h != null && y && (f.canRequestQuote ?? !f.isReadOnly) && !O && k.length > 0,
    j = D != null && ((!O && !A) || T == null || E == null),
    M = Number(O) + Number(A) + Number(T != null) + Number(E != null) + Number(j);
  if (M === 0 || (g.layout === `two-lines` && M <= 1)) {
    let e;
    return (n[10] === r ? (e = n[11]) : ((e = r?.(null) ?? null), (n[10] = r), (n[11] = e)), e);
  }
  let N = {
      contentReferenceIndex: i,
      entityMetadata: g,
      reservationWebsiteUrl: w,
      shownEvents: ne,
      turnContext: f,
      presentation: p,
    },
    P = (e) => {
      let t = f.contentReferenceMessageIds?.[i] ?? f.messageId;
      be(m, {
        actionType: _e.CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED,
        entityAffordance: e,
        entityId: L(g.entity_data?.id) ?? void 0,
        entityCategory: g.entity_type,
        messageId: t,
        assistantMessageId: t,
        conversationId: f.browserConversationId ?? f.conversationId,
        contentReferenceStartIndex: o(me(u.start_idx)),
        contentReferenceType: p === `hover` ? `entity` : g.type,
        surfaceLocation: (p === `hover` ? f.conversationType !== `sidebar` : g.layout === `two-lines`)
          ? de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE
          : de.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
        isGenui: !1,
      });
    },
    fe = (e, t) => {
      (p !== `hover` && P(t),
        Ee(m, `clicked`, { ...N, provider: e }),
        p === `hover` && te(),
        C.launch(e.launcherPayload));
    },
    F = (e, t, n) => {
      (P(n), ue({ event: e, href: t, initiator: `markdown_link_click`, originHostId: f.hostId }));
    },
    I = p === `hover` ? `flex-auto justify-center` : void 0,
    R = p === `hover` ? `dialog` : `entityAction`,
    B = p === `hover` || M >= 2 ? `primary` : `outlineSurface`,
    V = null;
  if (x.length > 1) {
    let e = p === `hover` ? `cardAction` : `entityAction`,
      t;
    n[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(_, {
          id: `chatgpt.entityMetadata.reserve`,
          defaultMessage: `Reserve`,
          description: `Action label for making a reservation at a local business`,
        })),
        (n[12] = t))
      : (t = n[12]);
    let r;
    (n[13] !== I || n[14] !== B || n[15] !== e
      ? ((r = (0, $.jsx)(d, { className: I, color: B, radius: `full`, size: e, children: t })),
        (n[13] = I),
        (n[14] = B),
        (n[15] = e),
        (n[16] = r))
      : (r = n[16]),
      (V = (0, $.jsx)(Me, {
        onReservationPickerOpenChange: a,
        onOpenChange: (e) => {
          e && p !== `hover` && P(z.CHATGPT_ENTITY_AFFORDANCE_RESERVE);
        },
        triggerButton: r,
        children: x.map((e, t) =>
          (0, $.jsxs)(
            re.Item,
            {
              onClick: () => fe(e, z.CHATGPT_ENTITY_AFFORDANCE_RESERVE_PROVIDER),
              children: [
                (0, $.jsx)(je, { ...N, provider: e }),
                Pe(e) ??
                  (0, $.jsx)(_, {
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
  } else if (x[0] != null) {
    let e = p === `hover` ? `cardAction` : `entityAction`,
      t = () => fe(x[0], z.CHATGPT_ENTITY_AFFORDANCE_RESERVE),
      r;
    n[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(_, {
          id: `chatgpt.entityMetadata.reserve`,
          defaultMessage: `Reserve`,
          description: `Action label for making a reservation at a local business`,
        })),
        (n[17] = r))
      : (r = n[17]);
    let i;
    (n[18] !== I || n[19] !== B || n[20] !== e || n[21] !== t
      ? ((i = (0, $.jsx)(d, { className: I, color: B, radius: `full`, size: e, onClick: t, children: r })),
        (n[18] = I),
        (n[19] = B),
        (n[20] = e),
        (n[21] = t),
        (n[22] = i))
      : (i = n[22]),
      (V = i));
  } else if (w != null) {
    let e = p === `hover` ? `cardAction` : `entityAction`,
      t = (e) => {
        (Ee(m, `clicked`, { ...N, provider: null }), F(e, w, z.CHATGPT_ENTITY_AFFORDANCE_RESERVE));
      },
      r;
    n[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(_, {
          id: `chatgpt.entityMetadata.reserveWebsite`,
          defaultMessage: `Reserve`,
          description: `Action label for opening a local business reservation website`,
        })),
        (n[23] = r))
      : (r = n[23]);
    let i;
    (n[24] !== I || n[25] !== B || n[26] !== e || n[27] !== t
      ? ((i = (0, $.jsx)(d, { className: I, color: B, radius: `full`, size: e, onClick: t, children: r })),
        (n[24] = I),
        (n[25] = B),
        (n[26] = e),
        (n[27] = t),
        (n[28] = i))
      : (i = n[28]),
      (V = i));
  }
  let H =
      V == null
        ? null
        : (0, $.jsxs)($.Fragment, {
            children: [V, O && x.length <= 1 ? (0, $.jsx)(je, { ...N, provider: x[0] ?? null }) : null],
          }),
    U;
  n[29] !== I ||
  n[30] !== R ||
  n[31] !== i ||
  n[32] !== g ||
  n[33] !== A ||
  n[34] !== P ||
  n[35] !== k ||
  n[36] !== f ||
  n[37] !== M
    ? ((U =
        A &&
        (0, $.jsx)(Te, {
          analyticsMessageId: f.contentReferenceMessageIds?.[i],
          businessId: L(g.entity_data?.id),
          ctaSurface: g.layout === `two-lines` ? `business_metadata` : `business_sidebar`,
          onAction: () => P(z.CHATGPT_ENTITY_AFFORDANCE_REQUEST_QUOTE),
          providers: k,
          trigger: (0, $.jsx)(d, {
            className: I,
            color: M >= 2 ? `primary` : `outlineSurface`,
            radius: `full`,
            size: R,
            children: (0, $.jsx)(we, {}),
          }),
          turnContext: f,
        })),
      (n[29] = I),
      (n[30] = R),
      (n[31] = i),
      (n[32] = g),
      (n[33] = A),
      (n[34] = P),
      (n[35] = k),
      (n[36] = f),
      (n[37] = M),
      (n[38] = U))
    : (U = n[38]);
  let W;
  n[39] !== I || n[40] !== R || n[41] !== A || n[42] !== O || n[43] !== T || n[44] !== F || n[45] !== M
    ? ((W =
        T == null
          ? null
          : (0, $.jsx)(d, {
              className: I,
              color: !O && !A && M >= 2 ? `primary` : `outlineSurface`,
              radius: `full`,
              size: R,
              onClick: (e) => F(e, T, z.CHATGPT_ENTITY_AFFORDANCE_DIRECTIONS),
              children: (0, $.jsx)(_, {
                id: `chatgpt.entityMetadata.directions`,
                defaultMessage: `Directions`,
                description: `Action label for opening directions to a local business`,
              }),
            })),
      (n[39] = I),
      (n[40] = R),
      (n[41] = A),
      (n[42] = O),
      (n[43] = T),
      (n[44] = F),
      (n[45] = M),
      (n[46] = W))
    : (W = n[46]);
  let G;
  n[47] !== I ||
  n[48] !== R ||
  n[49] !== A ||
  n[50] !== O ||
  n[51] !== T ||
  n[52] !== F ||
  n[53] !== M ||
  n[54] !== E
    ? ((G =
        E == null
          ? null
          : (0, $.jsx)(d, {
              className: I,
              color: !O && !A && T == null && M >= 2 ? `primary` : `outlineSurface`,
              radius: `full`,
              size: R,
              onClick: (e) => F(e, E, z.CHATGPT_ENTITY_AFFORDANCE_WEBSITE),
              children: (0, $.jsx)(_, {
                id: `chatgpt.entityMetadata.website`,
                defaultMessage: `Website`,
                description: `Action label for opening a local business website`,
              }),
            })),
      (n[47] = I),
      (n[48] = R),
      (n[49] = A),
      (n[50] = O),
      (n[51] = T),
      (n[52] = F),
      (n[53] = M),
      (n[54] = E),
      (n[55] = G))
    : (G = n[55]);
  let K;
  n[56] !== I || n[57] !== R || n[58] !== F || n[59] !== D || n[60] !== j
    ? ((K = j
        ? (0, $.jsx)(l, {
            className: I,
            color: `outlineSurface`,
            href: `tel:${D}`,
            radius: `full`,
            size: R,
            onClick: (e) => F(e, `tel:${D}`, z.CHATGPT_ENTITY_AFFORDANCE_CALL),
            children: (0, $.jsx)(_, {
              id: `chatgpt.entityMetadata.call`,
              defaultMessage: `Call`,
              description: `Action label for calling a local business`,
            }),
          })
        : null),
      (n[56] = I),
      (n[57] = R),
      (n[58] = F),
      (n[59] = D),
      (n[60] = j),
      (n[61] = K))
    : (K = n[61]);
  let q;
  n[62] !== H || n[63] !== U || n[64] !== W || n[65] !== G || n[66] !== K
    ? ((q = (0, $.jsxs)(`div`, {
        className: `mt-3 flex min-w-0 flex-wrap gap-2 select-none`,
        children: [U, H, W, G, K],
      })),
      (n[62] = H),
      (n[63] = U),
      (n[64] = W),
      (n[65] = G),
      (n[66] = K),
      (n[67] = q))
    : (q = n[67]);
  let xe = q,
    J;
  n[68] !== xe || n[69] !== r || n[70] !== H
    ? ((J = r ? r(H) : xe), (n[68] = xe), (n[69] = r), (n[70] = H), (n[71] = J))
    : (J = n[71]);
  let Y;
  n[72] !== C.close ||
  n[73] !== C.dialog ||
  n[74] !== f.browserConversationId ||
  n[75] !== f.conversationId ||
  n[76] !== f.hostId
    ? ((Y =
        C.dialog == null
          ? null
          : (0, $.jsx)(ye, {
              conversationId: oe(f.browserConversationId ?? f.conversationId),
              hostId: f.hostId,
              onClose: C.close,
              state: C.dialog,
            })),
      (n[72] = C.close),
      (n[73] = C.dialog),
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
  y.error(`ChatGPT entity reservation launch failed`, { safe: {}, sensitive: { error: e } });
}
function je(e) {
  let n = (0, Fe.c)(12),
    r = t(s),
    i;
  n[0] === e ? (i = n[1]) : ((i = X(e)), (n[0] = e), (n[1] = i));
  let a = i,
    o = e.turnContext.trackShownImpressions !== !1,
    c;
  n[2] === e
    ? (c = n[3])
    : ((c = (t) => {
        Ee(t, `shown`, e);
      }),
      (n[2] = e),
      (n[3] = c));
  let l = (0, Q.useEffectEvent)(c),
    u;
  n[4] !== l || n[5] !== r || n[6] !== o
    ? ((u = () => {
        if (o) return r.watch((e) => l(e));
      }),
      (n[4] = l),
      (n[5] = r),
      (n[6] = o),
      (n[7] = u))
    : (u = n[7]);
  let d;
  return (
    n[8] !== a || n[9] !== r || n[10] !== o
      ? ((d = [r, a, o]), (n[8] = a), (n[9] = r), (n[10] = o), (n[11] = d))
      : (d = n[11]),
    (0, Q.useLayoutEffect)(u, d),
    null
  );
}
function Me(e) {
  let t = (0, Fe.c)(15),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ onReservationPickerOpenChange: r, onOpenChange: n, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i));
  let a;
  t[4] === r
    ? (a = t[5])
    : ((a = () => {
        r?.(!1);
      }),
      (t[4] = r),
      (t[5] = a));
  let o = (0, Q.useEffectEvent)(a),
    s;
  t[6] === o ? (s = t[7]) : ((s = () => () => o()), (t[6] = o), (t[7] = s));
  let c;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = []), (t[8] = c)) : (c = t[8]),
    (0, Q.useLayoutEffect)(s, c));
  let l;
  t[9] !== n || t[10] !== r
    ? ((l = (e) => {
        (r?.(e), n?.(e));
      }),
      (t[9] = n),
      (t[10] = r),
      (t[11] = l))
    : (l = t[11]);
  let u;
  return (
    t[12] !== i || t[13] !== l
      ? ((u = (0, $.jsx)(g, { ...i, onOpenChange: l })), (t[12] = i), (t[13] = l), (t[14] = u))
      : (u = t[14]),
    u
  );
}
function Ne(e) {
  for (let t of e ?? []) {
    let e = L(t.provider_reservation_url);
    if (e != null) return e;
  }
  return null;
}
function Pe(e) {
  return L(e.provider_name) ?? (e.provider == null ? null : (Ie[e.provider] ?? null));
}
var Fe, Q, $, Ie;
function Le() {
  return (Le = e(() => {
    ((Fe = a()),
      A(),
      ne(),
      p(),
      ae(),
      w(),
      (Q = r()),
      u(),
      R(),
      f(),
      m(),
      F(),
      v(),
      b(),
      x(),
      n(),
      H(),
      c(),
      G(),
      xe(),
      j(),
      K(),
      V(),
      Y(),
      J(),
      De(),
      ($ = i()),
      (Ie = { opentable: `OpenTable`, resy: `Resy`, yelp: `Yelp` }));
  }))();
}
export { Le as n, Oe as t };
//# sourceMappingURL=entity-metadata-7df6b0965f9b.js.map
