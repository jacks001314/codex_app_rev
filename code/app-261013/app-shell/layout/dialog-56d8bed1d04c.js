import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Dt as t,
  BV as n,
  Cot as r,
  Fat as i,
  GE as a,
  IDt as o,
  Iot as s,
  Ixt as c,
  JDt as l,
  Kat as u,
  Lot as d,
  Mot as f,
  NV as p,
  Not as m,
  Pat as h,
  Pxt as g,
  QDt as _,
  Rot as v,
  SG as y,
  TJ as b,
  Trt as x,
  VDt as S,
  Vxt as C,
  WE as w,
  Xot as T,
  Yot as E,
  fO as D,
  hot as ee,
  hrt as O,
  jDt as k,
  lO as A,
  lV as j,
  lot as M,
  mW as N,
  nst as te,
  qat as ne,
  rW as re,
  tst as P,
  vrt as F,
  vzt as I,
  wot as L,
  xMt as R,
  xrt as z,
  yAt as B,
  yzt as V,
  zot as ie,
  zxt as ae,
} from "./app-shared-bbfeca5e5737.js";
import {
  BFn as oe,
  Bmt as H,
  CV as U,
  DV as W,
  EV as se,
  Fin as ce,
  Gmt as le,
  IV as G,
  Iin as ue,
  Jmt as K,
  LFn as de,
  LV as fe,
  MRt as pe,
  NRt as me,
  OV as he,
  SV as ge,
  VFn as q,
  Wmt as _e,
  bV as ve,
  dH as ye,
  dMr as be,
  eIn as xe,
  fMr as Se,
  kV as Ce,
  uH as we,
  vV as Te,
  wV as Ee,
  xV as De,
  yV as Oe,
  zFn as ke,
} from "./app-initial-5851df3f6cb1.js";
import { n as Ae, t as je } from "./profile-avatar-90effac925f0.js";
import { t as Me } from "./modal-footer-8c17ec58d94e.js";
import { t as Ne } from "./modal-permission-dropdown-75a4787ca1b8.js";
import {
  a as J,
  c as Pe,
  d as Fe,
  i as Ie,
  l as Le,
  n as Re,
  r as ze,
  t as Be,
  u as Ve,
} from "./recipient-picker-caea7e148b2f.js";
import { a as He, n as Ue, r as We, t as Ge } from "./access-dropdown-62f61b3449da.js";
import { n as Ke, t as qe } from "./role-label-47a44c95e79a.js";
import { a as Je, i as Ye, n as Xe, r as Ze, t as Qe } from "./analytics-b9b7c5cb850a.js";
import {
  a as $e,
  c as et,
  d as tt,
  f as nt,
  g as rt,
  h as Y,
  i as it,
  l as at,
  n as ot,
  o as st,
  r as ct,
  s as lt,
  t as ut,
} from "./model-a4d407e1a4c5.js";
import { n as dt, r as ft, t as pt } from "./queries-afbbc186d4e0.js";
import { n as mt, t as ht } from "./api-f6a4de72621c.js";
import { t as gt } from "./permission-dropdown-e25fe01e48c3.js";
import { n as _t, t as vt } from "./session-d332d20f19aa.js";
import { n as yt, r as bt } from "./share-link-8f1224ca9450.js";
import { n as xt, t as St } from "./share-link-origin-fda3b8a9dfd2.js";
async function Ct(
  e,
  t,
  {
    includeShares: n = !1,
    preserveLibraryBrowse: r = !1,
    preserveEffectiveAccess: i = !1,
    preserveState: a = !1,
  } = {},
) {
  let o = at(t, `state`).slice(0, t.resourceKind === `folder` ? 3 : 5),
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
async function wt(e, t) {
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
function Tt() {
  return (Tt = e(() => {
    nt();
  }))();
}
function Et(e) {
  let t = (0, Nt.c)(76),
    {
      analytics: i,
      api: a,
      canApprove: s,
      canDecide: l,
      disabled: u,
      isCurrentSession: f,
      sharingScope: g,
    } = e,
    _ = c(r),
    v = S(),
    y = te(),
    b;
  t[0] !== i.shareSessionId || t[1] !== y || t[2] !== g
    ? ((b = () => pt(y, g, `owner-access-requests`, i.shareSessionId)),
      (t[0] = i.shareSessionId),
      (t[1] = y),
      (t[2] = g),
      (t[3] = b))
    : (b = t[3]);
  let [x] = (0, Pt.useState)(b),
    C = (0, Pt.useId)(),
    [T, E] = (0, Pt.useState)(!1),
    [D, O] = (0, Pt.useState)(Mt),
    k;
  t[4] !== x || t[5] !== g
    ? ((k = [...at(g, `owner-access-requests`), `pages`, x]), (t[4] = x), (t[5] = g), (t[6] = k))
    : (k = t[6]);
  let j;
  t[7] === a
    ? (j = t[8])
    : ((j = (e) => {
        let { pageParam: t, signal: n } = e;
        return a.getOwnerAccessRequests({ cursor: t, signal: n });
      }),
      (t[7] = a),
      (t[8] = j));
  let M;
  t[9] !== l || t[10] !== k || t[11] !== j
    ? ((M = {
        enabled: l,
        queryKey: k,
        queryFn: j,
        initialPageParam: null,
        getNextPageParam: jt,
        retry: !1,
        staleTime: h.THIRTY_SECONDS,
      }),
      (t[9] = l),
      (t[10] = k),
      (t[11] = j),
      (t[12] = M))
    : (M = t[12]);
  let {
      data: N,
      isError: ne,
      isFetching: re,
      isSuccess: P,
      hasNextPage: F,
      fetchNextPage: I,
      refetch: L,
    } = m(M),
    R;
  t[13] !== i || t[14] !== _ || t[15] !== g
    ? ((R = (e, t, n, r) => {
        let { decision: a, row: o } = e;
        Je(_, i, {
          action:
            a === `approve`
              ? de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_APPROVE_ACCESS_REQUEST
              : de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_DECLINE_ACCESS_REQUEST,
          outcome: t,
          operationId: n,
          error: Qe(r),
          recipientKind:
            o.recipient.principal_type === `group`
              ? q.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP
              : q.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER,
          recipientCount: 1,
          role: Ze(et(o.request.requested_role_id, g.resourceKind)),
        });
      }),
      (t[13] = i),
      (t[14] = _),
      (t[15] = g),
      (t[16] = R))
    : (R = t[16]);
  let z = R,
    V;
  t[17] === g ? (V = t[18]) : ((V = at(g, `state`)), (t[17] = g), (t[18] = V));
  let ie;
  t[19] !== a || t[20] !== s || t[21] !== l || t[22] !== f
    ? ((ie = (e) => {
        let { decision: t, row: n } = e;
        if (!f() || !l || (t === `approve` && !s))
          throw Error(`Library access-request decisions are not permitted`);
        return a.decideAccessRequestGroup({ decision: t, recipient: n.recipient, requests: n.requests });
      }),
      (t[19] = a),
      (t[20] = s),
      (t[21] = l),
      (t[22] = f),
      (t[23] = ie))
    : (ie = t[23]);
  let ae;
  t[24] !== f || t[25] !== z
    ? ((ae = (e) => {
        let t = crypto.randomUUID();
        return (f() && z(e, oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED, t), t);
      }),
      (t[24] = f),
      (t[25] = z),
      (t[26] = ae))
    : (ae = t[26]);
  let H, U;
  t[27] !== f || t[28] !== z || t[29] !== _
    ? ((U = (e, t, n) => {
        let { confirmedRequests: r, remainingRequests: i } = e;
        if (!f()) return;
        let a = oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED;
        (i.length > 0 &&
          (a =
            r.length === 0
              ? oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED
              : oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL),
          z(t, a, n),
          O((e) => new Set([...e, ...r.map((e) => it({ request: e, recipient: t.row.recipient }))])),
          i.length > 0 &&
            (r.length > 0
              ? _.get(ee).warning(
                  (0, X.jsx)(o, {
                    id: `librarySharing.requests.partial`,
                    defaultMessage: `Some requests were updated. Review the remaining requests and try again`,
                    description: `Toast after only some duplicate Library access requests for one recipient were confirmed; unconfirmed requests stay visible`,
                  }),
                )
              : _.get(ee).danger(
                  (0, X.jsx)(o, {
                    id: `librarySharing.requests.updateError`,
                    defaultMessage: `Couldn't update this request. Try again`,
                    description: `Error toast when approving or declining a Library access request fails`,
                  }),
                  { errorAnalytics: { toastId: `librarySharing.requests.updateError` } },
                )));
      }),
      (H = (e, t, n) => {
        f() &&
          (z(t, oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED, n, e),
          _.get(ee).danger(
            (0, X.jsx)(o, {
              id: `librarySharing.requests.updateError`,
              defaultMessage: `Couldn't update this request. Try again`,
              description: `Error toast when approving or declining a Library access request fails`,
            }),
            { errorAnalytics: { toastId: `librarySharing.requests.updateError` } },
          ));
      }),
      (t[27] = f),
      (t[28] = z),
      (t[29] = _),
      (t[30] = H),
      (t[31] = U))
    : ((H = t[30]), (U = t[31]));
  let W;
  t[32] !== f || t[33] !== y || t[34] !== g
    ? ((W = () => {
        f() && Ct(y, g, { includeShares: !0 });
      }),
      (t[32] = f),
      (t[33] = y),
      (t[34] = g),
      (t[35] = W))
    : (W = t[35]);
  let ce;
  t[36] !== H || t[37] !== W || t[38] !== V || t[39] !== ie || t[40] !== ae || t[41] !== U
    ? ((ce = {
        mutationKey: V,
        networkMode: `always`,
        retry: !1,
        mutationFn: ie,
        onMutate: ae,
        onSuccess: U,
        onError: H,
        onSettled: W,
      }),
      (t[36] = H),
      (t[37] = W),
      (t[38] = V),
      (t[39] = ie),
      (t[40] = ae),
      (t[41] = U),
      (t[42] = ce))
    : (ce = t[42]);
  let { mutate: le, isPending: G } = d(ce);
  if (!l) return null;
  if (ne) {
    let e;
    t[43] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(o, {
          id: `librarySharing.requests.loadError`,
          defaultMessage: `Couldn't load requests to share`,
          description: `Error shown in the Library share dialog when the owner's pending access requests fail to load`,
        })),
        (t[43] = e))
      : (e = t[43]);
    let n;
    t[44] !== f || t[45] !== L
      ? ((n = () => {
          f() && L();
        }),
        (t[44] = f),
        (t[45] = L),
        (t[46] = n))
      : (n = t[46]);
    let r;
    t[47] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, X.jsx)(o, {
          id: `librarySharing.requests.retry`,
          defaultMessage: `Retry`,
          description: `Button to retry loading pending Library access requests`,
        })),
        (t[47] = r))
      : (r = t[47]);
    let i;
    return (
      t[48] !== re || t[49] !== n
        ? ((i = (0, X.jsx)(A, {
            children: (0, X.jsx)(w, {
              type: `error`,
              role: `alert`,
              content: e,
              isPrimaryCtaDisabled: re,
              onPrimaryCtaClick: n,
              primaryCtaText: r,
            }),
          })),
          (t[48] = re),
          (t[49] = n),
          (t[50] = i))
        : (i = t[50]),
      i
    );
  }
  if (!P) return null;
  let ue, K;
  if (
    t[51] !== s ||
    t[52] !== l ||
    t[53] !== N?.pages ||
    t[54] !== u ||
    t[55] !== T ||
    t[56] !== I ||
    t[57] !== F ||
    t[58] !== v ||
    t[59] !== f ||
    t[60] !== re ||
    t[61] !== G ||
    t[62] !== le ||
    t[63] !== L ||
    t[64] !== C ||
    t[65] !== D ||
    t[66] !== g
  ) {
    K = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[69] === D
        ? (e = t[70])
        : ((e = (e) => {
            let [t, ...n] = e.requests.filter((t) => !D.has(it({ request: t, recipient: e.recipient })));
            return t == null ? [] : [{ ...e, request: t, requests: [t, ...n] }];
          }),
          (t[69] = D),
          (t[70] = e));
      let r = tt(N?.pages.flatMap(At) ?? []).flatMap(e),
        i = N?.pages.at(-1)?.next_cursor != null;
      if (r.length === 0 && !i) {
        K = null;
        break bb0;
      }
      let a;
      t[71] === N?.pages
        ? (a = t[72])
        : ((a = new Map(N?.pages.flatMap(Ot))), (t[71] = N?.pages), (t[72] = a));
      let c = a,
        d,
        m;
      (t[73] === T
        ? ((d = t[74]), (m = t[75]))
        : ((d = () => E(!T)),
          (m = T ? (0, X.jsx)(p, {}) : (0, X.jsx)(n, {})),
          (t[73] = T),
          (t[74] = d),
          (t[75] = m)),
        (ue = (0, X.jsxs)(A, {
          children: [
            (0, X.jsxs)(B, {
              "aria-controls": C,
              "aria-expanded": T,
              color: `secondary`,
              variant: `ghost`,
              size: `sm`,
              onClick: d,
              children: [
                m,
                (0, X.jsx)(o, {
                  id: `librarySharing.requests.heading`,
                  defaultMessage: `Requests to share ({count, number})`,
                  description: `Expandable section in the Library share dialog for an owner to approve or decline requested access; count is the number of pending recipient-and-role groups`,
                  values: { count: r.length },
                }),
              ],
            }),
            T
              ? (0, X.jsxs)(`div`, {
                  id: C,
                  className: `flex flex-col gap-3`,
                  children: [
                    r.map((e) => {
                      let t = c.get(Y(e.recipient)),
                        n = c.get(Y(e.request.requester)),
                        r = t?.display_name ?? t?.email,
                        i = n?.display_name ?? n?.email,
                        a = new Set(e.requests.map(Dt)).size - 1,
                        d = et(e.request.requested_role_id, g.resourceKind),
                        p;
                      return (
                        (p =
                          n?.display_name != null && n.email != null
                            ? (0, X.jsx)(o, {
                                id: `librarySharing.requests.requestedByWithEmail`,
                                defaultMessage: `Requested by {name} ({email}){otherCount, plural, =0 {} one { and # other} other { and # others}}`,
                                description: `Supporting text under a Library access-request recipient; name and email identify the most recent requester and otherCount counts other people requesting the same role for this recipient`,
                                values: { name: n.display_name, email: n.email, otherCount: a },
                              })
                            : i == null
                              ? (0, X.jsx)(o, {
                                  id: `librarySharing.requests.requestedByUnknown`,
                                  defaultMessage: `Requested by a collaborator{otherCount, plural, =0 {} one { and # other} other { and # others}}`,
                                  description: `Supporting text under a Library access-request recipient when the latest requester's identity is unavailable; otherCount counts other requesters for the same recipient and role`,
                                  values: { otherCount: a },
                                })
                              : (0, X.jsx)(o, {
                                  id: `librarySharing.requests.requestedBy`,
                                  defaultMessage: `Requested by {name}{otherCount, plural, =0 {} one { and # other} other { and # others}}`,
                                  description: `Supporting text under a Library access-request recipient when the requester has only a name or email; name identifies the latest requester and otherCount counts other requesters for the same recipient and role`,
                                  values: { name: i, otherCount: a },
                                })),
                        (0, X.jsx)(
                          se,
                          {
                            avatar: (0, X.jsx)(je, {
                              avatarUrl: t?.avatar_url,
                              colorKey: e.recipient.principal_id,
                              name: r ?? null,
                              size: `sm`,
                            }),
                            label:
                              r ??
                              (0, X.jsx)(o, {
                                id: `librarySharing.requests.recipientFallback`,
                                defaultMessage: `Collaborator`,
                                description: `Fallback name for a Library access-request recipient whose name and email are unavailable`,
                              }),
                            secondaryLabel: (0, X.jsxs)(X.Fragment, {
                              children: [
                                t?.email == null ? null : (0, X.jsx)(`div`, { children: t.email }),
                                (0, X.jsx)(`div`, { children: p }),
                              ],
                            }),
                            size: `compact`,
                            trailingContent: (0, X.jsxs)(`div`, {
                              className: `flex items-center gap-2`,
                              children: [
                                (0, X.jsx)(`span`, {
                                  className: `text-sm text-codex-description`,
                                  children: (0, X.jsx)(qe, { permission: d }),
                                }),
                                (0, X.jsx)(B, {
                                  "aria-label":
                                    r == null
                                      ? v.formatMessage({
                                          id: `librarySharing.requests.approveUnknownLabel`,
                                          defaultMessage: `Approve access request`,
                                          description: `Accessible label for approving requested Library access when the recipient's name and email are unavailable`,
                                        })
                                      : v.formatMessage(
                                          {
                                            id: `librarySharing.requests.approveLabel`,
                                            defaultMessage: `Approve access for {name}`,
                                            description: `Accessible label for approving requested Library access; name identifies the recipient`,
                                          },
                                          { name: r },
                                        ),
                                  color: `secondary`,
                                  disabled: u || G || !s || (d !== `viewer` && d !== `editor`),
                                  size: `sm`,
                                  onClick: () => {
                                    f() && l && s && le({ decision: `approve`, row: e });
                                  },
                                  children: (0, X.jsx)(o, {
                                    id: `librarySharing.requests.approve`,
                                    defaultMessage: `Approve`,
                                    description: `Button for approving a recipient's requested Library access`,
                                  }),
                                }),
                                (0, X.jsx)(B, {
                                  "aria-label":
                                    r == null
                                      ? v.formatMessage({
                                          id: `librarySharing.requests.declineUnknownLabel`,
                                          defaultMessage: `Decline access request`,
                                          description: `Accessible label for declining requested Library access when the recipient's name and email are unavailable`,
                                        })
                                      : v.formatMessage(
                                          {
                                            id: `librarySharing.requests.declineLabel`,
                                            defaultMessage: `Decline access for {name}`,
                                            description: `Accessible label for declining requested Library access; name identifies the recipient`,
                                          },
                                          { name: r },
                                        ),
                                  color: `secondary`,
                                  variant: `ghost`,
                                  disabled: u || G,
                                  size: `sm`,
                                  onClick: () => {
                                    f() && l && le({ decision: `decline`, row: e });
                                  },
                                  children: (0, X.jsx)(o, {
                                    id: `librarySharing.requests.decline`,
                                    defaultMessage: `Decline`,
                                    description: `Button for declining a recipient's requested Library access`,
                                  }),
                                }),
                              ],
                            }),
                          },
                          ct(e),
                        )
                      );
                    }),
                    i
                      ? (0, X.jsx)(B, {
                          size: `xl`,
                          type: `button`,
                          color: `secondary`,
                          disabled: u || G || re,
                          loading: re,
                          onClick: () => {
                            f() && (F ? I() : L());
                          },
                          children: (0, X.jsx)(o, {
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
    ((t[51] = s),
      (t[52] = l),
      (t[53] = N?.pages),
      (t[54] = u),
      (t[55] = T),
      (t[56] = I),
      (t[57] = F),
      (t[58] = v),
      (t[59] = f),
      (t[60] = re),
      (t[61] = G),
      (t[62] = le),
      (t[63] = L),
      (t[64] = C),
      (t[65] = D),
      (t[66] = g),
      (t[67] = ue),
      (t[68] = K));
  } else ((ue = t[67]), (K = t[68]));
  return K === Symbol.for(`react.early_return_sentinel`) ? ue : K;
}
function Dt(e) {
  return Y(e.requester);
}
function Ot(e) {
  return e.principal_identities.map(kt);
}
function kt(e) {
  return [Y(e.principal), e];
}
function At(e) {
  return e.requests;
}
function jt(e, t, n, r) {
  return e.next_cursor != null && !r.includes(e.next_cursor) ? e.next_cursor : void 0;
}
function Mt() {
  return new Set();
}
var Nt, Pt, X;
function Ft() {
  return (Ft = e(() => {
    ((Nt = I()),
      xe(),
      l(),
      f(),
      s(),
      P(),
      g(),
      (Pt = V()),
      k(),
      Ae(),
      a(),
      D(),
      b(),
      M(),
      L(),
      W(),
      Ke(),
      i(),
      Ye(),
      Tt(),
      nt(),
      ft(),
      (X = R()));
  }))();
}
function It(e) {
  let n = (0, Rt.c)(17),
    { shares: r, effectiveAccess: i, resourceKind: a, renderActions: s, draftRoles: c } = e,
    l,
    u,
    d;
  if (
    n[0] !== c ||
    n[1] !== i?.collaborators ||
    n[2] !== s ||
    n[3] !== a ||
    n[4] !== r.owner ||
    n[5] !== r.shares
  ) {
    d = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = i?.collaborators.filter((e) => {
          let { principal: t } = e;
          return (t.principal_type === `user` || t.principal_type === `group`) && Y(t) !== Y(r.owner);
        }),
        f = new Map(e?.map(Lt)),
        p = new Set(),
        m = r.shares.flatMap((e) => {
          let t = e.recipient;
          if (t.recipient_type === `principal`) {
            let n = t.principal_type ?? `user`,
              i = `${n}:${t.principal_id}`;
            return (n !== `user` && n !== `group`) || i === Y(r.owner)
              ? []
              : (p.add(i), [{ key: e.share_id, share: e, collaborator: f.get(i) }]);
          }
          return [{ key: e.share_id, share: e }];
        });
      for (let t of e ?? []) {
        let e = Y(t.principal);
        p.has(e) || m.push({ key: `effective:${e}`, collaborator: t });
      }
      if (m.length === 0) {
        d = null;
        break bb0;
      }
      l = `flex flex-col gap-1`;
      let h;
      (n[9] !== c || n[10] !== s || n[11] !== a || n[12] !== r
        ? ((h = (e) => {
            let { key: n, share: i, collaborator: l } = e;
            if (c?.has(n) && c.get(n) == null) return null;
            let u =
                l?.email ??
                i?.recipient_email ??
                (i?.recipient.recipient_type === `email` ? i.recipient.email : void 0),
              d =
                i?.status === `pending` && !r.owner.principal_id.includes(`__`)
                  ? u || void 0
                  : l?.display_name || i?.recipient_display_name || u || void 0,
              f = et(l?.role_id ?? i?.role_id ?? ``, a),
              p =
                l?.principal.principal_type === `group` ||
                (i?.recipient.recipient_type === `principal` && i.recipient.principal_type === `group`),
              m = null;
            l?.inherited &&
              (m =
                l.source?.resource_display_name == null
                  ? (0, zt.jsx)(o, {
                      id: `librarySharing.collaborators.inheritedUnnamed`,
                      defaultMessage: `Inherited from a parent folder`,
                      description: `Tooltip on the role of a Library collaborator who has inherited access from a parent folder whose display name is unavailable`,
                    })
                  : (0, zt.jsx)(o, {
                      id: `librarySharing.collaborators.inherited`,
                      defaultMessage: `Inherited from {folderName}`,
                      description: `Tooltip on the role of a Library collaborator who has inherited access; folderName is the parent folder's display name`,
                      values: { folderName: l.source.resource_display_name },
                    }));
            let h =
              m != null || l?.group_source != null
                ? (0, zt.jsxs)(`div`, {
                    className: `flex flex-col`,
                    children: [
                      m,
                      l?.group_source == null
                        ? null
                        : (0, zt.jsx)(o, {
                            id: `librarySharing.collaborators.groupAccess`,
                            defaultMessage: `Access through a group`,
                            description: `Tooltip on the role of a Library collaborator whose access comes from membership of a shared group`,
                          }),
                    ],
                  })
                : null;
            return (0, zt.jsx)(
              se,
              {
                avatar: p
                  ? (0, zt.jsx)(Fe, { size: 28, Icon: y })
                  : (0, zt.jsx)(je, {
                      size: `group`,
                      avatarUrl: l?.avatar_url ?? i?.recipient_avatar_url,
                      colorKey:
                        l?.principal.principal_id ??
                        (i?.recipient.recipient_type === `principal`
                          ? i.recipient.principal_id
                          : u?.toLowerCase()),
                      name: d ?? null,
                    }),
                label:
                  d ??
                  (0, zt.jsx)(o, {
                    id: `librarySharing.collaborators.unnamed`,
                    defaultMessage: `Collaborator`,
                    description: `Fallback display name for a person or group with access in the Library sharing dialog when the server has not supplied a name or email`,
                  }),
                secondaryLabel: (0, zt.jsxs)(`div`, {
                  className: `flex flex-col`,
                  children: [
                    u != null && u !== d ? (0, zt.jsx)(`span`, { children: u }) : null,
                    i?.status === `pending`
                      ? (0, zt.jsx)(o, {
                          id: `librarySharing.collaborators.inviteSent`,
                          defaultMessage: `Invite sent`,
                          description: `Status below a pending Library collaborator's email address; their invitation has been sent but not yet accepted`,
                        })
                      : null,
                  ],
                }),
                trailingContent: (0, zt.jsx)(t, {
                  content: h,
                  children:
                    s == null
                      ? (0, zt.jsx)(`span`, {
                          className: `pe-2 text-sm text-tertiary`,
                          tabIndex: h == null ? void 0 : 0,
                          children: (0, zt.jsx)(qe, { permission: f }),
                        })
                      : (0, zt.jsx)(`span`, {
                          className: `inline-flex`,
                          tabIndex: h == null ? void 0 : 0,
                          children: s({ key: n, share: i, collaborator: l, role: f, personName: d }),
                        }),
                }),
              },
              n,
            );
          }),
          (n[9] = c),
          (n[10] = s),
          (n[11] = a),
          (n[12] = r),
          (n[13] = h))
        : (h = n[13]),
        (u = m.map(h)));
    }
    ((n[0] = c),
      (n[1] = i?.collaborators),
      (n[2] = s),
      (n[3] = a),
      (n[4] = r.owner),
      (n[5] = r.shares),
      (n[6] = l),
      (n[7] = u),
      (n[8] = d));
  } else ((l = n[6]), (u = n[7]), (d = n[8]));
  if (d !== Symbol.for(`react.early_return_sentinel`)) return d;
  let f;
  return (
    n[14] !== l || n[15] !== u
      ? ((f = (0, zt.jsx)(`div`, { className: l, children: u })), (n[14] = l), (n[15] = u), (n[16] = f))
      : (f = n[16]),
    f
  );
}
function Lt(e) {
  return [Y(e.principal), e];
}
var Rt, zt;
function Bt() {
  return (Bt = e(() => {
    ((Rt = I()), Ve(), _(), k(), Ae(), b(), W(), Ke(), nt(), (zt = R()));
  }))();
}
function Vt(e) {
  let t = (0, en.c)(92),
    {
      api: n,
      sharingScope: i,
      analytics: a,
      shares: s,
      effectiveAccess: l,
      allowedRoles: u,
      canChange: f,
      canRemove: p,
      canRemoveEffective: m,
      disabled: h,
      isCurrentSession: g,
      onStageChange: _,
    } = e,
    v = c(r),
    y = te(),
    [b, x] = (0, tn.useState)(null),
    S;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = new Map()), (t[0] = S)) : (S = t[0]);
  let [C, w] = (0, tn.useState)(S),
    T;
  t[1] === i ? (T = t[2]) : ((T = at(i, `shares`)), (t[1] = i), (t[2] = T));
  let E = T,
    D;
  t[3] === i ? (D = t[4]) : ((D = at(i, `effective-access`)), (t[3] = i), (t[4] = D));
  let O = D,
    k;
  t[5] === i ? (k = t[6]) : ((k = at(i, `state`)), (t[5] = i), (t[6] = k));
  let A;
  t[7] !== u ||
  t[8] !== n ||
  t[9] !== f ||
  t[10] !== p ||
  t[11] !== m ||
  t[12] !== g ||
  t[13] !== s ||
  t[14] !== i.resourceKind
    ? ((A = async (e) => {
        let t = e.kind === `direct` ? e.desiredRole : e.preview.desired_role;
        if (
          !g() ||
          (t != null && (!f || !u.includes(t))) ||
          (t == null && e.kind === `effective` && !m) ||
          (t == null && e.kind === `direct` && !p)
        )
          throw Error(`Library access management is no longer permitted`);
        return e.kind === `effective`
          ? { kind: `effective`, preview: e.preview, result: await n.applyAccessChange(e.preview, s.owner) }
          : e.desiredRole == null
            ? (await n.removeShare(e.share), { kind: `direct`, share: e.share, updatedShare: null })
            : {
                kind: `direct`,
                share: e.share,
                updatedShare: await n.createShare({
                  recipient: e.share.recipient,
                  roleId: ut[i.resourceKind][e.desiredRole],
                  expectedInvitationId: e.share.share_id,
                }),
              };
      }),
      (t[7] = u),
      (t[8] = n),
      (t[9] = f),
      (t[10] = p),
      (t[11] = m),
      (t[12] = g),
      (t[13] = s),
      (t[14] = i.resourceKind),
      (t[15] = A))
    : (A = t[15]);
  let j;
  t[16] !== a || t[17] !== g || t[18] !== y || t[19] !== v || t[20] !== E || t[21] !== i
    ? ((j = async (e) => {
        await y.cancelQueries({ queryKey: E.slice(0, 5) });
        let t = crypto.randomUUID();
        return (
          g() &&
            Je(v, a, {
              ...$t(e, i),
              outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
              operationId: t,
            }),
          t
        );
      }),
      (t[16] = a),
      (t[17] = g),
      (t[18] = y),
      (t[19] = v),
      (t[20] = E),
      (t[21] = i),
      (t[22] = j))
    : (j = t[22]);
  let M;
  t[23] !== a || t[24] !== O || t[25] !== g || t[26] !== y || t[27] !== v || t[28] !== E || t[29] !== i
    ? ((M = async (e, t, n) => {
        if (!g()) return;
        let r = e.kind === `effective` && e.result.partial_failure === !0,
          s = e.kind === `effective` ? e.preview.mutations.find(qt) : void 0,
          c = e.kind === `direct` && e.updatedShare == null ? e.share : void 0,
          l =
            c?.status === `active` && c.recipient.recipient_type === `principal`
              ? Y({
                  principal_type: c.recipient.principal_type ?? `user`,
                  principal_id: c.recipient.principal_id,
                })
              : void 0,
          u = y.getQueryData(O),
          d =
            l != null &&
            u?.complete === !0 &&
            u.collaborators.every((e) => Y(e.principal) !== l || e.source?.invitation_id != null);
        if (
          (Ct(y, s == null ? i : { ...i, resourceKind: `folder`, libraryFileId: s.resource.resource_id }, {
            includeShares:
              r ||
              (e.kind === `effective` &&
                (e.preview.mutations.length !== 1 || e.preview.mutations[0]?.invitation_id == null)),
            preserveEffectiveAccess: d,
          }),
          await Promise.all([
            e.kind === `direct` ||
            (!r && e.preview.mutations.length === 1 && e.preview.mutations[0]?.invitation_id != null)
              ? y.cancelQueries({ queryKey: E, exact: !0 })
              : void 0,
            (e.kind === `effective` ? !r && e.result.effective_access.complete : e.updatedShare != null || d)
              ? y.cancelQueries({ queryKey: O, exact: !0 })
              : void 0,
          ]),
          g())
        ) {
          if (e.kind === `direct`) {
            if (
              (y.setQueryData(E, (t) =>
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
              y.setQueryData(O, (n) =>
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
            d &&
              c != null &&
              y.setQueryData(O, (e) =>
                e == null
                  ? e
                  : {
                      ...e,
                      collaborators: e.collaborators.flatMap((e) =>
                        Y(e.principal) === l
                          ? e.source?.invitation_id === c.share_id &&
                            e.inherited !== !0 &&
                            e.group_source == null
                            ? []
                            : (e.inherited === !0 || e.group_source != null) && e.direct_role_id === c.role_id
                              ? [{ ...e, direct_role_id: null }]
                              : [e]
                          : [e],
                      ),
                    },
              );
          } else {
            y.setQueryData(O, e.result.effective_access);
            let t = !r && e.preview.mutations.length === 1 ? e.preview.mutations[0] : void 0;
            t?.invitation_id != null &&
              y.setQueryData(E, (e) =>
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
          (x(null),
            Je(v, a, {
              ...$t(t, i),
              outcome: r
                ? oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL
                : oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED,
              operationId: n,
              succeededRecipientCount: r ? void 0 : 1,
              failedRecipientCount: r ? 1 : void 0,
            }),
            r
              ? v
                  .get(ee)
                  .warning(
                    (0, Z.jsx)(o, {
                      id: `librarySharing.collaborators.partialChange`,
                      defaultMessage: `Some access changes couldn't be applied. Review the current permissions before trying again`,
                      description: `Warning toast after the Library backend reports a partially applied inherited or group access change; the user must review refreshed permissions before retrying`,
                    }),
                  )
              : v
                  .get(ee)
                  .success(
                    (0, Z.jsx)(o, {
                      id: `librarySharing.collaborators.updated`,
                      defaultMessage: `Access updated`,
                      description: `Success toast after the backend confirms a Library collaborator's role change or removal`,
                    }),
                  ));
        }
      }),
      (t[23] = a),
      (t[24] = O),
      (t[25] = g),
      (t[26] = y),
      (t[27] = v),
      (t[28] = E),
      (t[29] = i),
      (t[30] = M))
    : (M = t[30]);
  let N;
  t[31] !== a || t[32] !== g || t[33] !== y || t[34] !== v || t[35] !== i
    ? ((N = (e, t, n) => {
        if (!g()) return;
        (x(null),
          Je(v, a, {
            ...$t(t, i),
            outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
            operationId: n,
            failedRecipientCount: 1,
            error: Qe(e),
          }),
          v
            .get(ee)
            .danger(
              (0, Z.jsx)(o, {
                id: `librarySharing.collaborators.updateFailed`,
                defaultMessage: `Couldn't update access. Review the current permissions and try again`,
                description: `Error toast when changing or removing a Library collaborator's access fails; current permissions are reloaded before a new attempt`,
              }),
              { errorAnalytics: { toastId: `librarySharing.collaborators.updateFailed` } },
            ));
        let r = t.kind === `effective` ? t.preview.mutations.find(Kt) : void 0;
        Ct(y, r == null ? i : { ...i, resourceKind: `folder`, libraryFileId: r.resource.resource_id }, {
          includeShares: !0,
        });
      }),
      (t[31] = a),
      (t[32] = g),
      (t[33] = y),
      (t[34] = v),
      (t[35] = i),
      (t[36] = N))
    : (N = t[36]);
  let ne;
  t[37] !== k || t[38] !== A || t[39] !== j || t[40] !== M || t[41] !== N
    ? ((ne = {
        mutationKey: k,
        networkMode: `always`,
        retry: !1,
        mutationFn: A,
        onMutate: j,
        onSuccess: M,
        onError: N,
      }),
      (t[37] = k),
      (t[38] = A),
      (t[39] = j),
      (t[40] = M),
      (t[41] = N),
      (t[42] = ne))
    : (ne = t[42]);
  let { mutateAsync: re, isPending: P } = d(ne),
    F;
  t[43] !== re || t[44] !== _
    ? ((F = function (e, t) {
        (w((n) => {
          let r = new Map(n);
          return (
            t == null ? r.delete(e) : r.set(e, t.kind === `direct` ? t.desiredRole : t.preview.desired_role),
            r
          );
        }),
          _(
            `collaborator:${e}`,
            t == null
              ? null
              : {
                  kind: `collaborator`,
                  save: () =>
                    re(t)
                      .then(Gt, Wt)
                      .finally(() => {
                        (w((t) => {
                          let n = new Map(t);
                          return (n.delete(e), n);
                        }),
                          _(`collaborator:${e}`, null));
                      }),
                },
          ));
      }),
      (t[43] = re),
      (t[44] = _),
      (t[45] = F))
    : (F = t[45]);
  let I = F,
    L;
  t[46] === i ? (L = t[47]) : ((L = at(i, `state`)), (t[46] = i), (t[47] = L));
  let R;
  t[48] !== n || t[49] !== f || t[50] !== m || t[51] !== g
    ? ((R = (e) => {
        let { collaborator: t, desiredRole: r } = e;
        if (!g() || (r == null ? !m : !f))
          throw Error(`Library inherited access management is no longer permitted`);
        return n.previewAccessChange({ recipient: t.principal, desiredRole: r });
      }),
      (t[48] = n),
      (t[49] = f),
      (t[50] = m),
      (t[51] = g),
      (t[52] = R))
    : (R = t[52]);
  let z;
  t[53] !== g || t[54] !== y || t[55] !== E || t[56] !== i.resourceKind || t[57] !== I
    ? ((z = (e, t) => {
        let { key: n, personName: r } = t;
        if (g()) {
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
            x({ key: n, personName: r, preview: e });
          else {
            if (e.desired_role != null && e.mutations.length === 0 && e.recipient.principal_type === `user`) {
              let t = y
                .getQueryData(E)
                ?.shares.find(
                  (t) =>
                    t.status === `active` &&
                    t.recipient.recipient_type === `principal` &&
                    (t.recipient.principal_type ?? `user`) === `user` &&
                    t.recipient.principal_id === e.recipient.principal_id,
                );
              if (t != null && et(t.role_id, i.resourceKind) !== e.desired_role) {
                I(n, { kind: `direct`, share: t, desiredRole: e.desired_role });
                return;
              }
            }
            I(n, { kind: `effective`, preview: e });
          }
        }
      }),
      (t[53] = g),
      (t[54] = y),
      (t[55] = E),
      (t[56] = i.resourceKind),
      (t[57] = I),
      (t[58] = z))
    : (z = t[58]);
  let B;
  t[59] !== g || t[60] !== y || t[61] !== v || t[62] !== i
    ? ((B = () => {
        g() &&
          (v
            .get(ee)
            .danger(
              (0, Z.jsx)(o, {
                id: `librarySharing.collaborators.previewFailed`,
                defaultMessage: `Couldn't check how this change affects access. Try again`,
                description: `Error toast when the Library sharing dialog cannot preview an inherited permission change; no access change has been applied`,
              }),
              { errorAnalytics: { toastId: `librarySharing.collaborators.previewFailed` } },
            ),
          Ct(y, i));
      }),
      (t[59] = g),
      (t[60] = y),
      (t[61] = v),
      (t[62] = i),
      (t[63] = B))
    : (B = t[63]);
  let V;
  t[64] !== L || t[65] !== R || t[66] !== z || t[67] !== B
    ? ((V = { mutationKey: L, networkMode: `always`, retry: !1, mutationFn: R, onSuccess: z, onError: B }),
      (t[64] = L),
      (t[65] = R),
      (t[66] = z),
      (t[67] = B),
      (t[68] = V))
    : (V = t[68]);
  let { mutate: ie, isPending: ae } = d(V),
    H = h || P || ae,
    U;
  t[69] !== u ||
  t[70] !== H ||
  t[71] !== f ||
  t[72] !== p ||
  t[73] !== m ||
  t[74] !== C ||
  t[75] !== ie ||
  t[76] !== i.accountUserId ||
  t[77] !== I
    ? ((U = (e) => {
        let { key: t, share: n, collaborator: r, role: a, personName: s } = e,
          c = C.get(t) ?? a;
        if (
          (r?.principal.principal_type === `user` && r.principal.principal_id === i.accountUserId) ||
          (n?.recipient.recipient_type === `principal` &&
            (n.recipient.principal_type ?? `user`) === `user` &&
            n.recipient.principal_id === i.accountUserId)
        )
          return (0, Z.jsx)(`span`, {
            className: `pe-4 text-sm text-tertiary`,
            children: (0, Z.jsx)(qe, { permission: a }),
          });
        let l =
            r != null &&
            n?.status !== `pending` &&
            (n == null || r.inherited === !0 || r.group_source != null || a === `editor`),
          d = l ? u.filter(Ut) : u,
          h = (n != null && p) || (l && m);
        return (f && d.some((e) => e !== a)) || h
          ? (0, Z.jsx)(Ne, {
              indicatorVariant: `checkmark`,
              disabled: H,
              options: d.map((e) => ({ value: e, disabled: !f })),
              renderLabel: Ht,
              removeLabel: (0, Z.jsx)(o, {
                id: `librarySharing.collaborators.remove`,
                defaultMessage: `Remove access`,
                description: `Menu item for removing a collaborator's access to a Library file or folder`,
              }),
              value: c ?? `unknown`,
              variant: `inline`,
              onChange: (e) => {
                if (!H && f && e !== `unknown` && e !== c) {
                  if (e === a) {
                    I(t, null);
                    return;
                  }
                  r != null && n?.status !== `pending` && (e === `viewer` || e === `editor`)
                    ? ie({ key: t, collaborator: r, desiredRole: e, personName: s })
                    : n != null && I(t, { kind: `direct`, share: n, desiredRole: e });
                }
              },
              onRemoveAccess: h
                ? () => {
                    H ||
                      (m && l
                        ? ie({ key: t, collaborator: r, desiredRole: null, personName: s })
                        : n != null && p && I(t, { kind: `direct`, share: n, desiredRole: null }));
                  }
                : void 0,
            })
          : (0, Z.jsx)(`span`, {
              className: `pe-4 text-sm text-tertiary`,
              children: (0, Z.jsx)(qe, { permission: c }),
            });
      }),
      (t[69] = u),
      (t[70] = H),
      (t[71] = f),
      (t[72] = p),
      (t[73] = m),
      (t[74] = C),
      (t[75] = ie),
      (t[76] = i.accountUserId),
      (t[77] = I),
      (t[78] = U))
    : (U = t[78]);
  let W;
  t[79] !== C || t[80] !== l || t[81] !== s || t[82] !== i.resourceKind || t[83] !== U
    ? ((W = (0, Z.jsx)(It, {
        shares: s,
        effectiveAccess: l,
        resourceKind: i.resourceKind,
        draftRoles: C,
        renderActions: U,
      })),
      (t[79] = C),
      (t[80] = l),
      (t[81] = s),
      (t[82] = i.resourceKind),
      (t[83] = U),
      (t[84] = W))
    : (W = t[84]);
  let se;
  t[85] !== P || t[86] !== b || t[87] !== I
    ? ((se =
        b == null
          ? null
          : (0, Z.jsx)(Jt, {
              isPending: P,
              personName: b.personName,
              preview: b.preview,
              onCancel: () => x(null),
              onConfirm: () => {
                (I(b.key, { kind: `effective`, preview: b.preview }), x(null));
              },
            })),
      (t[85] = P),
      (t[86] = b),
      (t[87] = I),
      (t[88] = se))
    : (se = t[88]);
  let ce;
  return (
    t[89] !== W || t[90] !== se
      ? ((ce = (0, Z.jsxs)(Z.Fragment, { children: [W, se] })), (t[89] = W), (t[90] = se), (t[91] = ce))
      : (ce = t[91]),
    ce
  );
}
function Ht(e) {
  return (0, Z.jsx)(qe, { permission: e === `unknown` ? void 0 : e });
}
function Ut(e) {
  return e === `viewer` || e === `editor`;
}
function Wt() {
  return !1;
}
function Gt(e) {
  return e.kind !== `effective` || e.result.partial_failure !== !0;
}
function Kt(e) {
  return e.resource.resource_type === `library_folder`;
}
function qt(e) {
  return e.resource.resource_type === `library_folder`;
}
function Jt(e) {
  let t = (0, en.c)(40),
    { isPending: n, personName: r, preview: i, onCancel: a, onConfirm: s } = e,
    c;
  t[0] !== i.affects_other_descendants || t[1] !== i.mutations
    ? ((c = i.affects_other_descendants || i.mutations.some(Zt)),
      (t[0] = i.affects_other_descendants),
      (t[1] = i.mutations),
      (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] !== i.affects_other_group_members || t[4] !== i.mutations
    ? ((u = i.affects_other_group_members || i.mutations.some(Xt)),
      (t[3] = i.affects_other_group_members),
      (t[4] = i.mutations),
      (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(o, {
        id: `librarySharing.collaborators.confirmTitle`,
        defaultMessage: `Change shared access?`,
        description: `Title of the confirmation dialog shown before a Library permission change affects parent folders or other members of a group`,
      })),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] === r
    ? (p = t[8])
    : ((p =
        r == null
          ? (0, Z.jsx)(o, {
              id: `librarySharing.collaborators.confirmDescriptionUnknown`,
              defaultMessage: `Review all access changes before continuing`,
              description: `Body of the inherited Library access confirmation when the collaborator's name and email are unavailable; affected resources are listed below`,
            })
          : (0, Z.jsx)(o, {
              id: `librarySharing.collaborators.confirmDescription`,
              defaultMessage: `Review all access changes for {personName} before continuing`,
              description: `Body of the inherited Library access confirmation; personName is the collaborator whose effective access is being changed, and the affected resources are listed below`,
              values: { personName: r },
            })),
      (t[7] = r),
      (t[8] = p));
  let m;
  t[9] !== n || t[10] !== s
    ? ((m = () => {
        n || s();
      }),
      (t[9] = n),
      (t[10] = s),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(o, {
        id: `librarySharing.collaborators.cancelChange`,
        defaultMessage: `Cancel`,
        description: `Button for dismissing an inherited Library access confirmation without applying changes`,
      })),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] === n
    ? (g = t[14])
    : ((g = (0, Z.jsx)(fe.Close, {
        children: (0, Z.jsx)(B, { size: `xl`, color: `secondary`, disabled: n, type: `button`, children: h }),
      })),
      (t[13] = n),
      (t[14] = g));
  let _;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(o, {
        id: `librarySharing.collaborators.stageChange`,
        defaultMessage: `Continue`,
        description: `Confirmation button staging the listed Library permission changes, including parent-folder or group effects; the user must still save the sharing dialog to apply them`,
      })),
      (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] === n
    ? (v = t[17])
    : ((v = (0, Z.jsx)(B, {
        size: `xl`,
        color: `primary`,
        disabled: n,
        loading: n,
        type: `submit`,
        children: _,
      })),
      (t[16] = n),
      (t[17] = v));
  let y;
  t[18] !== g || t[19] !== v
    ? ((y = (0, Z.jsxs)(Z.Fragment, { children: [g, v] })), (t[18] = g), (t[19] = v), (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] === i.mutations ? (b = t[22]) : ((b = i.mutations.map(Yt)), (t[21] = i.mutations), (t[22] = b));
  let x;
  t[23] === b
    ? (x = t[24])
    : ((x = (0, Z.jsx)(`ul`, { className: `flex flex-col gap-2`, children: b })), (t[23] = b), (t[24] = x));
  let S;
  t[25] === l
    ? (S = t[26])
    : ((S = l
        ? (0, Z.jsx)(`p`, {
            className: `text-sm text-codex-description`,
            children: (0, Z.jsx)(o, {
              id: `librarySharing.collaborators.descendantImpact`,
              defaultMessage: `This also changes access to other files and folders inside the affected folders`,
              description: `Warning in the Library inherited access confirmation that changing a parent folder's permissions also changes access to its descendants`,
            }),
          })
        : null),
      (t[25] = l),
      (t[26] = S));
  let C;
  t[27] === d
    ? (C = t[28])
    : ((C = d
        ? (0, Z.jsx)(`p`, {
            className: `text-sm text-codex-description`,
            children: (0, Z.jsx)(o, {
              id: `librarySharing.collaborators.groupImpact`,
              defaultMessage: `This also changes access for other people in the affected groups`,
              description: `Warning in the Library permission confirmation that changing a group grant affects other members of that group`,
            }),
          })
        : null),
      (t[27] = d),
      (t[28] = C));
  let w;
  t[29] !== x || t[30] !== S || t[31] !== C
    ? ((w = (0, Z.jsx)(A, {
        children: (0, Z.jsxs)(`div`, { className: `flex flex-col gap-3`, children: [x, S, C] }),
      })),
      (t[29] = x),
      (t[30] = S),
      (t[31] = C),
      (t[32] = w))
    : (w = t[32]);
  let T;
  return (
    t[33] !== n || t[34] !== a || t[35] !== y || t[36] !== w || t[37] !== p || t[38] !== m
      ? ((T = (0, Z.jsx)(Oe, {
          title: f,
          subtitle: p,
          isDismissalDisabled: n,
          onClose: a,
          onSubmit: m,
          footer: y,
          children: w,
        })),
        (t[33] = n),
        (t[34] = a),
        (t[35] = y),
        (t[36] = w),
        (t[37] = p),
        (t[38] = m),
        (t[39] = T))
      : (T = t[39]),
    T
  );
}
function Yt(e) {
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
            (0, Z.jsx)(o, {
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
              children: (0, Z.jsx)(o, {
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
    `${e.resource.resource_type}:${e.resource.resource_id}:${Y(e.principal)}`,
  );
}
function Xt(e) {
  return e.affects_other_group_members;
}
function Zt(e) {
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
            ? (0, Z.jsx)(o, {
                id: `librarySharing.collaborators.noAccess`,
                defaultMessage: `No access`,
                description: `Permission value in the Library access-change confirmation when no role existed before the change or access will be removed`,
              })
            : (0, Z.jsx)(qe, { permission: et(r, n) })),
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
    i = e.kind === `direct` ? et(e.share.role_id, t.resourceKind) : (e.preview.current_role ?? void 0),
    a = q.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_USER;
  return (
    `recipient_type` in n && n.recipient_type === `email`
      ? (a = q.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_EMAIL)
      : `principal_type` in n &&
        n.principal_type === `group` &&
        (a = q.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_GROUP),
    {
      action:
        r == null
          ? de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REMOVE_COLLABORATOR
          : de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_ROLE,
      recipientKind: a,
      recipientCount: 1,
      role: Ze(r ?? i),
      previousRole: Ze(e.kind === `direct` && r == null ? void 0 : i),
    }
  );
}
var en, tn, Z;
function nn() {
  return (nn = e(() => {
    ((en = I()),
      xe(),
      l(),
      G(),
      s(),
      P(),
      g(),
      (tn = V()),
      k(),
      D(),
      M(),
      L(),
      ve(),
      gt(),
      Ke(),
      Ye(),
      Tt(),
      Bt(),
      nt(),
      (Z = R()));
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
  let t = (0, pn.c)(59),
    {
      account: n,
      api: i,
      sharingScope: a,
      sharingState: s,
      shares: l,
      effectiveAccess: u,
      analytics: f,
      canInvite: p,
      disabled: m,
      isCurrentSession: h,
      onStageChange: g,
    } = e,
    _ = c(r),
    v = te(),
    y = n.structure === `workspace`,
    b;
  t[0] === y ? (b = t[1]) : ((b = { enabled: y }), (t[0] = y), (t[1] = b));
  let { data: x, isError: S } = ae(be, a.accountId, b),
    C;
  t[2] !== n || t[3] !== x || t[4] !== S
    ? ((C = Pe(n, x, S)), (t[2] = n), (t[3] = x), (t[4] = S), (t[5] = C))
    : (C = t[5]);
  let T = C,
    { canSearchMembers: E } = T,
    D = l == null ? void 0 : ot(l.allowed_roles, a.resourceKind),
    [O, k] = (0, mn.useState)(),
    j;
  t[6] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = []), (t[6] = j)) : (j = t[6]);
  let [M, N] = (0, mn.useState)(j),
    ne = We(M.some(fn), O),
    re = D?.includes(ne) ? ne : D?.[0],
    [P, F] = (0, mn.useState)(``),
    I,
    L,
    R;
  t[7] !== u || t[8] !== M || t[9] !== l || t[10] !== s
    ? (({ existingPrincipalKeys: L, existingEmails: I } = ze(s, l, u)),
      (R = Ie(M, I, L)),
      (t[7] = u),
      (t[8] = M),
      (t[9] = l),
      (t[10] = s),
      (t[11] = I),
      (t[12] = L),
      (t[13] = R))
    : ((I = t[11]), (L = t[12]), (R = t[13]));
  let z = R,
    B;
  t[14] === D
    ? (B = t[15])
    : ((B = function (e, t) {
        let { recipient: n } = e,
          r = We(n.recipient_type === `principal` && n.principal_type === `group`, t);
        return D?.includes(r) ? r : D?.[0];
      }),
      (t[14] = D),
      (t[15] = B));
  let V = B,
    ie;
  t[16] === a ? (ie = t[17]) : ((ie = at(a, `state`)), (t[16] = a), (t[17] = ie));
  let H;
  t[18] !== i ||
  t[19] !== p ||
  t[20] !== E ||
  t[21] !== I ||
  t[22] !== L ||
  t[23] !== V ||
  t[24] !== h ||
  t[25] !== y ||
  t[26] !== a.resourceKind
    ? ((H = (e) => {
        let { invitees: t, role: n, explicitRole: r } = e,
          o = h() && p && (!y || E) && t.every(dn) && !Ie(t, I, L);
        return Promise.allSettled(
          t.map(async (e) => {
            let { recipient: t } = e,
              n = V(e, r);
            if (!o || n == null) throw Error(`Library invitations are no longer permitted`);
            return i.createShare({ recipient: t, roleId: ut[a.resourceKind][n] });
          }),
        ).then((e) => ({ results: e, role: n }));
      }),
      (t[18] = i),
      (t[19] = p),
      (t[20] = E),
      (t[21] = I),
      (t[22] = L),
      (t[23] = V),
      (t[24] = h),
      (t[25] = y),
      (t[26] = a.resourceKind),
      (t[27] = H))
    : (H = t[27]);
  let U;
  t[28] !== f || t[29] !== h || t[30] !== _
    ? ((U = (e) => {
        let { invitees: t, role: n } = e,
          r = crypto.randomUUID();
        return (
          h() &&
            Je(_, f, {
              action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE,
              outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
              operationId: r,
              recipientCount: t.length,
              recipientKind: Xe(t.map(un)),
              role: Ze(n),
            }),
          r
        );
      }),
      (t[28] = f),
      (t[29] = h),
      (t[30] = _),
      (t[31] = U))
    : (U = t[31]);
  let { mutateAsync: W, isPending: se } = d({
      mutationKey: ie,
      networkMode: `always`,
      retry: !1,
      mutationFn: H,
      onMutate: U,
      onSuccess: async (e, t, n) => {
        let { results: r, role: i } = e,
          { invitees: s, explicitRole: c } = t;
        if (!h()) return;
        let l = new Set(r.flatMap((e, t) => (e.status === `rejected` ? [s[t].id] : []))),
          u = r.flatMap((e, t) =>
            e.status === `fulfilled`
              ? [
                  {
                    ...e.value,
                    recipient_display_name: e.value.recipient_display_name ?? s[t].label,
                    recipient_email: e.value.recipient_email ?? s[t].secondaryLabel,
                  },
                ]
              : [],
          ),
          d = a.resourceKind === `file` && u.length > 0;
        if ((d && (await wt(v, a)), await v.cancelQueries({ queryKey: at(a, `shares`), exact: !0 }), !h()))
          return;
        (v.setQueryData(at(a, `shares`), (e) =>
          e == null ? e : { ...e, shares: [...new Map([...e.shares, ...u].map(ln)).values()] },
        ),
          Ct(v, a, { includeShares: u.length === 0, preserveLibraryBrowse: d }),
          k(l.size > 0 ? c : void 0),
          F(``),
          le(
            s.filter((e) => l.has(e.id)),
            c,
          ));
        let p = oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED;
        l.size > 0 &&
          (p =
            u.length === 0
              ? oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED
              : oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_PARTIAL);
        let m = r.find(cn);
        (Je(_, f, {
          action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_INVITE,
          outcome: p,
          operationId: n,
          recipientCount: s.length,
          recipientKind: Xe(s.map(sn)),
          succeededRecipientCount: u.length,
          failedRecipientCount: l.size,
          role: Ze(i),
          error: Qe(m?.reason instanceof Error ? m.reason : void 0),
        }),
          l.size === 0
            ? _.get(ee).success(
                (0, hn.jsx)(o, {
                  id: `librarySharing.invite.sent`,
                  defaultMessage: `{count, plural, one {Invitation sent} other {Invitations sent}}`,
                  description: `Toast after Library sharing invitations are confirmed by the backend; count is the number of invited people or groups`,
                  values: { count: u.length },
                }),
              )
            : _.get(ee).danger(
                (0, hn.jsx)(o, {
                  id: `librarySharing.invite.failed`,
                  defaultMessage: `{count, plural, one {One invitation failed} other {# invitations failed}}. Failed recipients are still selected so you can try again`,
                  description: `Toast after some or all Library invitations fail; count is only the failed invitations, which remain selected for retry`,
                  values: { count: l.size },
                }),
                { errorAnalytics: { toastId: `librarySharing.invite.failed` } },
              ));
      },
    }),
    ce = m || se;
  function le(e, t) {
    (N(e),
      g(
        `invite`,
        e.length === 0
          ? null
          : {
              kind: `invite`,
              invitees: e,
              save: async () => {
                try {
                  let n = e.map((e) => V(e, t ?? O)),
                    { results: r } = await W({
                      invitees: e,
                      explicitRole: t ?? O,
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
  let G;
  t[32] !== n.structure ||
  t[33] !== D ||
  t[34] !== i ||
  t[35] !== E ||
  t[36] !== ce ||
  t[37] !== I ||
  t[38] !== L ||
  t[39] !== z ||
  t[40] !== P ||
  t[41] !== T ||
  t[42] !== re ||
  t[43] !== M ||
  t[44] !== k ||
  t[45] !== l ||
  t[46] !== a.accountId ||
  t[47] !== a.accountUserId ||
  t[48] !== s ||
  t[49] !== le
    ? ((G =
        (n.structure === `personal` || E) && (D == null || re != null)
          ? (0, hn.jsxs)(A, {
              children: [
                (0, hn.jsx)(Be, {
                  accountId: a.accountId,
                  currentPrincipalId: a.accountUserId,
                  currentEmail: s.viewer.email ?? void 0,
                  ...T,
                  disabled: ce,
                  existingPrincipalKeys: L,
                  existingEmails: I,
                  shares: l,
                  query: P,
                  onQueryChange: F,
                  selected: M,
                  resolveRecipient: i.resolveRecipient,
                  onChange: le,
                  role: re,
                  allowedRoles: D,
                  onRoleChange: (e) => {
                    (k(e), le(M, e));
                  },
                }),
                z
                  ? (0, hn.jsx)(`p`, {
                      className: `text-sm text-danger`,
                      role: `alert`,
                      children: (0, hn.jsx)(o, {
                        id: `librarySharing.invite.alreadyAdded`,
                        defaultMessage: `This person already has access or is selected`,
                        description: `Validation error when a Library invite includes an existing collaborator or duplicate recipient`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[32] = n.structure),
      (t[33] = D),
      (t[34] = i),
      (t[35] = E),
      (t[36] = ce),
      (t[37] = I),
      (t[38] = L),
      (t[39] = z),
      (t[40] = P),
      (t[41] = T),
      (t[42] = re),
      (t[43] = M),
      (t[44] = k),
      (t[45] = l),
      (t[46] = a.accountId),
      (t[47] = a.accountUserId),
      (t[48] = s),
      (t[49] = le),
      (t[50] = G))
    : (G = t[50]);
  let ue;
  t[51] !== y || t[52] !== v || t[53] !== S || t[54] !== a.accountId
    ? ((ue =
        y && S
          ? (0, hn.jsx)(A, {
              children: (0, hn.jsx)(w, {
                type: `error`,
                role: `alert`,
                content: (0, hn.jsx)(o, {
                  id: `librarySharing.access.incomplete`,
                  defaultMessage: `Couldn't load all access details. Some sharing actions are unavailable`,
                  description: `Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled`,
                }),
                primaryCtaText: (0, hn.jsx)(o, {
                  id: `librarySharing.retry`,
                  defaultMessage: `Retry`,
                  description: `Button retrying a failed Library sharing data request`,
                }),
                onPrimaryCtaClick: () => {
                  v.invalidateQueries({ queryKey: [`accounts`, `settings`, a.accountId] });
                },
              }),
            })
          : null),
      (t[51] = y),
      (t[52] = v),
      (t[53] = S),
      (t[54] = a.accountId),
      (t[55] = ue))
    : (ue = t[55]);
  let K;
  return (
    t[56] !== G || t[57] !== ue
      ? ((K = (0, hn.jsxs)(hn.Fragment, { children: [G, ue] })), (t[56] = G), (t[57] = ue), (t[58] = K))
      : (K = t[58]),
    K
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
    ((pn = I()),
      xe(),
      s(),
      P(),
      g(),
      (mn = V()),
      k(),
      Se(),
      a(),
      D(),
      M(),
      L(),
      Le(),
      Ye(),
      Tt(),
      nt(),
      Re(),
      J(),
      (hn = R()));
  }))();
}
function _n(e) {
  let t = (0, Sn.c)(79),
    {
      allowedRoles: n,
      analytics: i,
      api: a,
      canInitiateSharing: s,
      canManage: l,
      disabled: u,
      permissionsPending: f,
      hasIndependentEditorAccess: p,
      isCurrentSession: m,
      isWorkspace: h,
      sharingScope: g,
      sharingState: _,
      workspaceName: v,
      onStageChange: y,
    } = e,
    b = f !== void 0 && f,
    x = c(r),
    S = te(),
    w = C(K) && s,
    T;
  t[0] !== g || t[1] !== _
    ? ((T = lt({ sharingState: _, scope: g })), (t[0] = g), (t[1] = _), (t[2] = T))
    : (T = t[2]);
  let E = T,
    [D, k] = (0, Cn.useState)(null),
    A = D ?? E,
    M;
  t[3] !== p || t[4] !== g.accountUserId || t[5] !== g.resourceKind
    ? ((M = (e) =>
        e.owner.principal.principal_id !== g.accountUserId &&
        e.link_access === `workspace` &&
        e.role_id === ut[g.resourceKind].editor &&
        !p),
      (t[3] = p),
      (t[4] = g.accountUserId),
      (t[5] = g.resourceKind),
      (t[6] = M))
    : (M = t[6]);
  let ne = M,
    re;
  t[7] !== n || t[8] !== w || t[9] !== l || t[10] !== h || t[11] !== ne || t[12] !== E || t[13] !== _
    ? ((re = l && h && E != null && n?.includes(`viewer`) === !0 && !ne(_) && (w || E.mode === `workspace`)),
      (t[7] = n),
      (t[8] = w),
      (t[9] = l),
      (t[10] = h),
      (t[11] = ne),
      (t[12] = E),
      (t[13] = _),
      (t[14] = re))
    : (re = t[14]);
  let P = re,
    F = n?.filter(xn),
    I;
  t[15] === g ? (I = t[16]) : ((I = at(g, `state`)), (t[15] = g), (t[16] = I));
  let L;
  t[17] !== n ||
  t[18] !== a ||
  t[19] !== P ||
  t[20] !== s ||
  t[21] !== m ||
  t[22] !== S ||
  t[23] !== ne ||
  t[24] !== x ||
  t[25] !== g ||
  t[26] !== _
    ? ((L = (e) => {
        let { next: t, observedState: r } = e;
        if (!m() || !P || (t.mode === `workspace` && (!s || !x.get(K) || !n?.includes(t.role))))
          throw Error(`Library link access management is not permitted`);
        let i = S.getQueryData(at(g, `state`)) ?? _;
        if (ne(i)) throw Error(`Library workspace access requires the owner`);
        return a.updateLinkAccess({
          expectedOwner: r.owner.principal,
          linkAccess: t,
          expectedInvitationId:
            r.link_access === `workspace` ? (r.workspace_invitation_id ?? void 0) : void 0,
          expectedRoleId:
            t.mode === `collaborators_only` && r.link_access === `workspace` ? (r.role_id ?? void 0) : void 0,
        });
      }),
      (t[17] = n),
      (t[18] = a),
      (t[19] = P),
      (t[20] = s),
      (t[21] = m),
      (t[22] = S),
      (t[23] = ne),
      (t[24] = x),
      (t[25] = g),
      (t[26] = _),
      (t[27] = L))
    : (L = t[27]);
  let R, z;
  t[28] !== i || t[29] !== m || t[30] !== S || t[31] !== x || t[32] !== g
    ? ((R = async (e) => {
        let { next: t, observedState: n } = e;
        await S.cancelQueries({ queryKey: at(g, `state`) });
        let r = {
          action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS,
          operationId: crypto.randomUUID(),
          linkAccess:
            t.mode === `workspace`
              ? ke.CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_WORKSPACE
              : ke.CHATGPT_FILE_LIBRARY_SHARING_LINK_ACCESS_COLLABORATORS_ONLY,
          recipientKind:
            t.mode === `workspace` ? q.CHATGPT_FILE_LIBRARY_SHARING_RECIPIENT_KIND_WORKSPACE : void 0,
          role: Ze(t.mode === `workspace` ? t.role : void 0),
          previousRole: Ze(n.link_access === `workspace` ? et(n.role_id ?? ``, g.resourceKind) : void 0),
        };
        return (m() && Je(x, i, { ...r, outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED }), r);
      }),
      (z = (e, t, n) => {
        m() &&
          (S.setQueryData(at(g, `state`), e),
          Je(x, i, { ...n, outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED }),
          x
            .get(ee)
            .success(
              (0, wn.jsx)(o, {
                id: `librarySharing.link.saved`,
                defaultMessage: `Link access updated`,
                description: `Success toast after the Library backend confirms a change to a file or folder's workspace link access`,
              }),
            ),
          Ct(S, g, { preserveState: !0 }));
      }),
      (t[28] = i),
      (t[29] = m),
      (t[30] = S),
      (t[31] = x),
      (t[32] = g),
      (t[33] = R),
      (t[34] = z))
    : ((R = t[33]), (z = t[34]));
  let B;
  t[35] !== i || t[36] !== m || t[37] !== y || t[38] !== S || t[39] !== x || t[40] !== g
    ? ((B = async (e, t, n) => {
        let { observedState: r } = t;
        if (!m() || (await Ct(S, g), !m())) return;
        let a = S.getQueryData(at(g, `state`)),
          s =
            (e instanceof O && e.responseStatus === 409) ||
            (a != null &&
              (a.owner.principal.principal_id !== r.owner.principal.principal_id ||
                a.link_access !== r.link_access ||
                a.workspace_invitation_id !== r.workspace_invitation_id ||
                a.role_id !== r.role_id));
        (s && (k(null), y(`link`, null)),
          Je(x, i, {
            ...n,
            action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_CHANGE_LINK_ACCESS,
            outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
            error: Qe(e),
          }),
          s
            ? x
                .get(ee)
                .danger(
                  (0, wn.jsx)(o, {
                    id: `librarySharing.link.conflict`,
                    defaultMessage: `Link access changed. Choose your setting again before saving`,
                    description: `Error toast after another sharing change invalidates a staged Library link-access choice; the user must choose again against refreshed permissions`,
                  }),
                  { errorAnalytics: { toastId: `linkAccess.conflict` } },
                )
            : x
                .get(ee)
                .danger(
                  e instanceof O && e.errorCode === `library_manage_access_would_lose_permission`
                    ? (0, wn.jsx)(o, {
                        id: `librarySharing.link.wouldLoseAccess`,
                        defaultMessage: `You can’t make a change that reduces your own access. Ask the owner to make it.`,
                        description: `Error toast when a Library workspace link change would reduce the current editor's own access; the owner must make this change`,
                      })
                    : (0, wn.jsx)(o, {
                        id: `librarySharing.link.failed`,
                        defaultMessage: `Couldn't update link access. Try again`,
                        description: `Error toast when saving workspace link access for a Library file or folder fails; the prior access policy remains in place`,
                      }),
                  { errorAnalytics: { toastId: `linkAccess.onError` } },
                ));
      }),
      (t[35] = i),
      (t[36] = m),
      (t[37] = y),
      (t[38] = S),
      (t[39] = x),
      (t[40] = g),
      (t[41] = B))
    : (B = t[41]);
  let V;
  t[42] !== I || t[43] !== L || t[44] !== R || t[45] !== z || t[46] !== B
    ? ((V = {
        mutationKey: I,
        networkMode: `always`,
        retry: !1,
        mutationFn: L,
        onMutate: R,
        onSuccess: z,
        onError: B,
      }),
      (t[42] = I),
      (t[43] = L),
      (t[44] = R),
      (t[45] = z),
      (t[46] = B),
      (t[47] = V))
    : (V = t[47]);
  let { mutateAsync: ie, isPending: ae } = d(V),
    H;
  t[48] !== P || t[49] !== u || t[50] !== m || t[51] !== ie || t[52] !== y || t[53] !== E || t[54] !== _
    ? ((H = function (e) {
        if (!m() || u || !P) return;
        let t =
          e.mode === E?.mode && (e.mode !== `workspace` || (E?.mode === `workspace` && e.role === E.role));
        (k(t ? null : e),
          y(
            `link`,
            t
              ? null
              : { kind: `link`, save: () => ie({ next: e, observedState: _ }).then(() => (k(null), !0), bn) },
          ));
      }),
      (t[48] = P),
      (t[49] = u),
      (t[50] = m),
      (t[51] = ie),
      (t[52] = y),
      (t[53] = E),
      (t[54] = _),
      (t[55] = H))
    : (H = t[55]);
  let U = H,
    W = he,
    se;
  t[56] !== P ||
  t[57] !== w ||
  t[58] !== u ||
  t[59] !== ae ||
  t[60] !== A ||
  t[61] !== b ||
  t[62] !== E ||
  t[63] !== g.accountId ||
  t[64] !== U ||
  t[65] !== v
    ? ((se =
        A == null
          ? (0, wn.jsx)(`span`, {
              className: `text-tertiary`,
              children: (0, wn.jsx)(o, {
                id: `librarySharing.link.unavailable`,
                defaultMessage: `Link access unavailable`,
                description: `Shown when the backend's Library link-access policy cannot safely be interpreted; this does not claim the file is private`,
              }),
            })
          : (0, wn.jsx)(Ge, {
              disabled: !P || u || b || ae,
              options: [
                { value: `collaborators_only`, mode: `restricted`, icon: (0, wn.jsx)(N, {}) },
                { value: `workspace`, mode: `workspace`, icon: (0, wn.jsx)(j, {}), hidden: !w },
              ],
              workspaceName: v,
              value: A.mode,
              onChange:
                P || b
                  ? (e) => {
                      u ||
                        ae ||
                        e === A.mode ||
                        (e === `collaborators_only`
                          ? U({ mode: e })
                          : w &&
                            U({
                              mode: e,
                              role: E?.mode === `workspace` ? E.role : `viewer`,
                              workspaceId: g.accountId,
                            }));
                    }
                  : void 0,
            })),
      (t[56] = P),
      (t[57] = w),
      (t[58] = u),
      (t[59] = ae),
      (t[60] = A),
      (t[61] = b),
      (t[62] = E),
      (t[63] = g.accountId),
      (t[64] = U),
      (t[65] = v),
      (t[66] = se))
    : (se = t[66]);
  let ce =
      A?.mode === `workspace` && P && w && F != null && F.length > 1
        ? (0, wn.jsx)(Ne, {
            indicatorVariant: `checkmark`,
            disabled: u || ae,
            options: F.map(yn),
            renderLabel: vn,
            value: A.role,
            variant: `inline`,
            onChange: (e) => {
              !u && !ae && w && (e === `viewer` || e === `editor`) && e !== A.role && U({ ...A, role: e });
            },
          })
        : null,
    le;
  t[67] !== P || t[68] !== w || t[69] !== A || t[70] !== F
    ? ((le =
        A?.mode === `workspace` && (!P || !w || F == null || F.length < 2)
          ? (0, wn.jsx)(`span`, {
              className: `pe-2 text-sm text-tertiary`,
              children: (0, wn.jsx)(qe, { permission: A.role }),
            })
          : null),
      (t[67] = P),
      (t[68] = w),
      (t[69] = A),
      (t[70] = F),
      (t[71] = le))
    : (le = t[71]);
  let G;
  t[72] !== se || t[73] !== ce || t[74] !== le
    ? ((G = (0, wn.jsxs)(`div`, {
        className: `flex items-center justify-between gap-3 text-sm`,
        children: [se, ce, le],
      })),
      (t[72] = se),
      (t[73] = ce),
      (t[74] = le),
      (t[75] = G))
    : (G = t[75]);
  let ue;
  return (
    t[76] !== W || t[77] !== G
      ? ((ue = (0, wn.jsx)(W, { kind: `link`, children: G })), (t[76] = W), (t[77] = G), (t[78] = ue))
      : (ue = t[78]),
    ue
  );
}
function vn(e) {
  return (0, wn.jsx)(qe, { permission: e });
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
    ((Sn = I()),
      xe(),
      s(),
      P(),
      g(),
      (Cn = V()),
      k(),
      b(),
      M(),
      L(),
      Ue(),
      Ce(),
      gt(),
      Ke(),
      F(),
      Ye(),
      H(),
      Tt(),
      nt(),
      (wn = R()));
  }))();
}
function En(e) {
  let t = (0, Hn.c)(60),
    {
      account: n,
      analytics: i,
      api: a,
      canRequest: s,
      children: l,
      disabled: u,
      isCurrentSession: f,
      roster: p,
      renderDialog: g,
      sharingScope: _,
      sharingState: v,
    } = e,
    y = c(r),
    b = te(),
    x;
  t[0] !== i.shareSessionId || t[1] !== b || t[2] !== _
    ? ((x = () => pt(b, _, `requester-access-requests`, i.shareSessionId)),
      (t[0] = i.shareSessionId),
      (t[1] = b),
      (t[2] = _),
      (t[3] = x))
    : (x = t[3]);
  let [S] = (0, Un.useState)(x),
    C = n.structure === `workspace`,
    E = C && s,
    D;
  t[4] === E ? (D = t[5]) : ((D = { enabled: E }), (t[4] = E), (t[5] = D));
  let { data: O, isError: k } = ae(be, _.accountId, D),
    j = Pe(n, O, k),
    { canSearchMembers: M } = j,
    N = s && (!C || M),
    ne;
  t[6] === a
    ? (ne = t[7])
    : ((ne = (e) => {
        let { pageParam: t, signal: n } = e;
        return a.getRequesterAccessRequests({ cursor: t, signal: n });
      }),
      (t[6] = a),
      (t[7] = ne));
  let {
      data: re,
      isError: P,
      isFetching: F,
      isSuccess: I,
      hasNextPage: L,
      fetchNextPage: R,
      refetch: z,
    } = m({
      enabled: N,
      queryKey: [...at(_, `requester-access-requests`), `pages`, S],
      queryFn: ne,
      initialPageParam: null,
      getNextPageParam: Vn,
      staleTime: h.THIRTY_SECONDS,
      retry: !1,
    }),
    V =
      N &&
      I &&
      !P &&
      re?.pages.every((e) => e.requests.every((e) => Y(e.resource_owner) === Y(v.owner.principal)))
        ? re
        : void 0,
    ie = V?.pages.flatMap(Bn),
    H;
  t[8] === V ? (H = t[9]) : ((H = V != null && V.pages.at(-1)?.next_cursor == null), (t[8] = V), (t[9] = H));
  let U = H,
    W = new Map(V?.pages.flatMap(Rn)),
    ce = p?.owner.principal_id === v.owner.principal.principal_id,
    le =
      ce && p?.collaborators.some(Ln)
        ? st(
            ie?.flatMap((e) =>
              e.recipients.some(
                (t) =>
                  t.principal_type === `user` &&
                  $e(e, t) === `satisfied` &&
                  !p.collaborators.some((e) => {
                    let { principal: n } = e;
                    return Y(n) === Y(t);
                  }),
              )
                ? [e.request_id]
                : [],
            ) ?? [],
          )
        : [],
    {
      data: G,
      isError: ue,
      isFetching: K,
      isSuccess: fe,
    } = T({
      enabled: N && le.length > 0,
      queryKey: at(_, `collaborators`, le),
      queryFn: (e) => {
        let { signal: t } = e;
        return a.getCollaborators({ signal: t, accessRequestIds: le });
      },
      staleTime: h.THIRTY_SECONDS,
      retry: !1,
    }),
    me = ce ? p : void 0;
  le.length > 0 && (me = fe && !ue && G?.owner.principal_id === v.owner.principal.principal_id ? G : void 0);
  let [ge, q] = (0, Un.useState)(`viewer`),
    _e;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((_e = []), (t[10] = _e)) : (_e = t[10]);
  let [ve, ye] = (0, Un.useState)(_e),
    [xe, Se] = (0, Un.useState)(``),
    Ce;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ce = []), (t[11] = Ce)) : (Ce = t[11]);
  let [we, Te] = (0, Un.useState)(Ce),
    [Ee, De] = (0, Un.useState)(In),
    Oe = [...(ie ?? []), ...we],
    ke = Oe.flatMap((e) => (e.requested_role_id === ut[_.resourceKind][ge] ? e.recipients : [])),
    Ae = new Set([
      Y(v.owner.principal),
      Y(v.viewer.principal),
      ...(me?.collaborators.map(Fn) ?? []),
      ...ke.map(Y),
    ]),
    Me = new Set(
      [
        v.owner.email,
        v.viewer.email,
        ...(me?.collaborators.map(Pn) ?? []),
        ...ke.map((e) => W.get(Y(e))?.email),
        ...Ee[ge],
      ].flatMap(Nn),
    ),
    Ne = Ie(ve, Me, Ae),
    J;
  t[12] === _ ? (J = t[13]) : ((J = at(_, `state`)), (t[12] = _), (t[13] = J));
  let Fe;
  t[14] !== i || t[15] !== f || t[16] !== y
    ? ((Fe = (e) => {
        let { invitees: t, role: n } = e,
          r = crypto.randomUUID();
        return (
          f() &&
            Je(y, i, {
              action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS,
              outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
              operationId: r,
              recipientCount: t.length,
              recipientKind: Xe(t.map(jn)),
              role: Ze(n),
            }),
          r
        );
      }),
      (t[14] = i),
      (t[15] = f),
      (t[16] = y),
      (t[17] = Fe))
    : (Fe = t[17]);
  let Le;
  t[18] !== i || t[19] !== f || t[20] !== b || t[21] !== y || t[22] !== _
    ? ((Le = async (e, t, n) => {
        let { invitees: r, role: a } = t;
        f() &&
          (Te((t) => [...t.filter((t) => t.request_id !== e.request_id || t.created_at !== e.created_at), e]),
          De((e) => ({ ...e, [a]: new Set([...e[a], ...r.flatMap(An)]) })),
          ye((e) => e.filter((e) => !r.some((t) => t.id === e.id))),
          Je(y, i, {
            action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS,
            outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED,
            operationId: n,
            recipientCount: r.length,
            recipientKind: Xe(r.map(kn)),
            succeededRecipientCount: r.length,
            role: Ze(a),
          }),
          y
            .get(ee)
            .success(
              (0, Q.jsx)(o, {
                id: `librarySharing.request.sent`,
                defaultMessage: `Request sent to the owner`,
                description: `Success toast after a Library reader asks the owner to grant other people access`,
              }),
            ),
          await Ct(b, _));
      }),
      (t[18] = i),
      (t[19] = f),
      (t[20] = b),
      (t[21] = y),
      (t[22] = _),
      (t[23] = Le))
    : (Le = t[23]);
  let Re;
  t[24] !== i || t[25] !== f || t[26] !== y
    ? ((Re = (e, t, n) => {
        let { invitees: r, role: a } = t;
        f() &&
          (Je(y, i, {
            action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_REQUEST_ACCESS,
            outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
            operationId: n,
            recipientCount: r.length,
            recipientKind: Xe(r.map(On)),
            failedRecipientCount: r.length,
            role: Ze(a),
            error: Qe(e),
          }),
          y
            .get(ee)
            .danger(
              (0, Q.jsx)(o, {
                id: `librarySharing.request.failed`,
                defaultMessage: `Couldn't send the access request. Try again`,
                description: `Error toast after submitting a Library access request fails; selected recipients remain available to retry`,
              }),
              { errorAnalytics: { toastId: `librarySharing.request.failed` } },
            ));
      }),
      (t[24] = i),
      (t[25] = f),
      (t[26] = y),
      (t[27] = Re))
    : (Re = t[27]);
  let { mutate: ze, isPending: Ve } = d({
      mutationKey: J,
      networkMode: `always`,
      retry: !1,
      mutationFn: (e) => {
        let { invitees: t, role: n } = e;
        if (!f() || !N) throw Error(`Library access requests are not permitted`);
        return a.createAccessRequest({ recipients: t.map(Mn), role: n });
      },
      onMutate: Fe,
      onSuccess: Le,
      onError: Re,
    }),
    He = u || Ve || F || K || !N || !U || me?.complete !== !0,
    Ue = !He && ve.length > 0 && ve.every(Dn) && !Ne,
    We = new Map();
  for (let e of Oe)
    for (let t of e.recipients) {
      let n = it({ request: e, recipient: t }),
        r = We.get(n);
      (r == null || $e(r.request, t) === `pending`) && We.set(n, { request: e, recipient: t });
    }
  let Ge = [...We].filter((e) => {
      let [, t] = e,
        { recipient: n } = t;
      return !me?.collaborators.some((e) => {
        let { principal: t } = e;
        return Y(t) === Y(n);
      });
    }),
    Ke = me?.collaborators.filter((e) => {
      let { principal: t } = e;
      return (
        Y(t) !== Y(v.owner.principal) &&
        Y(t) !== Y(v.viewer.principal) &&
        !p?.collaborators.some((e) => Y(e.principal) === Y(t))
      );
    }),
    Ye;
  t[28] !== Ue || t[29] !== He || t[30] !== f || t[31] !== ze || t[32] !== ge || t[33] !== ve
    ? ((Ye = () => {
        f() && !He && Ue && (Se(``), ze({ invitees: ve, role: ge }));
      }),
      (t[28] = Ue),
      (t[29] = He),
      (t[30] = f),
      (t[31] = ze),
      (t[32] = ge),
      (t[33] = ve),
      (t[34] = Ye))
    : (Ye = t[34]);
  let tt = N
      ? (0, Q.jsx)(B, {
          type: `submit`,
          color: `primary`,
          size: `xl`,
          disabled: !Ue,
          loading: Ve,
          children: (0, Q.jsx)(o, {
            id: `librarySharing.requestInvite`,
            defaultMessage: `Invite`,
            description: `Button asking a Library item's owner to grant selected people access; it does not grant permission immediately`,
          }),
        })
      : null,
    nt = N
      ? (0, Q.jsxs)(A, {
          className: `gap-4`,
          children: [
            (0, Q.jsx)(w, {
              variant: `privacyNotice`,
              title: (0, Q.jsx)(o, {
                id: `librarySharing.request.approvalRequired`,
                defaultMessage: `Owner must approve invites first`,
                description: `Banner explaining that invitations require the Library owner's approval`,
              }),
              content:
                et(v.viewer.role_id, _.resourceKind) === `viewer`
                  ? (0, Q.jsx)(o, {
                      id: `librarySharing.request.viewerRestriction`,
                      defaultMessage: `You’re a viewer and can’t manage access`,
                      description: `Explanation that a Library viewer cannot manage sharing permissions`,
                    })
                  : (0, Q.jsx)(o, {
                      id: `librarySharing.request.recipientRestriction`,
                      defaultMessage: `You don’t have permission to manage access`,
                      description: `Explanation that the current Library collaborator cannot manage sharing permissions`,
                    }),
            }),
            (0, Q.jsx)(Be, {
              accountId: _.accountId,
              currentPrincipalId: _.accountUserId,
              currentEmail: v.viewer.email ?? void 0,
              ...j,
              disabled: He,
              existingPrincipalKeys: Ae,
              existingEmails: Me,
              query: xe,
              onQueryChange: Se,
              selected: ve,
              resolveRecipient: a.resolveRecipient,
              onChange: ye,
              role: ge,
              allowedRoles: [`viewer`, `editor`],
              onRoleChange: (e) => {
                e !== `commenter` && q(e);
              },
            }),
            Ne
              ? (0, Q.jsx)(`p`, {
                  className: `text-sm text-danger`,
                  role: `alert`,
                  children: (0, Q.jsx)(o, {
                    id: `librarySharing.invite.alreadyAdded`,
                    defaultMessage: `This person already has access or is selected`,
                    description: `Validation error when a Library invite includes an existing collaborator or duplicate recipient`,
                  }),
                })
              : null,
          ],
        })
      : null,
    rt =
      (N && (P || (le.length > 0 && (ue || (fe && me?.complete !== !0))))) || (C && s && k)
        ? (0, Q.jsx)(A, {
            children: (0, Q.jsx)(w, {
              type: `error`,
              role: `alert`,
              content: (0, Q.jsx)(o, {
                id: `librarySharing.access.incomplete`,
                defaultMessage: `Couldn't load all access details. Some sharing actions are unavailable`,
                description: `Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled`,
              }),
              primaryCtaText: (0, Q.jsx)(o, {
                id: `librarySharing.retry`,
                defaultMessage: `Retry`,
                description: `Button retrying a failed Library sharing data request`,
              }),
              onPrimaryCtaClick: () => {
                f() &&
                  (Ct(b, _), C && b.invalidateQueries({ queryKey: [`accounts`, `settings`, _.accountId] }));
              },
            }),
          })
        : null,
    ot;
  t[35] !== u ||
  t[36] !== R ||
  t[37] !== V ||
  t[38] !== L ||
  t[39] !== U ||
  t[40] !== F ||
  t[41] !== f ||
  t[42] !== z
    ? ((ot =
        V != null && !U
          ? (0, Q.jsxs)(A, {
              children: [
                (0, Q.jsx)(`p`, {
                  className: `text-sm text-tertiary`,
                  children: (0, Q.jsx)(o, {
                    id: `librarySharing.request.historyIncomplete`,
                    defaultMessage: `Load the remaining requests before sending another request`,
                    description: `Explanation when additional Library access-request history must load to avoid requesting the same access twice`,
                  }),
                }),
                (0, Q.jsx)(B, {
                  size: `xl`,
                  type: `button`,
                  color: `secondary`,
                  disabled: u || F,
                  loading: F,
                  onClick: () => {
                    f() && (L ? R() : z());
                  },
                  children: (0, Q.jsx)(o, {
                    id: `librarySharing.request.loadMoreHistory`,
                    defaultMessage: `Load requests`,
                    description: `Button loading the next page of the viewer's access-request history in a Library sharing dialog`,
                  }),
                }),
              ],
            })
          : null),
      (t[35] = u),
      (t[36] = R),
      (t[37] = V),
      (t[38] = L),
      (t[39] = U),
      (t[40] = F),
      (t[41] = f),
      (t[42] = z),
      (t[43] = ot))
    : (ot = t[43]);
  let ct = he,
    lt =
      V == null
        ? null
        : Ke?.map((e) =>
            (0, Q.jsx)(
              se,
              {
                avatar: (0, Q.jsx)(je, {
                  size: `group`,
                  avatarUrl: e.avatar_url,
                  colorKey: e.principal.principal_id,
                  name: e.display_name ?? e.email ?? null,
                }),
                label:
                  e.display_name ??
                  e.email ??
                  (0, Q.jsx)(o, {
                    id: `librarySharing.collaboratorFallback`,
                    defaultMessage: `Collaborator`,
                    description: `Fallback display name when a Library collaborator has no returned name or email`,
                  }),
                secondaryLabel: e.email,
                trailingContent: (0, Q.jsx)(`span`, {
                  className: `text-sm text-tertiary`,
                  children: (0, Q.jsx)(qe, { permission: et(e.role_id, _.resourceKind) }),
                }),
              },
              Y(e.principal),
            ),
          ),
    dt =
      V == null
        ? null
        : Ge.map((e) => {
            let [t, n] = e,
              { request: r, recipient: i } = n,
              a = W.get(Y(i));
            return (0, Q.jsx)(
              se,
              {
                avatar: (0, Q.jsx)(`span`, {
                  className: `opacity-50`,
                  children: (0, Q.jsx)(je, {
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
                    (0, Q.jsx)(o, {
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
                    (0, Q.jsx)(pe, {
                      className: `whitespace-nowrap`,
                      children: (0, Q.jsx)(o, {
                        id: `librarySharing.request.status`,
                        defaultMessage: `{status, select, approved {Approved} declined {Declined} satisfied {Already had access} other {Pending}}`,
                        description: `Status of a Library access request for a recipient; status is approved, declined, satisfied (access already existed), or pending`,
                        values: { status: $e(r, i) },
                      }),
                    }),
                    (0, Q.jsx)(`span`, {
                      className: `pe-2 text-sm text-tertiary`,
                      children: (0, Q.jsx)(qe, { permission: et(r.requested_role_id, _.resourceKind) }),
                    }),
                  ],
                }),
              },
              t,
            );
          }),
    ft;
  t[44] !== ct || t[45] !== l || t[46] !== lt || t[47] !== dt
    ? ((ft = (0, Q.jsxs)(ct, { children: [l, lt, dt] })),
      (t[44] = ct),
      (t[45] = l),
      (t[46] = lt),
      (t[47] = dt),
      (t[48] = ft))
    : (ft = t[48]);
  let mt;
  t[49] !== rt || t[50] !== ot || t[51] !== ft
    ? ((mt = (0, Q.jsxs)(Q.Fragment, { children: [rt, ot, ft] })),
      (t[49] = rt),
      (t[50] = ot),
      (t[51] = ft),
      (t[52] = mt))
    : (mt = t[52]);
  let ht;
  return (
    t[53] !== Ve || t[54] !== g || t[55] !== Ye || t[56] !== tt || t[57] !== nt || t[58] !== mt
      ? ((ht = g({ isPending: Ve, onSubmit: Ye, footer: tt, headerContent: nt, content: mt })),
        (t[53] = Ve),
        (t[54] = g),
        (t[55] = Ye),
        (t[56] = tt),
        (t[57] = nt),
        (t[58] = mt),
        (t[59] = ht))
      : (ht = t[59]),
    ht
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
  return Y(t);
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
  return [Y(e.principal), e];
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
    ((Hn = I()),
      xe(),
      l(),
      f(),
      s(),
      E(),
      P(),
      g(),
      (Un = V()),
      k(),
      Se(),
      Ae(),
      me(),
      a(),
      D(),
      M(),
      L(),
      W(),
      Ce(),
      Le(),
      Ke(),
      i(),
      Ye(),
      Tt(),
      nt(),
      ft(),
      Re(),
      J(),
      (Q = R()));
  }))();
}
function Gn(e) {
  let t = (0, tr.c)(39),
    {
      accountId: n,
      authenticatedUserId: r,
      fileName: i,
      libraryFileId: a,
      resourceKind: s,
      sharedDirectoryId: c,
      shareSessionId: l,
      showOrganizationSharing: u,
      onClose: d,
    } = e,
    f = u === void 0 || u,
    { data: p, isLoading: m, isError: h, refetch: g } = ue(),
    _,
    v,
    y,
    b,
    x;
  if (
    t[0] !== n ||
    t[1] !== p?.accounts ||
    t[2] !== i ||
    t[3] !== h ||
    t[4] !== m ||
    t[5] !== a ||
    t[6] !== d ||
    t[7] !== g ||
    t[8] !== s
  ) {
    x = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      if (((v = p?.accounts?.find((e) => e.id === n)), v == null || h)) {
        let e;
        t[14] === i
          ? (e = t[15])
          : ((e = (0, $.jsx)(o, {
              id: `librarySharing.fileTitle`,
              defaultMessage: `Share {fileName}`,
              description: `Title of the Library file or folder sharing dialog; fileName is the item's title`,
              values: { fileName: i },
            })),
            (t[14] = i),
            (t[15] = e));
        let n;
        t[16] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(o, {
              id: `librarySharing.close`,
              defaultMessage: `Close`,
              description: `Button closing the Library sharing dialog`,
            })),
            (t[16] = n))
          : (n = t[16]);
        let r;
        t[17] === d
          ? (r = t[18])
          : ((r = (0, $.jsx)(B, { size: `xl`, type: `button`, color: `secondary`, onClick: d, children: n })),
            (t[17] = d),
            (t[18] = r));
        let a, s;
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((a = (0, $.jsx)(o, {
              id: `librarySharing.sessionUnavailable`,
              defaultMessage: `Sharing is unavailable in this session. Reopen the dialog in the original account`,
              description: `Error when an open Library sharing dialog no longer matches the authenticated account, or required account information is unavailable; no file data is shown`,
            })),
            (s = (0, $.jsx)(o, {
              id: `librarySharing.retry`,
              defaultMessage: `Retry`,
              description: `Button retrying a failed Library sharing data request`,
            })),
            (t[19] = a),
            (t[20] = s))
          : ((a = t[19]), (s = t[20]));
        let c;
        t[21] === g
          ? (c = t[22])
          : ((c = (0, $.jsx)(A, {
              children: (0, $.jsx)(w, {
                type: `error`,
                role: `alert`,
                content: a,
                primaryCtaText: s,
                onPrimaryCtaClick: () => void g(),
              }),
            })),
            (t[21] = g),
            (t[22] = c));
        let l;
        (t[23] !== m || t[24] !== e || t[25] !== r || t[26] !== c
          ? ((l = (0, $.jsx)(Te, { isLoading: m, title: e, footer: r, children: c })),
            (t[23] = m),
            (t[24] = e),
            (t[25] = r),
            (t[26] = c),
            (t[27] = l))
          : (l = t[27]),
          (x = l));
        break bb0;
      }
      ((y = {
        accountId: n,
        accountUserId: v.structure === `personal` ? v.account_user_id.split(`__`)[0] : v.account_user_id,
        libraryFileId: a,
        resourceKind: s,
      }),
        (_ = Kn),
        (b = JSON.stringify(at(y, `state`))));
    }
    ((t[0] = n),
      (t[1] = p?.accounts),
      (t[2] = i),
      (t[3] = h),
      (t[4] = m),
      (t[5] = a),
      (t[6] = d),
      (t[7] = g),
      (t[8] = s),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x));
  } else ((_ = t[9]), (v = t[10]), (y = t[11]), (b = t[12]), (x = t[13]));
  if (x !== Symbol.for(`react.early_return_sentinel`)) return x;
  let S;
  return (
    t[28] !== _ ||
    t[29] !== v ||
    t[30] !== r ||
    t[31] !== i ||
    t[32] !== d ||
    t[33] !== l ||
    t[34] !== c ||
    t[35] !== y ||
    t[36] !== f ||
    t[37] !== b
      ? ((S = (0, $.jsx)(
          _,
          {
            account: v,
            authenticatedUserId: r,
            fileName: i,
            sharingScope: y,
            sharedDirectoryId: c,
            shareSessionId: l,
            showOrganizationSharing: f,
            onClose: d,
          },
          b,
        )),
        (t[28] = _),
        (t[29] = v),
        (t[30] = r),
        (t[31] = i),
        (t[32] = d),
        (t[33] = l),
        (t[34] = c),
        (t[35] = y),
        (t[36] = f),
        (t[37] = b),
        (t[38] = S))
      : (S = t[38]),
    S
  );
}
function Kn(e) {
  let t = (0, tr.c)(263),
    {
      account: n,
      authenticatedUserId: i,
      fileName: a,
      sharingScope: s,
      sharedDirectoryId: l,
      shareSessionId: d,
      showOrganizationSharing: f,
      onClose: p,
    } = e,
    m = c(r),
    h = te(),
    g;
  t[0] !== h || t[1] !== s
    ? ((g = () =>
        new Set(
          h
            .getQueryCache()
            .findAll({ queryKey: at(s) })
            .filter($n)
            .map(Qn),
        )),
      (t[0] = h),
      (t[1] = s),
      (t[2] = g))
    : (g = t[2]);
  let [_] = (0, nr.useState)(g),
    v = n.structure === `workspace`,
    b;
  t[3] === v ? (b = t[4]) : ((b = { enabled: v }), (t[3] = v), (t[4] = b));
  let { data: x, isError: S } = ae(be, s.accountId, b),
    E;
  t[5] !== n || t[6] !== x || t[7] !== S
    ? ((E = Pe(n, x, S)), (t[5] = n), (t[6] = x), (t[7] = S), (t[8] = E))
    : (E = t[8]);
  let { canSearchMembers: D } = E,
    O = C(le),
    k;
  t[9] !== i || t[10] !== m || t[11] !== s.accountId
    ? ((k = () => _t(m, s.accountId, i) && m.get(_e)),
      (t[9] = i),
      (t[10] = m),
      (t[11] = s.accountId),
      (t[12] = k))
    : (k = t[12]);
  let j = k,
    M = (0, nr.useRef)(0),
    [N, ne] = (0, nr.useState)(0),
    P;
  t[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = new Map()), (t[13] = P)) : (P = t[13]);
  let [F, I] = (0, nr.useState)(P),
    L;
  t[14] === j
    ? (L = t[15])
    : ((L = () => {
        if (!j()) throw Error(`Library sharing session changed`);
      }),
      (t[14] = j),
      (t[15] = L));
  let R = ht({ scope: s, assertCurrentScope: L }),
    z = dt(s, R).state,
    {
      data: V,
      isError: H,
      isFetching: U,
      isFetchedAfterMount: W,
      fetchStatus: ce,
      refetch: G,
    } = T({
      ...z,
      staleTime: z.staleTime,
      queryFn: async (e) => {
        let { signal: t } = e;
        try {
          return await R.getSharingState(t);
        } catch (e) {
          let n = e;
          throw (!t.aborted && j() && ((M.current += 1), I(new Map())), n);
        }
      },
    }),
    ue;
  t[16] !== _ || t[17] !== V || t[18] !== H || t[19] !== ce || t[20] !== W
    ? ((ue = (W || _.has(`state`)) && ce !== `paused` && !H ? V : void 0),
      (t[16] = _),
      (t[17] = V),
      (t[18] = H),
      (t[19] = ce),
      (t[20] = W),
      (t[21] = ue))
    : (ue = t[21]);
  let K = ue,
    fe = dt(s, R, K),
    pe = K?.owner.principal.principal_id === s.accountUserId,
    me;
  t[22] !== pe || t[23] !== O || t[24] !== s || t[25] !== K
    ? ((me =
        O &&
        (pe ||
          rt({ sharingState: K, scope: s, legacyOwner: void 0, managementAvailable: O }).canManageAccess)),
      (t[22] = pe),
      (t[23] = O),
      (t[24] = s),
      (t[25] = K),
      (t[26] = me))
    : (me = t[26]);
  let q = me,
    ve = K != null && q,
    xe;
  t[27] !== R || t[28] !== j || t[29] !== fe.shares.queryFn || t[30] !== K
    ? ((xe =
        K == null
          ? fe.shares.queryFn
          : async (e) => {
              let { signal: t } = e;
              try {
                return await R.getShares(K.owner.principal, t);
              } catch (e) {
                let n = e;
                throw (!t.aborted && j() && ((M.current += 1), I(Xn)), n);
              }
            }),
      (t[27] = R),
      (t[28] = j),
      (t[29] = fe.shares.queryFn),
      (t[30] = K),
      (t[31] = xe))
    : (xe = t[31]);
  let Se;
  t[32] !== fe.shares || t[33] !== ve || t[34] !== xe
    ? ((Se = { enabled: ve, ...fe.shares, staleTime: fe.shares.staleTime, queryFn: xe }),
      (t[32] = fe.shares),
      (t[33] = ve),
      (t[34] = xe),
      (t[35] = Se))
    : (Se = t[35]);
  let { data: Ce, isError: we, isFetching: Oe, isFetchedAfterMount: ke, fetchStatus: Ae } = T(Se),
    Ne;
  t[36] !== _ || t[37] !== Ce || t[38] !== we || t[39] !== Ae || t[40] !== ke || t[41] !== K?.owner
    ? ((Ne =
        (ke || _.has(`shares`)) &&
        Ae !== `paused` &&
        !we &&
        Ce?.owner.principal_id === K?.owner.principal.principal_id
          ? Ce
          : void 0),
      (t[36] = _),
      (t[37] = Ce),
      (t[38] = we),
      (t[39] = Ae),
      (t[40] = ke),
      (t[41] = K?.owner),
      (t[42] = Ne))
    : (Ne = t[42]);
  let J = Ne,
    Le = J?.owner,
    Re;
  t[43] !== O || t[44] !== s || t[45] !== K || t[46] !== Le
    ? ((Re = rt({ sharingState: K, scope: s, legacyOwner: Le, managementAvailable: O })),
      (t[43] = O),
      (t[44] = s),
      (t[45] = K),
      (t[46] = Le),
      (t[47] = Re))
    : (Re = t[47]);
  let { canInvite: Be, canManageAccess: Ve } = Re,
    He;
  t[48] !== Ve || t[49] !== fe.effectiveAccess
    ? ((He = { enabled: Ve, ...fe.effectiveAccess, staleTime: fe.effectiveAccess.staleTime }),
      (t[48] = Ve),
      (t[49] = fe.effectiveAccess),
      (t[50] = He))
    : (He = t[50]);
  let { data: Ue, isError: We, error: Ge, isFetching: Ke, isFetchedAfterMount: Ye, fetchStatus: Xe } = T(He),
    $e = K != null && !q,
    tt;
  t[51] !== fe.collaborators || t[52] !== $e
    ? ((tt = { enabled: $e, ...fe.collaborators, staleTime: fe.collaborators.staleTime }),
      (t[51] = fe.collaborators),
      (t[52] = $e),
      (t[53] = tt))
    : (tt = t[53]);
  let { data: nt, isError: it, error: st, isFetching: ct, isFetchedAfterMount: lt, fetchStatus: ft } = T(tt),
    pt;
  t[54] !== _ || t[55] !== nt?.owner || t[56] !== it || t[57] !== ft || t[58] !== lt || t[59] !== K?.owner
    ? ((pt =
        !it &&
        (lt || _.has(`collaborators`)) &&
        ft !== `paused` &&
        nt?.owner.principal_id === K?.owner.principal.principal_id),
      (t[54] = _),
      (t[55] = nt?.owner),
      (t[56] = it),
      (t[57] = ft),
      (t[58] = lt),
      (t[59] = K?.owner),
      (t[60] = pt))
    : (pt = t[60]);
  let mt = pt,
    gt = mt ? nt?.collaborators : void 0,
    vt = K?.viewer.role_id ?? ``,
    bt;
  t[61] !== s.resourceKind || t[62] !== vt
    ? ((bt = et(vt, s.resourceKind)), (t[61] = s.resourceKind), (t[62] = vt), (t[63] = bt))
    : (bt = t[63]);
  let xt = bt,
    Ct;
  t[64] !== s.accountUserId || t[65] !== s.resourceKind || t[66] !== xt || t[67] !== gt
    ? ((Ct =
        xt === `viewer` &&
        gt?.some((e) => {
          let { principal: t, role_id: n } = e;
          return (
            t.principal_type === `user` &&
            t.principal_id === s.accountUserId &&
            et(n, s.resourceKind) === `commenter`
          );
        })
          ? `commenter`
          : xt),
      (t[64] = s.accountUserId),
      (t[65] = s.resourceKind),
      (t[66] = xt),
      (t[67] = gt),
      (t[68] = Ct))
    : (Ct = t[68]);
  let wt = Ct,
    Tt;
  t[69] !== Ue || t[70] !== We || t[71] !== Xe || t[72] !== Ye || t[73] !== _ || t[74] !== K?.owner
    ? ((Tt =
        (Ye || _.has(`effective-access`)) &&
        Xe !== `paused` &&
        !We &&
        Ue?.owner.principal_id === K?.owner.principal.principal_id
          ? Ue
          : void 0),
      (t[69] = Ue),
      (t[70] = We),
      (t[71] = Xe),
      (t[72] = Ye),
      (t[73] = _),
      (t[74] = K?.owner),
      (t[75] = Tt))
    : (Tt = t[75]);
  let Dt = Tt,
    [Ot, kt] = (0, nr.useState)(!1),
    [At, jt] = (0, nr.useState)(!1),
    Mt;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Mt = (e, t) => {
        I((n) => {
          let r = new Map(n);
          return (t == null ? r.delete(e) : r.set(e, t), r);
        });
      }),
      (t[76] = Mt))
    : (Mt = t[76]);
  let Nt = Mt,
    Pt;
  t[77] === s ? (Pt = t[78]) : ((Pt = at(s, `state`)), (t[77] = s), (t[78] = Pt));
  let X;
  t[79] === Pt ? (X = t[80]) : ((X = { mutationKey: Pt }), (t[79] = Pt), (t[80] = X));
  let Ft = ie(X),
    It = Ve && J != null && Dt != null && (At || (!U && !Oe && !Ke)),
    Lt = It && Dt?.complete === !0,
    Rt;
  t[81] !== s.accountUserId || t[82] !== Dt?.collaborators
    ? ((Rt = Dt?.collaborators.find((e) => {
        let { principal: t } = e;
        return t.principal_type === `user` && t.principal_id === s.accountUserId;
      })),
      (t[81] = s.accountUserId),
      (t[82] = Dt?.collaborators),
      (t[83] = Rt))
    : (Rt = t[83]);
  let zt = Rt,
    Bt;
  t[84] !== zt ||
  t[85] !== Ke ||
  t[86] !== At ||
  t[87] !== s.resourceKind ||
  t[88] !== K?.workspace_invitation_id ||
  t[89] !== Dt?.complete
    ? ((Bt =
        (At || !Ke) &&
        Dt?.complete === !0 &&
        zt != null &&
        (zt.direct_role_id === ut[s.resourceKind].editor ||
          [zt.source, zt.group_source].some(
            (e) =>
              e != null &&
              e.invitation_id !== K?.workspace_invitation_id &&
              (e.principal.principal_type === `user` || e.principal.principal_type === `group`) &&
              ((e.resource.resource_type === `library_file` && e.role_id === ut.file.editor) ||
                (e.resource.resource_type === `library_folder` && e.role_id === ut.folder.editor)),
          ))),
      (t[84] = zt),
      (t[85] = Ke),
      (t[86] = At),
      (t[87] = s.resourceKind),
      (t[88] = K?.workspace_invitation_id),
      (t[89] = Dt?.complete),
      (t[90] = Bt))
    : (Bt = t[90]);
  let Ht = Bt,
    Ut = Ft > 0 || Ot || At,
    Wt = Ut || U || Oe || Ke || ct,
    Gt;
  if (
    t[91] !== Be ||
    t[92] !== q ||
    t[93] !== Lt ||
    t[94] !== F ||
    t[95] !== Ue ||
    t[96] !== J ||
    t[97] !== K
  ) {
    let e = K == null ? void 0 : ze(K, J, Ue);
    ((Gt =
      !q ||
      [...F.values()].some(
        (t) =>
          t.kind === `invite` &&
          (!Be ||
            !Lt ||
            e == null ||
            t.invitees.some(Yn) ||
            Ie(t.invitees, e.existingEmails, e.existingPrincipalKeys)),
      )),
      (t[91] = Be),
      (t[92] = q),
      (t[93] = Lt),
      (t[94] = F),
      (t[95] = Ue),
      (t[96] = J),
      (t[97] = K),
      (t[98] = Gt));
  } else Gt = t[98];
  let Kt = Gt,
    qt;
  t[99] !== Wt || t[100] !== F || t[101] !== Kt || t[102] !== j
    ? ((qt = function () {
        if (!j() || Wt || Kt || F.size === 0) return;
        jt(!0);
        let e = M.current;
        rn(
          F,
          () => j() && M.current === e,
          (e, t) => {
            I((n) => {
              if (n.get(e) !== t) return n;
              let r = new Map(n);
              return (r.delete(e), r);
            });
          },
        ).finally(() => jt(!1));
      }),
      (t[99] = Wt),
      (t[100] = F),
      (t[101] = Kt),
      (t[102] = j),
      (t[103] = qt))
    : (qt = t[103]);
  let Jt = qt,
    Yt = K == null ? void 0 : pe,
    Xt;
  t[104] !== d || t[105] !== s || t[106] !== Yt
    ? ((Xt = { sharingScope: s, shareSessionId: d, isOwner: Yt }),
      (t[104] = d),
      (t[105] = s),
      (t[106] = Yt),
      (t[107] = Xt))
    : (Xt = t[107]);
  let Zt = Xt,
    Qt = (0, nr.useRef)(null),
    $t = K != null,
    en;
  t[108] !== Zt || t[109] !== j || t[110] !== m
    ? ((en = () => {
        Qt.current == null &&
          j() &&
          ((Qt.current = Zt), Je(m, Zt, { action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_OPENED }));
      }),
      (t[108] = Zt),
      (t[109] = j),
      (t[110] = m),
      (t[111] = en))
    : (en = t[111]);
  let tn = (0, nr.useEffectEvent)(en),
    Z;
  t[112] !== tn || t[113] !== $t
    ? ((Z = () => {
        $t && tn();
      }),
      (t[112] = tn),
      (t[113] = $t),
      (t[114] = Z))
    : (Z = t[114]);
  let nn;
  (t[115] === $t ? (nn = t[116]) : ((nn = [$t]), (t[115] = $t), (t[116] = nn)), (0, nr.useEffect)(Z, nn));
  let on, sn;
  (t[117] === m
    ? ((on = t[118]), (sn = t[119]))
    : ((on = () => () => {
        Qt.current != null &&
          Je(m, Qt.current, { action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_DIALOG_CLOSED });
      }),
      (sn = [m]),
      (t[117] = m),
      (t[118] = on),
      (t[119] = sn)),
    (0, nr.useEffect)(on, sn));
  let cn;
  t[120] !== Zt ||
  t[121] !== Wt ||
  t[122] !== j ||
  t[123] !== v ||
  t[124] !== m ||
  t[125] !== l ||
  t[126] !== s.accountId ||
  t[127] !== s.libraryFileId ||
  t[128] !== s.resourceKind ||
  t[129] !== K ||
  t[130] !== xt
    ? ((cn = async function () {
        if (!j() || K == null || Wt) return;
        kt(!0);
        let e = crypto.randomUUID(),
          t = Ze(xt);
        Je(m, Zt, {
          action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK,
          outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_STARTED,
          operationId: e,
          role: t,
        });
        let n = yt({
          libraryFileId: s.libraryFileId,
          origin: St(),
          resourceKind: s.resourceKind,
          sharedDirectoryId: l,
          workspaceId: v ? s.accountId : void 0,
        });
        await Promise.resolve(u.clipboard.writeText(n.href))
          .then(() => {
            j() &&
              (Je(m, Zt, {
                action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK,
                outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_SUCCEEDED,
                operationId: e,
                role: t,
              }),
              ye(m));
          })
          .catch((n) => {
            j() &&
              (Je(m, Zt, {
                action: de.CHATGPT_FILE_LIBRARY_SHARING_ACTION_COPY_LINK,
                outcome: oe.CHATGPT_FILE_LIBRARY_SHARING_OUTCOME_FAILED,
                operationId: e,
                role: t,
                error: Qe(n),
              }),
              m
                .get(ee)
                .danger(
                  (0, $.jsx)(o, {
                    id: `librarySharing.copy.failed`,
                    defaultMessage: `Couldn't copy the link. Try again`,
                    description: `Error toast when checking current Library access or writing the share link to the clipboard fails`,
                  }),
                  { errorAnalytics: { toastId: `librarySharing.copy.failed` } },
                ));
          })
          .finally(() => kt(!1));
      }),
      (t[120] = Zt),
      (t[121] = Wt),
      (t[122] = j),
      (t[123] = v),
      (t[124] = m),
      (t[125] = l),
      (t[126] = s.accountId),
      (t[127] = s.libraryFileId),
      (t[128] = s.resourceKind),
      (t[129] = K),
      (t[130] = xt),
      (t[131] = cn))
    : (cn = t[131]);
  let ln = cn,
    un;
  t[132] !== q ||
  t[133] !== Ue?.complete ||
  t[134] !== We ||
  t[135] !== Ge ||
  t[136] !== Ye ||
  t[137] !== mt ||
  t[138] !== pe ||
  t[139] !== nt?.complete ||
  t[140] !== it ||
  t[141] !== st ||
  t[142] !== lt ||
  t[143] !== we
    ? ((un = q
        ? we || (We && !(pe && er(Ge))) || (Ye && Ue?.complete === !1)
        : !er(st) && (it || (lt && (!mt || nt?.complete === !1)))),
      (t[132] = q),
      (t[133] = Ue?.complete),
      (t[134] = We),
      (t[135] = Ge),
      (t[136] = Ye),
      (t[137] = mt),
      (t[138] = pe),
      (t[139] = nt?.complete),
      (t[140] = it),
      (t[141] = st),
      (t[142] = lt),
      (t[143] = we),
      (t[144] = un))
    : (un = t[144]);
  let dn = un,
    fn = q ? (J == null && Oe) || (Dt == null && Ke) : !mt && ct,
    pn;
  if (
    t[145] !== fn ||
    t[146] !== Zt ||
    t[147] !== R ||
    t[148] !== Be ||
    t[149] !== q ||
    t[150] !== It ||
    t[151] !== Lt ||
    t[152] !== Wt ||
    t[153] !== j ||
    t[154] !== pe ||
    t[155] !== J ||
    t[156] !== s ||
    t[157] !== K ||
    t[158] !== f ||
    t[159] !== wt ||
    t[160] !== Dt ||
    t[161] !== gt
  ) {
    if (((pn = null), K != null)) {
      let e = K.owner.display_name ?? K.owner.email ?? null,
        n;
      t[163] !== K.owner.avatar_url || t[164] !== K.owner.principal.principal_id || t[165] !== e
        ? ((n = (0, $.jsx)(je, {
            size: `group`,
            avatarUrl: K.owner.avatar_url,
            colorKey: K.owner.principal.principal_id,
            name: e,
          })),
          (t[163] = K.owner.avatar_url),
          (t[164] = K.owner.principal.principal_id),
          (t[165] = e),
          (t[166] = n))
        : (n = t[166]);
      let r;
      t[167] !== K.owner.display_name || t[168] !== K.owner.email
        ? ((r =
            K.owner.display_name ??
            K.owner.email ??
            (0, $.jsx)(o, {
              id: `librarySharing.ownerFallback`,
              defaultMessage: `Owner`,
              description: `Fallback display name for the owner of a shared Library file or folder`,
            })),
          (t[167] = K.owner.display_name),
          (t[168] = K.owner.email),
          (t[169] = r))
        : (r = t[169]);
      let i;
      t[170] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((i = (0, $.jsx)(`span`, {
            className: `pe-2 text-sm text-tertiary`,
            children: (0, $.jsx)(o, {
              id: `librarySharing.owner`,
              defaultMessage: `Owner`,
              description: `Role label for the owner of a file or folder in the Library sharing dialog`,
            }),
          })),
          (t[170] = i))
        : (i = t[170]);
      let a;
      t[171] !== K.owner.email || t[172] !== n || t[173] !== r
        ? ((a = (0, $.jsx)(se, { avatar: n, label: r, secondaryLabel: K.owner.email, trailingContent: i })),
          (t[171] = K.owner.email),
          (t[172] = n),
          (t[173] = r),
          (t[174] = a))
        : (a = t[174]);
      let c;
      t[175] !== fn || t[176] !== f
        ? ((c = fn && !f ? (0, $.jsx)(Ee, {}) : null), (t[175] = fn), (t[176] = f), (t[177] = c))
        : (c = t[177]);
      let l;
      t[178] !== fn ||
      t[179] !== Zt ||
      t[180] !== R ||
      t[181] !== Be ||
      t[182] !== q ||
      t[183] !== It ||
      t[184] !== Lt ||
      t[185] !== Wt ||
      t[186] !== j ||
      t[187] !== J ||
      t[188] !== s ||
      t[189] !== Dt
        ? ((l =
            !fn && q && J != null
              ? (0, $.jsx)(Vt, {
                  api: R,
                  sharingScope: s,
                  analytics: Zt,
                  shares: J,
                  effectiveAccess: Dt,
                  allowedRoles: ot(J.allowed_roles, s.resourceKind),
                  canChange: Be && Lt,
                  canRemove: It,
                  canRemoveEffective: Lt,
                  disabled: Wt,
                  isCurrentSession: j,
                  onStageChange: Nt,
                })
              : null),
          (t[178] = fn),
          (t[179] = Zt),
          (t[180] = R),
          (t[181] = Be),
          (t[182] = q),
          (t[183] = It),
          (t[184] = Lt),
          (t[185] = Wt),
          (t[186] = j),
          (t[187] = J),
          (t[188] = s),
          (t[189] = Dt),
          (t[190] = l))
        : (l = t[190]);
      let u;
      (t[191] !== fn ||
      t[192] !== q ||
      t[193] !== pe ||
      t[194] !== s.accountUserId ||
      t[195] !== s.resourceKind ||
      t[196] !== K.owner.principal.principal_id ||
      t[197] !== K.viewer ||
      t[198] !== wt ||
      t[199] !== gt
        ? ((u =
            !fn && !q
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    pe
                      ? null
                      : (0, $.jsx)(se, {
                          avatar: (0, $.jsx)(je, {
                            size: `group`,
                            avatarUrl: K.viewer.avatar_url,
                            colorKey: K.viewer.principal.principal_id,
                            name: K.viewer.display_name ?? K.viewer.email ?? null,
                          }),
                          label: (0, $.jsx)(o, {
                            id: `librarySharing.viewerSelf`,
                            defaultMessage: `You`,
                            description: `Label for the currently signed-in reader in the Library sharing dialog`,
                          }),
                          secondaryLabel: K.viewer.email,
                          trailingContent: (0, $.jsx)(`span`, {
                            className: `pe-2 text-sm text-tertiary`,
                            children: (0, $.jsx)(qe, { permission: wt }),
                          }),
                        }),
                    gt
                      ?.filter((e) => {
                        let { principal: t } = e;
                        return (
                          t.principal_id !== s.accountUserId &&
                          t.principal_id !== K.owner.principal.principal_id
                        );
                      })
                      .map((e) =>
                        (0, $.jsx)(
                          se,
                          {
                            avatar:
                              e.principal.principal_type === `group`
                                ? (0, $.jsx)(Fe, { size: 28, Icon: y })
                                : (0, $.jsx)(je, {
                                    size: `group`,
                                    avatarUrl: e.avatar_url,
                                    colorKey: e.principal.principal_id,
                                    name: e.display_name ?? e.email ?? null,
                                  }),
                            label:
                              e.display_name ??
                              e.email ??
                              (0, $.jsx)(o, {
                                id: `librarySharing.collaboratorFallback`,
                                defaultMessage: `Collaborator`,
                                description: `Fallback display name when a Library collaborator has no returned name or email`,
                              }),
                            secondaryLabel: e.email,
                            trailingContent: (0, $.jsx)(`span`, {
                              className: `pe-2 text-sm text-tertiary`,
                              children: (0, $.jsx)(qe, { permission: et(e.role_id, s.resourceKind) }),
                            }),
                          },
                          Y(e.principal),
                        ),
                      ),
                  ],
                })
              : null),
          (t[191] = fn),
          (t[192] = q),
          (t[193] = pe),
          (t[194] = s.accountUserId),
          (t[195] = s.resourceKind),
          (t[196] = K.owner.principal.principal_id),
          (t[197] = K.viewer),
          (t[198] = wt),
          (t[199] = gt),
          (t[200] = u))
        : (u = t[200]),
        (pn = (0, $.jsxs)($.Fragment, { children: [a, c, l, u] })));
    }
    ((t[145] = fn),
      (t[146] = Zt),
      (t[147] = R),
      (t[148] = Be),
      (t[149] = q),
      (t[150] = It),
      (t[151] = Lt),
      (t[152] = Wt),
      (t[153] = j),
      (t[154] = pe),
      (t[155] = J),
      (t[156] = s),
      (t[157] = K),
      (t[158] = f),
      (t[159] = wt),
      (t[160] = Dt),
      (t[161] = gt),
      (t[162] = pn));
  } else pn = t[162];
  let mn = K == null || Wt,
    hn;
  t[201] === ln
    ? (hn = t[202])
    : ((hn = () => {
        ln();
      }),
      (t[201] = ln),
      (t[202] = hn));
  let gn, vn;
  t[203] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gn = (0, $.jsx)(re, {})),
      (vn = (0, $.jsx)(o, {
        id: `librarySharing.copy`,
        defaultMessage: `Copy link`,
        description: `Button copying the canonical ChatGPT Library sharing link to this file or folder`,
      })),
      (t[203] = gn),
      (t[204] = vn))
    : ((gn = t[203]), (vn = t[204]));
  let yn;
  t[205] !== Ot || t[206] !== mn || t[207] !== hn
    ? ((yn = (0, $.jsxs)(B, {
        size: `xl`,
        type: `button`,
        color: `secondary`,
        variant: `outline`,
        disabled: mn,
        loading: Ot,
        onClick: hn,
        children: [gn, vn],
      })),
      (t[205] = Ot),
      (t[206] = mn),
      (t[207] = hn),
      (t[208] = yn))
    : (yn = t[208]);
  let bn = yn,
    xn;
  t[209] !== pn ||
  t[210] !== fn ||
  t[211] !== n ||
  t[212] !== Zt ||
  t[213] !== R ||
  t[214] !== Be ||
  t[215] !== Ve ||
  t[216] !== q ||
  t[217] !== Lt ||
  t[218] !== D ||
  t[219] !== bn ||
  t[220] !== Wt ||
  t[221] !== F ||
  t[222] !== N ||
  t[223] !== Kt ||
  t[224] !== Ke ||
  t[225] !== a ||
  t[226] !== dn ||
  t[227] !== Ht ||
  t[228] !== Ut ||
  t[229] !== j ||
  t[230] !== pe ||
  t[231] !== v ||
  t[232] !== O ||
  t[233] !== p ||
  t[234] !== h ||
  t[235] !== G ||
  t[236] !== Jt ||
  t[237] !== At ||
  t[238] !== J ||
  t[239] !== Oe ||
  t[240] !== s ||
  t[241] !== K ||
  t[242] !== f ||
  t[243] !== H ||
  t[244] !== U ||
  t[245] !== Dt
    ? ((xn = (e) =>
        (0, $.jsx)(Te, {
          isLoading: !H && K == null,
          title:
            !q && !pe && (!v || D) && K?.capabilities?.can_request_access === !0
              ? (0, $.jsx)(o, {
                  id: `librarySharing.requestTitle`,
                  defaultMessage: `Request to share {fileName}`,
                  description: `Title for a collaborator requesting the owner's approval to share a Library item`,
                  values: { fileName: a },
                })
              : (0, $.jsx)(o, {
                  id: `librarySharing.fileTitle`,
                  defaultMessage: `Share {fileName}`,
                  description: `Title of the Library file or folder sharing dialog; fileName is the item's title`,
                  values: { fileName: a },
                }),
          headerContent:
            e == null
              ? K != null &&
                Be &&
                (0, $.jsx)(
                  an,
                  {
                    account: n,
                    api: R,
                    sharingScope: s,
                    sharingState: K,
                    shares: J,
                    effectiveAccess: Dt,
                    analytics: Zt,
                    canInvite: Lt,
                    disabled: Wt,
                    isCurrentSession: j,
                    onStageChange: Nt,
                  },
                  N,
                )
              : e.headerContent,
          isDismissalDisabled: Ut || e?.isPending === !0,
          onSubmit: q ? Jt : e?.onSubmit,
          footer:
            K != null && !q && !pe && F.size === 0
              ? (0, $.jsxs)($.Fragment, {
                  children: [(0, $.jsx)(`div`, { className: `me-auto`, children: bn }), e?.footer],
                })
              : (0, $.jsx)(Me, {
                  onCancel: () => {
                    (I(new Map()), ne(Jn));
                  },
                  onClose: p,
                  isBusy: Ut,
                  disabled: Wt || Kt,
                  hasPendingAccessChange: F.size > 0,
                  hasPendingInvitees: [...F.values()].some(qn),
                  isSaving: At,
                  copyLink: bn,
                }),
          children:
            K == null
              ? (0, $.jsx)(A, {
                  className: H ? void 0 : `flex-1 justify-center`,
                  children: (0, $.jsx)(ge, {
                    isLoading: !H,
                    onRetry: () => {
                      G();
                    },
                  }),
                })
              : (0, $.jsxs)(
                  `div`,
                  {
                    className: `flex flex-col`,
                    children: [
                      dn
                        ? (0, $.jsx)(A, {
                            children: (0, $.jsx)(w, {
                              type: `error`,
                              role: `alert`,
                              content: (0, $.jsx)(o, {
                                id: `librarySharing.access.incomplete`,
                                defaultMessage: `Couldn't load all access details. Some sharing actions are unavailable`,
                                description: `Error when collaborators, inherited permissions, or workspace policy cannot be fully loaded; unsafe permission actions remain disabled`,
                              }),
                              primaryCtaText: (0, $.jsx)(o, {
                                id: `librarySharing.retry`,
                                defaultMessage: `Retry`,
                                description: `Button retrying a failed Library sharing data request`,
                              }),
                              onPrimaryCtaClick: () => {
                                h.invalidateQueries({ queryKey: at(s) });
                              },
                            }),
                          })
                        : null,
                      f
                        ? (0, $.jsx)($.Fragment, {
                            children: fn
                              ? (0, $.jsx)(he, { kind: `link`, children: (0, $.jsx)(De, {}) })
                              : (0, $.jsx)(_n, {
                                  allowedRoles: J == null ? void 0 : ot(J.allowed_roles, s.resourceKind),
                                  analytics: Zt,
                                  api: R,
                                  canInitiateSharing: Be,
                                  canManage: Ve,
                                  disabled: Wt,
                                  permissionsPending: q && (Oe || Ke),
                                  hasIndependentEditorAccess: Ht,
                                  isCurrentSession: j,
                                  isWorkspace: v,
                                  sharingScope: s,
                                  sharingState: K,
                                  workspaceName: n.name?.trim() || void 0,
                                  onStageChange: Nt,
                                }),
                          })
                        : null,
                      e == null
                        ? (0, $.jsx)(he, {
                            children: (0, $.jsx)(`div`, { className: `flex flex-col gap-3`, children: pn }),
                          })
                        : e.content,
                      pe && O
                        ? (0, $.jsx)(Et, {
                            analytics: Zt,
                            api: R,
                            canApprove: Be && Lt,
                            canDecide: !U && K.capabilities?.can_manage_access_requests === !0,
                            disabled: Wt,
                            isCurrentSession: j,
                            sharingScope: s,
                          })
                        : null,
                    ],
                  },
                  N,
                ),
        })),
      (t[209] = pn),
      (t[210] = fn),
      (t[211] = n),
      (t[212] = Zt),
      (t[213] = R),
      (t[214] = Be),
      (t[215] = Ve),
      (t[216] = q),
      (t[217] = Lt),
      (t[218] = D),
      (t[219] = bn),
      (t[220] = Wt),
      (t[221] = F),
      (t[222] = N),
      (t[223] = Kt),
      (t[224] = Ke),
      (t[225] = a),
      (t[226] = dn),
      (t[227] = Ht),
      (t[228] = Ut),
      (t[229] = j),
      (t[230] = pe),
      (t[231] = v),
      (t[232] = O),
      (t[233] = p),
      (t[234] = h),
      (t[235] = G),
      (t[236] = Jt),
      (t[237] = At),
      (t[238] = J),
      (t[239] = Oe),
      (t[240] = s),
      (t[241] = K),
      (t[242] = f),
      (t[243] = H),
      (t[244] = U),
      (t[245] = Dt),
      (t[246] = xn))
    : (xn = t[246]);
  let Sn = xn,
    Cn;
  return (
    t[247] !== pn ||
    t[248] !== n ||
    t[249] !== Zt ||
    t[250] !== R ||
    t[251] !== q ||
    t[252] !== Wt ||
    t[253] !== N ||
    t[254] !== mt ||
    t[255] !== j ||
    t[256] !== pe ||
    t[257] !== Sn ||
    t[258] !== nt ||
    t[259] !== s ||
    t[260] !== K ||
    t[261] !== U
      ? ((Cn =
          K != null && !q && !pe
            ? (0, $.jsx)(
                En,
                {
                  account: n,
                  analytics: Zt,
                  api: R,
                  canRequest: !U && K.capabilities?.can_request_access === !0,
                  disabled: Wt,
                  isCurrentSession: j,
                  renderDialog: Sn,
                  roster: mt ? nt : void 0,
                  sharingScope: s,
                  sharingState: K,
                  children: pn,
                },
                N,
              )
            : Sn(null)),
        (t[247] = pn),
        (t[248] = n),
        (t[249] = Zt),
        (t[250] = R),
        (t[251] = q),
        (t[252] = Wt),
        (t[253] = N),
        (t[254] = mt),
        (t[255] = j),
        (t[256] = pe),
        (t[257] = Sn),
        (t[258] = nt),
        (t[259] = s),
        (t[260] = K),
        (t[261] = U),
        (t[262] = Cn))
      : (Cn = t[262]),
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
  return e.state.status === `success` && !e.isStaleByTime(h.THIRTY_SECONDS);
}
function er(e) {
  return (
    e instanceof O &&
    e.responseStatus === 404 &&
    e.errorKind !== `network` &&
    e.errorCode == null &&
    e.diagnosticError instanceof z &&
    e.diagnosticError.detail === `Not Found`
  );
}
var tr, nr, $;
function rr() {
  return (rr = e(() => {
    ((tr = I()),
      xe(),
      Ve(),
      l(),
      v(),
      E(),
      P(),
      g(),
      (nr = V()),
      k(),
      Se(),
      Ae(),
      x(),
      ce(),
      a(),
      D(),
      b(),
      M(),
      ne(),
      L(),
      we(),
      W(),
      Ce(),
      He(),
      ve(),
      U(),
      Le(),
      Ke(),
      i(),
      F(),
      Ft(),
      Ye(),
      mt(),
      H(),
      nn(),
      gn(),
      Tn(),
      nt(),
      ft(),
      J(),
      Wn(),
      vt(),
      bt(),
      xt(),
      ($ = R()));
  }))();
}
rr();
export { Gn as LibraryShareDialogBody };
//# sourceMappingURL=dialog-56d8bed1d04c.js.map
