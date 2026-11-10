import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  $z as r,
  FBt as i,
  KSt as a,
  LNt as o,
  Mst as s,
  NSt as c,
  PBt as l,
  Pit as u,
  QI as d,
  Qst as f,
  Qz as p,
  SSt as m,
  USt as h,
  VSt as g,
  XOt as _,
  Y3 as v,
  YI as y,
  Z3 as b,
  ZI as x,
  ZSt as S,
  aCt as C,
  iCt as w,
  jit as T,
  jst as E,
  nCt as D,
  okt as O,
  qI as k,
  tkt as A,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  B3 as j,
  BRr as M,
  CJt as N,
  Cc as P,
  DU as F,
  DW as I,
  Dlt as L,
  EW as R,
  Elt as z,
  F3 as B,
  F_n as V,
  HOn as H,
  Hdn as ee,
  I_n as te,
  Jh as ne,
  Jlr as re,
  MOr as ie,
  OL as ae,
  OU as oe,
  OW as U,
  PL as se,
  P_n as W,
  Pdn as G,
  SJt as ce,
  Sc as le,
  UOn as ue,
  VRr as de,
  Vdn as fe,
  X6 as pe,
  XEn as me,
  X_n as he,
  Xgn as ge,
  Xht as K,
  Xz as _e,
  YEn as ve,
  Yht as ye,
  Z6 as be,
  Z_n as xe,
  Zdn as Se,
  Zgn as Ce,
  Zlr as we,
  Zz as Te,
  _ur as Ee,
  gur as q,
  hdn as De,
  jL as Oe,
  kL as ke,
  kW as Ae,
  nl as je,
  qh as Me,
  sdn as Ne,
  tl as Pe,
  vLr as Fe,
  vh as Ie,
  wLr as Le,
  yh as Re,
  zOr as ze,
} from "./app-initial-ad16eaadf81f.js";
import { i as Be, n as Ve, t as He } from "./space-e4040a2fa18d.js";
import { n as Ue, t as We } from "./checkboxes-894c9e9cf353.js";
import { O as Ge, k as Ke } from "./preview-3690797c434b.js";
import { i as qe, n as Je, t as Ye } from "./state-96ed81f5e609.js";
import { n as Xe, t as Ze } from "./new-space-dialog-38da9be1f291.js";
import { a as Qe, i as $e, r as et, t as tt } from "./checkpoint-preview-8fd05669fdbd.js";
import { n as nt, t as rt } from "./load-metrics-state-c687d5e55dc1.js";
import { n as it, t as at } from "./content-paint-marker-e7485814fa09.js";
import { i as ot, n as st, r as ct, t as lt } from "./editor-9b1f5c42c48b.js";
import { a as ut, i as dt, r as J } from "./pending-ab5af760fea1.js";
import { i as ft, t as pt } from "./presentation-f202ffb8d1c1.js";
import { n as mt, t as ht } from "./layout-e024e43f5b5b.js";
function gt(e) {
  let n = (0, xt.c)(67),
    { pageId: i } = e,
    a = t(f),
    o = O(),
    s = g(),
    c = h(),
    l = w(K),
    u = D(Ve, i),
    d = r(),
    p = w(ce),
    _ = w(Ae),
    y,
    b,
    x,
    S,
    C,
    T,
    E,
    k,
    j,
    M;
  if (
    n[0] !== l ||
    n[1] !== u ||
    n[2] !== p ||
    n[3] !== o ||
    n[4] !== d ||
    n[5] !== s ||
    n[6] !== i ||
    n[7] !== a ||
    n[8] !== _
  ) {
    M = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      (n[19] === i ? (e = n[20]) : ((e = (e) => e.localPageId === i), (n[19] = i), (n[20] = e)),
        (S = _.find(e)));
      let t = S?.space?.spaceId ?? u?.response?.id;
      if (u != null && u.status !== `error` && u.response != null) {
        let e = `/spaces/${u.response.id}`,
          t;
        n[21] !== u.response.id || n[22] !== s.state
          ? ((t = { ...s.state, createdSpaceId: u.response.id }),
            (n[21] = u.response.id),
            (n[22] = s.state),
            (n[23] = t))
          : (t = n[23]);
        let r;
        (n[24] !== t || n[25] !== e
          ? ((r = (0, Y.jsx)(m, { to: e, replace: !0, state: t })), (n[24] = t), (n[25] = e), (n[26] = r))
          : (r = n[26]),
          (M = r));
        break bb0;
      }
      if (u == null && S == null) {
        if (!d || !p) {
          let e;
          (n[27] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Y.jsx)(z, {})), (n[27] = e))
            : (e = n[27]),
            (M = e));
          break bb0;
        }
        let e;
        (n[28] === l ? (e = n[29]) : ((e = (0, Y.jsx)(m, { to: l, replace: !0 })), (n[28] = l), (n[29] = e)),
          (M = e));
        break bb0;
      }
      if (u?.status === `creating` || u?.status === `created`) {
        M = (0, Y.jsx)(z, { name: u.name, appearance: S?.appearance });
        break bb0;
      }
      let r;
      (n[30] !== u || n[31] !== i || n[32] !== a
        ? ((r = () => {
            if (u?.status === `error`) {
              u.retry().catch(bt);
              return;
            }
            let e = a.get(Ae).find((e) => e.localPageId === i);
            e?.space != null && Be(a, { name: e.name, resume: e, createSpace: yt });
          }),
          (n[30] = u),
          (n[31] = i),
          (n[32] = a),
          (n[33] = r))
        : (r = n[33]),
        (x = r),
        (b = u == null && S?.space == null),
        (y = ve),
        (j =
          t == null
            ? (0, Y.jsx)(A, {
                id: `space.teamHome.creationError`,
                defaultMessage: `Could not finish creating space`,
                description: `Space creation or root Page initialization failed; the same Space can be retried. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              })
            : (0, Y.jsx)(A, {
                id: `space.teamHome.setupError`,
                defaultMessage: `Space setup needs attention`,
                description: `The Space exists but its initial setup has not finished. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              })),
        n[34] === b
          ? (C = n[35])
          : ((C = b
              ? (0, Y.jsx)(A, {
                  id: `space.teamHome.creationOutcomeUnknown`,
                  defaultMessage: `We could not confirm whether this space was created. Check your spaces before creating another one`,
                  description: `A reloaded Space creation has no server ID, so creating again could make a duplicate. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                })
              : null),
            (n[34] = b),
            (n[35] = C)),
        (T =
          !b &&
          t != null &&
          (0, Y.jsx)(A, {
            id: `space.teamHome.setupIncomplete`,
            defaultMessage: `Your space was created, but setup hasn't finished. Check your connection and try again to continue with the same space`,
            description: `Retry resumes setup on the existing Space without creating a duplicate; its initial page may still be saving. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })),
        (E =
          !b &&
          t == null &&
          (0, Y.jsx)(A, {
            id: `space.teamHome.creationRetry`,
            defaultMessage: `Check your connection and try again`,
            description: `Recovery guidance when the initial Space creation request fails`,
          })),
        (k =
          S != null &&
          S.invitations.length > 0 &&
          (0, Y.jsx)(`ul`, {
            children: S.invitations.map((e) =>
              (0, Y.jsx)(
                `li`,
                {
                  children:
                    e.status === `shared`
                      ? (0, Y.jsx)(A, {
                          id: `space.teamHome.invitationShared`,
                          defaultMessage: `Shared with {name}`,
                          description: `A Space invitation verified by the server's sharing roster`,
                          values: { name: e.label },
                        })
                      : (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            (0, Y.jsx)(A, {
                              id: `space.teamHome.invitationUnconfirmed`,
                              defaultMessage: `Not confirmed: {name}`,
                              description: `The selected person's or team's Space invitation has not been verified`,
                              values: { name: e.label },
                            }),
                            (0, Y.jsx)(v, {
                              color: `ghost`,
                              "aria-label": o.formatMessage(
                                {
                                  id: `space.teamHome.removeUnconfirmedInvitation`,
                                  defaultMessage: `Remove invitation for {name}`,
                                  description: `Remove an unconfirmed recipient from unfinished Space setup without revoking any existing access`,
                                },
                                { name: e.label },
                              ),
                              onClick: () =>
                                U(a, { ...S, invitations: S.invitations.filter((t) => t !== e) }),
                              children: (0, Y.jsx)(A, {
                                id: `space.teamHome.removeInvitation`,
                                defaultMessage: `Remove`,
                                description: `Remove an unconfirmed invitation from unfinished Space setup`,
                              }),
                            }),
                          ],
                        }),
                },
                F(e.recipient),
              ),
            ),
          })));
    }
    ((n[0] = l),
      (n[1] = u),
      (n[2] = p),
      (n[3] = o),
      (n[4] = d),
      (n[5] = s),
      (n[6] = i),
      (n[7] = a),
      (n[8] = _),
      (n[9] = y),
      (n[10] = b),
      (n[11] = x),
      (n[12] = S),
      (n[13] = C),
      (n[14] = T),
      (n[15] = E),
      (n[16] = k),
      (n[17] = j),
      (n[18] = M));
  } else
    ((y = n[9]),
      (b = n[10]),
      (x = n[11]),
      (S = n[12]),
      (C = n[13]),
      (T = n[14]),
      (E = n[15]),
      (k = n[16]),
      (j = n[17]),
      (M = n[18]));
  if (M !== Symbol.for(`react.early_return_sentinel`)) return M;
  let N;
  n[36] !== C || n[37] !== T || n[38] !== E || n[39] !== k
    ? ((N = (0, Y.jsxs)(Y.Fragment, { children: [C, T, E, k] })),
      (n[36] = C),
      (n[37] = T),
      (n[38] = E),
      (n[39] = k),
      (n[40] = N))
    : (N = n[40]);
  let P;
  n[41] !== b || n[42] !== x
    ? ((P =
        !b &&
        (0, Y.jsx)(v, {
          color: `secondary`,
          onClick: x,
          children: (0, Y.jsx)(A, {
            id: `codex.space.page.retry`,
            defaultMessage: `Try again`,
            description: `Button that retries loading shared Pages after a failure`,
          }),
        })),
      (n[41] = b),
      (n[42] = x),
      (n[43] = P))
    : (P = n[43]);
  let I;
  n[44] !== x || n[45] !== a || n[46] !== S
    ? ((I =
        S?.space != null &&
        S.appearance != null &&
        (0, Y.jsx)(v, {
          color: `secondary`,
          onClick: () => {
            (U(a, { ...S, appearance: void 0 }), x());
          },
          children: (0, Y.jsx)(A, {
            id: `space.teamHome.continueWithoutAppearance`,
            defaultMessage: `Continue without custom icon`,
            description: `Continue setting up an existing Space without saving the optional icon and color chosen during creation`,
          }),
        })),
      (n[44] = x),
      (n[45] = a),
      (n[46] = S),
      (n[47] = I))
    : (I = n[47]);
  let L;
  n[48] !== x || n[49] !== a || n[50] !== S
    ? ((L =
        S?.space != null &&
        S.invitations.some(vt) &&
        (0, Y.jsx)(v, {
          color: `secondary`,
          onClick: () => {
            (U(a, { ...S, invitations: S.invitations.filter(_t) }), x());
          },
          children: (0, Y.jsx)(A, {
            id: `space.teamHome.continueWithoutInvitations`,
            defaultMessage: `Continue without remaining invitations`,
            description: `Continue initializing the existing Space while removing unconfirmed invitations from its setup`,
          }),
        })),
      (n[48] = x),
      (n[49] = a),
      (n[50] = S),
      (n[51] = L))
    : (L = n[51]);
  let B;
  n[52] !== c || n[53] !== b || n[54] !== i || n[55] !== a
    ? ((B =
        b &&
        (0, Y.jsx)(v, {
          color: `secondary`,
          onClick: () => {
            (R(a, i), c(a.get(K), { replace: !0 }));
          },
          children: (0, Y.jsx)(A, {
            id: `space.teamHome.dismissUnknownSetup`,
            defaultMessage: `Dismiss and view spaces`,
            description: `Forget an incomplete local setup record without deleting any server Space, then return to Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          }),
        })),
      (n[52] = c),
      (n[53] = b),
      (n[54] = i),
      (n[55] = a),
      (n[56] = B))
    : (B = n[56]);
  let V;
  n[57] !== I || n[58] !== L || n[59] !== B || n[60] !== P
    ? ((V = (0, Y.jsxs)(Y.Fragment, { children: [P, I, L, B] })),
      (n[57] = I),
      (n[58] = L),
      (n[59] = B),
      (n[60] = P),
      (n[61] = V))
    : (V = n[61]);
  let H;
  return (
    n[62] !== y || n[63] !== V || n[64] !== j || n[65] !== N
      ? ((H = (0, Y.jsx)(y, { title: j, description: N, actions: V })),
        (n[62] = y),
        (n[63] = V),
        (n[64] = j),
        (n[65] = N),
        (n[66] = H))
      : (H = n[66]),
    H
  );
}
function _t(e) {
  return e.status === `shared`;
}
function vt(e) {
  return e.status !== `shared`;
}
function yt() {
  throw Error(`space_setup_requires_existing_space`);
}
function bt() {}
var xt, Y;
function St() {
  return (St = e(() => {
    ((xt = l()), S(), _(), c(), b(), me(), oe(), ye(), L(), n(), N(), p(), He(), I(), (Y = o()));
  }))();
}
function Ct(e) {
  let n = (0, Tt.c)(5),
    { children: r, fallback: i, pageReadStartedAt: a, space: o, takeInitialBootstrap: s } = e,
    c = t(f),
    l;
  n[0] !== a || n[1] !== c || n[2] !== o || n[3] !== s
    ? ((l = () => {
        let e = W(o),
          t = c.get(q),
          n = c.get(M),
          r = c.get(de).accountUserId,
          i = o.root_page_id,
          l = c.queryClient.getQueryState(c.query.getOptions(G, i).queryKey),
          u =
            a != null &&
            (l?.fetchStatus === `fetching` ||
              ((l?.dataUpdatedAt ?? 0) >= Math.floor(a) &&
                W({ ...o, root_page_metadata: l?.data?.metadata }) != null));
        if (
          o.backing_type !== `drive` ||
          o.deleted_at != null ||
          (e == null && !u) ||
          t == null ||
          n == null ||
          r == null ||
          !c.get(xe)
        )
          return Et;
        let d = { accountId: t, userId: n, accountUserId: r },
          f = !1,
          p = !1,
          m = !1;
        return {
          getSnapshot: () => f,
          subscribe: (a) => {
            if (c.get(q) !== t || c.get(M) !== n || c.get(de).accountUserId !== r) return wt;
            (c.set(ee, i, d),
              (p ||=
                (e != null &&
                  (c.query.cancel(G, i, { exact: !0 }),
                  c.query.setData(G, i, (t) =>
                    t != null &&
                    t.metadata.document_type === e.document_type &&
                    W({ ...o, root_page_metadata: t.metadata }) != null
                      ? { ...t, metadata: e }
                      : { metadata: e },
                  )),
                !0)));
            let l = s?.(i),
              u =
                e == null || (l == null && !m)
                  ? void 0
                  : B({ scope: c, pageId: i, initialBootstrap: l, pageViewReportingEnabled: !1 });
            u != null &&
              e != null &&
              ((m = !0), u.session.applyMetadata(e), u.session.start(ae(e.access, `content`)));
            let h = Ee(c, t, n, r),
              g = () => {
                ((f = !1), c.set(ee, i, (e) => (e === d ? null : e)));
              },
              _ = () => {
                (g(), Ne(c, i, t), a());
              };
            return (
              h.signal.addEventListener(`abort`, _, { once: !0 }),
              (f = !0),
              a(),
              () => {
                (h.signal.removeEventListener(`abort`, _), h.stop(), g(), queueMicrotask(() => u?.release()));
              }
            );
          },
        };
      }),
      (n[0] = a),
      (n[1] = c),
      (n[2] = o),
      (n[3] = s),
      (n[4] = l))
    : (l = n[4]);
  let [u] = (0, X.useState)(l);
  return (0, X.useSyncExternalStore)(u.subscribe, u.getSnapshot, u.getSnapshot) ? r : i;
}
function wt() {}
var Tt, X, Et;
function Dt() {
  return (Dt = e(() => {
    ((Tt = l()),
      S(),
      (X = i()),
      Le(),
      he(),
      ke(),
      j(),
      V(),
      De(),
      n(),
      (Et = { subscribe: () => () => {}, getSnapshot: () => !0 }));
  }))();
}
function Ot(e) {
  let t = (0, Z.c)(11),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ spaceId: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = w(q),
    o = w(M),
    s = w(Fe),
    { spaceId: c } = a(),
    l = n ?? c;
  if (i == null) {
    let e;
    return (
      t[3] === l
        ? (e = t[4])
        : ((e = l == null ? (0, $.jsx)(z, {}) : (0, $.jsx)(J, {})), (t[3] = l), (t[4] = e)),
      e
    );
  }
  let u;
  return (
    t[5] !== i || t[6] !== s || t[7] !== l || t[8] !== r || t[9] !== o
      ? ((u =
          l == null
            ? (0, $.jsx)(Ft, {}, `${o}:${i}:${s}`)
            : (0, $.jsx)(kt, { ...r, spaceId: l }, `${o}:${i}:${s}:${l}`)),
        (t[5] = i),
        (t[6] = s),
        (t[7] = l),
        (t[8] = r),
        (t[9] = o),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function kt(e) {
  let n = (0, Z.c)(50),
    r,
    i;
  n[0] === e ? ((r = n[1]), (i = n[2])) : (({ spaceId: r, ...i } = e), (n[0] = e), (n[1] = r), (n[2] = i));
  let a = t(ie),
    o = i.panelTabId,
    c = h(),
    l = w(q),
    u = w(M),
    [d] = (0, Q.useState)(At),
    f;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { enabled: !1 }), (n[3] = f)) : (f = n[3]);
  let { data: p } = D(fe, r, f),
    m;
  n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { enabled: !1 }), (n[4] = m)) : (m = n[4]);
  let { data: g } = w(Se, m),
    _ = D(qe, r),
    y;
  n[5] !== l || n[6] !== d || n[7] !== p || n[8] !== g?.items || n[9] !== a || n[10] !== r || n[11] !== u
    ? ((y = async (e) => {
        let { signal: t, queryKey: n } = e,
          i = p != null || g?.items.some((e) => e.id === r) || a.queryClient.getQueryData(n) != null,
          o = await Ye(a, r, {
            accountId: l,
            userId: u,
            signal: t,
            originQueryKey: n,
            onRootPageRealtimeBootstrap: d.hasRequested() || i ? void 0 : d.receive,
          });
        return (d.complete(), o);
      }),
      (n[5] = l),
      (n[6] = d),
      (n[7] = p),
      (n[8] = g?.items),
      (n[9] = a),
      (n[10] = r),
      (n[11] = u),
      (n[12] = y))
    : (y = n[12]);
  let b;
  n[13] !== _ || n[14] !== y
    ? ((b = { ..._, staleTime: _.staleTime, queryFn: y }), (n[13] = _), (n[14] = y), (n[15] = b))
    : (b = n[15]);
  let { data: x, isError: S, error: C, errorUpdatedAt: E, isFetchedAfterMount: O, refetch: k } = s(b),
    [j, N] = (0, Q.useState)(x?.backing_type);
  x != null && j !== x.backing_type && N(x.backing_type);
  let P, F;
  if (
    (n[16] !== C || n[17] !== S || n[18] !== o || n[19] !== a
      ? ((P = () =>
          nt(a, o, (e) => {
            S &&
              e.finishPending(
                `failure`,
                C instanceof T && [403, 404, 410].includes(C.status) ? `access_denied` : `page_unavailable`,
              );
          })),
        (F = [a, o, S, C]),
        (n[16] = C),
        (n[17] = S),
        (n[18] = o),
        (n[19] = a),
        (n[20] = P),
        (n[21] = F))
      : ((P = n[20]), (F = n[21])),
    (0, Q.useLayoutEffect)(P, F),
    C instanceof T && [403, 404, 410].includes(C.status))
  ) {
    let e = i.onOpenPage == null,
      t;
    n[22] === r ? (t = n[23]) : ((t = { kind: `space`, id: r }), (n[22] = r), (n[23] = t));
    let a = j == null ? void 0 : j === `drive`,
      o;
    n[24] === k ? (o = n[25]) : ((o = () => void k()), (n[24] = k), (n[25] = o));
    let s;
    return (
      n[26] !== E || n[27] !== o || n[28] !== e || n[29] !== t || n[30] !== a
        ? ((s = (0, $.jsx)(le, { recoverWorkspace: e, target: t, canRequestAccess: a, onRetry: o }, E)),
          (n[26] = E),
          (n[27] = o),
          (n[28] = e),
          (n[29] = t),
          (n[30] = a),
          (n[31] = s))
        : (s = n[31]),
      s
    );
  }
  if (S) {
    let e;
    n[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(A, {
          id: `codex.space.openError`,
          defaultMessage: `Could not open space`,
          description: `Error shown when the current account cannot load a Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[32] = e))
      : (e = n[32]);
    let t;
    n[33] === k ? (t = n[34]) : ((t = () => void k()), (n[33] = k), (n[34] = t));
    let r;
    n[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(A, {
          id: `codex.space.page.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading shared Pages after a failure`,
        })),
        (n[35] = r))
      : (r = n[35]);
    let i;
    return (
      n[36] === t
        ? (i = n[37])
        : ((i = (0, $.jsx)(ve, {
            title: e,
            actions: (0, $.jsx)(v, { color: `secondary`, onClick: t, children: r }),
          })),
          (n[36] = t),
          (n[37] = i)),
      i
    );
  }
  let I;
  if (n[38] !== p || n[39] !== g?.items || n[40] !== r || n[41] !== x) {
    let e = g?.items.find((e) => e.id === r),
      t = x ?? p;
    ((I = t == null ? e : te(t, e)), (n[38] = p), (n[39] = g?.items), (n[40] = r), (n[41] = x), (n[42] = I));
  } else I = n[42];
  let L = I;
  if (L == null) {
    let e;
    return (
      n[43] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(J, {})), (n[43] = e))
        : (e = n[43]),
      e
    );
  }
  let R = O ? x : void 0,
    z;
  return (
    n[44] !== d.take || n[45] !== c || n[46] !== L || n[47] !== R || n[48] !== i
      ? ((z = (0, $.jsx)(jt, {
          ...i,
          navigate: c,
          space: L,
          authorizedSpace: R,
          takeInitialBootstrap: d.take,
        })),
        (n[44] = d.take),
        (n[45] = c),
        (n[46] = L),
        (n[47] = R),
        (n[48] = i),
        (n[49] = z))
      : (z = n[49]),
    z
  );
}
function At() {
  let e,
    t = !1;
  return {
    hasRequested: () => t,
    complete: () => {
      t = !0;
    },
    receive: (t, n) => {
      e = { pageId: t, bootstrap: n };
    },
    take: (t) => {
      let n = e;
      return ((e = void 0), n?.pageId === t ? n.bootstrap : void 0);
    },
  };
}
function jt(e) {
  let t = (0, Z.c)(30),
    {
      navigate: n,
      space: r,
      authorizedSpace: i,
      takeInitialBootstrap: a,
      blockNavigationKey: o,
      isActive: s,
      pageOptions: c,
      onOpenPage: l,
      onTitleFocused: u,
      panelTarget: f,
      panelTabId: p,
    } = e,
    m = g();
  Ce.bindSpaceRoot(r.id, r.root_page_id);
  let h;
  t[0] !== m || t[1] !== l || t[2] !== r.root_page_id
    ? ((h = l == null ? y(`page://${r.root_page_id}${m.hash}`) : null),
      (t[0] = m),
      (t[1] = l),
      (t[2] = r.root_page_id),
      (t[3] = h))
    : (h = t[3]);
  let _ = h,
    v;
  t[4] !== s || t[5] !== l || t[6] !== f || t[7] !== r.root_page_id
    ? ((v =
        l == null
          ? { pageId: r.root_page_id, surface: `route` }
          : {
              pageId: r.root_page_id,
              surface: `side-panel`,
              onOpenPage: l,
              panelTarget: f ?? null,
              isActive: s ?? !0,
            }),
      (t[4] = s),
      (t[5] = l),
      (t[6] = f),
      (t[7] = r.root_page_id),
      (t[8] = v))
    : (v = t[8]);
  let b = v,
    x = l != null,
    S;
  t[9] !== o ||
  t[10] !== b ||
  t[11] !== m ||
  t[12] !== n ||
  t[13] !== l ||
  t[14] !== u ||
  t[15] !== c?.blockId ||
  t[16] !== c?.focusTitle ||
  t[17] !== c?.navigationTarget ||
  t[18] !== c?.pagePreview ||
  t[19] !== p ||
  t[20] !== _ ||
  t[21] !== r
    ? ((S = (e) => {
        let t = (t) =>
          (0, $.jsx)(Q.Suspense, {
            fallback: e,
            children: (0, $.jsx)(
              lt,
              {
                explorer: t ?? void 0,
                panelTabId: p,
                ...b,
                blockId:
                  _?.kind === `page` ? (_.blockId ?? (m.state?.scrollPageToTop ? null : void 0)) : c?.blockId,
                blockNavigationKey: l == null ? m.key : o,
                focusTitle: l == null ? m.state?.focusPageTitle : c?.focusTitle,
                pagePreview: c?.pagePreview,
                loadingFallback: e,
                navigationTarget: l == null ? d(m.search, m.key) : c?.navigationTarget,
                onTitleFocused:
                  l == null
                    ? () => {
                        n(m, { replace: !0, state: { ...m.state, focusPageTitle: !1, scrollPageToTop: !1 } });
                      }
                    : u,
                space: r.backing_type === `drive` ? r : void 0,
              },
              r.root_page_id,
            ),
          });
        return l == null || p != null
          ? (0, $.jsx)(ht, { pageId: r.root_page_id, tabId: l == null ? void 0 : p, children: t })
          : t(null);
      }),
      (t[9] = o),
      (t[10] = b),
      (t[11] = m),
      (t[12] = n),
      (t[13] = l),
      (t[14] = u),
      (t[15] = c?.blockId),
      (t[16] = c?.focusTitle),
      (t[17] = c?.navigationTarget),
      (t[18] = c?.pagePreview),
      (t[19] = p),
      (t[20] = _),
      (t[21] = r),
      (t[22] = S))
    : (S = t[22]);
  let C;
  return (
    t[23] !== i || t[24] !== p || t[25] !== r || t[26] !== x || t[27] !== S || t[28] !== a
      ? ((C = (0, $.jsx)(
          Mt,
          { authorizedSpace: i, space: r, takeInitialBootstrap: a, panelTabId: p, embedded: x, children: S },
          r.root_page_id,
        )),
        (t[23] = i),
        (t[24] = p),
        (t[25] = r),
        (t[26] = x),
        (t[27] = S),
        (t[28] = a),
        (t[29] = C))
      : (C = t[29]),
    C
  );
}
function Mt(e) {
  let t = (0, Z.c)(19),
    { authorizedSpace: n, children: r, space: i, takeInitialBootstrap: a, embedded: o, panelTabId: s } = e,
    c = o !== void 0 && o,
    [l] = (0, Q.useState)(Date.now),
    u;
  if (t[0] !== i) {
    let e = W(i);
    ((u = e == null ? void 0 : we(e)), (t[0] = i), (t[1] = u));
  } else u = t[1];
  let d = u,
    f = n != null,
    p;
  t[2] !== i || t[3] !== f
    ? ((p = { space: i, authorized: f }), (t[2] = i), (t[3] = f), (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] !== n ||
  t[6] !== r ||
  t[7] !== d ||
  t[8] !== c ||
  t[9] !== l ||
  t[10] !== s ||
  t[11] !== i ||
  t[12] !== a
    ? ((m = (e) => {
        let { session: t, canPreview: o } = e,
          u;
        return (
          (u =
            d != null && d !== `page` && d !== `unsupported`
              ? (0, $.jsx)(H, {})
              : t != null && o
                ? (0, $.jsx)(Nt, { pageId: i.root_page_id, session: t, embedded: c, panelTabId: s, space: i })
                : (0, $.jsx)(J, {})),
          n == null
            ? u
            : r == null
              ? null
              : (0, $.jsx)(Ct, {
                  fallback: u,
                  pageReadStartedAt: l,
                  space: n,
                  takeInitialBootstrap: a,
                  children: r(u),
                })
        );
      }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = d),
      (t[8] = c),
      (t[9] = l),
      (t[10] = s),
      (t[11] = i),
      (t[12] = a),
      (t[13] = m))
    : (m = t[13]);
  let h;
  return (
    t[14] !== l || t[15] !== i.root_page_id || t[16] !== p || t[17] !== m
      ? ((h = (0, $.jsx)(ct, { pageId: i.root_page_id, openedAtMs: l, spaceEntry: p, children: m })),
        (t[14] = l),
        (t[15] = i.root_page_id),
        (t[16] = p),
        (t[17] = m),
        (t[18] = h))
      : (h = t[18]),
    h
  );
}
function Nt(e) {
  let t = (0, Z.c)(46),
    { pageId: n, session: r, embedded: i, panelTabId: a, space: o } = e,
    s = O(),
    c = (0, Q.useId)(),
    l;
  t[0] === c ? (l = t[1]) : ((l = () => new Ge(c)), (t[0] = c), (t[1] = l));
  let [u] = (0, Q.useState)(l),
    [d] = (0, Q.useState)(Pt),
    f = (0, Q.useSyncExternalStore)(r.subscribe, r.getSnapshot, r.getSnapshot),
    p = f.hasCanonicalDocument ? f.remoteDocumentRevision : 0,
    m;
  t[2] !== r.document || t[3] !== p
    ? ((m = je(r.document, void 0, p, !0)), (t[2] = r.document), (t[3] = p), (t[4] = m))
    : (m = t[4]);
  let h = m;
  if (h == null) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(J, {})), (t[5] = e)) : (e = t[5]),
      e
    );
  }
  let g = h.kind === `complete` ? h.document : h,
    _;
  t[6] !== i || t[7] !== n || t[8] !== a || t[9] !== f.previewSource || t[10] !== f.remoteDocumentRevision
    ? ((_ =
        (!i || a != null) &&
        (0, $.jsx)(C, {
          scope: Oe,
          value: { tabId: null, pageId: n, accountId: null },
          children: (0, $.jsx)(at, {
            pageId: n,
            panelTabId: a,
            synchronized: !1,
            previewSource: f.previewSource,
            contentRevision: f.remoteDocumentRevision,
          }),
        })),
      (t[6] = i),
      (t[7] = n),
      (t[8] = a),
      (t[9] = f.previewSource),
      (t[10] = f.remoteDocumentRevision),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] !== i || t[13] !== n || t[14] !== g.units || t[15] !== r
    ? ((v = (0, $.jsx)(_e, {
        requireVisibleAtPaint: !0,
        onPaint: () => {
          (r.recordRenderedFrame($e(g.units).trim() !== ``, !1), i || Ce.get(n)?.paintOpportunity());
        },
      })),
      (t[12] = i),
      (t[13] = n),
      (t[14] = g.units),
      (t[15] = r),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== n || t[18] !== g.title || t[19] !== o
    ? ((y = (0, $.jsx)(dt, { pageId: n, space: o, title: g.title })),
      (t[17] = n),
      (t[18] = g.title),
      (t[19] = o),
      (t[20] = y))
    : (y = t[20]);
  let b;
  t[21] === u ? (b = t[22]) : ((b = (0, $.jsx)(We, { editable: !1, registry: u })), (t[21] = u), (t[22] = b));
  let x;
  t[23] === s
    ? (x = t[24])
    : ((x = s.formatMessage({
        id: `codex.space.page.editorPreviewLabel`,
        defaultMessage: `Page document preview`,
        description: `Accessible label for the temporary read-only preview shown while a large Page prepares its full editor`,
      })),
      (t[23] = s),
      (t[24] = x));
  let S;
  t[25] === s.formatMessage
    ? (S = t[26])
    : ((S = pe(s.formatMessage)), (t[25] = s.formatMessage), (t[26] = S));
  let w;
  t[27] !== u || t[28] !== d || t[29] !== g.units || t[30] !== x || t[31] !== S
    ? ((w = (0, $.jsx)(tt, { ariaLabel: x, checkboxes: u, markdown: S, mentionIcons: d, units: g.units })),
      (t[27] = u),
      (t[28] = d),
      (t[29] = g.units),
      (t[30] = x),
      (t[31] = S),
      (t[32] = w))
    : (w = t[32]);
  let T;
  t[33] === d ? (T = t[34]) : ((T = (0, $.jsx)(Ie, { registry: d })), (t[33] = d), (t[34] = T));
  let E;
  t[35] !== w || t[36] !== T || t[37] !== b
    ? ((E = (0, $.jsxs)(`div`, {
        className: `relative`,
        "data-page-document-selection": !0,
        children: [b, w, T],
      })),
      (t[35] = w),
      (t[36] = T),
      (t[37] = b),
      (t[38] = E))
    : (E = t[38]);
  let D;
  t[39] !== E || t[40] !== y
    ? ((D = (0, $.jsx)(pt, { heading: y, children: E })), (t[39] = E), (t[40] = y), (t[41] = D))
    : (D = t[41]);
  let k;
  return (
    t[42] !== D || t[43] !== _ || t[44] !== v
      ? ((k = (0, $.jsxs)(`div`, {
          className: `min-h-0 flex-1 scrollbar-stable overflow-y-auto`,
          children: [_, v, D],
        })),
        (t[42] = D),
        (t[43] = _),
        (t[44] = v),
        (t[45] = k))
      : (k = t[45]),
    k
  );
}
function Pt() {
  return new Me();
}
function Ft() {
  let e = (0, Z.c)(7),
    n = t(ie),
    r = h(),
    i = g(),
    a;
  e[0] === i.search
    ? (a = e[1])
    : ((a = new URLSearchParams(i.search).get(`creation`)), (e[0] = i.search), (e[1] = a));
  let o = a;
  if (o != null) {
    let t;
    return (e[2] === o ? (t = e[3]) : ((t = (0, $.jsx)(gt, { pageId: o })), (e[2] = o), (e[3] = t)), t);
  }
  let s;
  return (
    e[4] !== r || e[5] !== n
      ? ((s = (0, $.jsx)(Ze, {
          onClose: (e) => {
            e === `cancel` && r(n.get(K));
          },
        })),
        (e[4] = r),
        (e[5] = n),
        (e[6] = s))
      : (s = e[6]),
    s
  );
}
var Z, Q, $;
function It() {
  return (It = e(() => {
    ((Z = l()),
      E(),
      S(),
      x(),
      k(),
      (Q = i()),
      _(),
      c(),
      Le(),
      b(),
      me(),
      ue(),
      Re(),
      ne(),
      P(),
      Xe(),
      St(),
      Ue(),
      Ke(),
      et(),
      Qe(),
      Pe(),
      it(),
      re(),
      st(),
      ut(),
      ot(),
      be(),
      ft(),
      mt(),
      ye(),
      ge(),
      se(),
      rt(),
      V(),
      De(),
      L(),
      Te(),
      ze(),
      u(),
      Dt(),
      Je(),
      ($ = o()));
  }))();
}
export { It as n, Ot as t };
//# sourceMappingURL=page-9181340ae938.js.map
