import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  IDt as i,
  Ixt as a,
  Mz as o,
  N2 as s,
  Nz as c,
  P2 as l,
  Pxt as u,
  _xt as d,
  jDt as f,
  t3 as p,
  vzt as m,
  wot as h,
  xMt as g,
  yzt as _,
  zxt as v,
} from "./app-shared-bbfeca5e5737.js";
import { XMr as y, gOr as b, hOr as x, tNr as S } from "./app-initial-5851df3f6cb1.js";
import { n as C, t as w } from "./chat-choice-view-98d03df437a6.js";
import { a as T, i as E, r as D } from "./permission-explanation-b56de09d0218.js";
function O(e) {
  let t = (0, N.c)(13),
    { pluginId: i, onClose: o, gptName: s, presentation: c } = e,
    l = c === void 0 ? `notice` : c,
    u = a(n),
    d = r(),
    [f, p] = (0, P.useState)(!1);
  if (s != null) {
    let e;
    return (
      t[0] !== s || t[1] !== o || t[2] !== i
        ? ((e = (0, F.jsx)(A, { pluginId: i, gptName: s, onClose: o })),
          (t[0] = s),
          (t[1] = o),
          (t[2] = i),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let m;
  t[4] !== d || t[5] !== o || t[6] !== i || t[7] !== u
    ? ((m = () => {
        let e = u.get(b),
          t = u.get(y);
        (p(!0),
          u.query
            .fetch(E, i)
            .catch(k)
            .then((n) => {
              u.get(b) === e && u.get(y) === t && (o?.(), T(i, n ?? { type: `plugin` }, d));
            })
            .finally(() => {
              p(!1);
            }));
      }),
      (t[4] = d),
      (t[5] = o),
      (t[6] = i),
      (t[7] = u),
      (t[8] = m))
    : (m = t[8]);
  let h;
  return (
    t[9] !== f || t[10] !== l || t[11] !== m
      ? ((h = (0, F.jsx)(M, { loading: f, presentation: l, onOpen: m })),
        (t[9] = f),
        (t[10] = l),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
function k() {
  return null;
}
function A(e) {
  let t = (0, N.c)(16),
    { pluginId: n, gptName: i, onClose: a } = e,
    o = r(),
    { data: s, isPending: c, isFetching: l, isError: u, refetch: d } = v(E, n),
    f = `denied`;
  c || l
    ? (f = `pending`)
    : u
      ? (f = `error`)
      : s?.type === `admin`
        ? (f = `admin`)
        : s != null && (f = `allowed`);
  let p;
  t[0] !== s || t[1] !== o || t[2] !== a || t[3] !== n
    ? ((p = () => {
        s != null && (a?.(), T(n, s, o));
      }),
      (t[0] = s),
      (t[1] = o),
      (t[2] = a),
      (t[3] = n),
      (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] === d ? (m = t[6]) : ((m = () => void d()), (t[5] = d), (t[6] = m));
  let h;
  t[7] !== o || t[8] !== a
    ? ((h = () => {
        (a?.(), o(`/plugins`));
      }),
      (t[7] = o),
      (t[8] = a),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] !== f || t[11] !== i || t[12] !== p || t[13] !== m || t[14] !== h
      ? ((g = (0, F.jsx)(j, { accessState: f, gptName: i, onOpen: p, onRetry: m, onExplore: h })),
        (t[10] = f),
        (t[11] = i),
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
  let n = (0, N.c)(7),
    { onOpen: r, presentation: a, loading: c } = e,
    l = a === void 0 ? `notice` : a,
    u = c !== void 0 && c,
    d = l === `row` ? `outlineGhost` : `primary`,
    f = l === `row` ? `entityRowAction` : `beaconAction`,
    p,
    m;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, F.jsx)(i, {
        id: `chatgptConversations.gpts.migration.openPlugin`,
        defaultMessage: `Open plugin`,
        description: `Button in a migrated GPT notice or migration success dialog that opens the destination plugin's detail page; it does not install or run the plugin`,
      })),
      (m = (0, F.jsx)(o, { asset: s, className: `shrink-0` })),
      (n[0] = p),
      (n[1] = m))
    : ((p = n[0]), (m = n[1]));
  let h;
  return (
    n[2] !== u || n[3] !== r || n[4] !== d || n[5] !== f
      ? ((h = (0, F.jsxs)(t, {
          className: `w-full`,
          color: d,
          loading: u,
          size: f,
          type: `button`,
          onClick: r,
          children: [p, m],
        })),
        (n[2] = u),
        (n[3] = r),
        (n[4] = d),
        (n[5] = f),
        (n[6] = h))
      : (h = n[6]),
    h
  );
}
var N, P, F;
function I() {
  return (I = e(() => {
    ((N = m()), l(), u(), (P = _()), f(), d(), x(), S(), p(), c(), h(), C(), D(), (F = g()));
  }))();
}
export { M as n, I as r, O as t };
//# sourceMappingURL=migrated-plugin-ece31f30dd17.js.map
