import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  AD as n,
  BOt as r,
  F5t as i,
  HS as a,
  LS as o,
  MD as s,
  MS as c,
  N5t as l,
  NS as u,
  O5t as d,
  POt as f,
  PS as p,
  QAt as m,
  SE as h,
  US as g,
  VS as _,
  Wrn as v,
  Yrn as y,
  _dn as b,
  bE as x,
  bvt as S,
  dJt as C,
  ein as w,
  fJt as T,
  hvt as E,
  jS as D,
  mcn as O,
  tjt as k,
  vdn as A,
} from "./app-shared-7552fc8d5d82.js";
import {
  BZt as j,
  Lun as M,
  Run as N,
  VZt as P,
  hk as F,
  mk as I,
} from "./app-initial-3916b423772b.js";
import { i as L, n as R, r as z, t as B } from "./requests-state-774cb104291f.js";
function V(e) {
  let t = (0, q.c)(9),
    n = i(f),
    r;
  t[0] !== e.accountId || t[1] !== e.pluginId || t[2] !== e.teamId || t[3] !== n
    ? ((r = JSON.stringify([e.accountId, n, e.teamId, e.pluginId])),
      (t[0] = e.accountId),
      (t[1] = e.pluginId),
      (t[2] = e.teamId),
      (t[3] = n),
      (t[4] = r))
    : (r = t[4]);
  let a;
  return (
    t[5] !== e || t[6] !== r || t[7] !== n
      ? ((a = (0, Y.jsx)(H, { ...e, userId: n }, r)),
        (t[5] = e),
        (t[6] = r),
        (t[7] = n),
        (t[8] = a))
      : (a = t[8]),
    a
  );
}
function H(e) {
  let t = (0, q.c)(40),
    { accountId: n, userId: r, teamId: i, pluginId: a, pluginName: o, originUrl: u, onBack: d } = e,
    f = l(L, n),
    m;
  t[0] !== n || t[1] !== a || t[2] !== r
    ? ((m = { accountId: n, pluginId: a, userId: r }),
      (t[0] = n),
      (t[1] = a),
      (t[2] = r),
      (t[3] = m))
    : (m = t[3]);
  let { data: h, error: g, isFetching: _, isFetchedAfterMount: v, refetch: b } = l(z, m),
    [S, C] = (0, J.useState)(0),
    [w, T] = (0, J.useState)(!1);
  if ((!w && v && g == null && T(!0), f && w && h != null)) {
    let e = h.request ?? null,
      s;
    t[4] === b
      ? (s = t[5])
      : ((s = () => {
          b().then((e) => {
            e.isSuccess && C(U);
          });
        }),
        (t[4] = b),
        (t[5] = s));
    let c;
    return (
      t[6] !== n ||
      t[7] !== d ||
      t[8] !== u ||
      t[9] !== a ||
      t[10] !== o ||
      t[11] !== e ||
      t[12] !== s ||
      t[13] !== i ||
      t[14] !== r ||
      t[15] !== S
        ? ((c = (0, Y.jsx)(
            W,
            {
              accountId: n,
              userId: r,
              teamId: i,
              pluginId: a,
              pluginName: o,
              originUrl: u,
              request: e,
              onBack: d,
              onReload: s,
            },
            S,
          )),
          (t[6] = n),
          (t[7] = d),
          (t[8] = u),
          (t[9] = a),
          (t[10] = o),
          (t[11] = e),
          (t[12] = s),
          (t[13] = i),
          (t[14] = r),
          (t[15] = S),
          (t[16] = c))
        : (c = t[16]),
      c
    );
  }
  let E;
  t[17] === o ? (E = t[18]) : ((E = (0, Y.jsx)(K, { pluginName: o })), (t[17] = o), (t[18] = E));
  let O;
  t[19] === f
    ? (O = t[20])
    : ((O = f ? null : (0, Y.jsx)(y, { ...s.unavailable })), (t[19] = f), (t[20] = O));
  let k;
  t[21] !== f || t[22] !== g || t[23] !== _ || t[24] !== b
    ? ((k =
        f && g != null
          ? (0, Y.jsx)(j, {
              type: `error`,
              content: (0, Y.jsx)(y, {
                id: `settings.teams.connectionRequest.loadError`,
                defaultMessage: `Couldn't load your request`,
                description: `Error in a team's Request workspace connection dialog when checking this member's existing workspace connection request fails`,
              }),
              primaryCtaText: (0, Y.jsx)(y, { ...s.retry }),
              isPrimaryCtaDisabled: _,
              onPrimaryCtaClick: () => void b(),
            })
          : null),
      (t[21] = f),
      (t[22] = g),
      (t[23] = _),
      (t[24] = b),
      (t[25] = k))
    : (k = t[25]);
  let A;
  t[26] !== f || t[27] !== g
    ? ((A = f && g == null ? (0, Y.jsx)(I, {}) : null), (t[26] = f), (t[27] = g), (t[28] = A))
    : (A = t[28]);
  let M;
  t[29] !== O || t[30] !== k || t[31] !== A
    ? ((M = (0, Y.jsxs)(p, { children: [O, k, A] })),
      (t[29] = O),
      (t[30] = k),
      (t[31] = A),
      (t[32] = M))
    : (M = t[32]);
  let N;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, Y.jsx)(y, {
        id: `settings.teams.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes a team or membership dialog without saving`,
      })),
      (t[33] = N))
    : (N = t[33]);
  let P;
  t[34] === d
    ? (P = t[35])
    : ((P = (0, Y.jsx)(p, {
        children: (0, Y.jsx)(c, {
          children: (0, Y.jsx)(x, { color: `secondary`, onClick: d, children: N }),
        }),
      })),
      (t[34] = d),
      (t[35] = P));
  let F;
  return (
    t[36] !== E || t[37] !== M || t[38] !== P
      ? ((F = (0, Y.jsxs)(D, { size: `viewport`, children: [E, M, P] })),
        (t[36] = E),
        (t[37] = M),
        (t[38] = P),
        (t[39] = F))
      : (F = t[39]),
    F
  );
}
function U(e) {
  return e + 1;
}
function W(e) {
  let n = (0, q.c)(41),
    {
      accountId: r,
      userId: i,
      teamId: a,
      pluginId: o,
      pluginName: s,
      originUrl: l,
      request: u,
      onBack: d,
      onReload: f,
    } = e,
    m = t(C),
    h = w(),
    [g] = (0, J.useState)(u),
    _ = g?.status === `open` ? g : null,
    [v, b] = (0, J.useState)(_?.reason ?? ``),
    [S] = (0, J.useState)(G),
    [T, O] = (0, J.useState)(`idle`),
    A = T === `saving`,
    N;
  n[0] !== r ||
  n[1] !== S ||
  n[2] !== A ||
  n[3] !== l ||
  n[4] !== _ ||
  n[5] !== o ||
  n[6] !== v ||
  n[7] !== m ||
  n[8] !== T ||
  n[9] !== a ||
  n[10] !== i
    ? ((N = (e) => {
        if ((e.preventDefault(), A || T === `saved` || T === `conflict` || !v.trim())) return;
        O(`saving`);
        let t = { accountId: r, pluginId: o, userId: i };
        (async () => {
          let e = R(m, t),
            n = await E.safePost(`/admin-requests`, {
              additionalHeaders: { "x-openai-use-sheep": `1` },
              expectedIdentity: { accountId: r, userId: e },
              requestBody: {
                request:
                  _ == null
                    ? {
                        operation: `create`,
                        subject: { request_type: `workspace_connection`, target_id: o },
                        idempotency_key: S,
                        reason: v.trim(),
                        origin_team_id: a,
                        origin_url: l,
                      }
                    : {
                        operation: `update`,
                        request_id: _.id,
                        revision: _.revision,
                        reason: v.trim(),
                      },
              },
              retry: !1,
              assertRequestCurrent: () => R(m, t),
            });
          if ((R(m, t), n.request == null)) throw Error(`Request response is missing`);
          (await m.query.cancel(z, t),
            R(m, t),
            m.query.setData(z, t, n),
            O(n.request.status === `open` && n.request.reason === v.trim() ? `saved` : `conflict`));
        })().catch((e) => {
          O(e instanceof k && e.status === 409 ? `conflict` : `error`);
        });
      }),
      (n[0] = r),
      (n[1] = S),
      (n[2] = A),
      (n[3] = l),
      (n[4] = _),
      (n[5] = o),
      (n[6] = v),
      (n[7] = m),
      (n[8] = T),
      (n[9] = a),
      (n[10] = i),
      (n[11] = N))
    : (N = n[11]);
  let P;
  n[12] === s ? (P = n[13]) : ((P = (0, Y.jsx)(K, { pluginName: s })), (n[12] = s), (n[13] = P));
  let F;
  n[14] !== h ||
  n[15] !== A ||
  n[16] !== f ||
  n[17] !== g ||
  n[18] !== _ ||
  n[19] !== v ||
  n[20] !== T
    ? ((F =
        T === `saved`
          ? (0, Y.jsx)(p, {
              children: (0, Y.jsx)(j, {
                type: `success`,
                role: `status`,
                content:
                  _ == null
                    ? (0, Y.jsx)(y, {
                        id: `settings.teams.connectionRequest.sent`,
                        defaultMessage: `Request sent to your workspace admins`,
                        description: `Success confirmation after a team member's request for a workspace connection has been saved; it does not promise email delivery`,
                      })
                    : (0, Y.jsx)(y, {
                        id: `settings.teams.connectionRequest.updated`,
                        defaultMessage: `Your request has been updated`,
                        description: `Success confirmation after a member saves a new reason on their pending workspace connection request`,
                      }),
              }),
            })
          : (0, Y.jsxs)(Y.Fragment, {
              children: [
                g == null
                  ? null
                  : (0, Y.jsxs)(p, {
                      children: [
                        (0, Y.jsx)(j, {
                          content:
                            _ == null
                              ? (0, Y.jsx)(y, {
                                  id: `settings.teams.connectionRequest.closed`,
                                  defaultMessage: `Your previous request was {resolution, select, fulfilled {fulfilled} other {closed}}. You can request another connection below`,
                                  description: `Notice in a team's Request workspace connection dialog when this member's most recent request is closed. {resolution} selects fulfilled if an administrator created the connection, or closed for other outcomes`,
                                  values: { resolution: g.resolution },
                                })
                              : (0, Y.jsx)(y, {
                                  id: `settings.teams.connectionRequest.pending`,
                                  defaultMessage: `You already have a pending request for this connection. You can update your reason below`,
                                  description: `Notice in a team's Request workspace connection dialog when this member already has an open request for the same plugin anywhere in the workspace`,
                                }),
                        }),
                        g.closing_note
                          ? (0, Y.jsx)(`p`, {
                              className: `text-sm whitespace-pre-wrap select-text`,
                              children: g.closing_note,
                            })
                          : null,
                      ],
                    }),
                (0, Y.jsx)(p, {
                  children: (0, Y.jsxs)(`label`, {
                    className: `flex flex-col gap-2 text-sm font-medium text-default`,
                    children: [
                      (0, Y.jsx)(y, {
                        id: `settings.teams.connectionRequest.reason`,
                        defaultMessage: `Why do you need this connection?`,
                        description: `Label for the required reason field in a team's Request workspace connection dialog; the member explains their need to workspace administrators`,
                      }),
                      (0, Y.jsx)(M, {
                        autoFocus: !0,
                        placeholder: h.formatMessage({
                          id: `settings.teams.connectionRequest.reasonPlaceholder`,
                          defaultMessage: `Add a reason`,
                          description: `Placeholder for the reason to request a workspace connection`,
                        }),
                        required: !0,
                        rows: 4,
                        maxLength: 4e3,
                        disabled: A,
                        value: v,
                        onChange: (e) => b(e.target.value),
                      }),
                    ],
                  }),
                }),
                T === `error` || T === `conflict`
                  ? (0, Y.jsx)(p, {
                      children: (0, Y.jsx)(j, {
                        type: `error`,
                        role: `alert`,
                        content:
                          T === `conflict`
                            ? (0, Y.jsx)(y, {
                                id: `settings.teams.connectionRequest.conflict`,
                                defaultMessage: `This request changed while you were editing. Reload to see the latest version; your edits won't be saved`,
                                description: `Conflict error when a workspace connection request was updated or closed elsewhere; the adjacent reload button discards the unsaved reason and loads current data`,
                              })
                            : (0, Y.jsx)(y, {
                                id: `settings.teams.connectionRequest.saveError`,
                                defaultMessage: `Couldn't save your request. Please try again`,
                                description: `Error in a team's Request workspace connection dialog after saving fails; the member's reason is preserved for retry`,
                              }),
                        primaryCtaText:
                          T === `conflict`
                            ? (0, Y.jsx)(y, {
                                id: `settings.teams.connectionRequest.reload`,
                                defaultMessage: `Reload request`,
                                description: `Button in a workspace connection request conflict message that discards unsaved edits and retrieves the current request`,
                              })
                            : void 0,
                        onPrimaryCtaClick: T === `conflict` ? f : void 0,
                      }),
                    })
                  : null,
              ],
            })),
      (n[14] = h),
      (n[15] = A),
      (n[16] = f),
      (n[17] = g),
      (n[18] = _),
      (n[19] = v),
      (n[20] = T),
      (n[21] = F))
    : (F = n[21]);
  let I;
  n[22] === T
    ? (I = n[23])
    : ((I =
        T === `saved`
          ? (0, Y.jsx)(y, {
              id: `settings.teams.connectionRequest.done`,
              defaultMessage: `Done`,
              description: `Button returning to the team's connection settings after successfully saving a workspace connection request`,
            })
          : (0, Y.jsx)(y, {
              id: `settings.teams.dialog.cancel`,
              defaultMessage: `Cancel`,
              description: `Button that closes a team or membership dialog without saving`,
            })),
      (n[22] = T),
      (n[23] = I));
  let L;
  n[24] !== A || n[25] !== d || n[26] !== I
    ? ((L = (0, Y.jsx)(x, { color: `secondary`, disabled: A, onClick: d, children: I })),
      (n[24] = A),
      (n[25] = d),
      (n[26] = I),
      (n[27] = L))
    : (L = n[27]);
  let B;
  n[28] !== A || n[29] !== _ || n[30] !== v || n[31] !== T
    ? ((B =
        T === `saved`
          ? null
          : (0, Y.jsx)(x, {
              type: `submit`,
              color: `primary`,
              loading: A,
              disabled: A || !v.trim() || T === `conflict`,
              children:
                _ == null
                  ? (0, Y.jsx)(y, {
                      id: `settings.teams.connectionRequest.submit`,
                      defaultMessage: `Send`,
                      description: `Primary button submitting a team member's request for an administrator to create a workspace connection`,
                    })
                  : (0, Y.jsx)(y, {
                      id: `settings.teams.connectionRequest.save`,
                      defaultMessage: `Save changes`,
                      description: `Primary button saving the edited reason on a member's existing workspace connection request`,
                    }),
            })),
      (n[28] = A),
      (n[29] = _),
      (n[30] = v),
      (n[31] = T),
      (n[32] = B))
    : (B = n[32]);
  let V;
  n[33] !== L || n[34] !== B
    ? ((V = (0, Y.jsx)(p, { children: (0, Y.jsxs)(c, { children: [L, B] }) })),
      (n[33] = L),
      (n[34] = B),
      (n[35] = V))
    : (V = n[35]);
  let H;
  return (
    n[36] !== N || n[37] !== P || n[38] !== F || n[39] !== V
      ? ((H = (0, Y.jsxs)(D, { as: `form`, size: `viewport`, onSubmit: N, children: [P, F, V] })),
        (n[36] = N),
        (n[37] = P),
        (n[38] = F),
        (n[39] = V),
        (n[40] = H))
      : (H = n[40]),
    H
  );
}
function G() {
  return crypto.randomUUID();
}
function K(e) {
  let t = (0, q.c)(3),
    { pluginName: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(a, {
        children: (0, Y.jsx)(y, {
          id: `settings.teams.connectionRequest.title`,
          defaultMessage: `Request workspace connection`,
          description: `Title of the screen where a team member asks their workspace administrators for a connection`,
        }),
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, Y.jsx)(p, {
          children: (0, Y.jsx)(u, {
            titleSize: `base`,
            subtitleSize: `sm`,
            title: r,
            subtitle: (0, Y.jsx)(_, {
              children: (0, Y.jsx)(y, {
                id: `settings.teams.connectionRequest.description`,
                defaultMessage: `Ask a workspace admin to add a {pluginName} workspace connection for your team`,
                description: `Explanation in a team's Request workspace connection dialog; {pluginName} is the untranslated app name, such as GitHub`,
                values: { pluginName: n },
              }),
            }),
          }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = b()),
      d(),
      (J = A()),
      v(),
      r(),
      S(),
      P(),
      h(),
      g(),
      o(),
      N(),
      T(),
      F(),
      B(),
      n(),
      m(),
      (Y = O()));
  }))();
}
X();
export { V as TeamConnectionRequestScreen };
//# sourceMappingURL=request-screen-7375e509c044.js.map
