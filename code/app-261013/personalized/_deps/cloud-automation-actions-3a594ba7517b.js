import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as ee,
  Vxt as a,
  hot as o,
  jDt as s,
  lot as c,
  vzt as l,
  wot as u,
  xMt as d,
  yzt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Or as m,
  Zkr as h,
  aAr as te,
  dkr as ne,
  fkr as g,
  lAr as _,
  lkr as re,
  nAr as ie,
  okr as v,
  rkr as y,
  skr as b,
  tAr as x,
  tkr as ae,
  uAr as S,
} from "./app-initial-5851df3f6cb1.js";
import { n as C, t as w } from "./automation-delete-confirmation-dialog-c8c0c59ec586.js";
function T(e) {
  let i = (0, E.c)(54),
    {
      item: s,
      onDeleted: c,
      onDeleteRequested: l,
      onPaused: u,
      onResumed: d,
      onStatusChanged: f,
      onEdit: g,
      onOpenConversation: _,
      trailingMenuItems: y,
      renderActions: C,
      status: T,
      statusMutation: k,
    } = e,
    A = r(t),
    j = ee(),
    M = a(k ?? re),
    oe = a(b),
    N = a(ae),
    P = a(v),
    [F, I] = (0, D.useState)(!1),
    { automation: L, teamId: R } = s,
    z;
  i[0] === L ? (z = i[1]) : ((z = x(L)), (i[0] = L), (i[1] = z));
  let { canManage: B, canDelete: V } = z,
    H = B && L.executor !== `local`,
    U;
  i[2] !== L || i[3] !== T ? ((U = T ?? te(L)), (i[2] = L), (i[3] = T), (i[4] = U)) : (U = i[4]);
  let W = U,
    G = W === `completed`,
    K;
  i[5] === L ? (K = i[6]) : ((K = ie(L)), (i[5] = L), (i[6] = K));
  let q = p(m, K),
    J = M.isPending || oe.isPending || N.isPending || P.isPending;
  if ((!B && !V) || (!H && G && !V)) return null;
  let Y;
  i[7] !== L || i[8] !== j || i[9] !== u || i[10] !== d || i[11] !== f || i[12] !== A || i[13] !== M
    ? ((Y = (e) => {
        (e && S(L)) ||
          M.mutate(
            { automationId: L.id, isEnabled: e },
            {
              onSuccess: (t) => {
                (f?.(t), e ? d?.() : u?.());
              },
              onError: (e) => {
                A.get(o).danger(
                  j.formatMessage({
                    id: `inbox.automations.cloud.updateError`,
                    defaultMessage: `Could not update cloud scheduled task`,
                    description: `Toast title when updating a cloud scheduled task fails`,
                  }),
                  {
                    errorAnalytics: { toastId: `inbox.automations.cloud.updateError` },
                    description: e instanceof Error ? e.message : void 0,
                  },
                );
              },
            },
          );
      }),
      (i[7] = L),
      (i[8] = j),
      (i[9] = u),
      (i[10] = d),
      (i[11] = f),
      (i[12] = A),
      (i[13] = M),
      (i[14] = Y))
    : (Y = i[14]);
  let X = Y,
    Z;
  if (
    i[15] !== L ||
    i[16] !== V ||
    i[17] !== B ||
    i[18] !== H ||
    i[19] !== G ||
    i[20] !== J ||
    i[21] !== l ||
    i[22] !== g ||
    i[23] !== _ ||
    i[24] !== C ||
    i[25] !== q ||
    i[26] !== P ||
    i[27] !== X ||
    i[28] !== W ||
    i[29] !== R ||
    i[30] !== y ||
    i[31] !== M.isPending ||
    i[32] !== M.variables?.automationId
  ) {
    let e;
    i[34] === X ? (e = i[35]) : ((e = () => X(!1)), (i[34] = X), (i[35] = e));
    let t;
    i[36] !== B || i[37] !== G || i[38] !== q
      ? ((t = B && !G && q ? (0, O.jsx)(n, { ...ne.expiredResume }) : void 0),
        (i[36] = B),
        (i[37] = G),
        (i[38] = q),
        (i[39] = t))
      : (t = i[39]);
    let r;
    (i[40] === X ? (r = i[41]) : ((r = () => X(!0)), (i[40] = X), (i[41] = r)),
      (Z = C({
        deleteAction: V ? { disabled: J, onSelect: l ?? (() => I(!0)) } : void 0,
        editAction: B && !G && g != null ? { disabled: J, onSelect: g } : void 0,
        isCompleted: G,
        isPaused: W === `paused`,
        isStatusPending: M.isPending && M.variables?.automationId === L.id,
        openConversationAction: R == null && V && _ != null ? { disabled: J, onSelect: _ } : void 0,
        pauseAction: { disabled: !B || J, onSelect: e },
        pauseResumeInMenu: !0,
        resumeAction: { disabled: !B || J || q, disabledReason: t, onSelect: r },
        runNowAction: H
          ? {
              disabled: J,
              tooltipText: (0, O.jsx)(n, {
                id: `inbox.automations.cloud.runNowTooltip`,
                defaultMessage: `Run the saved instructions once`,
                description: `Tooltip for the cloud scheduled task Run now action. The run uses the task's saved instructions and does not save edits from the detail panel.`,
              }),
              onSelect: () => {
                P.mutate({ automationId: L.id, requestBody: { idempotency_key: crypto.randomUUID() } });
              },
            }
          : void 0,
        trailingMenuItems: y,
      })),
      (i[15] = L),
      (i[16] = V),
      (i[17] = B),
      (i[18] = H),
      (i[19] = G),
      (i[20] = J),
      (i[21] = l),
      (i[22] = g),
      (i[23] = _),
      (i[24] = C),
      (i[25] = q),
      (i[26] = P),
      (i[27] = X),
      (i[28] = W),
      (i[29] = R),
      (i[30] = y),
      (i[31] = M.isPending),
      (i[32] = M.variables?.automationId),
      (i[33] = Z));
  } else Z = i[33];
  let Q;
  i[42] !== L ||
  i[43] !== V ||
  i[44] !== N ||
  i[45] !== j ||
  i[46] !== F ||
  i[47] !== s ||
  i[48] !== c ||
  i[49] !== A
    ? ((Q =
        V && F
          ? (0, O.jsx)(w, {
              isPending: N.isPending,
              name: h(s),
              open: !0,
              onCancel: () => I(!1),
              onConfirm: () => {
                N.mutate(
                  { automationId: L.id },
                  {
                    onSuccess: () => {
                      (I(!1), c?.());
                    },
                    onError: (e) => {
                      (I(!1),
                        A.get(o).danger(
                          j.formatMessage({
                            id: `inbox.automations.cloud.deleteError`,
                            defaultMessage: `Could not delete cloud scheduled task`,
                            description: `Toast title when deleting a cloud scheduled task fails`,
                          }),
                          {
                            errorAnalytics: { toastId: `inbox.automations.cloud.deleteError` },
                            description: e instanceof Error ? e.message : void 0,
                          },
                        ));
                    },
                  },
                );
              },
            })
          : null),
      (i[42] = L),
      (i[43] = V),
      (i[44] = N),
      (i[45] = j),
      (i[46] = F),
      (i[47] = s),
      (i[48] = c),
      (i[49] = A),
      (i[50] = Q))
    : (Q = i[50]);
  let $;
  return (
    i[51] !== Z || i[52] !== Q
      ? (($ = (0, O.jsxs)(O.Fragment, { children: [Z, Q] })), (i[51] = Z), (i[52] = Q), (i[53] = $))
      : ($ = i[53]),
    $
  );
}
var E, D, O;
function k() {
  return (k = e(() => {
    ((E = l()), i(), (D = f()), s(), c(), u(), C(), g(), _(), y(), (O = d()));
  }))();
}
export { k as n, T as t };
//# sourceMappingURL=cloud-automation-actions-3a594ba7517b.js.map
