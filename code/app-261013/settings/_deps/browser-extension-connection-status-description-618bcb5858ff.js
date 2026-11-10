import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  ADt as t,
  IDt as n,
  _Mt as r,
  gMt as i,
  jDt as a,
  vzt as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
function c(e) {
  let t = (0, l.c)(11),
    { status: r } = e;
  if (r.isLoading) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, u.jsx)(n, { ...d.loading })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r.detectionError != null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, u.jsx)(n, {
            id: `plugins.browserExtension.detectionError`,
            defaultMessage: `Unable to check browser extension`,
            description: `Browser extension status in Computer Use settings when the app cannot read the browser's installation data`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let a = r.isInstalled ? `bg-[var(--app-color-icon-success)]` : `bg-[var(--app-color-icon-error)]`,
    o;
  t[2] === a ? (o = t[3]) : ((o = i(`h-2 w-2 shrink-0 rounded-full`, a)), (t[2] = a), (t[3] = o));
  let s;
  t[4] === o ? (s = t[5]) : ((s = (0, u.jsx)(`span`, { className: o })), (t[4] = o), (t[5] = s));
  let c;
  t[6] === r.isInstalled
    ? (c = t[7])
    : ((c = (0, u.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: r.isInstalled ? (0, u.jsx)(n, { ...d.installed }) : (0, u.jsx)(n, { ...d.notInstalled }),
      })),
      (t[6] = r.isInstalled),
      (t[7] = c));
  let f;
  return (
    t[8] !== s || t[9] !== c
      ? ((f = (0, u.jsxs)(`span`, {
          className: `inline-flex max-w-full items-center gap-2`,
          children: [s, c],
        })),
        (t[8] = s),
        (t[9] = c),
        (t[10] = f))
      : (f = t[10]),
    f
  );
}
var l, u, d;
function f() {
  return (f = e(() => {
    ((l = o()),
      r(),
      a(),
      (u = s()),
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
//# sourceMappingURL=browser-extension-connection-status-description-618bcb5858ff.js.map
