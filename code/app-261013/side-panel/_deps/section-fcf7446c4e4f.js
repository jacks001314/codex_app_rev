const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./panel-aad4bb754884.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./thread-summary-panel-components-7e14b3bbe8fe.js",
      "./bullet-separator-9aa986eaf7a4.js",
      "./summary-panel-expandable-list-7e5eade158bb.js",
      "./thread-summary-panel-components-c162310c9992.css",
      "./state-737f67c028aa.js",
      "./row-ce65df29f18d.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  B4 as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  TJ as a,
  VDt as o,
  fPt as s,
  jDt as c,
  lW as l,
  pPt as u,
  vzt as d,
  xMt as f,
  yzt as p,
  z4 as m,
  zxt as h,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as g,
  Cwr as _,
  Mwn as v,
  dwn as y,
  gwr as b,
  hwn as x,
  jwn as S,
  v8n as C,
} from "./app-initial-5851df3f6cb1.js";
import { n as w, t as T } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { r as E, t as D } from "./state-737f67c028aa.js";
import { n as O, t as k } from "./dynamic-isle-list-4d9511619fcb.js";
import { a as A, o as j } from "./feedback-c976197c5916.js";
import { n as M, t as N } from "./row-ce65df29f18d.js";
function P(e, t, n) {
  x.openTab(e, L, { revealAndFocus: !0, props: { parent: t }, title: n });
}
var F, I, L;
function R() {
  return (R = e(() => {
    ((F = p()),
      y(),
      S(),
      a(),
      m(),
      u(),
      (I = t(
        async () =>
          (
            await s(
              async () => {
                let { TopOfMindTasksPanel: e } = await import(`./panel-aad4bb754884.js`);
                return { TopOfMindTasksPanel: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]),
              import.meta.url,
            )
          ).TopOfMindTasksPanel,
        { propagateLoadError: !0 },
      )),
      (L = v(`aeon-tasks`, I, {
        getIcon: () => (0, F.createElement)(l),
        getId: (e, { parent: t }) => `aeon-tasks:${t.hostId}:${t.threadId}`,
        isAvailable: () => !0,
        open: P,
      })));
  }))();
}
function z(e) {
  let t = (0, V.c)(31),
    { conversationId: i, isVisible: a, mode: s, onSelect: c } = e,
    u = s === void 0 ? `section` : s,
    d = r(b),
    f = o(),
    p = h(g, i),
    m;
  t[0] !== i || t[1] !== p
    ? ((m = { hostId: p, threadId: i }), (t[0] = i), (t[1] = p), (t[2] = m))
    : (m = t[2]);
  let _ = m,
    v = h(E, a ? _ : null);
  if (v == null || v.all.length === 0) return null;
  if (u === `profile`) {
    if (v.named.length === 0) return null;
    let e = `${p}:${i}`,
      n;
    t[3] === c
      ? (n = t[4])
      : ((n = (e) => (0, H.jsx)(N, { ...e, profile: !0, onSelect: c })), (t[3] = c), (t[4] = n));
    let r;
    return (
      t[5] !== e || t[6] !== n || t[7] !== v.named
        ? ((r = (0, H.jsx)(A, {
            children: (0, H.jsx)(
              k,
              {
                items: v.named,
                getKey: B,
                visibleItemLimit: 4,
                visibleItemIncrement: 4,
                preserveExpandedOrder: !0,
                children: n,
              },
              e,
            ),
          })),
          (t[5] = e),
          (t[6] = n),
          (t[7] = v.named),
          (t[8] = r))
        : (r = t[8]),
      r
    );
  }
  let y;
  t[9] !== f || t[10] !== _ || t[11] !== d
    ? ((y = () => {
        P(
          d,
          _,
          f.formatMessage({
            id: `restricted.aeon.topOfMind.tasksTitle`,
            defaultMessage: `Tasks`,
            description: `Title of the side panel listing all tasks created by a dot`,
          }),
        );
      }),
      (t[9] = f),
      (t[10] = _),
      (t[11] = d),
      (t[12] = y))
    : (y = t[12]);
  let x = y,
    S = null;
  if (v.all.length > v.visible.length) {
    let e;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, H.jsx)(T.ItemLeading, { variant: `custom`, children: (0, H.jsx)(l, {}) })), (t[13] = e))
      : (e = t[13]);
    let r = u === `section` ? void 0 : `leading-5`,
      i;
    t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, H.jsx)(n, {
          id: `restricted.aeon.topOfMind.viewAllTasks`,
          defaultMessage: `View all`,
          description: `Open the side panel containing all tasks created by a dot, including older completed tasks`,
        })),
        (t[14] = i))
      : (i = t[14]);
    let a;
    t[15] === r
      ? (a = t[16])
      : ((a = (0, H.jsx)(T.ItemLabel, { className: r, children: i })), (t[15] = r), (t[16] = a));
    let o;
    (t[17] !== x || t[18] !== a
      ? ((o = (0, H.jsxs)(T.ItemButton, { tone: `muted`, onClick: x, children: [e, a] })),
        (t[17] = x),
        (t[18] = a),
        (t[19] = o))
      : (o = t[19]),
      (S = o));
  }
  let C;
  if (t[20] !== u || t[21] !== v.visible) {
    let e;
    (t[23] === u
      ? (e = t[24])
      : ((e = (e) => (0, H.jsx)(N, { ...e, compact: u !== `section` }, `${e.hostId}:${e.threadId}`)),
        (t[23] = u),
        (t[24] = e)),
      (C = v.visible.map(e)),
      (t[20] = u),
      (t[21] = v.visible),
      (t[22] = C));
  } else C = t[22];
  let w;
  t[25] !== S || t[26] !== C
    ? ((w = (0, H.jsxs)(H.Fragment, { children: [C, S] })), (t[25] = S), (t[26] = C), (t[27] = w))
    : (w = t[27]);
  let D = w,
    O;
  return (
    t[28] !== u || t[29] !== D
      ? ((O =
          u === `content`
            ? (0, H.jsx)(`div`, { className: `relative z-10 flex min-w-0 flex-col select-none`, children: D })
            : (0, H.jsx)(T.Section, {
                sectionKey: `aeon-top-of-mind`,
                mode: `accordion`,
                title: (0, H.jsx)(n, {
                  id: `restricted.aeon.topOfMind.title`,
                  defaultMessage: `Top of mind`,
                  description: `Heading for a dot's active tasks and most recently completed tasks`,
                }),
                children: (0, H.jsx)(T.ItemGroup, { className: `select-none`, children: D }),
              })),
        (t[28] = u),
        (t[29] = D),
        (t[30] = O))
      : (O = t[30]),
    O
  );
}
function B(e) {
  return `${e.hostId}:${e.threadId}`;
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = d()), i(), c(), C(), a(), O(), _(), w(), j(), R(), M(), D(), (H = f()));
  }))();
}
export { U as n, z as t };
//# sourceMappingURL=section-fcf7446c4e4f.js.map
