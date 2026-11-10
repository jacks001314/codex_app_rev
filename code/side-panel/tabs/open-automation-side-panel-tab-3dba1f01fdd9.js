const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./automation-side-panel-tab-e00029fe121b.js",
      "./rolldown-runtime-c05d78c594d1.js",
      "./app-initial-f094ef01c64d.js",
      "./app-initial-49fc08c26651.css",
      "./cloud-automation-detail-panel-c76d4ae4bfb4.js",
      "./app-primary-4c40d73a1074.js",
      "./app-primary-d815831c9bad.css",
      "./model-and-reasoning-effort-translations-550629a13cba.js",
      "./automation-frequency-section-49a6d0cc31da.js",
      "./ChevronRight-9ebd4395b90f.js",
      "./automation-frequency-section-babd3c0f0928.css",
      "./play-outline-51cb9fd3340e.js",
      "./automation-delete-confirmation-dialog-c1501bf84bbd.js",
      "./automation-status-messages-8323ed1c597b.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Z as t,
  A6 as n,
  CFt as r,
  QPt as i,
  QZ as a,
  SFt as o,
  Xdt as s,
  ZPt as c,
  _mn as l,
  bR as u,
  cr as d,
  fr as f,
  gmn as p,
  hR as m,
  hmn as h,
  j6 as g,
  lr as _,
  or as v,
  pr as y,
  sr as b,
  vlt as x,
} from "./app-initial-f094ef01c64d.js";
function S({
  scope: e,
  activate: t = !0,
  automationId: n,
  insertAfterTabId: r,
  tabId: i,
  target: a = `right`,
  title: o,
}) {
  T({
    scope: e,
    activate: t,
    durableRoute: { kind: d, params: { automationId: n }, payloadVersion: 1 },
    insertAfterTabId: r,
    request: { type: `automation`, automationId: n },
    tabId: i ?? `automation:${n}`,
    target: a,
    title: o,
  });
}
async function C(e, t, { activate: n, insertAfterTabId: r, tabId: i, target: a }) {
  try {
    let { items: o } = await e.query.getOrFetch(g),
      s = o.find((e) => e.id === t),
      c = s == null ? await e.query.getOrFetch(m, t) : null,
      l = s?.name ?? c?.automation.title;
    return l == null
      ? !1
      : (S({
          scope: e,
          activate: n,
          automationId: t,
          insertAfterTabId: r,
          tabId: i,
          target: a,
          title: l,
        }),
        !0);
  } catch {
    return !1;
  }
}
function w({ scope: e, seed: t, title: n }) {
  T({ scope: e, request: { type: `suggestion`, seed: t }, tabId: f(t.directiveKey), title: n });
}
function T({
  scope: e,
  activate: t = !0,
  durableRoute: n,
  insertAfterTabId: i,
  request: a,
  tabId: o,
  target: s = `right`,
  title: l,
}) {
  r(e, O, {
    activate: t,
    defaultState: () => ({ draftInstanceId: crypto.randomUUID(), savedAutomationId: null }),
    durableRoute: n,
    icon: (0, E.jsx)(D, {}),
    insertAfterTabId: i,
    props: { request: a },
    id: o,
    target: c(e, o) ?? s,
    title: l,
    tooltip: l,
  });
}
var E,
  D,
  O,
  k = e(() => {
    (o(),
      s(),
      a(),
      v(),
      i(),
      n(),
      y(),
      _(),
      u(),
      (E = h()),
      l(),
      (D = t(
        async () => {
          let { AutomationSidePanelTabIcon: e } = await p(
            async () => {
              let { AutomationSidePanelTabIcon: e } = await import(
                `./automation-side-panel-tab-e00029fe121b.js`
              );
              return { AutomationSidePanelTabIcon: e };
            },
            __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
            import.meta.url,
          );
          return e;
        },
        { fallback: (0, E.jsx)(x, { "aria-hidden": !1 }) },
      )),
      (O = b({ open: S, restore: C })));
  });
export { C as i, S as n, w as r, k as t };
//# sourceMappingURL=open-automation-side-panel-tab-3dba1f01fdd9.js.map
