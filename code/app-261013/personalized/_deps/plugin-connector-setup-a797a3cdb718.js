import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { BLt as t, EPt as n, TLt as r, hot as i, lot as a, pLt as o } from "./app-shared-bbfeca5e5737.js";
import {
  FFr as s,
  Udr as c,
  idr as l,
  qur as u,
  vdr as d,
  xdr as f,
  zFr as p,
} from "./app-initial-5851df3f6cb1.js";
async function m({
  scope: e,
  accountId: t,
  userId: n,
  connectorId: r,
  location: a,
  navigate: o,
  handledKey: s,
  canResumeAttempt: l,
  intl: d,
  onInstall: f,
  onSetup: p,
  continueSetupAfterInstall: m,
}) {
  if (s.current === a.key) return;
  let _ = g.safeParse(a.state);
  if (
    !_.success ||
    (_.data.connectorSetup.addAccountAttemptId != null && !l?.(_.data.connectorSetup.addAccountAttemptId)) ||
    p == null ||
    _.data.connectorSetup.addAccountAttemptId == null ||
    _.data.connectorSetup.installationKey != null ||
    _.data.connectorSetup.accountId !== t ||
    _.data.connectorSetup.userId !== n ||
    c(_.data.connectorSetup.connectorId) !== c(r)
  )
    return;
  let v = m ? { ..._.data.connectorSetup, installationKey: a.key } : void 0,
    y = () => {
      v != null && h({ scope: e, navigate: o, setup: v });
    };
  try {
    if (f != null && !f(m ? y : void 0, v, _.data.connectorSetup.options)) return;
    ((s.current = a.key),
      o(a, { replace: !0, state: { ...a.state, connectorSetup: v } }),
      await p?.(_.data.connectorSetup.options, _.data.connectorSetup.addAccountAttemptId));
  } catch {
    e.get(i).danger(u(d), { errorAnalytics: { toastId: `pluginConnectorSetup.startPluginConnectorSetup` } });
  }
}
function h({ scope: e, navigate: t, setup: n }) {
  let r = e.get(s),
    i = g.safeParse(r?.state);
  r != null &&
    i.success &&
    i.data.connectorSetup.installationKey === n.installationKey &&
    t(r, {
      replace: !0,
      state: {
        ...r.state,
        connectorSetup: {
          accountId: n.accountId,
          userId: n.userId,
          connectorId: n.connectorId,
          options: n.options,
        },
      },
    });
}
var g;
function _() {
  return (_ = e(() => {
    (n(),
      l(),
      f(),
      a(),
      p(),
      (g = o({
        connectorSetup: o({
          accountId: r().min(1),
          userId: r().min(1),
          connectorId: r().min(1),
          options: d.optional(),
          addAccountAttemptId: t().optional(),
          installationKey: r().min(1).optional(),
        }),
      }).loose()));
  }))();
}
export { _ as n, m as r, h as t };
//# sourceMappingURL=plugin-connector-setup-a797a3cdb718.js.map
