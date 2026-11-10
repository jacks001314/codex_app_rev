import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Urn as t,
  Wrn as n,
  Yrn as r,
  _dn as i,
  mcn as a,
  ncn as o,
  rcn as s,
} from "./app-shared-7552fc8d5d82.js";
function c(e) {
  let t = (0, l.c)(10),
    { status: n } = e;
  if (n.isLoading) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, u.jsx)(r, { ...d.loading })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i = n.isInstalled ? `bg-[var(--app-color-icon-success)]` : `bg-[var(--app-color-icon-error)]`,
    a;
  t[1] === i ? (a = t[2]) : ((a = o(`h-2 w-2 shrink-0 rounded-full`, i)), (t[1] = i), (t[2] = a));
  let s;
  t[3] === a ? (s = t[4]) : ((s = (0, u.jsx)(`span`, { className: a })), (t[3] = a), (t[4] = s));
  let c;
  t[5] === n.isInstalled
    ? (c = t[6])
    : ((c = (0, u.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: n.isInstalled
          ? (0, u.jsx)(r, { ...d.installed })
          : (0, u.jsx)(r, { ...d.notInstalled }),
      })),
      (t[5] = n.isInstalled),
      (t[6] = c));
  let f;
  return (
    t[7] !== s || t[8] !== c
      ? ((f = (0, u.jsxs)(`span`, {
          className: `inline-flex max-w-full items-center gap-2`,
          children: [s, c],
        })),
        (t[7] = s),
        (t[8] = c),
        (t[9] = f))
      : (f = t[9]),
    f
  );
}
var l, u, d;
function f() {
  return (f = e(() => {
    ((l = i()),
      s(),
      n(),
      (u = a()),
      (d = t({
        installed: {
          id: `plugins.browserExtension.installed`,
          defaultMessage: `Browser extension installed`,
          description: `Status text shown when a browser extension is installed`,
        },
        notInstalled: {
          id: `plugins.browserExtension.notInstalled`,
          defaultMessage: `Browser extension not installed`,
          description: `Status text shown when a browser extension is not installed`,
        },
        loading: {
          id: `plugins.browserExtension.loading`,
          defaultMessage: `Use the browser extension for additional control`,
          description: `Status text shown while a browser extension install state is loading`,
        },
      })));
  }))();
}
export { f as n, c as t };
//# sourceMappingURL=browser-extension-connection-status-description-a011790df3f7.js.map
