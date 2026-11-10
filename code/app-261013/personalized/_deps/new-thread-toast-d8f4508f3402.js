import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, hot as n, i3 as r, jDt as i, lot as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
function s(e, t) {}
function c(e, r, i, a) {
  let o = e
    .get(n)
    .info(
      (0, l.jsx)(t, {
        id: `mcpApp.newThreadCreated.sourceTitle`,
        defaultMessage: `{appName} has started a new chat`,
        description: `Toast confirming that the named app has started a new chat`,
        values: { appName: r },
      }),
      {
        id: a,
        position: `top-center`,
        actionPlacement: `inline`,
        duration: 5,
        hasCloseButton: !1,
        leading: null,
        primaryAction: {
          label: (0, l.jsx)(t, {
            id: `mcpApp.newThreadCreated.openChat`,
            defaultMessage: `Open`,
            description: `Button that opens the new chat containing the message sent by a plugin`,
          }),
          onClick: () => {
            i() && o.close();
          },
        },
      },
    );
}
var l;
function u() {
  return (u = e(() => {
    (i(), r(), a(), (l = o()));
  }))();
}
export { c as n, s as r, u as t };
//# sourceMappingURL=new-thread-toast-d8f4508f3402.js.map
