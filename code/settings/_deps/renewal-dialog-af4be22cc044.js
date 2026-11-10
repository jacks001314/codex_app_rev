import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  Cpn as a,
  FKt as o,
  Hu as s,
  Jrt as c,
  NH as l,
  O3t as u,
  Opn as ee,
  PH as te,
  RKt as d,
  S3t as ne,
  Spn as f,
  Vu as re,
  Xrt as ie,
  Xu as p,
  Yrt as ae,
  Zrt as m,
  a3t as oe,
  d3t as se,
  eit as h,
  hmn as g,
  iit as _,
  jXt as ce,
  kMt as le,
  kXt as v,
  kmn as y,
  nit as ue,
  o3t as b,
  qu as de,
  rit as fe,
  s3t as x,
  tit as pe,
} from "./app-initial-f094ef01c64d.js";
import { d as S, i as C, o as me, p as he } from "./queries-d729b9d20ea6.js";
import { i as w, n as ge, r as _e, t as ve } from "./format-amount-47aa133b47a5.js";
import { r as T, t as ye } from "./status-f9c96846d856.js";
import { n as be, r as E, t as D } from "./events-7d2329d3e619.js";
function O(e) {
  let t = (0, xe.c)(75),
    { account: r, accountId: i, onClose: s, showProLevels: l } = e,
    u = n(oe),
    d = ee(),
    f = te(),
    p = (0, Se.useRef)(!1),
    h;
  t[0] !== s || t[1] !== u
    ? ((h = () => {
        (p.current &&
          ((p.current = !1),
          E(u, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !1 } })),
          s());
      }),
      (t[0] = s),
      (t[1] = u),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  t[3] === i ? (_ = t[4]) : ((_ = me(i)), (t[3] = i), (t[4] = _));
  let { data: v, isError: y, isPending: b, refetch: x } = ne(_),
    S;
  t[5] === i
    ? (S = t[6])
    : ((S = {
        queryKey: [`consumer-billing`, i, `renewal-preview`],
        queryFn: (e) => {
          let { signal: t } = e;
          return o.safeGet(`/subscriptions/renew/preview`, {
            parameters: { query: { account_id: i } },
            signal: t,
          });
        },
        staleTime: 0,
        retry: !1,
      }),
      (t[5] = i),
      (t[6] = S));
  let { data: C, isError: w, isFetching: ge, refetch: T } = ne(S),
    D;
  t[7] === i
    ? (D = t[8])
    : ((D = () => o.safePost(`/subscriptions/renew`, { requestBody: { account_id: i } })),
      (t[7] = i),
      (t[8] = D));
  let O;
  t[9] !== f || t[10] !== u
    ? ((O = (e) => {
        f() && be(u, e);
      }),
      (t[9] = f),
      (t[10] = u),
      (t[11] = O))
    : (O = t[11]);
  let {
      mutate: A,
      isPending: j,
      isError: M,
    } = se({
      mutationFn: D,
      onSuccess: async () => {
        (await he(u, i),
          f() &&
            (u.get(ce).success(
              N == null
                ? d.formatMessage({
                    id: `settings.consumerBilling.renewalSucceeded`,
                    defaultMessage: `Your subscription has been renewed`,
                    description: `Success notification after the server confirms that automatic renewal has been restored for a personal subscription.`,
                  })
                : d.formatMessage(
                    {
                      id: `settings.consumerBilling.renewalSucceededWithDate`,
                      defaultMessage: `Your subscription has been renewed. Your subscription will auto-renew on {renewalDate}.`,
                      description: `Success notification after restoring subscription renewal; renewalDate is the actual next automatic billing date shown in the confirmation.`,
                    },
                    { renewalDate: N },
                  ),
            ),
            r.account.plan_type != null &&
              E(u, {
                name: `chatgpt_renew_plan_success`,
                metadata: { planType: r.account.plan_type },
              }),
            g()));
      },
      onError: O,
    }),
    Ce =
      r.entitlement.cancels_at != null &&
      r.entitlement.renews_at != null &&
      Date.parse(r.entitlement.cancels_at) > Date.parse(r.entitlement.renews_at)
        ? r.entitlement.cancels_at
        : (C?.renewal_date ?? r.entitlement.renews_at),
    N = Ce == null ? null : d.formatDate(Ce, { year: `numeric`, month: `short`, day: `numeric` }),
    P = v?.scheduled_billing_period ?? v?.billing_period ?? r.entitlement.billing_period,
    F = C != null && !ge && !w && !b && !y && !j,
    I;
  if (w || y) {
    let e;
    (t[12] !== T || t[13] !== x
      ? ((e = (0, k.jsx)(_e, {
          onRetry: () => {
            (T(), x());
          },
        })),
        (t[12] = T),
        (t[13] = x),
        (t[14] = e))
      : (e = t[14]),
      (I = e));
  } else if (C == null || b) {
    let e;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, k.jsx)(`p`, {
          role: `status`,
          children: (0, k.jsx)(a, {
            id: `settings.consumerBilling.renewalLoading`,
            defaultMessage: `Checking your billing details…`,
            description: `Loading state while the renewal confirmation retrieves the actual subscription price from the server.`,
          }),
        })),
        (t[15] = e))
      : (e = t[15]),
      (I = e));
  } else {
    let e = r.account.plan_type ?? `free`,
      n;
    t[16] !== l || t[17] !== e
      ? ((n = (0, k.jsx)(ye, { plan: e, showProLevels: l })), (t[16] = l), (t[17] = e), (t[18] = n))
      : (n = t[18]);
    let i;
    t[19] === N
      ? (i = t[20])
      : ((i =
          N == null
            ? null
            : (0, k.jsx)(a, {
                id: `settings.consumerBilling.renewalBillingStart`,
                defaultMessage: `Billing will auto-renew on {date}`,
                description: `Date beneath the plan name in the renewal confirmation. date is the localized next automatic billing date.`,
                values: { date: N },
              })),
        (t[19] = N),
        (t[20] = i));
    let o;
    t[21] === C.currency
      ? (o = t[22])
      : ((o = C.currency.toUpperCase()), (t[21] = C.currency), (t[22] = o));
    let s;
    t[23] !== d || t[24] !== C.amount_due.amount || t[25] !== C.currency
      ? ((s = ve(d, C.amount_due.amount, C.currency)),
        (t[23] = d),
        (t[24] = C.amount_due.amount),
        (t[25] = C.currency),
        (t[26] = s))
      : (s = t[26]);
    let c;
    t[27] !== P || t[28] !== s || t[29] !== o
      ? ((c = (0, k.jsx)(a, {
          id: `settings.consumerBilling.renewalPrice`,
          defaultMessage: `{currency} {price}/{period, select, yearly {year} other {month}}`,
          description: `Server-verified recurring price in the renewal confirmation. currency is its ISO code, price is the localized amount including the currency symbol, and period chooses year or month.`,
          values: { currency: o, price: s, period: P },
        })),
        (t[27] = P),
        (t[28] = s),
        (t[29] = o),
        (t[30] = c))
      : (c = t[30]);
    let u;
    (t[31] !== c || t[32] !== n || t[33] !== i
      ? ((u = (0, k.jsx)(re, {
          children: (0, k.jsx)(de, { label: n, description: i, control: c }),
        })),
        (t[31] = c),
        (t[32] = n),
        (t[33] = i),
        (t[34] = u))
      : (u = t[34]),
      (I = u));
  }
  let L;
  t[35] === u
    ? (L = t[36])
    : ((L = {
        onOpenAutoFocus: () => {
          p.current ||
            ((p.current = !0),
            E(u, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !0 } }));
        },
      }),
      (t[35] = u),
      (t[36] = L));
  let R = !j,
    z;
  t[37] !== g || t[38] !== j
    ? ((z = (e) => {
        !e && !j && g();
      }),
      (t[37] = g),
      (t[38] = j),
      (t[39] = z))
    : (z = t[39]);
  let B;
  t[40] !== F || t[41] !== A
    ? ((B = (e) => {
        (e.preventDefault(), F && A());
      }),
      (t[40] = F),
      (t[41] = A),
      (t[42] = B))
    : (B = t[42]);
  let V;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, k.jsx)(fe, {
        children: (0, k.jsx)(a, {
          id: `settings.consumerBilling.renewalTitle`,
          defaultMessage: `Confirm plan changes`,
          description: `Title of the dialog confirming restoration of a canceled personal subscription's automatic renewal.`,
        }),
      })),
      (t[43] = V))
    : (V = t[43]);
  let H;
  t[44] !== r.account || t[45] !== N
    ? ((H =
        N == null
          ? null
          : (0, k.jsx)(ue, {
              children: (0, k.jsx)(a, {
                id: `settings.consumerBilling.renewalDescription`,
                defaultMessage: `Your current {plan, select, go {Go} plus {Plus} other {Pro}} subscription will auto-renew on {date}`,
                description: `Renewal confirmation dialog explanation. plan is the current personal plan and date is the localized date when automatic renewal resumes.`,
                values: { plan: r.account.plan_type, date: N },
              }),
            })),
      (t[44] = r.account),
      (t[45] = N),
      (t[46] = H))
    : (H = t[46]);
  let U;
  t[47] === H
    ? (U = t[48])
    : ((U = (0, k.jsx)(m, { children: (0, k.jsx)(ie, { title: V, subtitle: H }) })),
      (t[47] = H),
      (t[48] = U));
  let W;
  t[49] === I ? (W = t[50]) : ((W = (0, k.jsx)(m, { children: I })), (t[49] = I), (t[50] = W));
  let G;
  t[51] === M
    ? (G = t[52])
    : ((G = M
        ? (0, k.jsx)(m, {
            children: (0, k.jsx)(`p`, {
              role: `alert`,
              children: (0, k.jsx)(a, {
                id: `settings.consumerBilling.renewalError`,
                defaultMessage: `There was a problem updating your subscription`,
                description: `Error shown after a personal subscription renewal request fails. The dialog stays open so the subscriber can review or retry.`,
              }),
            }),
          })
        : null),
      (t[51] = M),
      (t[52] = G));
  let K;
  t[53] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, k.jsx)(a, {
        id: `settings.consumerBilling.renewalCancel`,
        defaultMessage: `Cancel`,
        description: `Closes the subscription renewal confirmation without restoring renewal.`,
      })),
      (t[53] = K))
    : (K = t[53]);
  let q;
  t[54] !== g || t[55] !== j
    ? ((q = (0, k.jsx)(le, {
        color: `secondary`,
        type: `button`,
        disabled: j,
        onClick: g,
        children: K,
      })),
      (t[54] = g),
      (t[55] = j),
      (t[56] = q))
    : (q = t[56]);
  let J = !F,
    Y;
  t[57] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, k.jsx)(a, {
        id: `settings.consumerBilling.renewalConfirm`,
        defaultMessage: `Confirm`,
        description: `Confirms the reviewed recurring price and restores automatic renewal for the existing personal subscription.`,
      })),
      (t[57] = Y))
    : (Y = t[57]);
  let X;
  t[58] !== j || t[59] !== J
    ? ((X = (0, k.jsx)(le, {
        color: `primary`,
        type: `submit`,
        disabled: J,
        loading: j,
        children: Y,
      })),
      (t[58] = j),
      (t[59] = J),
      (t[60] = X))
    : (X = t[60]);
  let Z;
  t[61] !== q || t[62] !== X
    ? ((Z = (0, k.jsx)(m, { children: (0, k.jsxs)(ae, { children: [q, X] }) })),
      (t[61] = q),
      (t[62] = X),
      (t[63] = Z))
    : (Z = t[63]);
  let Q;
  t[64] !== U || t[65] !== W || t[66] !== G || t[67] !== Z || t[68] !== B
    ? ((Q = (0, k.jsxs)(c, { as: `form`, onSubmit: B, children: [U, W, G, Z] })),
      (t[64] = U),
      (t[65] = W),
      (t[66] = G),
      (t[67] = Z),
      (t[68] = B),
      (t[69] = Q))
    : (Q = t[69]);
  let $;
  return (
    t[70] !== Q || t[71] !== L || t[72] !== R || t[73] !== z
      ? (($ = (0, k.jsx)(pe, {
          open: !0,
          contentProps: L,
          showDialogClose: R,
          onOpenChange: z,
          children: Q,
        })),
        (t[70] = Q),
        (t[71] = L),
        (t[72] = R),
        (t[73] = z),
        (t[74] = $))
      : ($ = t[74]),
    $
  );
}
var xe, Se, k;
e(() => {
  ((xe = y()),
    x(),
    u(),
    (Se = t(i(), 1)),
    f(),
    r(),
    _(),
    h(),
    v(),
    b(),
    p(),
    s(),
    d(),
    l(),
    ge(),
    S(),
    w(),
    D(),
    C(),
    T(),
    (k = g()));
})();
export { O as SubscriptionRenewalDialog };
//# sourceMappingURL=renewal-dialog-af4be22cc044.js.map
