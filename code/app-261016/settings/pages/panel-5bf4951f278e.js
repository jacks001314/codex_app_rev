import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  LNt as n,
  PBt as r,
  RK as i,
  TY as a,
  XOt as o,
  ZSt as s,
  iCt as c,
  nCt as l,
  okt as u,
  tkt as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Fen as f,
  HEn as p,
  Ien as m,
  MOr as h,
  QI as g,
  RCn as _,
  Swn as v,
  WEn as y,
  eer as b,
  nL as x,
  rer as S,
  xwn as C,
  zCn as w,
  zOr as T,
} from "./app-initial-ad16eaadf81f.js";
import { n as E, t as D } from "./thread-summary-panel-components-10c7926d4688.js";
import { n as O, r as k, t as A } from "./open-thread-pull-request-side-panel-tab-68b7062ee7f2.js";
import { n as j, t as M } from "./local-conversation-summary-panel-artifacts-section-d8157b10ca72.js";
import { n as N, t as P } from "./model-3b379bd068d7.js";
import { n as F, t as I } from "./local-conversation-heartbeat-automation-ef525d823c1a.js";
function L() {
  let e = (0, z.c)(9),
    n = t(h),
    r = n.value.routeKind === `local-thread` ? n.value.conversationId : null,
    i = l(g, r),
    a = l(S, r);
  if (i == null || (i.length === 0 && a !== !0)) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, B.jsx)(D.Item, {
            tone: `muted`,
            role: `status`,
            children: (0, B.jsx)(D.ItemLabel, {
              children: (0, B.jsx)(d, {
                id: `restricted.aeon.summary.pluginsLoading`,
                defaultMessage: `Loading plugins…`,
                description: `Loading status for the list of plugins used by the dot`,
              }),
            }),
          })),
          (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let o, s, c;
  if (e[1] !== i) {
    let t = P(i);
    ((o = D.ItemGroup),
      (s = `select-none`),
      (c =
        t.length === 0
          ? (0, B.jsx)(D.Item, {
              tone: `muted`,
              children: (0, B.jsx)(D.ItemLabel, {
                children: (0, B.jsx)(d, {
                  id: `restricted.aeon.summary.pluginsEmpty`,
                  defaultMessage: `No plugins used yet`,
                  description: `Empty state when the dot has not used any plugins`,
                }),
              }),
            })
          : t.map(R)),
      (e[1] = i),
      (e[2] = o),
      (e[3] = s),
      (e[4] = c));
  } else ((o = e[2]), (s = e[3]), (c = e[4]));
  let u;
  return (
    e[5] !== o || e[6] !== s || e[7] !== c
      ? ((u = (0, B.jsx)(o, { className: s, children: c })), (e[5] = o), (e[6] = s), (e[7] = c), (e[8] = u))
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
        (0, B.jsx)(D.ItemLeading, { variant: `custom`, children: (0, B.jsx)(i, {}) }),
        (0, B.jsx)(D.ItemLabel, { children: e.name }),
      ],
    },
    e.id,
  );
}
var z, B;
function V() {
  return (V = e(() => {
    ((z = r()), s(), o(), b(), a(), T(), x(), E(), N(), (B = n()));
  }))();
}
function H(e) {
  let n = (0, G.c)(27),
    { kind: r, onClose: i } = e,
    a = t(h),
    o = u(),
    s;
  n[0] === o
    ? (s = n[1])
    : ((s = o.formatMessage({
        id: `restricted.aeon.summary.closePlugins`,
        defaultMessage: `Close plugins`,
        description: `Accessible label for closing the dot's plugins list side panel`,
      })),
      (n[0] = o),
      (n[1] = s));
  let c;
  n[2] === o
    ? (c = n[3])
    : ((c = o.formatMessage({
        id: `restricted.aeon.summary.closeReminders`,
        defaultMessage: `Close reminders`,
        description: `Accessible label for closing the dot's reminders list side panel`,
      })),
      (n[2] = o),
      (n[3] = c));
  let l;
  n[4] === o
    ? (l = n[5])
    : ((l = o.formatMessage({
        id: `restricted.aeon.summary.closeOutputs`,
        defaultMessage: `Close outputs`,
        description: `Accessible label for closing the dot's outputs list side panel`,
      })),
      (n[4] = o),
      (n[5] = l));
  let f;
  n[6] !== s || n[7] !== c || n[8] !== l
    ? ((f = { plugins: s, reminders: c, outputs: l }), (n[6] = s), (n[7] = c), (n[8] = l), (n[9] = f))
    : (f = n[9]);
  let m = f[r],
    g;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = {
        plugins: (0, K.jsx)(d, {
          id: `restricted.aeon.summary.pluginsTitle`,
          defaultMessage: `Plugins`,
          description: `Title of the side panel listing plugins used by the dot`,
        }),
        reminders: (0, K.jsx)(d, {
          id: `restricted.aeon.summary.remindersTitle`,
          defaultMessage: `Reminders`,
          description: `Title of the side panel listing reminders attached to the dot`,
        }),
        outputs: (0, K.jsx)(d, {
          id: `codex.localConversation.outputs.title.v2`,
          defaultMessage: `Outputs`,
          description: `Title for files, documents, links, and other results produced by Codex. 'Outputs' means produced results or artifacts, not exits or audio/video ports.`,
        }),
      }),
      (n[10] = g))
    : (g = n[10]);
  let _ = g[r],
    v;
  n[11] === r ? (v = n[12]) : ((v = r === `plugins` ? (0, K.jsx)(L, {}) : null), (n[11] = r), (n[12] = v));
  let y;
  n[13] === r ? (y = n[14]) : ((y = r === `reminders` ? (0, K.jsx)(U, {}) : null), (n[13] = r), (n[14] = y));
  let b;
  n[15] !== r || n[16] !== a
    ? ((b =
        r === `outputs`
          ? (0, K.jsx)(M, {
              isVisible: !0,
              presentation: `list`,
              onOpenPullRequestSidePanel: (e) => {
                let t = C(a, `aeon-summary-outputs`) ?? `right`;
                e.kind === `canonical`
                  ? O(a, e, { insertPosition: { type: `after`, tabId: `aeon-summary-outputs` }, target: t })
                  : k(a, e, !0, t, { insertPosition: { type: `after`, tabId: `aeon-summary-outputs` } });
              },
            })
          : null),
      (n[15] = r),
      (n[16] = a),
      (n[17] = b))
    : (b = n[17]);
  let x;
  n[18] !== b || n[19] !== v || n[20] !== y
    ? ((x = (0, K.jsxs)(`div`, { className: `min-h-0 flex-1 overflow-y-auto p-panel`, children: [v, y, b] })),
      (n[18] = b),
      (n[19] = v),
      (n[20] = y),
      (n[21] = x))
    : (x = n[21]);
  let S;
  return (
    n[22] !== i || n[23] !== x || n[24] !== m || n[25] !== _
      ? ((S = (0, K.jsx)(p, { closeLabel: m, leading: _, onClose: i, children: x })),
        (n[22] = i),
        (n[23] = x),
        (n[24] = m),
        (n[25] = _),
        (n[26] = S))
      : (S = n[26]),
    S
  );
}
function U() {
  let e = (0, G.c)(13),
    n = t(h),
    { data: r, isError: i } = c(w);
  if (r == null) {
    let t;
    return (
      e[0] !== i || e[1] !== n
        ? ((t = i
            ? (0, K.jsx)(D.ItemButton, {
                onClick: () => void n.query.invalidate(w),
                children: (0, K.jsx)(D.ItemLabel, {
                  children: (0, K.jsx)(d, {
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
                  children: (0, K.jsx)(d, {
                    id: `restricted.aeon.summary.remindersLoading`,
                    defaultMessage: `Loading reminders…`,
                    description: `Loading status for the dot's reminders list`,
                  }),
                }),
              })),
          (e[0] = i),
          (e[1] = n),
          (e[2] = t))
        : (t = e[2]),
      t
    );
  }
  let a, o, s;
  if (e[3] !== r.items || e[4] !== n.value.conversationId || e[5] !== n.value.routeKind) {
    let t = f({
      automations: r.items,
      conversationId: n.value.routeKind === `local-thread` ? n.value.conversationId : null,
      includePausedAutomations: !0,
    });
    ((a = D.ItemGroup),
      (o = `select-none`),
      (s =
        t.length === 0
          ? (0, K.jsx)(D.Item, {
              tone: `muted`,
              children: (0, K.jsx)(D.ItemLabel, {
                children: (0, K.jsx)(d, {
                  id: `restricted.aeon.summary.remindersEmpty`,
                  defaultMessage: `No reminders yet`,
                  description: `Empty state when the dot has no attached reminders`,
                }),
              }),
            })
          : t.map(W)),
      (e[3] = r.items),
      (e[4] = n.value.conversationId),
      (e[5] = n.value.routeKind),
      (e[6] = a),
      (e[7] = o),
      (e[8] = s));
  } else ((a = e[6]), (o = e[7]), (s = e[8]));
  let l;
  return (
    e[9] !== a || e[10] !== o || e[11] !== s
      ? ((l = (0, K.jsx)(a, { className: o, children: s })),
        (e[9] = a),
        (e[10] = o),
        (e[11] = s),
        (e[12] = l))
      : (l = e[12]),
    l
  );
}
function W(e) {
  return (0, K.jsx)(I, { automation: e }, e.id);
}
var G, K;
function q() {
  return (q = e(() => {
    ((G = r()), s(), o(), y(), _(), m(), T(), A(), v(), F(), j(), E(), V(), (K = n()));
  }))();
}
q();
export { H as SummaryStatsPanel };
//# sourceMappingURL=panel-5bf4951f278e.js.map
