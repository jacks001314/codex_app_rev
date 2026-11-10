import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EE as t,
  Ez as n,
  N5t as r,
  O5t as i,
  TE as a,
  Tz as o,
  Wrn as s,
  Yrn as c,
  _dn as l,
  cMt as u,
  ein as d,
  mcn as f,
  mr as p,
  ncn as m,
  pr as h,
  rcn as g,
  sMt as _,
} from "./app-shared-7552fc8d5d82.js";
function v(e) {
  let t = (0, y.c)(5),
    { size: n } = e,
    r = n === `response` ? `size-5` : `size-6`,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = m(
        `flex shrink-0 items-center justify-center rounded-full bg-purple text-avatar-foreground`,
        r,
      )),
      (t[0] = r),
      (t[1] = i));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, b.jsx)(a, { asset: h })), (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] === i
      ? (s = t[4])
      : ((s = (0, b.jsx)(`span`, { className: i, children: o })), (t[3] = i), (t[4] = s)),
    s
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = l()), p(), g(), t(), (b = f()));
  }))();
}
function S(e, t, n, r) {
  let i = r.filter((e) => e.name === n && e.id !== t).map((e) => e.id);
  if (i.length === 0 || !_(e, `3946177020`).get(`show_creation_date`, !1)) return;
  let a = Math.min(6, t.length);
  for (; a < t.length && i.some((e) => e.slice(-a) === t.slice(-a));) a += 1;
  return t.slice(-a);
}
function C() {
  return (C = e(() => {
    u();
  }))();
}
function w(e) {
  let t = (0, T.c)(13),
    { workspaceId: n, shortId: i, accountId: a, sameNameWorkspaceIds: s } = e,
    l = d(),
    { data: u, isError: f } = r(o, a),
    p;
  t[0] !== a || t[1] !== u?.accounts || t[2] !== l || t[3] !== f
    ? ((p = function (e) {
        let t = a == null || f ? void 0 : u?.accounts[e]?.account,
          n = t?.created_time == null ? NaN : Date.parse(t.created_time);
        return Number.isFinite(n)
          ? l.formatDate(n, { year: `numeric`, month: `short`, day: `numeric` })
          : void 0;
      }),
      (t[0] = a),
      (t[1] = u?.accounts),
      (t[2] = l),
      (t[3] = f),
      (t[4] = p))
    : (p = t[4]);
  let m = p,
    h;
  t[5] !== m || t[6] !== n ? ((h = m(n)), (t[5] = m), (t[6] = n), (t[7] = h)) : (h = t[7]);
  let g = h,
    _ = !g || s.some((e) => e !== n && m(e) === g),
    v = g ? `date` : `none`,
    y = g ?? ``,
    b = _ ? `yes` : `no`,
    x;
  return (
    t[8] !== i || t[9] !== v || t[10] !== y || t[11] !== b
      ? ((x = (0, E.jsx)(c, {
          id: `workspaceSwitcher.creationDateIdentifier`,
          defaultMessage: `{details, select, date {Created {date}{showId, select, yes { · ID {id}} other {}}} other {ID {id}}}`,
          description: `Short secondary label in the account menu and workspace picker, helping users distinguish workspaces with the same name. details is date when a creation date is available, otherwise none. date is a localized creation calendar date including the year. showId is yes when the date is missing or matches another workspace, otherwise no. id is a distinguishing workspace ID suffix, not a name.`,
          values: { details: v, date: y, showId: b, id: i },
        })),
        (t[8] = i),
        (t[9] = v),
        (t[10] = y),
        (t[11] = b),
        (t[12] = x))
      : (x = t[12]),
    x
  );
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = l()), i(), s(), n(), (E = f()));
  }))();
}
export { v as a, C as i, D as n, x as o, S as r, w as t };
//# sourceMappingURL=workspace-identifier-d779dfef91b3.js.map
