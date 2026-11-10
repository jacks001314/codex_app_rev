const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./details-df2eb5d5d7da.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./workspace-agent-detail-query-e90126e3ca29.js",
      "./workspace-agent-apps-b1c524ac4449.js",
      "./workspace-agent-icon-cf51c4c0930d.js",
      "./helpers-97e80d920c48.js",
      "./types-bf88a8ab2993.js",
      "./SparkleFill-4f53dcc10c9c.js",
      "./workspace-agent-icon-8814b33caf67.css",
      "./chatgpt_agent_directory-1e577bbd474c.js",
      "./personal-apps-2ee58ab9049d.js",
      "./app-connect-modal-by-id-ee9e7bc8d7c4.js",
      "./app-connect-modal-763ad0733e86.js",
      "./app-connect-skeleton-990edda9425c.js",
      "./app-connect-load-state-80040a1f57f3.js",
      "./apps-query-4cb3d9532588.js",
    ]),
) => i.map((i) => d[i]);
import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $st as r,
  Bst as i,
  CNt as a,
  F3 as o,
  I3 as s,
  LNt as c,
  NSt as l,
  OFt as u,
  PBt as d,
  Qst as f,
  TY as p,
  USt as m,
  VSt as h,
  XOt as g,
  XSt as _,
  Y3 as v,
  Z3 as y,
  ZSt as b,
  ck as x,
  fCt as S,
  iCt as C,
  kFt as ee,
  kH as te,
  nB as ne,
  nCt as w,
  okt as re,
  rB as T,
  rk as ie,
  tk as ae,
  tkt as E,
  zst as oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  HOn as D,
  Hcn as se,
  Hlr as O,
  Ilt as ce,
  JOr as k,
  Llt as le,
  UOn as ue,
  UOr as de,
  Ucn as fe,
  Ulr as pe,
  XEn as A,
  YEn as j,
  YOr as M,
  ZOr as N,
  bLr as me,
  do as P,
  hlt as he,
  iRr as F,
  iut as I,
  jcn as ge,
  mlt as L,
  plt as R,
  tut as z,
  tyr as B,
  uo as _e,
  wLr as V,
  wcn as H,
  x0 as U,
  xMr as W,
  y0 as G,
  yMr as ve,
  zRr as ye,
  zlt as be,
} from "./app-initial-ad16eaadf81f.js";
import { n as xe, t as K } from "./bullet-separator-fdae8fc4d5e0.js";
import { n as q, t as J } from "./card-tile-50cbf58d3a76.js";
import { n as Y, r as X, t as Se } from "./skills-page-grid-c28b3edaace8.js";
import { a as Ce, n as we, o as Te, t as Ee } from "./navigation-326e4adebcdc.js";
import { n as De, t as Oe } from "./workspace-agent-icon-cf51c4c0930d.js";
import { i as ke, n as Ae, r as je, t as Me } from "./chatgpt_agent_directory-1e577bbd474c.js";
import { n as Ne, t as Pe } from "./agent-menu-6ade040b4377.js";
function Fe(e) {
  let t = (0, Ie.c)(26),
    { agent: r } = e,
    i = n(f),
    a = m(),
    o = h(),
    s;
  t[0] === r.icon
    ? (s = t[1])
    : ((s = (0, Z.jsx)(Oe, { icon: r.icon, size: 40 })), (t[0] = r.icon), (t[1] = s));
  let c;
  t[2] === r.name
    ? (c = t[3])
    : ((c =
        r.name.trim() ||
        (0, Z.jsx)(E, {
          id: `workspaceAgents.index.unnamed`,
          defaultMessage: `Unnamed agent`,
          description: `Fallback name for a Workspace Agent without a name`,
        })),
      (t[2] = r.name),
      (t[3] = c));
  let l;
  t[4] !== r.description || t[5] !== r.tagline
    ? ((l =
        r.tagline.trim() ||
        r.description.trim() ||
        (0, Z.jsx)(E, {
          id: `workspaceAgents.index.noDescription`,
          defaultMessage: `No description`,
          description: `Fallback description for an agent directory row`,
        })),
      (t[4] = r.description),
      (t[5] = r.tagline),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === l ? (u = t[8]) : ((u = (0, Z.jsx)(`span`, { children: l })), (t[7] = l), (t[8] = u));
  let d;
  t[9] === r.creator_name
    ? (d = t[10])
    : ((d = r.creator_name?.trim()
        ? (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(E, {
              id: `workspaceAgents.discovery.by`,
              defaultMessage: `By {creatorName}`,
              description: `Creator attribution on an agent directory card`,
              values: { creatorName: r.creator_name },
            }),
          })
        : null),
      (t[9] = r.creator_name),
      (t[10] = d));
  let p;
  t[11] !== u || t[12] !== d
    ? ((p = (0, Z.jsxs)(Z.Fragment, { children: [u, d] })), (t[11] = u), (t[12] = d), (t[13] = p))
    : (p = t[13]);
  let g;
  t[14] !== r.id ||
  t[15] !== r.is_pinned ||
  t[16] !== o.pathname ||
  t[17] !== o.search ||
  t[18] !== a ||
  t[19] !== i
    ? ((g = () => {
        W(i, Me, {
          actionType: Ae.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK,
          surface: je.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY,
          agentId: r.id,
          isPinned: r.is_pinned === !0,
        });
        let e = new URLSearchParams(o.search);
        (e.set(`agent`, r.id), a({ pathname: o.pathname, search: e.toString() }));
      }),
      (t[14] = r.id),
      (t[15] = r.is_pinned),
      (t[16] = o.pathname),
      (t[17] = o.search),
      (t[18] = a),
      (t[19] = i),
      (t[20] = g))
    : (g = t[20]);
  let _;
  return (
    t[21] !== s || t[22] !== c || t[23] !== p || t[24] !== g
      ? ((_ = (0, Z.jsx)(J, {
          presentation: `catalog`,
          icon: s,
          iconContainer: !1,
          title: c,
          description: p,
          onClick: g,
        })),
        (t[21] = s),
        (t[22] = c),
        (t[23] = p),
        (t[24] = g),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
var Ie, Z;
function Le() {
  return (Le = e(() => {
    ((Ie = d()), ke(), b(), g(), l(), q(), ve(), r(), De(), (Z = c()));
  }))();
}
function Re(e, t) {
  let n = new URLSearchParams(e.search);
  return (
    n.set(`templates`, `1`),
    n.delete(`template_setup`),
    t == null ? n.delete(`template`) : n.set(`template`, t),
    { pathname: e.pathname, search: n.toString() }
  );
}
function ze(e) {
  let t = new URLSearchParams(e.search);
  for (let e of [`templates`, `template`, `template_setup`]) t.delete(e);
  return { pathname: e.pathname, search: t.toString() };
}
var Be;
function Ve() {
  return (Ve = e(() => {
    (b(),
      V(),
      B(),
      r(),
      i(),
      R(),
      (Be = S(f, (e, { get: t }) => {
        let n = t(ye),
          r = t(me);
        return {
          enabled: n != null && r != null && t(L) === !0,
          initialPageParam: null,
          queryKey:
            typeof e == `string`
              ? [`workspace-agents`, n, e, r]
              : [`workspace-agents`, `directory`, n, e.query, r],
          queryFn: ({ pageParam: t, signal: i }) => {
            if (n == null || r == null) throw Error(`Missing workspace identity`);
            return typeof e == `string`
              ? F.safeGet(`/hermes/agents`, {
                  parameters: { query: { cursor: t, limit: 50, list_type: e } },
                  signal: i,
                  expectedIdentity: { accountId: n, userId: r },
                })
              : e.query.length === 0
                ? F.safeGet(`/hermes/workspace-store/agents`, {
                    parameters: { query: { cursor: t, limit: 50 } },
                    signal: i,
                    expectedIdentity: { accountId: n, userId: r },
                  })
                : F.safeGet(`/hermes/workspace-store/agents/search`, {
                    parameters: { query: { cursor: t, limit: 50, query: e.query } },
                    signal: i,
                    expectedIdentity: { accountId: n, userId: r },
                  });
          },
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          refetchOnMount: !0,
          retry: !1,
          staleTime: oe.ONE_MINUTE,
        };
      })));
  }))();
}
function He() {
  let e = (0, Q.c)(72),
    t = re(),
    n = m(),
    r = h(),
    i = C(ye),
    a = C(me),
    [o, s] = _(),
    c;
  e[0] === o ? (c = e[1]) : ((c = o.get(`agent`)), (e[0] = o), (e[1] = c));
  let l = c,
    u = C(pe),
    d = C(he),
    { data: f } = ge(),
    p = o.get(`q`) ?? ``,
    g = o.get(`tab`),
    y = `recent`;
  g === `mine` ? (y = `owned`) : g === `directory` && (y = `directory`);
  let b;
  e[2] === s
    ? (b = e[3])
    : ((b = (e) => {
        s(
          (t) => {
            let n = new URLSearchParams(t),
              r = e.slice(0, 200);
            return (r.length === 0 ? n.delete(`q`) : n.set(`q`, r), n);
          },
          { replace: !0 },
        );
      }),
      (e[2] = s),
      (e[3] = b));
  let x = b,
    S;
  e[4] === s
    ? (S = e[5])
    : ((S = (e) => {
        s((t) => {
          let n = new URLSearchParams(t);
          return (n.set(`tab`, e === `owned` ? `mine` : e), n);
        });
      }),
      (e[4] = s),
      (e[5] = S));
  let ee = S,
    w = f?.name?.trim() || null,
    T = p.trim().slice(0, 200),
    oe = fe(T, 300),
    D;
  e[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(E, {
        id: `workspaceAgents.index.pageTitle`,
        defaultMessage: `Agents`,
        description: `Title of the Agents index page`,
      })),
      (e[6] = D))
    : (D = e[6]);
  let se = D,
    O = le,
    k = !u,
    ue = d !== !1,
    A;
  e[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, $.jsx)(E, {
        id: `workspaceAgents.buildPermissionRequired`,
        defaultMessage: `You don’t have permission to build agents`,
        description: `Tooltip on disabled agent creation or publishing actions when the current workspace does not grant agent-building permission`,
      })),
      (e[7] = A))
    : (A = e[7]);
  let j = d !== !0,
    M;
  e[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, $.jsxs)(`span`, {
        className: `inline-flex items-center`,
        children: [
          (0, $.jsx)(E, {
            id: `workspaceAgents.index.create`,
            defaultMessage: `Create`,
            description: `Button that opens the agent creation menu`,
          }),
          (0, $.jsx)(te, {}),
        ],
      })),
      (e[8] = M))
    : (M = e[8]);
  let N;
  e[9] === j
    ? (N = e[10])
    : ((N = (0, $.jsx)(v, { color: `primary`, size: `dialog`, disabled: j, children: M })),
      (e[9] = j),
      (e[10] = N));
  let P;
  e[11] === n ? (P = e[12]) : ((P = () => void n(de)), (e[11] = n), (e[12] = P));
  let F;
  e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(E, {
        id: `workspaceAgents.discovery.create`,
        defaultMessage: `Create agent`,
        description: `Button that opens custom agent creation from the directory introduction`,
      })),
      (e[13] = F))
    : (F = e[13]);
  let I;
  e[14] === P
    ? (I = e[15])
    : ((I = (0, $.jsx)(ie.Item, { onSelect: P, children: F })), (e[14] = P), (e[15] = I));
  let L;
  e[16] !== r || e[17] !== n
    ? ((L = () => void n(Re(r))), (e[16] = r), (e[17] = n), (e[18] = L))
    : (L = e[18]);
  let R;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, $.jsx)(E, {
        id: `workspaceAgents.discovery.browse`,
        defaultMessage: `Browse templates`,
        description: `Button that opens agent templates from the directory introduction`,
      })),
      (e[19] = R))
    : (R = e[19]);
  let z;
  e[20] === L
    ? (z = e[21])
    : ((z = (0, $.jsx)(ie.Item, { onSelect: L, children: R })), (e[20] = L), (e[21] = z));
  let B;
  e[22] !== N || e[23] !== I || e[24] !== z
    ? ((B = (0, $.jsxs)(ae, { align: `end`, triggerButton: N, children: [I, z] })),
      (e[22] = N),
      (e[23] = I),
      (e[24] = z),
      (e[25] = B))
    : (B = e[25]);
  let V;
  e[26] !== B || e[27] !== ue
    ? ((V = (0, $.jsx)(ne, { disabled: ue, tooltipContent: A, children: B })),
      (e[26] = B),
      (e[27] = ue),
      (e[28] = V))
    : (V = e[28]);
  let H;
  e[29] === t
    ? (H = e[30])
    : ((H = t.formatMessage({
        id: `workspaceAgents.index.search.label`,
        defaultMessage: `Search agents`,
        description: `Accessible label for the Agents search input`,
      })),
      (e[29] = t),
      (e[30] = H));
  let U;
  e[31] === t
    ? (U = e[32])
    : ((U = t.formatMessage({
        id: `workspaceAgents.index.search.placeholder`,
        defaultMessage: `Search agents`,
        description: `Placeholder for the Agents search input`,
      })),
      (e[31] = t),
      (e[32] = U));
  let W;
  e[33] !== p || e[34] !== x || e[35] !== H || e[36] !== U
    ? ((W = {
        variant: `directory`,
        id: `workspace-agents-search`,
        label: H,
        onSearchQueryChange: x,
        placeholder: U,
        searchQuery: p,
      }),
      (e[33] = p),
      (e[34] = x),
      (e[35] = H),
      (e[36] = U),
      (e[37] = W))
    : (W = e[37]);
  let G;
  (e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, $.jsx)(E, {
        id: `workspaceAgents.index.subtitle`,
        defaultMessage: `Keep work moving 24/7 with agents`,
        description: `Subtitle on the Agents index page`,
      })),
      (e[38] = G))
    : (G = e[38]),
    T.length);
  let ve =
      T.length === 0
        ? (0, $.jsx)(ce, {
            inset: !u,
            variant: `directory`,
            children: (0, $.jsx)(_e, {
              scrollable: !0,
              ariaLabel: t.formatMessage({
                id: `workspaceAgents.index.views.ariaLabel`,
                defaultMessage: `Agent views`,
                description: `Accessible label for the Agents page tabs`,
              }),
              onSelect: ee,
              tabs: [
                {
                  key: `recent`,
                  name: (0, $.jsx)(E, {
                    id: `workspaceAgents.index.view.recent`,
                    defaultMessage: `Recently used`,
                    description: `Tab for recently used agents`,
                  }),
                },
                {
                  key: `owned`,
                  name: (0, $.jsx)(E, {
                    id: `workspaceAgents.index.view.mine`,
                    defaultMessage: `Built by me`,
                    description: `Tab for agents built by the current user`,
                  }),
                },
                {
                  key: `directory`,
                  name:
                    w == null
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
                          { workspaceName: w },
                        ),
                },
              ],
              selectedKey: y,
              variant: `directory`,
            }),
          })
        : null,
    be = T.length > 0 ? `directory` : y,
    xe = T.length > 0 ? oe : ``,
    K;
  e[39] !== be || e[40] !== xe || e[41] !== w
    ? ((K = (0, $.jsx)(Ue, { kind: be, query: xe, workspaceName: w })),
      (e[39] = be),
      (e[40] = xe),
      (e[41] = w),
      (e[42] = K))
    : (K = e[42]);
  let q;
  e[43] !== O ||
  e[44] !== u ||
  e[45] !== se ||
  e[46] !== V ||
  e[47] !== W ||
  e[48] !== G ||
  e[49] !== null ||
  e[50] !== ve ||
  e[51] !== K ||
  e[52] !== k
    ? ((q = (0, $.jsxs)(O, {
        animateContentLayout: k,
        contentWidth: `directory`,
        expandSearchWhenWrapped: u,
        headerAction: V,
        headerPlacement: `inline`,
        headerVariant: `directory`,
        search: W,
        subtitle: G,
        title: se,
        children: [null, ve, K],
      })),
      (e[43] = O),
      (e[44] = u),
      (e[45] = se),
      (e[46] = V),
      (e[47] = W),
      (e[48] = G),
      (e[49] = null),
      (e[50] = ve),
      (e[51] = K),
      (e[52] = k),
      (e[53] = q))
    : (q = e[53]);
  let J;
  e[54] !== i || e[55] !== t || e[56] !== r || e[57] !== n || e[58] !== o || e[59] !== a
    ? ((J =
        (o.has(`templates`) || o.has(`template_setup`)) && i != null && a != null
          ? (0, $.jsx)(
              Ce,
              {
                accountId: i,
                userId: a,
                initialTemplateName: o.get(`template_setup`) ?? o.get(`template`),
                initialSetup: o.has(`template_setup`),
                onClose: () => void n(ze(r), { replace: !0, state: null }),
                onUse: async (e, r) => {
                  await n(`${de}?assistant=1`, { state: { workspaceAgentAssistant: Ee(e, r, t) } });
                },
              },
              `${i}:${a}`,
            )
          : null),
      (e[54] = i),
      (e[55] = t),
      (e[56] = r),
      (e[57] = n),
      (e[58] = o),
      (e[59] = a),
      (e[60] = J))
    : (J = e[60]);
  let Y;
  e[61] !== i || e[62] !== r || e[63] !== n || e[64] !== o || e[65] !== l || e[66] !== a
    ? ((Y =
        l != null && i != null && a != null
          ? (0, $.jsx)(
              tt,
              {
                agentId: l,
                onClose: () => {
                  (o.delete(`agent`),
                    o.delete(`setup`),
                    n({ pathname: r.pathname, search: o.toString() }, { replace: !0, state: null }));
                },
              },
              `${i}:${a}:${l}`,
            )
          : null),
      (e[61] = i),
      (e[62] = r),
      (e[63] = n),
      (e[64] = o),
      (e[65] = l),
      (e[66] = a),
      (e[67] = Y))
    : (Y = e[67]);
  let X;
  return (
    e[68] !== q || e[69] !== J || e[70] !== Y
      ? ((X = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-surface text-default`,
          children: [q, J, Y],
        })),
        (e[68] = q),
        (e[69] = J),
        (e[70] = Y),
        (e[71] = X))
      : (X = e[71]),
    X
  );
}
function Ue(e) {
  let t = (0, Q.c)(33),
    { kind: n, query: r, workspaceName: i } = e,
    a = n === `recent` ? `used` : `created`,
    o;
  t[0] !== n || t[1] !== a || t[2] !== r
    ? ((o = n === `directory` ? { query: r } : a), (t[0] = n), (t[1] = a), (t[2] = r), (t[3] = o))
    : (o = t[3]);
  let {
    data: s,
    isPending: c,
    isError: l,
    refetch: u,
    fetchNextPage: d,
    hasNextPage: f,
    isFetchingNextPage: p,
  } = w(Be, o);
  if (c) {
    let e;
    return (
      t[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(D, { debugName: `WorkspaceAgents`, fillParent: !0 })), (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  if (l) {
    let e = r.length > 0,
      n;
    t[5] === u ? (n = t[6]) : ((n = () => void u()), (t[5] = u), (t[6] = n));
    let i;
    return (
      t[7] !== e || t[8] !== n
        ? ((i = (0, $.jsx)(Ze, { isSearch: e, onRetry: n })), (t[7] = e), (t[8] = n), (t[9] = i))
        : (i = t[9]),
      i
    );
  }
  let m, h;
  if (t[10] !== s?.pages || t[11] !== n || t[12] !== r || t[13] !== i) {
    h = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = (0, et.default)(s?.pages.flatMap(We) ?? [], `id`);
      if (e.length === 0) {
        if (n !== `directory`) {
          let e;
          (t[16] === n ? (e = t[17]) : ((e = (0, $.jsx)(Ye, { kind: n })), (t[16] = n), (t[17] = e)),
            (h = e));
          break bb0;
        }
        let e;
        (t[18] === r
          ? (e = t[19])
          : ((e =
              r.length > 0
                ? (0, $.jsx)(j, {
                    layout: `page`,
                    title: (0, $.jsx)(E, {
                      id: `workspaceAgents.index.search.empty.title`,
                      defaultMessage: `No agents found for “{query}”`,
                      description: `Empty state when no Workspace Agents match a directory search`,
                      values: { query: r },
                    }),
                  })
                : (0, $.jsx)(j, {
                    layout: `page`,
                    title: (0, $.jsx)(E, {
                      id: `workspaceAgents.index.directory.empty.title`,
                      defaultMessage: `No agents in team directory`,
                      description: `Empty-state title for an empty workspace agent directory`,
                    }),
                    description: (0, $.jsx)(E, {
                      id: `workspaceAgents.index.directory.empty.description`,
                      defaultMessage: `List agents in the team directory so anyone from your workspace can use them`,
                      description: `Description for an empty workspace agent directory`,
                    }),
                  })),
            (t[18] = r),
            (t[19] = e)),
          (h = e));
        break bb0;
      }
      let a;
      (t[20] !== n || t[21] !== i
        ? ((a = (e) =>
            n === `directory`
              ? (0, $.jsx)(Fe, { agent: e }, e.id)
              : (0, $.jsx)(Ge, { agent: e, kind: n, workspaceName: i }, e.id)),
          (t[20] = n),
          (t[21] = i),
          (t[22] = a))
        : (a = t[22]),
        (m = e.map(a)));
    }
    ((t[10] = s?.pages), (t[11] = n), (t[12] = r), (t[13] = i), (t[14] = m), (t[15] = h));
  } else ((m = t[14]), (h = t[15]));
  if (h !== Symbol.for(`react.early_return_sentinel`)) return h;
  let g = m,
    _;
  t[23] === d ? (_ = t[24]) : ((_ = () => void d()), (t[23] = d), (t[24] = _));
  let v;
  t[25] !== f || t[26] !== p || t[27] !== _
    ? ((v = (0, $.jsx)(Qe, { hasNextPage: f, isFetchingNextPage: p, onLoadMore: _ })),
      (t[25] = f),
      (t[26] = p),
      (t[27] = _),
      (t[28] = v))
    : (v = t[28]);
  let y = v,
    b;
  return (
    t[29] !== n || t[30] !== y || t[31] !== g
      ? ((b =
          n === `directory`
            ? (0, $.jsxs)(Se, {
                className: `flex flex-col gap-4`,
                children: [(0, $.jsx)(Y, { gap: `catalog`, children: g }), y],
              })
            : (0, $.jsxs)(`div`, { className: `flex flex-col select-none`, children: [g, y] })),
        (t[29] = n),
        (t[30] = y),
        (t[31] = g),
        (t[32] = b))
      : (b = t[32]),
    b
  );
}
function We(e) {
  return e.items;
}
function Ge(e) {
  let t = (0, Q.c)(42),
    { agent: n, kind: r, workspaceName: i } = e,
    a = i === void 0 ? null : i,
    o = re(),
    s = m(),
    c = n.latest_published_version_id == null,
    l;
  t[0] !== n.name || t[1] !== o
    ? ((l =
        n.name.trim() ||
        o.formatMessage({
          id: `workspaceAgents.index.unnamed`,
          defaultMessage: `Unnamed agent`,
          description: `Fallback name for a Workspace Agent without a name`,
        })),
      (t[0] = n.name),
      (t[1] = o),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] === n.id ? (d = t[4]) : ((d = k(n.id)), (t[3] = n.id), (t[4] = d));
  let f = d,
    p;
  if (r === `owned`) {
    let e;
    (t[5] !== n || t[6] !== a
      ? ((e = (0, $.jsx)(qe, { agent: n, workspaceName: a })), (t[5] = n), (t[6] = a), (t[7] = e))
      : (e = t[7]),
      (p = e));
  } else if (r === `recent`) {
    let e;
    (t[8] === n ? (e = t[9]) : ((e = (0, $.jsx)(Je, { agent: n })), (t[8] = n), (t[9] = e)), (p = e));
  } else {
    let e;
    t[10] !== n.description || t[11] !== n.tagline
      ? ((e =
          n.tagline.trim() ||
          n.description.trim() ||
          (0, $.jsx)(E, {
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
      ? ((i = (0, $.jsx)(K, { className: `mx-1` })), (t[15] = i))
      : (i = t[15]);
    let a;
    t[16] === n.creator_name
      ? (a = t[17])
      : ((a =
          n.creator_name?.trim() ||
          (0, $.jsx)(E, {
            id: `workspaceAgents.index.unknownAuthor`,
            defaultMessage: `Unknown author`,
            description: `Fallback creator name for an agent directory row`,
          })),
        (t[16] = n.creator_name),
        (t[17] = a));
    let o;
    t[18] === a ? (o = t[19]) : ((o = (0, $.jsx)(`span`, { children: a })), (t[18] = a), (t[19] = o));
    let s;
    (t[20] !== r || t[21] !== o
      ? ((s = (0, $.jsxs)($.Fragment, { children: [r, i, o] })), (t[20] = r), (t[21] = o), (t[22] = s))
      : (s = t[22]),
      (p = s));
  }
  let h;
  t[23] === n.icon
    ? (h = t[24])
    : ((h = (0, $.jsx)(Oe, { icon: n.icon, size: 40 })), (t[23] = n.icon), (t[24] = h));
  let g;
  t[25] !== n.id || t[26] !== f || t[27] !== c || t[28] !== r || t[29] !== s
    ? ((g = () => {
        if (r === `owned` && c) {
          s(f);
          return;
        }
        s(M(n.id));
      }),
      (t[25] = n.id),
      (t[26] = f),
      (t[27] = c),
      (t[28] = r),
      (t[29] = s),
      (t[30] = g))
    : (g = t[30]);
  let _ = r === `owned`,
    v;
  t[31] !== n || t[32] !== _
    ? ((v = (0, $.jsx)(Ke, { agent: n, canEdit: _ })), (t[31] = n), (t[32] = _), (t[33] = v))
    : (v = t[33]);
  let y;
  t[34] === p
    ? (y = t[35])
    : ((y = (0, $.jsx)(`span`, { className: `block truncate`, children: p })), (t[34] = p), (t[35] = y));
  let b;
  return (
    t[36] !== u || t[37] !== h || t[38] !== g || t[39] !== v || t[40] !== y
      ? ((b = (0, $.jsx)(z, {
          ariaLabel: u,
          compactSecondLine: !0,
          hasInteractiveContent: !0,
          icon: h,
          isSelected: !1,
          onSelect: g,
          rightText: v,
          rightTextPosition: `center`,
          secondLine: y,
          title: u,
        })),
        (t[36] = u),
        (t[37] = h),
        (t[38] = g),
        (t[39] = v),
        (t[40] = y),
        (t[41] = b))
      : (b = t[41]),
    b
  );
}
function Ke(e) {
  let t = (0, Q.c)(11),
    { agent: n, canEdit: r } = e,
    i = m(),
    a = n.latest_published_version_id != null,
    o;
  t[0] !== n.id || t[1] !== r || t[2] !== i
    ? ((o = r
        ? (0, $.jsx)(v, {
            color: `ghost`,
            size: `toolbar`,
            onClick: (e) => {
              (e.stopPropagation(), i(k(n.id)));
            },
            children: (0, $.jsx)(E, {
              id: `workspaceAgents.index.edit`,
              defaultMessage: `Edit`,
              description: `Action that opens an agent in the native draft editor`,
            }),
          })
        : null),
      (t[0] = n.id),
      (t[1] = r),
      (t[2] = i),
      (t[3] = o))
    : (o = t[3]);
  let s;
  t[4] !== n || t[5] !== r || t[6] !== a
    ? ((s = a || r ? (0, $.jsx)(Pe, { agent: n, isPublished: a }) : null),
      (t[4] = n),
      (t[5] = r),
      (t[6] = a),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== o || t[9] !== s
      ? ((c = (0, $.jsxs)(`span`, {
          className: `pointer-events-auto flex items-center gap-1`,
          children: [o, s],
        })),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function qe(e) {
  let t = (0, Q.c)(10),
    { agent: n, workspaceName: r } = e;
  if (n.latest_published_version_id == null) {
    let e;
    return (
      t[0] === n.updated_at
        ? (e = t[1])
        : ((e = (0, $.jsx)(E, {
            id: `workspaceAgents.index.draftEdited`,
            defaultMessage: `Draft · Edited {time}`,
            description: `Status and last edit time for an unpublished agent`,
            values: { time: (0, $.jsx)(G, { dateString: n.updated_at }) },
          })),
          (t[0] = n.updated_at),
          (t[1] = e)),
      e
    );
  }
  let i;
  t[2] !== n || t[3] !== r ? ((i = $e(n, r)), (t[2] = n), (t[3] = r), (t[4] = i)) : (i = t[4]);
  let a;
  t[5] === n.updated_at
    ? (a = t[6])
    : ((a = (0, $.jsx)(G, { dateString: n.updated_at })), (t[5] = n.updated_at), (t[6] = a));
  let o;
  return (
    t[7] !== i || t[8] !== a
      ? ((o = (0, $.jsx)(E, {
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
function Je(e) {
  let t = (0, Q.c)(7),
    { agent: n } = e,
    r = n.recent_runs?.items?.[0];
  if (n.attention_status === `blocked` || r?.status === `blocked`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(E, {
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
        : ((e = (0, $.jsx)(E, {
            id: `workspaceAgents.index.lastUsed`,
            defaultMessage: `Used {time}`,
            description: `Last used time for an agent`,
            values: { time: (0, $.jsx)(G, { dateString: i }) },
          })),
          (t[1] = i),
          (t[2] = e)),
      e
    );
  }
  let a;
  t[3] === n.creator_name ? (a = t[4]) : ((a = n.creator_name?.trim()), (t[3] = n.creator_name), (t[4] = a));
  let o = a,
    s;
  return (
    t[5] === o
      ? (s = t[6])
      : ((s = o
          ? (0, $.jsx)(E, {
              id: `workspaceAgents.index.byCreator`,
              defaultMessage: `By {creatorName}`,
              description: `Creator byline for an agent`,
              values: { creatorName: o },
            })
          : (0, $.jsx)(E, {
              id: `workspaceAgents.index.noRecentActivity`,
              defaultMessage: `Recently used`,
              description: `Fallback status for a recently used agent`,
            })),
        (t[5] = o),
        (t[6] = s)),
    s
  );
}
function Ye(e) {
  let t = (0, Q.c)(30),
    { kind: n } = e,
    r = re(),
    i = m(),
    a = h(),
    o = C(he),
    [, s] = _(),
    c,
    l;
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
      (c = e));
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
      (l = n));
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
      (c = e));
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
      (l = n));
  }
  let u = o !== !0,
    d;
  t[8] === i ? (d = t[9]) : ((d = () => void i(de)), (t[8] = i), (t[9] = d));
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(E, {
        id: `workspaceAgents.discovery.create`,
        defaultMessage: `Create agent`,
        description: `Button that opens custom agent creation from the directory introduction`,
      })),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== u || t[12] !== d
    ? ((p = (0, $.jsx)(v, { color: `primary`, size: `dialog`, disabled: u, onClick: d, children: f })),
      (t[11] = u),
      (t[12] = d),
      (t[13] = p))
    : (p = t[13]);
  let g;
  t[14] !== n || t[15] !== s
    ? ((g =
        n === `recent`
          ? (0, $.jsx)(v, {
              color: `outlineSurface`,
              size: `dialog`,
              onClick: () => s(Xe),
              children: (0, $.jsx)(E, {
                id: `workspaceAgents.index.browseDirectory`,
                defaultMessage: `Browse team directory`,
                description: `Button that switches the empty recently used Agents view to the team directory`,
              }),
            })
          : null),
      (t[14] = n),
      (t[15] = s),
      (t[16] = g))
    : (g = t[16]);
  let y;
  t[17] !== o || t[18] !== n || t[19] !== a || t[20] !== i
    ? ((y =
        n === `owned` && o === !0
          ? (0, $.jsx)(v, {
              color: `outlineSurface`,
              size: `dialog`,
              onClick: () => void i(Re(a)),
              children: (0, $.jsx)(E, {
                id: `workspaceAgents.discovery.browse`,
                defaultMessage: `Browse templates`,
                description: `Button that opens agent templates from the directory introduction`,
              }),
            })
          : null),
      (t[17] = o),
      (t[18] = n),
      (t[19] = a),
      (t[20] = i),
      (t[21] = y))
    : (y = t[21]);
  let b;
  t[22] !== p || t[23] !== g || t[24] !== y
    ? ((b = (0, $.jsxs)($.Fragment, { children: [p, g, y] })),
      (t[22] = p),
      (t[23] = g),
      (t[24] = y),
      (t[25] = b))
    : (b = t[25]);
  let x;
  return (
    t[26] !== l || t[27] !== b || t[28] !== c
      ? ((x = (0, $.jsx)(j, { layout: `outlined`, title: c, description: l, actions: b })),
        (t[26] = l),
        (t[27] = b),
        (t[28] = c),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function Xe(e) {
  let t = new URLSearchParams(e);
  return (t.set(`tab`, `directory`), t);
}
function Ze(e) {
  let t = (0, Q.c)(8),
    { isSearch: n, onRetry: r } = e,
    i = n !== void 0 && n,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i
        ? (0, $.jsx)(E, {
            id: `workspaceAgents.index.search.error.title`,
            defaultMessage: `Couldn’t search agents`,
            description: `Error shown when agents cannot be searched`,
          })
        : (0, $.jsx)(E, {
            id: `workspaceAgents.index.error.title`,
            defaultMessage: `Couldn’t load agents`,
            description: `Error shown when agents cannot be loaded`,
          })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(E, {
        id: `workspaceAgents.index.error.retry`,
        defaultMessage: `Retry`,
        description: `Button that retries loading Workspace Agents`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, $.jsx)(v, { color: `secondary`, size: `dialog`, onClick: r, children: o })),
      (t[3] = r),
      (t[4] = s));
  let c;
  return (
    t[5] !== a || t[6] !== s
      ? ((c = (0, $.jsx)(j, { layout: `page`, title: a, actions: s })), (t[5] = a), (t[6] = s), (t[7] = c))
      : (c = t[7]),
    c
  );
}
function Qe(e) {
  let t = (0, Q.c)(6),
    { hasNextPage: n, isFetchingNextPage: r, onLoadMore: i } = e;
  if (!n) return null;
  let a;
  t[0] === r
    ? (a = t[1])
    : ((a = r
        ? (0, $.jsx)(E, {
            id: `workspaceAgents.index.loadingMore`,
            defaultMessage: `Loading more agents`,
            description: `Button label while more Workspace Agents load`,
          })
        : (0, $.jsx)(E, {
            id: `workspaceAgents.index.loadMore`,
            defaultMessage: `Load more`,
            description: `Button that loads more Workspace Agents`,
          })),
      (t[0] = r),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== i || t[4] !== a
      ? ((o = (0, $.jsx)(v, {
          className: `self-center`,
          color: `ghostActive`,
          disabled: r,
          size: `dialog`,
          onClick: i,
          children: a,
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
function $e(e, t) {
  return e.store_visible
    ? t == null
      ? (0, $.jsx)(E, {
          id: `workspaceAgents.index.visibility.directoryFallback`,
          defaultMessage: `Published to your workspace’s directory`,
          description: `Visibility label for an agent published to a workspace directory`,
        })
      : (0, $.jsx)(E, {
          id: `workspaceAgents.index.visibility.directory`,
          defaultMessage: `Published to {workspaceName}’s directory`,
          description: `Visibility label for an agent published to the named workspace directory`,
          values: { workspaceName: t },
        })
    : e.is_public
      ? (0, $.jsx)(E, {
          id: `workspaceAgents.index.visibility.shared`,
          defaultMessage: `Shared with your workspace`,
          description: `Visibility label for an agent shared by link in the workspace`,
        })
      : (0, $.jsx)(E, {
          id: `workspaceAgents.index.visibility.private`,
          defaultMessage: `Private to you`,
          description: `Visibility label for an agent visible only to its owner`,
        });
}
var Q, et, $, tt;
function nt() {
  return (nt = e(() => {
    ((Q = d()),
      (et = t(a(), 1)),
      b(),
      g(),
      l(),
      V(),
      H(),
      xe(),
      y(),
      x(),
      U(),
      p(),
      A(),
      o(),
      be(),
      I(),
      P(),
      T(),
      ue(),
      O(),
      X(),
      se(),
      Ne(),
      R(),
      we(),
      Te(),
      Le(),
      N(),
      De(),
      Ve(),
      ($ = c()),
      ee(),
      (tt = s(
        async () =>
          (
            await u(
              async () => {
                let { WorkspaceAgentDirectoryDetails: e } = await import(`./details-df2eb5d5d7da.js`);
                return { WorkspaceAgentDirectoryDetails: e };
              },
              __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
              import.meta.url,
            )
          ).WorkspaceAgentDirectoryDetails,
      )));
  }))();
}
nt();
export { He as WorkspaceAgentsPage };
//# sourceMappingURL=workspace-agents-page-33627bcab80d.js.map
