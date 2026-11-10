import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, _Mt as n, gMt as r, vzt as i, xMt as a, zxt as o } from "./app-shared-bbfeca5e5737.js";
import { OX as s, fur as c, kX as l, pur as u } from "./app-initial-5851df3f6cb1.js";
import { n as d, t as f } from "./workspace-team-recipient-suggestions-f88127cfec32.js";
function p(e) {
  let t = (0, m.c)(7),
    { avatar: n, size: i } = e,
    a = (i === void 0 ? `md` : i) === `sm` ? `size-6` : `size-7`,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = r(`flex shrink-0 items-center justify-center rounded-full bg-secondary-soft`, a)),
      (t[0] = a),
      (t[1] = o));
  let c;
  t[2] === n ? (c = t[3]) : ((c = (0, h.jsx)(s, { avatar: n, size: `small` })), (t[2] = n), (t[3] = c));
  let l;
  return (
    t[4] !== o || t[5] !== c
      ? ((l = (0, h.jsx)(`span`, { className: o, children: c })), (t[4] = o), (t[5] = c), (t[6] = l))
      : (l = t[6]),
    l
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = i()), n(), l(), (h = a()));
  }))();
}
function _(e) {
  let t = (0, v.c)(6),
    { groupId: n, size: r } = e,
    { accountId: i } = u(),
    { data: a } = o(d, i ?? ``, { enabled: i != null }) ?? {},
    s;
  t[0] !== n || t[1] !== a
    ? ((s = a?.find((e) => e.id === n)), (t[0] = n), (t[1] = a), (t[2] = s))
    : (s = t[2]);
  let c = s?.avatar,
    l;
  return (
    t[3] !== r || t[4] !== c
      ? ((l = (0, y.jsx)(p, { avatar: c, size: r })), (t[3] = r), (t[4] = c), (t[5] = l))
      : (l = t[5]),
    l
  );
}
var v, y;
function b() {
  return (b = e(() => {
    ((v = i()), t(), f(), c(), g(), (y = a()));
  }))();
}
function x(e, t) {
  return t == null
    ? void 0
    : e.formatMessage(
        {
          id: `shareDialog.workspaceGroupMemberCount`,
          defaultMessage: `{count, plural, one {# member} other {# members}}`,
          description: `Member count shown for a workspace group invite result`,
        },
        { count: t },
      );
}
function S() {
  return (S = e(() => {}))();
}
export { p as a, b as i, S as n, g as o, _ as r, x as t };
//# sourceMappingURL=member-count-5e188d46464b.js.map
