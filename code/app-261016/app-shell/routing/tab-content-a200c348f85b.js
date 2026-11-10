import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  LNt as r,
  PBt as i,
  XOt as a,
  ZSt as o,
  nCt as s,
  okt as c,
  tkt as l,
  vD as u,
  yD as d,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CPr as f,
  Clt as p,
  Llt as m,
  MOr as h,
  NPr as g,
  OPr as _,
  Slt as v,
  bC as y,
  xC as b,
  xPr as x,
  zOr as S,
  zlt as C,
} from "./app-initial-ad16eaadf81f.js";
import { n as w } from "./automation-search-aa8a2f802e9c.js";
import { a as T, n as E, r as D, t as O } from "./automation-row-c56a98da2955.js";
import { n as k, t as A } from "./state-da7a173f6535.js";
function j(e) {
  let n = (0, M.c)(27),
    { conversationId: r } = e,
    i = t(h),
    a = c(),
    o = (0, N.useId)(),
    [d, p] = (0, N.useState)(``),
    { items: g, isLoading: y, error: S } = s(A, r),
    C,
    T;
  if (n[0] !== S || n[1] !== a || n[2] !== y || n[3] !== g || n[4] !== i || n[5] !== d) {
    let e = g?.filter((e) => w(d, [x(e), e.automation.prompt, _(e, a)])),
      t;
    if (
      (n[8] === a
        ? (t = n[9])
        : ((t = a.formatMessage({
            id: `inbox.automations.search`,
            defaultMessage: `Search scheduled tasks`,
            description: `Accessible label and placeholder for searching scheduled tasks`,
          })),
          (n[8] = a),
          (n[9] = t)),
      (T = t),
      S != null)
    ) {
      let e, t;
      n[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(l, {
            id: `inbox.automations.cloud.loadError`,
            defaultMessage: `Cloud scheduled tasks could not be loaded`,
            description: `Error shown when cloud scheduled tasks fail to load`,
          })),
          (t = (0, P.jsx)(l, {
            id: `inbox.automations.cloud.loadError.retry`,
            defaultMessage: `Try again`,
            description: `Button to retry loading cloud scheduled tasks`,
          })),
          (n[10] = e),
          (n[11] = t))
        : ((e = n[10]), (t = n[11]));
      let r;
      (n[12] === i.queryClient
        ? (r = n[13])
        : ((r = (0, P.jsx)(u, {
            type: `error`,
            content: e,
            primaryCtaText: t,
            onPrimaryCtaClick: () => {
              i.queryClient.invalidateQueries({ queryKey: [`cloud-automations`] });
            },
          })),
          (n[12] = i.queryClient),
          (n[13] = r)),
        (C = r));
    } else if (y) {
      let e;
      (n[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(v, {
            loadingLabel: (0, P.jsx)(l, {
              id: `restricted.aeon.scheduled.loading`,
              defaultMessage: `Loading scheduled tasks`,
              description: `Accessible loading announcement while fetching this dot's scheduled automations`,
            }),
          })),
          (n[14] = e))
        : (e = n[14]),
        (C = e));
    } else if (e != null && e.length > 0) {
      let t;
      (n[15] !== a || n[16] !== i
        ? ((t = (e) =>
            (0, P.jsx)(
              `div`,
              {
                className: `relative`,
                role: `listitem`,
                children: (0, P.jsx)(O, {
                  displayName: x(e),
                  nextRunAt: f(e),
                  scheduleLabel: _(e, a),
                  hasUnreadRuns: !1,
                  isInProgress: !1,
                  isPaused: !e.automation.is_enabled,
                  isSelected: !1,
                  onSelect: () => b({ scope: i, automationId: e.automation.id, title: x(e) }),
                }),
              },
              e.automation.id,
            )),
          (n[15] = a),
          (n[16] = i),
          (n[17] = t))
        : (t = n[17]),
        (C = (0, P.jsx)(`div`, {
          className: `flex flex-col gap-0.5 select-none`,
          role: `list`,
          children: e.map(t),
        })));
    } else {
      let e;
      (n[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(D, {})), (n[18] = e))
        : (e = n[18]),
        (C = e));
    }
    ((n[0] = S), (n[1] = a), (n[2] = y), (n[3] = g), (n[4] = i), (n[5] = d), (n[6] = C), (n[7] = T));
  } else ((C = n[6]), (T = n[7]));
  let E;
  n[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, P.jsx)(l, {
        id: `restricted.aeon.scheduled.tabTitle`,
        defaultMessage: `Scheduled`,
        description: `Title of the tab listing scheduled automations attached to the current dot`,
      })),
      (n[19] = E))
    : (E = n[19]);
  let k;
  n[20] !== o || n[21] !== T || n[22] !== d
    ? ((k = { id: o, label: T, placeholder: T, searchQuery: d, onSearchQueryChange: p }),
      (n[20] = o),
      (n[21] = T),
      (n[22] = d),
      (n[23] = k))
    : (k = n[23]);
  let j;
  return (
    n[24] !== C || n[25] !== k
      ? ((j = (0, P.jsx)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: (0, P.jsx)(m, { headerPlacement: `toolbar`, title: E, search: k, children: C }),
        })),
        (n[24] = C),
        (n[25] = k),
        (n[26] = j))
      : (j = n[26]),
    j
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = i()), o(), (N = n()), a(), E(), T(), g(), y(), d(), C(), p(), S(), k(), (P = r()));
  }))();
}
F();
export { j as AeonScheduledTabContent };
//# sourceMappingURL=tab-content-a200c348f85b.js.map
