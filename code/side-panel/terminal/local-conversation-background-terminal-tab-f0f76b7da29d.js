const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./xterm-output-panel-80a01eb0c42b.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./theme-font-family-550a581dca1f.js",
      "./theme-font-face-loader-1d47d562eb8e.js",
      "./xterm-window-zoom-98caf71e2690.js",
      "./xterm-window-zoom-241c9f83d2ce.css",
      "./terminal-panel-ded4b9a894ab.js",
      "./terminal-panel-93f9fc5719bf.css",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Z as n,
  Amn as r,
  Cpn as i,
  M4t as a,
  N3t as o,
  N4t as s,
  O3t as c,
  QZ as l,
  SEt as u,
  Spn as d,
  _mn as f,
  gmn as p,
  hmn as m,
  kmn as h,
  rTt as g,
} from "./app-initial-f094ef01c64d.js";
function _(e) {
  let t = (0, x.c)(6),
    { conversationId: n, setTabState: r, terminalId: a } = e,
    s = o(u, n),
    c;
  t[0] !== a || t[1] !== s ? ((c = b(s, a)), (t[0] = a), (t[1] = s), (t[2] = c)) : (c = t[2]);
  let l = c,
    d = v(a),
    f = l?.aggregatedOutput ?? d?.buffer ?? ``,
    p;
  return (
    t[3] !== f || t[4] !== r
      ? ((p = (0, C.jsx)(`div`, {
          className: `h-full min-h-0 bg-surface`,
          children:
            f.length > 0
              ? (0, C.jsx)(w, { output: f, onRenderedOutputReady: (e) => r({ readOutput: e }) })
              : (0, C.jsx)(`div`, {
                  className: `p-4 font-vscode-editor text-size-code-sm text-codex-description`,
                  children: (0, C.jsx)(i, {
                    id: `codex.localConversation.backgroundTerminalTab.noOutput`,
                    defaultMessage: `No output yet`,
                    description: `Placeholder shown in a background terminal output tab before any terminal output is available`,
                  }),
                }),
        })),
        (t[3] = f),
        (t[4] = r),
        (t[5] = p))
      : (p = t[5]),
    p
  );
}
function v(e) {
  let t = (0, x.c)(4),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = (t) => s.subscribeToSessionSnapshot(e, t)), (t[0] = e), (t[1] = n));
  let r;
  return (
    t[2] === e ? (r = t[3]) : ((r = () => s.getSnapshot(e)), (t[2] = e), (t[3] = r)),
    (0, S.useSyncExternalStore)(n, r, y)
  );
}
function y() {
  return null;
}
function b(e, t) {
  if (e == null) return null;
  for (let n = e.length - 1; n >= 0; --n) {
    let r = e[n];
    if (r != null) {
      for (let e of r.items) if (e.type === `commandExecution` && e.id === t) return e;
    }
  }
  return null;
}
var x, S, C, w;
e(() => {
  ((x = h()),
    c(),
    (S = t(r(), 1)),
    d(),
    g(),
    l(),
    a(),
    (C = m()),
    f(),
    (w = n(async () => {
      let { XtermOutputPanel: e } = await p(
        async () => {
          let { XtermOutputPanel: e } = await import(`./xterm-output-panel-80a01eb0c42b.js`);
          return { XtermOutputPanel: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]),
        import.meta.url,
      );
      return e;
    })));
})();
export { _ as LocalConversationBackgroundTerminalTab };
//# sourceMappingURL=local-conversation-background-terminal-tab-f0f76b7da29d.js.map
