import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  GE as t,
  IDt as n,
  Ixt as r,
  Pxt as i,
  VDt as a,
  WE as o,
  jDt as s,
  vzt as c,
  xMt as l,
  yzt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  $kr as f,
  Cwr as p,
  GS as m,
  KS as h,
  Mct as g,
  Pct as _,
  Zkr as v,
  _ct as y,
  gwr as b,
  iAr as x,
  lAr as S,
  vct as C,
} from "./app-initial-5851df3f6cb1.js";
import { n as w } from "./automation-search-aa8a2f802e9c.js";
import { a as T, n as E, r as D, t as O } from "./automation-row-b0bc78bac43a.js";
import { n as k, t as A } from "./state-cab2b523b416.js";
function j(e) {
  let t = (0, M.c)(27),
    { conversationId: i } = e,
    s = r(b),
    c = a(),
    l = (0, N.useId)(),
    [u, p] = (0, N.useState)(``),
    { items: m, isLoading: _, error: S } = d(A, i),
    C,
    T;
  if (t[0] !== S || t[1] !== c || t[2] !== _ || t[3] !== m || t[4] !== s || t[5] !== u) {
    let e = m?.filter((e) => w(u, [v(e), e.automation.prompt, x(e, c)])),
      r;
    if (
      (t[8] === c
        ? (r = t[9])
        : ((r = c.formatMessage({
            id: `inbox.automations.search`,
            defaultMessage: `Search scheduled tasks`,
            description: `Accessible label and placeholder for searching scheduled tasks`,
          })),
          (t[8] = c),
          (t[9] = r)),
      (T = r),
      S != null)
    ) {
      let e, r;
      t[10] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(n, {
            id: `inbox.automations.cloud.loadError`,
            defaultMessage: `Cloud scheduled tasks could not be loaded`,
            description: `Error shown when cloud scheduled tasks fail to load`,
          })),
          (r = (0, P.jsx)(n, {
            id: `inbox.automations.cloud.loadError.retry`,
            defaultMessage: `Try again`,
            description: `Button to retry loading cloud scheduled tasks`,
          })),
          (t[10] = e),
          (t[11] = r))
        : ((e = t[10]), (r = t[11]));
      let i;
      (t[12] === s.queryClient
        ? (i = t[13])
        : ((i = (0, P.jsx)(o, {
            type: `error`,
            content: e,
            primaryCtaText: r,
            onPrimaryCtaClick: () => {
              s.queryClient.invalidateQueries({ queryKey: [`cloud-automations`] });
            },
          })),
          (t[12] = s.queryClient),
          (t[13] = i)),
        (C = i));
    } else if (_) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(y, {
            loadingLabel: (0, P.jsx)(n, {
              id: `restricted.aeon.scheduled.loading`,
              defaultMessage: `Loading scheduled tasks`,
              description: `Accessible loading announcement while fetching this dot's scheduled automations`,
            }),
          })),
          (t[14] = e))
        : (e = t[14]),
        (C = e));
    } else if (e != null && e.length > 0) {
      let n;
      (t[15] !== c || t[16] !== s
        ? ((n = (e) =>
            (0, P.jsx)(
              `div`,
              {
                className: `relative`,
                role: `listitem`,
                children: (0, P.jsx)(O, {
                  displayName: v(e),
                  nextRunAt: f(e),
                  scheduleLabel: x(e, c),
                  hasUnreadRuns: !1,
                  isInProgress: !1,
                  isPaused: !e.automation.is_enabled,
                  isSelected: !1,
                  onSelect: () => h({ scope: s, automationId: e.automation.id, title: v(e) }),
                }),
              },
              e.automation.id,
            )),
          (t[15] = c),
          (t[16] = s),
          (t[17] = n))
        : (n = t[17]),
        (C = (0, P.jsx)(`div`, {
          className: `flex flex-col gap-0.5 select-none`,
          role: `list`,
          children: e.map(n),
        })));
    } else {
      let e;
      (t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, P.jsx)(D, {})), (t[18] = e))
        : (e = t[18]),
        (C = e));
    }
    ((t[0] = S), (t[1] = c), (t[2] = _), (t[3] = m), (t[4] = s), (t[5] = u), (t[6] = C), (t[7] = T));
  } else ((C = t[6]), (T = t[7]));
  let E;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, P.jsx)(n, {
        id: `restricted.aeon.scheduled.tabTitle`,
        defaultMessage: `Scheduled`,
        description: `Title of the tab listing scheduled automations attached to the current dot`,
      })),
      (t[19] = E))
    : (E = t[19]);
  let k;
  t[20] !== l || t[21] !== T || t[22] !== u
    ? ((k = { id: l, label: T, placeholder: T, searchQuery: u, onSearchQueryChange: p }),
      (t[20] = l),
      (t[21] = T),
      (t[22] = u),
      (t[23] = k))
    : (k = t[23]);
  let j;
  return (
    t[24] !== C || t[25] !== k
      ? ((j = (0, P.jsx)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface`,
          children: (0, P.jsx)(g, { headerPlacement: `toolbar`, title: E, search: k, children: C }),
        })),
        (t[24] = C),
        (t[25] = k),
        (t[26] = j))
      : (j = t[26]),
    j
  );
}
var M, N, P;
function F() {
  return (F = e(() => {
    ((M = c()), i(), (N = u()), s(), E(), T(), S(), m(), t(), _(), C(), p(), k(), (P = l()));
  }))();
}
F();
export { j as AeonScheduledTabContent };
//# sourceMappingURL=tab-content-56ac562ec4fc.js.map
