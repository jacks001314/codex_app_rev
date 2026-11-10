import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  I3 as r,
  LNt as i,
  PBt as a,
  XOt as o,
  ZSt as s,
  iCt as c,
  nCt as l,
  okt as u,
  tkt as d,
  vD as f,
  yD as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BRr as m,
  SRn as h,
  TBt as g,
  bRn as _,
  gen as v,
  jcn as y,
  pen as b,
  rPt as x,
  sLr as S,
  tLr as C,
  wBt as w,
  wLr as T,
  wcn as E,
  yPt as D,
} from "./app-initial-ad16eaadf81f.js";
import { Gy as O, Hy as k, Uy as A, Wy as j } from "./app-primary-3e00728c2a4c.js";
import { i as M, n as N, r as P, t as F } from "./state-2495d1d7742b.js";
import { n as I, t as L } from "./workspace-billing-url-a7346df3d700.js";
function R(e) {
  let t = (0, V.c)(17),
    { entries: n, fallbackContent: r, renderSlot: i, renderCandidates: a, trackVisibility: o } = e,
    s = o === void 0 || o,
    l;
  t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== i || t[4] !== s
    ? ((l = (e) => {
        let [t] = e,
          o = [{ ...t, id: `workspace-renewal-payment` }, ...(n ?? [])];
        return (0, U.jsx)(U.Fragment, {
          children:
            i?.(o) ??
            (0, U.jsx)(j, { entries: o, renderCandidates: a, fallbackContent: r, trackVisibility: s }),
        });
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = i),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u = l,
    { data: d, isLoading: f } = y(),
    p = c(m);
  if ((d != null || !f) && !(d?.structure === `personal` && g(d.plan_type))) {
    let e;
    return (t[6] === u ? (e = t[7]) : ((e = (0, U.jsx)(z, { renderPayment: u })), (t[6] = u), (t[7] = e)), e);
  }
  let h;
  t[8] === u
    ? (h = t[9])
    : ((h = u([{ content: null, isEligible: !1, isLoading: !0 }])), (t[8] = u), (t[9] = h));
  let _;
  t[10] !== d || t[11] !== u || t[12] !== p
    ? ((_ =
        d == null
          ? u([{ content: null, isEligible: !1, isLoading: !0 }])
          : (0, U.jsx)(W, { accountId: d.id, children: (e) => u([e]) }, `${p}:${d.id}`)),
      (t[10] = d),
      (t[11] = u),
      (t[12] = p),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  return (
    t[14] !== h || t[15] !== _
      ? ((v = (0, U.jsx)(H.Suspense, { fallback: h, children: _ })), (t[14] = h), (t[15] = _), (t[16] = v))
      : (v = t[16]),
    v
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
    t = u(),
    { data: n, isLoading: r } = y(),
    i;
  e[0] === n
    ? (i = e[1])
    : ((i =
        n?.structure === `workspace` && n.account_user_role === `account-owner` && S(n.plan_type)
          ? n.id
          : null),
      (e[0] = n),
      (e[1] = i));
  let a = i,
    { data: o, isLoading: s } = l(M, a),
    c;
  e[2] === o
    ? (c = e[3])
    : ((c = o?.grace_period_end_timestamp == null ? null : Date.parse(o.grace_period_end_timestamp)),
      (e[2] = o),
      (e[3] = c));
  let p = v(c),
    m = l(P, a),
    g,
    _,
    b,
    x,
    C;
  if (
    e[4] !== a ||
    e[5] !== m.length ||
    e[6] !== t ||
    e[7] !== r ||
    e[8] !== s ||
    e[9] !== p ||
    e[10] !== o
  ) {
    let n = m.length > 0 ? null : F(o, p);
    ((g = `workspace-renewal-payment`),
      (_ = n),
      (b = a != null && n != null),
      (x = r || (a != null && s)),
      (C =
        n == null || a == null
          ? null
          : (0, U.jsx)(f, {
              ariaLive: `polite`,
              content: (0, U.jsx)(d, {
                id: `codex.workspaceRenewalPaymentBanner.description`,
                defaultMessage: `Update your payment method before {date} to keep access to your workspace`,
                description: `Warning that a Business workspace payment must be updated before {date}, when the grace period ends`,
                values: { date: t.formatDate(n, { month: `long`, day: `numeric` }) },
              }),
              Icon: k,
              layout: `warningCallout`,
              onPrimaryCtaClick: (e) => {
                h({ event: e, href: L(a), initiator: `open_in_browser_bridge` });
              },
              primaryCtaText: (0, U.jsx)(d, {
                id: `codex.workspaceRenewalPaymentBanner.updatePayment`,
                defaultMessage: `Update payment`,
                description: `Opens workspace billing settings to update the payment method`,
              }),
              role: `status`,
              stackOnNarrow: !0,
              title: (0, U.jsx)(d, {
                id: `codex.workspaceRenewalPaymentBanner.title`,
                defaultMessage: `Workspace renewal failed`,
                description: `Title shown when a Business workspace renewal payment fails`,
              }),
              type: `warning`,
            })),
      (e[4] = a),
      (e[5] = m.length),
      (e[6] = t),
      (e[7] = r),
      (e[8] = s),
      (e[9] = p),
      (e[10] = o),
      (e[11] = g),
      (e[12] = _),
      (e[13] = b),
      (e[14] = x),
      (e[15] = C));
  } else ((g = e[11]), (_ = e[12]), (b = e[13]), (x = e[14]), (C = e[15]));
  let w;
  return (
    e[16] !== g || e[17] !== _ || e[18] !== b || e[19] !== x || e[20] !== C
      ? ((w = { id: g, gracePeriodEnd: _, isEligible: b, isLoading: x, content: C }),
        (e[16] = g),
        (e[17] = _),
        (e[18] = b),
        (e[19] = x),
        (e[20] = C),
        (e[21] = w))
      : (w = e[21]),
    w
  );
}
var V, H, U, W;
function G() {
  return (G = e(() => {
    ((V = a()),
      x(),
      s(),
      (H = n()),
      o(),
      O(),
      N(),
      I(),
      T(),
      E(),
      p(),
      _(),
      t(),
      b(),
      w(),
      A(),
      C(),
      (U = i()),
      (W = r(D, {
        suspendToParent: !0,
        errorFallback: ({ children: e }) => e({ content: null, isEligible: !1, isLoading: !1 }),
      })));
  }))();
}
export { G as n, R as t };
//# sourceMappingURL=workspace-renewal-payment-b21a13707fa8.js.map
