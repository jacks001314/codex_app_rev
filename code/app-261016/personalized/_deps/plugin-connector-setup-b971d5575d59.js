import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { HFt as t, VRt as n, Vrt as r, kRt as i, nzt as a, qrt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as s,
  Bhr as c,
  Xmr as l,
  Ycr as u,
  hhr as d,
  vhr as f,
  zmr as p,
} from "./app-initial-ad16eaadf81f.js";
async function m({
  scope: e,
  accountId: t,
  userId: n,
  connectorId: r,
  location: i,
  navigate: a,
  handledKey: s,
  canResumeAttempt: l,
  intl: u,
  onInstall: d,
  onSetup: f,
  continueSetupAfterInstall: m,
}) {
  if (s.current === i.key) return;
  let _ = g.safeParse(i.state);
  if (
    !_.success ||
    (_.data.connectorSetup.addAccountAttemptId != null && !l?.(_.data.connectorSetup.addAccountAttemptId)) ||
    f == null ||
    _.data.connectorSetup.addAccountAttemptId == null ||
    _.data.connectorSetup.installationKey != null ||
    _.data.connectorSetup.accountId !== t ||
    _.data.connectorSetup.userId !== n ||
    c(_.data.connectorSetup.connectorId) !== c(r)
  )
    return;
  let v = m ? { ..._.data.connectorSetup, installationKey: i.key } : void 0,
    y = () => {
      v != null && h({ scope: e, navigate: a, setup: v });
    };
  try {
    if (d != null && !d(m ? y : void 0, v, _.data.connectorSetup.options)) return;
    ((s.current = i.key),
      a(i, { replace: !0, state: { ...i.state, connectorSetup: v } }),
      await f?.(_.data.connectorSetup.options, _.data.connectorSetup.addAccountAttemptId));
  } catch {
    e.get(o).danger(p(u), { errorAnalytics: { toastId: `pluginConnectorSetup.startPluginConnectorSetup` } });
  }
}
function h({ scope: e, navigate: t, setup: n }) {
  let r = e.get(u),
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
    (t(),
      l(),
      f(),
      r(),
      s(),
      (g = i({
        connectorSetup: i({
          accountId: n().min(1),
          userId: n().min(1),
          connectorId: n().min(1),
          options: d.optional(),
          addAccountAttemptId: a().optional(),
          installationKey: n().min(1).optional(),
        }),
      }).loose()));
  }))();
}
export { _ as n, m as r, h as t };
//# sourceMappingURL=plugin-connector-setup-b971d5575d59.js.map
