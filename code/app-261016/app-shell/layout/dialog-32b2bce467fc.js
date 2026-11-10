import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  Lst as u,
  NSt as d,
  PBt as f,
  Qst as ee,
  RO as p,
  Rst as m,
  USt as h,
  Vrt as g,
  WO as te,
  XOt as _,
  Y3 as v,
  Z3 as y,
  ZSt as b,
  okt as x,
  qO as S,
  qrt as ne,
  tkt as C,
  vst as w,
  yst as T,
  zO as E,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  EAr as D,
  GH as O,
  KH as k,
  _Ar as A,
  _vn as j,
  hvn as M,
  iRr as N,
  mvn as P,
  sRr as F,
  vvn as I,
  zvn as L,
} from "./app-initial-ad16eaadf81f.js";
import { a as R, r as z } from "./use-workspace-users-2d1e66aa1ddc.js";
import { i as B, n as V } from "./profile-card-596b3632a9d9.js";
import { n as H } from "./dialog-utils-21c4d759328d.js";
function U(e) {
  let t = (0, W.c)(64),
    {
      error: n,
      isPending: r,
      onClose: i,
      onQueryChange: o,
      onRetrySearch: c,
      onSelectOwner: u,
      onSubmit: d,
      options: f,
      query: ee,
      searchFailed: m,
      selectedOwner: h,
    } = e,
    g = x(),
    [_, y] = (0, G.useState)(null),
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = {
        onOpenAutoFocus: (e) => {
          e.currentTarget instanceof HTMLElement && y(e.currentTarget);
        },
      }),
      (t[0] = b))
    : (b = t[0]);
  let ne = !r,
    w;
  t[1] !== r || t[2] !== i
    ? ((w = (e) => {
        !e && !r && i();
      }),
      (t[1] = r),
      (t[2] = i),
      (t[3] = w))
    : (w = t[3]);
  let T;
  t[4] !== r || t[5] !== d || t[6] !== h
    ? ((T = (e) => {
        (e.preventDefault(), h != null && !r && d());
      }),
      (t[4] = r),
      (t[5] = d),
      (t[6] = h),
      (t[7] = T))
    : (T = t[7]);
  let D;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, K.jsx)(p, {
        title: (0, K.jsx)(S, {
          className: `select-none`,
          children: (0, K.jsx)(C, {
            id: `appgenSettings.transfer.dialogTitle`,
            defaultMessage: `Transfer ownership`,
            description: `Title of the dialog for choosing the new owner of a Site`,
          }),
        }),
      })),
      (t[8] = D))
    : (D = t[8]);
  let k;
  t[9] === g
    ? (k = t[10])
    : ((k = g.formatMessage({
        id: `appgenSettings.transfer.newOwnerLabel`,
        defaultMessage: `New owner`,
        description: `Accessible label for the single workspace member selector in the Site transfer dialog`,
      })),
      (t[9] = g),
      (t[10] = k));
  let A;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, K.jsx)(C, {
        id: `appgenSettings.transfer.noMembers`,
        defaultMessage: `No matching workspace members`,
        description: `Empty search result in the Site ownership transfer member selector`,
      })),
      (t[11] = A))
    : (A = t[11]);
  let j;
  t[12] === g
    ? (j = t[13])
    : ((j = () =>
        g.formatMessage({
          id: `appgenSettings.transfer.removeOwner`,
          defaultMessage: `Clear new owner`,
          description: `Accessible label for removing the selected recipient before a Site ownership transfer`,
        })),
      (t[12] = g),
      (t[13] = j));
  let M;
  t[14] === u ? (M = t[15]) : ((M = () => u(null)), (t[14] = u), (t[15] = M));
  let N = m ? void 0 : f,
    P = !m,
    F;
  t[16] === g
    ? (F = t[17])
    : ((F = g.formatMessage({
        id: `appgenSettings.transfer.searchPlaceholder`,
        defaultMessage: `Search by name or email`,
        description: `Placeholder in the Site transfer dialog. Only members of the current workspace can become owners.`,
      })),
      (t[16] = g),
      (t[17] = F));
  let I;
  t[18] === h ? (I = t[19]) : ((I = h == null ? [] : [h]), (t[18] = h), (t[19] = I));
  let L;
  t[20] !== r ||
  t[21] !== o ||
  t[22] !== u ||
  t[23] !== _ ||
  t[24] !== ee ||
  t[25] !== N ||
  t[26] !== P ||
  t[27] !== F ||
  t[28] !== I ||
  t[29] !== k ||
  t[30] !== j ||
  t[31] !== M
    ? ((L = (0, K.jsx)(O, {
        ariaLabel: k,
        disabled: r,
        emptyMessage: A,
        getRemoveLabel: j,
        onQueryChange: o,
        onRemoveOption: M,
        onSelectOption: u,
        options: N,
        showLoadingDropdown: P,
        placeholder: F,
        portalContainer: _,
        query: ee,
        selectedOptions: I,
      })),
      (t[20] = r),
      (t[21] = o),
      (t[22] = u),
      (t[23] = _),
      (t[24] = ee),
      (t[25] = N),
      (t[26] = P),
      (t[27] = F),
      (t[28] = I),
      (t[29] = k),
      (t[30] = j),
      (t[31] = M),
      (t[32] = L))
    : (L = t[32]);
  let R;
  t[33] !== r || t[34] !== c || t[35] !== m
    ? ((R = m
        ? (0, K.jsxs)(`div`, {
            className: `flex items-center gap-2 text-sm text-danger`,
            role: `alert`,
            children: [
              (0, K.jsx)(C, {
                id: `appgenSettings.transfer.searchError`,
                defaultMessage: `Unable to load workspace members`,
                description: `Inline error when searching for the new Site owner fails`,
              }),
              (0, K.jsx)(v, {
                color: `ghost`,
                size: `compact`,
                disabled: r,
                type: `button`,
                onClick: c,
                children: (0, K.jsx)(C, {
                  id: `appgenSettings.transfer.retrySearch`,
                  defaultMessage: `Retry`,
                  description: `Button that retries a failed search for workspace members in the Site transfer dialog`,
                }),
              }),
            ],
          })
        : null),
      (t[33] = r),
      (t[34] = c),
      (t[35] = m),
      (t[36] = R))
    : (R = t[36]);
  let z;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, K.jsx)(s, {
        className: `text-sm text-secondary select-none`,
        children: (0, K.jsx)(C, {
          id: `appgenSettings.transfer.dialogDescription`,
          defaultMessage: `You’ll remain an editor. The new owner can manage access, settings, and deletion.`,
          description: `Explains the result of transferring Site ownership: the current owner keeps editing access while the new owner gains management permissions.`,
        }),
      })),
      (t[37] = z))
    : (z = t[37]);
  let B;
  t[38] === n
    ? (B = t[39])
    : ((B =
        n == null
          ? null
          : (0, K.jsx)(`div`, { className: `text-sm text-danger`, role: `alert`, children: n })),
      (t[38] = n),
      (t[39] = B));
  let V;
  t[40] !== L || t[41] !== R || t[42] !== B
    ? ((V = (0, K.jsxs)(E, { className: `gap-3`, children: [L, R, z, B] })),
      (t[40] = L),
      (t[41] = R),
      (t[42] = B),
      (t[43] = V))
    : (V = t[43]);
  let H;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, K.jsx)(C, {
        id: `appgenSettings.transfer.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the Site ownership transfer dialog without transferring`,
      })),
      (t[44] = H))
    : (H = t[44]);
  let U;
  t[45] !== r || t[46] !== i
    ? ((U = (0, K.jsx)(v, { color: `secondary`, disabled: r, type: `button`, onClick: i, children: H })),
      (t[45] = r),
      (t[46] = i),
      (t[47] = U))
    : (U = t[47]);
  let q = h == null || r,
    J;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, K.jsx)(C, {
        id: `appgenSettings.transfer.confirm`,
        defaultMessage: `Transfer ownership`,
        description: `Confirmation button that immediately transfers the Site to the selected workspace member`,
      })),
      (t[48] = J))
    : (J = t[48]);
  let Y;
  t[49] !== r || t[50] !== q
    ? ((Y = (0, K.jsx)(v, { disabled: q, loading: r, type: `submit`, children: J })),
      (t[49] = r),
      (t[50] = q),
      (t[51] = Y))
    : (Y = t[51]);
  let X;
  t[52] !== U || t[53] !== Y
    ? ((X = (0, K.jsxs)(l, { className: `mt-5`, children: [U, Y] })), (t[52] = U), (t[53] = Y), (t[54] = X))
    : (X = t[54]);
  let Z;
  t[55] !== V || t[56] !== X || t[57] !== T
    ? ((Z = (0, K.jsxs)(a, { as: `form`, onSubmit: T, children: [D, V, X] })),
      (t[55] = V),
      (t[56] = X),
      (t[57] = T),
      (t[58] = Z))
    : (Z = t[58]);
  let Q;
  return (
    t[59] !== r || t[60] !== ne || t[61] !== Z || t[62] !== w
      ? ((Q = (0, K.jsx)(te, {
          open: !0,
          contentOverflow: `visible`,
          contentProps: b,
          size: `compact`,
          shouldIgnoreClickOutside: r,
          showDialogClose: ne,
          onOpenChange: w,
          children: Z,
        })),
        (t[59] = r),
        (t[60] = ne),
        (t[61] = Z),
        (t[62] = w),
        (t[63] = Q))
      : (Q = t[63]),
    Q
  );
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = f()), (G = r()), _(), y(), o(), i(), k(), (K = c()));
  }))();
}
function J(e) {
  let n = (0, Q.c)(40),
    { currentAccountUserId: r, onBeforeTransfer: i, onClose: a, onTransferred: o, project: s } = e,
    c = t(ee),
    l = m(),
    u = h(),
    [d, f] = (0, re.useState)(``),
    [p, g] = (0, re.useState)(null),
    [te, _] = (0, re.useState)(!1),
    { data: v, isError: y, refetch: b } = R(d),
    x;
  n[0] !== r || n[1] !== v
    ? ((x = v
        ?.filter((e) => e.account_user_id !== r && !(`deactivated_time` in e && e.deactivated_time != null))
        .map(Z)),
      (n[0] = r),
      (n[1] = v),
      (n[2] = x))
    : (x = n[2]);
  let S = x,
    w;
  n[3] === s
    ? (w = n[4])
    : ((w = (e) =>
        N.safePost(`/codex/sites/projects/{project_id}/owner`, {
          parameters: { path: { project_id: s.id } },
          requestBody: { owner_account_user_id: e.accountUserId },
          expectedErrorStatuses: [400, 404, 409],
          retry: !1,
          surface: `appgen`,
        })),
      (n[3] = s),
      (n[4] = w));
  let E;
  n[5] !== u || n[6] !== a || n[7] !== o || n[8] !== s || n[9] !== l || n[10] !== c
    ? ((E = async (e, t) => {
        (await Promise.all([
          l.cancelQueries({ queryKey: j }),
          l.cancelQueries({ queryKey: [...I, s.id] }),
          l.cancelQueries({ queryKey: [...M, s.id] }),
        ]),
          a(),
          o?.(),
          u(`${A}?view=shared`),
          l.setQueryData([...I, s.id], X),
          l.setQueryData([...M, s.id], Y),
          l.setQueryData(P, (e) =>
            e == null
              ? e
              : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => e.id !== s.id) })) },
          ),
          l.setQueryData(j, (e) =>
            e == null
              ? e
              : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => e.id !== s.id) })) },
          ),
          c
            .get(ne)
            .success(
              (0, $.jsx)(C, {
                id: `appgenSettings.transfer.success`,
                defaultMessage: `Ownership transferred to {name}`,
                description: `Success toast after a Site transfer. {name} is the selected new owner's name or email.`,
                values: { name: t.label },
              }),
              {
                description: (0, $.jsx)(C, {
                  id: `appgenSettings.transfer.successDescription`,
                  defaultMessage: `You still have editing access to {site}`,
                  description: `Second line of the Site transfer success toast. {site} is the Site title. The previous owner keeps editor access.`,
                  values: { site: s.title },
                }),
              },
            ),
          await Promise.all([
            l.invalidateQueries({ queryKey: j }),
            l.invalidateQueries({ queryKey: [...I, s.id], refetchType: `none` }),
            l.invalidateQueries({ queryKey: [...M, s.id], refetchType: `none` }),
          ]));
      }),
      (n[5] = u),
      (n[6] = a),
      (n[7] = o),
      (n[8] = s),
      (n[9] = l),
      (n[10] = c),
      (n[11] = E))
    : (E = n[11]);
  let D;
  n[12] !== w || n[13] !== E
    ? ((D = { mutationFn: w, onSuccess: E }), (n[12] = w), (n[13] = E), (n[14] = D))
    : (D = n[14]);
  let { isPending: O, isError: k, mutate: F, reset: L } = T(D),
    z = null;
  if (te) {
    let e;
    (n[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(C, {
          id: `appgenSettings.transfer.unsavedSettings`,
          defaultMessage: `Save your site settings before transferring ownership. Wait for saving to finish, or cancel to review your changes.`,
          description: `Inline message when ownership transfer is blocked by pending or invalid Site settings. The user can wait for autosave or cancel the transfer dialog to correct their settings; all drafts are preserved.`,
        })),
        (n[15] = e))
      : (e = n[15]),
      (z = e));
  } else if (k) {
    let e;
    (n[16] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(C, {
          id: `appgenSettings.transfer.error`,
          defaultMessage: `We couldn’t transfer ownership. Please try again.`,
          description: `Inline error after a Site ownership transfer request fails. The selected workspace member is retained for retry.`,
        })),
        (n[16] = e))
      : (e = n[16]),
      (z = e));
  }
  let B;
  n[17] === L
    ? (B = n[18])
    : ((B = (e) => {
        (L(), f(e), e.trim() !== `` && g(null));
      }),
      (n[17] = L),
      (n[18] = B));
  let V;
  n[19] === b ? (V = n[20]) : ((V = () => void b()), (n[19] = b), (n[20] = V));
  let H;
  n[21] === L
    ? (H = n[22])
    : ((H = (e) => {
        (L(), g(e), f(``));
      }),
      (n[21] = L),
      (n[22] = H));
  let W;
  n[23] !== O || n[24] !== F || n[25] !== i || n[26] !== p
    ? ((W = () => {
        if (p != null && !O) {
          if (!i()) {
            _(!0);
            return;
          }
          (_(!1), F(p));
        }
      }),
      (n[23] = O),
      (n[24] = F),
      (n[25] = i),
      (n[26] = p),
      (n[27] = W))
    : (W = n[27]);
  let G;
  return (
    n[28] !== z ||
    n[29] !== O ||
    n[30] !== a ||
    n[31] !== S ||
    n[32] !== d ||
    n[33] !== y ||
    n[34] !== p ||
    n[35] !== B ||
    n[36] !== V ||
    n[37] !== H ||
    n[38] !== W
      ? ((G = (0, $.jsx)(U, {
          error: z,
          isPending: O,
          onClose: a,
          onQueryChange: B,
          onRetrySearch: V,
          onSelectOwner: H,
          onSubmit: W,
          options: S,
          query: d,
          searchFailed: y,
          selectedOwner: p,
        })),
        (n[28] = z),
        (n[29] = O),
        (n[30] = a),
        (n[31] = S),
        (n[32] = d),
        (n[33] = y),
        (n[34] = p),
        (n[35] = B),
        (n[36] = V),
        (n[37] = H),
        (n[38] = W),
        (n[39] = G))
      : (G = n[39]),
    G
  );
}
function Y(e) {
  return e == null ? e : { ...e, current_user_role: `editor` };
}
function X(e) {
  return e == null ? e : { ...e, current_user_role: `editor` };
}
function Z(e) {
  return {
    ...H(e),
    accountUserId: e.account_user_id,
    renderIdentity: (t, n) =>
      (0, $.jsx)(V, {
        accountUserId: e.account_user_id,
        label: e.name ?? e.email ?? e.id,
        openOnClick: !1,
        triggerIsFocusable: n === `option`,
        children: t,
      }),
  };
}
var Q, re, $;
function ie() {
  return (ie = e(() => {
    ((Q = f()), w(), u(), b(), (re = r()), _(), d(), g(), B(), z(), n(), F(), L(), D(), q(), ($ = c()));
  }))();
}
ie();
export { J as OwnershipTransferDialog };
//# sourceMappingURL=dialog-32b2bce467fc.js.map
