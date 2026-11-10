import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  PBt as n,
  XOt as r,
  ZSt as i,
  iCt as a,
  nCt as o,
  tkt as s,
} from "./app-shared-2feb3d4c6fcc.js";
import { GNr as c, VNr as l, _Q as u, gQ as d, gur as f, hdn as p } from "./app-initial-ad16eaadf81f.js";
import { n as m, t as h } from "./team-settings-link-3f9668b4b463.js";
import { i as g, n as _ } from "./availability-be242a6de9ac.js";
function v(e) {
  let t = (0, b.c)(27),
    { spaceId: n } = e,
    r = a(f),
    i = o(g, r ?? ``),
    c;
  t[0] === i ? (c = t[1]) : ((c = { enabled: i }), (t[0] = i), (t[1] = c));
  let { data: u, isError: d } = o(l, r ?? ``, c),
    p,
    m,
    h,
    _,
    v,
    S,
    C,
    w;
  if (t[2] !== r || t[3] !== i || t[4] !== d || t[5] !== n || t[6] !== u) {
    w = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = u?.filter(
        (e) => e.workspace_id === r && e.team_space_status === `available` && e.team_space_id === n,
      );
      if (!i || d || !e?.length) {
        w = null;
        break bb0;
      }
      ((C = `flex flex-wrap items-center gap-x-1 gap-y-2 pt-2 text-sm text-secondary select-none`),
        (p = s),
        (_ = `teams.spaces.primaryTeams`),
        (v = `Team Space for {teams}`),
        (S = `Shown under a Space title. teams contains links to the settings of teams that use this as their primary Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`),
        (m = `inline-flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2`),
        (h = e.map(y)));
    }
    ((t[2] = r),
      (t[3] = i),
      (t[4] = d),
      (t[5] = n),
      (t[6] = u),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = _),
      (t[11] = v),
      (t[12] = S),
      (t[13] = C),
      (t[14] = w));
  } else
    ((p = t[7]), (m = t[8]), (h = t[9]), (_ = t[10]), (v = t[11]), (S = t[12]), (C = t[13]), (w = t[14]));
  if (w !== Symbol.for(`react.early_return_sentinel`)) return w;
  let T;
  t[15] !== m || t[16] !== h
    ? ((T = { teams: (0, x.jsx)(`span`, { className: m, children: h }) }),
      (t[15] = m),
      (t[16] = h),
      (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] !== p || t[19] !== _ || t[20] !== v || t[21] !== S || t[22] !== T
    ? ((E = (0, x.jsx)(p, { id: _, defaultMessage: v, description: S, values: T })),
      (t[18] = p),
      (t[19] = _),
      (t[20] = v),
      (t[21] = S),
      (t[22] = T),
      (t[23] = E))
    : (E = t[23]);
  let D;
  return (
    t[24] !== E || t[25] !== C
      ? ((D = (0, x.jsx)(`div`, { className: C, children: E })), (t[24] = E), (t[25] = C), (t[26] = D))
      : (D = t[26]),
    D
  );
}
function y(e) {
  return (0, x.jsxs)(
    h,
    {
      teamId: e.id,
      children: [
        (0, x.jsx)(d, { avatar: e.avatar, size: `small` }),
        (0, x.jsx)(`span`, { className: `truncate`, children: e.name }),
      ],
    },
    e.id,
  );
}
var b, x;
function S() {
  return (S = e(() => {
    ((b = n()), i(), r(), p(), u(), m(), c(), _(), (x = t()));
  }))();
}
export { S as n, v as t };
//# sourceMappingURL=primary-teams-4409de426fe2.js.map
