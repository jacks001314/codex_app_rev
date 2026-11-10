const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./details-a705f35245e0.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./workspace-agent-detail-query-c8301c5fcc0a.js",
      "./workspace-agent-apps-6b85a870e5a0.js",
      "./workspace-agent-icon-89bcc04ee2a2.js",
      "./helpers-a3a9f6ff3e2c.js",
      "./types-bf88a8ab2993.js",
      "./SparkleFill-f87f1d9c726c.js",
      "./workspace-agent-icon-8814b33caf67.css",
      "./chatgpt_agent_directory-1e577bbd474c.js",
      "./personal-apps-bcb923c96925.js",
      "./app-connect-modal-by-id-a3e486d4397f.js",
      "./app-connect-modal-fb7e1b0124f4.js",
      "./app-connect-skeleton-ca153a13f650.js",
      "./app-connect-load-state-bbeb24b226fa.js",
      "./apps-query-410f7e452f43.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  B4 as r,
  Cot as i,
  Ext as a,
  Fat as o,
  IDt as s,
  Ixt as c,
  Pat as l,
  Pxt as u,
  QG as d,
  TJ as f,
  VDt as p,
  Vxt as m,
  Yxt as h,
  ZG as g,
  _xt as _,
  cz as v,
  fPt as y,
  jDt as b,
  pPt as x,
  sMt as ee,
  sz as te,
  t3 as S,
  vzt as C,
  wot as w,
  wxt as ne,
  xMt as T,
  yzt as E,
  z4 as D,
  zxt as O,
} from "./app-shared-bbfeca5e5737.js";
import {
  $ct as k,
  ACn as A,
  Dwr as re,
  Fct as ie,
  Fin as j,
  Fwr as ae,
  GMr as oe,
  Hin as se,
  Ict as M,
  Mct as ce,
  Mwr as N,
  N$ as P,
  Nwr as F,
  Pct as I,
  QDr as L,
  XDr as R,
  Xct as z,
  Xd as B,
  YMr as le,
  Yd as ue,
  Ymr as V,
  bTn as H,
  cct as U,
  ehr as W,
  eor as G,
  j$ as K,
  jCn as q,
  jct as de,
  lct as J,
  tNr as fe,
  tor as pe,
  uct as me,
  yTn as Y,
} from "./app-initial-5851df3f6cb1.js";
import { n as X, t as he } from "./bullet-separator-9aa986eaf7a4.js";
import { n as ge, r as _e, t as ve } from "./skills-page-grid-5f717c30cada.js";
import { n as ye, t as be } from "./card-tile-a92df345e9ab.js";
import { n as xe, t as Se } from "./workspace-agent-icon-89bcc04ee2a2.js";
import { i as Ce, n as we, r as Te, t as Ee } from "./chatgpt_agent_directory-1e577bbd474c.js";
import { n as De, t as Oe } from "./agent-menu-c3dd02be85a2.js";
function ke(e) {
  let t = (0, Ae.c)(26),
    { agent: n } = e,
    r = c(i),
    o = a(),
    l = ne(),
    u;
  t[0] === n.icon
    ? (u = t[1])
    : ((u = (0, Z.jsx)(Se, { icon: n.icon, size: 40 })), (t[0] = n.icon), (t[1] = u));
  let d;
  t[2] === n.name
    ? (d = t[3])
    : ((d =
        n.name.trim() ||
        (0, Z.jsx)(s, {
          id: `workspaceAgents.index.unnamed`,
          defaultMessage: `Unnamed agent`,
          description: `Fallback name for a Workspace Agent without a name`,
        })),
      (t[2] = n.name),
      (t[3] = d));
  let f;
  t[4] !== n.description || t[5] !== n.tagline
    ? ((f =
        n.tagline.trim() ||
        n.description.trim() ||
        (0, Z.jsx)(s, {
          id: `workspaceAgents.index.noDescription`,
          defaultMessage: `No description`,
          description: `Fallback description for an agent directory row`,
        })),
      (t[4] = n.description),
      (t[5] = n.tagline),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === f ? (p = t[8]) : ((p = (0, Z.jsx)(`span`, { children: f })), (t[7] = f), (t[8] = p));
  let m;
  t[9] === n.creator_name
    ? (m = t[10])
    : ((m = n.creator_name?.trim()
        ? (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(s, {
              id: `workspaceAgents.discovery.by`,
              defaultMessage: `By {creatorName}`,
              description: `Creator attribution on an agent directory card`,
              values: { creatorName: n.creator_name },
            }),
          })
        : null),
      (t[9] = n.creator_name),
      (t[10] = m));
  let h;
  t[11] !== p || t[12] !== m
    ? ((h = (0, Z.jsxs)(Z.Fragment, { children: [p, m] })), (t[11] = p), (t[12] = m), (t[13] = h))
    : (h = t[13]);
  let g;
  t[14] !== n.id ||
  t[15] !== n.is_pinned ||
  t[16] !== l.pathname ||
  t[17] !== l.search ||
  t[18] !== o ||
  t[19] !== r
    ? ((g = () => {
        L(r, Ee, {
          actionType: we.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK,
          surface: Te.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY,
          agentId: n.id,
          isPinned: n.is_pinned === !0,
        });
        let e = new URLSearchParams(l.search);
        (e.set(`agent`, n.id), o({ pathname: l.pathname, search: e.toString() }));
      }),
      (t[14] = n.id),
      (t[15] = n.is_pinned),
      (t[16] = l.pathname),
      (t[17] = l.search),
      (t[18] = o),
      (t[19] = r),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== u || t[22] !== d || t[23] !== h || t[24] !== g
      ? ((_ = (0, Z.jsx)(be, {
          presentation: `catalog`,
          icon: u,
          iconContainer: !1,
          title: d,
          description: h,
          onClick: g,
        })),
        (t[21] = u),
        (t[22] = d),
        (t[23] = h),
        (t[24] = g),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
var Ae, Z;
function je() {
  return (je = e(() => {
    ((Ae = C()), Ce(), u(), b(), _(), ye(), R(), w(), xe(), (Z = T()));
  }))();
}
var Me;
function Ne() {
  return (Ne = e(() => {
    (u(),
      fe(),
      W(),
      w(),
      o(),
      U(),
      (Me = h(i, (e, { get: t }) => {
        let n = t(oe),
          r = t(le);
        return {
          enabled: n != null && r != null && t(J) === !0,
          initialPageParam: null,
          queryKey:
            typeof e == `string`
              ? [`workspace-agents`, n, e, r]
              : [`workspace-agents`, `directory`, n, e.query, r],
          queryFn: ({ pageParam: t, signal: i }) => {
            if (n == null || r == null) throw Error(`Missing workspace identity`);
            return typeof e == `string`
              ? V.safeGet(`/hermes/agents`, {
                  parameters: { query: { cursor: t, limit: 50, list_type: e } },
                  signal: i,
                  expectedIdentity: { accountId: n, userId: r },
                })
              : e.query.length === 0
                ? V.safeGet(`/hermes/workspace-store/agents`, {
                    parameters: { query: { cursor: t, limit: 50 } },
                    signal: i,
                    expectedIdentity: { accountId: n, userId: r },
                  })
                : V.safeGet(`/hermes/workspace-store/agents/search`, {
                    parameters: { query: { cursor: t, limit: 50, query: e.query } },
                    signal: i,
                    expectedIdentity: { accountId: n, userId: r },
                  });
          },
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          refetchOnMount: !0,
          retry: !1,
          staleTime: l.ONE_MINUTE,
        };
      })));
  }))();
}
var Pe, Fe;
function Ie() {
  return (Ie = e(() => {
    ((Pe = `_legacyMobileTitle_ioade_2`), (Fe = { legacyMobileTitle: Pe }));
  }))();
}
function Le() {
  let e = (0, Q.c)(108),
    t = p(),
    r = a(),
    i = ne(),
    o = m(oe),
    c = m(le),
    l,
    u;
  e[0] === i.search
    ? ((l = e[1]), (u = e[2]))
    : ((l = new URLSearchParams(i.search)), (u = l.get(`agent`)), (e[0] = i.search), (e[1] = l), (e[2] = u));
  let f = u,
    h = m(pe),
    _ = m(me),
    { data: v } = se(),
    [y, b] = (0, Ye.useState)(``),
    [x, ee] = (0, Ye.useState)(`recent`),
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    ae,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U,
    W;
  if (e[3] !== v?.name || e[4] !== _ || e[5] !== h || e[6] !== t || e[7] !== r || e[8] !== y) {
    W = v?.name?.trim() || null;
    let i;
    (e[33] === y ? (i = e[34]) : ((i = y.trim().slice(0, 200)), (e[33] = y), (e[34] = i)), (T = i));
    let a;
    e[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(s, {
          id: `workspaceAgents.index.pageTitle`,
          defaultMessage: `Workspace Agents`,
          description: `Title of the Agents index page`,
        })),
        (e[35] = a))
      : (a = e[35]);
    let o = a;
    ((F = `flex h-full min-h-0 flex-col bg-surface text-default`),
      (w = ce),
      (H = !h),
      (U = h),
      (D = h ? `pt-2` : void 0),
      (O = h ? `medium` : `default`),
      (k = h));
    let c = _ !== !1,
      l;
    e[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, $.jsx)(s, {
          id: `workspaceAgents.buildPermissionRequired`,
          defaultMessage: `You don’t have permission to build agents`,
          description: `Tooltip on disabled agent creation or publishing actions when the current workspace does not grant agent-building permission`,
        })),
        (e[36] = l))
      : (l = e[36]);
    let u;
    (e[37] !== _ || e[38] !== h || e[39] !== r
      ? ((u = h
          ? (0, $.jsx)(ie, {
              color: `primary`,
              disabled: _ !== !0,
              icon: { 16: g, 20: d },
              squareOnMobile: !0,
              onClick: () => {
                r(re);
              },
              children: (0, $.jsx)(`span`, {
                className: `browser:max-md:sr-only`,
                children: (0, $.jsx)(s, {
                  id: `workspaceAgents.index.create`,
                  defaultMessage: `Create`,
                  description: `Button that opens the native Workspace Agent editor to create an agent`,
                }),
              }),
            })
          : (0, $.jsx)(n, {
              color: `primary`,
              size: `medium`,
              disabled: _ !== !0,
              onClick: () => {
                r(re);
              },
              children: (0, $.jsx)(s, {
                id: `workspaceAgents.index.create`,
                defaultMessage: `Create`,
                description: `Button that opens the native Workspace Agent editor to create an agent`,
              }),
            })),
        (e[37] = _),
        (e[38] = h),
        (e[39] = r),
        (e[40] = u))
      : (u = e[40]),
      e[41] !== c || e[42] !== u
        ? ((A = (0, $.jsx)(te, { disabled: c, tooltipContent: l, children: u })),
          (e[41] = c),
          (e[42] = u),
          (e[43] = A))
        : (A = e[43]),
      (j = h ? `sticky` : `page`),
      (ae = h ? `compact` : `inset`));
    let f = h ? `toolbar-compact` : `default`,
      p;
    e[44] === t
      ? (p = e[45])
      : ((p = t.formatMessage({
          id: `workspaceAgents.index.search.label`,
          defaultMessage: `Search agents`,
          description: `Accessible label for the Agents search input`,
        })),
        (e[44] = t),
        (e[45] = p));
    let m;
    (e[46] === t
      ? (m = e[47])
      : ((m = t.formatMessage({
          id: `workspaceAgents.index.search.placeholder`,
          defaultMessage: `Search agents`,
          description: `Placeholder for the Agents search input`,
        })),
        (e[46] = t),
        (e[47] = m)),
      e[48] !== y || e[49] !== f || e[50] !== p || e[51] !== m
        ? ((M = {
            variant: f,
            id: `workspace-agents-search`,
            label: p,
            onSearchQueryChange: b,
            placeholder: m,
            searchQuery: y,
          }),
          (e[48] = y),
          (e[49] = f),
          (e[50] = p),
          (e[51] = m),
          (e[52] = M))
        : (M = e[52]),
      e[53] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((N = (0, $.jsx)(s, {
            id: `workspaceAgents.index.subtitle`,
            defaultMessage: `Keep work moving 24/7 with agents`,
            description: `Subtitle on the Agents index page`,
          })),
          (e[53] = N))
        : (N = e[53]),
      e[54] === h
        ? (P = e[55])
        : ((P = h
            ? (0, $.jsxs)($.Fragment, {
                children: [
                  (0, $.jsx)(`span`, { className: `browser:max-md:hidden`, children: o }),
                  (0, $.jsx)(`span`, {
                    className: `hidden browser:max-md:inline`,
                    children: (0, $.jsx)(s, {
                      id: `workspaceAgents.index.mobilePageTitle`,
                      defaultMessage: `Agents`,
                      description: `Short title for the Agents index page when the Slate mobile header has limited room beside search and create controls`,
                    }),
                  }),
                ],
              })
            : (0, $.jsx)(`span`, { className: Fe.legacyMobileTitle, children: o })),
          (e[54] = h),
          (e[55] = P)),
      (C = de),
      (V = !h),
      (S = ue),
      e[56] === t
        ? (z = e[57])
        : ((z = t.formatMessage({
            id: `workspaceAgents.index.views.ariaLabel`,
            defaultMessage: `Agent views`,
            description: `Accessible label for the Agents page tabs`,
          })),
          (e[56] = t),
          (e[57] = z)),
      (B = ee),
      e[58] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((L = {
            id: `recent`,
            label: (0, $.jsx)(s, {
              id: `workspaceAgents.index.view.recent`,
              defaultMessage: `Recently used`,
              description: `Tab for recently used agents`,
            }),
          }),
          (e[58] = L))
        : (L = e[58]),
      e[59] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((R = {
            id: `owned`,
            label: (0, $.jsx)(s, {
              id: `workspaceAgents.index.view.mine`,
              defaultMessage: `Built by me`,
              description: `Tab for agents built by the current user`,
            }),
          }),
          (e[59] = R))
        : (R = e[59]),
      (E = `directory`),
      (I =
        W == null
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
              { workspaceName: W },
            )),
      (e[3] = v?.name),
      (e[4] = _),
      (e[5] = h),
      (e[6] = t),
      (e[7] = r),
      (e[8] = y),
      (e[9] = S),
      (e[10] = C),
      (e[11] = w),
      (e[12] = T),
      (e[13] = E),
      (e[14] = D),
      (e[15] = O),
      (e[16] = k),
      (e[17] = A),
      (e[18] = j),
      (e[19] = ae),
      (e[20] = M),
      (e[21] = N),
      (e[22] = P),
      (e[23] = F),
      (e[24] = I),
      (e[25] = L),
      (e[26] = R),
      (e[27] = z),
      (e[28] = B),
      (e[29] = V),
      (e[30] = H),
      (e[31] = U),
      (e[32] = W));
  } else
    ((S = e[9]),
      (C = e[10]),
      (w = e[11]),
      (T = e[12]),
      (E = e[13]),
      (D = e[14]),
      (O = e[15]),
      (k = e[16]),
      (A = e[17]),
      (j = e[18]),
      (ae = e[19]),
      (M = e[20]),
      (N = e[21]),
      (P = e[22]),
      (F = e[23]),
      (I = e[24]),
      (L = e[25]),
      (R = e[26]),
      (z = e[27]),
      (B = e[28]),
      (V = e[29]),
      (H = e[30]),
      (U = e[31]),
      (W = e[32]));
  let G;
  e[60] !== E || e[61] !== I
    ? ((G = { id: E, label: I }), (e[60] = E), (e[61] = I), (e[62] = G))
    : (G = e[62]);
  let K;
  e[63] !== G || e[64] !== L || e[65] !== R
    ? ((K = [L, R, G]), (e[63] = G), (e[64] = L), (e[65] = R), (e[66] = K))
    : (K = e[66]);
  let q;
  e[67] !== S || e[68] !== K || e[69] !== z || e[70] !== B || e[71] !== x
    ? ((q = (0, $.jsx)(S, { ariaLabel: z, onSelect: B, options: K, selectedId: x, size: `toolbar` })),
      (e[67] = S),
      (e[68] = K),
      (e[69] = z),
      (e[70] = B),
      (e[71] = x),
      (e[72] = q))
    : (q = e[72]);
  let J;
  (e[73] !== C || e[74] !== q || e[75] !== V
    ? ((J = (0, $.jsx)(C, { inset: V, children: q })), (e[73] = C), (e[74] = q), (e[75] = V), (e[76] = J))
    : (J = e[76]),
    T.length);
  let fe = T.length > 0 ? `directory` : x,
    Y;
  e[77] !== T || e[78] !== fe || e[79] !== W
    ? ((Y = (0, $.jsx)(Re, { kind: fe, query: T, workspaceName: W })),
      (e[77] = T),
      (e[78] = fe),
      (e[79] = W),
      (e[80] = Y))
    : (Y = e[80]);
  let X;
  e[81] !== w ||
  e[82] !== D ||
  e[83] !== O ||
  e[84] !== k ||
  e[85] !== A ||
  e[86] !== j ||
  e[87] !== ae ||
  e[88] !== M ||
  e[89] !== N ||
  e[90] !== P ||
  e[91] !== J ||
  e[92] !== null ||
  e[93] !== Y ||
  e[94] !== H ||
  e[95] !== U
    ? ((X = (0, $.jsxs)(w, {
        animateContentLayout: H,
        collapseHeaderOnScroll: U,
        contentClassName: D,
        contentWidth: O,
        expandSearchWhenWrapped: k,
        headerAction: A,
        headerPlacement: j,
        headerVariant: ae,
        search: M,
        subtitle: N,
        title: P,
        children: [J, null, Y],
      })),
      (e[81] = w),
      (e[82] = D),
      (e[83] = O),
      (e[84] = k),
      (e[85] = A),
      (e[86] = j),
      (e[87] = ae),
      (e[88] = M),
      (e[89] = N),
      (e[90] = P),
      (e[91] = J),
      (e[92] = null),
      (e[93] = Y),
      (e[94] = H),
      (e[95] = U),
      (e[96] = X))
    : (X = e[96]);
  let he;
  e[97] !== o || e[98] !== i.pathname || e[99] !== r || e[100] !== l || e[101] !== f || e[102] !== c
    ? ((he =
        f != null && o != null && c != null
          ? (0, $.jsx)(
              Xe,
              {
                agentId: f,
                onClose: () => {
                  (l.delete(`agent`),
                    l.delete(`setup`),
                    r({ pathname: i.pathname, search: l.toString() }, { replace: !0, state: null }));
                },
              },
              `${o}:${c}:${f}`,
            )
          : null),
      (e[97] = o),
      (e[98] = i.pathname),
      (e[99] = r),
      (e[100] = l),
      (e[101] = f),
      (e[102] = c),
      (e[103] = he))
    : (he = e[103]);
  let ge;
  return (
    e[104] !== F || e[105] !== X || e[106] !== he
      ? ((ge = (0, $.jsxs)(`div`, { className: F, children: [X, he] })),
        (e[104] = F),
        (e[105] = X),
        (e[106] = he),
        (e[107] = ge))
      : (ge = e[107]),
    ge
  );
}
function Re(e) {
  let t = (0, Q.c)(33),
    { kind: n, query: r, workspaceName: i } = e,
    a = n === `recent` ? `used` : `created`,
    o;
  t[0] !== n || t[1] !== a || t[2] !== r
    ? ((o = n === `directory` ? { query: r } : a), (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = o))
    : (o = t[3]);
  let {
    data: c,
    isPending: l,
    isError: u,
    refetch: d,
    fetchNextPage: f,
    hasNextPage: p,
    isFetchingNextPage: m,
  } = O(Me, o);
  if (l) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(Y, { debugName: `WorkspaceAgents`, fillParent: !0 })), (t[4] = e))
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
        ? ((i = (0, $.jsx)(Ge, { isSearch: e, onRetry: n })), (t[7] = e), (t[8] = n), (t[9] = i))
        : (i = t[9]),
      i
    );
  }
  let h, g;
  if (t[10] !== c?.pages || t[11] !== n || t[12] !== r || t[13] !== i) {
    g = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = (0, Je.default)(c?.pages.flatMap(ze) ?? [], `id`);
      if (e.length === 0) {
        if (n !== `directory`) {
          let e;
          (t[16] === n ? (e = t[17]) : ((e = (0, $.jsx)(We, { kind: n })), (t[16] = n), (t[17] = e)),
            (g = e));
          break bb0;
        }
        let e;
        (t[18] === r
          ? (e = t[19])
          : ((e =
              r.length > 0
                ? (0, $.jsx)(A, {
                    layout: `page`,
                    title: (0, $.jsx)(s, {
                      id: `workspaceAgents.index.search.empty.title`,
                      defaultMessage: `No agents found for “{query}”`,
                      description: `Empty state when no Workspace Agents match a directory search`,
                      values: { query: r },
                    }),
                  })
                : (0, $.jsx)(A, {
                    layout: `page`,
                    title: (0, $.jsx)(s, {
                      id: `workspaceAgents.index.directory.empty.title`,
                      defaultMessage: `No agents in team directory`,
                      description: `Empty-state title for an empty workspace agent directory`,
                    }),
                    description: (0, $.jsx)(s, {
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
      let a;
      (t[20] !== n || t[21] !== i
        ? ((a = (e) =>
            n === `directory`
              ? (0, $.jsx)(ke, { agent: e }, e.id)
              : (0, $.jsx)(Be, { agent: e, kind: n, workspaceName: i }, e.id)),
          (t[20] = n),
          (t[21] = i),
          (t[22] = a))
        : (a = t[22]),
        (h = e.map(a)));
    }
    ((t[10] = c?.pages), (t[11] = n), (t[12] = r), (t[13] = i), (t[14] = h), (t[15] = g));
  } else ((h = t[14]), (g = t[15]));
  if (g !== Symbol.for(`react.early_return_sentinel`)) return g;
  let _ = h,
    v;
  t[23] === f ? (v = t[24]) : ((v = () => void f()), (t[23] = f), (t[24] = v));
  let y;
  t[25] !== p || t[26] !== m || t[27] !== v
    ? ((y = (0, $.jsx)(Ke, { hasNextPage: p, isFetchingNextPage: m, onLoadMore: v })),
      (t[25] = p),
      (t[26] = m),
      (t[27] = v),
      (t[28] = y))
    : (y = t[28]);
  let b = y,
    x;
  return (
    t[29] !== n || t[30] !== b || t[31] !== _
      ? ((x =
          n === `directory`
            ? (0, $.jsxs)(ve, {
                className: `flex flex-col gap-4`,
                children: [(0, $.jsx)(ge, { gap: `catalog`, children: _ }), b],
              })
            : (0, $.jsxs)(`div`, { className: `flex flex-col select-none`, children: [_, b] })),
        (t[29] = n),
        (t[30] = b),
        (t[31] = _),
        (t[32] = x))
      : (x = t[32]),
    x
  );
}
function ze(e) {
  return e.items;
}
function Be(e) {
  let t = (0, Q.c)(42),
    { agent: n, kind: r, workspaceName: i } = e,
    o = i === void 0 ? null : i,
    c = p(),
    l = a(),
    u = n.latest_published_version_id == null,
    d;
  t[0] !== n.name || t[1] !== c
    ? ((d =
        n.name.trim() ||
        c.formatMessage({
          id: `workspaceAgents.index.unnamed`,
          defaultMessage: `Unnamed agent`,
          description: `Fallback name for a Workspace Agent without a name`,
        })),
      (t[0] = n.name),
      (t[1] = c),
      (t[2] = d))
    : (d = t[2]);
  let f = d,
    m;
  t[3] === n.id ? (m = t[4]) : ((m = N(n.id)), (t[3] = n.id), (t[4] = m));
  let h = m,
    g;
  if (r === `owned`) {
    let e;
    (t[5] !== n || t[6] !== o
      ? ((e = (0, $.jsx)(He, { agent: n, workspaceName: o })), (t[5] = n), (t[6] = o), (t[7] = e))
      : (e = t[7]),
      (g = e));
  } else if (r === `recent`) {
    let e;
    (t[8] === n ? (e = t[9]) : ((e = (0, $.jsx)(Ue, { agent: n })), (t[8] = n), (t[9] = e)), (g = e));
  } else {
    let e;
    t[10] !== n.description || t[11] !== n.tagline
      ? ((e =
          n.tagline.trim() ||
          n.description.trim() ||
          (0, $.jsx)(s, {
            id: `workspaceAgents.index.noDescription`,
            defaultMessage: `No description`,
            description: `Fallback description for an agent directory row`,
          })),
        (t[10] = n.description),
        (t[11] = n.tagline),
        (t[12] = e))
      : (e = t[12]);
    let r;
    t[13] === e ? (r = t[14]) : ((r = (0, $.jsx)(`span`, { children: e })), (t[13] = e), (t[14] = r));
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(he, { className: `mx-1` })), (t[15] = i))
      : (i = t[15]);
    let a;
    t[16] === n.creator_name
      ? (a = t[17])
      : ((a =
          n.creator_name?.trim() ||
          (0, $.jsx)(s, {
            id: `workspaceAgents.index.unknownAuthor`,
            defaultMessage: `Unknown author`,
            description: `Fallback creator name for an agent directory row`,
          })),
        (t[16] = n.creator_name),
        (t[17] = a));
    let o;
    t[18] === a ? (o = t[19]) : ((o = (0, $.jsx)(`span`, { children: a })), (t[18] = a), (t[19] = o));
    let c;
    (t[20] !== r || t[21] !== o
      ? ((c = (0, $.jsxs)($.Fragment, { children: [r, i, o] })), (t[20] = r), (t[21] = o), (t[22] = c))
      : (c = t[22]),
      (g = c));
  }
  let _;
  t[23] === n.icon
    ? (_ = t[24])
    : ((_ = (0, $.jsx)(Se, { icon: n.icon, size: 40 })), (t[23] = n.icon), (t[24] = _));
  let v;
  t[25] !== n.id || t[26] !== h || t[27] !== u || t[28] !== r || t[29] !== l
    ? ((v = () => {
        if (r === `owned` && u) {
          l(h);
          return;
        }
        l(F(n.id));
      }),
      (t[25] = n.id),
      (t[26] = h),
      (t[27] = u),
      (t[28] = r),
      (t[29] = l),
      (t[30] = v))
    : (v = t[30]);
  let y = r === `owned`,
    b;
  t[31] !== n || t[32] !== y
    ? ((b = (0, $.jsx)(Ve, { agent: n, canEdit: y })), (t[31] = n), (t[32] = y), (t[33] = b))
    : (b = t[33]);
  let x;
  t[34] === g
    ? (x = t[35])
    : ((x = (0, $.jsx)(`span`, { className: `block truncate`, children: g })), (t[34] = g), (t[35] = x));
  let ee;
  return (
    t[36] !== f || t[37] !== _ || t[38] !== v || t[39] !== b || t[40] !== x
      ? ((ee = (0, $.jsx)(z, {
          ariaLabel: f,
          compactSecondLine: !0,
          hasInteractiveContent: !0,
          icon: _,
          isSelected: !1,
          onSelect: v,
          rightText: b,
          rightTextPosition: `center`,
          secondLine: x,
          title: f,
        })),
        (t[36] = f),
        (t[37] = _),
        (t[38] = v),
        (t[39] = b),
        (t[40] = x),
        (t[41] = ee))
      : (ee = t[41]),
    ee
  );
}
function Ve(e) {
  let t = (0, Q.c)(11),
    { agent: r, canEdit: i } = e,
    o = a(),
    c = r.latest_published_version_id != null,
    l;
  t[0] !== r.id || t[1] !== i || t[2] !== o
    ? ((l = i
        ? (0, $.jsx)(n, {
            color: `ghost`,
            size: `toolbar`,
            onClick: (e) => {
              (e.stopPropagation(), o(N(r.id)));
            },
            children: (0, $.jsx)(s, {
              id: `workspaceAgents.index.edit`,
              defaultMessage: `Edit`,
              description: `Action that opens an agent in the native draft editor`,
            }),
          })
        : null),
      (t[0] = r.id),
      (t[1] = i),
      (t[2] = o),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] !== r || t[5] !== i || t[6] !== c
    ? ((u = c || i ? (0, $.jsx)(Oe, { agent: r, isPublished: c }) : null),
      (t[4] = r),
      (t[5] = i),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== l || t[9] !== u
      ? ((d = (0, $.jsxs)(`span`, {
          className: `pointer-events-auto flex items-center gap-1`,
          children: [l, u],
        })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
function He(e) {
  let t = (0, Q.c)(10),
    { agent: n, workspaceName: r } = e;
  if (n.latest_published_version_id == null) {
    let e;
    return (
      t[0] === n.updated_at
        ? (e = t[1])
        : ((e = (0, $.jsx)(s, {
            id: `workspaceAgents.index.draftEdited`,
            defaultMessage: `Draft · Edited {time}`,
            description: `Status and last edit time for an unpublished agent`,
            values: { time: (0, $.jsx)(K, { dateString: n.updated_at }) },
          })),
          (t[0] = n.updated_at),
          (t[1] = e)),
      e
    );
  }
  let i;
  t[2] !== n || t[3] !== r ? ((i = qe(n, r)), (t[2] = n), (t[3] = r), (t[4] = i)) : (i = t[4]);
  let a;
  t[5] === n.updated_at
    ? (a = t[6])
    : ((a = (0, $.jsx)(K, { dateString: n.updated_at })), (t[5] = n.updated_at), (t[6] = a));
  let o;
  return (
    t[7] !== i || t[8] !== a
      ? ((o = (0, $.jsx)(s, {
          id: `workspaceAgents.index.publishedUpdated`,
          defaultMessage: `{visibility} · Updated {time}`,
          description: `Visibility and last update time for a published agent`,
          values: { visibility: i, time: a },
        })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function Ue(e) {
  let t = (0, Q.c)(7),
    { agent: n } = e,
    r = n.recent_runs?.items?.[0];
  if (n.attention_status === `blocked` || r?.status === `blocked`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(s, {
            id: `workspaceAgents.index.needsAttention`,
            defaultMessage: `Needs your attention`,
            description: `Status for a recently used agent with a blocked run`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i = n.last_used_at ?? r?.updated_at;
  if (i != null) {
    let e;
    return (
      t[1] === i
        ? (e = t[2])
        : ((e = (0, $.jsx)(s, {
            id: `workspaceAgents.index.lastUsed`,
            defaultMessage: `Used {time}`,
            description: `Last used time for an agent`,
            values: { time: (0, $.jsx)(K, { dateString: i }) },
          })),
          (t[1] = i),
          (t[2] = e)),
      e
    );
  }
  let a;
  t[3] === n.creator_name ? (a = t[4]) : ((a = n.creator_name?.trim()), (t[3] = n.creator_name), (t[4] = a));
  let o = a,
    c;
  return (
    t[5] === o
      ? (c = t[6])
      : ((c = o
          ? (0, $.jsx)(s, {
              id: `workspaceAgents.index.byCreator`,
              defaultMessage: `By {creatorName}`,
              description: `Creator byline for an agent`,
              values: { creatorName: o },
            })
          : (0, $.jsx)(s, {
              id: `workspaceAgents.index.noRecentActivity`,
              defaultMessage: `Recently used`,
              description: `Fallback status for a recently used agent`,
            })),
        (t[5] = o),
        (t[6] = c)),
    c
  );
}
function We(e) {
  let t = (0, Q.c)(11),
    { kind: n } = e,
    r = p(),
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
      ? ((o = (0, $.jsx)(A, { layout: `page`, title: i, description: a })),
        (t[8] = a),
        (t[9] = i),
        (t[10] = o))
      : (o = t[10]),
    o
  );
}
function Ge(e) {
  let t = (0, Q.c)(8),
    { isSearch: r, onRetry: i } = e,
    a = r !== void 0 && r,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a
        ? (0, $.jsx)(s, {
            id: `workspaceAgents.index.search.error.title`,
            defaultMessage: `Couldn’t search agents`,
            description: `Error shown when agents cannot be searched`,
          })
        : (0, $.jsx)(s, {
            id: `workspaceAgents.index.error.title`,
            defaultMessage: `Couldn’t load agents`,
            description: `Error shown when agents cannot be loaded`,
          })),
      (t[0] = a),
      (t[1] = o));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(s, {
        id: `workspaceAgents.index.error.retry`,
        defaultMessage: `Retry`,
        description: `Button that retries loading Workspace Agents`,
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === i
    ? (l = t[4])
    : ((l = (0, $.jsx)(n, { color: `secondary`, size: `medium`, onClick: i, children: c })),
      (t[3] = i),
      (t[4] = l));
  let u;
  return (
    t[5] !== o || t[6] !== l
      ? ((u = (0, $.jsx)(A, { layout: `page`, title: o, actions: l })), (t[5] = o), (t[6] = l), (t[7] = u))
      : (u = t[7]),
    u
  );
}
function Ke(e) {
  let t = (0, Q.c)(6),
    { hasNextPage: r, isFetchingNextPage: i, onLoadMore: a } = e;
  if (!r) return null;
  let o;
  t[0] === i
    ? (o = t[1])
    : ((o = i
        ? (0, $.jsx)(s, {
            id: `workspaceAgents.index.loadingMore`,
            defaultMessage: `Loading more agents`,
            description: `Button label while more Workspace Agents load`,
          })
        : (0, $.jsx)(s, {
            id: `workspaceAgents.index.loadMore`,
            defaultMessage: `Load more`,
            description: `Button that loads more Workspace Agents`,
          })),
      (t[0] = i),
      (t[1] = o));
  let c;
  return (
    t[2] !== i || t[3] !== a || t[4] !== o
      ? ((c = (0, $.jsx)(n, {
          className: `self-center`,
          color: `ghostActive`,
          disabled: i,
          size: `medium`,
          onClick: a,
          children: o,
        })),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o),
        (t[5] = c))
      : (c = t[5]),
    c
  );
}
function qe(e, t) {
  return e.store_visible
    ? t == null
      ? (0, $.jsx)(s, {
          id: `workspaceAgents.index.visibility.directoryFallback`,
          defaultMessage: `Published to your workspace’s directory`,
          description: `Visibility label for an agent published to a workspace directory`,
        })
      : (0, $.jsx)(s, {
          id: `workspaceAgents.index.visibility.directory`,
          defaultMessage: `Published to {workspaceName}’s directory`,
          description: `Visibility label for an agent published to the named workspace directory`,
          values: { workspaceName: t },
        })
    : e.is_public
      ? (0, $.jsx)(s, {
          id: `workspaceAgents.index.visibility.shared`,
          defaultMessage: `Shared with your workspace`,
          description: `Visibility label for an agent shared by link in the workspace`,
        })
      : (0, $.jsx)(s, {
          id: `workspaceAgents.index.visibility.private`,
          defaultMessage: `Private to you`,
          description: `Visibility label for an agent visible only to its owner`,
        });
}
var Q, Je, Ye, $, Xe;
function Ze() {
  return (Ze = e(() => {
    ((Q = C()),
      (Je = t(ee(), 1)),
      u(),
      (Ye = E()),
      b(),
      _(),
      fe(),
      j(),
      X(),
      S(),
      P(),
      f(),
      q(),
      D(),
      M(),
      I(),
      B(),
      k(),
      v(),
      H(),
      G(),
      _e(),
      De(),
      U(),
      je(),
      ae(),
      xe(),
      Ne(),
      Ie(),
      ($ = T()),
      x(),
      (Xe = r(
        async () =>
          (
            await y(
              async () => {
                let { WorkspaceAgentDirectoryDetails: e } = await import(`./details-a705f35245e0.js`);
                return { WorkspaceAgentDirectoryDetails: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
              import.meta.url,
            )
          ).WorkspaceAgentDirectoryDetails,
      )));
  }))();
}
Ze();
export { Le as WorkspaceAgentsPage };
//# sourceMappingURL=workspace-agents-page-a6f24fce6b87.js.map
