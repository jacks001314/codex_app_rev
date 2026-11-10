import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Kw as n,
  Mz as r,
  Nz as i,
  Pxt as a,
  aSt as o,
  fSt as s,
  nSt as c,
  qw as l,
  wot as u,
  xMt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as f,
  Ifr as p,
  Lfr as m,
  dxn as h,
  gwr as g,
  lxn as _,
  uxn as v,
} from "./app-initial-5851df3f6cb1.js";
var y, b, x;
function S() {
  return (S = e(() => {
    (a(),
      u(),
      f(),
      (y = s(g, null)),
      (b = o(t, (e) => null)),
      (x = c(t, (e, { get: t }) => t(b, e)?.content ?? null)));
  }))();
}
function C(
  e,
  {
    revealAndFocus: t,
    content: n,
    conversationId: i,
    hostId: a,
    insertPosition: o,
    key: s,
    path: c,
    syncOpenTabs: u,
    target: d,
    title: f,
  },
  m,
) {
  let h = `${a}:${i}:${s}`;
  return (
    e.set(b, h, { content: n, path: c, save: null }),
    m(e, c, {
      revealAndFocus: t,
      hostId: a,
      insertPosition: o,
      onContentChange: (t) => {
        e.set(b, h, (e) => (e?.path === c ? { ...e, content: t } : e));
      },
      onSaveChange: (t) => {
        e.set(b, h, (e) => (e?.path === c ? { ...e, save: t } : e));
      },
      plan: { conversationId: i, key: s, title: f },
      syncOpenTabs: u,
      tabId: p.PLAN,
      target: d,
    })
      ? (_(v(e, p.PLAN) ?? `right`).updateTab(e, p.PLAN, {
          icon: (0, w.jsx)(r, { className: `shrink-0`, asset: l }),
          title: f,
        }),
        e.set(y, { key: s, tabId: p.PLAN }),
        !0)
      : !1
  );
}
var w;
function T() {
  return (T = e(() => {
    (n(), i(), h(), m(), S(), (w = d()));
  }))();
}
export { x as a, b as i, C as n, S as o, y as r, T as t };
//# sourceMappingURL=editable-plan-tab-44cf711b8cad.js.map
