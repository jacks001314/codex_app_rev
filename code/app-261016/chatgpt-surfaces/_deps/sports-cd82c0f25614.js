import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HFt as n,
  LNt as r,
  MNt as i,
  NNt as a,
  PBt as o,
  VRt as s,
  XOt as c,
  hRt as l,
  kLt as u,
  kRt as d,
  okt as f,
  tkt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import { cc as m, pYn as h, sc as g, uYn as _ } from "./app-initial-ad16eaadf81f.js";
import { a as v, r as y } from "./fallback-1dd4771b7d07.js";
import { n as b, t as x } from "./card-d542d2f559db.js";
function S(e) {
  let t = (0, F.c)(4),
    { reference: n } = e;
  switch (n.type) {
    case `sports_schedule`: {
      let e;
      return (t[0] === n ? (e = t[1]) : ((e = (0, L.jsx)(C, { reference: n })), (t[0] = n), (t[1] = e)), e);
    }
    case `sports_standings`: {
      let e;
      return (t[2] === n ? (e = t[3]) : ((e = (0, L.jsx)(T, { reference: n })), (t[2] = n), (t[3] = e)), e);
    }
    default:
      return null;
  }
}
function C(e) {
  let t = (0, F.c)(18),
    { reference: n } = e,
    r = f(),
    i,
    a,
    o,
    s,
    c;
  if (t[0] !== r || t[1] !== n) {
    c = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = Array.isArray(n.games) ? n.games : [];
      if (e.length === 0) {
        let e;
        (t[7] === n ? (e = t[8]) : ((e = (0, L.jsx)(y, { reference: n })), (t[7] = n), (t[8] = e)), (c = e));
        break bb0;
      }
      ((i = x),
        t[9] === r
          ? (s = t[10])
          : ((s = r.formatMessage({
              id: `chatgpt.contentReferences.sportsSchedule.title`,
              defaultMessage: `Schedule`,
              description: `Title for a sports schedule content reference card`,
            })),
            (t[9] = r),
            (t[10] = s)),
        (a = `flex flex-col gap-2`),
        (o = e.slice(0, 5).map(w)));
    }
    ((t[0] = r), (t[1] = n), (t[2] = i), (t[3] = a), (t[4] = o), (t[5] = s), (t[6] = c));
  } else ((i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]), (c = t[6]));
  if (c !== Symbol.for(`react.early_return_sentinel`)) return c;
  let l;
  t[11] !== a || t[12] !== o
    ? ((l = (0, L.jsx)(`div`, { className: a, children: o })), (t[11] = a), (t[12] = o), (t[13] = l))
    : (l = t[13]);
  let u;
  return (
    t[14] !== i || t[15] !== s || t[16] !== l
      ? ((u = (0, L.jsx)(i, { title: s, children: l })), (t[14] = i), (t[15] = s), (t[16] = l), (t[17] = u))
      : (u = t[17]),
    u
  );
}
function w(e, t) {
  return (0, L.jsxs)(
    `div`,
    {
      className: `rounded-md border border-subtle p-2`,
      children: [
        (0, L.jsx)(`div`, { className: `font-medium`, children: N(e) }),
        _(h(e)?.details) == null
          ? null
          : (0, L.jsx)(`div`, { className: `text-sm text-secondary`, children: _(h(e)?.details) }),
      ],
    },
    String(t),
  );
}
function T(e) {
  let t = (0, F.c)(6),
    { reference: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = U.safeParse(n)), (t[0] = n), (t[1] = r));
  let i = r;
  if (!i.success || i.data.conferences.length === 0) {
    let e;
    return (t[2] === n ? (e = t[3]) : ((e = (0, L.jsx)(y, { reference: n })), (t[2] = n), (t[3] = e)), e);
  }
  let a;
  return (
    t[4] === i.data
      ? (a = t[5])
      : ((a = (0, L.jsx)(E, { standingsRef: i.data })), (t[4] = i.data), (t[5] = a)),
    a
  );
}
function E(e) {
  let t = (0, F.c)(15),
    { standingsRef: n } = e,
    [r, a] = (0, I.useState)(0),
    o = n.conferences[r] ?? n.conferences[0];
  if (o == null) return null;
  let s;
  t[0] === n.league
    ? (s = t[1])
    : ((s = n.league?.id != null && R.includes(n.league.id)), (t[0] = n.league), (t[1] = s));
  let c = s,
    l;
  t[2] !== r || t[3] !== n.conferences
    ? ((l =
        n.conferences.length > 1
          ? (0, L.jsx)(`div`, {
              className: `flex gap-4`,
              children: n.conferences.map((e, t) =>
                (0, L.jsx)(
                  `button`,
                  {
                    className: i(
                      r === t ? `text-default` : `text-tertiary`,
                      `cursor-interaction text-sm font-semibold`,
                    ),
                    type: `button`,
                    onClick: () => a(t),
                    children: e.name,
                  },
                  e.name ?? String(t),
                ),
              ),
            })
          : null),
      (t[2] = r),
      (t[3] = n.conferences),
      (t[4] = l))
    : (l = t[4]);
  let u;
  if (t[5] !== o.divisions || t[6] !== c) {
    let e;
    (t[8] === c
      ? (e = t[9])
      : ((e = (e, t) =>
          e.name == null
            ? (0, L.jsx)(D, { division: e, useAlias: c }, String(t))
            : (0, L.jsx)(
                `div`,
                { className: `mt-3`, children: (0, L.jsx)(D, { division: e, teamsColumnHeader: e.name }) },
                e.name,
              )),
        (t[8] = c),
        (t[9] = e)),
      (u = o.divisions.map(e)),
      (t[5] = o.divisions),
      (t[6] = c),
      (t[7] = u));
  } else u = t[7];
  let d;
  t[10] === u
    ? (d = t[11])
    : ((d = (0, L.jsx)(`div`, { className: `mt-3`, children: u })), (t[10] = u), (t[11] = d));
  let f;
  return (
    t[12] !== l || t[13] !== d
      ? ((f = (0, L.jsxs)(`div`, { "data-testid": `sports-standings-widget`, children: [l, d] })),
        (t[12] = l),
        (t[13] = d),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function D(e) {
  let t = (0, F.c)(26),
    { division: n, teamsColumnHeader: r, useAlias: i } = e,
    a,
    o,
    s,
    c;
  if (t[0] !== n.headers || t[1] !== n.teams || t[2] !== r || t[3] !== i) {
    let e = n.headers.map(k);
    ((c = `not-prose overflow-x-auto`), (o = `w-full border-collapse text-sm`));
    let l;
    t[8] === r
      ? (l = t[9])
      : ((l = r ?? (0, L.jsx)(p, { defaultMessage: `Team`, description: `Title for team` })),
        (t[8] = r),
        (t[9] = l));
    let u;
    t[10] === l
      ? (u = t[11])
      : ((u = (0, L.jsx)(`th`, {
          className: `border-b border-default py-2 ps-0 pe-4 text-start text-sm font-normal text-default`,
          scope: `col`,
          children: l,
        })),
        (t[10] = l),
        (t[11] = u));
    let d;
    (t[12] === n.headers ? (d = t[13]) : ((d = n.headers.map(O)), (t[12] = n.headers), (t[13] = d)),
      t[14] !== u || t[15] !== d
        ? ((s = (0, L.jsx)(`thead`, { children: (0, L.jsxs)(`tr`, { children: [u, d] }) })),
          (t[14] = u),
          (t[15] = d),
          (t[16] = s))
        : (s = t[16]),
      (a = n.teams.map((t, n) => {
        let { data: r, team: a } = t;
        return (0, L.jsxs)(
          `tr`,
          {
            children: [
              (0, L.jsx)(`td`, {
                className: `w-full border-0 py-0 ps-0 pe-4`,
                children: (0, L.jsxs)(`div`, {
                  className: `flex items-center`,
                  children: [
                    (0, L.jsx)(`div`, {
                      className: `me-2 w-4 whitespace-nowrap text-tertiary tabular-nums`,
                      children: n + 1,
                    }),
                    (0, L.jsxs)(`div`, {
                      className: `flex items-center justify-start gap-2`,
                      children: [(0, L.jsx)(A, { team: a }), (0, L.jsx)(j, { team: a, useAlias: !!i })],
                    }),
                  ],
                }),
              }),
              e.map((e) =>
                (0, L.jsx)(
                  `td`,
                  {
                    className: `min-w-11 border-0 px-0 py-0 text-center whitespace-nowrap tabular-nums`,
                    children: (0, L.jsx)(M, { data: r.find((t) => t.key === e) }),
                  },
                  e,
                ),
              ),
            ],
          },
          a.name,
        );
      })),
      (t[0] = n.headers),
      (t[1] = n.teams),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c));
  } else ((a = t[4]), (o = t[5]), (s = t[6]), (c = t[7]));
  let l;
  t[17] === a ? (l = t[18]) : ((l = (0, L.jsx)(`tbody`, { children: a })), (t[17] = a), (t[18] = l));
  let u;
  t[19] !== o || t[20] !== s || t[21] !== l
    ? ((u = (0, L.jsxs)(`table`, { className: o, children: [s, l] })),
      (t[19] = o),
      (t[20] = s),
      (t[21] = l),
      (t[22] = u))
    : (u = t[22]);
  let d;
  return (
    t[23] !== c || t[24] !== u
      ? ((d = (0, L.jsx)(`div`, { className: c, children: u })), (t[23] = c), (t[24] = u), (t[25] = d))
      : (d = t[25]),
    d
  );
}
function O(e) {
  return (0, L.jsx)(
    `th`,
    {
      className: `min-w-11 border-b border-default px-0 py-2 text-center text-sm font-normal text-secondary`,
      scope: `col`,
      children: (0, L.jsx)(M, { data: e }),
    },
    e.key,
  );
}
function k(e) {
  return e.key;
}
function A(e) {
  let t = (0, F.c)(4),
    { team: n } = e,
    r = m();
  if (n.logo == null || r?.shouldBlockExternalEgress === !0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, L.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `size-6 shrink-0 rounded-full bg-surface-secondary/85`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  return (
    t[1] !== n.logo || t[2] !== n.name
      ? ((i = (0, L.jsx)(`img`, {
          alt: n.name,
          className: `m-0 size-6 shrink-0 object-contain`,
          "data-markdown-copy": `exclude`,
          src: n.logo,
        })),
        (t[1] = n.logo),
        (t[2] = n.name),
        (t[3] = i))
      : (i = t[3]),
    i
  );
}
function j(e) {
  let t = (0, F.c)(9),
    { team: n, useAlias: r } = e;
  if (!r || n.alias == null) {
    let e;
    return (
      t[0] === n.name
        ? (e = t[1])
        : ((e = (0, L.jsx)(`span`, { className: `text-base whitespace-nowrap`, children: n.name })),
          (t[0] = n.name),
          (t[1] = e)),
      e
    );
  }
  let i;
  t[2] === n.name
    ? (i = t[3])
    : ((i = (0, L.jsx)(`span`, {
        className: `hidden text-base whitespace-nowrap sm:inline`,
        children: n.name,
      })),
      (t[2] = n.name),
      (t[3] = i));
  let a;
  t[4] === n.alias
    ? (a = t[5])
    : ((a = (0, L.jsx)(`span`, {
        className: `text-base whitespace-nowrap sm:hidden`,
        "data-markdown-copy": `exclude`,
        children: n.alias,
      })),
      (t[4] = n.alias),
      (t[5] = a));
  let o;
  return (
    t[6] !== i || t[7] !== a
      ? ((o = (0, L.jsxs)(L.Fragment, { children: [i, a] })), (t[6] = i), (t[7] = a), (t[8] = o))
      : (o = t[8]),
    o
  );
}
function M(e) {
  let t = (0, F.c)(2),
    { data: n } = e;
  if (n == null) return null;
  let r = n.type === `text` ? n.text : n.alt,
    i;
  return (
    t[0] === r
      ? (i = t[1])
      : ((i = r == null ? null : (0, L.jsx)(L.Fragment, { children: r })), (t[0] = r), (t[1] = i)),
    i
  );
}
function N(e) {
  let t = h(e),
    n = P(h(t?.first_team_info)),
    r = P(h(t?.second_team_info));
  return n == null || r == null ? (_(t?.date) ?? ``) : `${n} / ${r}`;
}
function P(e) {
  let t = h(e?.team);
  return _(t?.name) ?? _(t?.alias);
}
var F, I, L, R, z, B, V, H, U;
function W() {
  return (W = e(() => {
    ((F = o()),
      a(),
      (I = t()),
      c(),
      n(),
      g(),
      b(),
      v(),
      (L = r()),
      (R = [`ipl`]),
      (z = d({
        alt: s().trim().min(1).nullable().optional(),
        key: s().trim().min(1),
        text: s().trim().min(1).nullable().optional(),
        type: s().trim().min(1).nullable().optional(),
      }).loose()),
      (B = d({
        alias: s().trim().min(1).nullable().optional(),
        logo: s().trim().min(1).nullable().optional(),
        name: s().trim().min(1),
      }).loose()),
      (V = d({ data: u(z), team: B }).loose()),
      (H = d({ headers: u(z), name: s().trim().min(1).nullable().optional(), teams: u(V) }).loose()),
      (U = d({
        conferences: u(d({ divisions: u(H), name: s().trim().min(1).nullable().optional() }).loose()),
        league: d({ id: s().trim().min(1).nullable().optional() })
          .loose()
          .optional(),
        type: l(`sports_standings`),
      }).loose()));
  }))();
}
W();
export { S as ChatGptSportsContentReference };
//# sourceMappingURL=sports-cd82c0f25614.js.map
