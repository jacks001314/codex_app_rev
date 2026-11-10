import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $It as t,
  Cot as n,
  EPt as r,
  JIt as i,
  Pxt as a,
  RLt as o,
  TLt as s,
  _It as c,
  aSt as l,
  cSt as u,
  hot as d,
  lot as f,
  pIt as p,
  pLt as m,
  wot as h,
  xLt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as _,
  HAt as v,
  RAt as y,
  WAt as b,
  Ymr as x,
  ehr as S,
  tNr as C,
} from "./app-initial-5851df3f6cb1.js";
async function w(e, t, n, r, i = e.get(_)) {
  let a = typeof n.payload?.action == `string` ? n.payload.action : n.type,
    o = a === `ledger_transaction_category_save`,
    s = k.safeParse(n.payload),
    c = r();
  if (!s.success || !c || (o && s.data.corrections.length !== 1)) return;
  let { corrections: l, detail_context: u } = s.data,
    [f] = l,
    p = e.get(_),
    m = c.getState(),
    h = () => e.get(_) === p,
    g = e.get(P, i),
    v = g.pending.then(() =>
      h()
        ? x
            .safePost(`/widget_server_action`, {
              requestBody: {
                action_type: a,
                payload: o ? { corrections: l, detail_context: u } : { corrections: l },
              },
              signal: AbortSignal.timeout(12e4),
            })
            .catch(() => null)
        : null,
    );
  ((g.pending = v), g.latestByWidget.set(c, v));
  let y = () =>
      r() === c &&
      h() &&
      g.latestByWidget.get(c) === v &&
      (!o ||
        (c.getState().transaction_id === f.transaction_id &&
          c.getState().sensitive_values_hidden === m.sensitive_values_hidden &&
          c.getState().draft_primary_category_id === f.target_primary_category)),
    b = await v;
  if (!h()) return;
  E(e, i);
  let S = b?.data,
    C =
      b?.status === `success` &&
      (!o ||
        (S?.transaction_id === f.transaction_id &&
          S.primary_category_id === f.target_primary_category &&
          (S.saved_count === 0 || S.saved_count === 1)));
  if (!y()) return;
  if ((o && c.setState({ category_save_in_progress: !1 }, !1), !C)) {
    e.get(d).danger(
      b?.status_message ||
        t.formatMessage({
          id: `personalFinance.dashboard.categoryReviewSaveError`,
          defaultMessage: `Could not save category edits`,
          description: `Error toast when changes to transaction categories cannot be saved in Personal Finance, including its dashboard, conversations, and transaction details`,
        }),
      { errorAnalytics: { toastId: `personalFinance.dashboard.categoryReviewSaveError` } },
    );
    return;
  }
  if (!o) {
    let e = j.safeParse(c.getState());
    if (e.success) {
      let t = new Map(l.map((e) => [e.transaction_id, e.target_primary_category]));
      c.setState(
        {
          transactions: e.data.transactions.filter(
            (n) =>
              t.get(n.id) !== (e.data.draft_primary_category_by_id?.[n.id] ?? n.draft_primary_category_id),
          ),
        },
        !1,
      );
    }
    return;
  }
  let w = D(S?.category_context);
  (c.setState(
    {
      saved_primary_category_id: f.target_primary_category,
      category_label: m.draft_category_label,
      category_icon: m.draft_category_icon,
      category_context_loading: !1,
      ...(w ?? { budget: null, related_transactions: [], category_context_stale: !0 }),
    },
    !1,
  ),
    T(e, r, i, u));
}
async function T(e, t, n = e.get(_), r) {
  let a = t(),
    o = M.safeParse(a?.getState());
  if (!a || !o.success) return;
  let c = o.data;
  if (
    !c.category_context_stale ||
    c.category_context_loading ||
    c.category_save_in_progress ||
    c.saved_primary_category_id !== c.draft_primary_category_id
  )
    return;
  let l = e.get(_),
    u = () => {
      let n = a.getState();
      return (
        t() === a &&
        e.get(_) === l &&
        n.transaction_id === c.transaction_id &&
        n.sensitive_values_hidden === c.sensitive_values_hidden &&
        !n.category_save_in_progress &&
        n.saved_primary_category_id === c.saved_primary_category_id &&
        n.draft_primary_category_id === c.saved_primary_category_id
      );
    },
    d = g(s(), i()).safeParse(
      r ?? {
        displayTitle: c.display_name,
        merchant_name: c.merchant_name,
        transaction_date: c.transaction_date,
        date_label: c.date_label,
        amount_label: c.amount_label,
        account_name: c.account_name,
        month_start: c.month_start,
        currency_code: c.currency_code,
        logo_url: c.logo_url,
        sensitive_values_hidden: c.sensitive_values_hidden,
      },
    );
  if (d.success) {
    a.setState({ category_context_loading: !0 }, !1);
    try {
      for (let t = 0; t < 2; t += 1) {
        if ((t > 0 && (await new Promise((e) => setTimeout(e, 1e3))), !u())) return;
        let r = await x
          .safePost(`/widget_server_action`, {
            requestBody: {
              action_type: `ledger_transaction_category_context`,
              payload: {
                transaction_id: c.transaction_id,
                primary_category_id: c.saved_primary_category_id,
                detail_context: d.data,
              },
            },
            signal: AbortSignal.timeout(2e4),
          })
          .catch(() => null);
        if (!u()) return;
        if (r?.status !== `success`) continue;
        let i = r.data;
        if (
          i?.transaction_id !== c.transaction_id ||
          i.primary_category_id !== c.saved_primary_category_id ||
          i.superseded === !0
        )
          return;
        let o = D(i.category_context);
        if (o) {
          (a.setState({ ...o, category_context_loading: !1 }, !1), E(e, n));
          return;
        }
      }
    } finally {
      u() && a.setState({ category_context_loading: !1 }, !1);
    }
  }
}
function E(e, t) {
  t != null && (e.set(N, t, (e) => e + 1), Promise.all([e.query.invalidate(v, t), e.query.invalidate(b, t)]));
}
function D(e) {
  let t = A.safeParse(e);
  return t.success ? t.data : void 0;
}
var O, k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    (a(),
      r(),
      C(),
      S(),
      f(),
      h(),
      y(),
      (O = p(m({ transaction_id: s().trim().min(1), target_primary_category: s().trim().min(1) })).min(1)),
      (k = m({ corrections: O, detail_context: g(s(), i()).optional() })),
      (A = m({
        budget: g(s(), o()).nullable(),
        related_transactions: p(o()),
        category_context_stale: t(!1),
      })),
      (j = m({
        transactions: p(m({ id: s(), draft_primary_category_id: s().optional() }).loose()),
        draft_primary_category_by_id: g(s(), s()).optional(),
      })),
      (M = m({
        transaction_id: s().min(1),
        saved_primary_category_id: s().min(1),
        draft_primary_category_id: s(),
        category_context_stale: c(),
        category_save_in_progress: c(),
        category_context_loading: c(),
        sensitive_values_hidden: c(),
      }).loose()),
      (N = l(n, (e) => 0)),
      (P = u(n, (e) => ({ pending: Promise.resolve(void 0), latestByWidget: new WeakMap() }))));
  }))();
}
export { w as i, F as n, T as r, N as t };
//# sourceMappingURL=category-actions-13d1c770dbea.js.map
