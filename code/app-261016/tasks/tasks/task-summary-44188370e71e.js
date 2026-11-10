import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  FBt as n,
  LNt as r,
  NSt as i,
  PBt as a,
  VSt as o,
  XOt as s,
  Y3 as ee,
  Z3 as c,
  ZSt as l,
  e6 as u,
  iCt as d,
  nCt as te,
  okt as f,
  tkt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  DNr as m,
  FNr as ne,
  INr as h,
  NPr as g,
  RCn as _,
  TPr as v,
  _Fr as y,
  kPr as b,
  vNr as x,
  wNr as S,
  xFr as C,
  xPr as re,
  yNr as ie,
  zCn as ae,
} from "./app-initial-ad16eaadf81f.js";
import { a as w, i as T, n as E, o as D, r as oe, t as O } from "./display-48c3b1cb784f.js";
import { i as k, r as A } from "./actions-846c2a8f50e3.js";
function j(e) {
  let n = (0, M.c)(38),
    { automationId: r, source: i, initiallyOpenEditor: a, navigationSource: s } = e,
    c = a !== void 0 && a,
    l = s === void 0 ? `conversation` : s,
    u = f(),
    { key: m } = o(),
    [h, g] = (0, N.useState)(c ? m : null);
  h != null && h !== m && g(null);
  let _ = d(x),
    C = i === `local`,
    T;
  n[0] === C ? (T = n[1]) : ((T = { enabled: C }), (n[0] = C), (n[1] = T));
  let { data: E, isLoading: D, refetch: k } = d(ae, T),
    j;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = { enabled: !1 }), (n[2] = j)) : (j = n[2]);
  let { data: F } = d(S, j),
    I =
      F?.accountId === _
        ? F?.items.find((e) => {
            let { automation: t } = e;
            return t.id === r;
          })
        : void 0,
    L = i === `cloud` && I == null,
    R;
  n[3] === L ? (R = n[4]) : ((R = { enabled: L }), (n[3] = L), (n[4] = R));
  let { data: z, isLoading: B, refetch: V } = te(ie, r, R),
    H,
    U = ``,
    W = null,
    G = !1;
  if (i === `local`) {
    let e = E?.items.find((e) => e.id === r);
    e != null &&
      ((H = { source: i, automation: e }),
      (U = e.name),
      (G = !0),
      (W = y({
        rrule: e.rrule,
        nextRunAt: e.nextRunAt,
        intl: u,
        fallbackMessage: u.formatMessage({
          id: `settings.automations.rruleSummaryFallback`,
          defaultMessage: `Custom schedule`,
          description: `Fallback label when RRULE summary cannot be generated`,
        }),
      })));
  } else {
    let e = I ?? z;
    e != null &&
      ((H = { source: i, item: e }),
      (U = re(e)),
      (G = v(e.automation).canManage && b(e.automation) !== `completed`));
  }
  let K = h === m && G && H != null,
    q = i === `local` ? D : B,
    J;
  if (H != null) {
    if (H.source === `cloud`) {
      let { scheduleLabel: e } = O(
          {
            type: `chatgpt-automation`,
            id: H.item.automation.id,
            title: U,
            schedule: H.item.automation.schedule,
            displaySchedule: H.item.automation.display_schedule ?? null,
            isEnabled: H.item.automation.is_enabled,
          },
          H.item,
          u,
        ),
        t;
      (n[5] === m ? (t = n[6]) : ((t = () => g(m)), (n[5] = m), (n[6] = t)),
        (J = (0, P.jsx)(w, {
          title: U,
          subtitle: e,
          ariaLabel: U,
          canOpen: G,
          onOpen: t,
          actions:
            v(H.item.automation).canManage && (H.item.teamId != null || H.item.automation.team_id != null)
              ? (0, P.jsx)(oe, { item: H.item, onEdit: () => g(m) })
              : null,
        })));
    } else {
      let e = H.automation.status === `ACTIVE`,
        t;
      n[7] !== u || n[8] !== e || n[9] !== W
        ? ((t = e ? W : u.formatMessage(ne.paused)), (n[7] = u), (n[8] = e), (n[9] = W), (n[10] = t))
        : (t = n[10]);
      let r = t,
        i;
      n[11] === m ? (i = n[12]) : ((i = () => g(m)), (n[11] = m), (n[12] = i));
      let a;
      (n[13] !== G || n[14] !== U || n[15] !== r || n[16] !== i
        ? ((a = (0, P.jsx)(w, { title: U, subtitle: r, ariaLabel: U, canOpen: G, onOpen: i })),
          (n[13] = G),
          (n[14] = U),
          (n[15] = r),
          (n[16] = i),
          (n[17] = a))
        : (a = n[17]),
        (J = a));
    }
  }
  let Y;
  n[18] !== q || n[19] !== H
    ? ((Y =
        H == null && q
          ? (0, P.jsx)(`div`, { className: `flex justify-center p-4`, children: (0, P.jsx)(t, {}) })
          : null),
      (n[18] = q),
      (n[19] = H),
      (n[20] = Y))
    : (Y = n[20]);
  let X;
  n[21] !== q || n[22] !== V || n[23] !== k || n[24] !== i || n[25] !== H
    ? ((X =
        H == null && !q
          ? (0, P.jsxs)(`div`, {
              className: `flex flex-col gap-2 p-4 text-sm text-secondary`,
              children: [
                (0, P.jsx)(p, {
                  id: `scheduled.summary.unavailable`,
                  defaultMessage: `Task details could not be loaded`,
                  description: `Message when the selected task's setup is unavailable`,
                }),
                (0, P.jsx)(ee, {
                  color: `ghost`,
                  size: `toolbar`,
                  onClick: () => {
                    i === `local` ? k() : V();
                  },
                  children: (0, P.jsx)(p, {
                    id: `inbox.automations.cloud.loadError.retry`,
                    defaultMessage: `Try again`,
                    description: `Button to retry loading cloud scheduled tasks`,
                  }),
                }),
              ],
            })
          : null),
      (n[21] = q),
      (n[22] = V),
      (n[23] = k),
      (n[24] = i),
      (n[25] = H),
      (n[26] = X))
    : (X = n[26]);
  let Z;
  n[27] !== X || n[28] !== Y || n[29] !== J
    ? ((Z = (0, P.jsx)(`div`, {
        className: `w-full min-w-0`,
        children: (0, P.jsxs)(P.Fragment, { children: [J, Y, X] }),
      })),
      (n[27] = X),
      (n[28] = Y),
      (n[29] = J),
      (n[30] = Z))
    : (Z = n[30]);
  let Q;
  n[31] !== K || n[32] !== l || n[33] !== H
    ? ((Q = K && H != null ? (0, P.jsx)(A, { task: H, navigationSource: l, onClose: () => g(null) }) : null),
      (n[31] = K),
      (n[32] = l),
      (n[33] = H),
      (n[34] = Q))
    : (Q = n[34]);
  let $;
  return (
    n[35] !== Z || n[36] !== Q
      ? (($ = (0, P.jsxs)(P.Fragment, { children: [Z, Q] })), (n[35] = Z), (n[36] = Q), (n[37] = $))
      : ($ = n[37]),
    $
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = a()), l(), (N = n()), s(), i(), _(), D(), C(), h(), g(), m(), E(), c(), u(), k(), T(), (P = r()));
  }))();
}
export { F as n, j as t };
//# sourceMappingURL=task-summary-44188370e71e.js.map
