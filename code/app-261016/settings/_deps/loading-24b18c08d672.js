import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  LNt as n,
  PBt as r,
  XOt as i,
  ew as a,
  sw as o,
  tkt as s,
  uw as c,
} from "./app-shared-2feb3d4c6fcc.js";
import { F7n as l, L7n as u, QF as d, cA as f, eI as p, sA as m } from "./app-initial-ad16eaadf81f.js";
function h(e) {
  let n = (0, _.c)(14),
    { children: r, kind: i, title: a } = e,
    c;
  n[0] === r
    ? (c = n[1])
    : ((c =
        r ??
        (0, v.jsx)(s, {
          id: `settings.teams.shared.loading`,
          defaultMessage: `Loading shared resources…`,
          description: `Accessible status while a section of a team's shared resources is loading`,
        })),
      (n[0] = r),
      (n[1] = c));
  let u;
  n[2] === c
    ? (u = n[3])
    : ((u = (0, v.jsx)(`span`, { className: `sr-only`, children: c })), (n[2] = c), (n[3] = u));
  let d;
  n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = [`w-2/5`, `w-1/2`]), (n[4] = d)) : (d = n[4]);
  let f;
  n[5] === i
    ? (f = n[6])
    : ((f = (0, v.jsx)(`div`, {
        "aria-hidden": !0,
        children: (0, v.jsx)(t, {
          children: d.map((e) =>
            (0, v.jsx)(
              o,
              {
                icon:
                  i === `tasks`
                    ? void 0
                    : (0, v.jsx)(`div`, {
                        className: `size-5 shrink-0`,
                        children: (0, v.jsx)(l, { size: `fill`, variant: `chatgpt-project` }),
                      }),
                label: (0, v.jsx)(l, { className: e, size: `md`, variant: `chatgpt-project` }),
                controlSizing: `content`,
                control:
                  i === `tasks`
                    ? null
                    : (0, v.jsx)(`div`, {
                        className: `hidden sm:block`,
                        children: (0, v.jsx)(l, {
                          className: `w-24`,
                          size: `sm`,
                          variant: `chatgpt-project`,
                        }),
                      }),
              },
              e,
            ),
          ),
        }),
      })),
      (n[5] = i),
      (n[6] = f));
  let p;
  n[7] !== u || n[8] !== f
    ? ((p = (0, v.jsxs)(`div`, { role: `status`, "aria-busy": `true`, children: [u, f] })),
      (n[7] = u),
      (n[8] = f),
      (n[9] = p))
    : (p = n[9]);
  let h = p,
    g;
  return (
    n[10] !== i || n[11] !== h || n[12] !== a
      ? ((g =
          a == null
            ? h
            : (0, v.jsxs)(m, {
                className: `select-none`,
                children: [
                  (0, v.jsx)(m.Header, {
                    title: a,
                    actions:
                      i === `tasks` ? void 0 : (0, v.jsx)(`div`, { className: `size-8`, "aria-hidden": !0 }),
                  }),
                  (0, v.jsx)(m.Content, { children: h }),
                ],
              })),
        (n[10] = i),
        (n[11] = h),
        (n[12] = a),
        (n[13] = g))
      : (g = n[13]),
    g
  );
}
function g(e) {
  let t = (0, _.c)(22),
    { tasksAvailable: n, spacesAvailable: r, resourceFilter: i } = e,
    a;
  t[0] !== i || t[1] !== r
    ? ((a =
        r && (i === `all` || i === `spaces`)
          ? (0, v.jsx)(h, {
              kind: `spaces`,
              title: (0, v.jsx)(s, {
                id: `teams.spaces.title`,
                defaultMessage: `Spaces`,
                description: `Heading for Spaces shared with a team. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              }),
            })
          : null),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o =
        i === `all` || i === `sites`
          ? (0, v.jsx)(h, {
              kind: `sites`,
              title: (0, v.jsx)(s, {
                id: `settings.teams.shared.sites.title`,
                defaultMessage: `Sites`,
                description: `Heading for websites explicitly shared with a team`,
              }),
            })
          : null),
      (t[3] = i),
      (t[4] = o));
  let c;
  t[5] === i
    ? (c = t[6])
    : ((c =
        i === `all` || i === `scheduled`
          ? (0, v.jsx)(h, {
              kind: `scheduled`,
              title: (0, v.jsx)(s, {
                id: `settings.teams.shared.automations.title`,
                defaultMessage: `Scheduled tasks`,
                description: `Heading for scheduled tasks shared with a team`,
              }),
            })
          : null),
      (t[5] = i),
      (t[6] = c));
  let l;
  t[7] === i
    ? (l = t[8])
    : ((l =
        i === `all` || i === `plugins`
          ? (0, v.jsx)(h, {
              kind: `plugins`,
              title: (0, v.jsx)(s, {
                id: `settings.teams.integrations.title`,
                defaultMessage: `Plugins`,
                description: `Heading for plugins installed or connected for team automations`,
              }),
            })
          : null),
      (t[7] = i),
      (t[8] = l));
  let u;
  t[9] !== i || t[10] !== n ? ((u = null), (t[9] = i), (t[10] = n), (t[11] = u)) : (u = t[11]);
  let f;
  t[12] !== i || t[13] !== n ? ((f = null), (t[12] = i), (t[13] = n), (t[14] = f)) : (f = t[14]);
  let p;
  return (
    t[15] !== a || t[16] !== o || t[17] !== c || t[18] !== l || t[19] !== u || t[20] !== f
      ? ((p = (0, v.jsxs)(d, { embedded: !0, fullWidth: !0, children: [a, o, c, l, u, f] })),
        (t[15] = a),
        (t[16] = o),
        (t[17] = c),
        (t[18] = l),
        (t[19] = u),
        (t[20] = f),
        (t[21] = p))
      : (p = t[21]),
    p
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = r()), i(), u(), p(), f(), c(), a(), (v = n()));
  }))();
}
export { g as n, y as r, h as t };
//# sourceMappingURL=loading-24b18c08d672.js.map
