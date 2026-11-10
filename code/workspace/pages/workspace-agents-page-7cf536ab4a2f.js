import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Amn as r,
  Cpn as i,
  DC as a,
  DRt as o,
  EC as s,
  ERt as c,
  F3t as l,
  FKt as u,
  GL as d,
  IXt as f,
  JXt as p,
  Jit as m,
  KWt as h,
  Kit as g,
  N3t as _,
  O3t as v,
  ORt as y,
  Opn as b,
  QWt as x,
  RKt as S,
  RWt as C,
  Spn as w,
  TC as ee,
  TJt as T,
  V3t as E,
  WL as D,
  _C as O,
  a3t as k,
  af as A,
  gC as j,
  gt as M,
  hC as N,
  hmn as P,
  ht as F,
  iR as I,
  kMt as L,
  kmn as R,
  o3t as z,
  rR as B,
  rf as V,
  rq as te,
  uq as ne,
  wJt as re,
  wRt as ie,
} from "./app-initial-f094ef01c64d.js";
import { Qu as ae, Zu as H, hc as U, mc as W } from "./app-primary-4c40d73a1074.js";
import { n as G, t as K } from "./segmented-toggle-30e6111a9bfb.js";
import { n as q, r as oe, t as se } from "./skills-page-grid-8e6b72ab693e.js";
import { n as ce, t as le } from "./agent-menu-ecf22be00deb.js";
var J,
  ue = e(() => {
    (v(),
      x(),
      z(),
      T(),
      S(),
      N(),
      (J = E(k, (e, { get: t }) => {
        let n = t(h);
        return {
          enabled: n != null && t(j) === !0,
          initialPageParam: null,
          queryKey:
            typeof e == `string`
              ? [`workspace-agents`, n, e]
              : [`workspace-agents`, `directory`, n, e.query],
          queryFn: ({ pageParam: t, signal: n }) =>
            typeof e == `string`
              ? u.safeGet(`/hermes/agents`, {
                  parameters: { query: { cursor: t, limit: 50, list_type: e } },
                  signal: n,
                })
              : e.query.length === 0
                ? u.safeGet(`/hermes/workspace-store/agents`, {
                    parameters: { query: { cursor: t, limit: 50 } },
                    signal: n,
                  })
                : u.safeGet(`/hermes/workspace-store/agents/search`, {
                    parameters: { query: { cursor: t, limit: 50, query: e.query } },
                    signal: n,
                  }),
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          refetchOnMount: !0,
          retry: !1,
          staleTime: re.ONE_MINUTE,
        };
      })));
  });
function de() {
  let e = (0, X.c)(80),
    t = b(),
    n = p(),
    r = l(O),
    { data: a } = ne(),
    [o, c] = (0, Q.useState)(``),
    [u, d] = (0, Q.useState)(`recent`),
    f,
    m,
    h,
    _,
    v,
    y,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    k,
    A,
    j,
    M;
  if (e[0] !== a?.name || e[1] !== r || e[2] !== t || e[3] !== n || e[4] !== o) {
    M = a?.name?.trim() || null;
    let l;
    (e[22] === o ? (l = e[23]) : ((l = o.trim().slice(0, 200)), (e[22] = o), (e[23] = l)),
      (_ = l),
      (S = `flex h-full min-h-0 flex-col bg-surface text-default`),
      (h = s));
    let u = r !== !1,
      p;
    e[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((p = (0, $.jsx)(i, {
          id: `workspaceAgents.buildPermissionRequired`,
          defaultMessage: `You don’t have permission to build agents`,
          description: `Tooltip on disabled agent creation or publishing actions when the current workspace does not grant agent-building permission`,
        })),
        (e[24] = p))
      : (p = e[24]);
    let b = r !== !0,
      O;
    e[25] === n
      ? (O = e[26])
      : ((O = () => {
          n(ie);
        }),
        (e[25] = n),
        (e[26] = O));
    let N;
    e[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((N = (0, $.jsx)(i, {
          id: `workspaceAgents.index.create`,
          defaultMessage: `Create`,
          description: `Button that opens the native Workspace Agent editor to create an agent`,
        })),
        (e[27] = N))
      : (N = e[27]);
    let P;
    (e[28] !== b || e[29] !== O
      ? ((P = (0, $.jsx)(L, {
          color: `primary`,
          size: `medium`,
          disabled: b,
          onClick: O,
          children: N,
        })),
        (e[28] = b),
        (e[29] = O),
        (e[30] = P))
      : (P = e[30]),
      e[31] !== u || e[32] !== P
        ? ((D = (0, $.jsx)(g, { disabled: u, tooltipContent: p, children: P })),
          (e[31] = u),
          (e[32] = P),
          (e[33] = D))
        : (D = e[33]),
      (k = `inset`));
    let F;
    e[34] === t
      ? (F = e[35])
      : ((F = t.formatMessage({
          id: `workspaceAgents.index.search.label`,
          defaultMessage: `Search agents`,
          description: `Accessible label for the Agents search input`,
        })),
        (e[34] = t),
        (e[35] = F));
    let I;
    (e[36] === t
      ? (I = e[37])
      : ((I = t.formatMessage({
          id: `workspaceAgents.index.search.placeholder`,
          defaultMessage: `Search agents`,
          description: `Placeholder for the Agents search input`,
        })),
        (e[36] = t),
        (e[37] = I)),
      e[38] !== o || e[39] !== F || e[40] !== I
        ? ((A = {
            id: `workspace-agents-search`,
            label: F,
            onSearchQueryChange: c,
            placeholder: I,
            searchQuery: o,
          }),
          (e[38] = o),
          (e[39] = F),
          (e[40] = I),
          (e[41] = A))
        : (A = e[41]),
      e[42] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((j = (0, $.jsx)(i, {
            id: `workspaceAgents.index.subtitle`,
            defaultMessage: `Keep work moving 24/7 with agents`,
            description: `Subtitle on the Agents index page`,
          })),
          (x = (0, $.jsx)(i, {
            id: `workspaceAgents.index.pageTitle`,
            defaultMessage: `Workspace Agents`,
            description: `Title of the Agents index page`,
          })),
          (e[42] = x),
          (e[43] = j))
        : ((x = e[42]), (j = e[43])),
      (m = ee),
      (f = K),
      e[44] === t
        ? (T = e[45])
        : ((T = t.formatMessage({
            id: `workspaceAgents.index.views.ariaLabel`,
            defaultMessage: `Agent views`,
            description: `Accessible label for the Agents page tabs`,
          })),
          (e[44] = t),
          (e[45] = T)),
      (E = d),
      e[46] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((C = {
            id: `recent`,
            label: (0, $.jsx)(i, {
              id: `workspaceAgents.index.view.recent`,
              defaultMessage: `Recently used`,
              description: `Tab for recently used agents`,
            }),
          }),
          (e[46] = C))
        : (C = e[46]),
      e[47] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((w = {
            id: `owned`,
            label: (0, $.jsx)(i, {
              id: `workspaceAgents.index.view.mine`,
              defaultMessage: `Built by me`,
              description: `Tab for agents built by the current user`,
            }),
          }),
          (e[47] = w))
        : (w = e[47]),
      (v = `directory`),
      (y =
        M == null
          ? t.formatMessage({
              id: `workspaceAgents.index.view.teamDirectory`,
              defaultMessage: `Team directory`,
              description: `Fallback tab label for the workspace agent directory`,
            })
          : t.formatMessage(
              {
                id: `workspaceAgents.index.view.workspaceDirectory`,
                defaultMessage: `{workspaceName} directory`,
                description: `Tab label for the current workspace agent directory`,
              },
              { workspaceName: M },
            )),
      (e[0] = a?.name),
      (e[1] = r),
      (e[2] = t),
      (e[3] = n),
      (e[4] = o),
      (e[5] = f),
      (e[6] = m),
      (e[7] = h),
      (e[8] = _),
      (e[9] = v),
      (e[10] = y),
      (e[11] = x),
      (e[12] = S),
      (e[13] = C),
      (e[14] = w),
      (e[15] = T),
      (e[16] = E),
      (e[17] = D),
      (e[18] = k),
      (e[19] = A),
      (e[20] = j),
      (e[21] = M));
  } else
    ((f = e[5]),
      (m = e[6]),
      (h = e[7]),
      (_ = e[8]),
      (v = e[9]),
      (y = e[10]),
      (x = e[11]),
      (S = e[12]),
      (C = e[13]),
      (w = e[14]),
      (T = e[15]),
      (E = e[16]),
      (D = e[17]),
      (k = e[18]),
      (A = e[19]),
      (j = e[20]),
      (M = e[21]));
  let N;
  e[48] !== v || e[49] !== y
    ? ((N = { id: v, label: y }), (e[48] = v), (e[49] = y), (e[50] = N))
    : (N = e[50]);
  let P;
  e[51] !== N || e[52] !== C || e[53] !== w
    ? ((P = [C, w, N]), (e[51] = N), (e[52] = C), (e[53] = w), (e[54] = P))
    : (P = e[54]);
  let F;
  e[55] !== f || e[56] !== P || e[57] !== T || e[58] !== E || e[59] !== u
    ? ((F = (0, $.jsx)(f, {
        ariaLabel: T,
        onSelect: E,
        options: P,
        selectedId: u,
        size: `toolbar`,
      })),
      (e[55] = f),
      (e[56] = P),
      (e[57] = T),
      (e[58] = E),
      (e[59] = u),
      (e[60] = F))
    : (F = e[60]);
  let I;
  e[61] !== m || e[62] !== F
    ? ((I = (0, $.jsx)(m, { children: F })), (e[61] = m), (e[62] = F), (e[63] = I))
    : (I = e[63]);
  let R = _.length > 0 ? `directory` : u,
    z;
  e[64] !== _ || e[65] !== R || e[66] !== M
    ? ((z = (0, $.jsx)(fe, { kind: R, query: _, workspaceName: M })),
      (e[64] = _),
      (e[65] = R),
      (e[66] = M),
      (e[67] = z))
    : (z = e[67]);
  let B;
  e[68] !== h ||
  e[69] !== x ||
  e[70] !== I ||
  e[71] !== z ||
  e[72] !== D ||
  e[73] !== k ||
  e[74] !== A ||
  e[75] !== j
    ? ((B = (0, $.jsxs)(h, {
        headerAction: D,
        headerVariant: k,
        search: A,
        subtitle: j,
        title: x,
        children: [I, z],
      })),
      (e[68] = h),
      (e[69] = x),
      (e[70] = I),
      (e[71] = z),
      (e[72] = D),
      (e[73] = k),
      (e[74] = A),
      (e[75] = j),
      (e[76] = B))
    : (B = e[76]);
  let V;
  return (
    e[77] !== S || e[78] !== B
      ? ((V = (0, $.jsx)(`div`, { className: S, children: B })),
        (e[77] = S),
        (e[78] = B),
        (e[79] = V))
      : (V = e[79]),
    V
  );
}
function fe(e) {
  let t = (0, X.c)(33),
    { kind: n, query: r, workspaceName: a } = e,
    o = n === `recent` ? `used` : `created`,
    s;
  t[0] !== n || t[1] !== o || t[2] !== r
    ? ((s = n === `directory` ? { query: r } : o), (t[0] = n), (t[1] = o), (t[2] = r), (t[3] = s))
    : (s = t[3]);
  let {
    data: c,
    isPending: l,
    isError: u,
    refetch: d,
    fetchNextPage: f,
    hasNextPage: p,
    isFetchingNextPage: m,
  } = _(J, s);
  if (l) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(B, { debugName: `WorkspaceAgents`, fillParent: !0 })), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (u) {
    let e = r.length > 0,
      n;
    t[5] === d ? (n = t[6]) : ((n = () => void d()), (t[5] = d), (t[6] = n));
    let i;
    return (
      t[7] !== e || t[8] !== n
        ? ((i = (0, $.jsx)(ve, { isSearch: e, onRetry: n })), (t[7] = e), (t[8] = n), (t[9] = i))
        : (i = t[9]),
      i
    );
  }
  let h, g;
  if (t[10] !== c?.pages || t[11] !== n || t[12] !== r || t[13] !== a) {
    g = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = (0, Z.default)(c?.pages.flatMap(pe) ?? [], `id`);
      if (e.length === 0) {
        if (n !== `directory`) {
          let e;
          (t[16] === n
            ? (e = t[17])
            : ((e = (0, $.jsx)(_e, { kind: n })), (t[16] = n), (t[17] = e)),
            (g = e));
          break bb0;
        }
        let e;
        (t[18] === r
          ? (e = t[19])
          : ((e =
              r.length > 0
                ? (0, $.jsx)(D, {
                    layout: `page`,
                    title: (0, $.jsx)(i, {
                      id: `workspaceAgents.index.search.empty.title`,
                      defaultMessage: `No agents found for “{query}”`,
                      description: `Empty state when no Workspace Agents match a directory search`,
                      values: { query: r },
                    }),
                  })
                : (0, $.jsx)(D, {
                    layout: `page`,
                    title: (0, $.jsx)(i, {
                      id: `workspaceAgents.index.directory.empty.title`,
                      defaultMessage: `No agents in team directory`,
                      description: `Empty-state title for an empty workspace agent directory`,
                    }),
                    description: (0, $.jsx)(i, {
                      id: `workspaceAgents.index.directory.empty.description`,
                      defaultMessage: `List agents in the team directory so anyone from your workspace can use them`,
                      description: `Description for an empty workspace agent directory`,
                    }),
                  })),
            (t[18] = r),
            (t[19] = e)),
          (g = e));
        break bb0;
      }
      let o;
      (t[20] !== n || t[21] !== a
        ? ((o = (e) => (0, $.jsx)(me, { agent: e, kind: n, workspaceName: a }, e.id)),
          (t[20] = n),
          (t[21] = a),
          (t[22] = o))
        : (o = t[22]),
        (h = e.map(o)));
    }
    ((t[10] = c?.pages), (t[11] = n), (t[12] = r), (t[13] = a), (t[14] = h), (t[15] = g));
  } else ((h = t[14]), (g = t[15]));
  if (g !== Symbol.for(`react.early_return_sentinel`)) return g;
  let v = h,
    y;
  t[23] === f ? (y = t[24]) : ((y = () => void f()), (t[23] = f), (t[24] = y));
  let b;
  t[25] !== p || t[26] !== m || t[27] !== y
    ? ((b = (0, $.jsx)(ye, { hasNextPage: p, isFetchingNextPage: m, onLoadMore: y })),
      (t[25] = p),
      (t[26] = m),
      (t[27] = y),
      (t[28] = b))
    : (b = t[28]);
  let x = b,
    S;
  return (
    t[29] !== n || t[30] !== x || t[31] !== v
      ? ((S =
          n === `directory`
            ? (0, $.jsxs)(se, {
                className: `flex flex-col gap-4`,
                children: [(0, $.jsx)(q, { gap: `catalog`, children: v }), x],
              })
            : (0, $.jsxs)(`div`, { className: `flex flex-col select-none`, children: [v, x] })),
        (t[29] = n),
        (t[30] = x),
        (t[31] = v),
        (t[32] = S))
      : (S = t[32]),
    S
  );
}
function pe(e) {
  return e.items;
}
function me(e) {
  let t = (0, X.c)(42),
    { agent: n, kind: r, workspaceName: a } = e,
    s = a === void 0 ? null : a,
    l = b(),
    u = p(),
    d = n.latest_published_version_id == null,
    f;
  t[0] !== n.name || t[1] !== l
    ? ((f =
        n.name.trim() ||
        l.formatMessage({
          id: `workspaceAgents.index.unnamed`,
          defaultMessage: `Unnamed agent`,
          description: `Fallback name for a Workspace Agent without a name`,
        })),
      (t[0] = n.name),
      (t[1] = l),
      (t[2] = f))
    : (f = t[2]);
  let m = f,
    h;
  t[3] === n.id ? (h = t[4]) : ((h = c(n.id)), (t[3] = n.id), (t[4] = h));
  let g = h,
    _;
  if (r === `owned`) {
    let e;
    (t[5] !== n || t[6] !== s
      ? ((e = (0, $.jsx)(Y, { agent: n, workspaceName: s })), (t[5] = n), (t[6] = s), (t[7] = e))
      : (e = t[7]),
      (_ = e));
  } else if (r === `recent`) {
    let e;
    (t[8] === n ? (e = t[9]) : ((e = (0, $.jsx)(ge, { agent: n })), (t[8] = n), (t[9] = e)),
      (_ = e));
  } else {
    let e;
    t[10] !== n.description || t[11] !== n.tagline
      ? ((e =
          n.tagline.trim() ||
          n.description.trim() ||
          (0, $.jsx)(i, {
            id: `workspaceAgents.index.noDescription`,
            defaultMessage: `No description`,
            description: `Fallback description for an agent directory row`,
          })),
        (t[10] = n.description),
        (t[11] = n.tagline),
        (t[12] = e))
      : (e = t[12]);
    let r;
    t[13] === e
      ? (r = t[14])
      : ((r = (0, $.jsx)(`span`, { children: e })), (t[13] = e), (t[14] = r));
    let a;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(F, { className: `mx-1` })), (t[15] = a))
      : (a = t[15]);
    let o;
    t[16] === n.creator_name
      ? (o = t[17])
      : ((o =
          n.creator_name?.trim() ||
          (0, $.jsx)(i, {
            id: `workspaceAgents.index.unknownAuthor`,
            defaultMessage: `Unknown author`,
            description: `Fallback creator name for an agent directory row`,
          })),
        (t[16] = n.creator_name),
        (t[17] = o));
    let s;
    t[18] === o
      ? (s = t[19])
      : ((s = (0, $.jsx)(`span`, { children: o })), (t[18] = o), (t[19] = s));
    let c;
    (t[20] !== r || t[21] !== s
      ? ((c = (0, $.jsxs)($.Fragment, { children: [r, a, s] })),
        (t[20] = r),
        (t[21] = s),
        (t[22] = c))
      : (c = t[22]),
      (_ = c));
  }
  let v;
  t[23] === n.icon
    ? (v = t[24])
    : ((v = (0, $.jsx)(W, { icon: n.icon, size: 40 })), (t[23] = n.icon), (t[24] = v));
  let y;
  t[25] !== n.id || t[26] !== g || t[27] !== d || t[28] !== r || t[29] !== u
    ? ((y = () => {
        if (r === `owned` && d) {
          u(g);
          return;
        }
        u(o(n.id));
      }),
      (t[25] = n.id),
      (t[26] = g),
      (t[27] = d),
      (t[28] = r),
      (t[29] = u),
      (t[30] = y))
    : (y = t[30]);
  let x = r === `owned`,
    S;
  t[31] !== n || t[32] !== x
    ? ((S = (0, $.jsx)(he, { agent: n, canEdit: x })), (t[31] = n), (t[32] = x), (t[33] = S))
    : (S = t[33]);
  let C;
  t[34] === _
    ? (C = t[35])
    : ((C = (0, $.jsx)(`span`, { className: `block truncate`, children: _ })),
      (t[34] = _),
      (t[35] = C));
  let w;
  return (
    t[36] !== m || t[37] !== v || t[38] !== y || t[39] !== S || t[40] !== C
      ? ((w = (0, $.jsx)(H, {
          ariaLabel: m,
          compactSecondLine: !0,
          hasInteractiveContent: !0,
          icon: v,
          isSelected: !1,
          onSelect: y,
          rightText: S,
          rightTextPosition: `center`,
          secondLine: C,
          title: m,
        })),
        (t[36] = m),
        (t[37] = v),
        (t[38] = y),
        (t[39] = S),
        (t[40] = C),
        (t[41] = w))
      : (w = t[41]),
    w
  );
}
function he(e) {
  let t = (0, X.c)(11),
    { agent: n, canEdit: r } = e,
    a = p(),
    o = n.latest_published_version_id != null,
    s;
  t[0] !== n.id || t[1] !== r || t[2] !== a
    ? ((s = r
        ? (0, $.jsx)(L, {
            color: `ghost`,
            size: `toolbar`,
            onClick: (e) => {
              (e.stopPropagation(), a(c(n.id)));
            },
            children: (0, $.jsx)(i, {
              id: `workspaceAgents.index.edit`,
              defaultMessage: `Edit`,
              description: `Action that opens an agent in the native draft editor`,
            }),
          })
        : null),
      (t[0] = n.id),
      (t[1] = r),
      (t[2] = a),
      (t[3] = s))
    : (s = t[3]);
  let l;
  t[4] !== n || t[5] !== r || t[6] !== o
    ? ((l = o || r ? (0, $.jsx)(le, { agent: n, isPublished: o }) : null),
      (t[4] = n),
      (t[5] = r),
      (t[6] = o),
      (t[7] = l))
    : (l = t[7]);
  let u;
  return (
    t[8] !== s || t[9] !== l
      ? ((u = (0, $.jsxs)(`span`, {
          className: `pointer-events-auto flex items-center gap-1`,
          children: [s, l],
        })),
        (t[8] = s),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function Y(e) {
  let t = (0, X.c)(10),
    { agent: n, workspaceName: r } = e;
  if (n.latest_published_version_id == null) {
    let e;
    return (
      t[0] === n.updated_at
        ? (e = t[1])
        : ((e = (0, $.jsx)(i, {
            id: `workspaceAgents.index.draftEdited`,
            defaultMessage: `Draft · Edited {time}`,
            description: `Status and last edit time for an unpublished agent`,
            values: { time: (0, $.jsx)(V, { dateString: n.updated_at }) },
          })),
          (t[0] = n.updated_at),
          (t[1] = e)),
      e
    );
  }
  let a;
  t[2] !== n || t[3] !== r ? ((a = be(n, r)), (t[2] = n), (t[3] = r), (t[4] = a)) : (a = t[4]);
  let o;
  t[5] === n.updated_at
    ? (o = t[6])
    : ((o = (0, $.jsx)(V, { dateString: n.updated_at })), (t[5] = n.updated_at), (t[6] = o));
  let s;
  return (
    t[7] !== a || t[8] !== o
      ? ((s = (0, $.jsx)(i, {
          id: `workspaceAgents.index.publishedUpdated`,
          defaultMessage: `{visibility} · Updated {time}`,
          description: `Visibility and last update time for a published agent`,
          values: { visibility: a, time: o },
        })),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function ge(e) {
  let t = (0, X.c)(7),
    { agent: n } = e,
    r = n.recent_runs?.items?.[0];
  if (n.attention_status === `blocked` || r?.status === `blocked`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(i, {
            id: `workspaceAgents.index.needsAttention`,
            defaultMessage: `Needs your attention`,
            description: `Status for a recently used agent with a blocked run`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let a = n.last_used_at ?? r?.updated_at;
  if (a != null) {
    let e;
    return (
      t[1] === a
        ? (e = t[2])
        : ((e = (0, $.jsx)(i, {
            id: `workspaceAgents.index.lastUsed`,
            defaultMessage: `Used {time}`,
            description: `Last used time for an agent`,
            values: { time: (0, $.jsx)(V, { dateString: a }) },
          })),
          (t[1] = a),
          (t[2] = e)),
      e
    );
  }
  let o;
  t[3] === n.creator_name
    ? (o = t[4])
    : ((o = n.creator_name?.trim()), (t[3] = n.creator_name), (t[4] = o));
  let s = o,
    c;
  return (
    t[5] === s
      ? (c = t[6])
      : ((c = s
          ? (0, $.jsx)(i, {
              id: `workspaceAgents.index.byCreator`,
              defaultMessage: `By {creatorName}`,
              description: `Creator byline for an agent`,
              values: { creatorName: s },
            })
          : (0, $.jsx)(i, {
              id: `workspaceAgents.index.noRecentActivity`,
              defaultMessage: `Recently used`,
              description: `Fallback status for a recently used agent`,
            })),
        (t[5] = s),
        (t[6] = c)),
    c
  );
}
function _e(e) {
  let t = (0, X.c)(11),
    { kind: n } = e,
    r = b(),
    i,
    a;
  if (n === `recent`) {
    let e;
    (t[0] === r
      ? (e = t[1])
      : ((e = r.formatMessage({
          id: `workspaceAgents.index.recent.empty.title`,
          defaultMessage: `No recently used agents`,
          description: `Empty state for the recently used Agents view`,
        })),
        (t[0] = r),
        (t[1] = e)),
      (i = e));
    let n;
    (t[2] === r
      ? (n = t[3])
      : ((n = r.formatMessage({
          id: `workspaceAgents.index.recent.empty.description`,
          defaultMessage: `Create an agent or browse agents built by your team`,
          description: `Description shown when there are no recently used agents`,
        })),
        (t[2] = r),
        (t[3] = n)),
      (a = n));
  } else {
    let e;
    (t[4] === r
      ? (e = t[5])
      : ((e = r.formatMessage({
          id: `workspaceAgents.index.mine.empty.title`,
          defaultMessage: `You haven’t built any agents yet`,
          description: `Empty state for the current user's Agents view`,
        })),
        (t[4] = r),
        (t[5] = e)),
      (i = e));
    let n;
    (t[6] === r
      ? (n = t[7])
      : ((n = r.formatMessage({
          id: `workspaceAgents.index.mine.empty.description`,
          defaultMessage: `Create agents to run weekly reports, answer Slack questions, and update systems`,
          description: `Description shown when the current user has not built any agents`,
        })),
        (t[6] = r),
        (t[7] = n)),
      (a = n));
  }
  let o;
  return (
    t[8] !== a || t[9] !== i
      ? ((o = (0, $.jsx)(D, { layout: `page`, title: i, description: a })),
        (t[8] = a),
        (t[9] = i),
        (t[10] = o))
      : (o = t[10]),
    o
  );
}
function ve(e) {
  let t = (0, X.c)(8),
    { isSearch: n, onRetry: r } = e,
    a = n !== void 0 && n,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a
        ? (0, $.jsx)(i, {
            id: `workspaceAgents.index.search.error.title`,
            defaultMessage: `Couldn’t search agents`,
            description: `Error shown when agents cannot be searched`,
          })
        : (0, $.jsx)(i, {
            id: `workspaceAgents.index.error.title`,
            defaultMessage: `Couldn’t load agents`,
            description: `Error shown when agents cannot be loaded`,
          })),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(i, {
        id: `workspaceAgents.index.error.retry`,
        defaultMessage: `Retry`,
        description: `Button that retries loading Workspace Agents`,
      })),
      (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === r
    ? (c = t[4])
    : ((c = (0, $.jsx)(L, { color: `secondary`, size: `medium`, onClick: r, children: s })),
      (t[3] = r),
      (t[4] = c));
  let l;
  return (
    t[5] !== o || t[6] !== c
      ? ((l = (0, $.jsx)(D, { layout: `page`, title: o, actions: c })),
        (t[5] = o),
        (t[6] = c),
        (t[7] = l))
      : (l = t[7]),
    l
  );
}
function ye(e) {
  let t = (0, X.c)(6),
    { hasNextPage: n, isFetchingNextPage: r, onLoadMore: a } = e;
  if (!n) return null;
  let o;
  t[0] === r
    ? (o = t[1])
    : ((o = r
        ? (0, $.jsx)(i, {
            id: `workspaceAgents.index.loadingMore`,
            defaultMessage: `Loading more agents`,
            description: `Button label while more Workspace Agents load`,
          })
        : (0, $.jsx)(i, {
            id: `workspaceAgents.index.loadMore`,
            defaultMessage: `Load more`,
            description: `Button that loads more Workspace Agents`,
          })),
      (t[0] = r),
      (t[1] = o));
  let s;
  return (
    t[2] !== r || t[3] !== a || t[4] !== o
      ? ((s = (0, $.jsx)(L, {
          className: `self-center`,
          color: `ghostActive`,
          disabled: r,
          size: `medium`,
          onClick: a,
          children: o,
        })),
        (t[2] = r),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s))
      : (s = t[5]),
    s
  );
}
function be(e, t) {
  return e.store_visible
    ? t == null
      ? (0, $.jsx)(i, {
          id: `workspaceAgents.index.visibility.directoryFallback`,
          defaultMessage: `Published to your workspace’s directory`,
          description: `Visibility label for an agent published to a workspace directory`,
        })
      : (0, $.jsx)(i, {
          id: `workspaceAgents.index.visibility.directory`,
          defaultMessage: `Published to {workspaceName}’s directory`,
          description: `Visibility label for an agent published to the named workspace directory`,
          values: { workspaceName: t },
        })
    : e.is_public
      ? (0, $.jsx)(i, {
          id: `workspaceAgents.index.visibility.shared`,
          defaultMessage: `Shared with your workspace`,
          description: `Visibility label for an agent shared by link in the workspace`,
        })
      : (0, $.jsx)(i, {
          id: `workspaceAgents.index.visibility.private`,
          defaultMessage: `Private to you`,
          description: `Visibility label for an agent visible only to its owner`,
        });
}
var X, Z, Q, $;
e(() => {
  ((X = R()),
    (Z = t(C(), 1)),
    v(),
    (Q = t(r(), 1)),
    w(),
    f(),
    te(),
    M(),
    n(),
    A(),
    d(),
    a(),
    G(),
    ae(),
    m(),
    I(),
    oe(),
    ce(),
    N(),
    y(),
    U(),
    ue(),
    ($ = P()));
})();
export { de as WorkspaceAgentsPage };
//# sourceMappingURL=workspace-agents-page-7cf536ab4a2f.js.map
