import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  BSt as n,
  LNt as r,
  NSt as i,
  PBt as a,
  USt as o,
  X3 as s,
  XOt as c,
  Z3 as l,
  ZSt as u,
  Zst as d,
  _bt as f,
  ew as p,
  nCt as m,
  sct as h,
  sw as g,
  tkt as _,
  uw as v,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B5n as y,
  Dl as b,
  _An as x,
  ao as S,
  cA as C,
  iat as w,
  io as T,
  oAn as E,
  oat as D,
  sA as O,
} from "./app-initial-ad16eaadf81f.js";
import { r as k, t as A } from "./page-27aa30d7e5b4.js";
import { n as j, t as M } from "./find-plugin-mcp-extension-view-9623d05d6c27.js";
function N(e) {
  let t = (0, I.c)(8),
    { plugin: n, hostId: r, links: i } = e,
    a = m(x, r),
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
  let n = (0, I.c)(9),
    { views: r, links: i } = e,
    a;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, L.jsx)(_, {
        id: `plugins.detail.settings.title`,
        defaultMessage: `Settings`,
        description: `Section containing settings provided by this plugin`,
      })),
      (n[0] = a))
    : (a = n[0]);
  let o;
  if (n[1] !== i || n[2] !== r) {
    let e;
    (n[4] !== i || n[5] !== r.length
      ? ((e = (e) =>
          `updateTool` in e
            ? (0, L.jsxs)(
                O,
                {
                  children: [
                    r.length > 1 && (0, L.jsx)(O.Header, { title: (0, L.jsx)(`h3`, { children: e.title }) }),
                    (0, L.jsx)(A, { view: e, links: i }),
                  ],
                },
                `${e.server}:${e.readTool}`,
              )
            : (0, L.jsx)(
                t,
                { children: (0, L.jsx)(g, { label: e.title, control: (0, L.jsx)(F, { view: e }) }) },
                `${e.server}:${e.tool.name}`,
              )),
        (n[4] = i),
        (n[5] = r.length),
        (n[6] = e))
      : (e = n[6]),
      (o = r.map(e)),
      (n[1] = i),
      (n[2] = r),
      (n[3] = o));
  } else o = n[3];
  let s;
  return (
    n[7] === o
      ? (s = n[8])
      : ((s = (0, L.jsx)(T, { id: `plugin-settings`, title: a, children: o })), (n[7] = o), (n[8] = s)),
    s
  );
}
function F(e) {
  let t = (0, I.c)(14),
    { view: r } = e,
    i = o(),
    { setSelectedHostId: a } = D(),
    c;
  t[0] !== r.hostId || t[1] !== r.pluginId || t[2] !== r.server || t[3] !== r.tool
    ? ((c =
        r.pluginId === `code-review@openai-bundled` &&
        r.hostId === `local` &&
        r.tool.name === `pull_requests.settings`
          ? `/settings/code-review?tab=app`
          : f(r.server, r.tool.name)),
      (t[0] = r.hostId),
      (t[1] = r.pluginId),
      (t[2] = r.server),
      (t[3] = r.tool),
      (t[4] = c))
    : (c = t[4]);
  let l = c,
    u = n(l),
    d;
  t[5] !== i || t[6] !== a || t[7] !== l || t[8] !== r.hostId
    ? ((d = (e) =>
        b(e, () => {
          (a(r.hostId), i(l, { state: { initialHostId: r.hostId, returnToPreviousHistoryEntry: !0 } }));
        })),
      (t[5] = i),
      (t[6] = a),
      (t[7] = l),
      (t[8] = r.hostId),
      (t[9] = d))
    : (d = t[9]);
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, L.jsx)(_, {
        id: `plugins.detail.settings.open`,
        defaultMessage: `Open settings`,
        description: `Open the custom settings app provided by this plugin`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  return (
    t[11] !== u || t[12] !== d
      ? ((m = (0, L.jsx)(s, { color: `secondary`, href: u, onClick: d, children: p })),
        (t[11] = u),
        (t[12] = d),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
var I, L;
function R() {
  return (R = e(() => {
    ((I = a()), y(), u(), h(), c(), i(), l(), S(), k(), E(), C(), w(), v(), p(), d(), j(), (L = r()));
  }))();
}
export { R as n, N as t };
//# sourceMappingURL=plugin-settings-section-f57bcec82fc7.js.map
