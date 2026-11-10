const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./xterm-output-panel-9a5ad314e058.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./theme-font-family-483011cfdef9.js",
      "./theme-font-face-loader-3c3ae53e2c00.js",
      "./xterm-display-helpers-b3dbd848567f.js",
      "./xterm-window-zoom-6d4fd59e6177.js",
      "./xterm-window-zoom-241c9f83d2ce.css",
      "./terminal-panel-c0ca9a862516.js",
      "./terminal-panel-d0f289883c52.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  IDt as n,
  Pxt as r,
  fPt as i,
  jDt as a,
  pPt as o,
  vzt as s,
  xMt as c,
  yzt as l,
  z4 as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import { Axt as f, kxt as p } from "./app-initial-5851df3f6cb1.js";
import { r as m, t as h } from "./local-conversation-background-terminal-signals-1dd17765e09e.js";
function g(e) {
  let t = (0, y.c)(9),
    { itemKey: r, hostId: i, renderSlots: a, setTabState: o, terminalId: s } = e,
    c = d(h, r),
    l = _(s),
    u = c ?? l?.buffer ?? ``,
    f;
  if (t[0] !== i || t[1] !== u || t[2] !== a || t[3] !== o) {
    let e;
    (t[5] !== i || t[6] !== u || t[7] !== o
      ? ((e = (0, x.jsx)(`div`, {
          className: `h-full min-h-0 bg-surface`,
          children:
            u.length > 0
              ? (0, x.jsx)(S, { output: u, hostId: i, onRenderedOutputReady: (e) => o({ readOutput: e }) })
              : (0, x.jsx)(`div`, {
                  className: `p-4 font-code text-size-code-sm text-codex-description`,
                  children: (0, x.jsx)(n, {
                    id: `codex.localConversation.backgroundTerminalTab.noOutput`,
                    defaultMessage: `No output yet`,
                    description: `Placeholder shown in a background terminal output tab before any terminal output is available`,
                  }),
                }),
        })),
        (t[5] = i),
        (t[6] = u),
        (t[7] = o),
        (t[8] = e))
      : (e = t[8]),
      (f = a({ headerRows: [], content: e })),
      (t[0] = i),
      (t[1] = u),
      (t[2] = a),
      (t[3] = o),
      (t[4] = f));
  } else f = t[4];
  return f;
}
function _(e) {
  let t = (0, y.c)(4),
    n;
  t[0] === e ? (n = t[1]) : ((n = (t) => f.subscribeToSessionSnapshot(e, t)), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === e ? (r = t[3]) : ((r = () => f.getSnapshot(e)), (t[2] = e), (t[3] = r)),
    (0, b.useSyncExternalStore)(n, r, v)
  );
}
function v() {
  return null;
}
var y, b, x, S;
function C() {
  return (C = e(() => {
    ((y = s()),
      r(),
      (b = l()),
      a(),
      u(),
      p(),
      m(),
      (x = c()),
      o(),
      (S = t(
        async () => {
          let { XtermOutputPanel: e } = await i(
            async () => {
              let { XtermOutputPanel: e } = await import(`./xterm-output-panel-9a5ad314e058.js`);
              return { XtermOutputPanel: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
            import.meta.url,
          );
          return e;
        },
        { propagateLoadError: !0 },
      )));
  }))();
}
C();
export { g as LocalConversationBackgroundTerminalTab };
//# sourceMappingURL=local-conversation-background-terminal-tab-bee39c10dfd4.js.map
