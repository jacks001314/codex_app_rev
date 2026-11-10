import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  MNt as n,
  NNt as r,
  PBt as i,
  XOt as a,
  YOt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
function c(e) {
  let t = (0, l.c)(11),
    { status: r } = e;
  if (r.isLoading) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, u.jsx)(s, { ...d.loading })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r.detectionError != null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, u.jsx)(s, {
            id: `plugins.browserExtension.detectionError`,
            defaultMessage: `Unable to check browser extension`,
            description: `Browser extension status in Computer Use settings when the app cannot read the browser's installation data`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i = r.isInstalled ? `bg-[var(--app-color-icon-success)]` : `bg-[var(--app-color-icon-error)]`,
    a;
  t[2] === i ? (a = t[3]) : ((a = n(`h-2 w-2 shrink-0 rounded-full`, i)), (t[2] = i), (t[3] = a));
  let o;
  t[4] === a ? (o = t[5]) : ((o = (0, u.jsx)(`span`, { className: a })), (t[4] = a), (t[5] = o));
  let c;
  t[6] === r.isInstalled
    ? (c = t[7])
    : ((c = (0, u.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: r.isInstalled ? (0, u.jsx)(s, { ...d.installed }) : (0, u.jsx)(s, { ...d.notInstalled }),
      })),
      (t[6] = r.isInstalled),
      (t[7] = c));
  let f;
  return (
    t[8] !== o || t[9] !== c
      ? ((f = (0, u.jsxs)(`span`, {
          className: `inline-flex max-w-full items-center gap-2`,
          children: [o, c],
        })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
var l, u, d;
function f() {
  return (f = e(() => {
    ((l = i()),
      r(),
      a(),
      (u = t()),
      (d = o({
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
//# sourceMappingURL=browser-extension-connection-status-description-89f1a37c4a4f.js.map
