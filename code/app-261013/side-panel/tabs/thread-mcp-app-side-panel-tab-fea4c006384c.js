import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $S as t,
  CS as n,
  IDt as r,
  Pxt as i,
  iE as a,
  jDt as o,
  nE as s,
  uE as c,
  vzt as l,
  xMt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import { H8t as f, V8t as p, XHt as m, YHt as h, dwn as g, hwn as _ } from "./app-initial-5851df3f6cb1.js";
function v(e) {
  let n = (0, y.c)(16),
    { onPanelElementChange: i, onClose: o, onOpenInApp: l, openInAppName: u, renderSlots: f, tabId: m } = e,
    g = d(_.presentedTabById$, m),
    v;
  n[0] !== l || n[1] !== u
    ? ((v =
        l == null
          ? null
          : (0, b.jsx)(s, {
              onClick: l,
              children: u?.trim()
                ? (0, b.jsx)(r, {
                    id: `mcpApp.openInNamedApp`,
                    defaultMessage: `Open in {app}`,
                    description: `Short button label in an expanded third-party app widget's header in ChatGPT. Opens the app's website in a new browser tab so the user can continue the current view there. {app} is the nonempty app name, such as Instacart; preserve its branding.`,
                    values: { app: u },
                  })
                : (0, b.jsx)(r, {
                    id: `mcpApp.openInApp`,
                    defaultMessage: `Open in app`,
                    description: `Short button label in an expanded third-party app widget's header in ChatGPT. Opens the app's website in a new browser tab so the user can continue the current view there.`,
                  }),
            })),
      (n[0] = l),
      (n[1] = u),
      (n[2] = v))
    : (v = n[2]);
  let x = v,
    S;
  n[3] === x
    ? (S = n[4])
    : ((S = _.singleTab ? null : (0, b.jsx)(h.RightPanelTabListAfter, { children: x })),
      (n[3] = x),
      (n[4] = S));
  let C;
  if (n[5] !== o || n[6] !== i || n[7] !== x || n[8] !== f || n[9] !== g) {
    let e;
    (n[11] === i
      ? (e = n[12])
      : ((e = (0, b.jsx)(`div`, {
          className: `relative h-full min-h-0`,
          children: (0, b.jsx)(`div`, {
            ref: i,
            "data-mcp-app-side-panel-frame-container": `true`,
            className: `h-full min-h-0 w-full`,
          }),
        })),
        (n[11] = i),
        (n[12] = e)),
      (C = f({
        headerRows: _.singleTab
          ? [
              {
                id: `mcp-app-header`,
                height: `content`,
                divider: !0,
                content: (0, b.jsx)(t, {
                  leading: [
                    {
                      id: `title`,
                      allowShrink: !0,
                      content: g == null ? null : (0, b.jsx)(c, { title: g.title, icon: g.icon }),
                    },
                  ],
                  trailing: [
                    { id: `open-in-app`, content: x },
                    { id: `full-width`, content: (0, b.jsx)(p, { appearance: `viewer` }) },
                    { id: `close`, content: (0, b.jsx)(a, { onClick: o }) },
                  ],
                }),
              },
            ]
          : [],
        content: e,
      })),
      (n[5] = o),
      (n[6] = i),
      (n[7] = x),
      (n[8] = f),
      (n[9] = g),
      (n[10] = C));
  } else C = n[10];
  let w;
  return (
    n[13] !== S || n[14] !== C
      ? ((w = (0, b.jsxs)(b.Fragment, { children: [S, C] })), (n[13] = S), (n[14] = C), (n[15] = w))
      : (w = n[15]),
    w
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = l()), i(), o(), m(), f(), g(), n(), (b = u()));
  }))();
}
x();
export { v as McpAppThreadSidePanelTab };
//# sourceMappingURL=thread-mcp-app-side-panel-tab-fea4c006384c.js.map
