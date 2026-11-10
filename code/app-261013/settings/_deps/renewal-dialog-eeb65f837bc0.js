import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ert as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  JC as s,
  Lot as ee,
  Pxt as c,
  Trt as l,
  VDt as te,
  Xot as ne,
  Yot as re,
  _O as ie,
  cO as ae,
  fO as u,
  gO as oe,
  hot as se,
  hrt as ce,
  iw as d,
  jDt as f,
  lO as p,
  lot as m,
  mO as le,
  oO as ue,
  qC as de,
  sO as fe,
  t3 as h,
  tw as pe,
  vO as g,
  vrt as _,
  vzt as v,
  wot as y,
  xMt as b,
  yzt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  DRn as me,
  EPt as he,
  ERn as ge,
  LTn as _e,
  ORn as S,
  QDr as ve,
  RTn as ye,
  TRn as be,
  XDr as xe,
  hEr as Se,
  iPr as Ce,
  nT as C,
  rT as we,
  sPr as w,
  vEr as T,
  wRn as Te,
} from "./app-initial-5851df3f6cb1.js";
import { n as E, t as Ee } from "./format-amount-e8f6a81b6cbb.js";
import { n as D, r as De } from "./queries-a0c4a0375be0.js";
import { n as O, t as Oe } from "./query-error-f06ec25b6ac2.js";
import { n as ke, r as Ae, t as k } from "./events-c330edcaee07.js";
import { i as A } from "./queries-fdefe92e9bc4.js";
import { r as j, t as je } from "./status-9d8853855965.js";
function M(e) {
  let a = (0, Me.c)(87),
    { account: s, accountId: c, onClose: l, onRenewed: re } = e,
    u = o(n),
    d = te(),
    f = we(),
    m = (0, N.useRef)(!1),
    h;
  a[0] !== l || a[1] !== u
    ? ((h = () => {
        (m.current &&
          ((m.current = !1),
          Ae(u, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !1 } })),
          l());
      }),
      (a[0] = l),
      (a[1] = u),
      (a[2] = h))
    : (h = a[2]);
  let g = h,
    _;
  a[3] === c ? (_ = a[4]) : ((_ = he(c)), (a[3] = c), (a[4] = _));
  let { data: v, error: y, errorUpdatedAt: b, isError: x, isPending: _e, isFetching: S, refetch: xe } = ne(_),
    C = (0, N.useRef)(null),
    w;
  a[5] !== c || a[6] !== x || a[7] !== u || a[8] !== y || a[9] !== b
    ? ((w = () => {
        if (
          !x ||
          r(y) ||
          (y instanceof ce && y.errorKind === `network`) ||
          (C.current?.accountId === c && C.current.updatedAt === b)
        )
          return;
        C.current = { accountId: c, updatedAt: b };
        let e = u.get(ye) === `codex` ? `codex` : u.get(Se);
        ve(u, ge, {
          format: Te.CHATGPT_USER_FACING_ERROR_FORMAT_INLINE,
          severity: be.CHATGPT_USER_FACING_ERROR_SEVERITY_ERROR,
          surface:
            e == null
              ? void 0
              : {
                  chat: me.CHATGPT_USER_FACING_ERROR_SURFACE_CHATGPT,
                  work: me.CHATGPT_USER_FACING_ERROR_SURFACE_WORK,
                  codex: me.CHATGPT_USER_FACING_ERROR_SURFACE_CODEX,
                }[e],
          presentationId: `subscription_data`,
          canRetry: !0,
        });
      }),
      (a[5] = c),
      (a[6] = x),
      (a[7] = u),
      (a[8] = y),
      (a[9] = b),
      (a[10] = w))
    : (w = a[10]);
  let T = (0, N.useEffectEvent)(w),
    E;
  a[11] === T
    ? (E = a[12])
    : ((E = () => {
        T();
      }),
      (a[11] = T),
      (a[12] = E));
  let D;
  (a[13] !== c || a[14] !== x || a[15] !== b
    ? ((D = [c, x, b]), (a[13] = c), (a[14] = x), (a[15] = b), (a[16] = D))
    : (D = a[16]),
    (0, N.useEffect)(E, D));
  let O = v?.plan_type,
    k = v?.entitlement ?? (O === s.account.plan_type ? s.entitlement : void 0),
    A;
  a[17] === c
    ? (A = a[18])
    : ((A = {
        queryKey: [`consumer-billing`, c, `renewal-preview`],
        queryFn: (e) => {
          let { signal: t } = e;
          return Ce.safeGet(`/subscriptions/renew/preview`, {
            parameters: { query: { account_id: c } },
            signal: t,
          });
        },
        staleTime: 0,
        retry: !1,
        refetchOnMount: `always`,
      }),
      (a[17] = c),
      (a[18] = A));
  let { data: j, isError: M, isFetching: F, refetch: Ne } = ne(A),
    I;
  a[19] === c
    ? (I = a[20])
    : ((I = () => Ce.safePost(`/subscriptions/renew`, { requestBody: { account_id: c } })),
      (a[19] = c),
      (a[20] = I));
  let L;
  a[21] !== f || a[22] !== u
    ? ((L = (e) => {
        f() && ke(u, e);
      }),
      (a[21] = f),
      (a[22] = u),
      (a[23] = L))
    : (L = a[23]);
  let {
      mutate: Pe,
      isPending: R,
      isError: Fe,
    } = ee({
      mutationFn: I,
      onSuccess: async () => {
        (await De(u, c),
          f() &&
            (u
              .get(se)
              .success(
                z == null
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
                      { renewalDate: z },
                    ),
              ),
            O != null && Ae(u, { name: `chatgpt_renew_plan_success`, metadata: { planType: O } }),
            re?.(),
            g()));
      },
      onError: L,
    }),
    Ie =
      k?.cancels_at != null && k.renews_at != null && Date.parse(k.cancels_at) > Date.parse(k.renews_at)
        ? k.cancels_at
        : (j?.renewal_date ?? k?.renews_at),
    z = Ie == null || F || M ? null : d.formatDate(Ie, { year: `numeric`, month: `short`, day: `numeric` }),
    Le = v?.scheduled_billing_period ?? v?.billing_period ?? k?.billing_period,
    B = v != null && j != null && !F && !M && !_e && !S && !x && !R,
    V;
  if (M || x || (!_e && v == null)) {
    let e;
    (a[24] !== Ne || a[25] !== xe
      ? ((e = (0, P.jsx)(Oe, {
          onRetry: () => {
            (Ne(), xe());
          },
        })),
        (a[24] = Ne),
        (a[25] = xe),
        (a[26] = e))
      : (e = a[26]),
      (V = e));
  } else if (j == null || v == null || F || S) {
    let e;
    (a[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, P.jsx)(`p`, {
          role: `status`,
          children: (0, P.jsx)(i, {
            id: `settings.consumerBilling.renewalLoading`,
            defaultMessage: `Checking your billing details…`,
            description: `Loading state while the renewal confirmation retrieves the actual subscription price from the server.`,
          }),
        })),
        (a[27] = e))
      : (e = a[27]),
      (V = e));
  } else {
    let e;
    a[28] === v.plan_type
      ? (e = a[29])
      : ((e = (0, P.jsx)(je, { plan: v.plan_type })), (a[28] = v.plan_type), (a[29] = e));
    let t;
    a[30] === z
      ? (t = a[31])
      : ((t =
          z == null
            ? null
            : (0, P.jsx)(i, {
                id: `settings.consumerBilling.renewalBillingStart`,
                defaultMessage: `Billing will auto-renew on {date}`,
                description: `Date beneath the plan name in the renewal confirmation. date is the localized next automatic billing date.`,
                values: { date: z },
              })),
        (a[30] = z),
        (a[31] = t));
    let n;
    a[32] === j.currency ? (n = a[33]) : ((n = j.currency.toUpperCase()), (a[32] = j.currency), (a[33] = n));
    let r;
    a[34] !== d || a[35] !== j.amount_due.amount || a[36] !== j.currency
      ? ((r = Ee(d, j.amount_due.amount, j.currency)),
        (a[34] = d),
        (a[35] = j.amount_due.amount),
        (a[36] = j.currency),
        (a[37] = r))
      : (r = a[37]);
    let o;
    a[38] !== Le || a[39] !== n || a[40] !== r
      ? ((o = (0, P.jsx)(i, {
          id: `settings.consumerBilling.renewalPrice`,
          defaultMessage: `{currency} {price}/{period, select, yearly {year} other {month}}`,
          description: `Server-verified recurring price in the renewal confirmation. currency is its ISO code, price is the localized amount including the currency symbol, and period chooses year or month.`,
          values: { currency: n, price: r, period: Le },
        })),
        (a[38] = Le),
        (a[39] = n),
        (a[40] = r),
        (a[41] = o))
      : (o = a[41]);
    let s;
    (a[42] !== t || a[43] !== o || a[44] !== e
      ? ((s = (0, P.jsx)(de, { children: (0, P.jsx)(pe, { label: e, description: t, control: o }) })),
        (a[42] = t),
        (a[43] = o),
        (a[44] = e),
        (a[45] = s))
      : (s = a[45]),
      (V = s));
  }
  let H;
  a[46] === u
    ? (H = a[47])
    : ((H = {
        onOpenAutoFocus: () => {
          m.current ||
            ((m.current = !0),
            Ae(u, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !0 } }));
        },
      }),
      (a[46] = u),
      (a[47] = H));
  let Re = !R,
    U;
  a[48] !== g || a[49] !== R
    ? ((U = (e) => {
        !e && !R && g();
      }),
      (a[48] = g),
      (a[49] = R),
      (a[50] = U))
    : (U = a[50]);
  let W;
  a[51] !== B || a[52] !== Pe
    ? ((W = (e) => {
        (e.preventDefault(), B && Pe());
      }),
      (a[51] = B),
      (a[52] = Pe),
      (a[53] = W))
    : (W = a[53]);
  let G;
  a[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, P.jsx)(ie, {
        children: (0, P.jsx)(i, {
          id: `settings.consumerBilling.renewalTitle`,
          defaultMessage: `Confirm plan changes`,
          description: `Title of the dialog confirming restoration of a canceled personal subscription's automatic renewal.`,
        }),
      })),
      (a[54] = G))
    : (G = a[54]);
  let K;
  a[55] !== z || a[56] !== S || a[57] !== O
    ? ((K =
        z == null || O == null || S
          ? null
          : (0, P.jsx)(oe, {
              children: (0, P.jsx)(i, {
                id: `settings.consumerBilling.renewalDescription.numberedTiers`,
                defaultMessage: `Your current {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}} subscription will auto-renew on {date}`,
                description: `Renewal confirmation dialog explanation. plan is the current paid personal plan type; the Pro tier names are Pro 100, Pro 200, and Pro 500. date is the localized date when automatic renewal resumes. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                values: { plan: O, date: z },
              }),
            })),
      (a[55] = z),
      (a[56] = S),
      (a[57] = O),
      (a[58] = K))
    : (K = a[58]);
  let q;
  a[59] === K
    ? (q = a[60])
    : ((q = (0, P.jsx)(p, { children: (0, P.jsx)(ae, { title: G, subtitle: K }) })),
      (a[59] = K),
      (a[60] = q));
  let J;
  a[61] === V ? (J = a[62]) : ((J = (0, P.jsx)(p, { children: V })), (a[61] = V), (a[62] = J));
  let Y;
  a[63] === Fe
    ? (Y = a[64])
    : ((Y = Fe
        ? (0, P.jsx)(p, {
            children: (0, P.jsx)(`p`, {
              role: `alert`,
              children: (0, P.jsx)(i, {
                id: `settings.consumerBilling.renewalError`,
                defaultMessage: `There was a problem updating your subscription`,
                description: `Error shown after a personal subscription renewal request fails. The dialog stays open so the subscriber can review or retry.`,
              }),
            }),
          })
        : null),
      (a[63] = Fe),
      (a[64] = Y));
  let ze;
  a[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ze = (0, P.jsx)(i, {
        id: `settings.consumerBilling.renewalCancel`,
        defaultMessage: `Cancel`,
        description: `Closes the subscription renewal confirmation without restoring renewal.`,
      })),
      (a[65] = ze))
    : (ze = a[65]);
  let X;
  a[66] !== g || a[67] !== R
    ? ((X = (0, P.jsx)(t, { color: `secondary`, type: `button`, disabled: R, onClick: g, children: ze })),
      (a[66] = g),
      (a[67] = R),
      (a[68] = X))
    : (X = a[68]);
  let Be = !B,
    Ve;
  a[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ve = (0, P.jsx)(i, {
        id: `settings.consumerBilling.renewalConfirm`,
        defaultMessage: `Confirm`,
        description: `Confirms the reviewed recurring price and restores automatic renewal for the existing personal subscription.`,
      })),
      (a[69] = Ve))
    : (Ve = a[69]);
  let Z;
  a[70] !== R || a[71] !== Be
    ? ((Z = (0, P.jsx)(t, { color: `primary`, type: `submit`, disabled: Be, loading: R, children: Ve })),
      (a[70] = R),
      (a[71] = Be),
      (a[72] = Z))
    : (Z = a[72]);
  let Q;
  a[73] !== X || a[74] !== Z
    ? ((Q = (0, P.jsx)(p, { children: (0, P.jsxs)(fe, { children: [X, Z] }) })),
      (a[73] = X),
      (a[74] = Z),
      (a[75] = Q))
    : (Q = a[75]);
  let $;
  a[76] !== W || a[77] !== q || a[78] !== J || a[79] !== Y || a[80] !== Q
    ? (($ = (0, P.jsxs)(ue, {
        as: `form`,
        "data-testid": `modal-plan-management`,
        onSubmit: W,
        children: [q, J, Y, Q],
      })),
      (a[76] = W),
      (a[77] = q),
      (a[78] = J),
      (a[79] = Y),
      (a[80] = Q),
      (a[81] = $))
    : ($ = a[81]);
  let He;
  return (
    a[82] !== Re || a[83] !== U || a[84] !== $ || a[85] !== H
      ? ((He = (0, P.jsx)(le, {
          open: !0,
          contentProps: H,
          showDialogClose: Re,
          onOpenChange: U,
          children: $,
        })),
        (a[82] = Re),
        (a[83] = U),
        (a[84] = $),
        (a[85] = H),
        (a[86] = He))
      : (He = a[86]),
    He
  );
}
var Me, N, P;
function F() {
  return (F = e(() => {
    ((Me = v()),
      S(),
      a(),
      re(),
      c(),
      (N = x()),
      f(),
      l(),
      T(),
      h(),
      g(),
      u(),
      m(),
      xe(),
      y(),
      d(),
      s(),
      _e(),
      w(),
      C(),
      _(),
      E(),
      D(),
      O(),
      k(),
      A(),
      j(),
      (P = b()));
  }))();
}
export { F as n, M as t };
//# sourceMappingURL=renewal-dialog-eeb65f837bc0.js.map
