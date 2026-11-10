import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  Pxt as r,
  Qot as i,
  TJ as a,
  VDt as o,
  Vxt as s,
  XV as c,
  Zot as l,
  frt as u,
  hrt as d,
  i3 as f,
  jDt as p,
  k_t as m,
  r3 as h,
  rst as g,
  vzt as _,
  xMt as v,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as y,
  GS as b,
  JAr as x,
  JOr as S,
  KS as C,
  QAr as w,
  Zkr as T,
  gwr as E,
  lAr as D,
  mct as O,
  nkr as k,
  pct as ee,
  rkr as A,
} from "./app-initial-5851df3f6cb1.js";
import { n as j, t as M } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { n as N, r as P } from "./appgen-automation-site-links-4488269f5bb1.js";
import { n as F, t as I } from "./compact-cadence-61b84fe8d42f.js";
import { n as L, t as R } from "./local-conversation-heartbeat-automation-66f86b8ea25b.js";
function z(e) {
  let t = (0, B.c)(3),
    { children: n, density: r } = e,
    i = r === void 0 ? `default` : r,
    a;
  return (
    t[0] !== n || t[1] !== i
      ? ((a = (0, V.jsx)(M.Content, {
          className: `text-default select-none`,
          variant: `dynamic-isle`,
          density: i,
          children: n,
        })),
        (t[0] = n),
        (t[1] = i),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
var B, V;
function H() {
  return (H = e(() => {
    ((B = _()), j(), (V = v()));
  }))();
}
function U(e) {
  let r = (0, Z.c)(19),
    {
      List: a,
      automationIds: l,
      localAutomations: u,
      isUpdating: d,
      showCollapsedCount: f,
      renderGoal: p,
      showGoalDivider: g,
    } = e,
    _ = a === void 0 ? M.List : a,
    v = f === void 0 || f,
    y = g === void 0 || g,
    b = n(E),
    w = o(),
    D = s(S),
    O;
  if (r[0] !== D || r[1] !== l || r[2] !== d) {
    let e;
    (r[4] !== D || r[5] !== d
      ? ((e = (e) => ({ ...k(e, D), refetchInterval: d ? 2e3 : !1, refetchOnMount: `always` })),
        (r[4] = D),
        (r[5] = d),
        (r[6] = e))
      : (e = r[6]),
      (O = l.map(e)),
      (r[0] = D),
      (r[1] = l),
      (r[2] = d),
      (r[3] = O));
  } else O = r[3];
  let A;
  r[7] === O ? (A = r[8]) : ((A = { queries: O }), (r[7] = O), (r[8] = A));
  let j = i(A),
    N,
    P;
  if (
    r[9] !== _ ||
    r[10] !== w ||
    r[11] !== u ||
    r[12] !== j ||
    r[13] !== p ||
    r[14] !== b ||
    r[15] !== v ||
    r[16] !== y
  ) {
    P = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = j.flatMap(X),
        n = j.some(Y),
        r = j.filter(J);
      if (e.length === 0 && !u?.length && !n && r.length === 0) {
        P = null;
        break bb0;
      }
      let i = new Map();
      for (let t of e) {
        let e = p?.(t);
        e != null && i.set(t.automation.id, e);
      }
      let a = e.filter((e) => {
          let { automation: t } = e;
          return i.has(t.id);
        }),
        o = e.filter((e) => {
          let { automation: t } = e;
          return !i.has(t.id);
        }),
        s = [
          ...(a.length > 0 ? [{ kind: `goal`, items: a }] : []),
          ...(o.length > 0 || u?.length || n || r.length > 0 ? [{ kind: `scheduled`, items: o }] : []),
        ];
      N = (0, Q.jsx)(Q.Fragment, {
        children: s.map((e) => {
          let { kind: a, items: o } = e;
          return (0, Q.jsxs)(
            M.Section,
            {
              divider: a !== `goal` || y,
              sectionKey: a === `goal` ? `automation-goal` : `automation`,
              title:
                a === `goal`
                  ? (0, Q.jsx)(t, {
                      id: `chatgptConversations.summaryPanel.goal.title`,
                      defaultMessage: `Goal`,
                      description: `Heading for saved goals in a conversation summary`,
                    })
                  : (0, Q.jsx)(ee, {
                      children: (0, Q.jsx)(t, {
                        id: `automations.scheduled.destination.label`,
                        defaultMessage: `Scheduled`,
                        description: `Title of the Scheduled destination and the compact scheduled-task list in a conversation`,
                      }),
                    }),
              titleSuffix: v
                ? (0, Q.jsx)(M.SectionCount, { count: o.length + (a === `scheduled` ? (u?.length ?? 0) : 0) })
                : void 0,
              children: [
                a === `scheduled`
                  ? u?.map((e) =>
                      m(e)
                        ? (0, Q.jsx)(R, { automation: e }, e.id)
                        : (0, Q.jsxs)(
                            M.ItemButton,
                            {
                              onClick: () => C({ scope: b, automationId: e.id, title: e.name }),
                              children: [
                                (0, Q.jsx)(M.ItemLeading, { children: (0, Q.jsx)(c, {}) }),
                                (0, Q.jsx)(M.ItemLabel, { children: e.name }),
                                (0, Q.jsx)(M.ItemMeta, {
                                  truncate: !0,
                                  children: x({
                                    rrule: e.rrule,
                                    nextRunAt: e.nextRunAt,
                                    intl: w,
                                    fallbackMessage: w.formatMessage({
                                      id: `settings.automations.rruleSummaryFallback`,
                                      defaultMessage: `Custom schedule`,
                                      description: `Fallback label when RRULE summary cannot be generated`,
                                    }),
                                  }),
                                }),
                              ],
                            },
                            e.id,
                          ),
                    )
                  : null,
                (0, Q.jsx)(_, {
                  items: o,
                  getKey: q,
                  renderFooter: G,
                  children: (e) =>
                    i.get(e.automation.id) ??
                    (0, Q.jsxs)(M.ItemButton, {
                      onClick: () => {
                        C({
                          scope: b,
                          automationId: e.automation.id,
                          title: T(e),
                          navigationSource: `conversation`,
                        });
                      },
                      children: [
                        (0, Q.jsx)(M.ItemLeading, { children: (0, Q.jsx)(c, {}) }),
                        (0, Q.jsx)(M.ItemLabel, { children: T(e) }),
                        (0, Q.jsx)(M.ItemMeta, {
                          children: (0, Q.jsx)(I, {
                            automation: e.automation,
                            teamId: e.teamId,
                            variant: `summary`,
                          }),
                        }),
                      ],
                    }),
                }),
                a === `scheduled` && n ? (0, Q.jsx)(h, {}) : null,
                a === `scheduled` && r.length > 0
                  ? (0, Q.jsx)(M.ItemButton, {
                      onClick: () => {
                        Promise.all(r.map(W));
                      },
                      children: (0, Q.jsx)(M.ItemLabel, {
                        children: (0, Q.jsx)(t, {
                          id: `chatgptConversations.summaryPanel.scheduled.retry`,
                          defaultMessage: `Retry loading scheduled tasks`,
                          description: `Action to retry loading scheduled tasks shown in the conversation summary panel`,
                        }),
                      }),
                    })
                  : null,
              ],
            },
            a,
          );
        }),
      });
    }
    ((r[9] = _),
      (r[10] = w),
      (r[11] = u),
      (r[12] = j),
      (r[13] = p),
      (r[14] = b),
      (r[15] = v),
      (r[16] = y),
      (r[17] = N),
      (r[18] = P));
  } else ((N = r[17]), (P = r[18]));
  return P === Symbol.for(`react.early_return_sentinel`) ? N : P;
}
function W(e) {
  return e.refetch();
}
function G(e) {
  return (0, Q.jsx)(N, { automationIds: e.map(K), presentation: `summary` });
}
function K(e) {
  let { automation: t } = e;
  return t.id;
}
function q(e) {
  let { automation: t } = e;
  return t.id;
}
function J(e) {
  let { error: t, isError: n } = e;
  return n && !(t instanceof d && t.status === 404);
}
function Y(e) {
  return e.isLoading;
}
function X(e) {
  let { data: t, isError: n } = e;
  return t == null || n ? [] : [t];
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = _()),
      l(),
      r(),
      g(),
      p(),
      P(),
      w(),
      D(),
      A(),
      b(),
      F(),
      a(),
      f(),
      y(),
      O(),
      L(),
      j(),
      u(),
      (Q = v()));
  }))();
}
export { H as i, $ as n, z as r, U as t };
//# sourceMappingURL=summary-section-eebf56dfab6c.js.map
