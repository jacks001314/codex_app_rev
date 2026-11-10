import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  HFt as n,
  LRt as r,
  NLt as i,
  Qst as a,
  SCt as o,
  TCt as s,
  VRt as c,
  Vrt as l,
  ZSt as u,
  ezt as d,
  hRt as f,
  kLt as p,
  kRt as m,
  qrt as h,
  uRt as g,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  DDt as _,
  TDt as v,
  iRr as y,
  tyr as b,
  wLr as x,
  xDt as S,
  zRr as C,
} from "./app-initial-ad16eaadf81f.js";
async function w(e, t, n, r, i = e.get(C)) {
  let a = typeof n.payload?.action == `string` ? n.payload.action : n.type,
    o = a === `ledger_transaction_category_save`,
    s = k.safeParse(n.payload),
    c = r();
  if (!s.success || !c || (o && s.data.corrections.length !== 1)) return;
  let { corrections: l, detail_context: u } = s.data,
    [d] = l,
    f = e.get(C),
    p = c.getState(),
    m = () => e.get(C) === f,
    g = e.get(P, i),
    _ = g.pending.then(() =>
      m()
        ? y
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
  ((g.pending = _), g.latestByWidget.set(c, _));
  let v = () =>
      r() === c &&
      m() &&
      g.latestByWidget.get(c) === _ &&
      (!o ||
        (c.getState().transaction_id === d.transaction_id &&
          c.getState().sensitive_values_hidden === p.sensitive_values_hidden &&
          c.getState().draft_primary_category_id === d.target_primary_category)),
    b = await _;
  if (!m()) return;
  E(e, i);
  let x = b?.data,
    S =
      b?.status === `success` &&
      (!o ||
        (x?.transaction_id === d.transaction_id &&
          x.primary_category_id === d.target_primary_category &&
          (x.saved_count === 0 || x.saved_count === 1)));
  if (!v()) return;
  if ((o && c.setState({ category_save_in_progress: !1 }, !1), !S)) {
    e.get(h).danger(
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
  let w = D(x?.category_context);
  (c.setState(
    {
      saved_primary_category_id: d.target_primary_category,
      category_label: p.draft_category_label,
      category_icon: p.draft_category_icon,
      category_context_loading: !1,
      ...(w ?? { budget: null, related_transactions: [], category_context_stale: !0 }),
    },
    !1,
  ),
    T(e, r, i, u));
}
async function T(e, t, n = e.get(C), i) {
  let a = t(),
    o = M.safeParse(a?.getState());
  if (!a || !o.success) return;
  let s = o.data;
  if (
    !s.category_context_stale ||
    s.category_context_loading ||
    s.category_save_in_progress ||
    s.saved_primary_category_id !== s.draft_primary_category_id
  )
    return;
  let l = e.get(C),
    u = () => {
      let n = a.getState();
      return (
        t() === a &&
        e.get(C) === l &&
        n.transaction_id === s.transaction_id &&
        n.sensitive_values_hidden === s.sensitive_values_hidden &&
        !n.category_save_in_progress &&
        n.saved_primary_category_id === s.saved_primary_category_id &&
        n.draft_primary_category_id === s.saved_primary_category_id
      );
    },
    d = r(c(), g()).safeParse(
      i ?? {
        displayTitle: s.display_name,
        merchant_name: s.merchant_name,
        transaction_date: s.transaction_date,
        date_label: s.date_label,
        amount_label: s.amount_label,
        account_name: s.account_name,
        month_start: s.month_start,
        currency_code: s.currency_code,
        logo_url: s.logo_url,
        sensitive_values_hidden: s.sensitive_values_hidden,
      },
    );
  if (d.success) {
    a.setState({ category_context_loading: !0 }, !1);
    try {
      for (let t = 0; t < 2; t += 1) {
        if ((t > 0 && (await new Promise((e) => setTimeout(e, 1e3))), !u())) return;
        let r = await y
          .safePost(`/widget_server_action`, {
            requestBody: {
              action_type: `ledger_transaction_category_context`,
              payload: {
                transaction_id: s.transaction_id,
                primary_category_id: s.saved_primary_category_id,
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
          i?.transaction_id !== s.transaction_id ||
          i.primary_category_id !== s.saved_primary_category_id ||
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
  t != null && (e.set(N, t, (e) => e + 1), Promise.all([e.query.invalidate(v, t), e.query.invalidate(_, t)]));
}
function D(e) {
  let t = A.safeParse(e);
  return t.success ? t.data : void 0;
}
var O, k, A, j, M, N, P;
function F() {
  return (F = e(() => {
    (u(),
      n(),
      x(),
      b(),
      l(),
      t(),
      S(),
      (O = p(m({ transaction_id: c().trim().min(1), target_primary_category: c().trim().min(1) })).min(1)),
      (k = m({ corrections: O, detail_context: r(c(), g()).optional() })),
      (A = m({
        budget: r(c(), d()).nullable(),
        related_transactions: p(d()),
        category_context_stale: f(!1),
      })),
      (j = m({
        transactions: p(m({ id: c(), draft_primary_category_id: c().optional() }).loose()),
        draft_primary_category_by_id: r(c(), c()).optional(),
      })),
      (M = m({
        transaction_id: c().min(1),
        saved_primary_category_id: c().min(1),
        draft_primary_category_id: c(),
        category_context_stale: i(),
        category_save_in_progress: i(),
        category_context_loading: i(),
        sensitive_values_hidden: i(),
      }).loose()),
      (N = o(a, (e) => 0)),
      (P = s(a, (e) => ({ pending: Promise.resolve(void 0), latestByWidget: new WeakMap() }))));
  }))();
}
export { w as i, F as n, T as r, N as t };
//# sourceMappingURL=category-actions-2dcff3be7db0.js.map
