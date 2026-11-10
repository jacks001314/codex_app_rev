import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Pxt as n,
  Vxt as r,
  jDt as i,
  vzt as a,
  xMt as o,
  zxt as s,
} from "./app-shared-bbfeca5e5737.js";
import { Dor as c, OX as l, _kr as u, kX as d, xkr as f, xsn as p } from "./app-initial-5851df3f6cb1.js";
import { n as m, t as h } from "./team-settings-link-f7f3b8c7933c.js";
import { i as g, n as _ } from "./availability-f30030db29c3.js";
function v(e) {
  let n = (0, b.c)(27),
    { spaceId: i } = e,
    a = r(c),
    o = s(g, a ?? ``),
    l;
  n[0] === o ? (l = n[1]) : ((l = { enabled: o }), (n[0] = o), (n[1] = l));
  let { data: d, isError: f } = s(u, a ?? ``, l),
    p,
    m,
    h,
    _,
    v,
    S,
    C,
    w;
  if (n[2] !== a || n[3] !== o || n[4] !== f || n[5] !== i || n[6] !== d) {
    w = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = d?.filter(
        (e) => e.workspace_id === a && e.team_space_status === `available` && e.team_space_id === i,
      );
      if (!o || f || !e?.length) {
        w = null;
        break bb0;
      }
      ((C = `flex flex-wrap items-center gap-x-1 gap-y-2 pt-2 text-sm text-secondary select-none`),
        (p = t),
        (_ = `teams.spaces.primaryTeams`),
        (v = `Team Space for {teams}`),
        (S = `Shown under a Space title. teams contains links to the settings of teams that use this as their primary Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`),
        (m = `inline-flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2`),
        (h = e.map(y)));
    }
    ((n[2] = a),
      (n[3] = o),
      (n[4] = f),
      (n[5] = i),
      (n[6] = d),
      (n[7] = p),
      (n[8] = m),
      (n[9] = h),
      (n[10] = _),
      (n[11] = v),
      (n[12] = S),
      (n[13] = C),
      (n[14] = w));
  } else
    ((p = n[7]), (m = n[8]), (h = n[9]), (_ = n[10]), (v = n[11]), (S = n[12]), (C = n[13]), (w = n[14]));
  if (w !== Symbol.for(`react.early_return_sentinel`)) return w;
  let T;
  n[15] !== m || n[16] !== h
    ? ((T = { teams: (0, x.jsx)(`span`, { className: m, children: h }) }),
      (n[15] = m),
      (n[16] = h),
      (n[17] = T))
    : (T = n[17]);
  let E;
  n[18] !== p || n[19] !== _ || n[20] !== v || n[21] !== S || n[22] !== T
    ? ((E = (0, x.jsx)(p, { id: _, defaultMessage: v, description: S, values: T })),
      (n[18] = p),
      (n[19] = _),
      (n[20] = v),
      (n[21] = S),
      (n[22] = T),
      (n[23] = E))
    : (E = n[23]);
  let D;
  return (
    n[24] !== E || n[25] !== C
      ? ((D = (0, x.jsx)(`div`, { className: C, children: E })), (n[24] = E), (n[25] = C), (n[26] = D))
      : (D = n[26]),
    D
  );
}
function y(e) {
  return (0, x.jsxs)(
    h,
    {
      teamId: e.id,
      children: [
        (0, x.jsx)(l, { avatar: e.avatar, size: `small` }),
        (0, x.jsx)(`span`, { className: `truncate`, children: e.name }),
      ],
    },
    e.id,
  );
}
var b, x;
function S() {
  return (S = e(() => {
    ((b = a()), n(), i(), p(), d(), m(), f(), _(), (x = o()));
  }))();
}
export { S as n, v as t };
//# sourceMappingURL=primary-teams-3facbefd3ebb.js.map
