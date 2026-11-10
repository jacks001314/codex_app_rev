import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as ee,
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  Hit as a,
  IO as o,
  JO as te,
  KO as ne,
  LNt as re,
  LO as ie,
  Mst as ae,
  PBt as s,
  Pit as c,
  Qst as oe,
  RO as se,
  Vit as l,
  Vrt as u,
  WO as ce,
  XOt as d,
  Y3 as le,
  Z3 as f,
  ZSt as p,
  ew as m,
  jit as ue,
  jst as h,
  okt as de,
  qO as fe,
  qrt as pe,
  sw as me,
  tkt as g,
  uw as _,
  vst as v,
  yst as he,
  zO as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GVn as ge,
  HVn as _e,
  IAr as b,
  MT as ve,
  NAr as ye,
  Njt as be,
  UVn as xe,
  VVn as Se,
  WVn as Ce,
  iRr as we,
  jT as x,
  okn as Te,
  sRr as S,
  skn as Ee,
  xMr as De,
  yMr as C,
} from "./app-initial-ad16eaadf81f.js";
import { n as w, t as Oe } from "./format-amount-ee20e9ffab40.js";
import { n as T, r as ke } from "./queries-95931bb8c995.js";
import { n as E, t as Ae } from "./query-error-2df1f6b7fd60.js";
import { n as je, r as Me, t as D } from "./events-f53e050a3246.js";
import { n as O } from "./queries-fc828e9ef3ca.js";
import { r as k, t as Ne } from "./status-1f159a29fe61.js";
function A(e) {
  let n = (0, Pe.c)(87),
    { account: r, accountId: i, onClose: te, onRenewed: re } = e,
    s = t(oe),
    c = de(),
    l = ve(),
    u = (0, j.useRef)(!1),
    d;
  n[0] !== te || n[1] !== s
    ? ((d = () => {
        (u.current &&
          ((u.current = !1),
          Me(s, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !1 } })),
          te());
      }),
      (n[0] = te),
      (n[1] = s),
      (n[2] = d))
    : (d = n[2]);
  let f = d,
    p;
  n[3] === i ? (p = n[4]) : ((p = be(i)), (n[3] = i), (n[4] = p));
  let { data: m, error: h, errorUpdatedAt: _, isError: v, isPending: ge, isFetching: b, refetch: x } = ae(p),
    Te = (0, j.useRef)(null),
    S;
  n[5] !== i || n[6] !== v || n[7] !== s || n[8] !== h || n[9] !== _
    ? ((S = () => {
        if (
          !v ||
          a(h) ||
          (h instanceof ue && h.errorKind === `network`) ||
          (Te.current?.accountId === i && Te.current.updatedAt === _)
        )
          return;
        Te.current = { accountId: i, updatedAt: _ };
        let e = s.get(Ee) === `codex` ? `codex` : s.get(ye);
        De(s, xe, {
          format: Se.CHATGPT_USER_FACING_ERROR_FORMAT_INLINE,
          severity: _e.CHATGPT_USER_FACING_ERROR_SEVERITY_ERROR,
          surface:
            e == null
              ? void 0
              : {
                  chat: Ce.CHATGPT_USER_FACING_ERROR_SURFACE_CHATGPT,
                  work: Ce.CHATGPT_USER_FACING_ERROR_SURFACE_WORK,
                  codex: Ce.CHATGPT_USER_FACING_ERROR_SURFACE_CODEX,
                }[e],
          presentationId: `subscription_data`,
          canRetry: !0,
        });
      }),
      (n[5] = i),
      (n[6] = v),
      (n[7] = s),
      (n[8] = h),
      (n[9] = _),
      (n[10] = S))
    : (S = n[10]);
  let C = (0, j.useEffectEvent)(S),
    w;
  n[11] === C
    ? (w = n[12])
    : ((w = () => {
        C();
      }),
      (n[11] = C),
      (n[12] = w));
  let T;
  (n[13] !== i || n[14] !== v || n[15] !== _
    ? ((T = [i, v, _]), (n[13] = i), (n[14] = v), (n[15] = _), (n[16] = T))
    : (T = n[16]),
    (0, j.useEffect)(w, T));
  let E = m?.plan_type,
    D = m?.entitlement ?? (E === r.account.plan_type ? r.entitlement : void 0),
    O;
  n[17] === i
    ? (O = n[18])
    : ((O = {
        queryKey: [`consumer-billing`, i, `renewal-preview`],
        queryFn: (e) => {
          let { signal: ee } = e;
          return we.safeGet(`/subscriptions/renew/preview`, {
            parameters: { query: { account_id: i } },
            signal: ee,
          });
        },
        staleTime: 0,
        retry: !1,
        refetchOnMount: `always`,
      }),
      (n[17] = i),
      (n[18] = O));
  let { data: k, isError: A, isFetching: N, refetch: Fe } = ae(O),
    P;
  n[19] === i
    ? (P = n[20])
    : ((P = () => we.safePost(`/subscriptions/renew`, { requestBody: { account_id: i } })),
      (n[19] = i),
      (n[20] = P));
  let F;
  n[21] !== l || n[22] !== s
    ? ((F = (e) => {
        l() && je(s, e);
      }),
      (n[21] = l),
      (n[22] = s),
      (n[23] = F))
    : (F = n[23]);
  let {
      mutate: Ie,
      isPending: I,
      isError: Le,
    } = he({
      mutationFn: P,
      onSuccess: async () => {
        (await ke(s, i),
          l() &&
            (s
              .get(pe)
              .success(
                L == null
                  ? c.formatMessage({
                      id: `settings.consumerBilling.renewalSucceeded`,
                      defaultMessage: `Your subscription has been renewed`,
                      description: `Success notification after the server confirms that automatic renewal has been restored for a personal subscription.`,
                    })
                  : c.formatMessage(
                      {
                        id: `settings.consumerBilling.renewalSucceededWithDate`,
                        defaultMessage: `Your subscription has been renewed. Your subscription will auto-renew on {renewalDate}.`,
                        description: `Success notification after restoring subscription renewal; renewalDate is the actual next automatic billing date shown in the confirmation.`,
                      },
                      { renewalDate: L },
                    ),
              ),
            E != null && Me(s, { name: `chatgpt_renew_plan_success`, metadata: { planType: E } }),
            re?.(),
            f()));
      },
      onError: F,
    }),
    Re =
      D?.cancels_at != null && D.renews_at != null && Date.parse(D.cancels_at) > Date.parse(D.renews_at)
        ? D.cancels_at
        : (k?.renewal_date ?? D?.renews_at),
    L = Re == null || N || A ? null : c.formatDate(Re, { year: `numeric`, month: `short`, day: `numeric` }),
    ze = m?.scheduled_billing_period ?? m?.billing_period ?? D?.billing_period,
    R = m != null && k != null && !N && !A && !ge && !b && !v && !I,
    z;
  if (A || v || (!ge && m == null)) {
    let e;
    (n[24] !== Fe || n[25] !== x
      ? ((e = (0, M.jsx)(Ae, {
          onRetry: () => {
            (Fe(), x());
          },
        })),
        (n[24] = Fe),
        (n[25] = x),
        (n[26] = e))
      : (e = n[26]),
      (z = e));
  } else if (k == null || m == null || N || b) {
    let e;
    (n[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, M.jsx)(`p`, {
          role: `status`,
          children: (0, M.jsx)(g, {
            id: `settings.consumerBilling.renewalLoading`,
            defaultMessage: `Checking your billing details…`,
            description: `Loading state while the renewal confirmation retrieves the actual subscription price from the server.`,
          }),
        })),
        (n[27] = e))
      : (e = n[27]),
      (z = e));
  } else {
    let e;
    n[28] === m.plan_type
      ? (e = n[29])
      : ((e = (0, M.jsx)(Ne, { plan: m.plan_type })), (n[28] = m.plan_type), (n[29] = e));
    let t;
    n[30] === L
      ? (t = n[31])
      : ((t =
          L == null
            ? null
            : (0, M.jsx)(g, {
                id: `settings.consumerBilling.renewalBillingStart`,
                defaultMessage: `Billing will auto-renew on {date}`,
                description: `Date beneath the plan name in the renewal confirmation. date is the localized next automatic billing date.`,
                values: { date: L },
              })),
        (n[30] = L),
        (n[31] = t));
    let r;
    n[32] === k.currency ? (r = n[33]) : ((r = k.currency.toUpperCase()), (n[32] = k.currency), (n[33] = r));
    let i;
    n[34] !== c || n[35] !== k.amount_due.amount || n[36] !== k.currency
      ? ((i = Oe(c, k.amount_due.amount, k.currency)),
        (n[34] = c),
        (n[35] = k.amount_due.amount),
        (n[36] = k.currency),
        (n[37] = i))
      : (i = n[37]);
    let a;
    n[38] !== ze || n[39] !== r || n[40] !== i
      ? ((a = (0, M.jsx)(g, {
          id: `settings.consumerBilling.renewalPrice`,
          defaultMessage: `{currency} {price}/{period, select, yearly {year} other {month}}`,
          description: `Server-verified recurring price in the renewal confirmation. currency is its ISO code, price is the localized amount including the currency symbol, and period chooses year or month.`,
          values: { currency: r, price: i, period: ze },
        })),
        (n[38] = ze),
        (n[39] = r),
        (n[40] = i),
        (n[41] = a))
      : (a = n[41]);
    let o;
    (n[42] !== t || n[43] !== a || n[44] !== e
      ? ((o = (0, M.jsx)(ee, { children: (0, M.jsx)(me, { label: e, description: t, control: a }) })),
        (n[42] = t),
        (n[43] = a),
        (n[44] = e),
        (n[45] = o))
      : (o = n[45]),
      (z = o));
  }
  let B;
  n[46] === s
    ? (B = n[47])
    : ((B = {
        onOpenAutoFocus: () => {
          u.current ||
            ((u.current = !0),
            Me(s, { name: `chatgpt_toggle_plan_management_modal`, metadata: { isOpen: !0 } }));
        },
      }),
      (n[46] = s),
      (n[47] = B));
  let Be = !I,
    V;
  n[48] !== f || n[49] !== I
    ? ((V = (e) => {
        !e && !I && f();
      }),
      (n[48] = f),
      (n[49] = I),
      (n[50] = V))
    : (V = n[50]);
  let H;
  n[51] !== R || n[52] !== Ie
    ? ((H = (e) => {
        (e.preventDefault(), R && Ie());
      }),
      (n[51] = R),
      (n[52] = Ie),
      (n[53] = H))
    : (H = n[53]);
  let U;
  n[54] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, M.jsx)(fe, {
        children: (0, M.jsx)(g, {
          id: `settings.consumerBilling.renewalTitle`,
          defaultMessage: `Confirm plan changes`,
          description: `Title of the dialog confirming restoration of a canceled personal subscription's automatic renewal.`,
        }),
      })),
      (n[54] = U))
    : (U = n[54]);
  let W;
  n[55] !== L || n[56] !== b || n[57] !== E
    ? ((W =
        L == null || E == null || b
          ? null
          : (0, M.jsx)(ne, {
              children: (0, M.jsx)(g, {
                id: `settings.consumerBilling.renewalDescription.numberedTiers`,
                defaultMessage: `Your current {plan, select, go {Go} plus {Plus} prolite {Pro 100} pro {Pro 200} promax {Pro 500} other {Pro}} subscription will auto-renew on {date}`,
                description: `Renewal confirmation dialog explanation. plan is the current paid personal plan type; the Pro tier names are Pro 100, Pro 200, and Pro 500. date is the localized date when automatic renewal resumes. The numbers in Pro plan names are fixed SKU names, not localized prices.`,
                values: { plan: E, date: L },
              }),
            })),
      (n[55] = L),
      (n[56] = b),
      (n[57] = E),
      (n[58] = W))
    : (W = n[58]);
  let G;
  n[59] === W
    ? (G = n[60])
    : ((G = (0, M.jsx)(y, { children: (0, M.jsx)(se, { title: U, subtitle: W }) })),
      (n[59] = W),
      (n[60] = G));
  let K;
  n[61] === z ? (K = n[62]) : ((K = (0, M.jsx)(y, { children: z })), (n[61] = z), (n[62] = K));
  let q;
  n[63] === Le
    ? (q = n[64])
    : ((q = Le
        ? (0, M.jsx)(y, {
            children: (0, M.jsx)(`p`, {
              role: `alert`,
              children: (0, M.jsx)(g, {
                id: `settings.consumerBilling.renewalError`,
                defaultMessage: `There was a problem updating your subscription`,
                description: `Error shown after a personal subscription renewal request fails. The dialog stays open so the subscriber can review or retry.`,
              }),
            }),
          })
        : null),
      (n[63] = Le),
      (n[64] = q));
  let J;
  n[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, M.jsx)(g, {
        id: `settings.consumerBilling.renewalCancel`,
        defaultMessage: `Cancel`,
        description: `Closes the subscription renewal confirmation without restoring renewal.`,
      })),
      (n[65] = J))
    : (J = n[65]);
  let Y;
  n[66] !== f || n[67] !== I
    ? ((Y = (0, M.jsx)(le, { color: `secondary`, type: `button`, disabled: I, onClick: f, children: J })),
      (n[66] = f),
      (n[67] = I),
      (n[68] = Y))
    : (Y = n[68]);
  let Ve = !R,
    X;
  n[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, M.jsx)(g, {
        id: `settings.consumerBilling.renewalConfirm`,
        defaultMessage: `Confirm`,
        description: `Confirms the reviewed recurring price and restores automatic renewal for the existing personal subscription.`,
      })),
      (n[69] = X))
    : (X = n[69]);
  let Z;
  n[70] !== I || n[71] !== Ve
    ? ((Z = (0, M.jsx)(le, { color: `primary`, type: `submit`, disabled: Ve, loading: I, children: X })),
      (n[70] = I),
      (n[71] = Ve),
      (n[72] = Z))
    : (Z = n[72]);
  let Q;
  n[73] !== Y || n[74] !== Z
    ? ((Q = (0, M.jsx)(y, { children: (0, M.jsxs)(ie, { children: [Y, Z] }) })),
      (n[73] = Y),
      (n[74] = Z),
      (n[75] = Q))
    : (Q = n[75]);
  let $;
  n[76] !== H || n[77] !== G || n[78] !== K || n[79] !== q || n[80] !== Q
    ? (($ = (0, M.jsxs)(o, {
        as: `form`,
        "data-testid": `modal-plan-management`,
        onSubmit: H,
        children: [G, K, q, Q],
      })),
      (n[76] = H),
      (n[77] = G),
      (n[78] = K),
      (n[79] = q),
      (n[80] = Q),
      (n[81] = $))
    : ($ = n[81]);
  let He;
  return (
    n[82] !== Be || n[83] !== V || n[84] !== $ || n[85] !== B
      ? ((He = (0, M.jsx)(ce, {
          open: !0,
          contentProps: B,
          showDialogClose: Be,
          onOpenChange: V,
          children: $,
        })),
        (n[82] = Be),
        (n[83] = V),
        (n[84] = $),
        (n[85] = B),
        (n[86] = He))
      : (He = n[86]),
    He
  );
}
var Pe, j, M;
function N() {
  return (N = e(() => {
    ((Pe = s()),
      ge(),
      v(),
      h(),
      p(),
      (j = r()),
      d(),
      l(),
      b(),
      f(),
      te(),
      i(),
      u(),
      C(),
      n(),
      _(),
      m(),
      Te(),
      S(),
      x(),
      c(),
      w(),
      T(),
      E(),
      D(),
      O(),
      k(),
      (M = re()));
  }))();
}
export { N as n, A as t };
//# sourceMappingURL=renewal-dialog-3a8749368de6.js.map
