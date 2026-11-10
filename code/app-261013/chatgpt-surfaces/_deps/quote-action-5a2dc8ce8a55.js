import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AO as t,
  CO as n,
  CPt as r,
  Cot as i,
  IDt as a,
  Ixt as o,
  Jbt as s,
  Pxt as c,
  SPt as l,
  TO as ee,
  VDt as te,
  jDt as u,
  rst as d,
  vzt as f,
  wot as p,
  xMt as m,
  yzt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bl as g,
  Ll as _,
  QDr as ne,
  Rl as v,
  Ul as y,
  XDr as b,
  e$n as x,
  t$n as S,
} from "./app-initial-5851df3f6cb1.js";
import { i as C, n as re } from "./chatgpt-ecosystem-widget-86361a1e1747.js";
import { n as w, r as ie } from "./chatgpt-ecosystem-widget-launch-2a2c56ed75ca.js";
import { n as ae, t as T } from "./use-ecosystem-widget-launch-7c7990ac8eb9.js";
function E(e) {
  let t = (0, A.c)(45),
    {
      analyticsMessageId: n,
      businessId: r,
      ctaSurface: a,
      onAction: c,
      onInteractionOpenChange: l,
      providers: u,
      trigger: d,
      turnContext: f,
    } = e,
    p = o(i),
    m = te(),
    h;
  t[0] === m
    ? (h = t[1])
    : ((h = (e) => ({
        provider: e,
        label:
          e.provider_name?.trim() ||
          N[e.provider?.trim().toLowerCase() ?? ``] ||
          e.provider?.trim() ||
          m.formatMessage({
            id: `chatgpt.localBusiness.quoteProvider`,
            defaultMessage: `Quote provider`,
            description: `Fallback item in the local business Get Quote provider menu when no company name was supplied. Selecting it opens that provider’s quote flow.`,
          }),
      })),
      (t[0] = m),
      (t[1] = h));
  let y;
  t[2] === m
    ? (y = t[3])
    : ((y = (e, t) => e.label.localeCompare(t.label, m.locale, { sensitivity: `base` })),
      (t[2] = m),
      (t[3] = y));
  let b = u.map(h).sort(y),
    x = (0, j.useRef)(!1),
    C = (0, j.useRef)(!1),
    w;
  t[4] === l
    ? (w = t[5])
    : ((w = () => {
        ((x.current = !1), (C.current = !1), l?.(!1));
      }),
      (t[4] = l),
      (t[5] = w));
  let T = (0, j.useEffectEvent)(w),
    E;
  t[6] === T ? (E = t[7]) : ((E = () => () => T()), (t[6] = T), (t[7] = E));
  let D;
  (t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = []), (t[8] = D)) : (D = t[8]),
    (0, j.useLayoutEffect)(E, D));
  let P;
  t[9] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = new Set()), (t[9] = P)) : (P = t[9]);
  let F = (0, j.useRef)(P),
    I = f.trackShownImpressions !== !1,
    L = f.browserConversationId ?? f.conversationId,
    R;
  t[10] !== n || t[11] !== L || t[12] !== p || t[13] !== f.hostId || t[14] !== f.messageId
    ? ((R = {
        launch: (e, t, r) => {
          if (S(L)) throw Error(`Wait for this conversation to finish saving, then try again.`);
          return ie({
            scope: p,
            hostId: f.hostId,
            chatGptConversationId: L,
            payload: e,
            sourceMessageId: n ?? f.messageId,
            signal: t,
            onTracking: r,
          });
        },
        onError: oe,
      }),
      (t[10] = n),
      (t[11] = L),
      (t[12] = p),
      (t[13] = f.hostId),
      (t[14] = f.messageId),
      (t[15] = R))
    : (R = t[15]);
  let z = ae(R),
    B;
  t[16] !== n ||
  t[17] !== r ||
  t[18] !== L ||
  t[19] !== a ||
  t[20] !== p ||
  t[21] !== I ||
  t[22] !== f.messageId
    ? ((B = (e, t) => {
        let i = e.launcherPayload.appUri,
          o = O(e);
        if (t === `show`) {
          if (!I || F.current.has(o)) return;
          F.current.add(o);
        }
        try {
          ne(p, g, {
            action:
              t === `show`
                ? _.CHATGPT_CONTENT_REFERENCE_ACTION_SHOW
                : _.CHATGPT_CONTENT_REFERENCE_ACTION_CLICK,
            eventType:
              t === `show`
                ? v.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_SHOWN
                : v.CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_BUSINESS_CTA_CLICKED,
            businessId: r ?? void 0,
            connectorId: i.startsWith(`connectors://`) ? i.slice(13) : i,
            contentReferenceType: a === `map_card` ? `map` : `entity_metadata`,
            conversationId: L,
            ctaSurface: a,
            ctaType: `service`,
            linkType: `local_business_service`,
            messageId: n ?? f.messageId,
            sectionLocation: `response`,
            serviceProvider: e.provider ?? void 0,
            serviceActionType: e.action_type ?? void 0,
          });
        } catch {}
      }),
      (t[16] = n),
      (t[17] = r),
      (t[18] = L),
      (t[19] = a),
      (t[20] = p),
      (t[21] = I),
      (t[22] = f.messageId),
      (t[23] = B))
    : (B = t[23]);
  let V = B,
    H = u.length === 1 ? u[0] : void 0,
    U;
  t[24] === H ? (U = t[25]) : ((U = H == null ? null : O(H)), (t[24] = H), (t[25] = U));
  let W = U,
    G;
  t[26] !== H || t[27] !== V
    ? ((G = () => {
        H != null && V(H, `show`);
      }),
      (t[26] = H),
      (t[27] = V),
      (t[28] = G))
    : (G = t[28]);
  let K = (0, j.useEffectEvent)(G),
    q;
  t[29] !== W || t[30] !== K
    ? ((q = () => {
        W != null && K();
      }),
      (t[29] = W),
      (t[30] = K),
      (t[31] = q))
    : (q = t[31]);
  let J;
  (t[32] !== W || t[33] !== I ? ((J = [W, I]), (t[32] = W), (t[33] = I), (t[34] = J)) : (J = t[34]),
    (0, j.useEffect)(q, J));
  let Y = (e) => {
    (V(e, `click`), c?.(), (C.current = !0), l?.(!0), z.launch(e.launcherPayload));
  };
  if (u.length === 0) return null;
  let X =
      H == null
        ? (0, M.jsx)(se, {
            onOpenChange: (e) => {
              if (((x.current = e), l?.(e || C.current), e)) for (let e of u) V(e, `show`);
            },
            triggerButton: d,
            children: b.map((e) => {
              let { provider: t, label: n } = e;
              return (0, M.jsx)(ee.Item, { onClick: () => Y(t), children: n }, O(t));
            }),
          })
        : (0, M.jsx)(k, { trigger: d, onClick: () => Y(H) }),
    Z;
  t[35] !== L || t[36] !== z || t[37] !== l || t[38] !== f.hostId
    ? ((Z =
        z.dialog == null
          ? null
          : (0, M.jsx)(re, {
              conversationId: s(L),
              hostId: f.hostId,
              onClose: () => {
                (z.close(), (C.current = !1), l?.(x.current));
              },
              state: z.dialog,
            })),
      (t[35] = L),
      (t[36] = z),
      (t[37] = l),
      (t[38] = f.hostId),
      (t[39] = Z))
    : (Z = t[39]);
  let Q;
  t[40] === Z ? (Q = t[41]) : ((Q = (0, M.jsx)(M.Fragment, { children: Z })), (t[40] = Z), (t[41] = Q));
  let $;
  return (
    t[42] !== X || t[43] !== Q
      ? (($ = (0, M.jsxs)(M.Fragment, { children: [X, Q] })), (t[42] = X), (t[43] = Q), (t[44] = $))
      : ($ = t[44]),
    $
  );
}
function oe(e) {
  r.error(`ChatGPT entity quote launch failed`, { safe: {}, sensitive: { error: e } });
}
function D() {
  let e = (0, A.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, M.jsx)(a, {
          id: `chatgpt.localBusiness.getQuote`,
          defaultMessage: `Get Quote`,
          description: `Short button on a local business result, preview, or sidebar. It opens a price or availability quote request; when several providers are available, the user first chooses a provider.`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function O(e) {
  return JSON.stringify([e.provider, e.provider_business_id, e.launcherPayload.appUri]);
}
function se(e) {
  let t = (0, A.c)(11),
    r,
    i;
  t[0] === e
    ? ((r = t[1]), (i = t[2]))
    : (({ onOpenChange: r, ...i } = e), (t[0] = e), (t[1] = r), (t[2] = i));
  let a;
  t[3] === r ? (a = t[4]) : ((a = () => r?.(!1)), (t[3] = r), (t[4] = a));
  let o = (0, j.useEffectEvent)(a),
    s;
  t[5] === o ? (s = t[6]) : ((s = () => () => o()), (t[5] = o), (t[6] = s));
  let c;
  (t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = []), (t[7] = c)) : (c = t[7]),
    (0, j.useLayoutEffect)(s, c));
  let l;
  return (
    t[8] !== r || t[9] !== i
      ? ((l = (0, M.jsx)(n, { ...i, onOpenChange: r })), (t[8] = r), (t[9] = i), (t[10] = l))
      : (l = t[10]),
    l
  );
}
function k({ trigger: e, onClick: t }) {
  return (0, j.cloneElement)(e, { onClick: t });
}
var A, j, M, N;
function P() {
  return (P = e(() => {
    ((A = f()),
      y(),
      c(),
      d(),
      (j = h()),
      u(),
      t(),
      b(),
      p(),
      l(),
      C(),
      w(),
      x(),
      T(),
      (M = m()),
      (N = { thumbtack: `Thumbtack`, yelp: `Yelp` }));
  }))();
}
export { D as n, P as r, E as t };
//# sourceMappingURL=quote-action-5a2dc8ce8a55.js.map
