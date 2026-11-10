import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Pxt as r,
  Vxt as i,
  Xot as a,
  Yot as o,
  frt as s,
  hrt as c,
  jDt as l,
  t3 as u,
  vzt as d,
  xMt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  GMr as p,
  Iy as m,
  Ly as h,
  XMr as g,
  Ymr as _,
  dnn as v,
  ehr as y,
  fnn as b,
  hp as x,
  mp as S,
  tNr as C,
  unn as w,
} from "./app-initial-5851df3f6cb1.js";
import { i as T, n as E, r as D, t as O } from "./tooltip-ce76a437c28b.js";
function k(e) {
  let r = (0, A.c)(32),
    { libraryFileId: o, children: s, renderPreview: l } = e,
    u = b(v()),
    d = i(p),
    f = i(g),
    h;
  r[0] !== d || r[1] !== o || r[2] !== f
    ? ((h = [`library-plan-summary-preview`, d, f, o]), (r[0] = d), (r[1] = o), (r[2] = f), (r[3] = h))
    : (h = r[3]);
  let y;
  r[4] === o
    ? (y = r[5])
    : ((y = (e) => {
        let { signal: t } = e;
        return _.safeGet(`/files/library/files/{library_file_id}/plan-summary`, {
          parameters: { path: { library_file_id: o } },
          signal: t,
        });
      }),
      (r[4] = o),
      (r[5] = y));
  let x;
  r[6] !== h || r[7] !== y
    ? ((x = { queryKey: h, queryFn: y, staleTime: 0, refetchOnMount: `always`, retry: !1 }),
      (r[6] = h),
      (r[7] = y),
      (r[8] = x))
    : (x = r[8]);
  let { data: C, isPending: w, isFetching: T, isError: E, error: k, refetch: M } = a(x),
    N;
  r[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, j.jsx)(n, {
        id: `libraryPlanSummaryPreview.error`,
        defaultMessage: `Couldn’t load this plan`,
        description: `Error shown when the summary for a saved learning plan cannot be loaded in the Library file viewer`,
      })),
      (r[9] = N))
    : (N = r[9]);
  let P;
  r[10] === M ? (P = r[11]) : ((P = () => void M()), (r[10] = M), (r[11] = P));
  let F;
  r[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, j.jsx)(n, {
        id: `libraryPlanSummaryPreview.retry`,
        defaultMessage: `Retry`,
        description: `Button that retries loading a saved learning plan summary in the Library file viewer`,
      })),
      (r[12] = F))
    : (F = r[12]);
  let I;
  r[13] === P
    ? (I = r[14])
    : ((I = (0, j.jsxs)(S, {
        className: `h-full flex-col gap-3`,
        children: [N, (0, j.jsx)(t, { color: `secondary`, onClick: P, children: F })],
      })),
      (r[13] = P),
      (r[14] = I));
  let L = I,
    R;
  if (w || T) {
    let e;
    (r[15] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, j.jsx)(m, {})), (r[15] = e)) : (e = r[15]),
      (R = e));
  } else if (E) {
    if (k instanceof c && k.status === 404) return s;
    R = L;
  } else if (C?.state.plan_type === `language_learning`) {
    let e;
    r[16] === C.state
      ? (e = r[17])
      : ((e = { ...C.state, layout: `library` }), (r[16] = C.state), (r[17] = e));
    let t;
    r[18] !== C.code || r[19] !== L || r[20] !== e || r[21] !== u
      ? ((t = (0, j.jsx)(`div`, {
          className: `h-full min-h-0 overflow-y-auto bg-surface text-start`,
          children: (0, j.jsx)(`div`, {
            className: `mx-auto w-full max-w-(--thread-content-max-width) pt-[var(--viewer-header-height)]`,
            children: (0, j.jsx)(D, {
              dil: C.code,
              appData: e,
              theme: u,
              tooltipComponent: O,
              errorFallback: L,
            }),
          }),
        })),
        (r[18] = C.code),
        (r[19] = L),
        (r[20] = e),
        (r[21] = u),
        (r[22] = t))
      : (t = r[22]);
    let n = t;
    if (l == null) return n;
    let i;
    r[23] !== n || r[24] !== l ? ((i = l(n)), (r[23] = n), (r[24] = l), (r[25] = i)) : (i = r[25]);
    let a = i,
      o;
    return (r[26] !== s || r[27] !== a ? ((o = a), (r[26] = s), (r[27] = a), (r[28] = o)) : (o = r[28]), o);
  } else return s;
  let z;
  return (
    r[29] !== R || r[30] !== l
      ? ((z = l == null ? R : l(R)), (r[29] = R), (r[30] = l), (r[31] = z))
      : (z = r[31]),
    z
  );
}
var A, j;
function M() {
  return (M = e(() => {
    ((A = d()), T(), o(), r(), l(), C(), y(), E(), u(), x(), h(), w(), s(), (j = f()));
  }))();
}
M();
export { k as PlanSummaryPreview };
//# sourceMappingURL=preview-af44d7e7dcd7.js.map
