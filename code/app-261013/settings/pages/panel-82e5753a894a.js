import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  Pxt as r,
  TJ as i,
  VDt as a,
  VG as o,
  Vxt as s,
  jDt as c,
  vzt as l,
  xMt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  CCn as f,
  Cwr as p,
  Dbn as m,
  Obn as h,
  TCn as g,
  dxn as _,
  gwr as v,
  h7t as y,
  hI as b,
  m7t as x,
  uxn as S,
  v8n as C,
  x8n as w,
  yI as T,
} from "./app-initial-5851df3f6cb1.js";
import { n as E, t as D } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { n as O, r as k, t as A } from "./open-thread-pull-request-side-panel-tab-f5b1ea6eb149.js";
import { n as j, t as M } from "./local-conversation-summary-panel-artifacts-section-de99ba817abb.js";
import { n as N, t as P } from "./model-2a36cedbe97b.js";
import { n as F, t as I } from "./local-conversation-heartbeat-automation-66f86b8ea25b.js";
function L() {
  let e = (0, z.c)(9),
    r = n(v),
    i = r.value.routeKind === `local-thread` ? r.value.conversationId : null,
    a = d(b, i),
    o = d(w, i);
  if (a == null || (a.length === 0 && o !== !0)) {
    let n;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, B.jsx)(D.Item, {
            tone: `muted`,
            role: `status`,
            children: (0, B.jsx)(D.ItemLabel, {
              children: (0, B.jsx)(t, {
                id: `restricted.aeon.summary.pluginsLoading`,
                defaultMessage: `Loading plugins…`,
                description: `Loading status for the list of plugins used by the dot`,
              }),
            }),
          })),
          (e[0] = n))
        : (n = e[0]),
      n
    );
  }
  let s, c, l;
  if (e[1] !== a) {
    let n = P(a);
    ((s = D.ItemGroup),
      (c = `select-none`),
      (l =
        n.length === 0
          ? (0, B.jsx)(D.Item, {
              tone: `muted`,
              children: (0, B.jsx)(D.ItemLabel, {
                children: (0, B.jsx)(t, {
                  id: `restricted.aeon.summary.pluginsEmpty`,
                  defaultMessage: `No plugins used yet`,
                  description: `Empty state when the dot has not used any plugins`,
                }),
              }),
            })
          : n.map(R)),
      (e[1] = a),
      (e[2] = s),
      (e[3] = c),
      (e[4] = l));
  } else ((s = e[2]), (c = e[3]), (l = e[4]));
  let u;
  return (
    e[5] !== s || e[6] !== c || e[7] !== l
      ? ((u = (0, B.jsx)(s, { className: c, children: l })), (e[5] = s), (e[6] = c), (e[7] = l), (e[8] = u))
      : (u = e[8]),
    u
  );
}
function R(e) {
  return (0, B.jsxs)(
    D.Item,
    {
      title: e.id,
      children: [
        (0, B.jsx)(D.ItemLeading, { variant: `custom`, children: (0, B.jsx)(o, {}) }),
        (0, B.jsx)(D.ItemLabel, { children: e.name }),
      ],
    },
    e.id,
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = l()), r(), c(), C(), i(), p(), T(), E(), N(), (B = u()));
  }))();
}
function H(e) {
  let r = (0, G.c)(27),
    { kind: i, onClose: o } = e,
    s = n(v),
    c = a(),
    l;
  r[0] === c
    ? (l = r[1])
    : ((l = c.formatMessage({
        id: `restricted.aeon.summary.closePlugins`,
        defaultMessage: `Close plugins`,
        description: `Accessible label for closing the dot's plugins list side panel`,
      })),
      (r[0] = c),
      (r[1] = l));
  let u;
  r[2] === c
    ? (u = r[3])
    : ((u = c.formatMessage({
        id: `restricted.aeon.summary.closeReminders`,
        defaultMessage: `Close reminders`,
        description: `Accessible label for closing the dot's reminders list side panel`,
      })),
      (r[2] = c),
      (r[3] = u));
  let d;
  r[4] === c
    ? (d = r[5])
    : ((d = c.formatMessage({
        id: `restricted.aeon.summary.closeOutputs`,
        defaultMessage: `Close outputs`,
        description: `Accessible label for closing the dot's outputs list side panel`,
      })),
      (r[4] = c),
      (r[5] = d));
  let p;
  r[6] !== l || r[7] !== u || r[8] !== d
    ? ((p = { plugins: l, reminders: u, outputs: d }), (r[6] = l), (r[7] = u), (r[8] = d), (r[9] = p))
    : (p = r[9]);
  let m = p[i],
    h;
  r[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = {
        plugins: (0, K.jsx)(t, {
          id: `restricted.aeon.summary.pluginsTitle`,
          defaultMessage: `Plugins`,
          description: `Title of the side panel listing plugins used by the dot`,
        }),
        reminders: (0, K.jsx)(t, {
          id: `restricted.aeon.summary.remindersTitle`,
          defaultMessage: `Reminders`,
          description: `Title of the side panel listing reminders attached to the dot`,
        }),
        outputs: (0, K.jsx)(t, {
          id: `codex.localConversation.outputs.title.v2`,
          defaultMessage: `Outputs`,
          description: `Title for files, documents, links, and other results produced by Codex. 'Outputs' means produced results or artifacts, not exits or audio/video ports.`,
        }),
      }),
      (r[10] = h))
    : (h = r[10]);
  let g = h[i],
    _;
  r[11] === i ? (_ = r[12]) : ((_ = i === `plugins` ? (0, K.jsx)(L, {}) : null), (r[11] = i), (r[12] = _));
  let y;
  r[13] === i ? (y = r[14]) : ((y = i === `reminders` ? (0, K.jsx)(U, {}) : null), (r[13] = i), (r[14] = y));
  let b;
  r[15] !== i || r[16] !== s
    ? ((b =
        i === `outputs`
          ? (0, K.jsx)(M, {
              isVisible: !0,
              presentation: `list`,
              onOpenPullRequestSidePanel: (e) => {
                let t = S(s, `aeon-summary-outputs`) ?? `right`;
                e.kind === `canonical`
                  ? O(s, e, { insertPosition: { type: `after`, tabId: `aeon-summary-outputs` }, target: t })
                  : k(s, e, !0, t, { insertPosition: { type: `after`, tabId: `aeon-summary-outputs` } });
              },
            })
          : null),
      (r[15] = i),
      (r[16] = s),
      (r[17] = b))
    : (b = r[17]);
  let x;
  r[18] !== b || r[19] !== _ || r[20] !== y
    ? ((x = (0, K.jsxs)(`div`, { className: `min-h-0 flex-1 overflow-y-auto p-panel`, children: [_, y, b] })),
      (r[18] = b),
      (r[19] = _),
      (r[20] = y),
      (r[21] = x))
    : (x = r[21]);
  let C;
  return (
    r[22] !== o || r[23] !== x || r[24] !== m || r[25] !== g
      ? ((C = (0, K.jsx)(f, { closeLabel: m, leading: g, onClose: o, children: x })),
        (r[22] = o),
        (r[23] = x),
        (r[24] = m),
        (r[25] = g),
        (r[26] = C))
      : (C = r[26]),
    C
  );
}
function U() {
  let e = (0, G.c)(13),
    r = n(v),
    { data: i, isError: a } = s(h);
  if (i == null) {
    let n;
    return (
      e[0] !== a || e[1] !== r
        ? ((n = a
            ? (0, K.jsx)(D.ItemButton, {
                onClick: () => void r.query.invalidate(h),
                children: (0, K.jsx)(D.ItemLabel, {
                  children: (0, K.jsx)(t, {
                    id: `restricted.aeon.summary.remindersLoadError`,
                    defaultMessage: `Could not load reminders. Try again`,
                    description: `Error and retry button for loading the dot's reminders list`,
                  }),
                }),
              })
            : (0, K.jsx)(D.Item, {
                tone: `muted`,
                role: `status`,
                children: (0, K.jsx)(D.ItemLabel, {
                  children: (0, K.jsx)(t, {
                    id: `restricted.aeon.summary.remindersLoading`,
                    defaultMessage: `Loading reminders…`,
                    description: `Loading status for the dot's reminders list`,
                  }),
                }),
              })),
          (e[0] = a),
          (e[1] = r),
          (e[2] = n))
        : (n = e[2]),
      n
    );
  }
  let o, c, l;
  if (e[3] !== i.items || e[4] !== r.value.conversationId || e[5] !== r.value.routeKind) {
    let n = x({
      automations: i.items,
      conversationId: r.value.routeKind === `local-thread` ? r.value.conversationId : null,
      includePausedAutomations: !0,
    });
    ((o = D.ItemGroup),
      (c = `select-none`),
      (l =
        n.length === 0
          ? (0, K.jsx)(D.Item, {
              tone: `muted`,
              children: (0, K.jsx)(D.ItemLabel, {
                children: (0, K.jsx)(t, {
                  id: `restricted.aeon.summary.remindersEmpty`,
                  defaultMessage: `No reminders yet`,
                  description: `Empty state when the dot has no attached reminders`,
                }),
              }),
            })
          : n.map(W)),
      (e[3] = i.items),
      (e[4] = r.value.conversationId),
      (e[5] = r.value.routeKind),
      (e[6] = o),
      (e[7] = c),
      (e[8] = l));
  } else ((o = e[6]), (c = e[7]), (l = e[8]));
  let u;
  return (
    e[9] !== o || e[10] !== c || e[11] !== l
      ? ((u = (0, K.jsx)(o, { className: c, children: l })),
        (e[9] = o),
        (e[10] = c),
        (e[11] = l),
        (e[12] = u))
      : (u = e[12]),
    u
  );
}
function W(e) {
  return (0, K.jsx)(I, { automation: e }, e.id);
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = l()), r(), c(), g(), m(), y(), p(), A(), _(), F(), j(), E(), V(), (K = u()));
  }))();
}
q();
export { H as SummaryStatsPanel };
//# sourceMappingURL=panel-82e5753a894a.js.map
