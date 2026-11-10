import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  IDt as i,
  Iot as a,
  Ixt as o,
  Lot as s,
  Pxt as c,
  VDt as l,
  _O as u,
  _xt as d,
  cO as f,
  fO as p,
  gO as m,
  hot as ee,
  jDt as h,
  lO as g,
  lot as _,
  mO as te,
  nst as v,
  oO as ne,
  sO as re,
  t3 as y,
  tst as b,
  vO as x,
  vzt as S,
  wot as C,
  xMt as w,
  yzt as T,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Tr as E,
  Jhn as D,
  Qhn as O,
  Yhn as k,
  Zhn as A,
  cEr as j,
  fV as M,
  iPr as N,
  pV as P,
  sPr as F,
  ygn as I,
} from "./app-initial-5851df3f6cb1.js";
import { a as L, r as R } from "./use-workspace-users-9ff632adf20a.js";
import { i as z, n as B } from "./profile-card-24cf744f537b.js";
import { n as V } from "./dialog-utils-21c4d759328d.js";
function H(e) {
  let n = (0, U.c)(64),
    {
      error: r,
      isPending: a,
      onClose: o,
      onQueryChange: s,
      onRetrySearch: c,
      onSelectOwner: d,
      onSubmit: p,
      options: ee,
      query: h,
      searchFailed: _,
      selectedOwner: v,
    } = e,
    y = l(),
    [b, x] = (0, W.useState)(null),
    S;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = {
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && x(e.currentTarget);
        },
      }),
      (n[0] = S))
    : (S = n[0]);
  let C = !a,
    w;
  n[1] !== a || n[2] !== o
    ? ((w = (e) => {
        !e && !a && o();
      }),
      (n[1] = a),
      (n[2] = o),
      (n[3] = w))
    : (w = n[3]);
  let T;
  n[4] !== a || n[5] !== p || n[6] !== v
    ? ((T = (e) => {
        (e.preventDefault(), v != null && !a && p());
      }),
      (n[4] = a),
      (n[5] = p),
      (n[6] = v),
      (n[7] = T))
    : (T = n[7]);
  let E;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, G.jsx)(f, {
        title: (0, G.jsx)(u, {
          className: `select-none`,
          children: (0, G.jsx)(i, {
            id: `appgenSettings.transfer.dialogTitle`,
            defaultMessage: `Transfer ownership`,
            description: `Title of the dialog for choosing the new owner of a Site`,
          }),
        }),
      })),
      (n[8] = E))
    : (E = n[8]);
  let D;
  n[9] === y
    ? (D = n[10])
    : ((D = y.formatMessage({
        id: `appgenSettings.transfer.newOwnerLabel`,
        defaultMessage: `New owner`,
        description: `Accessible label for the single workspace member selector in the Site transfer dialog`,
      })),
      (n[9] = y),
      (n[10] = D));
  let O;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, G.jsx)(i, {
        id: `appgenSettings.transfer.noMembers`,
        defaultMessage: `No matching workspace members`,
        description: `Empty search result in the Site ownership transfer member selector`,
      })),
      (n[11] = O))
    : (O = n[11]);
  let k;
  n[12] === y
    ? (k = n[13])
    : ((k = () =>
        y.formatMessage({
          id: `appgenSettings.transfer.removeOwner`,
          defaultMessage: `Clear new owner`,
          description: `Accessible label for removing the selected recipient before a Site ownership transfer`,
        })),
      (n[12] = y),
      (n[13] = k));
  let A;
  n[14] === d ? (A = n[15]) : ((A = () => d(null)), (n[14] = d), (n[15] = A));
  let j = _ ? void 0 : ee,
    N = !_,
    P;
  n[16] === y
    ? (P = n[17])
    : ((P = y.formatMessage({
        id: `appgenSettings.transfer.searchPlaceholder`,
        defaultMessage: `Search by name or email`,
        description: `Placeholder in the Site transfer dialog. Only members of the current workspace can become owners.`,
      })),
      (n[16] = y),
      (n[17] = P));
  let F;
  n[18] === v ? (F = n[19]) : ((F = v == null ? [] : [v]), (n[18] = v), (n[19] = F));
  let I;
  n[20] !== a ||
  n[21] !== s ||
  n[22] !== d ||
  n[23] !== b ||
  n[24] !== h ||
  n[25] !== j ||
  n[26] !== N ||
  n[27] !== P ||
  n[28] !== F ||
  n[29] !== D ||
  n[30] !== k ||
  n[31] !== A
    ? ((I = (0, G.jsx)(M, {
        ariaLabel: D,
        disabled: a,
        emptyMessage: O,
        getRemoveLabel: k,
        onQueryChange: s,
        onRemoveOption: A,
        onSelectOption: d,
        options: j,
        showLoadingDropdown: N,
        placeholder: P,
        portalContainer: b,
        query: h,
        selectedOptions: F,
      })),
      (n[20] = a),
      (n[21] = s),
      (n[22] = d),
      (n[23] = b),
      (n[24] = h),
      (n[25] = j),
      (n[26] = N),
      (n[27] = P),
      (n[28] = F),
      (n[29] = D),
      (n[30] = k),
      (n[31] = A),
      (n[32] = I))
    : (I = n[32]);
  let L;
  n[33] !== a || n[34] !== c || n[35] !== _
    ? ((L = _
        ? (0, G.jsxs)(`div`, {
            className: `flex items-center gap-2 text-sm text-danger`,
            role: `alert`,
            children: [
              (0, G.jsx)(i, {
                id: `appgenSettings.transfer.searchError`,
                defaultMessage: `Unable to load workspace members`,
                description: `Inline error when searching for the new Site owner fails`,
              }),
              (0, G.jsx)(t, {
                color: `ghost`,
                size: `compact`,
                disabled: a,
                type: `button`,
                onClick: c,
                children: (0, G.jsx)(i, {
                  id: `appgenSettings.transfer.retrySearch`,
                  defaultMessage: `Retry`,
                  description: `Button that retries a failed search for workspace members in the Site transfer dialog`,
                }),
              }),
            ],
          })
        : null),
      (n[33] = a),
      (n[34] = c),
      (n[35] = _),
      (n[36] = L))
    : (L = n[36]);
  let R;
  n[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, G.jsx)(m, {
        className: `text-sm text-secondary select-none`,
        children: (0, G.jsx)(i, {
          id: `appgenSettings.transfer.dialogDescription`,
          defaultMessage: `You’ll remain an editor. The new owner can manage access, settings, and deletion.`,
          description: `Explains the result of transferring Site ownership: the current owner keeps editing access while the new owner gains management permissions.`,
        }),
      })),
      (n[37] = R))
    : (R = n[37]);
  let z;
  n[38] === r
    ? (z = n[39])
    : ((z =
        r == null
          ? null
          : (0, G.jsx)(`div`, { className: `text-sm text-danger`, role: `alert`, children: r })),
      (n[38] = r),
      (n[39] = z));
  let B;
  n[40] !== I || n[41] !== L || n[42] !== z
    ? ((B = (0, G.jsxs)(g, { className: `gap-3`, children: [I, L, R, z] })),
      (n[40] = I),
      (n[41] = L),
      (n[42] = z),
      (n[43] = B))
    : (B = n[43]);
  let V;
  n[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, G.jsx)(i, {
        id: `appgenSettings.transfer.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Site ownership transfer dialog without transferring`,
      })),
      (n[44] = V))
    : (V = n[44]);
  let H;
  n[45] !== a || n[46] !== o
    ? ((H = (0, G.jsx)(t, { color: `secondary`, disabled: a, type: `button`, onClick: o, children: V })),
      (n[45] = a),
      (n[46] = o),
      (n[47] = H))
    : (H = n[47]);
  let K = v == null || a,
    q;
  n[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, G.jsx)(i, {
        id: `appgenSettings.transfer.confirm`,
        defaultMessage: `Transfer ownership`,
        description: `Confirmation button that immediately transfers the Site to the selected workspace member`,
      })),
      (n[48] = q))
    : (q = n[48]);
  let J;
  n[49] !== a || n[50] !== K
    ? ((J = (0, G.jsx)(t, { disabled: K, loading: a, type: `submit`, children: q })),
      (n[49] = a),
      (n[50] = K),
      (n[51] = J))
    : (J = n[51]);
  let Y;
  n[52] !== H || n[53] !== J
    ? ((Y = (0, G.jsxs)(re, { className: `mt-5`, children: [H, J] })), (n[52] = H), (n[53] = J), (n[54] = Y))
    : (Y = n[54]);
  let X;
  n[55] !== B || n[56] !== Y || n[57] !== T
    ? ((X = (0, G.jsxs)(ne, { as: `form`, onSubmit: T, children: [E, B, Y] })),
      (n[55] = B),
      (n[56] = Y),
      (n[57] = T),
      (n[58] = X))
    : (X = n[58]);
  let Z;
  return (
    n[59] !== a || n[60] !== C || n[61] !== X || n[62] !== w
      ? ((Z = (0, G.jsx)(te, {
          open: !0,
          contentOverflow: `visible`,
          contentProps: S,
          size: `compact`,
          shouldIgnoreClickOutside: a,
          showDialogClose: C,
          onOpenChange: w,
          children: X,
        })),
        (n[59] = a),
        (n[60] = C),
        (n[61] = X),
        (n[62] = w),
        (n[63] = Z))
      : (Z = n[63]),
    Z
  );
}
var U, W, G;
function K() {
  return (K = e(() => {
    ((U = S()), (W = T()), h(), y(), x(), p(), P(), (G = w()));
  }))();
}
function q(e) {
  let t = (0, Z.c)(40),
    { currentAccountUserId: a, onBeforeTransfer: c, onClose: l, onTransferred: u, project: d } = e,
    f = o(n),
    p = v(),
    m = r(),
    [h, g] = (0, Q.useState)(``),
    [_, te] = (0, Q.useState)(null),
    [ne, re] = (0, Q.useState)(!1),
    { data: y, isError: b, refetch: x } = L(h),
    S;
  t[0] !== a || t[1] !== y
    ? ((S = y
        ?.filter((e) => e.account_user_id !== a && !(`deactivated_time` in e && e.deactivated_time != null))
        .map(X)),
      (t[0] = a),
      (t[1] = y),
      (t[2] = S))
    : (S = t[2]);
  let C = S,
    w;
  t[3] === d
    ? (w = t[4])
    : ((w = (e) =>
        N.safePost(`/wham/sites/projects/{project_id}/owner`, {
          parameters: { path: { project_id: d.id } },
          requestBody: { owner_account_user_id: e.accountUserId },
          expectedErrorStatuses: [400, 404, 409],
          retry: !1,
          surface: `appgen`,
        })),
      (t[3] = d),
      (t[4] = w));
  let T;
  t[5] !== m || t[6] !== l || t[7] !== u || t[8] !== d || t[9] !== p || t[10] !== f
    ? ((T = async (e, t) => {
        (await Promise.all([
          p.cancelQueries({ queryKey: A }),
          p.cancelQueries({ queryKey: [...O, d.id] }),
          p.cancelQueries({ queryKey: [...k, d.id] }),
        ]),
          l(),
          u?.(),
          m(`${E}?view=shared`),
          p.setQueryData([...O, d.id], Y),
          p.setQueryData([...k, d.id], J),
          p.setQueryData(D, (e) =>
            e == null
              ? e
              : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => e.id !== d.id) })) },
          ),
          p.setQueryData(A, (e) =>
            e == null
              ? e
              : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => e.id !== d.id) })) },
          ),
          f
            .get(ee)
            .success(
              (0, $.jsx)(i, {
                id: `appgenSettings.transfer.success`,
                defaultMessage: `Ownership transferred to {name}`,
                description: `Success toast after a Site transfer. {name} is the selected new owner's name or email.`,
                values: { name: t.label },
              }),
              {
                description: (0, $.jsx)(i, {
                  id: `appgenSettings.transfer.successDescription`,
                  defaultMessage: `You still have editing access to {site}`,
                  description: `Second line of the Site transfer success toast. {site} is the Site title. The previous owner keeps editor access.`,
                  values: { site: d.title },
                }),
              },
            ),
          await Promise.all([
            p.invalidateQueries({ queryKey: A }),
            p.invalidateQueries({ queryKey: [...O, d.id], refetchType: `none` }),
            p.invalidateQueries({ queryKey: [...k, d.id], refetchType: `none` }),
          ]));
      }),
      (t[5] = m),
      (t[6] = l),
      (t[7] = u),
      (t[8] = d),
      (t[9] = p),
      (t[10] = f),
      (t[11] = T))
    : (T = t[11]);
  let j;
  t[12] !== w || t[13] !== T
    ? ((j = { mutationFn: w, onSuccess: T }), (t[12] = w), (t[13] = T), (t[14] = j))
    : (j = t[14]);
  let { isPending: M, isError: P, mutate: F, reset: I } = s(j),
    R = null;
  if (ne) {
    let e;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(i, {
          id: `appgenSettings.transfer.unsavedSettings`,
          defaultMessage: `Save your site settings before transferring ownership. Wait for saving to finish, or cancel to review your changes.`,
          description: `Inline message when ownership transfer is blocked by pending or invalid Site settings. The user can wait for autosave or cancel the transfer dialog to correct their settings; all drafts are preserved.`,
        })),
        (t[15] = e))
      : (e = t[15]),
      (R = e));
  } else if (P) {
    let e;
    (t[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(i, {
          id: `appgenSettings.transfer.error`,
          defaultMessage: `We couldn’t transfer ownership. Please try again.`,
          description: `Inline error after a Site ownership transfer request fails. The selected workspace member is retained for retry.`,
        })),
        (t[16] = e))
      : (e = t[16]),
      (R = e));
  }
  let z;
  t[17] === I
    ? (z = t[18])
    : ((z = (e) => {
        (I(), g(e), e.trim() !== `` && te(null));
      }),
      (t[17] = I),
      (t[18] = z));
  let B;
  t[19] === x ? (B = t[20]) : ((B = () => void x()), (t[19] = x), (t[20] = B));
  let V;
  t[21] === I
    ? (V = t[22])
    : ((V = (e) => {
        (I(), te(e), g(``));
      }),
      (t[21] = I),
      (t[22] = V));
  let U;
  t[23] !== M || t[24] !== F || t[25] !== c || t[26] !== _
    ? ((U = () => {
        if (_ != null && !M) {
          if (!c()) {
            re(!0);
            return;
          }
          (re(!1), F(_));
        }
      }),
      (t[23] = M),
      (t[24] = F),
      (t[25] = c),
      (t[26] = _),
      (t[27] = U))
    : (U = t[27]);
  let W;
  return (
    t[28] !== R ||
    t[29] !== M ||
    t[30] !== l ||
    t[31] !== C ||
    t[32] !== h ||
    t[33] !== b ||
    t[34] !== _ ||
    t[35] !== z ||
    t[36] !== B ||
    t[37] !== V ||
    t[38] !== U
      ? ((W = (0, $.jsx)(H, {
          error: R,
          isPending: M,
          onClose: l,
          onQueryChange: z,
          onRetrySearch: B,
          onSelectOwner: V,
          onSubmit: U,
          options: C,
          query: h,
          searchFailed: b,
          selectedOwner: _,
        })),
        (t[28] = R),
        (t[29] = M),
        (t[30] = l),
        (t[31] = C),
        (t[32] = h),
        (t[33] = b),
        (t[34] = _),
        (t[35] = z),
        (t[36] = B),
        (t[37] = V),
        (t[38] = U),
        (t[39] = W))
      : (W = t[39]),
    W
  );
}
function J(e) {
  return e == null ? e : { ...e, current_user_role: `editor` };
}
function Y(e) {
  return e == null ? e : { ...e, current_user_role: `editor` };
}
function X(e) {
  return {
    ...V(e),
    accountUserId: e.account_user_id,
    renderIdentity: (t, n) =>
      (0, $.jsx)(B, {
        accountUserId: e.account_user_id,
        label: e.name ?? e.email ?? e.id,
        openOnClick: !1,
        triggerIsFocusable: n === `option`,
        children: t,
      }),
  };
}
var Z, Q, $;
function ie() {
  return (ie = e(() => {
    ((Z = S()), a(), b(), c(), (Q = T()), h(), d(), _(), z(), R(), C(), F(), I(), j(), K(), ($ = w()));
  }))();
}
ie();
export { q as OwnershipTransferDialog };
//# sourceMappingURL=dialog-5f51fbe2d2e6.js.map
