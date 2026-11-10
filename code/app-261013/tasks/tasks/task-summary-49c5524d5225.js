import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  VDt as i,
  Vxt as a,
  _xt as o,
  i3 as s,
  jDt as c,
  r3 as l,
  t3 as u,
  vzt as d,
  wxt as f,
  xMt as p,
  yzt as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  Dbn as g,
  JAr as _,
  JOr as ee,
  Obn as te,
  QAr as v,
  YOr as ne,
  Zkr as re,
  aAr as ie,
  dkr as y,
  ekr as b,
  fkr as x,
  lAr as S,
  rkr as C,
  tAr as w,
} from "./app-initial-5851df3f6cb1.js";
import { a as T, i as E, n as D, o as O, r as k, t as ae } from "./display-3cc835c1813c.js";
import { i as A, r as oe } from "./actions-cdf7b478f39a.js";
function j(e) {
  let r = (0, M.c)(38),
    { automationId: o, source: s, initiallyOpenEditor: c, navigationSource: u } = e,
    d = c !== void 0 && c,
    p = u === void 0 ? `conversation` : u,
    m = i(),
    { key: g } = f(),
    [v, x] = (0, N.useState)(d ? g : null);
  v != null && v !== g && x(null);
  let S = a(ee),
    C = s === `local`,
    E;
  r[0] === C ? (E = r[1]) : ((E = { enabled: C }), (r[0] = C), (r[1] = E));
  let { data: D, isLoading: O, refetch: A } = a(te, E),
    j;
  r[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = { enabled: !1 }), (r[2] = j)) : (j = r[2]);
  let { data: F } = a(b, j),
    I =
      F?.accountId === S
        ? F?.items.find((e) => {
            let { automation: t } = e;
            return t.id === o;
          })
        : void 0,
    L = s === `cloud` && I == null,
    R;
  r[3] === L ? (R = r[4]) : ((R = { enabled: L }), (r[3] = L), (r[4] = R));
  let { data: z, isLoading: B, refetch: V } = h(ne, o, R),
    H,
    U = ``,
    W = null,
    G = !1;
  if (s === `local`) {
    let e = D?.items.find((e) => e.id === o);
    e != null &&
      ((H = { source: s, automation: e }),
      (U = e.name),
      (G = !0),
      (W = _({
        rrule: e.rrule,
        nextRunAt: e.nextRunAt,
        intl: m,
        fallbackMessage: m.formatMessage({
          id: `settings.automations.rruleSummaryFallback`,
          defaultMessage: `Custom schedule`,
          description: `Fallback label when RRULE summary cannot be generated`,
        }),
      })));
  } else {
    let e = I ?? z;
    e != null &&
      ((H = { source: s, item: e }),
      (U = re(e)),
      (G = w(e.automation).canManage && ie(e.automation) !== `completed`));
  }
  let K = v === g && G && H != null,
    q = s === `local` ? O : B,
    J;
  if (H != null) {
    if (H.source === `cloud`) {
      let { scheduleLabel: e } = ae(
          {
            type: `chatgpt-automation`,
            id: H.item.automation.id,
            title: U,
            schedule: H.item.automation.schedule,
            displaySchedule: H.item.automation.display_schedule ?? null,
            isEnabled: H.item.automation.is_enabled,
          },
          H.item,
          m,
        ),
        t;
      (r[5] === g ? (t = r[6]) : ((t = () => x(g)), (r[5] = g), (r[6] = t)),
        (J = (0, P.jsx)(T, {
          title: U,
          subtitle: e,
          ariaLabel: U,
          canOpen: G,
          onOpen: t,
          actions:
            w(H.item.automation).canManage && (H.item.teamId != null || H.item.automation.team_id != null)
              ? (0, P.jsx)(k, { item: H.item, onEdit: () => x(g) })
              : null,
        })));
    } else {
      let e = H.automation.status === `ACTIVE`,
        t;
      r[7] !== m || r[8] !== e || r[9] !== W
        ? ((t = e ? W : m.formatMessage(y.paused)), (r[7] = m), (r[8] = e), (r[9] = W), (r[10] = t))
        : (t = r[10]);
      let n = t,
        i;
      r[11] === g ? (i = r[12]) : ((i = () => x(g)), (r[11] = g), (r[12] = i));
      let a;
      (r[13] !== G || r[14] !== U || r[15] !== n || r[16] !== i
        ? ((a = (0, P.jsx)(T, { title: U, subtitle: n, ariaLabel: U, canOpen: G, onOpen: i })),
          (r[13] = G),
          (r[14] = U),
          (r[15] = n),
          (r[16] = i),
          (r[17] = a))
        : (a = r[17]),
        (J = a));
    }
  }
  let Y;
  r[18] !== q || r[19] !== H
    ? ((Y =
        H == null && q
          ? (0, P.jsx)(`div`, { className: `flex justify-center p-4`, children: (0, P.jsx)(l, {}) })
          : null),
      (r[18] = q),
      (r[19] = H),
      (r[20] = Y))
    : (Y = r[20]);
  let X;
  r[21] !== q || r[22] !== V || r[23] !== A || r[24] !== s || r[25] !== H
    ? ((X =
        H == null && !q
          ? (0, P.jsxs)(`div`, {
              className: `flex flex-col gap-2 p-4 text-sm text-secondary`,
              children: [
                (0, P.jsx)(n, {
                  id: `scheduled.summary.unavailable`,
                  defaultMessage: `Task details could not be loaded`,
                  description: `Message when the selected task's setup is unavailable`,
                }),
                (0, P.jsx)(t, {
                  color: `ghost`,
                  size: `toolbar`,
                  onClick: () => {
                    s === `local` ? A() : V();
                  },
                  children: (0, P.jsx)(n, {
                    id: `inbox.automations.cloud.loadError.retry`,
                    defaultMessage: `Try again`,
                    description: `Button to retry loading cloud scheduled tasks`,
                  }),
                }),
              ],
            })
          : null),
      (r[21] = q),
      (r[22] = V),
      (r[23] = A),
      (r[24] = s),
      (r[25] = H),
      (r[26] = X))
    : (X = r[26]);
  let Z;
  r[27] !== X || r[28] !== Y || r[29] !== J
    ? ((Z = (0, P.jsx)(`div`, {
        className: `w-full min-w-0`,
        children: (0, P.jsxs)(P.Fragment, { children: [J, Y, X] }),
      })),
      (r[27] = X),
      (r[28] = Y),
      (r[29] = J),
      (r[30] = Z))
    : (Z = r[30]);
  let Q;
  r[31] !== K || r[32] !== p || r[33] !== H
    ? ((Q = K && H != null ? (0, P.jsx)(oe, { task: H, navigationSource: p, onClose: () => x(null) }) : null),
      (r[31] = K),
      (r[32] = p),
      (r[33] = H),
      (r[34] = Q))
    : (Q = r[34]);
  let $;
  return (
    r[35] !== Z || r[36] !== Q
      ? (($ = (0, P.jsxs)(P.Fragment, { children: [Z, Q] })), (r[35] = Z), (r[36] = Q), (r[37] = $))
      : ($ = r[37]),
    $
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = d()), r(), (N = m()), c(), o(), g(), O(), v(), x(), S(), C(), D(), u(), s(), A(), E(), (P = p()));
  }))();
}
export { F as n, j as t };
//# sourceMappingURL=task-summary-49c5524d5225.js.map
