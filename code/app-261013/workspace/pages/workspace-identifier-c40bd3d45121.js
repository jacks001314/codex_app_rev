import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  VDt as r,
  jDt as i,
  vzt as a,
  xMt as o,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import { $Er as c, LMr as l, eDr as u, zOr as d } from "./app-initial-5851df3f6cb1.js";
function f(e, t, n, r) {
  let i = r.filter((e) => e.name === n && e.id !== t).map((e) => e.id);
  if (i.length === 0 || !c(e, `3946177020`).get(`show_creation_date`, !1)) return;
  let a = Math.min(6, t.length);
  for (; a < t.length && i.some((e) => e.slice(-a) === t.slice(-a));) a += 1;
  return t.slice(-a);
}
function p() {
  return (p = e(() => {
    u();
  }))();
}
function m(e) {
  let n = (0, h.c)(13),
    { workspaceId: i, shortId: a, accountId: o, sameNameWorkspaceIds: c } = e,
    u = r(),
    { data: d, isError: f } = s(l, o),
    p;
  n[0] !== o || n[1] !== d?.accounts || n[2] !== u || n[3] !== f
    ? ((p = function (e) {
        let t = o == null || f ? void 0 : d?.accounts[e]?.account,
          n = t?.created_time == null ? NaN : Date.parse(t.created_time);
        return Number.isFinite(n)
          ? u.formatDate(n, { year: `numeric`, month: `short`, day: `numeric` })
          : void 0;
      }),
      (n[0] = o),
      (n[1] = d?.accounts),
      (n[2] = u),
      (n[3] = f),
      (n[4] = p))
    : (p = n[4]);
  let m = p,
    _;
  n[5] !== m || n[6] !== i ? ((_ = m(i)), (n[5] = m), (n[6] = i), (n[7] = _)) : (_ = n[7]);
  let v = _,
    y = !v || c.some((e) => e !== i && m(e) === v),
    b = v ? `date` : `none`,
    x = v ?? ``,
    S = y ? `yes` : `no`,
    C;
  return (
    n[8] !== a || n[9] !== b || n[10] !== x || n[11] !== S
      ? ((C = (0, g.jsx)(t, {
          id: `workspaceSwitcher.creationDateIdentifier`,
          defaultMessage: `{details, select, date {Created {date}{showId, select, yes { · ID {id}} other {}}} other {ID {id}}}`,
          description: `Short secondary label in the account menu and workspace picker, helping users distinguish workspaces with the same name. details is date when a creation date is available, otherwise none. date is a localized creation calendar date including the year. showId is yes when the date is missing or matches another workspace, otherwise no. id is a distinguishing workspace ID suffix, not a name.`,
          values: { details: b, date: x, showId: S, id: a },
        })),
        (n[8] = a),
        (n[9] = b),
        (n[10] = x),
        (n[11] = S),
        (n[12] = C))
      : (C = n[12]),
    C
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = a()), n(), i(), d(), (g = o()));
  }))();
}
export { p as i, _ as n, f as r, m as t };
//# sourceMappingURL=workspace-identifier-c40bd3d45121.js.map
