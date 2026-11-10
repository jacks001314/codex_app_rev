import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  AE as n,
  Ck as r,
  EDt as i,
  F5t as a,
  HS as o,
  Jun as s,
  LS as c,
  N5t as l,
  O5t as u,
  QAt as d,
  SE as f,
  US as p,
  Uun as m,
  VS as ee,
  Wrn as h,
  Yrn as g,
  _Dt as _,
  _Rt as v,
  _dn as y,
  b5t as te,
  bDt as ne,
  bE as re,
  bun as b,
  bvt as x,
  d5t as S,
  dDt as C,
  dJt as ie,
  ein as ae,
  fJt as w,
  gPt as oe,
  hvt as se,
  jS as ce,
  kDt as T,
  kE as E,
  lG as D,
  lPt as O,
  ldn as k,
  mcn as A,
  nDt as le,
  tjt as j,
  uG as ue,
  vdn as M,
  wk as N,
  yRt as de,
  zS as fe,
} from "./app-shared-7552fc8d5d82.js";
import {
  Bln as P,
  DGt as F,
  EFn as I,
  MFn as L,
  Pln as pe,
  cGt as me,
  e8t as he,
  idn as R,
  n8t as z,
  odn as ge,
  t8t as B,
  z8t as V,
} from "./app-initial-3916b423772b.js";
import { Db as H, Eb as U } from "./app-primary-7b889402e22e.js";
function W(e) {
  let n = (0, ye.c)(70),
    { account: r, accountId: a, userId: s, onClose: c, onSwitchToWork: l } = e,
    u = t(ie),
    d = ae(),
    { email: f } = ue(),
    [p, m] = (0, G.useState)(),
    h = (0, G.useRef)(!0),
    _,
    v;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => (
        (h.current = !0),
        () => {
          h.current = !1;
        }
      )),
      (v = []),
      (n[0] = _),
      (n[1] = v))
    : ((_ = n[0]), (v = n[1])),
    (0, G.useEffect)(_, v));
  let y = r.account.account_user_role === `account-owner`,
    te = r.account.account_user_role === `account-admin`,
    b = r.entitlement.has_active_subscription === !0,
    x = (y || te) && b,
    S = y || x,
    C;
  n[2] !== x || n[3] !== y
    ? ((C = z.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE),
      x
        ? (C = z.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY)
        : y &&
          (C =
            z.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE),
      (n[2] = x),
      (n[3] = y),
      (n[4] = C))
    : (C = n[4]);
  let w;
  n[5] !== r.account.account_user_role || n[6] !== C || n[7] !== b || n[8] !== u
    ? ((w = (e, t) => {
        de(u, he, {
          actionType: e,
          ctaType: t !== void 0 && t ? C : void 0,
          userRole: r.account.account_user_role ?? void 0,
          hasPaidSubscription: b,
        });
      }),
      (n[5] = r.account.account_user_role),
      (n[6] = C),
      (n[7] = b),
      (n[8] = u),
      (n[9] = w))
    : (w = n[9]);
  let T = w,
    E;
  n[10] === c
    ? (E = n[11])
    : ((E = () => {
        (c(),
          ge({
            href: new URL(`/codex/cloud`, me).toString(),
            initiator: `open_in_browser_bridge`,
          }));
      }),
      (n[10] = c),
      (n[11] = E));
  let D = E,
    O;
  n[12] !== r.account.subscription_seat_pools_enabled ||
  n[13] !== a ||
  n[14] !== D ||
  n[15] !== x ||
  n[16] !== f ||
  n[17] !== d ||
  n[18] !== y ||
  n[19] !== T ||
  n[20] !== c ||
  n[21] !== l ||
  n[22] !== p ||
  n[23] !== u ||
  n[24] !== s
    ? ((O = async () => {
        if (p !== `requesting`) {
          if (
            (T(B.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED, !0),
            y && !x)
          ) {
            let e = new URL(`/admin/members`, me);
            (e.searchParams.set(`account_id`, a),
              f && e.searchParams.set(`search`, f),
              c(),
              ge({ href: e.toString(), initiator: `open_in_browser_bridge` }));
            return;
          }
          m(`requesting`);
          try {
            if (x) {
              if (
                (r.account.subscription_seat_pools_enabled
                  ? await se.safePost(`/accounts/{account_id}/users/{user_id}/seat/update`, {
                      parameters: { path: { account_id: a, user_id: s } },
                      requestBody: { operation: `switch`, seat_type: `default` },
                      isExpectedError: _e,
                    })
                  : await se.safePatch(`/accounts/{account_id}/users/{user_id}`, {
                      parameters: { path: { account_id: a, user_id: s } },
                      additionalHeaders: {
                        "X-OpenAI-Account-User-Update-Source": `web_usage_based_workspace_access_modal`,
                      },
                      requestBody: { seat_type: `default` },
                    }),
                !h.current)
              )
                return;
              (pe(u),
                await ne(`accounts-check`),
                await Promise.all([
                  u.query.invalidate(i, a),
                  u.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] }),
                ]),
                h.current && c());
            } else {
              if (
                (await se.safePost(`/accounts/{account_id}/invites/request`, {
                  parameters: { path: { account_id: a } },
                }),
                !h.current)
              )
                return;
              (l ? (c(), l()) : D(),
                u.get(oe).success(
                  d.formatMessage({
                    id: `UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast`,
                    defaultMessage: `Access request submitted`,
                    description: `Success toast shown after requesting ChatGPT access from the modal`,
                  }),
                ));
            }
          } catch (e) {
            let t = e;
            h.current && m(ve(t) ?? `error`);
          }
        }
      }),
      (n[12] = r.account.subscription_seat_pools_enabled),
      (n[13] = a),
      (n[14] = D),
      (n[15] = x),
      (n[16] = f),
      (n[17] = d),
      (n[18] = y),
      (n[19] = T),
      (n[20] = c),
      (n[21] = l),
      (n[22] = p),
      (n[23] = u),
      (n[24] = s),
      (n[25] = O))
    : (O = n[25]);
  let k = O,
    A;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, K.jsx)(g, {
        id: `UsageBasedWorkspaceAccessModal.chatWork.title`,
        defaultMessage: `You don’t have access to Chat on this plan`,
        description: `Title of the seat access explanation on the Chat surface. Chat is a product name.`,
      })),
      (n[26] = A))
    : (A = n[26]);
  let le = A,
    j;
  n[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, K.jsx)(g, {
        id: `UsageBasedWorkspaceAccessModal.chatWork.message`,
        defaultMessage: `You are assigned Work access only. Reach out to your admin to request access to ChatGPT.`,
        description: `Explanation for workspace members who need admin approval for ChatGPT access`,
      })),
      (n[27] = j))
    : (j = n[27]);
  let M = j;
  if (S) {
    let e;
    (n[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(g, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.ownerMessage`,
          defaultMessage: `Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT.`,
          description: `Explanation for workspace owners and paid admins who can update their seat to get ChatGPT access`,
        })),
        (n[28] = e))
      : (e = n[28]),
      (M = e));
  } else if (te) {
    let e;
    (n[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, K.jsx)(g, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.adminMessage`,
          defaultMessage: `You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings.`,
          description: `Explanation for unpaid workspace admins who need an owner to buy ChatGPT seats`,
        })),
        (n[29] = e))
      : (e = n[29]),
      (M = e));
  }
  let N;
  n[30] !== T || n[31] !== c
    ? ((N = (e) => {
        e || (T(B.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED), c());
      }),
      (n[30] = T),
      (n[31] = c),
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
  let F;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, K.jsx)(o, { className: `heading-lg font-semibold`, children: le })), (n[35] = F))
    : (F = n[35]);
  let I;
  n[36] === M
    ? (I = n[37])
    : ((I = (0, K.jsxs)(`div`, {
        className: `flex w-full max-w-md flex-col gap-4`,
        children: [
          F,
          (0, K.jsx)(ee, { className: `text-lg leading-6 text-secondary`, children: M }),
        ],
      })),
      (n[36] = M),
      (n[37] = I));
  let L = p === `requesting`,
    R = p === `requesting`,
    V;
  n[38] === S
    ? (V = n[39])
    : ((V = S
        ? (0, K.jsx)(g, {
            id: `UsageBasedWorkspaceAccessModal.updateSeatButton`,
            defaultMessage: `Update seat`,
            description: `Updates the current user's seat to include ChatGPT`,
          })
        : (0, K.jsx)(g, {
            id: `UsageBasedWorkspaceAccessModal.requestAccessButton`,
            defaultMessage: `Request access`,
            description: `Requests ChatGPT access from a workspace administrator`,
          })),
      (n[38] = S),
      (n[39] = V));
  let H;
  n[40] !== L || n[41] !== R || n[42] !== V
    ? ((H = (0, K.jsx)(re, {
        autoFocus: !0,
        className: `w-full`,
        size: `auth`,
        type: `submit`,
        loading: L,
        disabled: R,
        children: V,
      })),
      (n[40] = L),
      (n[41] = R),
      (n[42] = V),
      (n[43] = H))
    : (H = n[43]);
  let U;
  n[44] !== D || n[45] !== T || n[46] !== c || n[47] !== l
    ? ((U = () => {
        l
          ? (c(), l())
          : (T(B.CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED),
            D());
      }),
      (n[44] = D),
      (n[45] = T),
      (n[46] = c),
      (n[47] = l),
      (n[48] = U))
    : (U = n[48]);
  let W;
  n[49] === l
    ? (W = n[50])
    : ((W = l
        ? (0, K.jsx)(g, {
            id: `UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton`,
            defaultMessage: `Switch to Work`,
            description: `Switches from the Chat access explanation to the available Work surface`,
          })
        : (0, K.jsx)(g, {
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
    ? ((J = (0, K.jsxs)(`div`, {
        className: `flex w-full max-w-xs flex-col gap-3`,
        children: [H, q],
      })),
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
                  ? (0, K.jsx)(g, {
                      id: `UsageBasedWorkspaceAccessModal.errorMessage`,
                      defaultMessage: `Could not request access. Please contact your workspace administrator to grant ChatGPT access.`,
                      description: `Error after a seat update or access request fails. The primary action can be retried.`,
                    })
                  : (0, K.jsx)(g, {
                      id: `businessSeatRenewal.wait`,
                      defaultMessage: `Seat changes are temporarily unavailable. Please try again after {time}.`,
                      description: `Error during a Business seat change when billing has not caught up. time is the suggested retry date and time in the user's locale and time zone, not a guaranteed completion time.`,
                      values: {
                        time: d.formatDate(p.retry_at, { dateStyle: `medium`, timeStyle: `short` }),
                      },
                    }),
            })
          : null),
      (n[57] = d),
      (n[58] = p),
      (n[59] = Y))
    : (Y = n[59]);
  let X;
  n[60] !== I || n[61] !== J || n[62] !== Y
    ? ((X = (0, K.jsxs)(`div`, {
        className: `flex flex-col items-center gap-8 p-10 text-center`,
        children: [I, J, Y],
      })),
      (n[60] = I),
      (n[61] = J),
      (n[62] = Y),
      (n[63] = X))
    : (X = n[63]);
  let Z;
  n[64] !== X || n[65] !== P
    ? ((Z = (0, K.jsx)(ce, {
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
      ? ((Q = (0, K.jsx)(fe, {
          open: !0,
          size: `wide`,
          variant: `chatgpt`,
          onOpenChange: N,
          children: Z,
        })),
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
  if (e instanceof j && e.status === 409)
    try {
      let t = s({
        detail: s({
          operation: m(`switch`),
          error_type: m(`stale_state`),
          retry: s({ reason: m(`renewal_in_progress`), retry_at: k() }),
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
    ((ye = y()),
      V(),
      u(),
      (G = M()),
      h(),
      b(),
      _(),
      T(),
      D(),
      x(),
      P(),
      F(),
      f(),
      p(),
      c(),
      R(),
      O(),
      v(),
      w(),
      d(),
      (K = A()));
  }))();
}
function J(e) {
  let n = (0, Z.c)(9),
    { modeToggle: i, onSwitchToWork: o } = e,
    s = t(ie),
    c = a(r),
    l = a(C),
    u = te();
  if (c.status !== `restricted`) return null;
  let d = `${c.accountId}:${c.userId}`,
    f;
  n[0] !== u || n[1] !== o || n[2] !== s || n[3] !== l.status
    ? ((f =
        l.status === `allowed`
          ? (o ??
            (() => {
              (L(s, `work`), u(`/`));
            }))
          : void 0),
      (n[0] = u),
      (n[1] = o),
      (n[2] = s),
      (n[3] = l.status),
      (n[4] = f))
    : (f = n[4]);
  let p;
  return (
    n[5] !== i || n[6] !== d || n[7] !== f
      ? ((p = (0, $.jsx)(Y, { modeToggle: i, onSwitchToWork: f }, d)),
        (n[5] = i),
        (n[6] = d),
        (n[7] = f),
        (n[8] = p))
      : (p = n[8]),
    p
  );
}
function Y(e) {
  let t = (0, Z.c)(13),
    { modeToggle: n, onSwitchToWork: i } = e,
    o = a(r),
    [s, c] = (0, Q.useState)(!1);
  if (o.status !== `restricted`) return null;
  let l;
  t[0] === n
    ? (l = t[1])
    : ((l = n == null ? null : (0, $.jsx)(U, { children: n })), (t[0] = n), (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(`h1`, {
        className: `heading-xl font-normal text-default`,
        children: (0, $.jsx)(g, {
          id: `UsageBasedWorkspaceAccessModal.chatWork.title`,
          defaultMessage: `You don’t have access to Chat on this plan`,
          description: `Title of the seat access explanation on the Chat surface. Chat is a product name.`,
        }),
      })),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, $.jsx)(`main`, {
        className: `flex h-full min-h-0 flex-1 items-center justify-center px-panel`,
        children: (0, $.jsxs)(`div`, {
          className: `flex w-full max-w-3xl flex-col items-center gap-8 text-center select-none`,
          children: [
            u,
            (0, $.jsx)(re, {
              onClick: () => c(!1),
              children: (0, $.jsx)(g, {
                id: `chatSeatAccess.reviewAccess`,
                defaultMessage: `Review access options`,
                description: `Reopens the Chat seat access dialog after dismissal`,
              }),
            }),
          ],
        }),
      })),
      (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== s || t[5] !== i || t[6] !== o.account || t[7] !== o.accountId || t[8] !== o.userId
    ? ((f = s
        ? null
        : (0, $.jsx)(W, {
            account: o.account,
            accountId: o.accountId,
            userId: o.userId,
            onClose: () => c(!0),
            onSwitchToWork: i,
          })),
      (t[4] = s),
      (t[5] = i),
      (t[6] = o.account),
      (t[7] = o.accountId),
      (t[8] = o.userId),
      (t[9] = f))
    : (f = t[9]);
  let p;
  return (
    t[10] !== l || t[11] !== f
      ? ((p = (0, $.jsxs)($.Fragment, { children: [l, d, f] })),
        (t[10] = l),
        (t[11] = f),
        (t[12] = p))
      : (p = t[12]),
    p
  );
}
function X(e) {
  let t = (0, Z.c)(4),
    { children: n, enabled: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { name: `chatgpt.seat-access` }), (t[0] = i))
    : (i = t[0]);
  let a = l(E, i);
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
    ((Z = y()), u(), (Q = M()), h(), S(), n(), le(), I(), f(), H(), w(), q(), N(), ($ = A()));
  }))();
}
export { J as n, be as r, X as t };
//# sourceMappingURL=screen-d437d5c3fc14.js.map
