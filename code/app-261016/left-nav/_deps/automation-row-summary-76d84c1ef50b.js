import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Wvt as t, pct as n, sct as r } from "./app-shared-2feb3d4c6fcc.js";
import { _Fr as i, xFr as a } from "./app-initial-ad16eaadf81f.js";
function o({ automation: e, intl: r, formatProjectLabel: a, formatRootLabel: o, threadLabelById: s }) {
  let c = r.formatMessage({
      id: `settings.automations.rruleSummaryFallback`,
      defaultMessage: `Custom schedule`,
      description: `Fallback label when RRULE summary cannot be generated`,
    }),
    l = i({ rrule: e.rrule, nextRunAt: e.nextRunAt, intl: r, fallbackMessage: c }) ?? c;
  return {
    workspaceLabel: t(e)
      ? (() => {
          let t = s?.get(e.targetThreadId) ?? e.targetThreadId;
          return r.formatMessage(
            {
              id: `inbox.automations.rowSummary.heartbeat`,
              defaultMessage: `Heartbeat • {thread}`,
              description: `Summary label for heartbeat automations in the automation list`,
            },
            { thread: t },
          );
        })()
      : (() => {
          if (e.target?.type === `project`) return a?.(e.target.projectId) ?? e.target.projectId;
          if (e.target?.type === `projectless`)
            return (
              o?.(`~`) ??
              r.formatMessage({
                id: `settings.automations.projectDropdown.none`,
                defaultMessage: `None`,
                description: `Label for selecting no project in the automation project dropdown`,
              })
            );
          let t = e.cwds.map((e) => (o ? o(e) : n({ root: e, labels: {} })));
          return t.length > 0 ? r.formatList(t, { type: `conjunction` }) : null;
        })(),
    scheduleLabel: l,
  };
}
function s({ automations: e, intl: t, formatProjectLabel: n, formatRootLabel: r, threadLabelById: i }) {
  let a = new Map();
  for (let s of e)
    a.set(s.id, o({ automation: s, intl: t, formatProjectLabel: n, formatRootLabel: r, threadLabelById: i }));
  return a;
}
function c() {
  return (c = e(() => {
    (r(), a());
  }))();
}
export { c as n, s as t };
//# sourceMappingURL=automation-row-summary-76d84c1ef50b.js.map
