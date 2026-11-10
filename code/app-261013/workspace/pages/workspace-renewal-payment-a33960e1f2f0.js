import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  GE as n,
  IDt as r,
  Pxt as i,
  VDt as a,
  Vxt as o,
  WE as s,
  jDt as c,
  vzt as l,
  xMt as u,
  yzt as d,
  z4 as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as m,
  FMr as h,
  Fin as g,
  Hin as _,
  JPn as v,
  K5t as y,
  OGt as b,
  XMr as x,
  XPn as S,
  Y5t as C,
  ZIt as w,
  fLt as T,
  kGt as E,
  tNr as D,
} from "./app-initial-5851df3f6cb1.js";
import { Cy as O, Sy as k, by as A, xy as j } from "./app-primary-fe8a450b3b04.js";
import { i as M, n as N, r as P, t as F } from "./state-255f3b7248c2.js";
import { n as I, t as L } from "./workspace-billing-url-f5a0b078d3d4.js";
function R(e) {
  let t = (0, V.c)(17),
    { entries: n, fallbackContent: r, renderSlot: i, renderCandidates: a, trackVisibility: s } = e,
    c = s === void 0 || s,
    l;
  t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== c
    ? ((l = (e) => {
        let [t] = e,
          o = [{ ...t, id: `workspace-renewal-payment` }, ...(n ?? [])];
        return (0, U.jsx)(U.Fragment, {
          children:
            i?.(o) ??
            (0, U.jsx)(k, { entries: o, renderCandidates: a, fallbackContent: r, trackVisibility: c }),
        });
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u = l,
    { data: d, isLoading: f } = _(),
    p = o(x);
  if ((d != null || !f) && !(d?.structure === `personal` && E(d.plan_type))) {
    let e;
    return (t[6] === u ? (e = t[7]) : ((e = (0, U.jsx)(z, { renderPayment: u })), (t[6] = u), (t[7] = e)), e);
  }
  let m;
  t[8] === u
    ? (m = t[9])
    : ((m = u([{ content: null, isEligible: !1, isLoading: !0 }])), (t[8] = u), (t[9] = m));
  let h;
  t[10] !== d || t[11] !== u || t[12] !== p
    ? ((h =
        d == null
          ? u([{ content: null, isEligible: !1, isLoading: !0 }])
          : (0, U.jsx)(W, { accountId: d.id, children: (e) => u([e]) }, `${p}:${d.id}`)),
      (t[10] = d),
      (t[11] = u),
      (t[12] = p),
      (t[13] = h))
    : (h = t[13]);
  let g;
  return (
    t[14] !== m || t[15] !== h
      ? ((g = (0, U.jsx)(H.Suspense, { fallback: m, children: h })), (t[14] = m), (t[15] = h), (t[16] = g))
      : (g = t[16]),
    g
  );
}
function z(e) {
  let t = (0, V.c)(3),
    { renderPayment: n } = e,
    r = B(),
    i;
  return (t[0] !== r || t[1] !== n ? ((i = n([r])), (t[0] = r), (t[1] = n), (t[2] = i)) : (i = t[2]), i);
}
function B() {
  let e = (0, V.c)(22),
    t = a(),
    { data: n, isLoading: i } = _(),
    o;
  e[0] === n
    ? (o = e[1])
    : ((o =
        n?.structure === `workspace` && n.account_user_role === `account-owner` && h(n.plan_type)
          ? n.id
          : null),
      (e[0] = n),
      (e[1] = o));
  let c = o,
    { data: l, isLoading: u } = p(M, c),
    d;
  e[2] === l
    ? (d = e[3])
    : ((d = l?.grace_period_end_timestamp == null ? null : Date.parse(l.grace_period_end_timestamp)),
      (e[2] = l),
      (e[3] = d));
  let f = C(d),
    m = p(P, c),
    g,
    v,
    y,
    b,
    x;
  if (
    e[4] !== c ||
    e[5] !== m.length ||
    e[6] !== t ||
    e[7] !== i ||
    e[8] !== u ||
    e[9] !== f ||
    e[10] !== l
  ) {
    let n = m.length > 0 ? null : F(l, f);
    ((g = `workspace-renewal-payment`),
      (v = n),
      (y = c != null && n != null),
      (b = i || (c != null && u)),
      (x =
        n == null || c == null
          ? null
          : (0, U.jsx)(s, {
              ariaLive: `polite`,
              content: (0, U.jsx)(r, {
                id: `codex.workspaceRenewalPaymentBanner.description`,
                defaultMessage: `Update your payment method before {date} to keep access to your workspace`,
                description: `Warning that a Business workspace payment must be updated before {date}, when the grace period ends`,
                values: { date: t.formatDate(n, { month: `long`, day: `numeric` }) },
              }),
              Icon: A,
              layout: `warningCallout`,
              onPrimaryCtaClick: (e) => {
                S({ event: e, href: L(c), initiator: `open_in_browser_bridge` });
              },
              primaryCtaText: (0, U.jsx)(r, {
                id: `codex.workspaceRenewalPaymentBanner.updatePayment`,
                defaultMessage: `Update payment`,
                description: `Opens workspace billing settings to update the payment method`,
              }),
              role: `status`,
              stackOnNarrow: !0,
              title: (0, U.jsx)(r, {
                id: `codex.workspaceRenewalPaymentBanner.title`,
                defaultMessage: `Workspace renewal failed`,
                description: `Title shown when a Business workspace renewal payment fails`,
              }),
              type: `warning`,
            })),
      (e[4] = c),
      (e[5] = m.length),
      (e[6] = t),
      (e[7] = i),
      (e[8] = u),
      (e[9] = f),
      (e[10] = l),
      (e[11] = g),
      (e[12] = v),
      (e[13] = y),
      (e[14] = b),
      (e[15] = x));
  } else ((g = e[11]), (v = e[12]), (y = e[13]), (b = e[14]), (x = e[15]));
  let w;
  return (
    e[16] !== g || e[17] !== v || e[18] !== y || e[19] !== b || e[20] !== x
      ? ((w = { id: g, gracePeriodEnd: v, isEligible: y, isLoading: b, content: x }),
        (e[16] = g),
        (e[17] = v),
        (e[18] = y),
        (e[19] = b),
        (e[20] = x),
        (e[21] = w))
      : (w = e[21]),
    w
  );
}
var V, H, U, W;
function G() {
  return (G = e(() => {
    ((V = l()),
      w(),
      i(),
      (H = d()),
      c(),
      O(),
      N(),
      I(),
      D(),
      g(),
      n(),
      v(),
      f(),
      y(),
      b(),
      j(),
      m(),
      (U = u()),
      (W = t(T, {
        suspendToParent: !0,
        errorFallback: ({ children: e }) => e({ content: null, isEligible: !1, isLoading: !1 }),
      })));
  }))();
}
export { G as n, R as t };
//# sourceMappingURL=workspace-renewal-payment-a33960e1f2f0.js.map
