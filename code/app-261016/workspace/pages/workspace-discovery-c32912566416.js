import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  FBt as i,
  GK as a,
  HO as o,
  IO as s,
  JO as c,
  KO as l,
  LNt as u,
  MNt as d,
  NNt as f,
  PBt as p,
  Pit as m,
  Qit as h,
  Qst as g,
  RO as _,
  TY as v,
  Vrt as y,
  WO as ee,
  XOt as b,
  Y3 as x,
  Z3 as te,
  ZSt as ne,
  ew as S,
  jit as re,
  nCt as ie,
  nat as ae,
  okt as oe,
  qO as C,
  qrt as se,
  tkt as w,
  vst as ce,
  yst as le,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  C2t as ue,
  E2t as de,
  Ejr as fe,
  Gct as pe,
  Hcn as T,
  IWn as me,
  S2t as E,
  SRn as he,
  T2t as D,
  Tcn as ge,
  Ucn as _e,
  Uct as ve,
  XUn as O,
  Y2 as ye,
  Z2 as be,
  b2t as xe,
  bRn as Se,
  dBt as Ce,
  dVt as we,
  fVt as Te,
  hut as Ee,
  iRr as De,
  imr as Oe,
  jcn as ke,
  mut as Ae,
  oon as k,
  rmr as je,
  sBr as Me,
  son as Ne,
  tLr as Pe,
  tyr as Fe,
  uBt as Ie,
  uVt as Le,
  v2t as A,
  v4t as Re,
  w2t as ze,
  wBt as Be,
  wcn as Ve,
  x2t as He,
  xBt as Ue,
  xMr as We,
  xjr as Ge,
  y2t as j,
  yMr as Ke,
  yjr as M,
} from "./app-initial-ad16eaadf81f.js";
import { c as qe, f as Je, r as Ye, s as Xe } from "./workspace-2b6b070f8f00.js";
import { n as Ze, t as Qe } from "./workspace-picker-row-c31eb90f1084.js";
import { i as N, n as $e, r as et, t as tt } from "./workspace-identifier-79e2a97aa9b9.js";
import { a as nt, i as rt, n as it, o as at, s as P, t as F } from "./queries-216aaf6d66eb.js";
var ot, st, ct, lt, I;
function ut() {
  return (ut = e(() => {
    ((ot = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryFullscreenViewed` }),
      (st = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryFullscreenExit` }),
      (ct = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryRequestHovered` }),
      (lt = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryRequestClicked` }),
      (I = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryModalShown` }));
  }))();
}
function dt(e) {
  let t = (0, ft.c)(15),
    { workspace: n, status: r, layout: i, busy: a, onClick: o, onHover: s } = e,
    c = r === `requested` || (r == null && n.requested),
    l;
  if (r === `joined`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(w, {
          id: `workspaceDiscovery.openJoined`,
          defaultMessage: `Open workspace`,
          description: `Button in workspace discovery after membership is confirmed; retries opening the workspace without joining again`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (l = e));
  } else if (r === `refresh_required`) {
    let e;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(w, {
          id: `workspaceDiscovery.refreshStatus`,
          defaultMessage: `Refresh status`,
          description: `Button in workspace discovery that checks the result of an uncertain join or request without resubmitting it`,
        })),
        (t[1] = e))
      : (e = t[1]),
      (l = e));
  } else if (c) {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, L.jsx)(w, {
          id: `workspaceDiscovery.requested`,
          defaultMessage: `Requested`,
          description: `Workspace access has already been requested`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (l = e));
  } else if (n.auto_accept_requests) {
    let e;
    (t[3] === i
      ? (e = t[4])
      : ((e =
          i === `single`
            ? (0, L.jsx)(w, {
                id: `workspaceDiscovery.joinWorkspace`,
                defaultMessage: `Join workspace`,
                description: `Primary button in workspace discovery; joins the selected workspace immediately`,
              })
            : (0, L.jsx)(w, {
                id: `workspaceDiscovery.join`,
                defaultMessage: `Join`,
                description: `Join a discoverable workspace immediately`,
              })),
        (t[3] = i),
        (t[4] = e)),
      (l = e));
  } else {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e =
          i === `legacy`
            ? (0, L.jsx)(w, {
                id: `workspaceDiscovery.request`,
                defaultMessage: `Request`,
                description: `Request permission to join a workspace`,
              })
            : (0, L.jsx)(w, {
                id: `workspaceDiscovery.requestToJoin`,
                defaultMessage: `Request to join`,
                description: `Primary button in workspace discovery; sends a membership request to workspace administrators`,
              })),
        (t[5] = i),
        (t[6] = e)),
      (l = e));
  }
  let u = i === `legacy` ? `secondary` : `primary`,
    d = i === `single` ? `onboardingAction` : `dialogAction`,
    f = a || c,
    p = r === `pending`,
    m;
  return (
    t[7] !== l || t[8] !== o || t[9] !== s || t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== p
      ? ((m = (0, L.jsx)(x, {
          color: u,
          size: d,
          disabled: f,
          loading: p,
          onClick: o,
          onFocus: s,
          onPointerEnter: s,
          children: l,
        })),
        (t[7] = l),
        (t[8] = o),
        (t[9] = s),
        (t[10] = u),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p),
        (t[14] = m))
      : (m = t[14]),
    m
  );
}
var ft, L;
function R() {
  return (R = e(() => {
    ((ft = p()), b(), te(), (L = u()));
  }))();
}
function z(e, t, n, r) {
  We(e, ht[t], (e) => ({
    source: n.source,
    beaconId: n.beaconAttribution?.beaconId,
    copyVariant: n.beaconAttribution?.copyVariant,
    joinFlow: `discovery`,
    platform: `web`,
    emailDomainType: n.emailDomainType,
    existingWorkspaceCount: h(n.existingWorkspaceCount),
    joinableWorkspaceCount: h(n.joinableWorkspaceCount),
    hasJoinableWorkspaces: n.hasJoinableWorkspaces,
    ts: new Date().toISOString(),
    origin: `chat`,
    appVersion: e?.appVersion,
    ...(t === `exit` ? { exitAction: `open_workspace` } : {}),
    ...r,
  }));
}
function pt(e, t) {
  We(e, O, { currentPlanType: t ?? `unknown` });
}
function mt(e, t, n, r, i) {
  let a = r === `action_succeeded` || r === `action_failed`;
  We(e, ue, {
    flowId: t,
    beaconId: i.beaconAttribution?.beaconId,
    copyVariant: i.beaconAttribution?.copyVariant,
    inviteId: i.inviteId,
    requestOutcome: i.requestOutcome,
    actionType: j.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_JOIN_DISCOVERABLE_WORKSPACE,
    surface: D.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_WORKSPACE_DISCOVERY,
    actorRole: xe.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_NON_MEMBER,
    targetScope: de.CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_INDIVIDUAL,
    targetWorkspaceId: n,
    affectedTargetCount: h(1),
    stepType: B[r],
    capacityResult: i.capacity == null ? void 0 : V[i.capacity],
    fulfillmentType: i.fulfillment == null ? void 0 : H[i.fulfillment],
    successfulTargetCount: a ? h(Number(r === `action_succeeded`)) : void 0,
    failedTargetCount: a ? h(Number(r === `action_failed`)) : void 0,
    actionFailureType:
      r === `action_failed` ? A.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_MUTATION_FAILED : void 0,
  });
}
var ht, B, V, H;
function U() {
  return (U = e(() => {
    (me(),
      Re(),
      ut(),
      ae(),
      Ke(),
      (ht = { viewed: ot, exit: st, clicked: lt, hovered: ct }),
      (B = {
        action_initiated: ze.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_INITIATED,
        capacity_evaluated: ze.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_EVALUATED,
        action_succeeded: ze.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_SUCCEEDED,
        action_failed: ze.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_FAILED,
      }),
      (V = {
        workspace_full: He.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_WORKSPACE_FULL,
        seat_available: He.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_SEAT_AVAILABLE,
        not_evaluated: He.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_NOT_EVALUATED,
      }),
      (H = {
        direct_join: E.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_DIRECT_JOIN,
        approval_request: E.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_APPROVAL_REQUEST,
      }));
  }))();
}
function gt(e) {
  let t = (0, W.c)(40),
    { existingCount: n, email: r, loading: i, searchable: a, featuredWorkspace: o, children: s } = e,
    c = a !== void 0 && a,
    u = fe();
  if (c) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(w, {
          id: `workspaceDiscovery.search.title`,
          defaultMessage: `Find a workspace`,
          description: `Title of the searchable workspace discovery dialog`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n = e;
    if (o != null) {
      let e;
      (t[1] === o.auto_accept_requests
        ? (e = t[2])
        : ((e = o.auto_accept_requests
            ? (0, G.jsx)(w, {
                id: `workspaceDiscovery.single.joinTitle`,
                defaultMessage: `Join your team’s workspace`,
                description: `Title of workspace discovery when one workspace is available to join immediately`,
              })
            : (0, G.jsx)(w, {
                id: `workspaceDiscovery.single.requestTitle`,
                defaultMessage: `Request to join your team’s workspace`,
                description: `Title of workspace discovery when one workspace requires administrator approval`,
              })),
          (t[1] = o.auto_accept_requests),
          (t[2] = e)),
        (n = e));
    }
    let r;
    t[3] === o
      ? (r = t[4])
      : ((r =
          o == null
            ? null
            : (0, G.jsxs)(`div`, {
                className: `flex flex-col items-center gap-2 bg-info-surface px-8 py-8`,
                children: [
                  (0, G.jsx)(k, { alt: ``, name: o.name, src: o.profile_picture_url, size: `picker` }),
                  (0, G.jsx)(`p`, { className: `text-center font-semibold break-words`, children: o.name }),
                  o.member_count == null
                    ? null
                    : (0, G.jsx)(`p`, {
                        className: `text-sm text-secondary`,
                        children: (0, G.jsx)(w, {
                          id: `workspaceDiscovery.members`,
                          defaultMessage: `{count, plural, one {# member} other {# members}}`,
                          description: `Number of members in a workspace`,
                          values: { count: o.member_count },
                        }),
                      }),
                ],
              })),
        (t[3] = o),
        (t[4] = r));
    let i = o == null ? `contents` : `flex flex-col gap-6 px-8`,
      a;
    t[5] === n ? (a = t[6]) : ((a = (0, G.jsx)(C, { children: n })), (t[5] = n), (t[6] = a));
    let c = o == null ? void 0 : `text-center`,
      u = o == null ? void 0 : `text-center`,
      d;
    t[7] === o
      ? (d = t[8])
      : ((d = (0, G.jsx)(l, {
          children:
            o == null
              ? (0, G.jsx)(w, {
                  id: `workspaceDiscovery.search.domainSubtitle`,
                  defaultMessage: `There are existing ChatGPT Business workspaces on your domain`,
                  description: `Subtitle in workspace discovery explaining that the listed business workspaces share the signed-in user’s email domain`,
                })
              : (0, G.jsx)(w, {
                  id: `workspaceDiscovery.single.subtitle`,
                  defaultMessage: `Work alongside your teammates with shared skills and context in one secure workspace`,
                  description: `Description beneath the single-workspace discovery title explaining team collaboration`,
                }),
        })),
        (t[7] = o),
        (t[8] = d));
    let f = o == null ? `base` : `sm`,
      p;
    t[9] !== a || t[10] !== c || t[11] !== u || t[12] !== d || t[13] !== f
      ? ((p = (0, G.jsx)(_, {
          title: a,
          titleClassName: c,
          subtitleClassName: u,
          subtitle: d,
          subtitleTone: `secondary`,
          subtitleSize: f,
        })),
        (t[9] = a),
        (t[10] = c),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]);
    let m;
    t[15] !== s || t[16] !== p || t[17] !== i
      ? ((m = (0, G.jsxs)(`div`, { className: i, children: [p, s] })),
        (t[15] = s),
        (t[16] = p),
        (t[17] = i),
        (t[18] = m))
      : (m = t[18]);
    let h;
    return (
      t[19] !== m || t[20] !== r
        ? ((h = (0, G.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [r, m] })),
          (t[19] = m),
          (t[20] = r),
          (t[21] = h))
        : (h = t[21]),
      h
    );
  }
  let d;
  t[22] === u ? (d = t[23]) : ((d = M(u, `2133596510`).get(`enabled`, !1)), (t[22] = u), (t[23] = d));
  let f = d,
    p;
  if (i || n === 0) {
    let e;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(w, {
          id: `workspaceDiscovery.joinTeamTitle`,
          defaultMessage: `Join your team’s workspace`,
          description: `Heading when no accessible or requestable workspace is available`,
        })),
        (t[24] = e))
      : (e = t[24]),
      (p = e));
  } else {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, G.jsx)(w, {
          id: `workspaceDiscovery.launchTitle`,
          defaultMessage: `Launch a workspace`,
          description: `Heading when only accessible workspaces remain`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (p = e));
  }
  let m = null;
  if (!i && n > 0) {
    let e;
    (t[26] !== r || t[27] !== n
      ? ((e = (0, G.jsx)(w, {
          id: `workspaceDiscovery.accessCount`,
          defaultMessage: `{email} has access to {count, plural, one {# workspace} other {# workspaces}}`,
          description: `Number of accessible workspaces for the signed-in email`,
          values: { email: r, count: n },
        })),
        (t[26] = r),
        (t[27] = n),
        (t[28] = e))
      : (e = t[28]),
      (m = e));
  }
  let h;
  t[29] === p ? (h = t[30]) : ((h = (0, G.jsx)(C, { children: p })), (t[29] = p), (t[30] = h));
  let g;
  t[31] === f
    ? (g = t[32])
    : ((g = f
        ? (0, G.jsxs)(`span`, {
            children: [
              (0, G.jsx)(w, {
                id: `workspaceDiscovery.collaboration`,
                defaultMessage: `Securely collaborate with coworkers using{lineBreak}tools like projects and custom GPTs`,
                description: `Optional workspace collaboration benefits shown above the workspace counts`,
                values: { lineBreak: (0, G.jsx)(`br`, {}) },
              }),
              (0, G.jsx)(`br`, {}),
            ],
          })
        : null),
      (t[31] = f),
      (t[32] = g));
  let v;
  t[33] !== m || t[34] !== g
    ? ((v = (0, G.jsxs)(G.Fragment, { children: [g, m] })), (t[33] = m), (t[34] = g), (t[35] = v))
    : (v = t[35]);
  let y;
  return (
    t[36] !== s || t[37] !== h || t[38] !== v
      ? ((y = (0, G.jsx)(ve, { title: h, subtitle: v, children: s })),
        (t[36] = s),
        (t[37] = h),
        (t[38] = v),
        (t[39] = y))
      : (y = t[39]),
    y
  );
}
var W, G;
function _t() {
  return (_t = e(() => {
    ((W = p()), b(), Ne(), c(), o(), pe(), Ge(), (G = u()));
  }))();
}
function vt(e) {
  let t = (0, bt.c)(12),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ memberCount: n, workspaceId: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  if (r.personal) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(w, {
          id: `workspaceDiscovery.personal`,
          defaultMessage: `Personal workspace`,
          description: `The user's personal ChatGPT workspace`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (a = e));
  } else if (i != null) {
    let e;
    (t[5] === i ? (e = t[6]) : ((e = (0, K.jsx)(yt, { workspaceId: i })), (t[5] = i), (t[6] = e)), (a = e));
  } else if (n != null) {
    let e;
    (t[7] === n
      ? (e = t[8])
      : ((e = (0, K.jsx)(w, {
          id: `workspaceDiscovery.members`,
          defaultMessage: `{count, plural, one {# member} other {# members}}`,
          description: `Number of members in a workspace`,
          values: { count: n },
        })),
        (t[7] = n),
        (t[8] = e)),
      (a = e));
  }
  let o;
  return (
    t[9] !== a || t[10] !== r
      ? ((o = (0, K.jsx)(Qe, { ...r, description: a })), (t[9] = a), (t[10] = r), (t[11] = o))
      : (o = t[11]),
    o
  );
}
function yt(e) {
  let t = (0, bt.c)(8),
    { workspaceId: n } = e,
    { userId: r } = Oe(),
    i = r ?? ``,
    a;
  t[0] !== i || t[1] !== n
    ? ((a = { userId: i, workspaceId: n }), (t[0] = i), (t[1] = n), (t[2] = a))
    : (a = t[2]);
  let o = r != null,
    s;
  t[3] === o ? (s = t[4]) : ((s = { enabled: o }), (t[3] = o), (t[4] = s));
  let { data: c, isLoading: l } = ie(it, a, s);
  if (l) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, K.jsx)(`span`, {
            role: `status`,
            children: (0, K.jsx)(w, {
              id: `workspaceDiscovery.membersLoading`,
              defaultMessage: `Loading members…`,
              description: `Workspace member count is loading`,
            }),
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (c == null) return null;
  let u;
  return (
    t[6] === c
      ? (u = t[7])
      : ((u = (0, K.jsx)(w, {
          id: `workspaceDiscovery.members`,
          defaultMessage: `{count, plural, one {# member} other {# members}}`,
          description: `Number of members in a workspace`,
          values: { count: c },
        })),
        (t[6] = c),
        (t[7] = u)),
    u
  );
}
var bt, K;
function xt() {
  return (xt = e(() => {
    ((bt = p()), ne(), b(), je(), Ze(), F(), (K = u()));
  }))();
}
function q(e) {
  let t = (0, Rt.c)(10),
    { userId: n, accountId: r } = Oe(),
    i = n ?? null,
    a = r ?? null,
    o;
  t[0] !== i || t[1] !== a
    ? ((o = { userId: i, accountId: a }), (t[0] = i), (t[1] = a), (t[2] = o))
    : (o = t[2]);
  let { data: s } = ie(ye, o),
    c;
  t[3] !== r || t[4] !== s?.email || t[5] !== n
    ? ((c = JSON.stringify([n, r, s?.email])), (t[3] = r), (t[4] = s?.email), (t[5] = n), (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== e || t[8] !== c
      ? ((l = (0, X.jsx)(St, { ...e }, c)), (t[7] = e), (t[8] = c), (t[9] = l))
      : (l = t[9]),
    l
  );
}
function St(e) {
  let r = (0, Rt.c)(81),
    { mode: i, section: o, onClose: c, beaconOrigin: l, upgradeOrigin: u } = e,
    f = i === void 0 ? `blocking` : i,
    p = o === void 0 ? `both` : o,
    m = n(g),
    h = oe(),
    { userId: _, accountId: v } = Oe(),
    y = l?.userId === _ && l?.accountId === v ? l?.attribution : void 0,
    b = _ ?? null,
    te = v ?? null,
    ne;
  r[0] !== b || r[1] !== te
    ? ((ne = { userId: b, accountId: te }), (r[0] = b), (r[1] = te), (r[2] = ne))
    : (ne = r[2]);
  let { data: S, isLoading: ae } = ie(ye, ne),
    C = p !== `existing`,
    [ce, ue] = (0, Y.useState)(``),
    de;
  r[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = { page: 0, continued: !1 }), (r[3] = de))
    : (de = r[3]);
  let [pe, T] = (0, Y.useState)(de),
    me;
  r[4] === ce ? (me = r[5]) : ((me = ce.trim().toLowerCase()), (r[4] = ce), (r[5] = me));
  let E = me,
    D = _e(E, 300),
    ve = E !== D,
    { data: O, refetch: be, isLoading: xe, isError: Se } = ge(),
    we = Se && O == null,
    Ee;
  r[6] !== O || r[7] !== p || r[8] !== S
    ? ((Ee = p !== `existing` && S != null && at(S) && O != null && !O.accounts?.some(Lt)),
      (r[6] = O),
      (r[7] = p),
      (r[8] = S),
      (r[9] = Ee))
    : (Ee = r[9]);
  let k = Ee,
    je = _ ?? null,
    Me = S?.email ?? null,
    Ne;
  r[10] !== D || r[11] !== Me || r[12] !== je
    ? ((Ne = { userId: je, email: Me, query: D }), (r[10] = D), (r[11] = Me), (r[12] = je), (r[13] = Ne))
    : (Ne = r[13]);
  let Pe = Ne,
    Fe = k && !ve,
    Ie;
  r[14] === Fe ? (Ie = r[15]) : ((Ie = { enabled: Fe }), (r[14] = Fe), (r[15] = Ie));
  let {
      data: A,
      isLoading: Re,
      isRefetching: ze,
      isError: Be,
      isFetchingNextPage: Ve,
      fetchNextPage: He,
      hasNextPage: We,
    } = ie(rt, Pe, Ie),
    Ge = Re || ve || ze,
    j = Be,
    Ke;
  r[16] === A?.pages ? (Ke = r[17]) : ((Ke = A?.pages.some(It)), (r[16] = A?.pages), (r[17] = Ke));
  let M = Ke,
    Xe = A?.pages.at(-1)?.completion === `complete`,
    Ze = A?.pages.flatMap(Ft),
    { data: Qe } = ke(),
    N = fe(),
    $e = Ce(),
    it;
  r[18] === Symbol.for(`react.memo_cache_sentinel`) ? ((it = {}), (r[18] = it)) : (it = r[18]);
  let [P, F] = (0, Y.useState)(it),
    [ot, st] = (0, Y.useState)(!1),
    [ct, lt] = (0, Y.useState)(null),
    I = (0, Y.useRef)(!1),
    ut = (0, Y.useRef)(!1),
    ft = (0, Y.useRef)(new Set()),
    L = (0, Y.useRef)(!0),
    R;
  r[19] === P
    ? (R = r[20])
    : ((R = (e) => !e.isDeactivated && P[e.workspaceAccountId]?.status !== `pending`),
      (r[19] = P),
      (r[20] = R));
  let ht = Ye(O).filter(R),
    B = new Map((k && !Ge ? (Ze ?? []) : []).map(Pt));
  for (let { workspace: e } of Object.values(P))
    k && !ve && e.name.toLowerCase().includes(D) && B.set(e.id, e);
  let V = ht.filter(
      (e) =>
        (p !== `discoverable` || B.has(e.workspaceAccountId)) &&
        (!k ||
          E === `` ||
          B.has(e.workspaceAccountId) ||
          (e.isPersonalWorkspace ? (S?.name ?? e.workspaceName) : e.workspaceName)
            ?.toLowerCase()
            .includes(E)),
    ),
    H = Array.from(B.values()).filter((e) => !V.some((t) => t.workspaceAccountId === e.id)),
    U = [...V.filter((e) => !B.has(e.workspaceAccountId)).map(Nt), ...B.keys()],
    W = Math.min(pe.page, Math.max(0, Math.ceil(U.length / zt) - 1)),
    G = (W + 1) * zt,
    _t = U.length > G,
    yt = new Set(U.slice(W * zt, G)),
    bt = k ? V.filter((e) => yt.has(e.workspaceAccountId)) : V,
    K = k ? H.filter((e) => yt.has(e.id)) : H,
    xt = [...V.filter(Mt).map(jt), ...H.map(At)],
    q = xe || (k && Ge) || ae;
  !q && pe.page !== W && T({ ...pe, page: W });
  let St = new Map(
      (q ? [] : xt).map((e) => {
        let t = et(N, e.id, e.name, xt);
        return [
          e.id,
          t == null
            ? void 0
            : (0, X.jsx)(
                tt,
                {
                  workspaceId: e.id,
                  shortId: t,
                  sameNameWorkspaceIds: xt.filter((t) => t.name === e.name).map(kt),
                  accountId: V.some((t) => t.workspaceAccountId === e.id) ? (v ?? null) : null,
                },
                e.id,
              ),
        ];
      }),
    ),
    J = C && !q && !j && Xe && !M && ce.length === 0 && V.length === 0 && H.length === 1 ? H[0] : void 0,
    Tt = `first_login`;
  (f === `dismissible` ? (Tt = `find_workspaces`) : p === `existing` && (Tt = `should_select_workspace`),
    u?.userId === _ && u.accountId === v && (Tt = u.source));
  let Z = {
      source: Tt,
      beaconAttribution: y,
      emailDomainType: S?.email_domain_type ?? void 0,
      existingWorkspaceCount: V.length,
      joinableWorkspaceCount: H.length,
      hasJoinableWorkspaces: H.length > 0,
    },
    Vt,
    Ht;
  (r[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = () => (
        (L.current = !0),
        () => {
          L.current = !1;
        }
      )),
      (Ht = []),
      (r[21] = Vt),
      (r[22] = Ht))
    : ((Vt = r[21]), (Ht = r[22])),
    (0, Y.useEffect)(Vt, Ht));
  let Ut = (0, Y.useEffectEvent)(() => z(m, `viewed`, Z)),
    Wt;
  r[23] !== q || r[24] !== Ut
    ? ((Wt = () => {
        ut.current || q || ((ut.current = !0), Ut());
      }),
      (r[23] = q),
      (r[24] = Ut),
      (r[25] = Wt))
    : (Wt = r[25]);
  let Gt;
  (r[26] === q ? (Gt = r[27]) : ((Gt = [q]), (r[26] = q), (r[27] = Gt)), (0, Y.useEffect)(Wt, Gt));
  let Kt;
  r[28] !== y?.beaconId || r[29] !== y?.copyVariant
    ? ((Kt = (e) => {
        let { workspace: t, flowId: n } = e;
        return De.safePost(`/accounts/{account_id}/invites/request`, {
          parameters: { path: { account_id: t.id } },
          requestBody: {
            intent: `workspace_membership`,
            analytics_context: { flow_id: n, beacon_id: y?.beaconId, copy_variant: y?.copyVariant },
          },
        });
      }),
      (r[28] = y?.beaconId),
      (r[29] = y?.copyVariant),
      (r[30] = Kt))
    : (Kt = r[30]);
  let { mutate: qt, isPending: Jt } = le({
      mutationFn: Kt,
      retry: !1,
      onSuccess: async (e, t) => {
        let { workspace: n, flowId: r } = t;
        if (!L.current) return;
        let i = e.outcome ?? `refresh_required`,
          a = i === `joined` || i === `already_member`;
        if (
          (F((e) => ({ ...e, [n.id]: { workspace: n, status: a ? `joined` : i } })), i === `refresh_required`)
        ) {
          I.current = !1;
          return;
        }
        m.queryClient.invalidateQueries({ queryKey: [`workspace-discovery-v2`, _ ?? null] });
        let o = a ? `direct_join` : `approval_request`,
          s = a ? `seat_available` : `not_evaluated`;
        (mt(m, r, n.id, `capacity_evaluated`, {
          capacity: e.workspace_full ? `workspace_full` : s,
          fulfillment: o,
          beaconAttribution: y,
          inviteId: e.invite_id ?? void 0,
          requestOutcome: i,
        }),
          mt(m, r, n.id, `action_succeeded`, {
            fulfillment: o,
            beaconAttribution: y,
            inviteId: e.invite_id ?? void 0,
            requestOutcome: i,
          }),
          (I.current = !1),
          a
            ? await $t(n.id, !0)
            : e.workspace_full
              ? m
                  .get(se)
                  .warning(
                    (0, X.jsx)(w, {
                      id: `workspaceDiscovery.full`,
                      defaultMessage: `This workspace is full. Your request has been sent to an admin`,
                      description: `An access request was sent because a workspace has no available seats`,
                    }),
                  )
              : m
                  .get(se)
                  .success(
                    (0, X.jsx)(w, {
                      id: `workspaceDiscovery.requestSent`,
                      defaultMessage: `Your request has been sent`,
                      description: `Confirmation that a workspace access request was submitted`,
                    }),
                  ),
          !a && f === `dismissible` && (Xt(), z(m, `exit`, Z, { workspaceId: n.id }), c?.()));
      },
      onError: (e, t) => {
        let { workspace: n, flowId: r } = t;
        L.current &&
          (mt(m, r, n.id, `action_failed`, { beaconAttribution: y }),
          F((e) => ({ ...e, [n.id]: { workspace: n, status: `refresh_required` } })),
          (I.current = !1),
          m
            .get(se)
            .danger(
              e instanceof re && e.errorCode === `autojoin_retry_pending`
                ? (0, X.jsx)(w, {
                    id: `workspaceDiscovery.joinPending`,
                    defaultMessage: `Your join request is still being processed. Please try again shortly`,
                    description: `Automatic joining remains pending after retries`,
                  })
                : (0, X.jsx)(w, {
                    id: `workspaceDiscovery.statusUnknown`,
                    defaultMessage: `We couldn’t confirm the result. Refresh to check your workspace access`,
                    description: `Error toast in workspace discovery after a join or access request has an uncertain result; refresh checks its status without resubmitting`,
                  }),
              { errorAnalytics: { toastId: `request_access_failed` } },
            ));
      },
    }),
    Q = Jt || ot || ct != null,
    Yt = function (e) {
      ft.current.has(e) || (ft.current.add(e), z(m, `hovered`, Z, { workspaceId: e }));
    };
  async function Xt() {
    try {
      await De.safePost(`/settings/announcement_viewed`, { parameters: { query: { announcement_id: nt } } });
    } catch {}
  }
  let Zt = async function () {
    I.current ||
      ((I.current = !0),
      st(!0),
      await (async () => {
        try {
          O != null && v != null && qe(O, v);
          let e = await be();
          if (!L.current) return;
          if (e.isError || e.data == null) {
            Qt();
            return;
          }
          let t = new Set(Ye(e.data).filter(Ot).map(Dt));
          (F((e) =>
            Object.fromEntries(
              Object.entries(e).map((e) => {
                let [n, r] = e;
                return [n, t.has(n) ? { ...r, status: `joined` } : r];
              }),
            ),
          ),
            T({ page: 0, continued: !1 }),
            await m.queryClient.resetQueries({
              queryKey: [`workspace-discovery-v2`, _, S?.email, D],
              exact: !0,
            }));
          let n = m.get(rt, Pe);
          if (n.isError || n.data == null || n.data.pages.some(Et)) return;
          let r = new Set(n.data.pages.flatMap(wt)),
            i = n.data.pages.at(-1)?.completion === `complete`;
          L.current &&
            F((e) =>
              Object.fromEntries(
                Object.entries(e).filter((e) => {
                  let [t, n] = e;
                  return n.status === `joined` || (!i && !r.has(t));
                }),
              ),
            );
        } catch {
          L.current && Qt();
        }
      })().finally(() => {
        L.current && ((I.current = !1), st(!1));
      }));
  };
  function Qt() {
    m.get(se).danger(
      (0, X.jsx)(w, {
        id: `workspaceDiscovery.refreshFailed`,
        defaultMessage: `Could not refresh workspace access. Please try again`,
        description: `Error toast when checking membership after an uncertain join fails; the user can retry refreshing without sending another join request`,
      }),
      { errorAnalytics: { toastId: `workspaceDiscovery.refreshFailed` } },
    );
  }
  async function $t(e, t) {
    let n = t !== void 0 && t;
    if (!(I.current || O == null)) {
      ((I.current = !0), lt(e));
      try {
        let t = O;
        if (n) {
          v != null && qe(O, v);
          let e = await be();
          if (!L.current) return;
          if (e.isError || e.data == null) {
            en();
            return;
          }
          t = e.data;
        }
        if (!Ye(t).find((t) => t.workspaceAccountId === e && !t.isDeactivated)?.canAccessWithSession) {
          en();
          return;
        }
        if ((await Xt(), !L.current)) return;
        (z(m, `exit`, Z, { workspaceId: e }), await Je(t, e, N));
      } catch {
        L.current && en();
      }
    }
  }
  function en() {
    ((I.current = !1),
      lt(null),
      m
        .get(se)
        .danger(
          (0, X.jsx)(w, {
            id: `workspaceDiscovery.switchFailed`,
            defaultMessage: `Could not open the workspace. Please try again`,
            description: `Error after opening a workspace fails`,
          }),
          { errorAnalytics: { toastId: `workspaceDiscovery.switchFailed` } },
        ));
  }
  let tn = function () {
      Q || I.current || c == null || (Xt(), z(m, `exit`, Z, { exitAction: `close` }), c());
    },
    nn = async function () {
      if (_t) {
        T({ page: W + 1, continued: !1 });
        return;
      }
      let e = await He({ cancelRefetch: !1 });
      if (!L.current || e.isError) return;
      let t = new Set([...U, ...(e.data?.pages.flatMap(Ct) ?? [])]).size;
      T((e) =>
        e === pe
          ? { page: U.length < G ? W : Math.min(W + 1, Math.max(0, Math.ceil(t / zt) - 1)), continued: !0 }
          : e,
      );
    },
    rn = J == null ? `list` : `single`,
    an = k ? Y.Fragment : t,
    on = J != null && `pb-8`,
    sn;
  r[31] === on
    ? (sn = r[32])
    : ((sn = d(`my-auto flex w-full max-w-lg shrink-0 flex-col gap-6`, on)), (r[31] = on), (r[32] = sn));
  let cn = gt,
    ln = S?.email ?? ``,
    un =
      k && J == null
        ? (0, X.jsx)(Ae, {
            id: `workspace-discovery-search`,
            inputRole: `searchbox`,
            label: h.formatMessage({
              id: `workspaceDiscovery.search.label`,
              defaultMessage: `Search by workspace name`,
              description: `Accessible name of the workspace discovery search field; searches public workspace names`,
            }),
            placeholder: h.formatMessage({
              id: `workspaceDiscovery.search.placeholder`,
              defaultMessage: `Search by workspace name`,
              description: `Placeholder in the workspace discovery search field`,
            }),
            variant: `toolbar`,
            maxLength: 200,
            searchQuery: ce,
            readOnly: Q,
            onSearchQueryChange: (e) => {
              Q ||
                (e.trim().toLowerCase() !== E && m.query.cancel(rt, Pe),
                T({ page: 0, continued: !1 }),
                ue(e));
            },
          })
        : null,
    dn;
  r[33] === q
    ? (dn = r[34])
    : ((dn = q
        ? (0, X.jsx)(`p`, {
            role: `status`,
            children: (0, X.jsx)(w, {
              id: `workspaceDiscovery.loading`,
              defaultMessage: `Loading workspaces…`,
              description: `Workspace discovery is loading`,
            }),
          })
        : null),
      (r[33] = q),
      (r[34] = dn));
  let fn =
      !q && (we || ((j || M) && k))
        ? (0, X.jsxs)(`div`, {
            children: [
              (0, X.jsx)(`p`, {
                role: `alert`,
                children: (0, X.jsx)(w, {
                  id: `workspaceDiscovery.loadIncomplete`,
                  defaultMessage: `Could not load all workspaces`,
                  description: `Workspace discovery warning when some or all results are unavailable; retry loads fresh results`,
                }),
              }),
              (0, X.jsx)(x, {
                disabled: Q,
                onClick: () => void (we ? be() : Zt()),
                children: (0, X.jsx)(w, {
                  id: `workspaceDiscovery.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry loading workspaces`,
                }),
              }),
            ],
          })
        : null,
    pn =
      !q && !we && !j && !M && Xe && V.length + H.length === 0
        ? (0, X.jsx)(`p`, {
            children: (0, X.jsx)(w, {
              id: `workspaceDiscovery.empty`,
              defaultMessage: `No workspaces to join`,
              description: `No discoverable workspaces are available`,
            }),
          })
        : null,
    mn =
      !q && V.length + H.length > 0
        ? (0, X.jsx)(`div`, {
            className: `w-full`,
            role: `list`,
            children: (0, X.jsxs)(an, {
              children: [
                bt.map((e) =>
                  (0, X.jsx)(
                    vt,
                    {
                      name: e.isPersonalWorkspace
                        ? (S?.name ?? e.workspaceName ?? ``)
                        : (e.workspaceName ?? ``),
                      openRow: k,
                      personal: e.isPersonalWorkspace,
                      workspaceId: e.workspaceAccountId,
                      identifier: St.get(e.workspaceAccountId),
                      imageUrl: e.workspaceImageUrl ?? null,
                      action: (0, X.jsx)(x, {
                        color: `secondary`,
                        size: `dialogAction`,
                        disabled: Q || e.canAccessWithSession === !1,
                        loading: ct === e.workspaceAccountId,
                        onClick: () => void $t(e.workspaceAccountId),
                        children: (0, X.jsx)(w, {
                          id: `workspaceDiscovery.open`,
                          defaultMessage: `Open`,
                          description: `Open an existing ChatGPT workspace`,
                        }),
                      }),
                    },
                    e.workspaceAccountId,
                  ),
                ),
                K.map((e) => {
                  let t = P[e.id]?.status,
                    n = (0, X.jsx)(dt, {
                      workspace: e,
                      status: t,
                      layout: rn,
                      busy: Q,
                      onClick: () => {
                        if (t === `joined`) {
                          $t(e.id, !0);
                          return;
                        }
                        if (t === `refresh_required`) {
                          Zt();
                          return;
                        }
                        if (I.current) return;
                        I.current = !0;
                        let n = crypto.randomUUID();
                        (z(m, `clicked`, Z, { workspaceId: e.id, flowId: n }),
                          mt(m, n, e.id, `action_initiated`, { beaconAttribution: y }),
                          F((t) => ({ ...t, [e.id]: { workspace: e, status: `pending` } })),
                          qt({ workspace: e, flowId: n }));
                      },
                      onHover: () => Yt(e.id),
                    });
                  return J == null
                    ? (0, X.jsx)(
                        vt,
                        {
                          name: e.name,
                          openRow: k,
                          identifier: St.get(e.id),
                          imageUrl: e.profile_picture_url,
                          memberCount: e.member_count,
                          action: n,
                        },
                        e.id,
                      )
                    : (0, X.jsx)(
                        `div`,
                        { className: `flex justify-center`, role: `listitem`, children: n },
                        e.id,
                      );
                }),
              ],
            }),
          })
        : null,
    hn;
  r[35] !== cn ||
  r[36] !== V ||
  r[37] !== J ||
  r[38] !== q ||
  r[39] !== C ||
  r[40] !== ln ||
  r[41] !== un ||
  r[42] !== dn ||
  r[43] !== fn ||
  r[44] !== pn ||
  r[45] !== mn
    ? ((hn = (0, X.jsxs)(cn, {
        existingCount: V.length,
        email: ln,
        loading: q,
        searchable: C,
        featuredWorkspace: J,
        children: [un, dn, fn, pn, mn],
      })),
      (r[35] = cn),
      (r[36] = V),
      (r[37] = J),
      (r[38] = q),
      (r[39] = C),
      (r[40] = ln),
      (r[41] = un),
      (r[42] = dn),
      (r[43] = fn),
      (r[44] = pn),
      (r[45] = mn),
      (r[46] = hn))
    : (hn = r[46]);
  let gn =
      k && J == null
        ? (0, X.jsxs)(X.Fragment, {
            children: [
              !q && !j && !M && We && !_t && (pe.continued || U.length === 0)
                ? (0, X.jsx)(`p`, {
                    className: `select-none`,
                    role: `status`,
                    children: (0, X.jsx)(w, {
                      id: `workspaceDiscovery.pages.incomplete`,
                      defaultMessage: `More workspaces may be available. Select Next to keep looking`,
                      description: `Discovery has not finished scanning eligible workspaces; Next continues from the saved server cursor even when a batch adds no results`,
                    }),
                  })
                : null,
              (0, X.jsxs)(`nav`, {
                className: `flex items-center justify-between gap-2`,
                "aria-label": h.formatMessage({
                  id: `workspaceDiscovery.pages.label`,
                  defaultMessage: `Workspace result pages`,
                  description: `Accessible label for workspace discovery pagination`,
                }),
                children: [
                  (0, X.jsx)(x, {
                    color: `secondary`,
                    size: `dialogAction`,
                    disabled: Q || q || Ve || W === 0,
                    onClick: () => T({ page: W - 1, continued: !1 }),
                    children: (0, X.jsx)(w, {
                      id: `workspaceDiscovery.pages.previous`,
                      defaultMessage: `Previous`,
                      description: `Show the previous five workspace results`,
                    }),
                  }),
                  (0, X.jsx)(`span`, {
                    className: `text-sm text-secondary select-none`,
                    "aria-live": `polite`,
                    children: (0, X.jsx)(w, {
                      id: `workspaceDiscovery.pages.current`,
                      defaultMessage: `Page {page}`,
                      description: `Current visible workspace page number; the total is unknown while the server has more results`,
                      values: { page: W + 1 },
                    }),
                  }),
                  (0, X.jsx)(x, {
                    color: `secondary`,
                    size: `dialogAction`,
                    disabled: Q || q || Ve || (!_t && (!We || j || M)),
                    loading: Ve,
                    onClick: () => void nn(),
                    children: (0, X.jsx)(w, {
                      id: `workspaceDiscovery.pages.next`,
                      defaultMessage: `Next`,
                      description: `Show the next five workspace results, fetching another batch if needed`,
                    }),
                  }),
                ],
              }),
            ],
          })
        : null,
    _n;
  r[47] !== Q ||
  r[48] !== Qe?.plan_type ||
  r[49] !== J ||
  r[50] !== f ||
  r[51] !== c ||
  r[52] !== $e ||
  r[53] !== m ||
  r[54] !== C ||
  r[55] !== N
    ? ((_n = Te(N, Bt)
        ? (0, X.jsx)(`div`, {
            className: J == null ? `contents` : `flex flex-col px-8`,
            children: (0, X.jsxs)(x, {
              color: `secondary`,
              size: C ? `dialogAction` : `auth`,
              disabled: Q,
              onClick: (e) => {
                if ((pt(m, Qe?.plan_type), f === `dismissible`)) {
                  (c?.(),
                    $e({
                      currentPlan: Ue(Qe?.plan_type)?.pricePlan ?? null,
                      defaultTab: `business`,
                      event: e,
                      chatGptContext: {
                        openModalLocation: Bt,
                        checkoutOriginProductExperience: `work`,
                        targetPlan: `team`,
                      },
                      source: `profile_menu`,
                    }));
                  return;
                }
                he({
                  event: e,
                  href: Le({
                    openModalLocation: Bt,
                    checkoutOriginProductExperience: `work`,
                    targetPlan: `team`,
                  }),
                  openTarget: `external-browser`,
                  initiator: `open_in_browser_bridge`,
                });
              },
              children: [
                (0, X.jsx)(a, {}),
                (0, X.jsx)(w, {
                  id: `workspaceDiscovery.create`,
                  defaultMessage: `Create workspace`,
                  description: `Create a new ChatGPT Business workspace`,
                }),
              ],
            }),
          })
        : null),
      (r[47] = Q),
      (r[48] = Qe?.plan_type),
      (r[49] = J),
      (r[50] = f),
      (r[51] = c),
      (r[52] = $e),
      (r[53] = m),
      (r[54] = C),
      (r[55] = N),
      (r[56] = _n))
    : (_n = r[56]);
  let vn;
  r[57] !== sn || r[58] !== hn || r[59] !== gn || r[60] !== _n
    ? ((vn = (0, X.jsxs)(`div`, { className: sn, children: [hn, gn, _n] })),
      (r[57] = sn),
      (r[58] = hn),
      (r[59] = gn),
      (r[60] = _n),
      (r[61] = vn))
    : (vn = r[61]);
  let yn = vn,
    bn = f === `dismissible` && !Q,
    xn = !C,
    Sn = !C,
    Cn = J == null ? `default` : `beacon`,
    wn = J == null ? `default` : `beaconModal`,
    Tn;
  r[62] !== tn || r[63] !== f
    ? ((Tn = (e) => {
        !e && f === `dismissible` && tn();
      }),
      (r[62] = tn),
      (r[63] = f),
      (r[64] = Tn))
    : (Tn = r[64]);
  let $;
  r[65] !== Q || r[66] !== f
    ? (($ = {
        onEscapeKeyDown: (e) => {
          (f === `blocking` || Q) && e.preventDefault();
        },
      }),
      (r[65] = Q),
      (r[66] = f),
      (r[67] = $))
    : ($ = r[67]);
  let En;
  r[68] !== yn || r[69] !== J || r[70] !== C
    ? ((En = C
        ? (0, X.jsx)(s, {
            size: `viewport`,
            className: `select-none`,
            variant: J == null ? `default` : `chatgpt`,
            children: yn,
          })
        : (0, X.jsx)(`div`, {
            className: `flex h-full w-full justify-center overflow-y-auto bg-surface p-6 select-none`,
            children: yn,
          })),
      (r[68] = yn),
      (r[69] = J),
      (r[70] = C),
      (r[71] = En))
    : (En = r[71]);
  let Dn;
  return (
    r[72] !== bn ||
    r[73] !== xn ||
    r[74] !== Sn ||
    r[75] !== Cn ||
    r[76] !== wn ||
    r[77] !== Tn ||
    r[78] !== $ ||
    r[79] !== En
      ? ((Dn = (0, X.jsx)(ee, {
          open: !0,
          showDialogClose: bn,
          shouldIgnoreClickOutside: !0,
          unstyledContent: xn,
          viewportSized: Sn,
          size: Cn,
          variant: wn,
          onOpenChange: Tn,
          contentProps: $,
          children: En,
        })),
        (r[72] = bn),
        (r[73] = xn),
        (r[74] = Sn),
        (r[75] = Cn),
        (r[76] = wn),
        (r[77] = Tn),
        (r[78] = $),
        (r[79] = En),
        (r[80] = Dn))
      : (Dn = r[80]),
    Dn
  );
}
function Ct(e) {
  return e.workspaces.map(J);
}
function J(e) {
  return e.id;
}
function wt(e) {
  return e.workspaces.map(Tt);
}
function Tt(e) {
  return e.id;
}
function Et(e) {
  return e.completion === `partial`;
}
function Dt(e) {
  return e.workspaceAccountId;
}
function Ot(e) {
  return !e.isDeactivated;
}
function kt(e) {
  return e.id;
}
function At(e) {
  return { id: e.id, name: e.name };
}
function jt(e) {
  return { id: e.workspaceAccountId, name: e.workspaceName ?? `` };
}
function Mt(e) {
  return !e.isPersonalWorkspace;
}
function Nt(e) {
  return e.workspaceAccountId;
}
function Pt(e) {
  return [e.id, e];
}
function Ft(e) {
  return e.workspaces;
}
function It(e) {
  return e.completion === `partial`;
}
function Lt(e) {
  return Me(e.plan_type);
}
var Rt, Y, X, zt, Bt;
function Z() {
  return (Z = e(() => {
    ((Rt = p()),
      ce(),
      f(),
      ne(),
      (Y = i()),
      b(),
      je(),
      be(),
      Fe(),
      Ve(),
      te(),
      c(),
      o(),
      Se(),
      v(),
      Ee(),
      y(),
      we(),
      Be(),
      Ie(),
      r(),
      S(),
      Xe(),
      N(),
      $e(),
      Ge(),
      Pe(),
      T(),
      m(),
      R(),
      U(),
      P(),
      F(),
      _t(),
      xt(),
      (X = u()),
      (zt = 5),
      (Bt = `fullscreen-workspace-switcher`));
  }))();
}
export { ut as i, Z as n, I as r, q as t };
//# sourceMappingURL=workspace-discovery-c32912566416.js.map
