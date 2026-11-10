import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  DB as t,
  LNt as n,
  OB as r,
  PBt as i,
  XOt as a,
  Y3 as o,
  YOt as s,
  Z3 as c,
  ZSt as l,
  b2 as u,
  ck as d,
  iCt as ee,
  l2 as f,
  nCt as p,
  okt as m,
  rk as h,
  sw as te,
  tk as g,
  tkt as _,
  u2 as v,
  uw as y,
  y2 as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  GNr as x,
  _Q as ne,
  cPr as re,
  gQ as S,
  lBr as C,
  lPr as ie,
  uBr as ae,
  wLr as w,
  zRr as oe,
} from "./app-initial-ad16eaadf81f.js";
function T(e) {
  let n = (0, D.c)(69),
    { includePersonal: r, variant: i, open: a, onOpenChange: s, selection: c, onSelect: l } = e,
    u = r === void 0 || r,
    d = i === void 0 ? `nested` : i,
    v = m(),
    y = ee(oe),
    x = p(ae, `881731870`),
    ne = p(re, y ?? ``),
    C;
  n[0] === x ? (C = n[1]) : ((C = { enabled: x }), (n[0] = x), (n[1] = C));
  let { data: w, error: T, refetch: E } = p(ie, y ?? ``, C);
  if (y == null || !ne || !x) return null;
  let A = T == null ? w : void 0,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B;
  if (n[2] !== y || n[3] !== u || n[4] !== v || n[5] !== s || n[6] !== a || n[7] !== c || n[8] !== A) {
    P = c?.accountId === y ? A?.find((e) => e.id === c.teamId) : void 0;
    let e = `unavailable`;
    if (
      (c ?? (e = u ? `personal` : `choose`),
      P != null && (e = `team`),
      (N = P?.name ?? (0, O.jsx)(_, { ...k.unavailable })),
      c == null)
    ) {
      let e;
      (n[19] === u
        ? (e = n[20])
        : ((e = u ? (0, O.jsx)(_, { ...k.me }) : (0, O.jsx)(_, { ...k.chooseTeam })),
          (n[19] = u),
          (n[20] = e)),
        (N = e));
    }
    ((M = g),
      (L = `end`),
      (R = `menu`),
      (z = a),
      (B = s),
      (j = o),
      (F = `w-full text-start`),
      (I = v.formatMessage(
        {
          id: `settings.teams.automation.selectedAriaLabel`,
          defaultMessage: `Run as: {selection, select, personal {Me} team {{teamName}} choose {Choose team} other {Unavailable team}}`,
          description: `Accessible label identifying the current personal or team owner selected for a new cloud scheduled task`,
        },
        { selection: e, teamName: P?.name ?? `` },
      )),
      (n[2] = y),
      (n[3] = u),
      (n[4] = v),
      (n[5] = s),
      (n[6] = a),
      (n[7] = c),
      (n[8] = A),
      (n[9] = j),
      (n[10] = M),
      (n[11] = N),
      (n[12] = P),
      (n[13] = F),
      (n[14] = I),
      (n[15] = L),
      (n[16] = R),
      (n[17] = z),
      (n[18] = B));
  } else
    ((j = n[9]),
      (M = n[10]),
      (N = n[11]),
      (P = n[12]),
      (F = n[13]),
      (I = n[14]),
      (L = n[15]),
      (R = n[16]),
      (z = n[17]),
      (B = n[18]));
  let V;
  n[21] === N
    ? (V = n[22])
    : ((V = (0, O.jsx)(`span`, { className: `truncate text-start text-tertiary`, children: N })),
      (n[21] = N),
      (n[22] = V));
  let H;
  n[23] === P
    ? (H = n[24])
    : ((H = P == null ? null : (0, O.jsx)(S, { avatar: P.avatar, size: `small` })), (n[23] = P), (n[24] = H));
  let U;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, O.jsx)(t, { className: `text-tertiary`, asset: f })), (n[25] = U))
    : (U = n[25]);
  let W;
  n[26] !== V || n[27] !== H
    ? ((W = (0, O.jsxs)(`span`, {
        className: `flex max-w-full min-w-0 items-center gap-1.5`,
        children: [V, H, U],
      })),
      (n[26] = V),
      (n[27] = H),
      (n[28] = W))
    : (W = n[28]);
  let G;
  n[29] === d
    ? (G = n[30])
    : ((G =
        d === `form`
          ? (0, O.jsx)(_, {
              id: `automations.configuration.team`,
              defaultMessage: `Team`,
              description: `Label for the team running the scheduled task`,
            })
          : (0, O.jsx)(_, {
              id: `settings.teams.automation.teamIdentityLabel`,
              defaultMessage: `Run as`,
              description: `Label for choosing whose identity runs a new cloud scheduled task: the current user or a workspace team`,
            })),
      (n[29] = d),
      (n[30] = G));
  let K;
  n[31] !== W || n[32] !== G
    ? ((K = (0, O.jsx)(te, { className: `w-full select-none`, control: W, label: G, variant: `nested` })),
      (n[31] = W),
      (n[32] = G),
      (n[33] = K))
    : (K = n[33]);
  let q;
  n[34] !== j || n[35] !== K || n[36] !== F || n[37] !== I
    ? ((q = (0, O.jsx)(j, {
        className: F,
        "aria-label": I,
        size: `inline`,
        color: `ghostActive`,
        children: K,
      })),
      (n[34] = j),
      (n[35] = K),
      (n[36] = F),
      (n[37] = I),
      (n[38] = q))
    : (q = n[38]);
  let J;
  n[39] !== u || n[40] !== l || n[41] !== c
    ? ((J = u
        ? (0, O.jsx)(h.Item, {
            rightIconAsset: c == null ? b : void 0,
            onSelect: () => l(null),
            children: (0, O.jsx)(_, { ...k.personal }),
          })
        : null),
      (n[39] = u),
      (n[40] = l),
      (n[41] = c),
      (n[42] = J))
    : (J = n[42]);
  let Y;
  n[43] !== y || n[44] !== l || n[45] !== P?.id || n[46] !== A
    ? ((Y = A?.map((e) =>
        (0, O.jsx)(
          h.Item,
          {
            leftIcon: (0, O.jsx)(S, { avatar: e.avatar, size: `small` }),
            rightIconAsset: P?.id === e.id ? b : void 0,
            onSelect: () => l({ accountId: y, teamId: e.id }),
            children: e.name,
          },
          e.id,
        ),
      )),
      (n[43] = y),
      (n[44] = l),
      (n[45] = P?.id),
      (n[46] = A),
      (n[47] = Y))
    : (Y = n[47]);
  let X;
  n[48] !== T || n[49] !== E
    ? ((X =
        T == null
          ? null
          : (0, O.jsx)(h.Item, {
              onSelect: () => void E(),
              children: (0, O.jsx)(_, {
                id: `settings.teams.automation.retry`,
                defaultMessage: `Unable to load teams—retry`,
                description: `Menu action that retries loading the teams available for a new cloud scheduled task`,
              }),
            })),
      (n[48] = T),
      (n[49] = E),
      (n[50] = X))
    : (X = n[50]);
  let Z;
  n[51] !== T || n[52] !== w
    ? ((Z =
        T == null && w == null
          ? (0, O.jsx)(h.Item, {
              disabled: !0,
              children: (0, O.jsx)(_, {
                id: `settings.teams.automation.loading`,
                defaultMessage: `Loading teams…`,
                description: `Menu status while loading teams for a new cloud scheduled task`,
              }),
            })
          : null),
      (n[51] = T),
      (n[52] = w),
      (n[53] = Z))
    : (Z = n[53]);
  let Q;
  n[54] !== T || n[55] !== w?.length
    ? ((Q =
        w?.length === 0 && T == null
          ? (0, O.jsx)(h.Item, {
              disabled: !0,
              children: (0, O.jsx)(_, {
                id: `settings.teams.automation.empty`,
                defaultMessage: `No teams available`,
                description: `Menu status when the current workspace has no teams available for a new cloud scheduled task`,
              }),
            })
          : null),
      (n[54] = T),
      (n[55] = w?.length),
      (n[56] = Q))
    : (Q = n[56]);
  let $;
  return (
    n[57] !== M ||
    n[58] !== q ||
    n[59] !== J ||
    n[60] !== Y ||
    n[61] !== X ||
    n[62] !== Z ||
    n[63] !== Q ||
    n[64] !== L ||
    n[65] !== R ||
    n[66] !== z ||
    n[67] !== B
      ? (($ = (0, O.jsxs)(M, {
          align: L,
          contentWidth: R,
          open: z,
          onOpenChange: B,
          triggerButton: q,
          children: [J, Y, X, Z, Q],
        })),
        (n[57] = M),
        (n[58] = q),
        (n[59] = J),
        (n[60] = Y),
        (n[61] = X),
        (n[62] = Z),
        (n[63] = Q),
        (n[64] = L),
        (n[65] = R),
        (n[66] = z),
        (n[67] = B),
        (n[68] = $))
      : ($ = n[68]),
    $
  );
}
function E(e) {
  let t = (0, D.c)(24),
    { teamId: n, variant: r } = e,
    i = r === void 0 ? `nested` : r,
    a = ee(oe),
    o = p(ae, `881731870`),
    s = p(re, a ?? ``),
    c = o && s,
    l;
  t[0] === c ? (l = t[1]) : ((l = { enabled: c }), (t[0] = c), (t[1] = l));
  let { data: u, error: d } = p(ie, a ?? ``, l),
    f;
  t[2] !== a || t[3] !== d || t[4] !== s || t[5] !== o || t[6] !== n || t[7] !== u
    ? ((f = a != null && o && s && d == null ? u?.find((e) => e.workspace_id === a && e.id === n) : void 0),
      (t[2] = a),
      (t[3] = d),
      (t[4] = s),
      (t[5] = o),
      (t[6] = n),
      (t[7] = u),
      (t[8] = f))
    : (f = t[8]);
  let m = f;
  if (m == null) return null;
  let h =
      i === `form`
        ? `flex min-w-0 items-center gap-1.5 text-tertiary`
        : `max-w-64 text-end text-base break-words text-default select-text`,
    g;
  t[9] !== m.name || t[10] !== i
    ? ((g = i === `form` ? (0, O.jsx)(`span`, { className: `truncate`, children: m.name }) : m.name),
      (t[9] = m.name),
      (t[10] = i),
      (t[11] = g))
    : (g = t[11]);
  let v;
  t[12] !== m.avatar || t[13] !== i
    ? ((v = i === `form` ? (0, O.jsx)(S, { avatar: m.avatar, size: `small` }) : null),
      (t[12] = m.avatar),
      (t[13] = i),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== h || t[16] !== g || t[17] !== v
    ? ((y = (0, O.jsxs)(`span`, { className: h, children: [g, v] })),
      (t[15] = h),
      (t[16] = g),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] === i
    ? (b = t[20])
    : ((b =
        i === `form`
          ? (0, O.jsx)(_, {
              id: `automations.configuration.team`,
              defaultMessage: `Team`,
              description: `Label for the team that owns a scheduled task`,
            })
          : (0, O.jsx)(_, {
              id: `settings.teams.automation.label`,
              defaultMessage: `Run as`,
              description: `Label identifying the team whose account runs this scheduled task`,
            })),
      (t[19] = i),
      (t[20] = b));
  let x;
  return (
    t[21] !== y || t[22] !== b
      ? ((x = (0, O.jsx)(te, { control: y, label: b, variant: `nested` })),
        (t[21] = y),
        (t[22] = b),
        (t[23] = x))
      : (x = t[23]),
    x
  );
}
var D, O, k;
function A() {
  return (A = e(() => {
    ((D = i()),
      u(),
      v(),
      l(),
      a(),
      w(),
      c(),
      d(),
      r(),
      y(),
      C(),
      ne(),
      x(),
      (O = n()),
      (k = s({
        me: {
          id: `settings.teams.automation.me`,
          defaultMessage: `Me`,
          description: `Selected value for a cloud scheduled task that runs as the current user`,
        },
        personal: {
          id: `settings.teams.automation.personal`,
          defaultMessage: `Me`,
          description: `Option that creates a cloud scheduled task for the current user rather than a workspace team`,
        },
        unavailable: {
          id: `settings.teams.automation.unavailable`,
          defaultMessage: `Unavailable team`,
          description: `Selected value when a new cloud scheduled task's team is no longer available in the current workspace`,
        },
        chooseTeam: {
          id: `settings.teams.automation.chooseTeam`,
          defaultMessage: `Choose team`,
          description: `Placeholder before a team is selected for a scheduled task`,
        },
      })));
  }))();
}
export { T as n, A as r, E as t };
//# sourceMappingURL=automation-team-row-cf974f62fd66.js.map
