const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./xterm-output-panel-5d5723ca4711.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./theme-font-family-483011cfdef9.js",
      "./theme-font-face-loader-3c3ae53e2c00.js",
      "./xterm-display-helpers-140c0bf915f8.js",
      "./xterm-window-zoom-95a22ae58ea4.js",
      "./xterm-window-zoom-241c9f83d2ce.css",
      "./terminal-panel-c0ca9a862516.js",
      "./terminal-panel-d0f289883c52.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  F3 as t,
  FBt as n,
  I3 as r,
  LNt as i,
  OFt as a,
  PBt as o,
  XOt as s,
  ZSt as c,
  kFt as l,
  nCt as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import { d3t as f, f3t as p } from "./app-initial-ad16eaadf81f.js";
import { r as m, t as h } from "./local-conversation-background-terminal-signals-8efb775aaf75.js";
function g(e) {
  let t = (0, y.c)(9),
    { itemKey: n, hostId: r, renderSlots: i, setTabState: a, terminalId: o } = e,
    s = u(h, n),
    c = _(o),
    l = s ?? c?.buffer ?? ``,
    f;
  if (t[0] !== r || t[1] !== l || t[2] !== i || t[3] !== a) {
    let e;
    (t[5] !== r || t[6] !== l || t[7] !== a
      ? ((e = (0, x.jsx)(`div`, {
          className: `h-full min-h-0 bg-surface`,
          children:
            l.length > 0
              ? (0, x.jsx)(S, { output: l, hostId: r, onRenderedOutputReady: (e) => a({ readOutput: e }) })
              : (0, x.jsx)(`div`, {
                  className: `p-4 font-code text-size-code-sm text-codex-description`,
                  children: (0, x.jsx)(d, {
                    id: `codex.localConversation.backgroundTerminalTab.noOutput`,
                    defaultMessage: `No output yet`,
                    description: `Placeholder shown in a background terminal output tab before any terminal output is available`,
                  }),
                }),
        })),
        (t[5] = r),
        (t[6] = l),
        (t[7] = a),
        (t[8] = e))
      : (e = t[8]),
      (f = i({ headerRows: [], content: e })),
      (t[0] = r),
      (t[1] = l),
      (t[2] = i),
      (t[3] = a),
      (t[4] = f));
  } else f = t[4];
  return f;
}
function _(e) {
  let t = (0, y.c)(4),
    n;
  t[0] === e ? (n = t[1]) : ((n = (t) => p.subscribeToSessionSnapshot(e, t)), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === e ? (r = t[3]) : ((r = () => p.getSnapshot(e)), (t[2] = e), (t[3] = r)),
    (0, b.useSyncExternalStore)(n, r, v)
  );
}
function v() {
  return null;
}
var y, b, x, S;
function C() {
  return (C = e(() => {
    ((y = o()),
      c(),
      (b = n()),
      s(),
      t(),
      f(),
      m(),
      (x = i()),
      l(),
      (S = r(
        async () => {
          let { XtermOutputPanel: e } = await a(
            async () => {
              let { XtermOutputPanel: e } = await import(`./xterm-output-panel-5d5723ca4711.js`);
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
//# sourceMappingURL=local-conversation-background-terminal-tab-ea7129ae79f6.js.map
