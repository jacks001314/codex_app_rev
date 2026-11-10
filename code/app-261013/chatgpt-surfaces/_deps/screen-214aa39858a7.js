import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $It as n,
  Cot as r,
  EPt as i,
  Ext as a,
  IDt as o,
  Ixt as s,
  Pxt as c,
  VDt as l,
  Vxt as u,
  _O as d,
  _xt as f,
  fO as p,
  frt as m,
  gO as ee,
  hot as te,
  hrt as h,
  jDt as g,
  lot as ne,
  mO as re,
  oO as ie,
  pLt as _,
  pRt as v,
  t3 as y,
  vO as b,
  vzt as x,
  wot as S,
  xMt as C,
  yzt as w,
  zxt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  BKt as E,
  DMr as ae,
  FBn as oe,
  FEr as D,
  IBn as se,
  JPn as O,
  LBn as ce,
  LMr as le,
  OMr as k,
  PEr as A,
  QDr as ue,
  TMr as j,
  XDr as M,
  Ymr as de,
  ZPn as fe,
  cHn as pe,
  ehr as me,
  fMr as N,
  fur as P,
  hHn as F,
  kMr as I,
  pur as he,
  vEr as L,
  wEr as R,
  xKt as ge,
  xMr as z,
  yVn as B,
  zMr as V,
} from "./app-initial-5851df3f6cb1.js";
import { Ub as H, Wb as U } from "./app-primary-fe8a450b3b04.js";
function W(e) {
  let n = (0, ye.c)(70),
    { account: i, accountId: a, userId: c, onClose: u, onSwitchToWork: f } = e,
    p = s(r),
    m = l(),
    { email: h } = he(),
    [g, ne] = (0, G.useState)(),
    _ = (0, G.useRef)(!0),
    v,
    y;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => (
        (_.current = !0),
        () => {
          _.current = !1;
        }
      )),
      (y = []),
      (n[0] = v),
      (n[1] = y))
    : ((v = n[0]), (y = n[1])),
    (0, G.useEffect)(v, y));
  let b = i.account.account_user_role === `account-owner`,
    x = i.account.account_user_role === `account-admin`,
    S = i.entitlement.has_active_subscription === !0,
    C = (b || x) && S,
    w = b || C,
    T;
  n[2] !== C || n[3] !== b
    ? ((T = ce.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE),
      C
        ? (T = ce.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY)
        : b &&
          (T = ce.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE),
      (n[2] = C),
      (n[3] = b),
      (n[4] = T))
    : (T = n[4]);
  let E;
  n[5] !== i.account.account_user_role || n[6] !== T || n[7] !== S || n[8] !== p
    ? ((E = (e, t) => {
        ue(p, oe, {
          actionType: e,
          ctaType: t !== void 0 && t ? T : void 0,
          userRole: i.account.account_user_role ?? void 0,
          hasPaidSubscription: S,
        });
      }),
      (n[5] = i.account.account_user_role),
      (n[6] = T),
      (n[7] = S),
      (n[8] = p),
      (n[9] = E))
    : (E = n[9]);
  let D = E,
    O;
  n[10] === u
    ? (O = n[11])
    : ((O = () => {
        (u(), fe({ href: new URL(`/codex/cloud`, ge).toString(), initiator: `open_in_browser_bridge` }));
      }),
      (n[10] = u),
      (n[11] = O));
  let k = O,
    A;
  n[12] !== i.account.subscription_seat_pools_enabled ||
  n[13] !== a ||
  n[14] !== k ||
  n[15] !== C ||
  n[16] !== h ||
  n[17] !== m ||
  n[18] !== b ||
  n[19] !== D ||
  n[20] !== u ||
  n[21] !== f ||
  n[22] !== g ||
  n[23] !== p ||
  n[24] !== c
    ? ((A = async () => {
        if (g !== `requesting`) {
          if (
            (D(se.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED, !0), b && !C)
          ) {
            let e = new URL(`/admin/members`, ge);
            (e.searchParams.set(`account_id`, a),
              h && e.searchParams.set(`search`, h),
              u(),
              fe({ href: e.toString(), initiator: `open_in_browser_bridge` }));
            return;
          }
          ne(`requesting`);
          try {
            if (C) {
              if (
                (i.account.subscription_seat_pools_enabled
                  ? await de.safePost(`/accounts/{account_id}/users/{user_id}/seat/update`, {
                      parameters: { path: { account_id: a, user_id: c } },
                      requestBody: { operation: `switch`, seat_type: `default` },
                      isExpectedError: _e,
                    })
                  : await de.safePatch(`/accounts/{account_id}/users/{user_id}`, {
                      parameters: { path: { account_id: a, user_id: c } },
                      additionalHeaders: {
                        "X-OpenAI-Account-User-Update-Source": `web_usage_based_workspace_access_modal`,
                      },
                      requestBody: { seat_type: `default` },
                    }),
                !_.current)
              )
                return;
              (pe(p),
                await ae(`accounts-check`),
                await Promise.all([
                  p.query.invalidate(le, a),
                  p.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                ]),
                _.current && u());
            } else {
              if (
                (await de.safePost(`/accounts/{account_id}/invites/request`, {
                  parameters: { path: { account_id: a } },
                }),
                !_.current)
              )
                return;
              (f ? (u(), f()) : k(),
                p
                  .get(te)
                  .success(
                    m.formatMessage({
                      id: `UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast`,
                      defaultMessage: `Access request submitted`,
                      description: `Success toast shown after requesting ChatGPT access from the modal`,
                    }),
                  ));
            }
          } catch (e) {
            let t = e;
            _.current && ne(ve(t) ?? `error`);
          }
        }
      }),
      (n[12] = i.account.subscription_seat_pools_enabled),
      (n[13] = a),
      (n[14] = k),
      (n[15] = C),
      (n[16] = h),
      (n[17] = m),
      (n[18] = b),
      (n[19] = D),
      (n[20] = u),
      (n[21] = f),
      (n[22] = g),
      (n[23] = p),
      (n[24] = c),
      (n[25] = A))
    : (A = n[25]);
  let j = A,
    M;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, K.jsx)(o, {
        id: `UsageBasedWorkspaceAccessModal.chatWork.title`,
        defaultMessage: `You don’t have access to Chat on this plan`,
        description: `Title of the seat access explanation on the Chat surface. Chat is a product name.`,
      })),
      (n[26] = M))
    : (M = n[26]);
  let me = M,
    N;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, K.jsx)(o, {
        id: `UsageBasedWorkspaceAccessModal.chatWork.message`,
        defaultMessage: `You are assigned Work access only. Reach out to your admin to request access to ChatGPT.`,
        description: `Explanation for workspace members who need admin approval for ChatGPT access`,
      })),
      (n[27] = N))
    : (N = n[27]);
  let P = N;
  if (w) {
    let e;
    (n[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(o, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.ownerMessage`,
          defaultMessage: `Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.`,
          description: `Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access`,
        })),
        (n[28] = e))
      : (e = n[28]),
      (P = e));
  } else if (x) {
    let e;
    (n[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(o, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.adminMessage`,
          defaultMessage: `You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.`,
          description: `Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats`,
        })),
        (n[29] = e))
      : (e = n[29]),
      (P = e));
  }
  let F;
  n[30] !== D || n[31] !== u
    ? ((F = (e) => {
        e || (D(se.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED), u());
      }),
      (n[30] = D),
      (n[31] = u),
      (n[32] = F))
    : (F = n[32]);
  let I;
  n[33] === j
    ? (I = n[34])
    : ((I = (e) => {
        (e.preventDefault(), j());
      }),
      (n[33] = j),
      (n[34] = I));
  let L;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, K.jsx)(d, { className: `heading-lg font-semibold`, children: me })), (n[35] = L))
    : (L = n[35]);
  let R;
  n[36] === P
    ? (R = n[37])
    : ((R = (0, K.jsxs)(`div`, {
        className: `flex w-full max-w-md flex-col gap-4`,
        children: [L, (0, K.jsx)(ee, { className: `text-lg leading-6 text-secondary`, children: P })],
      })),
      (n[36] = P),
      (n[37] = R));
  let z = g === `requesting`,
    B = g === `requesting`,
    V;
  n[38] === w
    ? (V = n[39])
    : ((V = w
        ? (0, K.jsx)(o, {
            id: `UsageBasedWorkspaceAccessModal.updateSeatButton`,
            defaultMessage: `Update seat`,
            description: `Updates the current user's seat to include ChatGPT`,
          })
        : (0, K.jsx)(o, {
            id: `UsageBasedWorkspaceAccessModal.requestAccessButton`,
            defaultMessage: `Request access`,
            description: `Requests ChatGPT access from a workspace administrator`,
          })),
      (n[38] = w),
      (n[39] = V));
  let H;
  n[40] !== z || n[41] !== B || n[42] !== V
    ? ((H = (0, K.jsx)(t, {
        autoFocus: !0,
        className: `w-full`,
        size: `auth`,
        type: `submit`,
        loading: z,
        disabled: B,
        children: V,
      })),
      (n[40] = z),
      (n[41] = B),
      (n[42] = V),
      (n[43] = H))
    : (H = n[43]);
  let U;
  n[44] !== k || n[45] !== D || n[46] !== u || n[47] !== f
    ? ((U = () => {
        f
          ? (u(), f())
          : (D(se.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED), k());
      }),
      (n[44] = k),
      (n[45] = D),
      (n[46] = u),
      (n[47] = f),
      (n[48] = U))
    : (U = n[48]);
  let W;
  n[49] === f
    ? (W = n[50])
    : ((W = f
        ? (0, K.jsx)(o, {
            id: `UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton`,
            defaultMessage: `Switch to Work`,
            description: `Switches from the Chat access explanation to the available Work surface`,
          })
        : (0, K.jsx)(o, {
            id: `UsageBasedWorkspaceAccessModal.backToCodexButton`,
            defaultMessage: `Back to Codex`,
            description: `Returns to Codex from the Chat access explanation`,
          })),
      (n[49] = f),
      (n[50] = W));
  let q;
  n[51] !== U || n[52] !== W
    ? ((q = (0, K.jsx)(t, {
        className: `w-full`,
        color: `outlineGhost`,
        size: `auth`,
        onClick: U,
        children: W,
      })),
      (n[51] = U),
      (n[52] = W),
      (n[53] = q))
    : (q = n[53]);
  let J;
  n[54] !== H || n[55] !== q
    ? ((J = (0, K.jsxs)(`div`, { className: `flex w-full max-w-xs flex-col gap-3`, children: [H, q] })),
      (n[54] = H),
      (n[55] = q),
      (n[56] = J))
    : (J = n[56]);
  let Y;
  n[57] !== m || n[58] !== g
    ? ((Y =
        g != null && g !== `requesting`
          ? (0, K.jsx)(`p`, {
              className: `text-sm text-secondary`,
              role: `alert`,
              children:
                g === `error`
                  ? (0, K.jsx)(o, {
                      id: `UsageBasedWorkspaceAccessModal.errorMessage`,
                      defaultMessage: `Could not request access. Please contact your workspace administrator to grant ChatGPT access.`,
                      description: `Error after a seat update or access request fails. The primary action can be retried.`,
                    })
                  : (0, K.jsx)(o, {
                      id: `businessSeatRenewal.wait`,
                      defaultMessage: `Seat changes are temporarily unavailable. Please try again after {time}.`,
                      description: `Error during a Business seat change when billing has not caught up. time is the suggested retry date and time in the user's locale and time zone, not a guaranteed completion time.`,
                      values: { time: m.formatDate(g.retry_at, { dateStyle: `medium`, timeStyle: `short` }) },
                    }),
            })
          : null),
      (n[57] = m),
      (n[58] = g),
      (n[59] = Y))
    : (Y = n[59]);
  let X;
  n[60] !== R || n[61] !== J || n[62] !== Y
    ? ((X = (0, K.jsxs)(`div`, {
        className: `flex flex-col items-center gap-8 p-10 text-center`,
        children: [R, J, Y],
      })),
      (n[60] = R),
      (n[61] = J),
      (n[62] = Y),
      (n[63] = X))
    : (X = n[63]);
  let Z;
  n[64] !== X || n[65] !== I
    ? ((Z = (0, K.jsx)(ie, {
        as: `form`,
        className: `select-none`,
        size: `viewport`,
        variant: `chatgpt`,
        onSubmit: I,
        children: X,
      })),
      (n[64] = X),
      (n[65] = I),
      (n[66] = Z))
    : (Z = n[66]);
  let Q;
  return (
    n[67] !== Z || n[68] !== F
      ? ((Q = (0, K.jsx)(re, { open: !0, size: `wide`, variant: `chatgpt`, onOpenChange: F, children: Z })),
        (n[67] = Z),
        (n[68] = F),
        (n[69] = Q))
      : (Q = n[69]),
    Q
  );
}
function _e(e) {
  return ve(e) != null;
}
function ve(e) {
  if (e instanceof h && e.status === 409)
    try {
      let t = _({
        detail: _({
          operation: n(`switch`),
          error_type: n(`stale_state`),
          retry: _({ reason: n(`renewal_in_progress`), retry_at: v() }),
        }),
      }).safeParse(JSON.parse(e.message));
      return t.success ? t.data.detail.retry : void 0;
    } catch {
      return;
    }
}
var ye, G, K;
function q() {
  return (q = e(() => {
    ((ye = x()),
      B(),
      c(),
      (G = w()),
      g(),
      i(),
      j(),
      V(),
      P(),
      me(),
      F(),
      E(),
      y(),
      b(),
      p(),
      O(),
      ne(),
      M(),
      S(),
      m(),
      (K = C()));
  }))();
}
function J(e) {
  let t = (0, Z.c)(9),
    { modeToggle: n, onSwitchToWork: i } = e,
    o = s(r),
    c = u(k),
    l = u(z),
    d = a();
  if (c.status !== `restricted`) return null;
  let f = `${c.accountId}:${c.userId}`,
    p;
  t[0] !== d || t[1] !== i || t[2] !== o || t[3] !== l.status
    ? ((p =
        l.status === `allowed`
          ? (i ??
            (() => {
              (R(o, `work`), d(`/`));
            }))
          : void 0),
      (t[0] = d),
      (t[1] = i),
      (t[2] = o),
      (t[3] = l.status),
      (t[4] = p))
    : (p = t[4]);
  let m;
  return (
    t[5] !== n || t[6] !== f || t[7] !== p
      ? ((m = (0, $.jsx)(Y, { modeToggle: n, onSwitchToWork: p }, f)),
        (t[5] = n),
        (t[6] = f),
        (t[7] = p),
        (t[8] = m))
      : (m = t[8]),
    m
  );
}
function Y(e) {
  let n = (0, Z.c)(13),
    { modeToggle: r, onSwitchToWork: i } = e,
    a = u(k),
    [s, c] = (0, Q.useState)(!1);
  if (a.status !== `restricted`) return null;
  let l;
  n[0] === r ? (l = n[1]) : ((l = r == null ? null : (0, $.jsx)(H, { children: r })), (n[0] = r), (n[1] = l));
  let d;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`h1`, {
        className: `heading-xl font-normal text-default`,
        children: (0, $.jsx)(o, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.title`,
          defaultMessage: `You don’t have access to Chat on this plan`,
          description: `Title of the seat access explanation on the Chat surface. Chat is a product name.`,
        }),
      })),
      (n[2] = d))
    : (d = n[2]);
  let f;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(`main`, {
        className: `flex h-full min-h-0 flex-1 items-center justify-center px-panel`,
        children: (0, $.jsxs)(`div`, {
          className: `flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none`,
          children: [
            d,
            (0, $.jsx)(t, {
              onClick: () => c(!1),
              children: (0, $.jsx)(o, {
                id: `chatSeatAccess.reviewAccess`,
                defaultMessage: `Review access options`,
                description: `Reopens the Chat seat access dialog after dismissal`,
              }),
            }),
          ],
        }),
      })),
      (n[3] = f))
    : (f = n[3]);
  let p;
  n[4] !== s || n[5] !== i || n[6] !== a.account || n[7] !== a.accountId || n[8] !== a.userId
    ? ((p = s
        ? null
        : (0, $.jsx)(W, {
            account: a.account,
            accountId: a.accountId,
            userId: a.userId,
            onClose: () => c(!0),
            onSwitchToWork: i,
          })),
      (n[4] = s),
      (n[5] = i),
      (n[6] = a.account),
      (n[7] = a.accountId),
      (n[8] = a.userId),
      (n[9] = p))
    : (p = n[9]);
  let m;
  return (
    n[10] !== l || n[11] !== p
      ? ((m = (0, $.jsxs)($.Fragment, { children: [l, f, p] })), (n[10] = l), (n[11] = p), (n[12] = m))
      : (m = n[12]),
    m
  );
}
function X(e) {
  let t = (0, Z.c)(4),
    { children: n, enabled: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { name: `chatgpt.seat-access` }), (t[0] = i))
    : (i = t[0]);
  let a = T(A, i);
  if (!r) return n;
  if (a.isLoading) return null;
  let o;
  return (
    t[1] !== a.isCapable || t[2] !== n
      ? ((o = a.isCapable ? (0, $.jsx)(J, {}) : n), (t[1] = a.isCapable), (t[2] = n), (t[3] = o))
      : (o = t[3]),
    o
  );
}
var Z, Q, $;
function be() {
  return (be = e(() => {
    ((Z = x()), c(), (Q = w()), g(), f(), D(), N(), L(), y(), U(), S(), q(), I(), ($ = C()));
  }))();
}
export { J as n, be as r, X as t };
//# sourceMappingURL=screen-214aa39858a7.js.map
