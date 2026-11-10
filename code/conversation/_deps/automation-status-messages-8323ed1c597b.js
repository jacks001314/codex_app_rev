import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { Spn as t, xpn as n } from "./app-initial-f094ef01c64d.js";
var r,
  i = e(() => {
    (t(),
      (r = n({
        active: {
          id: `inbox.automations.status.active`,
          defaultMessage: `Active`,
          description: `Label for active automation status`,
        },
        completed: {
          id: `inbox.automations.status.completed`,
          defaultMessage: `Completed`,
          description: `Label for a completed scheduled task that has no future scheduled runs`,
        },
        paused: {
          id: `inbox.automations.status.paused`,
          defaultMessage: `Paused`,
          description: `Label for paused automation status`,
        },
      })));
  });
export { i as n, r as t };
//# sourceMappingURL=automation-status-messages-8323ed1c597b.js.map
