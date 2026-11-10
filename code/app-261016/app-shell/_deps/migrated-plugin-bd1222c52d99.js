import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  LNt as a,
  N4 as o,
  NSt as s,
  OB as c,
  P4 as l,
  PBt as u,
  Qst as d,
  USt as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  nCt as _,
  tkt as v,
} from "./app-shared-2feb3d4c6fcc.js";
import { BRr as y, RMr as b, wLr as x, zMr as S } from "./app-initial-ad16eaadf81f.js";
import { n as C, t as w } from "./chat-choice-view-ff40e9769623.js";
import { a as T, i as E, r as D } from "./permission-explanation-eb8b87e3721b.js";
function O(e) {
  let n = (0, N.c)(13),
    { pluginId: r, onClose: i, gptName: a, presentation: o } = e,
    s = o === void 0 ? `notice` : o,
    c = t(d),
    l = f(),
    [u, p] = (0, P.useState)(!1);
  if (a != null) {
    let e;
    return (
      n[0] !== a || n[1] !== i || n[2] !== r
        ? ((e = (0, F.jsx)(A, { pluginId: r, gptName: a, onClose: i })),
          (n[0] = a),
          (n[1] = i),
          (n[2] = r),
          (n[3] = e))
        : (e = n[3]),
      e
    );
  }
  let m;
  n[4] !== l || n[5] !== i || n[6] !== r || n[7] !== c
    ? ((m = () => {
        let e = c.get(S),
          t = c.get(y);
        (p(!0),
          c.query
            .fetch(E, r)
            .catch(k)
            .then((n) => {
              c.get(S) === e && c.get(y) === t && (i?.(), T(r, n ?? { type: `plugin` }, l));
            })
            .finally(() => {
              p(!1);
            }));
      }),
      (n[4] = l),
      (n[5] = i),
      (n[6] = r),
      (n[7] = c),
      (n[8] = m))
    : (m = n[8]);
  let h;
  return (
    n[9] !== u || n[10] !== s || n[11] !== m
      ? ((h = (0, F.jsx)(M, { loading: u, presentation: s, onOpen: m })),
        (n[9] = u),
        (n[10] = s),
        (n[11] = m),
        (n[12] = h))
      : (h = n[12]),
    h
  );
}
function k() {
  return null;
}
function A(e) {
  let t = (0, N.c)(16),
    { pluginId: n, gptName: r, onClose: i } = e,
    a = f(),
    { data: o, isPending: s, isFetching: c, isError: l, refetch: u } = _(E, n),
    d = `denied`;
  s || c
    ? (d = `pending`)
    : l
      ? (d = `error`)
      : o?.type === `admin`
        ? (d = `admin`)
        : o != null && (d = `allowed`);
  let p;
  t[0] !== o || t[1] !== a || t[2] !== i || t[3] !== n
    ? ((p = () => {
        o != null && (i?.(), T(n, o, a));
      }),
      (t[0] = o),
      (t[1] = a),
      (t[2] = i),
      (t[3] = n),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] === u ? (m = t[6]) : ((m = () => void u()), (t[5] = u), (t[6] = m));
  let h;
  t[7] !== a || t[8] !== i
    ? ((h = () => {
        (i?.(), a(`/plugins`));
      }),
      (t[7] = a),
      (t[8] = i),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] !== d || t[11] !== r || t[12] !== p || t[13] !== m || t[14] !== h
      ? ((g = (0, F.jsx)(j, { accessState: d, gptName: r, onOpen: p, onRetry: m, onExplore: h })),
        (t[10] = d),
        (t[11] = r),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h),
        (t[15] = g))
      : (g = t[15]),
    g
  );
}
function j(e) {
  let t = (0, N.c)(8),
    { accessState: n, gptName: r, presentation: i, onOpen: a, onRetry: o, onExplore: s } = e,
    c = i === void 0 ? `notice` : i;
  if (r != null) {
    let e = n === `allowed` || n === `admin` ? a : s,
      i;
    return (
      t[0] !== n || t[1] !== r || t[2] !== o || t[3] !== e
        ? ((i = (0, F.jsx)(w, { accessState: n, gptName: r, onRetry: o, onUsePlugin: e })),
          (t[0] = n),
          (t[1] = r),
          (t[2] = o),
          (t[3] = e),
          (t[4] = i))
        : (i = t[4]),
      i
    );
  }
  let l;
  return (
    t[5] !== a || t[6] !== c
      ? ((l = (0, F.jsx)(M, { onOpen: a, presentation: c })), (t[5] = a), (t[6] = c), (t[7] = l))
      : (l = t[7]),
    l
  );
}
function M(e) {
  let t = (0, N.c)(7),
    { onOpen: n, presentation: i, loading: a } = e,
    s = i === void 0 ? `notice` : i,
    c = a !== void 0 && a,
    l = s === `row` ? `outlineGhost` : `primary`,
    u = s === `row` ? `entityRowAction` : `beaconAction`,
    d,
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, F.jsx)(v, {
        id: `chatgptConversations.gpts.migration.openPlugin`,
        defaultMessage: `Open plugin`,
        description: `Button in a migrated GPT notice or migration success dialog that opens the destination plugin's detail page; it does not install or run the plugin`,
      })),
      (f = (0, F.jsx)(r, { asset: o, className: `shrink-0` })),
      (t[0] = d),
      (t[1] = f))
    : ((d = t[0]), (f = t[1]));
  let p;
  return (
    t[2] !== c || t[3] !== n || t[4] !== l || t[5] !== u
      ? ((p = (0, F.jsxs)(m, {
          className: `w-full`,
          color: l,
          loading: c,
          size: u,
          type: `button`,
          onClick: n,
          children: [d, f],
        })),
        (t[2] = c),
        (t[3] = n),
        (t[4] = l),
        (t[5] = u),
        (t[6] = p))
      : (p = t[6]),
    p
  );
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = u()), l(), g(), (P = i()), p(), s(), b(), x(), h(), c(), n(), C(), D(), (F = a()));
  }))();
}
export { M as n, I as r, O as t };
//# sourceMappingURL=migrated-plugin-bd1222c52d99.js.map
