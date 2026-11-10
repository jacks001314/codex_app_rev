import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  JC as n,
  iw as r,
  jDt as i,
  qC as a,
  tw as o,
  vzt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import { Ek as l, Q3n as u, Tk as d, _F as f, e6n as p, hF as m } from "./app-initial-5851df3f6cb1.js";
function h(e) {
  let n = (0, _.c)(14),
    { children: r, kind: i, title: s } = e,
    c;
  n[0] === r
    ? (c = n[1])
    : ((c =
        r ??
        (0, v.jsx)(t, {
          id: `settings.teams.shared.loading`,
          defaultMessage: `Loading shared resources…`,
          description: `Accessible status while a section of a team's shared resources is loading`,
        })),
      (n[0] = r),
      (n[1] = c));
  let l;
  n[2] === c
    ? (l = n[3])
    : ((l = (0, v.jsx)(`span`, { className: `sr-only`, children: c })), (n[2] = c), (n[3] = l));
  let f;
  n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = [`w-2/5`, `w-1/2`]), (n[4] = f)) : (f = n[4]);
  let p;
  n[5] === i
    ? (p = n[6])
    : ((p = (0, v.jsx)(`div`, {
        "aria-hidden": !0,
        children: (0, v.jsx)(a, {
          children: f.map((e) =>
            (0, v.jsx)(
              o,
              {
                icon:
                  i === `tasks`
                    ? void 0
                    : (0, v.jsx)(`div`, {
                        className: `size-5 shrink-0`,
                        children: (0, v.jsx)(u, { size: `fill`, variant: `chatgpt-project` }),
                      }),
                label: (0, v.jsx)(u, { className: e, size: `md`, variant: `chatgpt-project` }),
                controlSizing: `content`,
                control:
                  i === `tasks`
                    ? null
                    : (0, v.jsx)(`div`, {
                        className: `hidden sm:block`,
                        children: (0, v.jsx)(u, {
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
      (n[6] = p));
  let m;
  n[7] !== l || n[8] !== p
    ? ((m = (0, v.jsxs)(`div`, { role: `status`, "aria-busy": `true`, children: [l, p] })),
      (n[7] = l),
      (n[8] = p),
      (n[9] = m))
    : (m = n[9]);
  let h = m,
    g;
  return (
    n[10] !== i || n[11] !== h || n[12] !== s
      ? ((g =
          s == null
            ? h
            : (0, v.jsxs)(d, {
                className: `select-none`,
                children: [
                  (0, v.jsx)(d.Header, {
                    title: s,
                    actions:
                      i === `tasks` ? void 0 : (0, v.jsx)(`div`, { className: `size-8`, "aria-hidden": !0 }),
                  }),
                  (0, v.jsx)(d.Content, { children: h }),
                ],
              })),
        (n[10] = i),
        (n[11] = h),
        (n[12] = s),
        (n[13] = g))
      : (g = n[13]),
    g
  );
}
function g(e) {
  let n = (0, _.c)(22),
    { tasksAvailable: r, spacesAvailable: i, resourceFilter: a } = e,
    o;
  n[0] !== a || n[1] !== i
    ? ((o =
        i && (a === `all` || a === `spaces`)
          ? (0, v.jsx)(h, {
              kind: `spaces`,
              title: (0, v.jsx)(t, {
                id: `teams.spaces.title`,
                defaultMessage: `Spaces`,
                description: `Heading for Spaces shared with a team. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              }),
            })
          : null),
      (n[0] = a),
      (n[1] = i),
      (n[2] = o))
    : (o = n[2]);
  let s;
  n[3] === a
    ? (s = n[4])
    : ((s =
        a === `all` || a === `sites`
          ? (0, v.jsx)(h, {
              kind: `sites`,
              title: (0, v.jsx)(t, {
                id: `settings.teams.shared.sites.title`,
                defaultMessage: `Sites`,
                description: `Heading for websites explicitly shared with a team`,
              }),
            })
          : null),
      (n[3] = a),
      (n[4] = s));
  let c;
  n[5] === a
    ? (c = n[6])
    : ((c =
        a === `all` || a === `scheduled`
          ? (0, v.jsx)(h, {
              kind: `scheduled`,
              title: (0, v.jsx)(t, {
                id: `settings.teams.shared.automations.title`,
                defaultMessage: `Scheduled tasks`,
                description: `Heading for scheduled tasks shared with a team`,
              }),
            })
          : null),
      (n[5] = a),
      (n[6] = c));
  let l;
  n[7] === a
    ? (l = n[8])
    : ((l =
        a === `all` || a === `plugins`
          ? (0, v.jsx)(h, {
              kind: `plugins`,
              title: (0, v.jsx)(t, {
                id: `settings.teams.integrations.title`,
                defaultMessage: `Plugins`,
                description: `Heading for plugins installed or connected for team automations`,
              }),
            })
          : null),
      (n[7] = a),
      (n[8] = l));
  let u;
  n[9] !== a || n[10] !== r ? ((u = null), (n[9] = a), (n[10] = r), (n[11] = u)) : (u = n[11]);
  let d;
  n[12] !== a || n[13] !== r ? ((d = null), (n[12] = a), (n[13] = r), (n[14] = d)) : (d = n[14]);
  let f;
  return (
    n[15] !== o || n[16] !== s || n[17] !== c || n[18] !== l || n[19] !== u || n[20] !== d
      ? ((f = (0, v.jsxs)(m, { embedded: !0, fullWidth: !0, children: [o, s, c, l, u, d] })),
        (n[15] = o),
        (n[16] = s),
        (n[17] = c),
        (n[18] = l),
        (n[19] = u),
        (n[20] = d),
        (n[21] = f))
      : (f = n[21]),
    f
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = s()), i(), p(), f(), l(), r(), n(), (v = c()));
  }))();
}
export { g as n, y as r, h as t };
//# sourceMappingURL=loading-654783f1d369.js.map
