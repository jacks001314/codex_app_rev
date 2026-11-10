import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Brt as n,
  Cot as r,
  IDt as i,
  Iot as a,
  Irt as o,
  Ixt as s,
  JC as c,
  JG as l,
  Lot as u,
  Pxt as d,
  TJ as f,
  VDt as p,
  _Mt as m,
  _O as h,
  cO as g,
  fO as _,
  gMt as v,
  gO as y,
  hot as b,
  hrt as x,
  jDt as S,
  lot as ee,
  mO as te,
  oO as ne,
  qC as re,
  t3 as ie,
  vO as ae,
  vrt as C,
  vzt as oe,
  wot as w,
  xMt as T,
  yzt as se,
  zxt as ce,
} from "./app-shared-bbfeca5e5737.js";
import {
  $3t as le,
  A0 as ue,
  AMr as E,
  Bnn as de,
  EPr as fe,
  Fin as D,
  G6t as pe,
  Hin as me,
  Iin as he,
  J3t as O,
  JPn as ge,
  K3t as _e,
  NBn as ve,
  Nst as ye,
  O0 as be,
  OGt as xe,
  Q3t as k,
  QDr as A,
  QEr as Se,
  TGt as Ce,
  X3t as we,
  XDr as Te,
  XPn as Ee,
  Y3t as De,
  Ymr as Oe,
  Z3t as ke,
  aDr as Ae,
  e6t as je,
  eDr as Me,
  ean as Ne,
  ehr as Pe,
  fur as Fe,
  gKt as Ie,
  hGt as Le,
  hKt as Re,
  jst as ze,
  llt as Be,
  mGt as j,
  mKt as Ve,
  nDr as He,
  pur as Ue,
  q3t as We,
  tan as Ge,
  ult as Ke,
  yVn as qe,
  znn as Je,
} from "./app-initial-5851df3f6cb1.js";
import { c as Ye, f as Xe, r as Ze, s as Qe } from "./workspace-621c2c3096f1.js";
import { n as $e, t as et } from "./workspace-picker-row-46b4bafe11d9.js";
import { i as M, n as tt, r as nt, t as rt } from "./workspace-identifier-c40bd3d45121.js";
import { a as it, i as N, n as at, o as ot, r as st, s as ct, t as lt } from "./queries-2cda695a27c9.js";
var ut, P, F, dt, ft;
function I() {
  return (I = e(() => {
    ((ut = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryFullscreenViewed` }),
      (P = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryFullscreenExit` }),
      (F = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryRequestHovered` }),
      (dt = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryRequestClicked` }),
      (ft = { $type: `protobuf_analytics_events.v1.ChatgptWorkspaceDiscoveryModalShown` }));
  }))();
}
function pt(e) {
  let n = (0, L.c)(15),
    { workspace: r, status: a, layout: o, busy: s, onClick: c, onHover: l } = e,
    u = a === `requested` || (a == null && r.requested),
    d;
  if (a === `joined`) {
    let e;
    (n[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, R.jsx)(i, {
          id: `workspaceDiscovery.openJoined`,
          defaultMessage: `Open workspace`,
          description: `Button in workspace discovery after membership is confirmed; retries opening the workspace without joining again`,
        })),
        (n[0] = e))
      : (e = n[0]),
      (d = e));
  } else if (a === `refresh_required`) {
    let e;
    (n[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, R.jsx)(i, {
          id: `workspaceDiscovery.refreshStatus`,
          defaultMessage: `Refresh status`,
          description: `Button in workspace discovery that checks the result of an uncertain join or request without resubmitting it`,
        })),
        (n[1] = e))
      : (e = n[1]),
      (d = e));
  } else if (u) {
    let e;
    (n[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, R.jsx)(i, {
          id: `workspaceDiscovery.requested`,
          defaultMessage: `Requested`,
          description: `Workspace access has already been requested`,
        })),
        (n[2] = e))
      : (e = n[2]),
      (d = e));
  } else if (r.auto_accept_requests) {
    let e;
    (n[3] === o
      ? (e = n[4])
      : ((e =
          o === `single`
            ? (0, R.jsx)(i, {
                id: `workspaceDiscovery.joinWorkspace`,
                defaultMessage: `Join workspace`,
                description: `Primary button in workspace discovery; joins the selected workspace immediately`,
              })
            : (0, R.jsx)(i, {
                id: `workspaceDiscovery.join`,
                defaultMessage: `Join`,
                description: `Join a discoverable workspace immediately`,
              })),
        (n[3] = o),
        (n[4] = e)),
      (d = e));
  } else {
    let e;
    (n[5] === o
      ? (e = n[6])
      : ((e =
          o === `legacy`
            ? (0, R.jsx)(i, {
                id: `workspaceDiscovery.request`,
                defaultMessage: `Request`,
                description: `Request permission to join a workspace`,
              })
            : (0, R.jsx)(i, {
                id: `workspaceDiscovery.requestToJoin`,
                defaultMessage: `Request to join`,
                description: `Primary button in workspace discovery; sends a membership request to workspace administrators`,
              })),
        (n[5] = o),
        (n[6] = e)),
      (d = e));
  }
  let f = o === `legacy` ? `secondary` : `primary`,
    p = o === `single` ? `onboardingAction` : `dialogAction`,
    m = s || u,
    h = a === `pending`,
    g;
  return (
    n[7] !== d || n[8] !== c || n[9] !== l || n[10] !== f || n[11] !== p || n[12] !== m || n[13] !== h
      ? ((g = (0, R.jsx)(t, {
          color: f,
          size: p,
          disabled: m,
          loading: h,
          onClick: c,
          onFocus: l,
          onPointerEnter: l,
          children: d,
        })),
        (n[7] = d),
        (n[8] = c),
        (n[9] = l),
        (n[10] = f),
        (n[11] = p),
        (n[12] = m),
        (n[13] = h),
        (n[14] = g))
      : (g = n[14]),
    g
  );
}
var L, R;
function mt() {
  return (mt = e(() => {
    ((L = oe()), S(), ie(), (R = T()));
  }))();
}
function ht(e, t, n, r) {
  A(e, vt[t], (e) => ({
    source: n.source,
    beaconId: n.beaconAttribution?.beaconId,
    copyVariant: n.beaconAttribution?.copyVariant,
    joinFlow: `discovery`,
    platform: `web`,
    emailDomainType: n.emailDomainType,
    existingWorkspaceCount: o(n.existingWorkspaceCount),
    joinableWorkspaceCount: o(n.joinableWorkspaceCount),
    hasJoinableWorkspaces: n.hasJoinableWorkspaces,
    ts: new Date().toISOString(),
    origin: `chat`,
    appVersion: e?.appVersion,
    ...(t === `exit` ? { exitAction: `open_workspace` } : {}),
    ...r,
  }));
}
function gt(e, t) {
  A(e, ve, { currentPlanType: t ?? `unknown` });
}
function _t(e, t, n, r, i) {
  let a = r === `action_succeeded` || r === `action_failed`;
  A(e, ke, {
    flowId: t,
    beaconId: i.beaconAttribution?.beaconId,
    copyVariant: i.beaconAttribution?.copyVariant,
    inviteId: i.inviteId,
    requestOutcome: i.requestOutcome,
    actionType: We.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_TYPE_JOIN_DISCOVERABLE_WORKSPACE,
    surface: le.CHATGPT_WEB_BUSINESS_SEAT_FLOW_SURFACE_WORKSPACE_DISCOVERY,
    actorRole: O.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTOR_ROLE_NON_MEMBER,
    targetScope: je.CHATGPT_WEB_BUSINESS_SEAT_FLOW_TARGET_SCOPE_INDIVIDUAL,
    targetWorkspaceId: n,
    affectedTargetCount: o(1),
    stepType: yt[r],
    capacityResult: i.capacity == null ? void 0 : z[i.capacity],
    fulfillmentType: i.fulfillment == null ? void 0 : bt[i.fulfillment],
    successfulTargetCount: a ? o(Number(r === `action_succeeded`)) : void 0,
    failedTargetCount: a ? o(Number(r === `action_failed`)) : void 0,
    actionFailureType:
      r === `action_failed` ? _e.CHATGPT_WEB_BUSINESS_SEAT_FLOW_ACTION_FAILURE_TYPE_MUTATION_FAILED : void 0,
  });
}
var vt, yt, z, bt;
function xt() {
  return (xt = e(() => {
    (qe(),
      pe(),
      I(),
      n(),
      Te(),
      (vt = { viewed: ut, exit: P, clicked: dt, hovered: F }),
      (yt = {
        action_initiated: k.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_INITIATED,
        capacity_evaluated: k.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_CAPACITY_EVALUATED,
        action_succeeded: k.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_SUCCEEDED,
        action_failed: k.CHATGPT_WEB_BUSINESS_SEAT_FLOW_STEP_TYPE_ACTION_FAILED,
      }),
      (z = {
        workspace_full: De.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_WORKSPACE_FULL,
        seat_available: De.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_SEAT_AVAILABLE,
        not_evaluated: De.CHATGPT_WEB_BUSINESS_SEAT_FLOW_CAPACITY_RESULT_NOT_EVALUATED,
      }),
      (bt = {
        direct_join: we.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_DIRECT_JOIN,
        approval_request: we.CHATGPT_WEB_BUSINESS_SEAT_FLOW_FULFILLMENT_TYPE_APPROVAL_REQUEST,
      }));
  }))();
}
function St(e) {
  let t = (0, B.c)(49),
    {
      existingCount: n,
      requestableCount: r,
      email: a,
      loading: o,
      paginated: s,
      featuredWorkspace: c,
      children: l,
    } = e,
    u = s !== void 0 && s,
    d = Ae();
  if (u) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, V.jsx)(i, {
          id: `workspaceDiscovery.search.title`,
          defaultMessage: `Find a workspace`,
          description: `Title of the searchable workspace discovery dialog`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n = e;
    if (c != null) {
      let e;
      (t[1] === c.auto_accept_requests
        ? (e = t[2])
        : ((e = c.auto_accept_requests
            ? (0, V.jsx)(i, {
                id: `workspaceDiscovery.single.joinTitle`,
                defaultMessage: `Join your team’s workspace`,
                description: `Title of workspace discovery when one workspace is available to join immediately`,
              })
            : (0, V.jsx)(i, {
                id: `workspaceDiscovery.single.requestTitle`,
                defaultMessage: `Request to join your team’s workspace`,
                description: `Title of workspace discovery when one workspace requires administrator approval`,
              })),
          (t[1] = c.auto_accept_requests),
          (t[2] = e)),
        (n = e));
    }
    let r;
    t[3] === c
      ? (r = t[4])
      : ((r =
          c == null
            ? null
            : (0, V.jsxs)(`div`, {
                className: `flex flex-col items-center gap-2 bg-info-surface px-8 py-8`,
                children: [
                  (0, V.jsx)(Je, { alt: ``, name: c.name, src: c.profile_picture_url, size: `picker` }),
                  (0, V.jsx)(`p`, { className: `text-center font-semibold break-words`, children: c.name }),
                  c.member_count == null
                    ? null
                    : (0, V.jsx)(`p`, {
                        className: `text-sm text-secondary`,
                        children: (0, V.jsx)(i, {
                          id: `workspaceDiscovery.members`,
                          defaultMessage: `{count, plural, one {# member} other {# members}}`,
                          description: `Number of members in a workspace`,
                          values: { count: c.member_count },
                        }),
                      }),
                ],
              })),
        (t[3] = c),
        (t[4] = r));
    let a = c == null ? `contents` : `flex flex-col gap-6 px-8`,
      o;
    t[5] === n ? (o = t[6]) : ((o = (0, V.jsx)(h, { children: n })), (t[5] = n), (t[6] = o));
    let s = c == null ? void 0 : `text-center`,
      u = c == null ? void 0 : `text-center`,
      d;
    t[7] === c
      ? (d = t[8])
      : ((d = (0, V.jsx)(y, {
          children:
            c == null
              ? (0, V.jsx)(i, {
                  id: `workspaceDiscovery.search.domainSubtitle`,
                  defaultMessage: `There are existing ChatGPT Business workspaces on your domain`,
                  description: `Subtitle in workspace discovery explaining that the listed business workspaces share the signed-in user’s email domain`,
                })
              : (0, V.jsx)(i, {
                  id: `workspaceDiscovery.single.subtitle`,
                  defaultMessage: `Work alongside your teammates with shared skills and context in one secure workspace`,
                  description: `Description beneath the single-workspace discovery title explaining team collaboration`,
                }),
        })),
        (t[7] = c),
        (t[8] = d));
    let f = c == null ? `base` : `sm`,
      p;
    t[9] !== o || t[10] !== s || t[11] !== u || t[12] !== d || t[13] !== f
      ? ((p = (0, V.jsx)(g, {
          title: o,
          titleClassName: s,
          subtitleClassName: u,
          subtitle: d,
          subtitleTone: `secondary`,
          subtitleSize: f,
        })),
        (t[9] = o),
        (t[10] = s),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]);
    let m;
    t[15] !== l || t[16] !== p || t[17] !== a
      ? ((m = (0, V.jsxs)(`div`, { className: a, children: [p, l] })),
        (t[15] = l),
        (t[16] = p),
        (t[17] = a),
        (t[18] = m))
      : (m = t[18]);
    let _;
    return (
      t[19] !== m || t[20] !== r
        ? ((_ = (0, V.jsxs)(`div`, { className: `flex flex-col gap-6`, children: [r, m] })),
          (t[19] = m),
          (t[20] = r),
          (t[21] = _))
        : (_ = t[21]),
      _
    );
  }
  let f;
  t[22] === d ? (f = t[23]) : ((f = Se(d, `2133596510`).get(`enabled`, !1)), (t[22] = d), (t[23] = f));
  let p = f,
    m;
  if (o || n + r === 0) {
    let e;
    (t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, V.jsx)(i, {
          id: `workspaceDiscovery.joinTeamTitle`,
          defaultMessage: `Join your team’s workspace`,
          description: `Heading when no accessible or requestable workspace is available`,
        })),
        (t[24] = e))
      : (e = t[24]),
      (m = e));
  } else if (n === 0) {
    let e;
    (t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, V.jsx)(i, {
          id: `workspaceDiscovery.joinTitle`,
          defaultMessage: `Join workspaces`,
          description: `Heading when only discoverable workspaces are shown`,
        })),
        (t[25] = e))
      : (e = t[25]),
      (m = e));
  } else if (r === 0) {
    let e;
    (t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, V.jsx)(i, {
          id: `workspaceDiscovery.launchTitle`,
          defaultMessage: `Launch a workspace`,
          description: `Heading when only accessible workspaces remain`,
        })),
        (t[26] = e))
      : (e = t[26]),
      (m = e));
  } else {
    let e;
    (t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, V.jsx)(i, {
          id: `workspaceDiscovery.title`,
          defaultMessage: `Join and launch your workspaces`,
          description: `Heading above existing and discoverable ChatGPT workspaces`,
        })),
        (t[27] = e))
      : (e = t[27]),
      (m = e));
  }
  let _ = null;
  if (!o && n + r > 0) {
    if (n === 0) {
      let e;
      (t[28] !== a || t[29] !== r
        ? ((e = (0, V.jsx)(i, {
            id: `workspaceDiscovery.joinCount`,
            defaultMessage: `{email} can join {count, plural, one {# workspace} other {# workspaces}}`,
            description: `Number of workspaces the signed-in email can request to join`,
            values: { email: a, count: r },
          })),
          (t[28] = a),
          (t[29] = r),
          (t[30] = e))
        : (e = t[30]),
        (_ = e));
    } else if (r === 0) {
      let e;
      (t[31] !== a || t[32] !== n
        ? ((e = (0, V.jsx)(i, {
            id: `workspaceDiscovery.accessCount`,
            defaultMessage: `{email} has access to {count, plural, one {# workspace} other {# workspaces}}`,
            description: `Number of accessible workspaces for the signed-in email`,
            values: { email: a, count: n },
          })),
          (t[31] = a),
          (t[32] = n),
          (t[33] = e))
        : (e = t[33]),
        (_ = e));
    } else {
      let e;
      (t[34] !== a || t[35] !== n || t[36] !== r
        ? ((e = (0, V.jsx)(i, {
            id: `workspaceDiscovery.accessAndJoinCounts`,
            defaultMessage: `{email} has access to {accessCount, plural, one {# workspace} other {# workspaces}} and can join {joinCount, plural, one {# workspace} other {# workspaces}}`,
            description: `Accessible and requestable workspace counts for the signed-in email`,
            values: { email: a, accessCount: n, joinCount: r },
          })),
          (t[34] = a),
          (t[35] = n),
          (t[36] = r),
          (t[37] = e))
        : (e = t[37]),
        (_ = e));
    }
  }
  let v;
  t[38] === m ? (v = t[39]) : ((v = (0, V.jsx)(h, { children: m })), (t[38] = m), (t[39] = v));
  let b;
  t[40] === p
    ? (b = t[41])
    : ((b = p
        ? (0, V.jsxs)(`span`, {
            children: [
              (0, V.jsx)(i, {
                id: `workspaceDiscovery.collaboration`,
                defaultMessage: `Securely collaborate with coworkers using{lineBreak}tools like projects and custom GPTs`,
                description: `Optional workspace collaboration benefits shown above the workspace counts`,
                values: { lineBreak: (0, V.jsx)(`br`, {}) },
              }),
              (0, V.jsx)(`br`, {}),
            ],
          })
        : null),
      (t[40] = p),
      (t[41] = b));
  let x;
  t[42] !== _ || t[43] !== b
    ? ((x = (0, V.jsxs)(V.Fragment, { children: [b, _] })), (t[42] = _), (t[43] = b), (t[44] = x))
    : (x = t[44]);
  let S;
  return (
    t[45] !== l || t[46] !== v || t[47] !== x
      ? ((S = (0, V.jsx)(ze, { title: v, subtitle: x, children: l })),
        (t[45] = l),
        (t[46] = v),
        (t[47] = x),
        (t[48] = S))
      : (S = t[48]),
    S
  );
}
var B, V;
function Ct() {
  return (Ct = e(() => {
    ((B = oe()), S(), de(), ae(), _(), ye(), Me(), (V = T()));
  }))();
}
function wt(e) {
  let t = (0, U.c)(12),
    n,
    r,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]))
    : (({ memberCount: n, workspaceId: a, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = a));
  let o;
  if (r.personal) {
    let e;
    (t[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, W.jsx)(i, {
          id: `workspaceDiscovery.personal`,
          defaultMessage: `Personal workspace`,
          description: `The user's personal ChatGPT workspace`,
        })),
        (t[4] = e))
      : (e = t[4]),
      (o = e));
  } else if (a != null) {
    let e;
    (t[5] === a ? (e = t[6]) : ((e = (0, W.jsx)(H, { workspaceId: a })), (t[5] = a), (t[6] = e)), (o = e));
  } else if (n != null) {
    let e;
    (t[7] === n
      ? (e = t[8])
      : ((e = (0, W.jsx)(i, {
          id: `workspaceDiscovery.members`,
          defaultMessage: `{count, plural, one {# member} other {# members}}`,
          description: `Number of members in a workspace`,
          values: { count: n },
        })),
        (t[7] = n),
        (t[8] = e)),
      (o = e));
  }
  let s;
  return (
    t[9] !== o || t[10] !== r
      ? ((s = (0, W.jsx)(et, { ...r, description: o })), (t[9] = o), (t[10] = r), (t[11] = s))
      : (s = t[11]),
    s
  );
}
function H(e) {
  let t = (0, U.c)(8),
    { workspaceId: n } = e,
    { userId: r } = Ue(),
    a = r ?? ``,
    o;
  t[0] !== a || t[1] !== n
    ? ((o = { userId: a, workspaceId: n }), (t[0] = a), (t[1] = n), (t[2] = o))
    : (o = t[2]);
  let s = r != null,
    c;
  t[3] === s ? (c = t[4]) : ((c = { enabled: s }), (t[3] = s), (t[4] = c));
  let { data: l, isLoading: u } = ce(N, o, c);
  if (u) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, W.jsx)(`span`, {
            role: `status`,
            children: (0, W.jsx)(i, {
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
  if (l == null) return null;
  let d;
  return (
    t[6] === l
      ? (d = t[7])
      : ((d = (0, W.jsx)(i, {
          id: `workspaceDiscovery.members`,
          defaultMessage: `{count, plural, one {# member} other {# members}}`,
          description: `Number of members in a workspace`,
          values: { count: l },
        })),
        (t[6] = l),
        (t[7] = d)),
    d
  );
}
var U, W;
function G() {
  return (G = e(() => {
    ((U = oe()), d(), S(), Fe(), $e(), at(), (W = T()));
  }))();
}
function K(e) {
  let t = (0, Wt.c)(10),
    { userId: n, accountId: r } = Ue(),
    i = n ?? null,
    a = r ?? null,
    o;
  t[0] !== i || t[1] !== a
    ? ((o = { userId: i, accountId: a }), (t[0] = i), (t[1] = a), (t[2] = o))
    : (o = t[2]);
  let { data: s } = ce(be, o),
    c;
  t[3] !== r || t[4] !== s?.email || t[5] !== n
    ? ((c = JSON.stringify([n, r, s?.email])), (t[3] = r), (t[4] = s?.email), (t[5] = n), (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== e || t[8] !== c
      ? ((l = (0, J.jsx)(Tt, { ...e }, c)), (t[7] = e), (t[8] = c), (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Tt(e) {
  let n = (0, Wt.c)(96),
    { mode: a, section: o, onClose: c, beaconOrigin: d } = e,
    f = a === void 0 ? `blocking` : a,
    m = o === void 0 ? `both` : o,
    h = s(r),
    g = p(),
    { userId: _, accountId: y } = Ue(),
    S = d?.userId === _ && d?.accountId === y ? d?.attribution : void 0,
    ee = _ ?? null,
    ie = y ?? null,
    ae;
  n[0] !== ee || n[1] !== ie
    ? ((ae = { userId: ee, accountId: ie }), (n[0] = ee), (n[1] = ie), (n[2] = ae))
    : (ae = n[2]);
  let { data: C, isLoading: oe } = ce(be, ae),
    w = He(m !== `existing` && `3491636949`),
    [T, se] = (0, q.useState)(``),
    le;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = { page: 0, continued: !1 }), (n[3] = le))
    : (le = n[3]);
  let [ue, E] = (0, q.useState)(le),
    de;
  n[4] === T ? (de = n[5]) : ((de = T.trim().toLowerCase()), (n[4] = T), (n[5] = de));
  let fe = de,
    D = Ge(fe, 300),
    pe = fe !== D,
    { data: O, refetch: ge, isLoading: _e, isError: ve } = he(),
    ye = ve && O == null,
    xe;
  n[6] !== O || n[7] !== m || n[8] !== C
    ? ((xe = m !== `existing` && C != null && ot(C) && O != null && !O.accounts?.some(Ut)),
      (n[6] = O),
      (n[7] = m),
      (n[8] = C),
      (n[9] = xe))
    : (xe = n[9]);
  let k = xe,
    A = w && k,
    Se = k && !w,
    we;
  n[10] === Se ? (we = n[11]) : ((we = { enabled: Se }), (n[10] = Se), (n[11] = we));
  let { data: Te, isLoading: De, isError: ke, refetch: je } = ce(lt, _ ?? null, we),
    Me = _ ?? null,
    Ne = C?.email ?? null,
    Pe;
  n[12] !== D || n[13] !== Me || n[14] !== Ne
    ? ((Pe = { userId: Me, email: Ne, query: D }), (n[12] = D), (n[13] = Me), (n[14] = Ne), (n[15] = Pe))
    : (Pe = n[15]);
  let Fe = Pe,
    Re = k && w && !pe,
    ze;
  n[16] === Re ? (ze = n[17]) : ((ze = { enabled: Re }), (n[16] = Re), (n[17] = ze));
  let {
      data: j,
      isLoading: We,
      isRefetching: Ke,
      isError: qe,
      isFetchingNextPage: Je,
      fetchNextPage: Qe,
      hasNextPage: $e,
    } = ce(st, Fe, ze),
    et = w ? We || pe || Ke : De,
    M = w ? qe : ke,
    tt;
  n[18] !== j?.pages || n[19] !== w
    ? ((tt = w && j?.pages.some(Ht)), (n[18] = j?.pages), (n[19] = w), (n[20] = tt))
    : (tt = n[20]);
  let N = tt,
    at = j?.pages.at(-1),
    ct = !w || at?.completion === `complete`,
    ut = w ? j?.pages.flatMap(Vt) : Te?.workspaces,
    { data: P } = me(),
    F = Ae(),
    dt = Le(),
    ft;
  n[21] === Symbol.for(`react.memo_cache_sentinel`) ? ((ft = {}), (n[21] = ft)) : (ft = n[21]);
  let [I, L] = (0, q.useState)(ft),
    [R, mt] = (0, q.useState)(!1),
    [vt, yt] = (0, q.useState)(null),
    z = (0, q.useRef)(!1),
    bt = (0, q.useRef)(!1),
    xt = (0, q.useRef)(new Set()),
    B = (0, q.useRef)(!0),
    V;
  n[22] === I
    ? (V = n[23])
    : ((V = (e) => !e.isDeactivated && I[e.workspaceAccountId]?.status !== `pending`),
      (n[22] = I),
      (n[23] = V));
  let Ct = Ze(O).filter(V),
    H = new Map((k && !et ? (ut ?? []) : []).map(Bt));
  for (let { workspace: e } of Object.values(I))
    k && !pe && e.name.toLowerCase().includes(D) && H.set(e.id, e);
  let U = Ct.filter(
      (e) =>
        (m !== `discoverable` || H.has(e.workspaceAccountId)) &&
        (!A ||
          fe === `` ||
          H.has(e.workspaceAccountId) ||
          (e.isPersonalWorkspace ? (C?.name ?? e.workspaceName) : e.workspaceName)
            ?.toLowerCase()
            .includes(fe)),
    ),
    W = Array.from(H.values()).filter((e) => !U.some((t) => t.workspaceAccountId === e.id)),
    G = [...U.filter((e) => !H.has(e.workspaceAccountId)).map(zt), ...H.keys()],
    K = Math.min(ue.page, Math.max(0, Math.ceil(G.length / Gt) - 1)),
    Tt = (K + 1) * Gt,
    Dt = G.length > Tt,
    kt = new Set(G.slice(K * Gt, Tt)),
    jt = A ? U.filter((e) => kt.has(e.workspaceAccountId)) : U,
    qt = A ? W.filter((e) => kt.has(e.id)) : W,
    Jt = [...U.filter(Rt).map(Lt), ...W.map(It)],
    Y = _e || (k && et) || oe;
  !Y && ue.page !== K && E({ ...ue, page: K });
  let Yt = new Map(
      (Y ? [] : Jt).map((e) => {
        let t = nt(F, e.id, e.name, Jt);
        return [
          e.id,
          t == null
            ? void 0
            : (0, J.jsx)(
                rt,
                {
                  workspaceId: e.id,
                  shortId: t,
                  sameNameWorkspaceIds: Jt.filter((t) => t.name === e.name).map(Ft),
                  accountId: U.some((t) => t.workspaceAccountId === e.id) ? (y ?? null) : null,
                },
                e.id,
              ),
        ];
      }),
    ),
    Xt = W.filter((e) => !e.requested && I[e.id]?.status !== `requested`).length,
    X = w && !Y && !M && ct && !N && T.length === 0 && U.length === 0 && W.length === 1 ? W[0] : void 0,
    Zt = `first_login`;
  f === `dismissible` ? (Zt = `find_workspaces`) : m === `existing` && (Zt = `should_select_workspace`);
  let Qt = {
      source: Zt,
      beaconAttribution: S,
      emailDomainType: C?.email_domain_type ?? void 0,
      existingWorkspaceCount: U.length,
      joinableWorkspaceCount: W.length,
      hasJoinableWorkspaces: W.length > 0,
    },
    $t,
    en;
  (n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($t = () => (
        (B.current = !0),
        () => {
          B.current = !1;
        }
      )),
      (en = []),
      (n[24] = $t),
      (n[25] = en))
    : (($t = n[24]), (en = n[25])),
    (0, q.useEffect)($t, en));
  let tn = (0, q.useEffectEvent)(() => ht(h, `viewed`, Qt)),
    nn;
  n[26] !== Y || n[27] !== tn
    ? ((nn = () => {
        bt.current || Y || ((bt.current = !0), tn());
      }),
      (n[26] = Y),
      (n[27] = tn),
      (n[28] = nn))
    : (nn = n[28]);
  let rn;
  (n[29] === Y ? (rn = n[30]) : ((rn = [Y]), (n[29] = Y), (n[30] = rn)), (0, q.useEffect)(nn, rn));
  let an;
  n[31] !== S?.beaconId || n[32] !== S?.copyVariant
    ? ((an = (e) => {
        let { workspace: t, flowId: n } = e;
        return Oe.safePost(`/accounts/{account_id}/invites/request`, {
          parameters: { path: { account_id: t.id } },
          requestBody: {
            intent: `workspace_membership`,
            analytics_context: { flow_id: n, beacon_id: S?.beaconId, copy_variant: S?.copyVariant },
          },
        });
      }),
      (n[31] = S?.beaconId),
      (n[32] = S?.copyVariant),
      (n[33] = an))
    : (an = n[33]);
  let { mutate: on, isPending: sn } = u({
      mutationFn: an,
      retry: !1,
      onSuccess: async (e, t) => {
        let { workspace: n, flowId: r } = t;
        if (!B.current) return;
        let a = e.outcome ?? `refresh_required`,
          o = a === `joined` || a === `already_member`;
        if (
          (L((e) => ({ ...e, [n.id]: { workspace: n, status: o ? `joined` : a } })), a === `refresh_required`)
        ) {
          z.current = !1;
          return;
        }
        let s = o ? `direct_join` : `approval_request`,
          l = o ? `seat_available` : `not_evaluated`;
        (_t(h, r, n.id, `capacity_evaluated`, {
          capacity: e.workspace_full ? `workspace_full` : l,
          fulfillment: s,
          beaconAttribution: S,
          inviteId: e.invite_id ?? void 0,
          requestOutcome: a,
        }),
          _t(h, r, n.id, `action_succeeded`, {
            fulfillment: s,
            beaconAttribution: S,
            inviteId: e.invite_id ?? void 0,
            requestOutcome: a,
          }),
          (z.current = !1),
          o
            ? await fn(n.id, !0)
            : e.workspace_full
              ? h
                  .get(b)
                  .warning(
                    (0, J.jsx)(i, {
                      id: `workspaceDiscovery.full`,
                      defaultMessage: `This workspace is full. Your request has been sent to an admin`,
                      description: `An access request was sent because a workspace has no available seats`,
                    }),
                  )
              : h
                  .get(b)
                  .success(
                    (0, J.jsx)(i, {
                      id: `workspaceDiscovery.requestSent`,
                      defaultMessage: `Your request has been sent`,
                      description: `Confirmation that a workspace access request was submitted`,
                    }),
                  ),
          w && !o && f === `dismissible` && (ln(), ht(h, `exit`, Qt, { workspaceId: n.id }), c?.()));
      },
      onError: (e, t) => {
        let { workspace: n, flowId: r } = t;
        B.current &&
          (_t(h, r, n.id, `action_failed`, { beaconAttribution: S }),
          L((e) => ({ ...e, [n.id]: { workspace: n, status: `refresh_required` } })),
          (z.current = !1),
          h
            .get(b)
            .danger(
              e instanceof x && e.errorCode === `autojoin_retry_pending`
                ? (0, J.jsx)(i, {
                    id: `workspaceDiscovery.joinPending`,
                    defaultMessage: `Your join request is still being processed. Please try again shortly`,
                    description: `Automatic joining remains pending after retries`,
                  })
                : (0, J.jsx)(i, {
                    id: `workspaceDiscovery.statusUnknown`,
                    defaultMessage: `We couldn’t confirm the result. Refresh to check your workspace access`,
                    description: `Error toast in workspace discovery after a join or access request has an uncertain result; refresh checks its status without resubmitting`,
                  }),
              { errorAnalytics: { toastId: `request_access_failed` } },
            ));
      },
    }),
    Z = sn || R || vt != null,
    cn = function (e) {
      xt.current.has(e) || (xt.current.add(e), ht(h, `hovered`, Qt, { workspaceId: e }));
    };
  async function ln() {
    try {
      await Oe.safePost(`/settings/announcement_viewed`, { parameters: { query: { announcement_id: it } } });
    } catch {}
  }
  let un = async function () {
    z.current ||
      ((z.current = !0),
      mt(!0),
      await (async () => {
        try {
          O != null && y != null && Ye(O, y);
          let e = await ge();
          if (!B.current) return;
          if (e.isError || e.data == null) {
            dn();
            return;
          }
          let t = new Set(Ze(e.data).filter(Pt).map(Nt));
          if (
            (L((e) =>
              Object.fromEntries(
                Object.entries(e).map((e) => {
                  let [n, r] = e;
                  return [n, t.has(n) ? { ...r, status: `joined` } : r];
                }),
              ),
            ),
            w)
          ) {
            (E({ page: 0, continued: !1 }),
              await h.queryClient.resetQueries({
                queryKey: [`workspace-discovery-v2`, _, C?.email, D],
                exact: !0,
              }));
            let e = h.get(st, Fe);
            if (e.isError || e.data == null || e.data.pages.some(Mt)) return;
            let t = new Set(e.data.pages.flatMap(At)),
              n = e.data.pages.at(-1)?.completion === `complete`;
            B.current &&
              L((e) =>
                Object.fromEntries(
                  Object.entries(e).filter((e) => {
                    let [r, i] = e;
                    return i.status === `joined` || (!n && !t.has(r));
                  }),
                ),
              );
          } else {
            let e = await je();
            B.current && !e.isError && L(Ot);
          }
        } catch {
          B.current && dn();
        }
      })().finally(() => {
        B.current && ((z.current = !1), mt(!1));
      }));
  };
  function dn() {
    h.get(b).danger(
      (0, J.jsx)(i, {
        id: `workspaceDiscovery.refreshFailed`,
        defaultMessage: `Could not refresh workspace access. Please try again`,
        description: `Error toast when checking membership after an uncertain join fails; the user can retry refreshing without sending another join request`,
      }),
      { errorAnalytics: { toastId: `workspaceDiscovery.refreshFailed` } },
    );
  }
  async function fn(e, t) {
    let n = t !== void 0 && t;
    if (!(z.current || O == null)) {
      ((z.current = !0), yt(e));
      try {
        let t = O;
        if (n) {
          y != null && Ye(O, y);
          let e = await ge();
          if (!B.current) return;
          if (e.isError || e.data == null) {
            pn();
            return;
          }
          t = e.data;
        }
        if (!Ze(t).find((t) => t.workspaceAccountId === e && !t.isDeactivated)?.canAccessWithSession) {
          pn();
          return;
        }
        if ((await ln(), !B.current)) return;
        (ht(h, `exit`, Qt, { workspaceId: e }), await Xe(t, e, F));
      } catch {
        B.current && pn();
      }
    }
  }
  function pn() {
    ((z.current = !1),
      yt(null),
      h
        .get(b)
        .danger(
          (0, J.jsx)(i, {
            id: `workspaceDiscovery.switchFailed`,
            defaultMessage: `Could not open the workspace. Please try again`,
            description: `Error after opening a workspace fails`,
          }),
          { errorAnalytics: { toastId: `workspaceDiscovery.switchFailed` } },
        ));
  }
  let mn = function () {
      Z || z.current || c == null || (ln(), ht(h, `exit`, Qt, { exitAction: `close` }), c());
    },
    hn = async function () {
      if (Dt) {
        E({ page: K + 1, continued: !1 });
        return;
      }
      let e = await Qe({ cancelRefetch: !1 });
      if (!B.current || e.isError) return;
      let t = new Set([...G, ...(e.data?.pages.flatMap(Et) ?? [])]).size;
      E((e) =>
        e === ue
          ? { page: G.length < Tt ? K : Math.min(K + 1, Math.max(0, Math.ceil(t / Gt) - 1)), continued: !0 }
          : e,
      );
    },
    gn = `legacy`;
  w && (gn = X == null ? `list` : `single`);
  let _n = A ? q.Fragment : re,
    vn = X != null && `pb-8`,
    yn;
  n[34] === vn
    ? (yn = n[35])
    : ((yn = v(`my-auto flex w-full max-w-lg shrink-0 flex-col gap-6`, vn)), (n[34] = vn), (n[35] = yn));
  let bn = St,
    xn = C?.email ?? ``,
    Sn =
      w && k && X == null
        ? (0, J.jsx)(Be, {
            id: `workspace-discovery-search`,
            inputRole: `searchbox`,
            label: g.formatMessage({
              id: `workspaceDiscovery.search.label`,
              defaultMessage: `Search by workspace name`,
              description: `Accessible name of the workspace discovery search field; searches public workspace names`,
            }),
            placeholder: g.formatMessage({
              id: `workspaceDiscovery.search.placeholder`,
              defaultMessage: `Search by workspace name`,
              description: `Placeholder in the workspace discovery search field`,
            }),
            variant: `toolbar`,
            maxLength: 200,
            searchQuery: T,
            readOnly: Z,
            onSearchQueryChange: (e) => {
              Z ||
                (e.trim().toLowerCase() !== fe && h.query.cancel(st, Fe),
                E({ page: 0, continued: !1 }),
                se(e));
            },
          })
        : null,
    Cn;
  n[36] === Y
    ? (Cn = n[37])
    : ((Cn = Y
        ? (0, J.jsx)(`p`, {
            role: `status`,
            children: (0, J.jsx)(i, {
              id: `workspaceDiscovery.loading`,
              defaultMessage: `Loading workspaces…`,
              description: `Workspace discovery is loading`,
            }),
          })
        : null),
      (n[36] = Y),
      (n[37] = Cn));
  let wn =
      !Y && (ye || ((M || N) && k))
        ? (0, J.jsxs)(`div`, {
            children: [
              (0, J.jsx)(`p`, {
                role: `alert`,
                children: (0, J.jsx)(i, {
                  id: `workspaceDiscovery.loadIncomplete`,
                  defaultMessage: `Could not load all workspaces`,
                  description: `Workspace discovery warning when some or all results are unavailable; retry loads fresh results`,
                }),
              }),
              (0, J.jsx)(t, {
                disabled: Z,
                onClick: () => void (ye ? ge() : un()),
                children: (0, J.jsx)(i, {
                  id: `workspaceDiscovery.retry`,
                  defaultMessage: `Try again`,
                  description: `Retry loading workspaces`,
                }),
              }),
            ],
          })
        : null,
    Tn =
      !Y && !ye && !M && !N && ct && U.length + W.length === 0
        ? (0, J.jsx)(`p`, {
            children: (0, J.jsx)(i, {
              id: `workspaceDiscovery.empty`,
              defaultMessage: `No workspaces to join`,
              description: `No discoverable workspaces are available`,
            }),
          })
        : null,
    En =
      !Y && U.length + W.length > 0
        ? (0, J.jsx)(`div`, {
            className: `w-full`,
            role: `list`,
            children: (0, J.jsxs)(_n, {
              children: [
                jt.map((e) =>
                  (0, J.jsx)(
                    wt,
                    {
                      name: e.isPersonalWorkspace
                        ? (C?.name ?? e.workspaceName ?? ``)
                        : (e.workspaceName ?? ``),
                      openRow: A,
                      personal: e.isPersonalWorkspace,
                      workspaceId: e.workspaceAccountId,
                      identifier: Yt.get(e.workspaceAccountId),
                      imageUrl: e.workspaceImageUrl ?? null,
                      action: (0, J.jsx)(t, {
                        color: `secondary`,
                        size: `dialogAction`,
                        disabled: Z || e.canAccessWithSession === !1,
                        loading: vt === e.workspaceAccountId,
                        onClick: () => void fn(e.workspaceAccountId),
                        children: (0, J.jsx)(i, {
                          id: `workspaceDiscovery.open`,
                          defaultMessage: `Open`,
                          description: `Open an existing ChatGPT workspace`,
                        }),
                      }),
                    },
                    e.workspaceAccountId,
                  ),
                ),
                qt.map((e) => {
                  let t = I[e.id]?.status,
                    n = (0, J.jsx)(pt, {
                      workspace: e,
                      status: t,
                      layout: gn,
                      busy: Z,
                      onClick: () => {
                        if (t === `joined`) {
                          fn(e.id, !0);
                          return;
                        }
                        if (t === `refresh_required`) {
                          un();
                          return;
                        }
                        if (z.current) return;
                        z.current = !0;
                        let n = crypto.randomUUID();
                        (ht(h, `clicked`, Qt, { workspaceId: e.id, flowId: n }),
                          _t(h, n, e.id, `action_initiated`, { beaconAttribution: S }),
                          L((t) => ({ ...t, [e.id]: { workspace: e, status: `pending` } })),
                          on({ workspace: e, flowId: n }));
                      },
                      onHover: () => cn(e.id),
                    });
                  return X == null
                    ? (0, J.jsx)(
                        wt,
                        {
                          name: e.name,
                          openRow: A,
                          identifier: Yt.get(e.id),
                          imageUrl: e.profile_picture_url,
                          memberCount: e.member_count,
                          action: n,
                        },
                        e.id,
                      )
                    : (0, J.jsx)(
                        `div`,
                        { className: `flex justify-center`, role: `listitem`, children: n },
                        e.id,
                      );
                }),
              ],
            }),
          })
        : null,
    Dn;
  n[38] !== bn ||
  n[39] !== U ||
  n[40] !== X ||
  n[41] !== Y ||
  n[42] !== w ||
  n[43] !== Xt ||
  n[44] !== xn ||
  n[45] !== Sn ||
  n[46] !== Cn ||
  n[47] !== wn ||
  n[48] !== Tn ||
  n[49] !== En
    ? ((Dn = (0, J.jsxs)(bn, {
        existingCount: U.length,
        requestableCount: Xt,
        email: xn,
        loading: Y,
        paginated: w,
        featuredWorkspace: X,
        children: [Sn, Cn, wn, Tn, En],
      })),
      (n[38] = bn),
      (n[39] = U),
      (n[40] = X),
      (n[41] = Y),
      (n[42] = w),
      (n[43] = Xt),
      (n[44] = xn),
      (n[45] = Sn),
      (n[46] = Cn),
      (n[47] = wn),
      (n[48] = Tn),
      (n[49] = En),
      (n[50] = Dn))
    : (Dn = n[50]);
  let On =
      w && k && X == null
        ? (0, J.jsxs)(J.Fragment, {
            children: [
              !Y && !M && !N && $e && !Dt && (ue.continued || G.length === 0)
                ? (0, J.jsx)(`p`, {
                    className: `select-none`,
                    role: `status`,
                    children: (0, J.jsx)(i, {
                      id: `workspaceDiscovery.pages.incomplete`,
                      defaultMessage: `More workspaces may be available. Select Next to keep looking`,
                      description: `Discovery has not finished scanning eligible workspaces; Next continues from the saved server cursor even when a batch adds no results`,
                    }),
                  })
                : null,
              (0, J.jsxs)(`nav`, {
                className: `flex items-center justify-between gap-2`,
                "aria-label": g.formatMessage({
                  id: `workspaceDiscovery.pages.label`,
                  defaultMessage: `Workspace result pages`,
                  description: `Accessible label for workspace discovery pagination`,
                }),
                children: [
                  (0, J.jsx)(t, {
                    color: `secondary`,
                    size: `dialogAction`,
                    disabled: Z || Y || Je || K === 0,
                    onClick: () => E({ page: K - 1, continued: !1 }),
                    children: (0, J.jsx)(i, {
                      id: `workspaceDiscovery.pages.previous`,
                      defaultMessage: `Previous`,
                      description: `Show the previous five workspace results`,
                    }),
                  }),
                  (0, J.jsx)(`span`, {
                    className: `text-sm text-secondary select-none`,
                    "aria-live": `polite`,
                    children: (0, J.jsx)(i, {
                      id: `workspaceDiscovery.pages.current`,
                      defaultMessage: `Page {page}`,
                      description: `Current visible workspace page number; the total is unknown while the server has more results`,
                      values: { page: K + 1 },
                    }),
                  }),
                  (0, J.jsx)(t, {
                    color: `secondary`,
                    size: `dialogAction`,
                    disabled: Z || Y || Je || (!Dt && (!$e || M || N)),
                    loading: Je,
                    onClick: () => void hn(),
                    children: (0, J.jsx)(i, {
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
    Q;
  n[51] !== Z || n[52] !== mn || n[53] !== f || n[54] !== w
    ? ((Q =
        f === `dismissible` && !w
          ? (0, J.jsx)(t, {
              size: `auth`,
              disabled: Z,
              onClick: mn,
              children: (0, J.jsx)(i, {
                id: `workspaceDiscovery.done`,
                defaultMessage: `Done`,
                description: `Close workspace discovery`,
              }),
            })
          : null),
      (n[51] = Z),
      (n[52] = mn),
      (n[53] = f),
      (n[54] = w),
      (n[55] = Q))
    : (Q = n[55]);
  let kn;
  n[56] !== Te?.has_more || n[57] !== w || n[58] !== k
    ? ((kn =
        k && !w && Te?.has_more
          ? (0, J.jsx)(`p`, {
              className: `text-center text-sm text-secondary`,
              children: (0, J.jsx)(i, {
                id: `workspaceDiscovery.hidden`,
                defaultMessage: `Some workspaces are not shown. Contact your admin if you don’t see yours`,
                description: `Additional discoverable workspaces are hidden`,
              }),
            })
          : null),
      (n[56] = Te?.has_more),
      (n[57] = w),
      (n[58] = k),
      (n[59] = kn))
    : (kn = n[59]);
  let An;
  n[60] !== Z ||
  n[61] !== P?.plan_type ||
  n[62] !== X ||
  n[63] !== f ||
  n[64] !== c ||
  n[65] !== dt ||
  n[66] !== w ||
  n[67] !== h ||
  n[68] !== F
    ? ((An = Ie(F, Kt)
        ? (0, J.jsx)(`div`, {
            className: X == null ? `contents` : `flex flex-col px-8`,
            children: (0, J.jsxs)(t, {
              color: `secondary`,
              size: w ? `dialogAction` : `auth`,
              disabled: Z,
              onClick: (e) => {
                if ((gt(h, P?.plan_type), f === `dismissible`)) {
                  (c?.(),
                    dt({
                      currentPlan: Ce(P?.plan_type)?.pricePlan ?? null,
                      defaultTab: `business`,
                      event: e,
                      chatGptContext: {
                        openModalLocation: Kt,
                        checkoutOriginProductExperience: `work`,
                        targetPlan: `team`,
                      },
                      source: `profile_menu`,
                    }));
                  return;
                }
                Ee({
                  event: e,
                  href: Ve({
                    openModalLocation: Kt,
                    checkoutOriginProductExperience: `work`,
                    targetPlan: `team`,
                  }),
                  openTarget: `external-browser`,
                  initiator: `open_in_browser_bridge`,
                });
              },
              children: [
                (0, J.jsx)(l, {}),
                (0, J.jsx)(i, {
                  id: `workspaceDiscovery.create`,
                  defaultMessage: `Create workspace`,
                  description: `Create a new ChatGPT Business workspace`,
                }),
              ],
            }),
          })
        : null),
      (n[60] = Z),
      (n[61] = P?.plan_type),
      (n[62] = X),
      (n[63] = f),
      (n[64] = c),
      (n[65] = dt),
      (n[66] = w),
      (n[67] = h),
      (n[68] = F),
      (n[69] = An))
    : (An = n[69]);
  let jn;
  n[70] !== yn || n[71] !== Dn || n[72] !== On || n[73] !== Q || n[74] !== kn || n[75] !== An
    ? ((jn = (0, J.jsxs)(`div`, { className: yn, children: [Dn, On, Q, kn, An] })),
      (n[70] = yn),
      (n[71] = Dn),
      (n[72] = On),
      (n[73] = Q),
      (n[74] = kn),
      (n[75] = An),
      (n[76] = jn))
    : (jn = n[76]);
  let Mn = jn,
    Nn = f === `dismissible` && !Z,
    Pn = !w,
    Fn = !w,
    In = X == null ? `default` : `beacon`,
    Ln = X == null ? `default` : `beaconModal`,
    Rn;
  n[77] !== mn || n[78] !== f
    ? ((Rn = (e) => {
        !e && f === `dismissible` && mn();
      }),
      (n[77] = mn),
      (n[78] = f),
      (n[79] = Rn))
    : (Rn = n[79]);
  let $;
  n[80] !== Z || n[81] !== f
    ? (($ = {
        onEscapeKeyDown: (e) => {
          (f === `blocking` || Z) && e.preventDefault();
        },
      }),
      (n[80] = Z),
      (n[81] = f),
      (n[82] = $))
    : ($ = n[82]);
  let zn;
  n[83] !== Mn || n[84] !== X || n[85] !== w
    ? ((zn = w
        ? (0, J.jsx)(ne, {
            size: `viewport`,
            className: `select-none`,
            variant: X == null ? `default` : `chatgpt`,
            children: Mn,
          })
        : (0, J.jsx)(`div`, {
            className: `flex h-full w-full justify-center overflow-y-auto bg-surface p-6 select-none`,
            children: Mn,
          })),
      (n[83] = Mn),
      (n[84] = X),
      (n[85] = w),
      (n[86] = zn))
    : (zn = n[86]);
  let Bn;
  return (
    n[87] !== Nn ||
    n[88] !== Pn ||
    n[89] !== Fn ||
    n[90] !== In ||
    n[91] !== Ln ||
    n[92] !== Rn ||
    n[93] !== $ ||
    n[94] !== zn
      ? ((Bn = (0, J.jsx)(te, {
          open: !0,
          showDialogClose: Nn,
          shouldIgnoreClickOutside: !0,
          unstyledContent: Pn,
          viewportSized: Fn,
          size: In,
          variant: Ln,
          onOpenChange: Rn,
          contentProps: $,
          children: zn,
        })),
        (n[87] = Nn),
        (n[88] = Pn),
        (n[89] = Fn),
        (n[90] = In),
        (n[91] = Ln),
        (n[92] = Rn),
        (n[93] = $),
        (n[94] = zn),
        (n[95] = Bn))
      : (Bn = n[95]),
    Bn
  );
}
function Et(e) {
  return e.workspaces.map(Dt);
}
function Dt(e) {
  return e.id;
}
function Ot(e) {
  return Object.fromEntries(Object.entries(e).filter(kt));
}
function kt(e) {
  let [, t] = e;
  return t.status === `joined`;
}
function At(e) {
  return e.workspaces.map(jt);
}
function jt(e) {
  return e.id;
}
function Mt(e) {
  return e.completion === `partial`;
}
function Nt(e) {
  return e.workspaceAccountId;
}
function Pt(e) {
  return !e.isDeactivated;
}
function Ft(e) {
  return e.id;
}
function It(e) {
  return { id: e.id, name: e.name };
}
function Lt(e) {
  return { id: e.workspaceAccountId, name: e.workspaceName ?? `` };
}
function Rt(e) {
  return !e.isPersonalWorkspace;
}
function zt(e) {
  return e.workspaceAccountId;
}
function Bt(e) {
  return [e.id, e];
}
function Vt(e) {
  return e.workspaces;
}
function Ht(e) {
  return e.completion === `partial`;
}
function Ut(e) {
  return fe(e.plan_type);
}
var Wt, q, J, Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Wt = oe()),
      a(),
      m(),
      d(),
      (q = se()),
      S(),
      Fe(),
      ue(),
      Pe(),
      D(),
      ie(),
      ae(),
      _(),
      ge(),
      f(),
      Ke(),
      ee(),
      Re(),
      xe(),
      j(),
      w(),
      c(),
      Qe(),
      M(),
      tt(),
      Me(),
      E(),
      Ne(),
      C(),
      mt(),
      xt(),
      ct(),
      at(),
      Ct(),
      G(),
      (J = T()),
      (Gt = 5),
      (Kt = `fullscreen-workspace-switcher`));
  }))();
}
export { I as i, qt as n, ft as r, K as t };
//# sourceMappingURL=workspace-discovery-89b02d9720ca.js.map
