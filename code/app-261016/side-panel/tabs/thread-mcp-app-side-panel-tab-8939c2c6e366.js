import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EE as t,
  LNt as n,
  OC as r,
  PBt as i,
  TE as a,
  XOt as o,
  XS as s,
  ZSt as c,
  jE as l,
  nCt as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import { ADn as f, JRt as p, PDn as m, SWt as h, YRt as g, xWt as _ } from "./app-initial-ad16eaadf81f.js";
function v(e) {
  let n = (0, y.c)(16),
    { onPanelElementChange: i, onClose: o, onOpenInApp: s, openInAppName: c, renderSlots: f, tabId: h } = e,
    g = u(m.presentedTabById$, h),
    v;
  n[0] !== s || n[1] !== c
    ? ((v =
        s == null
          ? null
          : (0, b.jsx)(a, {
              onClick: s,
              children: c?.trim()
                ? (0, b.jsx)(d, {
                    id: `mcpApp.openInNamedApp`,
                    defaultMessage: `Open in {app}`,
                    description: `Short button label in an expanded third-party app widget's header in ChatGPT. Opens the app's website in a new browser tab so the user can continue the current view there. {app} is the nonempty app name, such as Instacart; preserve its branding.`,
                    values: { app: c },
                  })
                : (0, b.jsx)(d, {
                    id: `mcpApp.openInApp`,
                    defaultMessage: `Open in app`,
                    description: `Short button label in an expanded third-party app widget's header in ChatGPT. Opens the app's website in a new browser tab so the user can continue the current view there.`,
                  }),
            })),
      (n[0] = s),
      (n[1] = c),
      (n[2] = v))
    : (v = n[2]);
  let x = v,
    S;
  n[3] === x
    ? (S = n[4])
    : ((S = m.singleTab ? null : (0, b.jsx)(p.RightPanelTabListAfter, { children: x })),
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
        headerRows: m.singleTab
          ? [
              {
                id: `mcp-app-header`,
                height: `content`,
                divider: !0,
                content: (0, b.jsx)(r, {
                  leading: [
                    {
                      id: `title`,
                      allowShrink: !0,
                      content: g == null ? null : (0, b.jsx)(l, { title: g.title, icon: g.icon }),
                    },
                  ],
                  trailing: [
                    { id: `open-in-app`, content: x },
                    { id: `full-width`, content: (0, b.jsx)(_, { surface: `viewer` }) },
                    { id: `close`, content: (0, b.jsx)(t, { onClick: o }) },
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
    ((y = i()), c(), o(), g(), f(), h(), s(), (b = n()));
  }))();
}
x();
export { v as McpAppThreadSidePanelTab };
//# sourceMappingURL=thread-mcp-app-side-panel-tab-8939c2c6e366.js.map
