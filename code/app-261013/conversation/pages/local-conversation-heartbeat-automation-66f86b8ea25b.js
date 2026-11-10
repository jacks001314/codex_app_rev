import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  Pxt as r,
  SO as i,
  VDt as a,
  cz as o,
  hot as s,
  jDt as c,
  kDt as l,
  lot as u,
  lrt as d,
  srt as f,
  sz as ee,
  vzt as p,
  xMt as m,
  xO as h,
  yzt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Q as _,
  CAr as v,
  Cit as y,
  Cwr as b,
  Dbn as x,
  GS as S,
  JAr as C,
  KS as w,
  Obn as T,
  PAr as E,
  QAr as D,
  QQ as te,
  ZQ as ne,
  gwr as re,
  wit as O,
} from "./app-initial-5851df3f6cb1.js";
import { n as k, t as A } from "./automation-delete-confirmation-dialog-c8c0c59ec586.js";
import { n as j, t as M } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
function N(e) {
  let r = (0, P.c)(64),
    { automation: i } = e,
    o = n(re),
    c = a(),
    [u, f] = (0, F.useState)(!1),
    p;
  r[0] === o
    ? (p = r[1])
    : ((p = (e) => {
        let { item: t } = e;
        (o.query.setData(T, (e) =>
          e == null ? e : { ...e, items: e.items.map((e) => (e.id === t.id ? t : e)) },
        ),
          o.query.invalidate(T));
      }),
      (r[0] = o),
      (r[1] = p));
  let m;
  r[2] !== c || r[3] !== o
    ? ((m = (e) => {
        o.get(s).danger(
          c.formatMessage({
            id: `inbox.automations.updateError`,
            defaultMessage: `Could not update scheduled task`,
            description: `Toast title when updating a scheduled task fails`,
          }),
          { errorAnalytics: { toastId: `inbox.automations.updateError` }, description: e.message },
        );
      }),
      (r[2] = c),
      (r[3] = o),
      (r[4] = m))
    : (m = r[4]);
  let g;
  r[5] !== p || r[6] !== m
    ? ((g = { onSuccess: p, onError: m }), (r[5] = p), (r[6] = m), (r[7] = g))
    : (g = r[7]);
  let _ = d(`automation-update`, g),
    b;
  r[8] !== c || r[9] !== o
    ? ((b = {
        onSuccess: (e, t) => {
          let { id: n } = t;
          if ((f(!1), !e.success)) {
            (o
              .get(s)
              .danger(
                c.formatMessage({
                  id: `inbox.automations.deleteError`,
                  defaultMessage: `Could not delete scheduled task`,
                  description: `Toast title when deleting a scheduled task fails`,
                }),
                { errorAnalytics: { toastId: `inbox.automations.deleteError` } },
              ),
              o.query.invalidate(T));
            return;
          }
          (o.query.setData(T, (e) => (e == null ? e : { ...e, items: e.items.filter((e) => e.id !== n) })),
            o.query.invalidate(T));
        },
        onError: (e) => {
          (f(!1),
            o
              .get(s)
              .danger(
                c.formatMessage({
                  id: `inbox.automations.deleteError`,
                  defaultMessage: `Could not delete scheduled task`,
                  description: `Toast title when deleting a scheduled task fails`,
                }),
                { errorAnalytics: { toastId: `inbox.automations.deleteError` }, description: e.message },
              ));
        },
      }),
      (r[8] = c),
      (r[9] = o),
      (r[10] = b))
    : (b = r[10]);
  let x = d(`automation-delete`, b),
    S;
  r[11] !== i || r[12] !== c
    ? ((S = ne({ intl: c, nextRunAt: te(i), status: i.status })), (r[11] = i), (r[12] = c), (r[13] = S))
    : (S = r[13]);
  let E = S,
    D;
  r[14] !== i.rrule || r[15] !== c
    ? ((D = C({
        rrule: i.rrule,
        intl: c,
        fallbackMessage: c.formatMessage({
          id: `settings.automations.rruleSummaryFallback`,
          defaultMessage: `Custom schedule`,
          description: `Fallback label when RRULE summary cannot be generated`,
        }),
      })),
      (r[14] = i.rrule),
      (r[15] = c),
      (r[16] = D))
    : (D = r[16]);
  let O = D,
    k = _.isPending || x.isPending,
    j;
  r[17] !== i || r[18] !== k || r[19] !== _
    ? ((j =
        i.status === `PAUSED`
          ? {
              id: `resume-automation`,
              enabled: !k,
              message: l({
                id: `inbox.automations.resumeTooltip`,
                defaultMessage: `Resume`,
                description: `Tooltip label for resuming an automation`,
              }),
              onSelect: () => {
                _.mutate(v(i, `ACTIVE`));
              },
            }
          : {
              id: `pause-automation`,
              enabled: !k,
              message: l({
                id: `inbox.automations.pauseTooltip`,
                defaultMessage: `Pause`,
                description: `Tooltip label for pausing an automation`,
              }),
              onSelect: () => {
                _.mutate(v(i, `PAUSED`));
              },
            }),
      (r[17] = i),
      (r[18] = k),
      (r[19] = _),
      (r[20] = j))
    : (j = r[20]);
  let N = !k,
    L,
    R;
  r[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = l({
        id: `settings.automations.delete`,
        defaultMessage: `Delete`,
        description: `Menu item for deleting a scheduled task`,
      })),
      (L = () => {
        f(!0);
      }),
      (r[21] = L),
      (r[22] = R))
    : ((L = r[21]), (R = r[22]));
  let z;
  r[23] === N
    ? (z = r[24])
    : ((z = { id: `delete-automation`, enabled: N, message: R, onSelect: L, tone: `danger` }),
      (r[23] = N),
      (r[24] = z));
  let B;
  r[25] !== z || r[26] !== j ? ((B = [j, z]), (r[25] = z), (r[26] = j), (r[27] = B)) : (B = r[27]);
  let V;
  r[28] === E
    ? (V = r[29])
    : ((V = (0, I.jsx)(t, {
        id: `codex.localConversation.heartbeatAutomation.nextRun`,
        defaultMessage: `Next run: {nextRunLabel}`,
        description: `Tooltip shown on the heartbeat automation row in the thread summary panel`,
        values: { nextRunLabel: E },
      })),
      (r[28] = E),
      (r[29] = V));
  let H;
  r[30] === c
    ? (H = r[31])
    : ((H = c.formatMessage({
        id: `codex.localConversation.heartbeatAutomation.open`,
        defaultMessage: `Open scheduled task`,
        description: `Accessible label for opening the active scheduled task from the thread summary panel`,
      })),
      (r[30] = c),
      (r[31] = H));
  let U;
  r[32] !== i.id || r[33] !== i.name || r[34] !== o
    ? ((U = () => {
        w({ scope: o, automationId: i.id, title: i.name });
      }),
      (r[32] = i.id),
      (r[33] = i.name),
      (r[34] = o),
      (r[35] = U))
    : (U = r[35]);
  let W;
  r[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((W = (0, I.jsx)(M.ItemLeading, { children: (0, I.jsx)(y, {}) })), (r[36] = W))
    : (W = r[36]);
  let G;
  r[37] === i.name
    ? (G = r[38])
    : ((G = (0, I.jsx)(M.ItemLabel, { children: i.name })), (r[37] = i.name), (r[38] = G));
  let K;
  r[39] === O
    ? (K = r[40])
    : ((K = O == null ? null : (0, I.jsx)(M.ItemMeta, { truncate: !0, children: O })),
      (r[39] = O),
      (r[40] = K));
  let q;
  r[41] !== H || r[42] !== U || r[43] !== G || r[44] !== K
    ? ((q = (0, I.jsxs)(M.ItemButton, { "aria-label": H, onClick: U, children: [W, G, K] })),
      (r[41] = H),
      (r[42] = U),
      (r[43] = G),
      (r[44] = K),
      (r[45] = q))
    : (q = r[45]);
  let J;
  r[46] !== V || r[47] !== q
    ? ((J = (0, I.jsx)(ee, { cloneCustomTrigger: !0, tooltipContent: V, children: q })),
      (r[46] = V),
      (r[47] = q),
      (r[48] = J))
    : (J = r[48]);
  let Y;
  r[49] !== B || r[50] !== J
    ? ((Y = (0, I.jsx)(h, { items: B, children: J })), (r[49] = B), (r[50] = J), (r[51] = Y))
    : (Y = r[51]);
  let X;
  r[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = () => {
        f(!1);
      }),
      (r[52] = X))
    : (X = r[52]);
  let Z;
  r[53] !== i.id || r[54] !== x
    ? ((Z = () => {
        x.mutate({ id: i.id });
      }),
      (r[53] = i.id),
      (r[54] = x),
      (r[55] = Z))
    : (Z = r[55]);
  let Q;
  r[56] !== i.name || r[57] !== x.isPending || r[58] !== u || r[59] !== Z
    ? ((Q = (0, I.jsx)(A, { isPending: x.isPending, name: i.name, open: u, onCancel: X, onConfirm: Z })),
      (r[56] = i.name),
      (r[57] = x.isPending),
      (r[58] = u),
      (r[59] = Z),
      (r[60] = Q))
    : (Q = r[60]);
  let $;
  return (
    r[61] !== Y || r[62] !== Q
      ? (($ = (0, I.jsxs)(I.Fragment, { children: [Y, Q] })), (r[61] = Y), (r[62] = Q), (r[63] = $))
      : ($ = r[63]),
    $
  );
}
var P, F, I;
function L() {
  return (L = e(() => {
    ((P = p()),
      r(),
      (F = g()),
      c(),
      k(),
      x(),
      D(),
      E(),
      _(),
      S(),
      i(),
      u(),
      o(),
      O(),
      b(),
      f(),
      j(),
      (I = m()));
  }))();
}
export { L as n, N as t };
//# sourceMappingURL=local-conversation-heartbeat-automation-66f86b8ea25b.js.map
