import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HFt as i,
  HO as a,
  IO as o,
  JO as s,
  KO as c,
  LNt as l,
  NSt as u,
  Oit as d,
  PBt as f,
  Qst as ee,
  USt as p,
  Vrt as te,
  WO as ne,
  XOt as m,
  Y3 as re,
  Z3 as h,
  ZSt as g,
  hRt as _,
  iCt as v,
  jit as y,
  kRt as b,
  kzt as x,
  nCt as S,
  okt as ie,
  qO as ae,
  qrt as oe,
  tkt as C,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ir as w,
  $Un as se,
  CRn as ce,
  HAr as T,
  IAr as E,
  IVt as D,
  IWn as O,
  KIr as k,
  LIr as A,
  MGn as le,
  QIr as ue,
  QUn as de,
  TGn as fe,
  XIr as j,
  _Vt as pe,
  bRn as M,
  dLr as N,
  eLr as P,
  eWn as F,
  iRr as I,
  imr as me,
  lLr as he,
  njr as L,
  rmr as R,
  tjr as z,
  tyr as B,
  xMr as ge,
  yMr as V,
} from "./app-initial-ad16eaadf81f.js";
import { _x as H, gx as U } from "./app-primary-3e00728c2a4c.js";
function W(e) {
  let n = (0, ye.c)(70),
    { account: r, accountId: i, userId: a, onClose: s, onSwitchToWork: l } = e,
    u = t(ee),
    d = ie(),
    { email: f } = me(),
    [p, te] = (0, G.useState)(),
    m = (0, G.useRef)(!0),
    h,
    g;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = () => (
        (m.current = !0),
        () => {
          m.current = !1;
        }
      )),
      (g = []),
      (n[0] = h),
      (n[1] = g))
    : ((h = n[0]), (g = n[1])),
    (0, G.useEffect)(h, g));
  let _ = r.account.account_user_role === `account-owner`,
    v = r.account.account_user_role === `account-admin`,
    y = r.entitlement.has_active_subscription === !0,
    b = (_ || v) && y,
    x = _ || b,
    S;
  n[2] !== b || n[3] !== _
    ? ((S = F.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE),
      b
        ? (S = F.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY)
        : _ && (S = F.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE),
      (n[2] = b),
      (n[3] = _),
      (n[4] = S))
    : (S = n[4]);
  let w;
  n[5] !== r.account.account_user_role || n[6] !== S || n[7] !== y || n[8] !== u
    ? ((w = (e, t) => {
        ge(u, de, {
          actionType: e,
          ctaType: t !== void 0 && t ? S : void 0,
          userRole: r.account.account_user_role ?? void 0,
          hasPaidSubscription: y,
        });
      }),
      (n[5] = r.account.account_user_role),
      (n[6] = S),
      (n[7] = y),
      (n[8] = u),
      (n[9] = w))
    : (w = n[9]);
  let T = w,
    E;
  n[10] === s
    ? (E = n[11])
    : ((E = () => {
        (s(), ce({ href: new URL(`/codex/cloud`, pe).toString(), initiator: `open_in_browser_bridge` }));
      }),
      (n[10] = s),
      (n[11] = E));
  let D = E,
    O;
  n[12] !== r.account.subscription_seat_pools_enabled ||
  n[13] !== i ||
  n[14] !== D ||
  n[15] !== b ||
  n[16] !== f ||
  n[17] !== d ||
  n[18] !== _ ||
  n[19] !== T ||
  n[20] !== s ||
  n[21] !== l ||
  n[22] !== p ||
  n[23] !== u ||
  n[24] !== a
    ? ((O = async () => {
        if (p !== `requesting`) {
          if (
            (T(se.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED, !0), _ && !b)
          ) {
            let e = new URL(`/admin/members`, pe);
            (e.searchParams.set(`account_id`, i),
              f && e.searchParams.set(`search`, f),
              s(),
              ce({ href: e.toString(), initiator: `open_in_browser_bridge` }));
            return;
          }
          te(`requesting`);
          try {
            if (b) {
              if (
                (r.account.subscription_seat_pools_enabled
                  ? await I.safePost(`/accounts/{account_id}/users/{user_id}/seat/update`, {
                      parameters: { path: { account_id: i, user_id: a } },
                      requestBody: { operation: `switch`, seat_type: `default` },
                      isExpectedError: _e,
                    })
                  : await I.safePatch(`/accounts/{account_id}/users/{user_id}`, {
                      parameters: { path: { account_id: i, user_id: a } },
                      additionalHeaders: {
                        "X-OpenAI-Account-User-Update-Source": `web_usage_based_workspace_access_modal`,
                      },
                      requestBody: { seat_type: `default` },
                    }),
                !m.current)
              )
                return;
              (fe(u),
                await ue(`accounts-check`),
                await Promise.all([
                  u.query.invalidate(he, i),
                  u.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                ]),
                m.current && s());
            } else {
              if (
                (await I.safePost(`/accounts/{account_id}/invites/request`, {
                  parameters: { path: { account_id: i } },
                }),
                !m.current)
              )
                return;
              (l ? (s(), l()) : D(),
                u
                  .get(oe)
                  .success(
                    d.formatMessage({
                      id: `UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast`,
                      defaultMessage: `Access request submitted`,
                      description: `Success toast shown after requesting ChatGPT access from the modal`,
                    }),
                  ));
            }
          } catch (e) {
            let t = e;
            m.current && te(ve(t) ?? `error`);
          }
        }
      }),
      (n[12] = r.account.subscription_seat_pools_enabled),
      (n[13] = i),
      (n[14] = D),
      (n[15] = b),
      (n[16] = f),
      (n[17] = d),
      (n[18] = _),
      (n[19] = T),
      (n[20] = s),
      (n[21] = l),
      (n[22] = p),
      (n[23] = u),
      (n[24] = a),
      (n[25] = O))
    : (O = n[25]);
  let k = O,
    A;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, K.jsx)(C, {
        id: `UsageBasedWorkspaceAccessModal.chatWork.title`,
        defaultMessage: `You don’t have access to Chat on this plan`,
        description: `Title of the seat access explanation on the Chat surface. Chat is a product name.`,
      })),
      (n[26] = A))
    : (A = n[26]);
  let le = A,
    j;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, K.jsx)(C, {
        id: `UsageBasedWorkspaceAccessModal.chatWork.message`,
        defaultMessage: `You are assigned Work access only. Reach out to your admin to request access to ChatGPT.`,
        description: `Explanation for workspace members who need admin approval for ChatGPT access`,
      })),
      (n[27] = j))
    : (j = n[27]);
  let M = j;
  if (x) {
    let e;
    (n[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(C, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.ownerMessage`,
          defaultMessage: `Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.`,
          description: `Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access`,
        })),
        (n[28] = e))
      : (e = n[28]),
      (M = e));
  } else if (v) {
    let e;
    (n[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(C, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.adminMessage`,
          defaultMessage: `You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.`,
          description: `Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats`,
        })),
        (n[29] = e))
      : (e = n[29]),
      (M = e));
  }
  let N;
  n[30] !== T || n[31] !== s
    ? ((N = (e) => {
        e || (T(se.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED), s());
      }),
      (n[30] = T),
      (n[31] = s),
      (n[32] = N))
    : (N = n[32]);
  let P;
  n[33] === k
    ? (P = n[34])
    : ((P = (e) => {
        (e.preventDefault(), k());
      }),
      (n[33] = k),
      (n[34] = P));
  let L;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, K.jsx)(ae, { className: `heading-lg font-semibold`, children: le })), (n[35] = L))
    : (L = n[35]);
  let R;
  n[36] === M
    ? (R = n[37])
    : ((R = (0, K.jsxs)(`div`, {
        className: `flex w-full max-w-md flex-col gap-4`,
        children: [L, (0, K.jsx)(c, { className: `text-lg leading-6 text-secondary`, children: M })],
      })),
      (n[36] = M),
      (n[37] = R));
  let z = p === `requesting`,
    B = p === `requesting`,
    V;
  n[38] === x
    ? (V = n[39])
    : ((V = x
        ? (0, K.jsx)(C, {
            id: `UsageBasedWorkspaceAccessModal.updateSeatButton`,
            defaultMessage: `Update seat`,
            description: `Updates the current user's seat to include ChatGPT`,
          })
        : (0, K.jsx)(C, {
            id: `UsageBasedWorkspaceAccessModal.requestAccessButton`,
            defaultMessage: `Request access`,
            description: `Requests ChatGPT access from a workspace administrator`,
          })),
      (n[38] = x),
      (n[39] = V));
  let H;
  n[40] !== z || n[41] !== B || n[42] !== V
    ? ((H = (0, K.jsx)(re, {
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
  n[44] !== D || n[45] !== T || n[46] !== s || n[47] !== l
    ? ((U = () => {
        l
          ? (s(), l())
          : (T(se.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED), D());
      }),
      (n[44] = D),
      (n[45] = T),
      (n[46] = s),
      (n[47] = l),
      (n[48] = U))
    : (U = n[48]);
  let W;
  n[49] === l
    ? (W = n[50])
    : ((W = l
        ? (0, K.jsx)(C, {
            id: `UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton`,
            defaultMessage: `Switch to Work`,
            description: `Switches from the Chat access explanation to the available Work surface`,
          })
        : (0, K.jsx)(C, {
            id: `UsageBasedWorkspaceAccessModal.backToCodexButton`,
            defaultMessage: `Back to Codex`,
            description: `Returns to Codex from the Chat access explanation`,
          })),
      (n[49] = l),
      (n[50] = W));
  let q;
  n[51] !== U || n[52] !== W
    ? ((q = (0, K.jsx)(re, {
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
  n[57] !== d || n[58] !== p
    ? ((Y =
        p != null && p !== `requesting`
          ? (0, K.jsx)(`p`, {
              className: `text-sm text-secondary`,
              role: `alert`,
              children:
                p === `error`
                  ? (0, K.jsx)(C, {
                      id: `UsageBasedWorkspaceAccessModal.errorMessage`,
                      defaultMessage: `Could not request access. Please contact your workspace administrator to grant ChatGPT access.`,
                      description: `Error after a seat update or access request fails. The primary action can be retried.`,
                    })
                  : (0, K.jsx)(C, {
                      id: `businessSeatRenewal.wait`,
                      defaultMessage: `Seat changes are temporarily unavailable. Please try again after {time}.`,
                      description: `Error during a Business seat change when billing has not caught up. time is the suggested retry date and time in the user's locale and time zone, not a guaranteed completion time.`,
                      values: { time: d.formatDate(p.retry_at, { dateStyle: `medium`, timeStyle: `short` }) },
                    }),
            })
          : null),
      (n[57] = d),
      (n[58] = p),
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
  n[64] !== X || n[65] !== P
    ? ((Z = (0, K.jsx)(o, {
        as: `form`,
        className: `select-none`,
        size: `viewport`,
        variant: `chatgpt`,
        onSubmit: P,
        children: X,
      })),
      (n[64] = X),
      (n[65] = P),
      (n[66] = Z))
    : (Z = n[66]);
  let Q;
  return (
    n[67] !== Z || n[68] !== N
      ? ((Q = (0, K.jsx)(ne, { open: !0, size: `wide`, variant: `chatgpt`, onOpenChange: N, children: Z })),
        (n[67] = Z),
        (n[68] = N),
        (n[69] = Q))
      : (Q = n[69]),
    Q
  );
}
function _e(e) {
  return ve(e) != null;
}
function ve(e) {
  if (e instanceof y && e.status === 409)
    try {
      let t = b({
        detail: b({
          operation: _(`switch`),
          error_type: _(`stale_state`),
          retry: b({ reason: _(`renewal_in_progress`), retry_at: x() }),
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
    ((ye = f()),
      O(),
      g(),
      (G = r()),
      m(),
      i(),
      j(),
      N(),
      R(),
      B(),
      le(),
      D(),
      h(),
      s(),
      a(),
      M(),
      te(),
      V(),
      n(),
      d(),
      (K = l()));
  }))();
}
function J(e) {
  let n = (0, Z.c)(9),
    { modeToggle: r, onSwitchToWork: i } = e,
    a = t(ee),
    o = v(w),
    s = v(k),
    c = p();
  if (o.status !== `restricted`) return null;
  let l = `${o.accountId}:${o.userId}`,
    u;
  n[0] !== c || n[1] !== i || n[2] !== a || n[3] !== s.status
    ? ((u =
        s.status === `allowed`
          ? (i ??
            (() => {
              (T(a, `work`), c(`/`));
            }))
          : void 0),
      (n[0] = c),
      (n[1] = i),
      (n[2] = a),
      (n[3] = s.status),
      (n[4] = u))
    : (u = n[4]);
  let d;
  return (
    n[5] !== r || n[6] !== l || n[7] !== u
      ? ((d = (0, $.jsx)(Y, { modeToggle: r, onSwitchToWork: u }, l)),
        (n[5] = r),
        (n[6] = l),
        (n[7] = u),
        (n[8] = d))
      : (d = n[8]),
    d
  );
}
function Y(e) {
  let t = (0, Z.c)(13),
    { modeToggle: n, onSwitchToWork: r } = e,
    i = v(w),
    [a, o] = (0, Q.useState)(!1);
  if (i.status !== `restricted`) return null;
  let s;
  t[0] === n ? (s = t[1]) : ((s = n == null ? null : (0, $.jsx)(U, { children: n })), (t[0] = n), (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(`h1`, {
        className: `heading-xl font-normal text-default`,
        children: (0, $.jsx)(C, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.title`,
          defaultMessage: `You don’t have access to Chat on this plan`,
          description: `Title of the seat access explanation on the Chat surface. Chat is a product name.`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(`main`, {
        className: `flex h-full min-h-0 flex-1 items-center justify-center px-panel`,
        children: (0, $.jsxs)(`div`, {
          className: `flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none`,
          children: [
            c,
            (0, $.jsx)(re, {
              onClick: () => o(!1),
              children: (0, $.jsx)(C, {
                id: `chatSeatAccess.reviewAccess`,
                defaultMessage: `Review access options`,
                description: `Reopens the Chat seat access dialog after dismissal`,
              }),
            }),
          ],
        }),
      })),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] !== a || t[5] !== r || t[6] !== i.account || t[7] !== i.accountId || t[8] !== i.userId
    ? ((u = a
        ? null
        : (0, $.jsx)(W, {
            account: i.account,
            accountId: i.accountId,
            userId: i.userId,
            onClose: () => o(!0),
            onSwitchToWork: r,
          })),
      (t[4] = a),
      (t[5] = r),
      (t[6] = i.account),
      (t[7] = i.accountId),
      (t[8] = i.userId),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== s || t[11] !== u
      ? ((d = (0, $.jsxs)($.Fragment, { children: [s, l, u] })), (t[10] = s), (t[11] = u), (t[12] = d))
      : (d = t[12]),
    d
  );
}
function X(e) {
  let t = (0, Z.c)(4),
    { children: n, enabled: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { name: `chatgpt.seat-access` }), (t[0] = i))
    : (i = t[0]);
  let a = S(z, i);
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
    ((Z = f()), g(), (Q = r()), m(), u(), L(), A(), E(), h(), H(), n(), q(), P(), ($ = l()));
  }))();
}
export { J as n, be as r, X as t };
//# sourceMappingURL=screen-dff5c51b2696.js.map
