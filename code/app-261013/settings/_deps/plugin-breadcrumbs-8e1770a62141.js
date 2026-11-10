import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as n,
  Pxt as r,
  Vxt as i,
  _xt as a,
  jDt as o,
  lyt as s,
  oot as c,
  rst as l,
  vzt as u,
  wxt as d,
  xMt as f,
  zxt as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  N0n as m,
  e2 as h,
  f2 as g,
  fOr as _,
  hOr as v,
  t2 as y,
  y2 as b,
} from "./app-initial-5851df3f6cb1.js";
import { n as x, t as S } from "./toolbar-breadcrumb-e1be94112dcb.js";
import { n as C, r as w } from "./category-plugins-query-ca6f8ea98615.js";
function T(e) {
  let t = (0, O.c)(17),
    { categorySlug: r, hostId: a } = e,
    o = i(_),
    s;
  t[0] !== o || t[1] !== r || t[2] !== a
    ? ((s = { accountId: o, categorySlug: r, hostId: a }), (t[0] = o), (t[1] = r), (t[2] = a), (t[3] = s))
    : (s = t[3]);
  let { data: c } = p(w, s);
  if (r === `plugins-created-by-you`) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(n, {
            id: `skills.appsPage.section.createdByYou`,
            defaultMessage: `Created by you`,
            description: `Heading for plugins created by the current user`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (r === `plugins-shared-with-you`) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(n, {
            id: `skills.appsPage.section.sharedWithYou`,
            defaultMessage: `Shared with you`,
            description: `Heading for plugins shared with the current user`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (r.startsWith(`plugins-marketplace-`)) {
    let e;
    return (
      t[6] !== r || t[7] !== a
        ? ((e = (0, A.jsx)(E, { categorySlug: r, hostId: a })), (t[6] = r), (t[7] = a), (t[8] = e))
        : (e = t[8]),
      e
    );
  }
  if (c != null) {
    let e;
    return (
      t[9] === c.title
        ? (e = t[10])
        : ((e = (0, A.jsx)(A.Fragment, { children: c.title })), (t[9] = c.title), (t[10] = e)),
      e
    );
  }
  if (r === `featured`) {
    let e;
    return (
      t[11] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(n, {
            id: `plugins.category.popular`,
            defaultMessage: `Popular`,
            description: `Title of the popular plugins category, whose URL slug is featured`,
          })),
          (t[11] = e))
        : (e = t[11]),
      e
    );
  }
  if (r === `education-and-research`) {
    let e;
    return (
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(n, {
            id: `plugins.category.education`,
            defaultMessage: `Education`,
            description: `Short heading for the Education category in the plugin directory, containing plugins for learning and teaching. Shown when category metadata is unavailable. Scientific Research is a separate category. Keep this heading short.`,
          })),
          (t[12] = e))
        : (e = t[12]),
      e
    );
  }
  let l;
  t[13] === r ? (l = t[14]) : ((l = (0, k.default)(r)), (t[13] = r), (t[14] = l));
  let u;
  return (
    t[15] === l ? (u = t[16]) : ((u = (0, A.jsx)(A.Fragment, { children: l })), (t[15] = l), (t[16] = u)),
    u
  );
}
function E(e) {
  let t = (0, O.c)(7),
    { categorySlug: r, hostId: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { enabled: !1 }), (t[0] = a)) : (a = t[0]);
  let { data: o } = p(y, i, a),
    s;
  t[1] !== r || t[2] !== o
    ? ((s =
        o == null
          ? void 0
          : b(o.plugins).find((e) => {
              let { value: t } = e;
              return r === `plugins-marketplace-${encodeURIComponent(t)}`;
            })),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s))
    : (s = t[3]);
  let c = s;
  if (c == null) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, A.jsx)(n, {
            id: `plugins.category.marketplace`,
            defaultMessage: `Marketplace`,
            description: `Fallback breadcrumb label for a plugin marketplace whose name is not loaded`,
          })),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let l = c.subLabel == null ? c.label : `${c.label} · ${c.subLabel}`,
    u;
  return (
    t[5] === l ? (u = t[6]) : ((u = (0, A.jsx)(A.Fragment, { children: l })), (t[5] = l), (t[6] = u)),
    u
  );
}
function D(e) {
  let t = (0, O.c)(6),
    { categorySlug: n, hostId: r } = e,
    a = i(_),
    o;
  t[0] !== a || t[1] !== n || t[2] !== r
    ? ((o = { accountId: a, categorySlug: n, hostId: r }), (t[0] = a), (t[1] = n), (t[2] = r), (t[3] = o))
    : (o = t[3]);
  let { data: s } = p(w, o),
    c = s?.description,
    l;
  return (
    t[4] === c ? (l = t[5]) : ((l = (0, A.jsx)(A.Fragment, { children: c })), (t[4] = c), (t[5] = l)),
    l
  );
}
var O, k, A;
function j() {
  return (j = e(() => {
    ((O = u()), (k = t(m(), 1)), r(), o(), v(), g(), C(), h(), (A = f()));
  }))();
}
function M(e) {
  let t = (0, N.c)(30),
    { hostId: r, pluginTitle: i } = e,
    { search: a } = d(),
    o;
  t[0] !== i || t[1] !== a
    ? ((o = i != null && new URLSearchParams(a).get(`breadcrumb`) === `settings`),
      (t[0] = i),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let c = o,
    l,
    u,
    f,
    p,
    m,
    h,
    g;
  if (t[3] !== r || t[4] !== c || t[5] !== a) {
    let e = s(a);
    (r !== `local` && e.set(`hostId`, r),
      (u = c ? null : e.get(`category`)),
      (f = u == null ? null : (0, P.jsx)(T, { categorySlug: u, hostId: r })),
      (p = { pathname: `/plugins`, search: e.toString() }),
      e.delete(`category`));
    let i = new URLSearchParams();
    (e.has(`hostId`) && i.set(`hostId`, r), (l = S), (g = !0));
    let o;
    t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, P.jsx)(n, {
          id: `plugins.detail.breadcrumb.root`,
          defaultMessage: `Plugins`,
          description: `Breadcrumb link to the plugins directory`,
        })),
        (t[13] = o))
      : (o = t[13]);
    let d = e.toString();
    (t[14] === d
      ? (m = t[15])
      : ((m = { id: `plugins`, label: o, to: { pathname: `/plugins`, search: d } }),
        (t[14] = d),
        (t[15] = m)),
      (h = c
        ? [
            {
              id: `plugin-settings`,
              label: (0, P.jsx)(n, {
                id: `plugins.detail.breadcrumb.settings`,
                defaultMessage: `Settings`,
                description: `Breadcrumb link to plugin settings from the plugin detail page`,
              }),
              to: { pathname: `/settings/plugins-settings`, search: i.toString() },
            },
          ]
        : []),
      (t[3] = r),
      (t[4] = c),
      (t[5] = a),
      (t[6] = l),
      (t[7] = u),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g));
  } else ((l = t[6]), (u = t[7]), (f = t[8]), (p = t[9]), (m = t[10]), (h = t[11]), (g = t[12]));
  let _;
  t[16] !== u || t[17] !== f || t[18] !== p || t[19] !== i
    ? ((_ = u == null || i == null ? [] : [{ id: `plugin-category`, label: f, to: p }]),
      (t[16] = u),
      (t[17] = f),
      (t[18] = p),
      (t[19] = i),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  t[21] !== m || t[22] !== h || t[23] !== _
    ? ((v = [m, ...h, ..._]), (t[21] = m), (t[22] = h), (t[23] = _), (t[24] = v))
    : (v = t[24]);
  let y = i ?? f,
    b;
  return (
    t[25] !== l || t[26] !== g || t[27] !== v || t[28] !== y
      ? ((b = (0, P.jsx)(l, { textSm: g, ancestors: v, current: y })),
        (t[25] = l),
        (t[26] = g),
        (t[27] = v),
        (t[28] = y),
        (t[29] = b))
      : (b = t[29]),
    b
  );
}
var N, P;
function F() {
  return (F = e(() => {
    ((N = u()), l(), o(), a(), x(), c(), j(), (P = f()));
  }))();
}
export { j as a, T as i, F as n, D as r, M as t };
//# sourceMappingURL=plugin-breadcrumbs-8e1770a62141.js.map
