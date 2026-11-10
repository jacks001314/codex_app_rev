import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $W as n,
  $st as r,
  Bst as i,
  FBt as a,
  HO as o,
  IH as s,
  LNt as c,
  Lit as l,
  Lst as u,
  Mst as d,
  PBt as f,
  Pit as p,
  Qst as m,
  Rst as ee,
  TY as h,
  Vit as g,
  Vrt as _,
  XOt as v,
  ZSt as y,
  _kt as b,
  aH as x,
  ast as S,
  bst as C,
  hst as w,
  iCt as te,
  ist as ne,
  jit as re,
  jst as T,
  kH as E,
  mst as D,
  nCt as ie,
  okt as ae,
  pkt as O,
  qrt as oe,
  tkt as k,
  uG as A,
  vD as se,
  vkt as j,
  vst as M,
  xst as N,
  yD as P,
  yK as F,
  yst as ce,
  zO as le,
  zjt as ue,
  zst as de,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $H as I,
  BFt as L,
  IIr as fe,
  LIr as R,
  Ozn as z,
  QH as B,
  Tcn as pe,
  ZH as me,
  Zht as V,
  aU as he,
  agt as ge,
  cH as _e,
  cU as H,
  dzn as ve,
  eU as ye,
  gU as be,
  hU as U,
  hzn as xe,
  mzn as Se,
  nU as Ce,
  ngt as we,
  oU as Te,
  pzn as Ee,
  rU as De,
  sH as Oe,
  sU as ke,
  tU as Ae,
  tgt as je,
  wcn as Me,
  zFt as Ne,
} from "./app-initial-ad16eaadf81f.js";
import { n as Pe, t as Fe } from "./profile-avatar-bc7371feb0c0.js";
import { t as Ie } from "./modal-footer-412324b30d33.js";
import { t as Le } from "./modal-permission-dropdown-6dcd00cb5144.js";
import {
  a as W,
  c as Re,
  d as ze,
  i as Be,
  l as Ve,
  n as He,
  r as Ue,
  t as We,
  u as Ge,
} from "./recipient-picker-5b8b87b8e1c8.js";
import { a as Ke, n as qe, r as Je, t as Ye } from "./access-dropdown-7c79ad8fbd33.js";
import { n as Xe, t as Ze } from "./role-label-f76597fae88b.js";
import { a as Qe, i as $e, n as et, r as tt, t as nt } from "./analytics-74ff0509f9f8.js";
import {
  a as rt,
  c as it,
  d as at,
  f as ot,
  g as st,
  h as G,
  i as ct,
  l as K,
  n as lt,
  o as ut,
  r as dt,
  s as ft,
  t as pt,
} from "./model-96b25fa95571.js";
import { n as mt, r as ht, t as gt } from "./queries-1bf82162d329.js";
import { n as _t, t as vt } from "./api-78f35db27a20.js";
import { t as yt } from "./permission-dropdown-5c542829d6d7.js";
import { n as bt, t as xt } from "./session-aa148fc2a589.js";
import { n as St, r as Ct } from "./share-link-33a6044f6ad2.js";
import { n as wt, t as Tt } from "./share-link-origin-18f11266653c.js";
async function Et(
  e,
  t,
  {
    includeShares: n = !1,
    preserveLibraryBrowse: r = !1,
    preserveEffectiveAccess: i = !1,
    preserveState: a = !1,
  } = {},
) {
  let o = K(t, `state`).slice(0, t.resourceKind === `folder` ? 3 : 5),
    s = e.invalidateQueries({
      queryKey: o,
      predicate: (e) =>
        (n || e.queryKey[5] !== `shares`) &&
        (!a ||
          e.queryKey[3] !== t.resourceKind ||
          e.queryKey[4] !== t.libraryFileId ||
          e.queryKey[5] !== `state`) &&
        (!i ||
          e.queryKey[3] !== t.resourceKind ||
          e.queryKey[4] !== t.libraryFileId ||
          e.queryKey[5] !== `effective-access`),
    });
  (e.invalidateQueries({ queryKey: [`appgen-library-cloud-files`, t.accountId] }),
    e.invalidateQueries({
      queryKey: [`library-api`, t.accountId],
      predicate: ({ queryKey: e }) => !r || e[3] !== `browse`,
    }),
    await s);
}
async function Dt(e, t) {
  if (t.resourceKind !== `file`) return;
  let n = {
      queryKey: [`library-api`, t.accountId],
      predicate: ({ queryKey: e }) => e[2] === t.accountUserId && e[3] === `browse`,
    },
    r = e.cancelQueries(n);
  (e.setQueriesData(n, (e) => {
    if (e == null) return e;
    let n = !1,
      r = e.pages.map((e) => ({
        ...e,
        items: e.items.map((e) =>
          e.node.kind !== `file` || e.node.id !== t.libraryFileId || e.node.is_shared === !0
            ? e
            : ((n = !0), { ...e, node: { ...e.node, is_shared: !0 } }),
        ),
      }));
    return n ? { ...e, pages: r } : e;
  }),
    await r);
}
function Ot() {
  return (Ot = e(() => {
    ot();
  }))();
}
function kt(e) {
  let n = (0, It.c)(76),
    {
      analytics: r,
      api: i,
      canApprove: a,
      canDecide: o,
      disabled: c,
      isCurrentSession: l,
      sharingScope: u,
    } = e,
    d = t(m),
    f = ae(),
    p = ee(),
    h;
  n[0] !== r.shareSessionId || n[1] !== p || n[2] !== u
    ? ((h = () => gt(p, u, `owner-access-requests`, r.shareSessionId)),
      (n[0] = r.shareSessionId),
      (n[1] = p),
      (n[2] = u),
      (n[3] = h))
    : (h = n[3]);
  let [g] = (0, Lt.useState)(h),
    _ = (0, Lt.useId)(),
    [v, y] = (0, Lt.useState)(!1),
    [b, x] = (0, Lt.useState)(Ft),
    S;
  n[4] !== g || n[5] !== u
    ? ((S = [...K(u, `owner-access-requests`), `pages`, g]), (n[4] = g), (n[5] = u), (n[6] = S))
    : (S = n[6]);
  let C;
  n[7] === i
    ? (C = n[8])
    : ((C = (e) => {
        let { pageParam: t, signal: n } = e;
        return i.getOwnerAccessRequests({ cursor: t, signal: n });
      }),
      (n[7] = i),
      (n[8] = C));
  let te;
  n[9] !== o || n[10] !== S || n[11] !== C
    ? ((te = {
        enabled: o,
        queryKey: S,
        queryFn: C,
        initialPageParam: null,
        getNextPageParam: Pt,
        retry: !1,
        staleTime: de.THIRTY_SECONDS,
      }),
      (n[9] = o),
      (n[10] = S),
      (n[11] = C),
      (n[12] = te))
    : (te = n[12]);
  let {
      data: ne,
      isError: re,
      isFetching: T,
      isSuccess: D,
      hasNextPage: ie,
      fetchNextPage: O,
      refetch: A,
    } = w(te),
    j;
  n[13] !== r || n[14] !== d || n[15] !== u
    ? ((j = (e, t, n, i) => {
        let { decision: a, row: o } = e;
        Qe(d, r, {
          action:
            a === `approve`
              ? ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_APPROVE_ACCESS_REQUEST
              : ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_DECLINE_ACCESS_REQUEST,
          outcome: t,
          operationId: n,
          error: nt(i),
          recipientKind:
            o.recipient.principal_type === `group`
              ? xe.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP
              : xe.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER,
          recipientCount: 1,
          role: tt(it(o.request.requested_role_id, u.resourceKind)),
        });
      }),
      (n[13] = r),
      (n[14] = d),
      (n[15] = u),
      (n[16] = j))
    : (j = n[16]);
  let M = j,
    N;
  n[17] === u ? (N = n[18]) : ((N = K(u, `state`)), (n[17] = u), (n[18] = N));
  let P;
  n[19] !== i || n[20] !== a || n[21] !== o || n[22] !== l
    ? ((P = (e) => {
        let { decision: t, row: n } = e;
        if (!l() || !o || (t === `approve` && !a))
          throw Error(`Library access-request decisions are not permitted`);
        return i.decideAccessRequestGroup({ decision: t, recipient: n.recipient, requests: n.requests });
      }),
      (n[19] = i),
      (n[20] = a),
      (n[21] = o),
      (n[22] = l),
      (n[23] = P))
    : (P = n[23]);
  let F;
  n[24] !== l || n[25] !== M
    ? ((F = (e) => {
        let t = crypto.randomUUID();
        return (l() && M(e, Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED, t), t);
      }),
      (n[24] = l),
      (n[25] = M),
      (n[26] = F))
    : (F = n[26]);
  let I, L;
  n[27] !== l || n[28] !== M || n[29] !== d
    ? ((L = (e, t, n) => {
        let { confirmedRequests: r, remainingRequests: i } = e;
        if (!l()) return;
        let a = Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED;
        (i.length > 0 &&
          (a =
            r.length === 0
              ? Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED
              : Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL),
          M(t, a, n),
          x((e) => new Set([...e, ...r.map((e) => ct({ request: e, recipient: t.row.recipient }))])),
          i.length > 0 &&
            (r.length > 0
              ? d
                  .get(oe)
                  .warning(
                    (0, q.jsx)(k, {
                      id: `librarySharing.requests.partial`,
                      defaultMessage: `Some requests were updated. Review the remaining requests and try again`,
                      description: `Toast after only some duplicate Library access requests for one recipient were confirmed; unconfirmed requests stay visible`,
                    }),
                  )
              : d
                  .get(oe)
                  .danger(
                    (0, q.jsx)(k, {
                      id: `librarySharing.requests.updateError`,
                      defaultMessage: `Couldn't update this request. Try again`,
                      description: `Error toast when approving or declining a Library access request fails`,
                    }),
                    { errorAnalytics: { toastId: `librarySharing.requests.updateError` } },
                  )));
      }),
      (I = (e, t, n) => {
        l() &&
          (M(t, Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED, n, e),
          d
            .get(oe)
            .danger(
              (0, q.jsx)(k, {
                id: `librarySharing.requests.updateError`,
                defaultMessage: `Couldn't update this request. Try again`,
                description: `Error toast when approving or declining a Library access request fails`,
              }),
              { errorAnalytics: { toastId: `librarySharing.requests.updateError` } },
            ));
      }),
      (n[27] = l),
      (n[28] = M),
      (n[29] = d),
      (n[30] = I),
      (n[31] = L))
    : ((I = n[30]), (L = n[31]));
  let fe;
  n[32] !== l || n[33] !== p || n[34] !== u
    ? ((fe = () => {
        l() && Et(p, u, { includeShares: !0 });
      }),
      (n[32] = l),
      (n[33] = p),
      (n[34] = u),
      (n[35] = fe))
    : (fe = n[35]);
  let R;
  n[36] !== I || n[37] !== fe || n[38] !== N || n[39] !== P || n[40] !== F || n[41] !== L
    ? ((R = {
        mutationKey: N,
        networkMode: `always`,
        retry: !1,
        mutationFn: P,
        onMutate: F,
        onSuccess: L,
        onError: I,
        onSettled: fe,
      }),
      (n[36] = I),
      (n[37] = fe),
      (n[38] = N),
      (n[39] = P),
      (n[40] = F),
      (n[41] = L),
      (n[42] = R))
    : (R = n[42]);
  let { mutate: z, isPending: B } = ce(R);
  if (!o) return null;
  if (re) {
    let e;
    n[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, q.jsx)(k, {
          id: `librarySharing.requests.loadError`,
          defaultMessage: `Couldn't load requests to share`,
          description: `Error shown in the Library share dialog when the owner's pending access requests fail to load`,
        })),
        (n[43] = e))
      : (e = n[43]);
    let t;
    n[44] !== l || n[45] !== A
      ? ((t = () => {
          l() && A();
        }),
        (n[44] = l),
        (n[45] = A),
        (n[46] = t))
      : (t = n[46]);
    let r;
    n[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, q.jsx)(k, {
          id: `librarySharing.requests.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading pending Library access requests`,
        })),
        (n[47] = r))
      : (r = n[47]);
    let i;
    return (
      n[48] !== T || n[49] !== t
        ? ((i = (0, q.jsx)(le, {
            children: (0, q.jsx)(se, {
              type: `error`,
              role: `alert`,
              content: e,
              isPrimaryCtaDisabled: T,
              onPrimaryCtaClick: t,
              primaryCtaText: r,
            }),
          })),
          (n[48] = T),
          (n[49] = t),
          (n[50] = i))
        : (i = n[50]),
      i
    );
  }
  if (!D) return null;
  let pe, me;
  if (
    n[51] !== a ||
    n[52] !== o ||
    n[53] !== ne?.pages ||
    n[54] !== c ||
    n[55] !== v ||
    n[56] !== O ||
    n[57] !== ie ||
    n[58] !== f ||
    n[59] !== l ||
    n[60] !== T ||
    n[61] !== B ||
    n[62] !== z ||
    n[63] !== A ||
    n[64] !== _ ||
    n[65] !== b ||
    n[66] !== u
  ) {
    me = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      n[69] === b
        ? (e = n[70])
        : ((e = (e) => {
            let [t, ...n] = e.requests.filter((t) => !b.has(ct({ request: t, recipient: e.recipient })));
            return t == null ? [] : [{ ...e, request: t, requests: [t, ...n] }];
          }),
          (n[69] = b),
          (n[70] = e));
      let t = at(ne?.pages.flatMap(Nt) ?? []).flatMap(e),
        r = ne?.pages.at(-1)?.next_cursor != null;
      if (t.length === 0 && !r) {
        me = null;
        break bb0;
      }
      let i;
      n[71] === ne?.pages
        ? (i = n[72])
        : ((i = new Map(ne?.pages.flatMap(jt))), (n[71] = ne?.pages), (n[72] = i));
      let d = i,
        p,
        m;
      (n[73] === v
        ? ((p = n[74]), (m = n[75]))
        : ((p = () => y(!v)),
          (m = v ? (0, q.jsx)(E, {}) : (0, q.jsx)(s, {})),
          (n[73] = v),
          (n[74] = p),
          (n[75] = m)),
        (pe = (0, q.jsxs)(le, {
          children: [
            (0, q.jsxs)(ue, {
              "aria-controls": _,
              "aria-expanded": v,
              color: `secondary`,
              variant: `ghost`,
              size: `sm`,
              onClick: p,
              children: [
                m,
                (0, q.jsx)(k, {
                  id: `librarySharing.requests.heading`,
                  defaultMessage: `Requests to share ({count, number})`,
                  description: `Expandable section in the Library share dialog for an owner to approve or decline requested access; count is the number of pending recipient-and-role groups`,
                  values: { count: t.length },
                }),
              ],
            }),
            v
              ? (0, q.jsxs)(`div`, {
                  id: _,
                  className: `flex flex-col gap-3`,
                  children: [
                    t.map((e) => {
                      let t = d.get(G(e.recipient)),
                        n = d.get(G(e.request.requester)),
                        r = t?.display_name ?? t?.email,
                        i = n?.display_name ?? n?.email,
                        s = new Set(e.requests.map(At)).size - 1,
                        p = it(e.request.requested_role_id, u.resourceKind),
                        m;
                      return (
                        (m =
                          n?.display_name != null && n.email != null
                            ? (0, q.jsx)(k, {
                                id: `librarySharing.requests.requestedByWithEmail`,
                                defaultMessage: `Requested by {name} ({email}){otherCount, plural, =0 {} one { and # other} other { and # others}}`,
                                description: `Supporting text under a Library access-request recipient; name and email identify the most recent requester and otherCount counts other people requesting the same role for this recipient`,
                                values: { name: n.display_name, email: n.email, otherCount: s },
                              })
                            : i == null
                              ? (0, q.jsx)(k, {
                                  id: `librarySharing.requests.requestedByUnknown`,
                                  defaultMessage: `Requested by a collaborator{otherCount, plural, =0 {} one { and # other} other { and # others}}`,
                                  description: `Supporting text under a Library access-request recipient when the latest requester's identity is unavailable; otherCount counts other requesters for the same recipient and role`,
                                  values: { otherCount: s },
                                })
                              : (0, q.jsx)(k, {
                                  id: `librarySharing.requests.requestedBy`,
                                  defaultMessage: `Requested by {name}{otherCount, plural, =0 {} one { and # other} other { and # others}}`,
                                  description: `Supporting text under a Library access-request recipient when the requester has only a name or email; name identifies the latest requester and otherCount counts other requesters for the same recipient and role`,
                                  values: { name: i, otherCount: s },
                                })),
                        (0, q.jsx)(
                          he,
                          {
                            avatar: (0, q.jsx)(Fe, {
                              avatarUrl: t?.avatar_url,
                              colorKey: e.recipient.principal_id,
                              name: r ?? null,
                              size: `sm`,
                            }),
                            label:
                              r ??
                              (0, q.jsx)(k, {
                                id: `librarySharing.requests.recipientFallback`,
                                defaultMessage: `Collaborator`,
                                description: `Fallback name for a Library access-request recipient whose name and email are unavailable`,
                              }),
                            secondaryLabel: (0, q.jsxs)(q.Fragment, {
                              children: [
                                t?.email == null ? null : (0, q.jsx)(`div`, { children: t.email }),
                                (0, q.jsx)(`div`, { children: m }),
                              ],
                            }),
                            size: `compact`,
                            trailingContent: (0, q.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, q.jsx)(`span`, {
                                  className: `text-sm text-codex-description`,
                                  children: (0, q.jsx)(Ze, { permission: p }),
                                }),
                                (0, q.jsx)(ue, {
                                  "aria-label":
                                    r == null
                                      ? f.formatMessage({
                                          id: `librarySharing.requests.approveUnknownLabel`,
                                          defaultMessage: `Approve access request`,
                                          description: `Accessible label for approving requested Library access when the recipient's name and email are unavailable`,
                                        })
                                      : f.formatMessage(
                                          {
                                            id: `librarySharing.requests.approveLabel`,
                                            defaultMessage: `Approve access for {name}`,
                                            description: `Accessible label for approving requested Library access; name identifies the recipient`,
                                          },
                                          { name: r },
                                        ),
                                  color: `secondary`,
                                  disabled: c || B || !a || (p !== `viewer` && p !== `editor`),
                                  size: `sm`,
                                  onClick: () => {
                                    l() && o && a && z({ decision: `approve`, row: e });
                                  },
                                  children: (0, q.jsx)(k, {
                                    id: `librarySharing.requests.approve`,
                                    defaultMessage: `Approve`,
                                    description: `Button for approving a recipient's requested Library access`,
                                  }),
                                }),
                                (0, q.jsx)(ue, {
                                  "aria-label":
                                    r == null
                                      ? f.formatMessage({
                                          id: `librarySharing.requests.declineUnknownLabel`,
                                          defaultMessage: `Decline access request`,
                                          description: `Accessible label for declining requested Library access when the recipient's name and email are unavailable`,
                                        })
                                      : f.formatMessage(
                                          {
                                            id: `librarySharing.requests.declineLabel`,
                                            defaultMessage: `Decline access for {name}`,
                                            description: `Accessible label for declining requested Library access; name identifies the recipient`,
                                          },
                                          { name: r },
                                        ),
                                  color: `secondary`,
                                  variant: `ghost`,
                                  disabled: c || B,
                                  size: `sm`,
                                  onClick: () => {
                                    l() && o && z({ decision: `decline`, row: e });
                                  },
                                  children: (0, q.jsx)(k, {
                                    id: `librarySharing.requests.decline`,
                                    defaultMessage: `Decline`,
                                    description: `Button for declining a recipient's requested Library access`,
                                  }),
                                }),
                              ],
                            }),
                          },
                          dt(e),
                        )
                      );
                    }),
                    r
                      ? (0, q.jsx)(ue, {
                          size: `xl`,
                          type: `button`,
                          color: `secondary`,
                          disabled: c || B || T,
                          loading: T,
                          onClick: () => {
                            l() && (ie ? O() : A());
                          },
                          children: (0, q.jsx)(k, {
                            id: `librarySharing.requests.loadMore`,
                            defaultMessage: `Load more requests`,
                            description: `Button loading another page of pending access requests in the Library owner's sharing dialog`,
                          }),
                        })
                      : null,
                  ],
                })
              : null,
          ],
        })));
    }
    ((n[51] = a),
      (n[52] = o),
      (n[53] = ne?.pages),
      (n[54] = c),
      (n[55] = v),
      (n[56] = O),
      (n[57] = ie),
      (n[58] = f),
      (n[59] = l),
      (n[60] = T),
      (n[61] = B),
      (n[62] = z),
      (n[63] = A),
      (n[64] = _),
      (n[65] = b),
      (n[66] = u),
      (n[67] = pe),
      (n[68] = me));
  } else ((pe = n[67]), (me = n[68]));
  return me === Symbol.for(`react.early_return_sentinel`) ? pe : me;
}
function At(e) {
  return G(e.requester);
}
function jt(e) {
  return e.principal_identities.map(Mt);
}
function Mt(e) {
  return [G(e.principal), e];
}
function Nt(e) {
  return e.requests;
}
function Pt(e, t, n, r) {
  return e.next_cursor != null && !r.includes(e.next_cursor) ? e.next_cursor : void 0;
}
function Ft() {
  return new Set();
}
var It, Lt, q;
function Rt() {
  return (Rt = e(() => {
    ((It = f()),
      z(),
      O(),
      D(),
      M(),
      u(),
      y(),
      (Lt = a()),
      v(),
      Pe(),
      P(),
      o(),
      h(),
      _(),
      r(),
      Te(),
      Xe(),
      i(),
      $e(),
      Ot(),
      ot(),
      ht(),
      (q = c()));
  }))();
}
function zt(e) {
  let t = (0, Vt.c)(17),
    { shares: n, effectiveAccess: r, resourceKind: i, renderActions: a, draftRoles: o } = e,
    s,
    c,
    l;
  if (
    t[0] !== o ||
    t[1] !== r?.collaborators ||
    t[2] !== a ||
    t[3] !== i ||
    t[4] !== n.owner ||
    t[5] !== n.shares
  ) {
    l = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = r?.collaborators.filter((e) => {
          let { principal: t } = e;
          return (t.principal_type === `user` || t.principal_type === `group`) && G(t) !== G(n.owner);
        }),
        u = new Map(e?.map(Bt)),
        d = new Set(),
        f = n.shares.flatMap((e) => {
          let t = e.recipient;
          if (t.recipient_type === `principal`) {
            let r = t.principal_type ?? `user`,
              i = `${r}:${t.principal_id}`;
            return (r !== `user` && r !== `group`) || i === G(n.owner)
              ? []
              : (d.add(i), [{ key: e.share_id, share: e, collaborator: u.get(i) }]);
          }
          return [{ key: e.share_id, share: e }];
        });
      for (let t of e ?? []) {
        let e = G(t.principal);
        d.has(e) || f.push({ key: `effective:${e}`, collaborator: t });
      }
      if (f.length === 0) {
        l = null;
        break bb0;
      }
      s = `flex flex-col gap-1`;
      let p;
      (t[9] !== o || t[10] !== a || t[11] !== i || t[12] !== n
        ? ((p = (e) => {
            let { key: t, share: r, collaborator: s } = e;
            if (o?.has(t) && o.get(t) == null) return null;
            let c =
                s?.email ??
                r?.recipient_email ??
                (r?.recipient.recipient_type === `email` ? r.recipient.email : void 0),
              l =
                r?.status === `pending` && !n.owner.principal_id.includes(`__`)
                  ? c || void 0
                  : s?.display_name || r?.recipient_display_name || c || void 0,
              u = it(s?.role_id ?? r?.role_id ?? ``, i),
              d =
                s?.principal.principal_type === `group` ||
                (r?.recipient.recipient_type === `principal` && r.recipient.principal_type === `group`),
              f = null;
            s?.inherited &&
              (f =
                s.source?.resource_display_name == null
                  ? (0, J.jsx)(k, {
                      id: `librarySharing.collaborators.inheritedUnnamed`,
                      defaultMessage: `Inherited from a parent folder`,
                      description: `Tooltip on the role of a Library collaborator who has inherited access from a parent folder whose display name is unavailable`,
                    })
                  : (0, J.jsx)(k, {
                      id: `librarySharing.collaborators.inherited`,
                      defaultMessage: `Inherited from {folderName}`,
                      description: `Tooltip on the role of a Library collaborator who has inherited access; folderName is the parent folder's display name`,
                      values: { folderName: s.source.resource_display_name },
                    }));
            let p =
              f != null || s?.group_source != null
                ? (0, J.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [
                      f,
                      s?.group_source == null
                        ? null
                        : (0, J.jsx)(k, {
                            id: `librarySharing.collaborators.groupAccess`,
                            defaultMessage: `Access through a group`,
                            description: `Tooltip on the role of a Library collaborator whose access comes from membership of a shared group`,
                          }),
                    ],
                  })
                : null;
            return (0, J.jsx)(
              he,
              {
                avatar: d
                  ? (0, J.jsx)(ze, { size: 28, Icon: F })
                  : (0, J.jsx)(Fe, {
                      size: `group`,
                      avatarUrl: s?.avatar_url ?? r?.recipient_avatar_url,
                      colorKey:
                        s?.principal.principal_id ??
                        (r?.recipient.recipient_type === `principal`
                          ? r.recipient.principal_id
                          : c?.toLowerCase()),
                      name: l ?? null,
                    }),
                label:
                  l ??
                  (0, J.jsx)(k, {
                    id: `librarySharing.collaborators.unnamed`,
                    defaultMessage: `Collaborator`,
                    description: `Fallback display name for a person or group with access in the Library sharing dialog when the server has not supplied a name or email`,
                  }),
                secondaryLabel: (0, J.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    c != null && c !== l ? (0, J.jsx)(`span`, { children: c }) : null,
                    r?.status === `pending`
                      ? (0, J.jsx)(k, {
                          id: `librarySharing.collaborators.inviteSent`,
                          defaultMessage: `Invite sent`,
                          description: `Status below a pending Library collaborator's email address; their invitation has been sent but not yet accepted`,
                        })
                      : null,
                  ],
                }),
                trailingContent: (0, J.jsx)(j, {
                  content: p,
                  children:
                    a == null
                      ? (0, J.jsx)(`span`, {
                          className: `pe-2 text-sm text-tertiary`,
                          tabIndex: p == null ? void 0 : 0,
                          children: (0, J.jsx)(Ze, { permission: u }),
                        })
                      : (0, J.jsx)(`span`, {
                          className: `inline-flex`,
                          tabIndex: p == null ? void 0 : 0,
                          children: a({ key: t, share: r, collaborator: s, role: u, personName: l }),
                        }),
                }),
              },
              t,
            );
          }),
          (t[9] = o),
          (t[10] = a),
          (t[11] = i),
          (t[12] = n),
          (t[13] = p))
        : (p = t[13]),
        (c = f.map(p)));
    }
    ((t[0] = o),
      (t[1] = r?.collaborators),
      (t[2] = a),
      (t[3] = i),
      (t[4] = n.owner),
      (t[5] = n.shares),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l));
  } else ((s = t[6]), (c = t[7]), (l = t[8]));
  if (l !== Symbol.for(`react.early_return_sentinel`)) return l;
  let u;
  return (
    t[14] !== s || t[15] !== c
      ? ((u = (0, J.jsx)(`div`, { className: s, children: c })), (t[14] = s), (t[15] = c), (t[16] = u))
      : (u = t[16]),
    u
  );
}
function Bt(e) {
  return [G(e.principal), e];
}
var Vt, J;
function Ht() {
  return (Ht = e(() => {
    ((Vt = f()), Ge(), b(), v(), Pe(), h(), Te(), Xe(), ot(), (J = c()));
  }))();
}
function Ut(e) {
  let n = (0, en.c)(92),
    {
      api: r,
      sharingScope: i,
      analytics: a,
      shares: o,
      effectiveAccess: s,
      allowedRoles: c,
      canChange: l,
      canRemove: u,
      canRemoveEffective: d,
      disabled: f,
      isCurrentSession: p,
      onStageChange: h,
    } = e,
    g = t(m),
    _ = ee(),
    [v, y] = (0, tn.useState)(null),
    b;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = new Map()), (n[0] = b)) : (b = n[0]);
  let [x, S] = (0, tn.useState)(b),
    C;
  n[1] === i ? (C = n[2]) : ((C = K(i, `shares`)), (n[1] = i), (n[2] = C));
  let w = C,
    te;
  n[3] === i ? (te = n[4]) : ((te = K(i, `effective-access`)), (n[3] = i), (n[4] = te));
  let ne = te,
    re;
  n[5] === i ? (re = n[6]) : ((re = K(i, `state`)), (n[5] = i), (n[6] = re));
  let T;
  n[7] !== c ||
  n[8] !== r ||
  n[9] !== l ||
  n[10] !== u ||
  n[11] !== d ||
  n[12] !== p ||
  n[13] !== o ||
  n[14] !== i.resourceKind
    ? ((T = async (e) => {
        let t = e.kind === `direct` ? e.desiredRole : e.preview.desired_role;
        if (
          !p() ||
          (t != null && (!l || !c.includes(t))) ||
          (t == null && e.kind === `effective` && !d) ||
          (t == null && e.kind === `direct` && !u)
        )
          throw Error(`Library access management is no longer permitted`);
        return e.kind === `effective`
          ? { kind: `effective`, preview: e.preview, result: await r.applyAccessChange(e.preview, o.owner) }
          : e.desiredRole == null
            ? (await r.removeShare(e.share), { kind: `direct`, share: e.share, updatedShare: null })
            : {
                kind: `direct`,
                share: e.share,
                updatedShare: await r.createShare({
                  recipient: e.share.recipient,
                  roleId: pt[i.resourceKind][e.desiredRole],
                  expectedInvitationId: e.share.share_id,
                }),
              };
      }),
      (n[7] = c),
      (n[8] = r),
      (n[9] = l),
      (n[10] = u),
      (n[11] = d),
      (n[12] = p),
      (n[13] = o),
      (n[14] = i.resourceKind),
      (n[15] = T))
    : (T = n[15]);
  let E;
  n[16] !== a || n[17] !== p || n[18] !== _ || n[19] !== g || n[20] !== w || n[21] !== i
    ? ((E = async (e) => {
        await _.cancelQueries({ queryKey: w.slice(0, 5) });
        let t = crypto.randomUUID();
        return (
          p() &&
            Qe(g, a, {
              ...$t(e, i),
              outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
              operationId: t,
            }),
          t
        );
      }),
      (n[16] = a),
      (n[17] = p),
      (n[18] = _),
      (n[19] = g),
      (n[20] = w),
      (n[21] = i),
      (n[22] = E))
    : (E = n[22]);
  let D;
  n[23] !== a || n[24] !== ne || n[25] !== p || n[26] !== _ || n[27] !== g || n[28] !== w || n[29] !== i
    ? ((D = async (e, t, n) => {
        if (!p()) return;
        let r = e.kind === `effective` && e.result.partial_failure === !0,
          o = e.kind === `effective` ? e.preview.mutations.find(Jt) : void 0,
          s = e.kind === `direct` && e.updatedShare == null ? e.share : void 0,
          c =
            s?.status === `active` && s.recipient.recipient_type === `principal`
              ? G({
                  principal_type: s.recipient.principal_type ?? `user`,
                  principal_id: s.recipient.principal_id,
                })
              : void 0,
          l = _.getQueryData(ne),
          u =
            c != null &&
            l?.complete === !0 &&
            l.collaborators.every((e) => G(e.principal) !== c || e.source?.invitation_id != null);
        if (
          (Et(_, o == null ? i : { ...i, resourceKind: `folder`, libraryFileId: o.resource.resource_id }, {
            includeShares:
              r ||
              (e.kind === `effective` &&
                (e.preview.mutations.length !== 1 || e.preview.mutations[0]?.invitation_id == null)),
            preserveEffectiveAccess: u,
          }),
          await Promise.all([
            e.kind === `direct` ||
            (!r && e.preview.mutations.length === 1 && e.preview.mutations[0]?.invitation_id != null)
              ? _.cancelQueries({ queryKey: w, exact: !0 })
              : void 0,
            (e.kind === `effective` ? !r && e.result.effective_access.complete : e.updatedShare != null || u)
              ? _.cancelQueries({ queryKey: ne, exact: !0 })
              : void 0,
          ]),
          p())
        ) {
          if (e.kind === `direct`) {
            if (
              (_.setQueryData(w, (t) =>
                t == null
                  ? t
                  : {
                      ...t,
                      shares: t.shares.flatMap((t) =>
                        t.share_id === e.share.share_id
                          ? e.updatedShare == null
                            ? []
                            : [
                                {
                                  ...t,
                                  ...e.updatedShare,
                                  recipient_display_name:
                                    e.updatedShare.recipient_display_name ?? t.recipient_display_name,
                                  recipient_email: e.updatedShare.recipient_email ?? t.recipient_email,
                                },
                              ]
                          : [t],
                      ),
                    },
              ),
              e.updatedShare != null)
            ) {
              let t = e.updatedShare;
              _.setQueryData(ne, (n) =>
                n == null
                  ? n
                  : {
                      ...n,
                      collaborators: n.collaborators.map((n) =>
                        n.source?.invitation_id === e.share.share_id &&
                        n.inherited !== !0 &&
                        n.group_source == null
                          ? {
                              ...n,
                              role_id: t.role_id,
                              direct_role_id: t.role_id,
                              source: { ...n.source, role_id: t.role_id },
                            }
                          : n,
                      ),
                    },
              );
            }
            u &&
              s != null &&
              _.setQueryData(ne, (e) =>
                e == null
                  ? e
                  : {
                      ...e,
                      collaborators: e.collaborators.flatMap((e) =>
                        G(e.principal) === c
                          ? e.source?.invitation_id === s.share_id &&
                            e.inherited !== !0 &&
                            e.group_source == null
                            ? []
                            : (e.inherited === !0 || e.group_source != null) && e.direct_role_id === s.role_id
                              ? [{ ...e, direct_role_id: null }]
                              : [e]
                          : [e],
                      ),
                    },
              );
          } else {
            _.setQueryData(ne, e.result.effective_access);
            let t = !r && e.preview.mutations.length === 1 ? e.preview.mutations[0] : void 0;
            t?.invitation_id != null &&
              _.setQueryData(w, (e) =>
                e == null
                  ? e
                  : {
                      ...e,
                      shares: e.shares.flatMap((e) =>
                        e.share_id === t.invitation_id
                          ? t.new_role_id == null
                            ? []
                            : [{ ...e, role_id: t.new_role_id }]
                          : [e],
                      ),
                    },
              );
          }
          (y(null),
            Qe(g, a, {
              ...$t(t, i),
              outcome: r
                ? Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL
                : Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED,
              operationId: n,
              succeededRecipientCount: r ? void 0 : 1,
              failedRecipientCount: r ? 1 : void 0,
            }),
            r
              ? g
                  .get(oe)
                  .warning(
                    (0, Z.jsx)(k, {
                      id: `librarySharing.collaborators.partialChange`,
                      defaultMessage: `Some access changes couldn't be applied. Review the current permissions before trying again`,
                      description: `Warning toast after the Library backend reports a partially applied inherited or group access change; the user must review refreshed permissions before retrying`,
                    }),
                  )
              : g
                  .get(oe)
                  .success(
                    (0, Z.jsx)(k, {
                      id: `librarySharing.collaborators.updated`,
                      defaultMessage: `Access updated`,
                      description: `Success toast after the backend confirms a Library collaborator's role change or removal`,
                    }),
                  ));
        }
      }),
      (n[23] = a),
      (n[24] = ne),
      (n[25] = p),
      (n[26] = _),
      (n[27] = g),
      (n[28] = w),
      (n[29] = i),
      (n[30] = D))
    : (D = n[30]);
  let ie;
  n[31] !== a || n[32] !== p || n[33] !== _ || n[34] !== g || n[35] !== i
    ? ((ie = (e, t, n) => {
        if (!p()) return;
        (y(null),
          Qe(g, a, {
            ...$t(t, i),
            outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
            operationId: n,
            failedRecipientCount: 1,
            error: nt(e),
          }),
          g
            .get(oe)
            .danger(
              (0, Z.jsx)(k, {
                id: `librarySharing.collaborators.updateFailed`,
                defaultMessage: `Couldn't update access. Review the current permissions and try again`,
                description: `Error toast when changing or removing a Library collaborator's access fails; current permissions are reloaded before a new attempt`,
              }),
              { errorAnalytics: { toastId: `librarySharing.collaborators.updateFailed` } },
            ));
        let r = t.kind === `effective` ? t.preview.mutations.find(qt) : void 0;
        Et(_, r == null ? i : { ...i, resourceKind: `folder`, libraryFileId: r.resource.resource_id }, {
          includeShares: !0,
        });
      }),
      (n[31] = a),
      (n[32] = p),
      (n[33] = _),
      (n[34] = g),
      (n[35] = i),
      (n[36] = ie))
    : (ie = n[36]);
  let ae;
  n[37] !== re || n[38] !== T || n[39] !== E || n[40] !== D || n[41] !== ie
    ? ((ae = {
        mutationKey: re,
        networkMode: `always`,
        retry: !1,
        mutationFn: T,
        onMutate: E,
        onSuccess: D,
        onError: ie,
      }),
      (n[37] = re),
      (n[38] = T),
      (n[39] = E),
      (n[40] = D),
      (n[41] = ie),
      (n[42] = ae))
    : (ae = n[42]);
  let { mutateAsync: O, isPending: A } = ce(ae),
    se;
  n[43] !== O || n[44] !== h
    ? ((se = function (e, t) {
        (S((n) => {
          let r = new Map(n);
          return (
            t == null ? r.delete(e) : r.set(e, t.kind === `direct` ? t.desiredRole : t.preview.desired_role),
            r
          );
        }),
          h(
            `collaborator:${e}`,
            t == null
              ? null
              : {
                  kind: `collaborator`,
                  save: () =>
                    O(t)
                      .then(Kt, Y)
                      .finally(() => {
                        (S((t) => {
                          let n = new Map(t);
                          return (n.delete(e), n);
                        }),
                          h(`collaborator:${e}`, null));
                      }),
                },
          ));
      }),
      (n[43] = O),
      (n[44] = h),
      (n[45] = se))
    : (se = n[45]);
  let j = se,
    M;
  n[46] === i ? (M = n[47]) : ((M = K(i, `state`)), (n[46] = i), (n[47] = M));
  let N;
  n[48] !== r || n[49] !== l || n[50] !== d || n[51] !== p
    ? ((N = (e) => {
        let { collaborator: t, desiredRole: n } = e;
        if (!p() || (n == null ? !d : !l))
          throw Error(`Library inherited access management is no longer permitted`);
        return r.previewAccessChange({ recipient: t.principal, desiredRole: n });
      }),
      (n[48] = r),
      (n[49] = l),
      (n[50] = d),
      (n[51] = p),
      (n[52] = N))
    : (N = n[52]);
  let P;
  n[53] !== p || n[54] !== _ || n[55] !== w || n[56] !== i.resourceKind || n[57] !== j
    ? ((P = (e, t) => {
        let { key: n, personName: r } = t;
        if (p()) {
          if (
            e.affects_other_descendants === !0 ||
            e.affects_other_group_members === !0 ||
            e.mutations.some(
              (t) =>
                t.resource.resource_type !== e.resource.resource_type ||
                t.resource.resource_id !== e.resource.resource_id ||
                t.affects_other_descendants === !0 ||
                t.affects_other_group_members === !0,
            )
          )
            y({ key: n, personName: r, preview: e });
          else {
            if (e.desired_role != null && e.mutations.length === 0 && e.recipient.principal_type === `user`) {
              let t = _.getQueryData(w)?.shares.find(
                (t) =>
                  t.status === `active` &&
                  t.recipient.recipient_type === `principal` &&
                  (t.recipient.principal_type ?? `user`) === `user` &&
                  t.recipient.principal_id === e.recipient.principal_id,
              );
              if (t != null && it(t.role_id, i.resourceKind) !== e.desired_role) {
                j(n, { kind: `direct`, share: t, desiredRole: e.desired_role });
                return;
              }
            }
            j(n, { kind: `effective`, preview: e });
          }
        }
      }),
      (n[53] = p),
      (n[54] = _),
      (n[55] = w),
      (n[56] = i.resourceKind),
      (n[57] = j),
      (n[58] = P))
    : (P = n[58]);
  let F;
  n[59] !== p || n[60] !== _ || n[61] !== g || n[62] !== i
    ? ((F = () => {
        p() &&
          (g
            .get(oe)
            .danger(
              (0, Z.jsx)(k, {
                id: `librarySharing.collaborators.previewFailed`,
                defaultMessage: `Couldn't check how this change affects access. Try again`,
                description: `Error toast when the Library sharing dialog cannot preview an inherited permission change; no access change has been applied`,
              }),
              { errorAnalytics: { toastId: `librarySharing.collaborators.previewFailed` } },
            ),
          Et(_, i));
      }),
      (n[59] = p),
      (n[60] = _),
      (n[61] = g),
      (n[62] = i),
      (n[63] = F))
    : (F = n[63]);
  let le;
  n[64] !== M || n[65] !== N || n[66] !== P || n[67] !== F
    ? ((le = { mutationKey: M, networkMode: `always`, retry: !1, mutationFn: N, onSuccess: P, onError: F }),
      (n[64] = M),
      (n[65] = N),
      (n[66] = P),
      (n[67] = F),
      (n[68] = le))
    : (le = n[68]);
  let { mutate: ue, isPending: de } = ce(le),
    I = f || A || de,
    L;
  n[69] !== c ||
  n[70] !== I ||
  n[71] !== l ||
  n[72] !== u ||
  n[73] !== d ||
  n[74] !== x ||
  n[75] !== ue ||
  n[76] !== i.accountUserId ||
  n[77] !== j
    ? ((L = (e) => {
        let { key: t, share: n, collaborator: r, role: a, personName: o } = e,
          s = x.get(t) ?? a;
        if (
          (r?.principal.principal_type === `user` && r.principal.principal_id === i.accountUserId) ||
          (n?.recipient.recipient_type === `principal` &&
            (n.recipient.principal_type ?? `user`) === `user` &&
            n.recipient.principal_id === i.accountUserId)
        )
          return (0, Z.jsx)(`span`, {
            className: `pe-4 text-sm text-tertiary`,
            children: (0, Z.jsx)(Ze, { permission: a }),
          });
        let f =
            r != null &&
            n?.status !== `pending` &&
            (n == null || r.inherited === !0 || r.group_source != null || a === `editor`),
          p = f ? c.filter(Gt) : c,
          m = (n != null && u) || (f && d);
        return (l && p.some((e) => e !== a)) || m
          ? (0, Z.jsx)(Le, {
              indicatorVariant: `checkmark`,
              disabled: I,
              options: p.map((e) => ({ value: e, disabled: !l })),
              renderLabel: Wt,
              removeLabel: (0, Z.jsx)(k, {
                id: `librarySharing.collaborators.remove`,
                defaultMessage: `Remove access`,
                description: `Menu item for removing a collaborator's access to a Library file or folder`,
              }),
              value: s ?? `unknown`,
              variant: `inline`,
              onChange: (e) => {
                if (!I && l && e !== `unknown` && e !== s) {
                  if (e === a) {
                    j(t, null);
                    return;
                  }
                  r != null && n?.status !== `pending` && (e === `viewer` || e === `editor`)
                    ? ue({ key: t, collaborator: r, desiredRole: e, personName: o })
                    : n != null && j(t, { kind: `direct`, share: n, desiredRole: e });
                }
              },
              onRemoveAccess: m
                ? () => {
                    I ||
                      (d && f
                        ? ue({ key: t, collaborator: r, desiredRole: null, personName: o })
                        : n != null && u && j(t, { kind: `direct`, share: n, desiredRole: null }));
                  }
                : void 0,
            })
          : (0, Z.jsx)(`span`, {
              className: `pe-4 text-sm text-tertiary`,
              children: (0, Z.jsx)(Ze, { permission: s }),
            });
      }),
      (n[69] = c),
      (n[70] = I),
      (n[71] = l),
      (n[72] = u),
      (n[73] = d),
      (n[74] = x),
      (n[75] = ue),
      (n[76] = i.accountUserId),
      (n[77] = j),
      (n[78] = L))
    : (L = n[78]);
  let fe;
  n[79] !== x || n[80] !== s || n[81] !== o || n[82] !== i.resourceKind || n[83] !== L
    ? ((fe = (0, Z.jsx)(zt, {
        shares: o,
        effectiveAccess: s,
        resourceKind: i.resourceKind,
        draftRoles: x,
        renderActions: L,
      })),
      (n[79] = x),
      (n[80] = s),
      (n[81] = o),
      (n[82] = i.resourceKind),
      (n[83] = L),
      (n[84] = fe))
    : (fe = n[84]);
  let R;
  n[85] !== A || n[86] !== v || n[87] !== j
    ? ((R =
        v == null
          ? null
          : (0, Z.jsx)(Yt, {
              isPending: A,
              personName: v.personName,
              preview: v.preview,
              onCancel: () => y(null),
              onConfirm: () => {
                (j(v.key, { kind: `effective`, preview: v.preview }), y(null));
              },
            })),
      (n[85] = A),
      (n[86] = v),
      (n[87] = j),
      (n[88] = R))
    : (R = n[88]);
  let z;
  return (
    n[89] !== fe || n[90] !== R
      ? ((z = (0, Z.jsxs)(Z.Fragment, { children: [fe, R] })), (n[89] = fe), (n[90] = R), (n[91] = z))
      : (z = n[91]),
    z
  );
}
function Wt(e) {
  return (0, Z.jsx)(Ze, { permission: e === `unknown` ? void 0 : e });
}
function Gt(e) {
  return e === `viewer` || e === `editor`;
}
function Y() {
  return !1;
}
function Kt(e) {
  return e.kind !== `effective` || e.result.partial_failure !== !0;
}
function qt(e) {
  return e.resource.resource_type === `library_folder`;
}
function Jt(e) {
  return e.resource.resource_type === `library_folder`;
}
function Yt(e) {
  let t = (0, en.c)(40),
    { isPending: n, personName: r, preview: i, onCancel: a, onConfirm: o } = e,
    s;
  t[0] !== i.affects_other_descendants || t[1] !== i.mutations
    ? ((s = i.affects_other_descendants || i.mutations.some(X)),
      (t[0] = i.affects_other_descendants),
      (t[1] = i.mutations),
      (t[2] = s))
    : (s = t[2]);
  let c = s,
    l;
  t[3] !== i.affects_other_group_members || t[4] !== i.mutations
    ? ((l = i.affects_other_group_members || i.mutations.some(Zt)),
      (t[3] = i.affects_other_group_members),
      (t[4] = i.mutations),
      (t[5] = l))
    : (l = t[5]);
  let u = l,
    d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(k, {
        id: `librarySharing.collaborators.confirmTitle`,
        defaultMessage: `Change shared access?`,
        description: `Title of the confirmation dialog shown before a Library permission change affects parent folders or other members of a group`,
      })),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === r
    ? (f = t[8])
    : ((f =
        r == null
          ? (0, Z.jsx)(k, {
              id: `librarySharing.collaborators.confirmDescriptionUnknown`,
              defaultMessage: `Review all access changes before continuing`,
              description: `Body of the inherited Library access confirmation when the collaborator's name and email are unavailable; affected resources are listed below`,
            })
          : (0, Z.jsx)(k, {
              id: `librarySharing.collaborators.confirmDescription`,
              defaultMessage: `Review all access changes for {personName} before continuing`,
              description: `Body of the inherited Library access confirmation; personName is the collaborator whose effective access is being changed, and the affected resources are listed below`,
              values: { personName: r },
            })),
      (t[7] = r),
      (t[8] = f));
  let p;
  t[9] !== n || t[10] !== o
    ? ((p = () => {
        n || o();
      }),
      (t[9] = n),
      (t[10] = o),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(k, {
        id: `librarySharing.collaborators.cancelChange`,
        defaultMessage: `Cancel`,
        description: `Button for dismissing an inherited Library access confirmation without applying changes`,
      })),
      (t[12] = m))
    : (m = t[12]);
  let ee;
  t[13] === n
    ? (ee = t[14])
    : ((ee = (0, Z.jsx)(be.Close, {
        children: (0, Z.jsx)(ue, {
          size: `xl`,
          color: `secondary`,
          disabled: n,
          type: `button`,
          children: m,
        }),
      })),
      (t[13] = n),
      (t[14] = ee));
  let h;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(k, {
        id: `librarySharing.collaborators.stageChange`,
        defaultMessage: `Continue`,
        description: `Confirmation button staging the listed Library permission changes, including parent-folder or group effects; the user must still save the sharing dialog to apply them`,
      })),
      (t[15] = h))
    : (h = t[15]);
  let g;
  t[16] === n
    ? (g = t[17])
    : ((g = (0, Z.jsx)(ue, {
        size: `xl`,
        color: `primary`,
        disabled: n,
        loading: n,
        type: `submit`,
        children: h,
      })),
      (t[16] = n),
      (t[17] = g));
  let _;
  t[18] !== ee || t[19] !== g
    ? ((_ = (0, Z.jsxs)(Z.Fragment, { children: [ee, g] })), (t[18] = ee), (t[19] = g), (t[20] = _))
    : (_ = t[20]);
  let v;
  t[21] === i.mutations ? (v = t[22]) : ((v = i.mutations.map(Xt)), (t[21] = i.mutations), (t[22] = v));
  let y;
  t[23] === v
    ? (y = t[24])
    : ((y = (0, Z.jsx)(`ul`, { className: `flex flex-col gap-2`, children: v })), (t[23] = v), (t[24] = y));
  let b;
  t[25] === c
    ? (b = t[26])
    : ((b = c
        ? (0, Z.jsx)(`p`, {
            className: `text-sm text-codex-description`,
            children: (0, Z.jsx)(k, {
              id: `librarySharing.collaborators.descendantImpact`,
              defaultMessage: `This also changes access to other files and folders inside the affected folders`,
              description: `Warning in the Library inherited access confirmation that changing a parent folder's permissions also changes access to its descendants`,
            }),
          })
        : null),
      (t[25] = c),
      (t[26] = b));
  let x;
  t[27] === u
    ? (x = t[28])
    : ((x = u
        ? (0, Z.jsx)(`p`, {
            className: `text-sm text-codex-description`,
            children: (0, Z.jsx)(k, {
              id: `librarySharing.collaborators.groupImpact`,
              defaultMessage: `This also changes access for other people in the affected groups`,
              description: `Warning in the Library permission confirmation that changing a group grant affects other members of that group`,
            }),
          })
        : null),
      (t[27] = u),
      (t[28] = x));
  let S;
  t[29] !== y || t[30] !== b || t[31] !== x
    ? ((S = (0, Z.jsx)(le, {
        children: (0, Z.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [y, b, x] }),
      })),
      (t[29] = y),
      (t[30] = b),
      (t[31] = x),
      (t[32] = S))
    : (S = t[32]);
  let C;
  return (
    t[33] !== n || t[34] !== a || t[35] !== _ || t[36] !== S || t[37] !== f || t[38] !== p
      ? ((C = (0, Z.jsx)(B, {
          title: d,
          subtitle: f,
          isDismissalDisabled: n,
          onClose: a,
          onSubmit: p,
          footer: _,
          children: S,
        })),
        (t[33] = n),
        (t[34] = a),
        (t[35] = _),
        (t[36] = S),
        (t[37] = f),
        (t[38] = p),
        (t[39] = C))
      : (C = t[39]),
    C
  );
}
function Xt(e) {
  let t = e.resource.resource_type === `library_folder` ? `folder` : `file`;
  return (0, Z.jsxs)(
    `li`,
    {
      className: `flex justify-between gap-3`,
      children: [
        (0, Z.jsx)(`span`, {
          className: `min-w-0 truncate`,
          children:
            e.resource_display_name ??
            (0, Z.jsx)(k, {
              id: `librarySharing.collaborators.unnamedResource`,
              defaultMessage: `Shared item`,
              description: `Fallback resource label in the Library inherited access confirmation when the server does not provide the file or folder name`,
            }),
        }),
        (0, Z.jsxs)(`span`, {
          className: `shrink-0 text-codex-description`,
          children: [
            (0, Z.jsx)(Qt, { roleId: e.old_role_id, resourceKind: t }),
            (0, Z.jsx)(`span`, {
              className: `mx-1`,
              children: (0, Z.jsx)(k, {
                id: `librarySharing.collaborators.roleChangeSeparator`,
                defaultMessage: `→`,
                description: `Arrow between the separate previous and new permission labels in the Library access-change confirmation. Point from the old permission to the new one in your language's reading direction; the interface adds spacing.`,
              }),
            }),
            (0, Z.jsx)(Qt, { roleId: e.new_role_id, resourceKind: t }),
          ],
        }),
      ],
    },
    `${e.resource.resource_type}:${e.resource.resource_id}:${G(e.principal)}`,
  );
}
function Zt(e) {
  return e.affects_other_group_members;
}
function X(e) {
  return e.affects_other_descendants;
}
function Qt(e) {
  let t = (0, en.c)(3),
    { resourceKind: n, roleId: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i =
          r == null
            ? (0, Z.jsx)(k, {
                id: `librarySharing.collaborators.noAccess`,
                defaultMessage: `No access`,
                description: `Permission value in the Library access-change confirmation when no role existed before the change or access will be removed`,
              })
            : (0, Z.jsx)(Ze, { permission: it(r, n) })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function $t(e, t) {
  let n = e.kind === `direct` ? e.share.recipient : e.preview.recipient,
    r = e.kind === `direct` ? e.desiredRole : e.preview.desired_role,
    i = e.kind === `direct` ? it(e.share.role_id, t.resourceKind) : (e.preview.current_role ?? void 0),
    a = xe.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER;
  return (
    `recipient_type` in n && n.recipient_type === `email`
      ? (a = xe.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL)
      : `principal_type` in n &&
        n.principal_type === `group` &&
        (a = xe.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP),
    {
      action:
        r == null
          ? ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REMOVE_COLLABORATOR
          : ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_ROLE,
      recipientKind: a,
      recipientCount: 1,
      role: tt(r ?? i),
      previousRole: tt(e.kind === `direct` && r == null ? void 0 : i),
    }
  );
}
var en, tn, Z;
function nn() {
  return (nn = e(() => {
    ((en = f()),
      z(),
      O(),
      U(),
      M(),
      u(),
      y(),
      (tn = a()),
      v(),
      o(),
      _(),
      r(),
      I(),
      yt(),
      Xe(),
      $e(),
      Ot(),
      Ht(),
      ot(),
      (Z = c()));
  }))();
}
async function rn(e, t, n) {
  let r = [...e].sort(([, e], [, t]) => Number(e.kind === `link`) - Number(t.kind === `link`));
  for (let [e, i] of r) {
    if (!t() || !(await i.save())) return !1;
    n(e, i);
  }
  return t();
}
function an(e) {
  let n = (0, pn.c)(59),
    {
      account: r,
      api: i,
      sharingScope: a,
      sharingState: o,
      shares: s,
      effectiveAccess: c,
      analytics: l,
      canInvite: u,
      disabled: d,
      isCurrentSession: f,
      onStageChange: p,
    } = e,
    h = t(m),
    g = ee(),
    _ = r.structure === `workspace`,
    v;
  n[0] === _ ? (v = n[1]) : ((v = { enabled: _ }), (n[0] = _), (n[1] = v));
  let { data: y, isError: b } = ie(fe, a.accountId, v),
    x;
  n[2] !== r || n[3] !== y || n[4] !== b
    ? ((x = Re(r, y, b)), (n[2] = r), (n[3] = y), (n[4] = b), (n[5] = x))
    : (x = n[5]);
  let S = x,
    { canSearchMembers: C } = S,
    w = s == null ? void 0 : lt(s.allowed_roles, a.resourceKind),
    [te, ne] = (0, mn.useState)(),
    re;
  n[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((re = []), (n[6] = re)) : (re = n[6]);
  let [T, E] = (0, mn.useState)(re),
    D = Je(T.some(fn), te),
    ae = w?.includes(D) ? D : w?.[0],
    [O, A] = (0, mn.useState)(``),
    j,
    M,
    N;
  n[7] !== c || n[8] !== T || n[9] !== s || n[10] !== o
    ? (({ existingPrincipalKeys: M, existingEmails: j } = Ue(o, s, c)),
      (N = Be(T, j, M)),
      (n[7] = c),
      (n[8] = T),
      (n[9] = s),
      (n[10] = o),
      (n[11] = j),
      (n[12] = M),
      (n[13] = N))
    : ((j = n[11]), (M = n[12]), (N = n[13]));
  let P = N,
    F;
  n[14] === w
    ? (F = n[15])
    : ((F = function (e, t) {
        let { recipient: n } = e,
          r = Je(n.recipient_type === `principal` && n.principal_type === `group`, t);
        return w?.includes(r) ? r : w?.[0];
      }),
      (n[14] = w),
      (n[15] = F));
  let ue = F,
    de;
  n[16] === a ? (de = n[17]) : ((de = K(a, `state`)), (n[16] = a), (n[17] = de));
  let I;
  n[18] !== i ||
  n[19] !== u ||
  n[20] !== C ||
  n[21] !== j ||
  n[22] !== M ||
  n[23] !== ue ||
  n[24] !== f ||
  n[25] !== _ ||
  n[26] !== a.resourceKind
    ? ((I = (e) => {
        let { invitees: t, role: n, explicitRole: r } = e,
          o = f() && u && (!_ || C) && t.every(dn) && !Be(t, j, M);
        return Promise.allSettled(
          t.map(async (e) => {
            let { recipient: t } = e,
              n = ue(e, r);
            if (!o || n == null) throw Error(`Library invitations are no longer permitted`);
            return i.createShare({ recipient: t, roleId: pt[a.resourceKind][n] });
          }),
        ).then((e) => ({ results: e, role: n }));
      }),
      (n[18] = i),
      (n[19] = u),
      (n[20] = C),
      (n[21] = j),
      (n[22] = M),
      (n[23] = ue),
      (n[24] = f),
      (n[25] = _),
      (n[26] = a.resourceKind),
      (n[27] = I))
    : (I = n[27]);
  let L;
  n[28] !== l || n[29] !== f || n[30] !== h
    ? ((L = (e) => {
        let { invitees: t, role: n } = e,
          r = crypto.randomUUID();
        return (
          f() &&
            Qe(h, l, {
              action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE,
              outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
              operationId: r,
              recipientCount: t.length,
              recipientKind: et(t.map(un)),
              role: tt(n),
            }),
          r
        );
      }),
      (n[28] = l),
      (n[29] = f),
      (n[30] = h),
      (n[31] = L))
    : (L = n[31]);
  let { mutateAsync: R, isPending: z } = ce({
      mutationKey: de,
      networkMode: `always`,
      retry: !1,
      mutationFn: I,
      onMutate: L,
      onSuccess: async (e, t, n) => {
        let { results: r, role: i } = e,
          { invitees: o, explicitRole: s } = t;
        if (!f()) return;
        let c = new Set(r.flatMap((e, t) => (e.status === `rejected` ? [o[t].id] : []))),
          u = r.flatMap((e, t) =>
            e.status === `fulfilled`
              ? [
                  {
                    ...e.value,
                    recipient_display_name: e.value.recipient_display_name ?? o[t].label,
                    recipient_email: e.value.recipient_email ?? o[t].secondaryLabel,
                  },
                ]
              : [],
          ),
          d = a.resourceKind === `file` && u.length > 0;
        if ((d && (await Dt(g, a)), await g.cancelQueries({ queryKey: K(a, `shares`), exact: !0 }), !f()))
          return;
        (g.setQueryData(K(a, `shares`), (e) =>
          e == null ? e : { ...e, shares: [...new Map([...e.shares, ...u].map(ln)).values()] },
        ),
          Et(g, a, { includeShares: u.length === 0, preserveLibraryBrowse: d }),
          ne(c.size > 0 ? s : void 0),
          A(``),
          pe(
            o.filter((e) => c.has(e.id)),
            s,
          ));
        let p = Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED;
        c.size > 0 &&
          (p =
            u.length === 0
              ? Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED
              : Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL);
        let m = r.find(cn);
        (Qe(h, l, {
          action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE,
          outcome: p,
          operationId: n,
          recipientCount: o.length,
          recipientKind: et(o.map(sn)),
          succeededRecipientCount: u.length,
          failedRecipientCount: c.size,
          role: tt(i),
          error: nt(m?.reason instanceof Error ? m.reason : void 0),
        }),
          c.size === 0
            ? h
                .get(oe)
                .success(
                  (0, hn.jsx)(k, {
                    id: `librarySharing.invite.sent`,
                    defaultMessage: `{count, plural, one {Invitation sent} other {Invitations sent}}`,
                    description: `Toast after Library sharing invitations are confirmed by the backend; count is the number of invited people or groups`,
                    values: { count: u.length },
                  }),
                )
            : h
                .get(oe)
                .danger(
                  (0, hn.jsx)(k, {
                    id: `librarySharing.invite.failed`,
                    defaultMessage: `{count, plural, one {One invitation failed} other {# invitations failed}}. Failed recipients are still selected so you can try again`,
                    description: `Toast after some or all Library invitations fail; count is only the failed invitations, which remain selected for retry`,
                    values: { count: c.size },
                  }),
                  { errorAnalytics: { toastId: `librarySharing.invite.failed` } },
                ));
      },
    }),
    B = d || z;
  function pe(e, t) {
    (E(e),
      p(
        `invite`,
        e.length === 0
          ? null
          : {
              kind: `invite`,
              invitees: e,
              save: async () => {
                try {
                  let n = e.map((e) => ue(e, t ?? te)),
                    { results: r } = await R({
                      invitees: e,
                      explicitRole: t ?? te,
                      role: n.every((e) => e === n[0]) ? n[0] : void 0,
                    });
                  return r.every(on);
                } catch {
                  return !1;
                }
              },
            },
      ));
  }
  let me;
  n[32] !== r.structure ||
  n[33] !== w ||
  n[34] !== i ||
  n[35] !== C ||
  n[36] !== B ||
  n[37] !== j ||
  n[38] !== M ||
  n[39] !== P ||
  n[40] !== O ||
  n[41] !== S ||
  n[42] !== ae ||
  n[43] !== T ||
  n[44] !== ne ||
  n[45] !== s ||
  n[46] !== a.accountId ||
  n[47] !== a.accountUserId ||
  n[48] !== o ||
  n[49] !== pe
    ? ((me =
        (r.structure === `personal` || C) && (w == null || ae != null)
          ? (0, hn.jsxs)(le, {
              children: [
                (0, hn.jsx)(We, {
                  accountId: a.accountId,
                  currentPrincipalId: a.accountUserId,
                  currentEmail: o.viewer.email ?? void 0,
                  ...S,
                  disabled: B,
                  existingPrincipalKeys: M,
                  existingEmails: j,
                  shares: s,
                  query: O,
                  onQueryChange: A,
                  selected: T,
                  resolveRecipient: i.resolveRecipient,
                  onChange: pe,
                  role: ae,
                  allowedRoles: w,
                  onRoleChange: (e) => {
                    (ne(e), pe(T, e));
                  },
                }),
                P
                  ? (0, hn.jsx)(`p`, {
                      className: `text-sm text-danger`,
                      role: `alert`,
                      children: (0, hn.jsx)(k, {
                        id: `librarySharing.invite.alreadyAdded`,
                        defaultMessage: `This person already has access or is selected`,
                        description: `Validation error when a Library invite includes an existing collaborator or duplicate recipient`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[32] = r.structure),
      (n[33] = w),
      (n[34] = i),
      (n[35] = C),
      (n[36] = B),
      (n[37] = j),
      (n[38] = M),
      (n[39] = P),
      (n[40] = O),
      (n[41] = S),
      (n[42] = ae),
      (n[43] = T),
      (n[44] = ne),
      (n[45] = s),
      (n[46] = a.accountId),
      (n[47] = a.accountUserId),
      (n[48] = o),
      (n[49] = pe),
      (n[50] = me))
    : (me = n[50]);
  let V;
  n[51] !== _ || n[52] !== g || n[53] !== b || n[54] !== a.accountId
    ? ((V =
        _ && b
          ? (0, hn.jsx)(le, {
              children: (0, hn.jsx)(se, {
                type: `error`,
                role: `alert`,
                content: (0, hn.jsx)(k, {
                  id: `librarySharing.access.incomplete`,
                  defaultMessage: `Couldn't load all access details. Some sharing actions are unavailable`,
                  description: `Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled`,
                }),
                primaryCtaText: (0, hn.jsx)(k, {
                  id: `librarySharing.retry`,
                  defaultMessage: `Retry`,
                  description: `Button retrying a failed Library sharing data request`,
                }),
                onPrimaryCtaClick: () => {
                  g.invalidateQueries({ queryKey: [`accounts`, `settings`, a.accountId] });
                },
              }),
            })
          : null),
      (n[51] = _),
      (n[52] = g),
      (n[53] = b),
      (n[54] = a.accountId),
      (n[55] = V))
    : (V = n[55]);
  let he;
  return (
    n[56] !== me || n[57] !== V
      ? ((he = (0, hn.jsxs)(hn.Fragment, { children: [me, V] })), (n[56] = me), (n[57] = V), (n[58] = he))
      : (he = n[58]),
    he
  );
}
function on(e) {
  return e.status === `fulfilled`;
}
function sn(e) {
  let { recipient: t } = e;
  return t;
}
function cn(e) {
  return e.status === `rejected`;
}
function ln(e) {
  return [e.share_id, e];
}
function un(e) {
  let { recipient: t } = e;
  return t;
}
function dn(e) {
  return e.isValid;
}
function fn(e) {
  let { recipient: t } = e;
  return t.recipient_type === `principal` && t.principal_type === `group`;
}
var pn, mn, hn;
function gn() {
  return (gn = e(() => {
    ((pn = f()),
      z(),
      M(),
      u(),
      y(),
      (mn = a()),
      v(),
      R(),
      P(),
      o(),
      _(),
      r(),
      Ve(),
      $e(),
      Ot(),
      ot(),
      He(),
      W(),
      (hn = c()));
  }))();
}
function _n(e) {
  let n = (0, Sn.c)(79),
    {
      allowedRoles: r,
      analytics: i,
      api: a,
      canInitiateSharing: o,
      canManage: s,
      disabled: c,
      permissionsPending: l,
      hasIndependentEditorAccess: u,
      isCurrentSession: d,
      isWorkspace: f,
      sharingScope: p,
      sharingState: h,
      workspaceName: g,
      onStageChange: _,
    } = e,
    v = l !== void 0 && l,
    y = t(m),
    b = ee(),
    S = te(ge) && o,
    C;
  n[0] !== p || n[1] !== h
    ? ((C = ft({ sharingState: h, scope: p })), (n[0] = p), (n[1] = h), (n[2] = C))
    : (C = n[2]);
  let w = C,
    [ne, T] = (0, Cn.useState)(null),
    E = ne ?? w,
    D;
  n[3] !== u || n[4] !== p.accountUserId || n[5] !== p.resourceKind
    ? ((D = (e) =>
        e.owner.principal.principal_id !== p.accountUserId &&
        e.link_access === `workspace` &&
        e.role_id === pt[p.resourceKind].editor &&
        !u),
      (n[3] = u),
      (n[4] = p.accountUserId),
      (n[5] = p.resourceKind),
      (n[6] = D))
    : (D = n[6]);
  let ie = D,
    ae;
  n[7] !== r || n[8] !== S || n[9] !== s || n[10] !== f || n[11] !== ie || n[12] !== w || n[13] !== h
    ? ((ae = s && f && w != null && r?.includes(`viewer`) === !0 && !ie(h) && (S || w.mode === `workspace`)),
      (n[7] = r),
      (n[8] = S),
      (n[9] = s),
      (n[10] = f),
      (n[11] = ie),
      (n[12] = w),
      (n[13] = h),
      (n[14] = ae))
    : (ae = n[14]);
  let O = ae,
    se = r?.filter(xn),
    j;
  n[15] === p ? (j = n[16]) : ((j = K(p, `state`)), (n[15] = p), (n[16] = j));
  let M;
  n[17] !== r ||
  n[18] !== a ||
  n[19] !== O ||
  n[20] !== o ||
  n[21] !== d ||
  n[22] !== b ||
  n[23] !== ie ||
  n[24] !== y ||
  n[25] !== p ||
  n[26] !== h
    ? ((M = (e) => {
        let { next: t, observedState: n } = e;
        if (!d() || !O || (t.mode === `workspace` && (!o || !y.get(ge) || !r?.includes(t.role))))
          throw Error(`Library link access management is not permitted`);
        let i = b.getQueryData(K(p, `state`)) ?? h;
        if (ie(i)) throw Error(`Library workspace access requires the owner`);
        return a.updateLinkAccess({
          expectedOwner: n.owner.principal,
          linkAccess: t,
          expectedInvitationId:
            n.link_access === `workspace` ? (n.workspace_invitation_id ?? void 0) : void 0,
          expectedRoleId:
            t.mode === `collaborators_only` && n.link_access === `workspace` ? (n.role_id ?? void 0) : void 0,
        });
      }),
      (n[17] = r),
      (n[18] = a),
      (n[19] = O),
      (n[20] = o),
      (n[21] = d),
      (n[22] = b),
      (n[23] = ie),
      (n[24] = y),
      (n[25] = p),
      (n[26] = h),
      (n[27] = M))
    : (M = n[27]);
  let N, P;
  n[28] !== i || n[29] !== d || n[30] !== b || n[31] !== y || n[32] !== p
    ? ((N = async (e) => {
        let { next: t, observedState: n } = e;
        await b.cancelQueries({ queryKey: K(p, `state`) });
        let r = {
          action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS,
          operationId: crypto.randomUUID(),
          linkAccess:
            t.mode === `workspace`
              ? Ee.CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_WORKSPACE
              : Ee.CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_COLLABORATORS_ONLY,
          recipientKind:
            t.mode === `workspace` ? xe.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_WORKSPACE : void 0,
          role: tt(t.mode === `workspace` ? t.role : void 0),
          previousRole: tt(n.link_access === `workspace` ? it(n.role_id ?? ``, p.resourceKind) : void 0),
        };
        return (d() && Qe(y, i, { ...r, outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED }), r);
      }),
      (P = (e, t, n) => {
        d() &&
          (b.setQueryData(K(p, `state`), e),
          Qe(y, i, { ...n, outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED }),
          y
            .get(oe)
            .success(
              (0, wn.jsx)(k, {
                id: `librarySharing.link.saved`,
                defaultMessage: `Link access updated`,
                description: `Success toast after the Library backend confirms a change to a file or folder's workspace link access`,
              }),
            ),
          Et(b, p, { preserveState: !0 }));
      }),
      (n[28] = i),
      (n[29] = d),
      (n[30] = b),
      (n[31] = y),
      (n[32] = p),
      (n[33] = N),
      (n[34] = P))
    : ((N = n[33]), (P = n[34]));
  let F;
  n[35] !== i || n[36] !== d || n[37] !== _ || n[38] !== b || n[39] !== y || n[40] !== p
    ? ((F = async (e, t, n) => {
        let { observedState: r } = t;
        if (!d() || (await Et(b, p), !d())) return;
        let a = b.getQueryData(K(p, `state`)),
          o =
            (e instanceof re && e.responseStatus === 409) ||
            (a != null &&
              (a.owner.principal.principal_id !== r.owner.principal.principal_id ||
                a.link_access !== r.link_access ||
                a.workspace_invitation_id !== r.workspace_invitation_id ||
                a.role_id !== r.role_id));
        (o && (T(null), _(`link`, null)),
          Qe(y, i, {
            ...n,
            action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS,
            outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
            error: nt(e),
          }),
          o
            ? y
                .get(oe)
                .danger(
                  (0, wn.jsx)(k, {
                    id: `librarySharing.link.conflict`,
                    defaultMessage: `Link access changed. Choose your setting again before saving`,
                    description: `Error toast after another sharing change invalidates a staged Library link-access choice; the user must choose again against refreshed permissions`,
                  }),
                  { errorAnalytics: { toastId: `linkAccess.conflict` } },
                )
            : y
                .get(oe)
                .danger(
                  e instanceof re && e.errorCode === `library_manage_access_would_lose_permission`
                    ? (0, wn.jsx)(k, {
                        id: `librarySharing.link.wouldLoseAccess`,
                        defaultMessage: `You can’t make a change that reduces your own access. Ask the owner to make it.`,
                        description: `Error toast when a Library workspace link change would reduce the current editor's own access; the owner must make this change`,
                      })
                    : (0, wn.jsx)(k, {
                        id: `librarySharing.link.failed`,
                        defaultMessage: `Couldn't update link access. Try again`,
                        description: `Error toast when saving workspace link access for a Library file or folder fails; the prior access policy remains in place`,
                      }),
                  { errorAnalytics: { toastId: `linkAccess.onError` } },
                ));
      }),
      (n[35] = i),
      (n[36] = d),
      (n[37] = _),
      (n[38] = b),
      (n[39] = y),
      (n[40] = p),
      (n[41] = F))
    : (F = n[41]);
  let le;
  n[42] !== j || n[43] !== M || n[44] !== N || n[45] !== P || n[46] !== F
    ? ((le = {
        mutationKey: j,
        networkMode: `always`,
        retry: !1,
        mutationFn: M,
        onMutate: N,
        onSuccess: P,
        onError: F,
      }),
      (n[42] = j),
      (n[43] = M),
      (n[44] = N),
      (n[45] = P),
      (n[46] = F),
      (n[47] = le))
    : (le = n[47]);
  let { mutateAsync: ue, isPending: de } = ce(le),
    I;
  n[48] !== O || n[49] !== c || n[50] !== d || n[51] !== ue || n[52] !== _ || n[53] !== w || n[54] !== h
    ? ((I = function (e) {
        if (!d() || c || !O) return;
        let t =
          e.mode === w?.mode && (e.mode !== `workspace` || (w?.mode === `workspace` && e.role === w.role));
        (T(t ? null : e),
          _(
            `link`,
            t
              ? null
              : { kind: `link`, save: () => ue({ next: e, observedState: h }).then(() => (T(null), !0), bn) },
          ));
      }),
      (n[48] = O),
      (n[49] = c),
      (n[50] = d),
      (n[51] = ue),
      (n[52] = _),
      (n[53] = w),
      (n[54] = h),
      (n[55] = I))
    : (I = n[55]);
  let L = I,
    fe = ke,
    R;
  n[56] !== O ||
  n[57] !== S ||
  n[58] !== c ||
  n[59] !== de ||
  n[60] !== E ||
  n[61] !== v ||
  n[62] !== w ||
  n[63] !== p.accountId ||
  n[64] !== L ||
  n[65] !== g
    ? ((R =
        E == null
          ? (0, wn.jsx)(`span`, {
              className: `text-tertiary`,
              children: (0, wn.jsx)(k, {
                id: `librarySharing.link.unavailable`,
                defaultMessage: `Link access unavailable`,
                description: `Shown when the backend's Library link-access policy cannot safely be interpreted; this does not claim the file is private`,
              }),
            })
          : (0, wn.jsx)(Ye, {
              disabled: !O || c || v || de,
              options: [
                { value: `collaborators_only`, mode: `restricted`, icon: (0, wn.jsx)(A, {}) },
                { value: `workspace`, mode: `workspace`, icon: (0, wn.jsx)(x, {}), hidden: !S },
              ],
              workspaceName: g,
              value: E.mode,
              onChange:
                O || v
                  ? (e) => {
                      c ||
                        de ||
                        e === E.mode ||
                        (e === `collaborators_only`
                          ? L({ mode: e })
                          : S &&
                            L({
                              mode: e,
                              role: w?.mode === `workspace` ? w.role : `viewer`,
                              workspaceId: p.accountId,
                            }));
                    }
                  : void 0,
            })),
      (n[56] = O),
      (n[57] = S),
      (n[58] = c),
      (n[59] = de),
      (n[60] = E),
      (n[61] = v),
      (n[62] = w),
      (n[63] = p.accountId),
      (n[64] = L),
      (n[65] = g),
      (n[66] = R))
    : (R = n[66]);
  let z =
      E?.mode === `workspace` && O && S && se != null && se.length > 1
        ? (0, wn.jsx)(Le, {
            indicatorVariant: `checkmark`,
            disabled: c || de,
            options: se.map(yn),
            renderLabel: vn,
            value: E.role,
            variant: `inline`,
            onChange: (e) => {
              !c && !de && S && (e === `viewer` || e === `editor`) && e !== E.role && L({ ...E, role: e });
            },
          })
        : null,
    B;
  n[67] !== O || n[68] !== S || n[69] !== E || n[70] !== se
    ? ((B =
        E?.mode === `workspace` && (!O || !S || se == null || se.length < 2)
          ? (0, wn.jsx)(`span`, {
              className: `pe-2 text-sm text-tertiary`,
              children: (0, wn.jsx)(Ze, { permission: E.role }),
            })
          : null),
      (n[67] = O),
      (n[68] = S),
      (n[69] = E),
      (n[70] = se),
      (n[71] = B))
    : (B = n[71]);
  let pe;
  n[72] !== R || n[73] !== z || n[74] !== B
    ? ((pe = (0, wn.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 text-sm`,
        children: [R, z, B],
      })),
      (n[72] = R),
      (n[73] = z),
      (n[74] = B),
      (n[75] = pe))
    : (pe = n[75]);
  let me;
  return (
    n[76] !== fe || n[77] !== pe
      ? ((me = (0, wn.jsx)(fe, { kind: `link`, children: pe })), (n[76] = fe), (n[77] = pe), (n[78] = me))
      : (me = n[78]),
    me
  );
}
function vn(e) {
  return (0, wn.jsx)(Ze, { permission: e });
}
function yn(e) {
  return { value: e };
}
function bn() {
  return !1;
}
function xn(e) {
  return e === `viewer` || e === `editor`;
}
var Sn, Cn, wn;
function Tn() {
  return (Tn = e(() => {
    ((Sn = f()),
      z(),
      M(),
      u(),
      y(),
      (Cn = a()),
      v(),
      h(),
      _(),
      r(),
      qe(),
      H(),
      yt(),
      Xe(),
      p(),
      $e(),
      V(),
      Ot(),
      ot(),
      (wn = c()));
  }))();
}
function En(e) {
  let n = (0, Hn.c)(60),
    {
      account: r,
      analytics: i,
      api: a,
      canRequest: o,
      children: s,
      disabled: c,
      isCurrentSession: l,
      roster: u,
      renderDialog: f,
      sharingScope: p,
      sharingState: h,
    } = e,
    g = t(m),
    _ = ee(),
    v;
  n[0] !== i.shareSessionId || n[1] !== _ || n[2] !== p
    ? ((v = () => gt(_, p, `requester-access-requests`, i.shareSessionId)),
      (n[0] = i.shareSessionId),
      (n[1] = _),
      (n[2] = p),
      (n[3] = v))
    : (v = n[3]);
  let [y] = (0, Un.useState)(v),
    b = r.structure === `workspace`,
    x = b && o,
    S;
  n[4] === x ? (S = n[5]) : ((S = { enabled: x }), (n[4] = x), (n[5] = S));
  let { data: C, isError: te } = ie(fe, p.accountId, S),
    ne = Re(r, C, te),
    { canSearchMembers: re } = ne,
    T = o && (!b || re),
    E;
  n[6] === a
    ? (E = n[7])
    : ((E = (e) => {
        let { pageParam: t, signal: n } = e;
        return a.getRequesterAccessRequests({ cursor: t, signal: n });
      }),
      (n[6] = a),
      (n[7] = E));
  let {
      data: D,
      isError: ae,
      isFetching: O,
      isSuccess: A,
      hasNextPage: j,
      fetchNextPage: M,
      refetch: N,
    } = w({
      enabled: T,
      queryKey: [...K(p, `requester-access-requests`), `pages`, y],
      queryFn: E,
      initialPageParam: null,
      getNextPageParam: Vn,
      staleTime: de.THIRTY_SECONDS,
      retry: !1,
    }),
    P =
      T &&
      A &&
      !ae &&
      D?.pages.every((e) => e.requests.every((e) => G(e.resource_owner) === G(h.owner.principal)))
        ? D
        : void 0,
    F = P?.pages.flatMap(Bn),
    I;
  n[8] === P ? (I = n[9]) : ((I = P != null && P.pages.at(-1)?.next_cursor == null), (n[8] = P), (n[9] = I));
  let L = I,
    R = new Map(P?.pages.flatMap(Rn)),
    z = u?.owner.principal_id === h.owner.principal.principal_id,
    B =
      z && u?.collaborators.some(Ln)
        ? ut(
            F?.flatMap((e) =>
              e.recipients.some(
                (t) =>
                  t.principal_type === `user` &&
                  rt(e, t) === `satisfied` &&
                  !u.collaborators.some((e) => {
                    let { principal: n } = e;
                    return G(n) === G(t);
                  }),
              )
                ? [e.request_id]
                : [],
            ) ?? [],
          )
        : [],
    {
      data: pe,
      isError: me,
      isFetching: V,
      isSuccess: ge,
    } = d({
      enabled: T && B.length > 0,
      queryKey: K(p, `collaborators`, B),
      queryFn: (e) => {
        let { signal: t } = e;
        return a.getCollaborators({ signal: t, accessRequestIds: B });
      },
      staleTime: de.THIRTY_SECONDS,
      retry: !1,
    }),
    _e = z ? u : void 0;
  B.length > 0 && (_e = ge && !me && pe?.owner.principal_id === h.owner.principal.principal_id ? pe : void 0);
  let [H, ye] = (0, Un.useState)(`viewer`),
    be;
  n[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((be = []), (n[10] = be)) : (be = n[10]);
  let [U, xe] = (0, Un.useState)(be),
    [Ce, we] = (0, Un.useState)(``),
    Te;
  n[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((Te = []), (n[11] = Te)) : (Te = n[11]);
  let [Ee, De] = (0, Un.useState)(Te),
    [Oe, Ae] = (0, Un.useState)(In),
    je = [...(F ?? []), ...Ee],
    Me = je.flatMap((e) => (e.requested_role_id === pt[p.resourceKind][H] ? e.recipients : [])),
    Pe = new Set([
      G(h.owner.principal),
      G(h.viewer.principal),
      ...(_e?.collaborators.map(Fn) ?? []),
      ...Me.map(G),
    ]),
    Ie = new Set(
      [
        h.owner.email,
        h.viewer.email,
        ...(_e?.collaborators.map(Pn) ?? []),
        ...Me.map((e) => R.get(G(e))?.email),
        ...Oe[H],
      ].flatMap(Nn),
    ),
    Le = Be(U, Ie, Pe),
    W;
  n[12] === p ? (W = n[13]) : ((W = K(p, `state`)), (n[12] = p), (n[13] = W));
  let ze;
  n[14] !== i || n[15] !== l || n[16] !== g
    ? ((ze = (e) => {
        let { invitees: t, role: n } = e,
          r = crypto.randomUUID();
        return (
          l() &&
            Qe(g, i, {
              action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS,
              outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
              operationId: r,
              recipientCount: t.length,
              recipientKind: et(t.map(jn)),
              role: tt(n),
            }),
          r
        );
      }),
      (n[14] = i),
      (n[15] = l),
      (n[16] = g),
      (n[17] = ze))
    : (ze = n[17]);
  let Ve;
  n[18] !== i || n[19] !== l || n[20] !== _ || n[21] !== g || n[22] !== p
    ? ((Ve = async (e, t, n) => {
        let { invitees: r, role: a } = t;
        l() &&
          (De((t) => [...t.filter((t) => t.request_id !== e.request_id || t.created_at !== e.created_at), e]),
          Ae((e) => ({ ...e, [a]: new Set([...e[a], ...r.flatMap(An)]) })),
          xe((e) => e.filter((e) => !r.some((t) => t.id === e.id))),
          Qe(g, i, {
            action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS,
            outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED,
            operationId: n,
            recipientCount: r.length,
            recipientKind: et(r.map(kn)),
            succeededRecipientCount: r.length,
            role: tt(a),
          }),
          g
            .get(oe)
            .success(
              (0, Q.jsx)(k, {
                id: `librarySharing.request.sent`,
                defaultMessage: `Request sent to the owner`,
                description: `Success toast after a Library reader asks the owner to grant other people access`,
              }),
            ),
          await Et(_, p));
      }),
      (n[18] = i),
      (n[19] = l),
      (n[20] = _),
      (n[21] = g),
      (n[22] = p),
      (n[23] = Ve))
    : (Ve = n[23]);
  let He;
  n[24] !== i || n[25] !== l || n[26] !== g
    ? ((He = (e, t, n) => {
        let { invitees: r, role: a } = t;
        l() &&
          (Qe(g, i, {
            action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS,
            outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
            operationId: n,
            recipientCount: r.length,
            recipientKind: et(r.map(On)),
            failedRecipientCount: r.length,
            role: tt(a),
            error: nt(e),
          }),
          g
            .get(oe)
            .danger(
              (0, Q.jsx)(k, {
                id: `librarySharing.request.failed`,
                defaultMessage: `Couldn't send the access request. Try again`,
                description: `Error toast after submitting a Library access request fails; selected recipients remain available to retry`,
              }),
              { errorAnalytics: { toastId: `librarySharing.request.failed` } },
            ));
      }),
      (n[24] = i),
      (n[25] = l),
      (n[26] = g),
      (n[27] = He))
    : (He = n[27]);
  let { mutate: Ue, isPending: Ge } = ce({
      mutationKey: W,
      networkMode: `always`,
      retry: !1,
      mutationFn: (e) => {
        let { invitees: t, role: n } = e;
        if (!l() || !T) throw Error(`Library access requests are not permitted`);
        return a.createAccessRequest({ recipients: t.map(Mn), role: n });
      },
      onMutate: ze,
      onSuccess: Ve,
      onError: He,
    }),
    Ke = c || Ge || O || V || !T || !L || _e?.complete !== !0,
    qe = !Ke && U.length > 0 && U.every(Dn) && !Le,
    Je = new Map();
  for (let e of je)
    for (let t of e.recipients) {
      let n = ct({ request: e, recipient: t }),
        r = Je.get(n);
      (r == null || rt(r.request, t) === `pending`) && Je.set(n, { request: e, recipient: t });
    }
  let Ye = [...Je].filter((e) => {
      let [, t] = e,
        { recipient: n } = t;
      return !_e?.collaborators.some((e) => {
        let { principal: t } = e;
        return G(t) === G(n);
      });
    }),
    Xe = _e?.collaborators.filter((e) => {
      let { principal: t } = e;
      return (
        G(t) !== G(h.owner.principal) &&
        G(t) !== G(h.viewer.principal) &&
        !u?.collaborators.some((e) => G(e.principal) === G(t))
      );
    }),
    $e;
  n[28] !== qe || n[29] !== Ke || n[30] !== l || n[31] !== Ue || n[32] !== H || n[33] !== U
    ? (($e = () => {
        l() && !Ke && qe && (we(``), Ue({ invitees: U, role: H }));
      }),
      (n[28] = qe),
      (n[29] = Ke),
      (n[30] = l),
      (n[31] = Ue),
      (n[32] = H),
      (n[33] = U),
      (n[34] = $e))
    : ($e = n[34]);
  let at = T
      ? (0, Q.jsx)(ue, {
          type: `submit`,
          color: `primary`,
          size: `xl`,
          disabled: !qe,
          loading: Ge,
          children: (0, Q.jsx)(k, {
            id: `librarySharing.requestInvite`,
            defaultMessage: `Invite`,
            description: `Button asking a Library item's owner to grant selected people access; it does not grant permission immediately`,
          }),
        })
      : null,
    ot = T
      ? (0, Q.jsxs)(le, {
          className: `gap-4`,
          children: [
            (0, Q.jsx)(se, {
              variant: `privacyNotice`,
              title: (0, Q.jsx)(k, {
                id: `librarySharing.request.approvalRequired`,
                defaultMessage: `Owner must approve invites first`,
                description: `Banner explaining that invitations require the Library owner's approval`,
              }),
              content:
                it(h.viewer.role_id, p.resourceKind) === `viewer`
                  ? (0, Q.jsx)(k, {
                      id: `librarySharing.request.viewerRestriction`,
                      defaultMessage: `You’re a viewer and can’t manage access`,
                      description: `Explanation that a Library viewer cannot manage sharing permissions`,
                    })
                  : (0, Q.jsx)(k, {
                      id: `librarySharing.request.recipientRestriction`,
                      defaultMessage: `You don’t have permission to manage access`,
                      description: `Explanation that the current Library collaborator cannot manage sharing permissions`,
                    }),
            }),
            (0, Q.jsx)(We, {
              accountId: p.accountId,
              currentPrincipalId: p.accountUserId,
              currentEmail: h.viewer.email ?? void 0,
              ...ne,
              disabled: Ke,
              existingPrincipalKeys: Pe,
              existingEmails: Ie,
              query: Ce,
              onQueryChange: we,
              selected: U,
              resolveRecipient: a.resolveRecipient,
              onChange: xe,
              role: H,
              allowedRoles: [`viewer`, `editor`],
              onRoleChange: (e) => {
                e !== `commenter` && ye(e);
              },
            }),
            Le
              ? (0, Q.jsx)(`p`, {
                  className: `text-sm text-danger`,
                  role: `alert`,
                  children: (0, Q.jsx)(k, {
                    id: `librarySharing.invite.alreadyAdded`,
                    defaultMessage: `This person already has access or is selected`,
                    description: `Validation error when a Library invite includes an existing collaborator or duplicate recipient`,
                  }),
                })
              : null,
          ],
        })
      : null,
    st =
      (T && (ae || (B.length > 0 && (me || (ge && _e?.complete !== !0))))) || (b && o && te)
        ? (0, Q.jsx)(le, {
            children: (0, Q.jsx)(se, {
              type: `error`,
              role: `alert`,
              content: (0, Q.jsx)(k, {
                id: `librarySharing.access.incomplete`,
                defaultMessage: `Couldn't load all access details. Some sharing actions are unavailable`,
                description: `Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled`,
              }),
              primaryCtaText: (0, Q.jsx)(k, {
                id: `librarySharing.retry`,
                defaultMessage: `Retry`,
                description: `Button retrying a failed Library sharing data request`,
              }),
              onPrimaryCtaClick: () => {
                l() &&
                  (Et(_, p), b && _.invalidateQueries({ queryKey: [`accounts`, `settings`, p.accountId] }));
              },
            }),
          })
        : null,
    lt;
  n[35] !== c ||
  n[36] !== M ||
  n[37] !== P ||
  n[38] !== j ||
  n[39] !== L ||
  n[40] !== O ||
  n[41] !== l ||
  n[42] !== N
    ? ((lt =
        P != null && !L
          ? (0, Q.jsxs)(le, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-sm text-tertiary`,
                  children: (0, Q.jsx)(k, {
                    id: `librarySharing.request.historyIncomplete`,
                    defaultMessage: `Load the remaining requests before sending another request`,
                    description: `Explanation when additional Library access-request history must load to avoid requesting the same access twice`,
                  }),
                }),
                (0, Q.jsx)(ue, {
                  size: `xl`,
                  type: `button`,
                  color: `secondary`,
                  disabled: c || O,
                  loading: O,
                  onClick: () => {
                    l() && (j ? M() : N());
                  },
                  children: (0, Q.jsx)(k, {
                    id: `librarySharing.request.loadMoreHistory`,
                    defaultMessage: `Load requests`,
                    description: `Button loading the next page of the viewer's access-request history in a Library sharing dialog`,
                  }),
                }),
              ],
            })
          : null),
      (n[35] = c),
      (n[36] = M),
      (n[37] = P),
      (n[38] = j),
      (n[39] = L),
      (n[40] = O),
      (n[41] = l),
      (n[42] = N),
      (n[43] = lt))
    : (lt = n[43]);
  let dt = ke,
    ft =
      P == null
        ? null
        : Xe?.map((e) =>
            (0, Q.jsx)(
              he,
              {
                avatar: (0, Q.jsx)(Fe, {
                  size: `group`,
                  avatarUrl: e.avatar_url,
                  colorKey: e.principal.principal_id,
                  name: e.display_name ?? e.email ?? null,
                }),
                label:
                  e.display_name ??
                  e.email ??
                  (0, Q.jsx)(k, {
                    id: `librarySharing.collaboratorFallback`,
                    defaultMessage: `Collaborator`,
                    description: `Fallback display name when a Library collaborator has no returned name or email`,
                  }),
                secondaryLabel: e.email,
                trailingContent: (0, Q.jsx)(`span`, {
                  className: `text-sm text-tertiary`,
                  children: (0, Q.jsx)(Ze, { permission: it(e.role_id, p.resourceKind) }),
                }),
              },
              G(e.principal),
            ),
          ),
    mt =
      P == null
        ? null
        : Ye.map((e) => {
            let [t, n] = e,
              { request: r, recipient: i } = n,
              a = R.get(G(i));
            return (0, Q.jsx)(
              he,
              {
                avatar: (0, Q.jsx)(`span`, {
                  className: `opacity-50`,
                  children: (0, Q.jsx)(Fe, {
                    size: `group`,
                    avatarUrl: a?.avatar_url,
                    colorKey: i.principal_id,
                    name: a?.display_name ?? a?.email ?? null,
                  }),
                }),
                label: (0, Q.jsx)(`span`, {
                  className: `opacity-50`,
                  children:
                    a?.display_name ??
                    a?.email ??
                    (0, Q.jsx)(k, {
                      id: `librarySharing.requestedPerson`,
                      defaultMessage: `Requested person`,
                      description: `Fallback name for a person included in a Library access request`,
                    }),
                }),
                secondaryLabel:
                  a?.email == null
                    ? void 0
                    : (0, Q.jsx)(`span`, { className: `opacity-50`, children: a.email }),
                trailingContent: (0, Q.jsxs)(`div`, {
                  className: `flex shrink-0 items-center gap-3`,
                  children: [
                    (0, Q.jsx)(Ne, {
                      className: `whitespace-nowrap`,
                      children: (0, Q.jsx)(k, {
                        id: `librarySharing.request.status`,
                        defaultMessage: `{status, select, approved {Approved} declined {Declined} satisfied {Already had access} other {Pending}}`,
                        description: `Status of a Library access request for a recipient; status is approved, declined, satisfied (access already existed), or pending`,
                        values: { status: rt(r, i) },
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `pe-2 text-sm text-tertiary`,
                      children: (0, Q.jsx)(Ze, { permission: it(r.requested_role_id, p.resourceKind) }),
                    }),
                  ],
                }),
              },
              t,
            );
          }),
    ht;
  n[44] !== dt || n[45] !== s || n[46] !== ft || n[47] !== mt
    ? ((ht = (0, Q.jsxs)(dt, { children: [s, ft, mt] })),
      (n[44] = dt),
      (n[45] = s),
      (n[46] = ft),
      (n[47] = mt),
      (n[48] = ht))
    : (ht = n[48]);
  let _t;
  n[49] !== st || n[50] !== lt || n[51] !== ht
    ? ((_t = (0, Q.jsxs)(Q.Fragment, { children: [st, lt, ht] })),
      (n[49] = st),
      (n[50] = lt),
      (n[51] = ht),
      (n[52] = _t))
    : (_t = n[52]);
  let vt;
  return (
    n[53] !== Ge || n[54] !== f || n[55] !== $e || n[56] !== at || n[57] !== ot || n[58] !== _t
      ? ((vt = f({ isPending: Ge, onSubmit: $e, footer: at, headerContent: ot, content: _t })),
        (n[53] = Ge),
        (n[54] = f),
        (n[55] = $e),
        (n[56] = at),
        (n[57] = ot),
        (n[58] = _t),
        (n[59] = vt))
      : (vt = n[59]),
    vt
  );
}
function Dn(e) {
  return e.isValid;
}
function On(e) {
  let { recipient: t } = e;
  return t;
}
function kn(e) {
  let { recipient: t } = e;
  return t;
}
function An(e) {
  let { recipient: t } = e;
  return t.recipient_type === `email` ? [t.email.trim().toLowerCase()] : [];
}
function jn(e) {
  let { recipient: t } = e;
  return t;
}
function Mn(e) {
  let { recipient: t } = e;
  return t;
}
function Nn(e) {
  return e == null ? [] : [e.trim().toLowerCase()];
}
function Pn(e) {
  let { email: t } = e;
  return t;
}
function Fn(e) {
  let { principal: t } = e;
  return G(t);
}
function In() {
  return { viewer: new Set(), editor: new Set() };
}
function Ln(e) {
  let { principal: t } = e;
  return t.principal_type === `group`;
}
function Rn(e) {
  return e.principal_identities.map(zn);
}
function zn(e) {
  return [G(e.principal), e];
}
function Bn(e) {
  return e.requests;
}
function Vn(e, t, n, r) {
  return e.next_cursor != null && !r.includes(e.next_cursor) ? e.next_cursor : void 0;
}
var Hn, Un, Q;
function Wn() {
  return (Wn = e(() => {
    ((Hn = f()),
      z(),
      O(),
      D(),
      M(),
      T(),
      u(),
      y(),
      (Un = a()),
      v(),
      R(),
      Pe(),
      L(),
      P(),
      o(),
      _(),
      r(),
      Te(),
      H(),
      Ve(),
      Xe(),
      i(),
      $e(),
      Ot(),
      ot(),
      ht(),
      He(),
      W(),
      (Q = c()));
  }))();
}
function Gn(e) {
  let t = (0, tr.c)(39),
    {
      accountId: n,
      authenticatedUserId: r,
      fileName: i,
      libraryFileId: a,
      resourceKind: o,
      sharedDirectoryId: s,
      shareSessionId: c,
      showOrganizationSharing: l,
      onClose: u,
    } = e,
    d = l === void 0 || l,
    { data: f, isLoading: p, isError: m, refetch: ee } = pe(),
    h,
    g,
    _,
    v,
    y;
  if (
    t[0] !== n ||
    t[1] !== f?.accounts ||
    t[2] !== i ||
    t[3] !== m ||
    t[4] !== p ||
    t[5] !== a ||
    t[6] !== u ||
    t[7] !== ee ||
    t[8] !== o
  ) {
    y = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((g = f?.accounts?.find((e) => e.id === n)), g == null || m)) {
        let e;
        t[14] === i
          ? (e = t[15])
          : ((e = (0, $.jsx)(k, {
              id: `librarySharing.fileTitle`,
              defaultMessage: `Share {fileName}`,
              description: `Title of the Library file or folder sharing dialog; fileName is the item's title`,
              values: { fileName: i },
            })),
            (t[14] = i),
            (t[15] = e));
        let n;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(k, {
              id: `librarySharing.close`,
              defaultMessage: `Close`,
              description: `Button closing the Library sharing dialog`,
            })),
            (t[16] = n))
          : (n = t[16]);
        let r;
        t[17] === u
          ? (r = t[18])
          : ((r = (0, $.jsx)(ue, {
              size: `xl`,
              type: `button`,
              color: `secondary`,
              onClick: u,
              children: n,
            })),
            (t[17] = u),
            (t[18] = r));
        let a, o;
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, $.jsx)(k, {
              id: `librarySharing.sessionUnavailable`,
              defaultMessage: `Sharing is unavailable in this session. Reopen the dialog in the original account`,
              description: `Error when an open Library sharing dialog no longer matches the authenticated account, or required account information is unavailable; no file data is shown`,
            })),
            (o = (0, $.jsx)(k, {
              id: `librarySharing.retry`,
              defaultMessage: `Retry`,
              description: `Button retrying a failed Library sharing data request`,
            })),
            (t[19] = a),
            (t[20] = o))
          : ((a = t[19]), (o = t[20]));
        let s;
        t[21] === ee
          ? (s = t[22])
          : ((s = (0, $.jsx)(le, {
              children: (0, $.jsx)(se, {
                type: `error`,
                role: `alert`,
                content: a,
                primaryCtaText: o,
                onPrimaryCtaClick: () => void ee(),
              }),
            })),
            (t[21] = ee),
            (t[22] = s));
        let c;
        (t[23] !== p || t[24] !== e || t[25] !== r || t[26] !== s
          ? ((c = (0, $.jsx)(me, { isLoading: p, title: e, footer: r, children: s })),
            (t[23] = p),
            (t[24] = e),
            (t[25] = r),
            (t[26] = s),
            (t[27] = c))
          : (c = t[27]),
          (y = c));
        break bb0;
      }
      ((_ = {
        accountId: n,
        accountUserId: g.structure === `personal` ? g.account_user_id.split(`__`)[0] : g.account_user_id,
        libraryFileId: a,
        resourceKind: o,
      }),
        (h = Kn),
        (v = JSON.stringify(K(_, `state`))));
    }
    ((t[0] = n),
      (t[1] = f?.accounts),
      (t[2] = i),
      (t[3] = m),
      (t[4] = p),
      (t[5] = a),
      (t[6] = u),
      (t[7] = ee),
      (t[8] = o),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y));
  } else ((h = t[9]), (g = t[10]), (_ = t[11]), (v = t[12]), (y = t[13]));
  if (y !== Symbol.for(`react.early_return_sentinel`)) return y;
  let b;
  return (
    t[28] !== h ||
    t[29] !== g ||
    t[30] !== r ||
    t[31] !== i ||
    t[32] !== u ||
    t[33] !== c ||
    t[34] !== s ||
    t[35] !== _ ||
    t[36] !== d ||
    t[37] !== v
      ? ((b = (0, $.jsx)(
          h,
          {
            account: g,
            authenticatedUserId: r,
            fileName: i,
            sharingScope: _,
            sharedDirectoryId: s,
            shareSessionId: c,
            showOrganizationSharing: d,
            onClose: u,
          },
          v,
        )),
        (t[28] = h),
        (t[29] = g),
        (t[30] = r),
        (t[31] = i),
        (t[32] = u),
        (t[33] = c),
        (t[34] = s),
        (t[35] = _),
        (t[36] = d),
        (t[37] = v),
        (t[38] = b))
      : (b = t[38]),
    b
  );
}
function Kn(e) {
  let r = (0, tr.c)(263),
    {
      account: i,
      authenticatedUserId: a,
      fileName: o,
      sharingScope: s,
      sharedDirectoryId: c,
      shareSessionId: l,
      showOrganizationSharing: u,
      onClose: f,
    } = e,
    p = t(m),
    h = ee(),
    g;
  r[0] !== h || r[1] !== s
    ? ((g = () =>
        new Set(
          h
            .getQueryCache()
            .findAll({ queryKey: K(s) })
            .filter($n)
            .map(Qn),
        )),
      (r[0] = h),
      (r[1] = s),
      (r[2] = g))
    : (g = r[2]);
  let [_] = (0, nr.useState)(g),
    v = i.structure === `workspace`,
    y;
  r[3] === v ? (y = r[4]) : ((y = { enabled: v }), (r[3] = v), (r[4] = y));
  let { data: b, isError: x } = ie(fe, s.accountId, y),
    S;
  r[5] !== i || r[6] !== b || r[7] !== x
    ? ((S = Re(i, b, x)), (r[5] = i), (r[6] = b), (r[7] = x), (r[8] = S))
    : (S = r[8]);
  let { canSearchMembers: C } = S,
    w = te(we),
    re;
  r[9] !== a || r[10] !== p || r[11] !== s.accountId
    ? ((re = () => bt(p, s.accountId, a) && p.get(je)),
      (r[9] = a),
      (r[10] = p),
      (r[11] = s.accountId),
      (r[12] = re))
    : (re = r[12]);
  let T = re,
    E = (0, nr.useRef)(0),
    [D, ae] = (0, nr.useState)(0),
    O;
  r[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((O = new Map()), (r[13] = O)) : (O = r[13]);
  let [A, j] = (0, nr.useState)(O),
    M;
  r[14] === T
    ? (M = r[15])
    : ((M = () => {
        if (!T()) throw Error(`Library sharing session changed`);
      }),
      (r[14] = T),
      (r[15] = M));
  let P = vt({ scope: s, assertCurrentScope: M }),
    ce = mt(s, P).state,
    {
      data: de,
      isError: I,
      isFetching: L,
      isFetchedAfterMount: R,
      fetchStatus: z,
      refetch: B,
    } = d({
      ...ce,
      staleTime: ce.staleTime,
      queryFn: async (e) => {
        let { signal: t } = e;
        try {
          return await P.getSharingState(t);
        } catch (e) {
          let n = e;
          throw (!t.aborted && T() && ((E.current += 1), j(new Map())), n);
        }
      },
    }),
    pe;
  r[16] !== _ || r[17] !== de || r[18] !== I || r[19] !== z || r[20] !== R
    ? ((pe = (R || _.has(`state`)) && z !== `paused` && !I ? de : void 0),
      (r[16] = _),
      (r[17] = de),
      (r[18] = I),
      (r[19] = z),
      (r[20] = R),
      (r[21] = pe))
    : (pe = r[21]);
  let V = pe,
    ge = mt(s, P, V),
    H = V?.owner.principal.principal_id === s.accountUserId,
    be;
  r[22] !== H || r[23] !== w || r[24] !== s || r[25] !== V
    ? ((be =
        w &&
        (H ||
          st({ sharingState: V, scope: s, legacyOwner: void 0, managementAvailable: w }).canManageAccess)),
      (r[22] = H),
      (r[23] = w),
      (r[24] = s),
      (r[25] = V),
      (r[26] = be))
    : (be = r[26]);
  let U = be,
    xe = V != null && U,
    Ce;
  r[27] !== P || r[28] !== T || r[29] !== ge.shares.queryFn || r[30] !== V
    ? ((Ce =
        V == null
          ? ge.shares.queryFn
          : async (e) => {
              let { signal: t } = e;
              try {
                return await P.getShares(V.owner.principal, t);
              } catch (e) {
                let n = e;
                throw (!t.aborted && T() && ((E.current += 1), j(Xn)), n);
              }
            }),
      (r[27] = P),
      (r[28] = T),
      (r[29] = ge.shares.queryFn),
      (r[30] = V),
      (r[31] = Ce))
    : (Ce = r[31]);
  let Te;
  r[32] !== ge.shares || r[33] !== xe || r[34] !== Ce
    ? ((Te = { enabled: xe, ...ge.shares, staleTime: ge.shares.staleTime, queryFn: Ce }),
      (r[32] = ge.shares),
      (r[33] = xe),
      (r[34] = Ce),
      (r[35] = Te))
    : (Te = r[35]);
  let { data: Ee, isError: Oe, isFetching: Me, isFetchedAfterMount: Ne, fetchStatus: Pe } = d(Te),
    Le;
  r[36] !== _ || r[37] !== Ee || r[38] !== Oe || r[39] !== Pe || r[40] !== Ne || r[41] !== V?.owner
    ? ((Le =
        (Ne || _.has(`shares`)) &&
        Pe !== `paused` &&
        !Oe &&
        Ee?.owner.principal_id === V?.owner.principal.principal_id
          ? Ee
          : void 0),
      (r[36] = _),
      (r[37] = Ee),
      (r[38] = Oe),
      (r[39] = Pe),
      (r[40] = Ne),
      (r[41] = V?.owner),
      (r[42] = Le))
    : (Le = r[42]);
  let W = Le,
    Ve = W?.owner,
    He;
  r[43] !== w || r[44] !== s || r[45] !== V || r[46] !== Ve
    ? ((He = st({ sharingState: V, scope: s, legacyOwner: Ve, managementAvailable: w })),
      (r[43] = w),
      (r[44] = s),
      (r[45] = V),
      (r[46] = Ve),
      (r[47] = He))
    : (He = r[47]);
  let { canInvite: We, canManageAccess: Ge } = He,
    Ke;
  r[48] !== Ge || r[49] !== ge.effectiveAccess
    ? ((Ke = { enabled: Ge, ...ge.effectiveAccess, staleTime: ge.effectiveAccess.staleTime }),
      (r[48] = Ge),
      (r[49] = ge.effectiveAccess),
      (r[50] = Ke))
    : (Ke = r[50]);
  let { data: qe, isError: Je, error: Ye, isFetching: Xe, isFetchedAfterMount: $e, fetchStatus: et } = d(Ke),
    rt = V != null && !U,
    at;
  r[51] !== ge.collaborators || r[52] !== rt
    ? ((at = { enabled: rt, ...ge.collaborators, staleTime: ge.collaborators.staleTime }),
      (r[51] = ge.collaborators),
      (r[52] = rt),
      (r[53] = at))
    : (at = r[53]);
  let { data: ot, isError: ct, error: ut, isFetching: dt, isFetchedAfterMount: ft, fetchStatus: ht } = d(at),
    gt;
  r[54] !== _ || r[55] !== ot?.owner || r[56] !== ct || r[57] !== ht || r[58] !== ft || r[59] !== V?.owner
    ? ((gt =
        !ct &&
        (ft || _.has(`collaborators`)) &&
        ht !== `paused` &&
        ot?.owner.principal_id === V?.owner.principal.principal_id),
      (r[54] = _),
      (r[55] = ot?.owner),
      (r[56] = ct),
      (r[57] = ht),
      (r[58] = ft),
      (r[59] = V?.owner),
      (r[60] = gt))
    : (gt = r[60]);
  let _t = gt,
    yt = _t ? ot?.collaborators : void 0,
    xt = V?.viewer.role_id ?? ``,
    Ct;
  r[61] !== s.resourceKind || r[62] !== xt
    ? ((Ct = it(xt, s.resourceKind)), (r[61] = s.resourceKind), (r[62] = xt), (r[63] = Ct))
    : (Ct = r[63]);
  let wt = Ct,
    Et;
  r[64] !== s.accountUserId || r[65] !== s.resourceKind || r[66] !== wt || r[67] !== yt
    ? ((Et =
        wt === `viewer` &&
        yt?.some((e) => {
          let { principal: t, role_id: n } = e;
          return (
            t.principal_type === `user` &&
            t.principal_id === s.accountUserId &&
            it(n, s.resourceKind) === `commenter`
          );
        })
          ? `commenter`
          : wt),
      (r[64] = s.accountUserId),
      (r[65] = s.resourceKind),
      (r[66] = wt),
      (r[67] = yt),
      (r[68] = Et))
    : (Et = r[68]);
  let Dt = Et,
    Ot;
  r[69] !== qe || r[70] !== Je || r[71] !== et || r[72] !== $e || r[73] !== _ || r[74] !== V?.owner
    ? ((Ot =
        ($e || _.has(`effective-access`)) &&
        et !== `paused` &&
        !Je &&
        qe?.owner.principal_id === V?.owner.principal.principal_id
          ? qe
          : void 0),
      (r[69] = qe),
      (r[70] = Je),
      (r[71] = et),
      (r[72] = $e),
      (r[73] = _),
      (r[74] = V?.owner),
      (r[75] = Ot))
    : (Ot = r[75]);
  let At = Ot,
    [jt, Mt] = (0, nr.useState)(!1),
    [Nt, Pt] = (0, nr.useState)(!1),
    Ft;
  r[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ft = (e, t) => {
        j((n) => {
          let r = new Map(n);
          return (t == null ? r.delete(e) : r.set(e, t), r);
        });
      }),
      (r[76] = Ft))
    : (Ft = r[76]);
  let It = Ft,
    Lt;
  r[77] === s ? (Lt = r[78]) : ((Lt = K(s, `state`)), (r[77] = s), (r[78] = Lt));
  let q;
  r[79] === Lt ? (q = r[80]) : ((q = { mutationKey: Lt }), (r[79] = Lt), (r[80] = q));
  let Rt = N(q),
    zt = Ge && W != null && At != null && (Nt || (!L && !Me && !Xe)),
    Bt = zt && At?.complete === !0,
    Vt;
  r[81] !== s.accountUserId || r[82] !== At?.collaborators
    ? ((Vt = At?.collaborators.find((e) => {
        let { principal: t } = e;
        return t.principal_type === `user` && t.principal_id === s.accountUserId;
      })),
      (r[81] = s.accountUserId),
      (r[82] = At?.collaborators),
      (r[83] = Vt))
    : (Vt = r[83]);
  let J = Vt,
    Ht;
  r[84] !== J ||
  r[85] !== Xe ||
  r[86] !== Nt ||
  r[87] !== s.resourceKind ||
  r[88] !== V?.workspace_invitation_id ||
  r[89] !== At?.complete
    ? ((Ht =
        (Nt || !Xe) &&
        At?.complete === !0 &&
        J != null &&
        (J.direct_role_id === pt[s.resourceKind].editor ||
          [J.source, J.group_source].some(
            (e) =>
              e != null &&
              e.invitation_id !== V?.workspace_invitation_id &&
              (e.principal.principal_type === `user` || e.principal.principal_type === `group`) &&
              ((e.resource.resource_type === `library_file` && e.role_id === pt.file.editor) ||
                (e.resource.resource_type === `library_folder` && e.role_id === pt.folder.editor)),
          ))),
      (r[84] = J),
      (r[85] = Xe),
      (r[86] = Nt),
      (r[87] = s.resourceKind),
      (r[88] = V?.workspace_invitation_id),
      (r[89] = At?.complete),
      (r[90] = Ht))
    : (Ht = r[90]);
  let Wt = Ht,
    Gt = Rt > 0 || jt || Nt,
    Y = Gt || L || Me || Xe || dt,
    Kt;
  if (
    r[91] !== We ||
    r[92] !== U ||
    r[93] !== Bt ||
    r[94] !== A ||
    r[95] !== qe ||
    r[96] !== W ||
    r[97] !== V
  ) {
    let e = V == null ? void 0 : Ue(V, W, qe);
    ((Kt =
      !U ||
      [...A.values()].some(
        (t) =>
          t.kind === `invite` &&
          (!We ||
            !Bt ||
            e == null ||
            t.invitees.some(Yn) ||
            Be(t.invitees, e.existingEmails, e.existingPrincipalKeys)),
      )),
      (r[91] = We),
      (r[92] = U),
      (r[93] = Bt),
      (r[94] = A),
      (r[95] = qe),
      (r[96] = W),
      (r[97] = V),
      (r[98] = Kt));
  } else Kt = r[98];
  let qt = Kt,
    Jt;
  r[99] !== Y || r[100] !== A || r[101] !== qt || r[102] !== T
    ? ((Jt = function () {
        if (!T() || Y || qt || A.size === 0) return;
        Pt(!0);
        let e = E.current;
        rn(
          A,
          () => T() && E.current === e,
          (e, t) => {
            j((n) => {
              if (n.get(e) !== t) return n;
              let r = new Map(n);
              return (r.delete(e), r);
            });
          },
        ).finally(() => Pt(!1));
      }),
      (r[99] = Y),
      (r[100] = A),
      (r[101] = qt),
      (r[102] = T),
      (r[103] = Jt))
    : (Jt = r[103]);
  let Yt = Jt,
    Xt = V == null ? void 0 : H,
    Zt;
  r[104] !== l || r[105] !== s || r[106] !== Xt
    ? ((Zt = { sharingScope: s, shareSessionId: l, isOwner: Xt }),
      (r[104] = l),
      (r[105] = s),
      (r[106] = Xt),
      (r[107] = Zt))
    : (Zt = r[107]);
  let X = Zt,
    Qt = (0, nr.useRef)(null),
    $t = V != null,
    en;
  r[108] !== X || r[109] !== T || r[110] !== p
    ? ((en = () => {
        Qt.current == null &&
          T() &&
          ((Qt.current = X), Qe(p, X, { action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_OPENED }));
      }),
      (r[108] = X),
      (r[109] = T),
      (r[110] = p),
      (r[111] = en))
    : (en = r[111]);
  let tn = (0, nr.useEffectEvent)(en),
    Z;
  r[112] !== tn || r[113] !== $t
    ? ((Z = () => {
        $t && tn();
      }),
      (r[112] = tn),
      (r[113] = $t),
      (r[114] = Z))
    : (Z = r[114]);
  let nn;
  (r[115] === $t ? (nn = r[116]) : ((nn = [$t]), (r[115] = $t), (r[116] = nn)), (0, nr.useEffect)(Z, nn));
  let on, sn;
  (r[117] === p
    ? ((on = r[118]), (sn = r[119]))
    : ((on = () => () => {
        Qt.current != null &&
          Qe(p, Qt.current, { action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_CLOSED });
      }),
      (sn = [p]),
      (r[117] = p),
      (r[118] = on),
      (r[119] = sn)),
    (0, nr.useEffect)(on, sn));
  let cn;
  r[120] !== X ||
  r[121] !== Y ||
  r[122] !== T ||
  r[123] !== v ||
  r[124] !== p ||
  r[125] !== c ||
  r[126] !== s.accountId ||
  r[127] !== s.libraryFileId ||
  r[128] !== s.resourceKind ||
  r[129] !== V ||
  r[130] !== wt
    ? ((cn = async function () {
        if (!T() || V == null || Y) return;
        Mt(!0);
        let e = crypto.randomUUID(),
          t = tt(wt);
        Qe(p, X, {
          action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK,
          outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
          operationId: e,
          role: t,
        });
        let n = St({
          libraryFileId: s.libraryFileId,
          origin: Tt(),
          resourceKind: s.resourceKind,
          sharedDirectoryId: c,
          workspaceId: v ? s.accountId : void 0,
        });
        await Promise.resolve(ne.clipboard.writeText(n.href))
          .then(() => {
            T() &&
              (Qe(p, X, {
                action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK,
                outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED,
                operationId: e,
                role: t,
              }),
              _e(p));
          })
          .catch((n) => {
            T() &&
              (Qe(p, X, {
                action: ve.CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK,
                outcome: Se.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
                operationId: e,
                role: t,
                error: nt(n),
              }),
              p
                .get(oe)
                .danger(
                  (0, $.jsx)(k, {
                    id: `librarySharing.copy.failed`,
                    defaultMessage: `Couldn't copy the link. Try again`,
                    description: `Error toast when checking current Library access or writing the share link to the clipboard fails`,
                  }),
                  { errorAnalytics: { toastId: `librarySharing.copy.failed` } },
                ));
          })
          .finally(() => Mt(!1));
      }),
      (r[120] = X),
      (r[121] = Y),
      (r[122] = T),
      (r[123] = v),
      (r[124] = p),
      (r[125] = c),
      (r[126] = s.accountId),
      (r[127] = s.libraryFileId),
      (r[128] = s.resourceKind),
      (r[129] = V),
      (r[130] = wt),
      (r[131] = cn))
    : (cn = r[131]);
  let ln = cn,
    un;
  r[132] !== U ||
  r[133] !== qe?.complete ||
  r[134] !== Je ||
  r[135] !== Ye ||
  r[136] !== $e ||
  r[137] !== _t ||
  r[138] !== H ||
  r[139] !== ot?.complete ||
  r[140] !== ct ||
  r[141] !== ut ||
  r[142] !== ft ||
  r[143] !== Oe
    ? ((un = U
        ? Oe || (Je && !(H && er(Ye))) || ($e && qe?.complete === !1)
        : !er(ut) && (ct || (ft && (!_t || ot?.complete === !1)))),
      (r[132] = U),
      (r[133] = qe?.complete),
      (r[134] = Je),
      (r[135] = Ye),
      (r[136] = $e),
      (r[137] = _t),
      (r[138] = H),
      (r[139] = ot?.complete),
      (r[140] = ct),
      (r[141] = ut),
      (r[142] = ft),
      (r[143] = Oe),
      (r[144] = un))
    : (un = r[144]);
  let dn = un,
    fn = U ? (W == null && Me) || (At == null && Xe) : !_t && dt,
    pn;
  if (
    r[145] !== fn ||
    r[146] !== X ||
    r[147] !== P ||
    r[148] !== We ||
    r[149] !== U ||
    r[150] !== zt ||
    r[151] !== Bt ||
    r[152] !== Y ||
    r[153] !== T ||
    r[154] !== H ||
    r[155] !== W ||
    r[156] !== s ||
    r[157] !== V ||
    r[158] !== u ||
    r[159] !== Dt ||
    r[160] !== At ||
    r[161] !== yt
  ) {
    if (((pn = null), V != null)) {
      let e = V.owner.display_name ?? V.owner.email ?? null,
        t;
      r[163] !== V.owner.avatar_url || r[164] !== V.owner.principal.principal_id || r[165] !== e
        ? ((t = (0, $.jsx)(Fe, {
            size: `group`,
            avatarUrl: V.owner.avatar_url,
            colorKey: V.owner.principal.principal_id,
            name: e,
          })),
          (r[163] = V.owner.avatar_url),
          (r[164] = V.owner.principal.principal_id),
          (r[165] = e),
          (r[166] = t))
        : (t = r[166]);
      let n;
      r[167] !== V.owner.display_name || r[168] !== V.owner.email
        ? ((n =
            V.owner.display_name ??
            V.owner.email ??
            (0, $.jsx)(k, {
              id: `librarySharing.ownerFallback`,
              defaultMessage: `Owner`,
              description: `Fallback display name for the owner of a shared Library file or folder`,
            })),
          (r[167] = V.owner.display_name),
          (r[168] = V.owner.email),
          (r[169] = n))
        : (n = r[169]);
      let i;
      r[170] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsx)(`span`, {
            className: `pe-2 text-sm text-tertiary`,
            children: (0, $.jsx)(k, {
              id: `librarySharing.owner`,
              defaultMessage: `Owner`,
              description: `Role label for the owner of a file or folder in the Library sharing dialog`,
            }),
          })),
          (r[170] = i))
        : (i = r[170]);
      let a;
      r[171] !== V.owner.email || r[172] !== t || r[173] !== n
        ? ((a = (0, $.jsx)(he, { avatar: t, label: n, secondaryLabel: V.owner.email, trailingContent: i })),
          (r[171] = V.owner.email),
          (r[172] = t),
          (r[173] = n),
          (r[174] = a))
        : (a = r[174]);
      let o;
      r[175] !== fn || r[176] !== u
        ? ((o = fn && !u ? (0, $.jsx)(De, {}) : null), (r[175] = fn), (r[176] = u), (r[177] = o))
        : (o = r[177]);
      let c;
      r[178] !== fn ||
      r[179] !== X ||
      r[180] !== P ||
      r[181] !== We ||
      r[182] !== U ||
      r[183] !== zt ||
      r[184] !== Bt ||
      r[185] !== Y ||
      r[186] !== T ||
      r[187] !== W ||
      r[188] !== s ||
      r[189] !== At
        ? ((c =
            !fn && U && W != null
              ? (0, $.jsx)(Ut, {
                  api: P,
                  sharingScope: s,
                  analytics: X,
                  shares: W,
                  effectiveAccess: At,
                  allowedRoles: lt(W.allowed_roles, s.resourceKind),
                  canChange: We && Bt,
                  canRemove: zt,
                  canRemoveEffective: Bt,
                  disabled: Y,
                  isCurrentSession: T,
                  onStageChange: It,
                })
              : null),
          (r[178] = fn),
          (r[179] = X),
          (r[180] = P),
          (r[181] = We),
          (r[182] = U),
          (r[183] = zt),
          (r[184] = Bt),
          (r[185] = Y),
          (r[186] = T),
          (r[187] = W),
          (r[188] = s),
          (r[189] = At),
          (r[190] = c))
        : (c = r[190]);
      let l;
      (r[191] !== fn ||
      r[192] !== U ||
      r[193] !== H ||
      r[194] !== s.accountUserId ||
      r[195] !== s.resourceKind ||
      r[196] !== V.owner.principal.principal_id ||
      r[197] !== V.viewer ||
      r[198] !== Dt ||
      r[199] !== yt
        ? ((l =
            !fn && !U
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    H
                      ? null
                      : (0, $.jsx)(he, {
                          avatar: (0, $.jsx)(Fe, {
                            size: `group`,
                            avatarUrl: V.viewer.avatar_url,
                            colorKey: V.viewer.principal.principal_id,
                            name: V.viewer.display_name ?? V.viewer.email ?? null,
                          }),
                          label: (0, $.jsx)(k, {
                            id: `librarySharing.viewerSelf`,
                            defaultMessage: `You`,
                            description: `Label for the currently signed-in reader in the Library sharing dialog`,
                          }),
                          secondaryLabel: V.viewer.email,
                          trailingContent: (0, $.jsx)(`span`, {
                            className: `pe-2 text-sm text-tertiary`,
                            children: (0, $.jsx)(Ze, { permission: Dt }),
                          }),
                        }),
                    yt
                      ?.filter((e) => {
                        let { principal: t } = e;
                        return (
                          t.principal_id !== s.accountUserId &&
                          t.principal_id !== V.owner.principal.principal_id
                        );
                      })
                      .map((e) =>
                        (0, $.jsx)(
                          he,
                          {
                            avatar:
                              e.principal.principal_type === `group`
                                ? (0, $.jsx)(ze, { size: 28, Icon: F })
                                : (0, $.jsx)(Fe, {
                                    size: `group`,
                                    avatarUrl: e.avatar_url,
                                    colorKey: e.principal.principal_id,
                                    name: e.display_name ?? e.email ?? null,
                                  }),
                            label:
                              e.display_name ??
                              e.email ??
                              (0, $.jsx)(k, {
                                id: `librarySharing.collaboratorFallback`,
                                defaultMessage: `Collaborator`,
                                description: `Fallback display name when a Library collaborator has no returned name or email`,
                              }),
                            secondaryLabel: e.email,
                            trailingContent: (0, $.jsx)(`span`, {
                              className: `pe-2 text-sm text-tertiary`,
                              children: (0, $.jsx)(Ze, { permission: it(e.role_id, s.resourceKind) }),
                            }),
                          },
                          G(e.principal),
                        ),
                      ),
                  ],
                })
              : null),
          (r[191] = fn),
          (r[192] = U),
          (r[193] = H),
          (r[194] = s.accountUserId),
          (r[195] = s.resourceKind),
          (r[196] = V.owner.principal.principal_id),
          (r[197] = V.viewer),
          (r[198] = Dt),
          (r[199] = yt),
          (r[200] = l))
        : (l = r[200]),
        (pn = (0, $.jsxs)($.Fragment, { children: [a, o, c, l] })));
    }
    ((r[145] = fn),
      (r[146] = X),
      (r[147] = P),
      (r[148] = We),
      (r[149] = U),
      (r[150] = zt),
      (r[151] = Bt),
      (r[152] = Y),
      (r[153] = T),
      (r[154] = H),
      (r[155] = W),
      (r[156] = s),
      (r[157] = V),
      (r[158] = u),
      (r[159] = Dt),
      (r[160] = At),
      (r[161] = yt),
      (r[162] = pn));
  } else pn = r[162];
  let mn = V == null || Y,
    hn;
  r[201] === ln
    ? (hn = r[202])
    : ((hn = () => {
        ln();
      }),
      (r[201] = ln),
      (r[202] = hn));
  let gn, vn;
  r[203] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gn = (0, $.jsx)(n, {})),
      (vn = (0, $.jsx)(k, {
        id: `librarySharing.copy`,
        defaultMessage: `Copy link`,
        description: `Button copying the canonical ChatGPT Library sharing link to this file or folder`,
      })),
      (r[203] = gn),
      (r[204] = vn))
    : ((gn = r[203]), (vn = r[204]));
  let yn;
  r[205] !== jt || r[206] !== mn || r[207] !== hn
    ? ((yn = (0, $.jsxs)(ue, {
        size: `xl`,
        type: `button`,
        color: `secondary`,
        variant: `outline`,
        disabled: mn,
        loading: jt,
        onClick: hn,
        children: [gn, vn],
      })),
      (r[205] = jt),
      (r[206] = mn),
      (r[207] = hn),
      (r[208] = yn))
    : (yn = r[208]);
  let bn = yn,
    xn;
  r[209] !== pn ||
  r[210] !== fn ||
  r[211] !== i ||
  r[212] !== X ||
  r[213] !== P ||
  r[214] !== We ||
  r[215] !== Ge ||
  r[216] !== U ||
  r[217] !== Bt ||
  r[218] !== C ||
  r[219] !== bn ||
  r[220] !== Y ||
  r[221] !== A ||
  r[222] !== D ||
  r[223] !== qt ||
  r[224] !== Xe ||
  r[225] !== o ||
  r[226] !== dn ||
  r[227] !== Wt ||
  r[228] !== Gt ||
  r[229] !== T ||
  r[230] !== H ||
  r[231] !== v ||
  r[232] !== w ||
  r[233] !== f ||
  r[234] !== h ||
  r[235] !== B ||
  r[236] !== Yt ||
  r[237] !== Nt ||
  r[238] !== W ||
  r[239] !== Me ||
  r[240] !== s ||
  r[241] !== V ||
  r[242] !== u ||
  r[243] !== I ||
  r[244] !== L ||
  r[245] !== At
    ? ((xn = (e) =>
        (0, $.jsx)(me, {
          isLoading: !I && V == null,
          title:
            !U && !H && (!v || C) && V?.capabilities?.can_request_access === !0
              ? (0, $.jsx)(k, {
                  id: `librarySharing.requestTitle`,
                  defaultMessage: `Request to share {fileName}`,
                  description: `Title for a collaborator requesting the owner's approval to share a Library item`,
                  values: { fileName: o },
                })
              : (0, $.jsx)(k, {
                  id: `librarySharing.fileTitle`,
                  defaultMessage: `Share {fileName}`,
                  description: `Title of the Library file or folder sharing dialog; fileName is the item's title`,
                  values: { fileName: o },
                }),
          headerContent:
            e == null
              ? V != null &&
                We &&
                (0, $.jsx)(
                  an,
                  {
                    account: i,
                    api: P,
                    sharingScope: s,
                    sharingState: V,
                    shares: W,
                    effectiveAccess: At,
                    analytics: X,
                    canInvite: Bt,
                    disabled: Y,
                    isCurrentSession: T,
                    onStageChange: It,
                  },
                  D,
                )
              : e.headerContent,
          isDismissalDisabled: Gt || e?.isPending === !0,
          onSubmit: U ? Yt : e?.onSubmit,
          footer:
            V != null && !U && !H && A.size === 0
              ? (0, $.jsxs)($.Fragment, {
                  children: [(0, $.jsx)(`div`, { className: `me-auto`, children: bn }), e?.footer],
                })
              : (0, $.jsx)(Ie, {
                  onCancel: () => {
                    (j(new Map()), ae(Jn));
                  },
                  onClose: f,
                  isBusy: Gt,
                  disabled: Y || qt,
                  hasPendingAccessChange: A.size > 0,
                  hasPendingInvitees: [...A.values()].some(qn),
                  isSaving: Nt,
                  copyLink: bn,
                }),
          children:
            V == null
              ? (0, $.jsx)(le, {
                  className: I ? void 0 : `flex-1 justify-center`,
                  children: (0, $.jsx)(Ae, {
                    isLoading: !I,
                    onRetry: () => {
                      B();
                    },
                  }),
                })
              : (0, $.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col`,
                    children: [
                      dn
                        ? (0, $.jsx)(le, {
                            children: (0, $.jsx)(se, {
                              type: `error`,
                              role: `alert`,
                              content: (0, $.jsx)(k, {
                                id: `librarySharing.access.incomplete`,
                                defaultMessage: `Couldn't load all access details. Some sharing actions are unavailable`,
                                description: `Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled`,
                              }),
                              primaryCtaText: (0, $.jsx)(k, {
                                id: `librarySharing.retry`,
                                defaultMessage: `Retry`,
                                description: `Button retrying a failed Library sharing data request`,
                              }),
                              onPrimaryCtaClick: () => {
                                h.invalidateQueries({ queryKey: K(s) });
                              },
                            }),
                          })
                        : null,
                      u
                        ? (0, $.jsx)($.Fragment, {
                            children: fn
                              ? (0, $.jsx)(ke, { kind: `link`, children: (0, $.jsx)(ye, {}) })
                              : (0, $.jsx)(_n, {
                                  allowedRoles: W == null ? void 0 : lt(W.allowed_roles, s.resourceKind),
                                  analytics: X,
                                  api: P,
                                  canInitiateSharing: We,
                                  canManage: Ge,
                                  disabled: Y,
                                  permissionsPending: U && (Me || Xe),
                                  hasIndependentEditorAccess: Wt,
                                  isCurrentSession: T,
                                  isWorkspace: v,
                                  sharingScope: s,
                                  sharingState: V,
                                  workspaceName: i.name?.trim() || void 0,
                                  onStageChange: It,
                                }),
                          })
                        : null,
                      e == null
                        ? (0, $.jsx)(ke, {
                            children: (0, $.jsx)(`div`, { className: `flex flex-col gap-3`, children: pn }),
                          })
                        : e.content,
                      H && w
                        ? (0, $.jsx)(kt, {
                            analytics: X,
                            api: P,
                            canApprove: We && Bt,
                            canDecide: !L && V.capabilities?.can_manage_access_requests === !0,
                            disabled: Y,
                            isCurrentSession: T,
                            sharingScope: s,
                          })
                        : null,
                    ],
                  },
                  D,
                ),
        })),
      (r[209] = pn),
      (r[210] = fn),
      (r[211] = i),
      (r[212] = X),
      (r[213] = P),
      (r[214] = We),
      (r[215] = Ge),
      (r[216] = U),
      (r[217] = Bt),
      (r[218] = C),
      (r[219] = bn),
      (r[220] = Y),
      (r[221] = A),
      (r[222] = D),
      (r[223] = qt),
      (r[224] = Xe),
      (r[225] = o),
      (r[226] = dn),
      (r[227] = Wt),
      (r[228] = Gt),
      (r[229] = T),
      (r[230] = H),
      (r[231] = v),
      (r[232] = w),
      (r[233] = f),
      (r[234] = h),
      (r[235] = B),
      (r[236] = Yt),
      (r[237] = Nt),
      (r[238] = W),
      (r[239] = Me),
      (r[240] = s),
      (r[241] = V),
      (r[242] = u),
      (r[243] = I),
      (r[244] = L),
      (r[245] = At),
      (r[246] = xn))
    : (xn = r[246]);
  let Sn = xn,
    Cn;
  return (
    r[247] !== pn ||
    r[248] !== i ||
    r[249] !== X ||
    r[250] !== P ||
    r[251] !== U ||
    r[252] !== Y ||
    r[253] !== D ||
    r[254] !== _t ||
    r[255] !== T ||
    r[256] !== H ||
    r[257] !== Sn ||
    r[258] !== ot ||
    r[259] !== s ||
    r[260] !== V ||
    r[261] !== L
      ? ((Cn =
          V != null && !U && !H
            ? (0, $.jsx)(
                En,
                {
                  account: i,
                  analytics: X,
                  api: P,
                  canRequest: !L && V.capabilities?.can_request_access === !0,
                  disabled: Y,
                  isCurrentSession: T,
                  renderDialog: Sn,
                  roster: _t ? ot : void 0,
                  sharingScope: s,
                  sharingState: V,
                  children: pn,
                },
                D,
              )
            : Sn(null)),
        (r[247] = pn),
        (r[248] = i),
        (r[249] = X),
        (r[250] = P),
        (r[251] = U),
        (r[252] = Y),
        (r[253] = D),
        (r[254] = _t),
        (r[255] = T),
        (r[256] = H),
        (r[257] = Sn),
        (r[258] = ot),
        (r[259] = s),
        (r[260] = V),
        (r[261] = L),
        (r[262] = Cn))
      : (Cn = r[262]),
    Cn
  );
}
function qn(e) {
  return e.kind === `invite`;
}
function Jn(e) {
  return e + 1;
}
function Yn(e) {
  return !e.isValid;
}
function Xn(e) {
  return new Map([...e].filter(Zn));
}
function Zn(e) {
  let [, t] = e;
  return t.kind !== `collaborator`;
}
function Qn(e) {
  return e.queryKey.at(-1);
}
function $n(e) {
  return e.state.status === `success` && !e.isStaleByTime(de.THIRTY_SECONDS);
}
function er(e) {
  return (
    e instanceof re &&
    e.responseStatus === 404 &&
    e.errorKind !== `network` &&
    e.errorCode == null &&
    e.diagnosticError instanceof l &&
    e.diagnosticError.detail === `Not Found`
  );
}
var tr, nr, $;
function rr() {
  return (rr = e(() => {
    ((tr = f()),
      z(),
      Ge(),
      O(),
      C(),
      T(),
      u(),
      y(),
      (nr = a()),
      v(),
      R(),
      Pe(),
      g(),
      Me(),
      P(),
      o(),
      h(),
      _(),
      S(),
      r(),
      Oe(),
      Te(),
      H(),
      Ke(),
      I(),
      Ce(),
      Ve(),
      Xe(),
      i(),
      p(),
      Rt(),
      $e(),
      _t(),
      V(),
      nn(),
      gn(),
      Tn(),
      ot(),
      ht(),
      W(),
      Wn(),
      xt(),
      Ct(),
      wt(),
      ($ = c()));
  }))();
}
rr();
export { Gn as LibraryShareDialogBody };
//# sourceMappingURL=dialog-2709032b9d0e.js.map
