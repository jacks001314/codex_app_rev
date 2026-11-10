import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cxt as t,
  Ext as n,
  IDt as r,
  JC as i,
  Pxt as a,
  _xt as o,
  e3 as s,
  iw as c,
  jDt as l,
  oot as u,
  qC as d,
  rst as f,
  t3 as p,
  tw as m,
  tyt as h,
  vzt as g,
  xMt as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  Brt as y,
  Ek as b,
  JEn as x,
  LEn as S,
  Rrt as C,
  Tk as w,
  Tl as T,
  i3n as E,
  no as D,
  ro as O,
} from "./app-initial-5851df3f6cb1.js";
import { r as k, t as A } from "./page-93c8753f7ad2.js";
import { n as j, t as M } from "./find-plugin-mcp-extension-view-a32564d27058.js";
function N(e) {
  let t = (0, I.c)(8),
    { plugin: n, hostId: r, links: i } = e,
    a = v(x, r),
    o;
  if (t[0] !== n || t[1] !== a) {
    let e;
    (t[3] === n
      ? (e = t[4])
      : ((e = (e) => !(`readTool` in e && e.transport.type === `hosted`) && M(n, [e]) != null),
        (t[3] = n),
        (t[4] = e)),
      (o = a.filter(e)),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o));
  } else o = t[2];
  let s = o;
  if (!n.summary.installed || s.length === 0) return null;
  let c;
  return (
    t[5] !== i || t[6] !== s
      ? ((c = (0, L.jsx)(P, { views: s, links: i })), (t[5] = i), (t[6] = s), (t[7] = c))
      : (c = t[7]),
    c
  );
}
function P(e) {
  let t = (0, I.c)(9),
    { views: n, links: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, L.jsx)(r, {
        id: `plugins.detail.settings.title`,
        defaultMessage: `Settings`,
        description: `Section containing settings provided by this plugin`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  if (t[1] !== i || t[2] !== n) {
    let e;
    (t[4] !== i || t[5] !== n.length
      ? ((e = (e) =>
          `updateTool` in e
            ? (0, L.jsxs)(
                w,
                {
                  children: [
                    n.length > 1 && (0, L.jsx)(w.Header, { title: (0, L.jsx)(`h3`, { children: e.title }) }),
                    (0, L.jsx)(A, { view: e, links: i }),
                  ],
                },
                `${e.server}:${e.readTool}`,
              )
            : (0, L.jsx)(
                d,
                { children: (0, L.jsx)(m, { label: e.title, control: (0, L.jsx)(F, { view: e }) }) },
                `${e.server}:${e.tool.name}`,
              )),
        (t[4] = i),
        (t[5] = n.length),
        (t[6] = e))
      : (e = t[6]),
      (o = n.map(e)),
      (t[1] = i),
      (t[2] = n),
      (t[3] = o));
  } else o = t[3];
  let s;
  return (
    t[7] === o
      ? (s = t[8])
      : ((s = (0, L.jsx)(D, { id: `plugin-settings`, title: a, children: o })), (t[7] = o), (t[8] = s)),
    s
  );
}
function F(e) {
  let i = (0, I.c)(14),
    { view: a } = e,
    o = n(),
    { setSelectedHostId: c } = y(),
    l;
  i[0] !== a.hostId || i[1] !== a.pluginId || i[2] !== a.server || i[3] !== a.tool
    ? ((l =
        a.pluginId === `code-review@openai-bundled` &&
        a.hostId === `local` &&
        a.tool.name === `pull_requests.settings`
          ? `/settings/code-review?tab=app`
          : h(a.server, a.tool.name)),
      (i[0] = a.hostId),
      (i[1] = a.pluginId),
      (i[2] = a.server),
      (i[3] = a.tool),
      (i[4] = l))
    : (l = i[4]);
  let u = l,
    d = t(u),
    f;
  i[5] !== o || i[6] !== c || i[7] !== u || i[8] !== a.hostId
    ? ((f = (e) =>
        T(e, () => {
          (c(a.hostId), o(u, { state: { initialHostId: a.hostId, returnToPreviousHistoryEntry: !0 } }));
        })),
      (i[5] = o),
      (i[6] = c),
      (i[7] = u),
      (i[8] = a.hostId),
      (i[9] = f))
    : (f = i[9]);
  let p;
  i[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, L.jsx)(r, {
        id: `plugins.detail.settings.open`,
        defaultMessage: `Open settings`,
        description: `Open the custom settings app provided by this plugin`,
      })),
      (i[10] = p))
    : (p = i[10]);
  let m;
  return (
    i[11] !== d || i[12] !== f
      ? ((m = (0, L.jsx)(s, { color: `secondary`, href: d, onClick: f, children: p })),
        (i[11] = d),
        (i[12] = f),
        (i[13] = m))
      : (m = i[13]),
    m
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = g()), E(), a(), f(), l(), o(), p(), O(), k(), S(), b(), C(), c(), i(), u(), j(), (L = _()));
  }))();
}
export { R as n, N as t };
//# sourceMappingURL=plugin-settings-section-2cdea233adac.js.map
