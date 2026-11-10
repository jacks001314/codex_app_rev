import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Ext as r,
  Hxt as i,
  IDt as a,
  Ixt as o,
  Pxt as s,
  VDt as c,
  Vxt as l,
  Xot as u,
  Yot as d,
  _xt as f,
  cI as p,
  hrt as m,
  iI as h,
  iz as g,
  jDt as _,
  kxt as v,
  lI as y,
  oI as b,
  oxt as x,
  rz as S,
  t3 as C,
  vrt as w,
  vzt as T,
  wot as E,
  wxt as D,
  xMt as O,
  yzt as k,
  zxt as A,
} from "./app-shared-bbfeca5e5737.js";
import {
  $1t as j,
  $c as M,
  $m as N,
  ACn as ee,
  Ahn as P,
  Bsn as F,
  Cwr as I,
  D3 as L,
  Dh as R,
  Dor as z,
  GI as B,
  JI as te,
  Jsn as ne,
  KI as re,
  Mmn as ie,
  O3 as ae,
  Oh as oe,
  Oor as se,
  QMr as ce,
  Qm as le,
  Rmt as ue,
  Sct as de,
  XMr as V,
  XR as fe,
  YR as pe,
  ZI as me,
  _4 as he,
  _c as ge,
  aor as _e,
  bTn as ve,
  cor as ye,
  e0t as be,
  el as xe,
  f4 as Se,
  fU as Ce,
  ghn as we,
  gwr as Te,
  hU as H,
  hhn as U,
  jCn as Ee,
  jhn as De,
  jmn as Oe,
  mB as ke,
  mU as W,
  mhn as G,
  pB as Ae,
  pU as je,
  psn as Me,
  qMr as Ne,
  qsn as Pe,
  rcn as Fe,
  tNr as Ie,
  vc as Le,
  xct as K,
  xsn as Re,
  yTn as ze,
  zmt as q,
} from "./app-initial-5851df3f6cb1.js";
import { i as Be, n as Ve, t as He } from "./space-1fd481862d3e.js";
import { n as Ue, t as We } from "./checkboxes-e2ffcb23d363.js";
import { O as Ge, k as Ke } from "./preview-3e5329112556.js";
import { i as qe, n as Je, t as Ye } from "./state-d827adeac3bf.js";
import { n as Xe, t as Ze } from "./new-space-dialog-59e08fd8836b.js";
import { a as Qe, i as $e, r as et, t as tt } from "./checkpoint-preview-2f438071955c.js";
import { n as nt, t as rt } from "./load-metrics-state-1eeeccca7f74.js";
import { n as it, t as at } from "./content-paint-marker-2c29adb0e4f3.js";
import { i as ot, n as st, r as ct, t as lt } from "./editor-7559e0427500.js";
import { a as ut, i as dt, r as J } from "./pending-4692967c2dbe.js";
import { i as ft, t as pt } from "./presentation-a8c851b59c58.js";
import { n as mt, t as ht } from "./layout-1350b9e499a1.js";
function gt(e) {
  let i = (0, xt.c)(67),
    { pageId: s } = e,
    u = o(n),
    d = c(),
    f = D(),
    p = r(),
    m = l(q),
    h = A(Ve, s),
    _ = g(),
    v = l(j),
    y = l(H),
    b,
    S,
    C,
    w,
    T,
    E,
    O,
    k,
    M,
    N;
  if (
    i[0] !== m ||
    i[1] !== h ||
    i[2] !== v ||
    i[3] !== d ||
    i[4] !== _ ||
    i[5] !== f ||
    i[6] !== s ||
    i[7] !== u ||
    i[8] !== y
  ) {
    N = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      (i[19] === s ? (e = i[20]) : ((e = (e) => e.localPageId === s), (i[19] = s), (i[20] = e)),
        (w = y.find(e)));
      let n = w?.space?.spaceId ?? h?.response?.id;
      if (h != null && h.status !== `error` && h.response != null) {
        let e = `/spaces/${h.response.id}`,
          t;
        i[21] !== h.response.id || i[22] !== f.state
          ? ((t = { ...f.state, createdSpaceId: h.response.id }),
            (i[21] = h.response.id),
            (i[22] = f.state),
            (i[23] = t))
          : (t = i[23]);
        let n;
        (i[24] !== t || i[25] !== e
          ? ((n = (0, Y.jsx)(x, { to: e, replace: !0, state: t })), (i[24] = t), (i[25] = e), (i[26] = n))
          : (n = i[26]),
          (N = n));
        break bb0;
      }
      if (h == null && w == null) {
        if (!_ || !v) {
          let e;
          (i[27] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, Y.jsx)(K, {})), (i[27] = e))
            : (e = i[27]),
            (N = e));
          break bb0;
        }
        let e;
        (i[28] === m ? (e = i[29]) : ((e = (0, Y.jsx)(x, { to: m, replace: !0 })), (i[28] = m), (i[29] = e)),
          (N = e));
        break bb0;
      }
      if (h?.status === `creating` || h?.status === `created`) {
        N = (0, Y.jsx)(K, { name: h.name, appearance: w?.appearance });
        break bb0;
      }
      let r;
      (i[30] !== h || i[31] !== s || i[32] !== u
        ? ((r = () => {
            if (h?.status === `error`) {
              h.retry().catch(bt);
              return;
            }
            let e = u.get(H).find((e) => e.localPageId === s);
            e?.space != null && Be(u, { name: e.name, resume: e, createSpace: yt });
          }),
          (i[30] = h),
          (i[31] = s),
          (i[32] = u),
          (i[33] = r))
        : (r = i[33]),
        (C = r),
        (S = h == null && w?.space == null),
        (b = ee),
        (M =
          n == null
            ? (0, Y.jsx)(a, {
                id: `space.teamHome.creationError`,
                defaultMessage: `Could not finish creating space`,
                description: `Space creation or root Page initialization failed; the same Space can be retried. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              })
            : (0, Y.jsx)(a, {
                id: `space.teamHome.setupError`,
                defaultMessage: `Space setup needs attention`,
                description: `The Space exists but its initial setup has not finished. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
              })),
        i[34] === S
          ? (T = i[35])
          : ((T = S
              ? (0, Y.jsx)(a, {
                  id: `space.teamHome.creationOutcomeUnknown`,
                  defaultMessage: `We could not confirm whether this space was created. Check your spaces before creating another one`,
                  description: `A reloaded Space creation has no server ID, so creating again could make a duplicate. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
                })
              : null),
            (i[34] = S),
            (i[35] = T)),
        (E =
          !S &&
          n != null &&
          (0, Y.jsx)(a, {
            id: `space.teamHome.setupIncomplete`,
            defaultMessage: `Your space was created, but setup hasn't finished. Check your connection and try again to continue with the same space`,
            description: `Retry resumes setup on the existing Space without creating a duplicate; its initial page may still be saving. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          })),
        (O =
          !S &&
          n == null &&
          (0, Y.jsx)(a, {
            id: `space.teamHome.creationRetry`,
            defaultMessage: `Check your connection and try again`,
            description: `Recovery guidance when the initial Space creation request fails`,
          })),
        (k =
          w != null &&
          w.invitations.length > 0 &&
          (0, Y.jsx)(`ul`, {
            children: w.invitations.map((e) =>
              (0, Y.jsx)(
                `li`,
                {
                  children:
                    e.status === `shared`
                      ? (0, Y.jsx)(a, {
                          id: `space.teamHome.invitationShared`,
                          defaultMessage: `Shared with {name}`,
                          description: `A Space invitation verified by the server's sharing roster`,
                          values: { name: e.label },
                        })
                      : (0, Y.jsxs)(Y.Fragment, {
                          children: [
                            (0, Y.jsx)(a, {
                              id: `space.teamHome.invitationUnconfirmed`,
                              defaultMessage: `Not confirmed: {name}`,
                              description: `The selected person's or team's Space invitation has not been verified`,
                              values: { name: e.label },
                            }),
                            (0, Y.jsx)(t, {
                              color: `ghost`,
                              "aria-label": d.formatMessage(
                                {
                                  id: `space.teamHome.removeUnconfirmedInvitation`,
                                  defaultMessage: `Remove invitation for {name}`,
                                  description: `Remove an unconfirmed recipient from unfinished Space setup without revoking any existing access`,
                                },
                                { name: e.label },
                              ),
                              onClick: () =>
                                W(u, { ...w, invitations: w.invitations.filter((t) => t !== e) }),
                              children: (0, Y.jsx)(a, {
                                id: `space.teamHome.removeInvitation`,
                                defaultMessage: `Remove`,
                                description: `Remove an unconfirmed invitation from unfinished Space setup`,
                              }),
                            }),
                          ],
                        }),
                },
                Ae(e.recipient),
              ),
            ),
          })));
    }
    ((i[0] = m),
      (i[1] = h),
      (i[2] = v),
      (i[3] = d),
      (i[4] = _),
      (i[5] = f),
      (i[6] = s),
      (i[7] = u),
      (i[8] = y),
      (i[9] = b),
      (i[10] = S),
      (i[11] = C),
      (i[12] = w),
      (i[13] = T),
      (i[14] = E),
      (i[15] = O),
      (i[16] = k),
      (i[17] = M),
      (i[18] = N));
  } else
    ((b = i[9]),
      (S = i[10]),
      (C = i[11]),
      (w = i[12]),
      (T = i[13]),
      (E = i[14]),
      (O = i[15]),
      (k = i[16]),
      (M = i[17]),
      (N = i[18]));
  if (N !== Symbol.for(`react.early_return_sentinel`)) return N;
  let P;
  i[36] !== T || i[37] !== E || i[38] !== O || i[39] !== k
    ? ((P = (0, Y.jsxs)(Y.Fragment, { children: [T, E, O, k] })),
      (i[36] = T),
      (i[37] = E),
      (i[38] = O),
      (i[39] = k),
      (i[40] = P))
    : (P = i[40]);
  let F;
  i[41] !== S || i[42] !== C
    ? ((F =
        !S &&
        (0, Y.jsx)(t, {
          color: `secondary`,
          onClick: C,
          children: (0, Y.jsx)(a, {
            id: `codex.space.page.retry`,
            defaultMessage: `Try again`,
            description: `Button that retries loading shared Pages after a failure`,
          }),
        })),
      (i[41] = S),
      (i[42] = C),
      (i[43] = F))
    : (F = i[43]);
  let I;
  i[44] !== C || i[45] !== u || i[46] !== w
    ? ((I =
        w?.space != null &&
        w.appearance != null &&
        (0, Y.jsx)(t, {
          color: `secondary`,
          onClick: () => {
            (W(u, { ...w, appearance: void 0 }), C());
          },
          children: (0, Y.jsx)(a, {
            id: `space.teamHome.continueWithoutAppearance`,
            defaultMessage: `Continue without custom icon`,
            description: `Continue setting up an existing Space without saving the optional icon and color chosen during creation`,
          }),
        })),
      (i[44] = C),
      (i[45] = u),
      (i[46] = w),
      (i[47] = I))
    : (I = i[47]);
  let L;
  i[48] !== C || i[49] !== u || i[50] !== w
    ? ((L =
        w?.space != null &&
        w.invitations.some(vt) &&
        (0, Y.jsx)(t, {
          color: `secondary`,
          onClick: () => {
            (W(u, { ...w, invitations: w.invitations.filter(_t) }), C());
          },
          children: (0, Y.jsx)(a, {
            id: `space.teamHome.continueWithoutInvitations`,
            defaultMessage: `Continue without remaining invitations`,
            description: `Continue initializing the existing Space while removing unconfirmed invitations from its setup`,
          }),
        })),
      (i[48] = C),
      (i[49] = u),
      (i[50] = w),
      (i[51] = L))
    : (L = i[51]);
  let R;
  i[52] !== p || i[53] !== S || i[54] !== s || i[55] !== u
    ? ((R =
        S &&
        (0, Y.jsx)(t, {
          color: `secondary`,
          onClick: () => {
            (Ce(u, s), p(u.get(q), { replace: !0 }));
          },
          children: (0, Y.jsx)(a, {
            id: `space.teamHome.dismissUnknownSetup`,
            defaultMessage: `Dismiss and view spaces`,
            description: `Forget an incomplete local setup record without deleting any server Space, then return to Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
          }),
        })),
      (i[52] = p),
      (i[53] = S),
      (i[54] = s),
      (i[55] = u),
      (i[56] = R))
    : (R = i[56]);
  let z;
  i[57] !== I || i[58] !== L || i[59] !== R || i[60] !== F
    ? ((z = (0, Y.jsxs)(Y.Fragment, { children: [F, I, L, R] })),
      (i[57] = I),
      (i[58] = L),
      (i[59] = R),
      (i[60] = F),
      (i[61] = z))
    : (z = i[61]);
  let B;
  return (
    i[62] !== b || i[63] !== z || i[64] !== M || i[65] !== P
      ? ((B = (0, Y.jsx)(b, { title: M, description: P, actions: z })),
        (i[62] = b),
        (i[63] = z),
        (i[64] = M),
        (i[65] = P),
        (i[66] = B))
      : (B = i[66]),
    B
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
    ((xt = T()), s(), _(), f(), C(), Ee(), ke(), ue(), de(), E(), be(), S(), He(), je(), (Y = O()));
  }))();
}
function Ct(e) {
  let t = (0, Tt.c)(5),
    { children: r, fallback: i, pageReadStartedAt: a, space: s, takeInitialBootstrap: c } = e,
    l = o(n),
    u;
  t[0] !== a || t[1] !== l || t[2] !== s || t[3] !== c
    ? ((u = () => {
        let e = G(s),
          t = l.get(z),
          n = l.get(V),
          r = l.get(ce).accountUserId,
          i = s.root_page_id,
          o = l.queryClient.getQueryState(l.query.getOptions(F, i).queryKey),
          u =
            a != null &&
            (o?.fetchStatus === `fetching` ||
              ((o?.dataUpdatedAt ?? 0) >= Math.floor(a) &&
                G({ ...s, root_page_metadata: o?.data?.metadata }) != null));
        if (
          s.backing_type !== `drive` ||
          s.deleted_at != null ||
          (e == null && !u) ||
          t == null ||
          n == null ||
          r == null ||
          !l.get(De)
        )
          return Et;
        let d = { accountId: t, userId: n, accountUserId: r },
          f = !1,
          p = !1,
          m = !1;
        return {
          getSnapshot: () => f,
          subscribe: (a) => {
            if (l.get(z) !== t || l.get(V) !== n || l.get(ce).accountUserId !== r) return wt;
            (l.set(ne, i, d),
              (p ||=
                (e != null &&
                  (l.query.cancel(F, i, { exact: !0 }),
                  l.query.setData(F, i, (t) =>
                    t != null &&
                    t.metadata.document_type === e.document_type &&
                    G({ ...s, root_page_metadata: t.metadata }) != null
                      ? { ...t, metadata: e }
                      : { metadata: e },
                  )),
                !0)));
            let o = c?.(i),
              u =
                e == null || (o == null && !m)
                  ? void 0
                  : Se({ scope: l, pageId: i, initialBootstrap: o, pageViewReportingEnabled: !1 });
            u != null &&
              e != null &&
              ((m = !0), u.session.applyMetadata(e), u.session.start(B(e.access, `content`)));
            let h = se(l, t, n, r),
              g = () => {
                ((f = !1), l.set(ne, i, (e) => (e === d ? null : e)));
              },
              _ = () => {
                (g(), Me(l, i, t), a());
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
      (t[0] = a),
      (t[1] = l),
      (t[2] = s),
      (t[3] = c),
      (t[4] = u))
    : (u = t[4]);
  let [d] = (0, X.useState)(u);
  return (0, X.useSyncExternalStore)(d.subscribe, d.getSnapshot, d.getSnapshot) ? r : i;
}
function wt() {}
var Tt, X, Et;
function Dt() {
  return (Dt = e(() => {
    ((Tt = T()),
      s(),
      (X = k()),
      Ie(),
      P(),
      re(),
      he(),
      U(),
      Re(),
      E(),
      (Et = { subscribe: () => () => {}, getSnapshot: () => !0 }));
  }))();
}
function Ot(e) {
  let t = (0, Z.c)(11),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ spaceId: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = l(z),
    a = l(V),
    o = l(Ne),
    { spaceId: s } = v(),
    c = n ?? s;
  if (i == null) {
    let e;
    return (
      t[3] === c
        ? (e = t[4])
        : ((e = c == null ? (0, $.jsx)(K, {}) : (0, $.jsx)(J, {})), (t[3] = c), (t[4] = e)),
      e
    );
  }
  let u;
  return (
    t[5] !== i || t[6] !== o || t[7] !== c || t[8] !== r || t[9] !== a
      ? ((u =
          c == null
            ? (0, $.jsx)(Ft, {}, `${a}:${i}:${o}`)
            : (0, $.jsx)(kt, { ...r, spaceId: c }, `${a}:${i}:${o}:${c}`)),
        (t[5] = i),
        (t[6] = o),
        (t[7] = c),
        (t[8] = r),
        (t[9] = a),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
function kt(e) {
  let n = (0, Z.c)(50),
    i,
    s;
  n[0] === e ? ((i = n[1]), (s = n[2])) : (({ spaceId: i, ...s } = e), (n[0] = e), (n[1] = i), (n[2] = s));
  let c = o(Te),
    d = s.panelTabId,
    f = r(),
    p = l(z),
    h = l(V),
    [g] = (0, Q.useState)(At),
    _;
  n[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = { enabled: !1 }), (n[3] = _)) : (_ = n[3]);
  let { data: v } = A(Pe, i, _),
    y;
  n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = { enabled: !1 }), (n[4] = y)) : (y = n[4]);
  let { data: b } = l(Fe, y),
    x = A(qe, i),
    S;
  n[5] !== p || n[6] !== g || n[7] !== v || n[8] !== b?.items || n[9] !== c || n[10] !== i || n[11] !== h
    ? ((S = async (e) => {
        let { signal: t, queryKey: n } = e,
          r = v != null || b?.items.some((e) => e.id === i) || c.queryClient.getQueryData(n) != null,
          a = await Ye(c, i, {
            accountId: p,
            userId: h,
            signal: t,
            originQueryKey: n,
            onRootPageRealtimeBootstrap: g.hasRequested() || r ? void 0 : g.receive,
          });
        return (g.complete(), a);
      }),
      (n[5] = p),
      (n[6] = g),
      (n[7] = v),
      (n[8] = b?.items),
      (n[9] = c),
      (n[10] = i),
      (n[11] = h),
      (n[12] = S))
    : (S = n[12]);
  let C;
  n[13] !== x || n[14] !== S
    ? ((C = { ...x, staleTime: x.staleTime, queryFn: S }), (n[13] = x), (n[14] = S), (n[15] = C))
    : (C = n[15]);
  let { data: w, isError: T, error: E, errorUpdatedAt: D, isFetchedAfterMount: O, refetch: k } = u(C),
    [j, M] = (0, Q.useState)(w?.backing_type);
  w != null && j !== w.backing_type && M(w.backing_type);
  let N, P;
  if (
    (n[16] !== E || n[17] !== T || n[18] !== d || n[19] !== c
      ? ((N = () =>
          nt(c, d, (e) => {
            T &&
              e.finishPending(
                `failure`,
                E instanceof m && [403, 404, 410].includes(E.status) ? `access_denied` : `page_unavailable`,
              );
          })),
        (P = [c, d, T, E]),
        (n[16] = E),
        (n[17] = T),
        (n[18] = d),
        (n[19] = c),
        (n[20] = N),
        (n[21] = P))
      : ((N = n[20]), (P = n[21])),
    (0, Q.useLayoutEffect)(N, P),
    E instanceof m && [403, 404, 410].includes(E.status))
  ) {
    let e = s.onOpenPage == null,
      t;
    n[22] === i ? (t = n[23]) : ((t = { kind: `space`, id: i }), (n[22] = i), (n[23] = t));
    let r = j == null ? void 0 : j === `drive`,
      a;
    n[24] === k ? (a = n[25]) : ((a = () => void k()), (n[24] = k), (n[25] = a));
    let o;
    return (
      n[26] !== D || n[27] !== a || n[28] !== e || n[29] !== t || n[30] !== r
        ? ((o = (0, $.jsx)(ge, { recoverWorkspace: e, target: t, canRequestAccess: r, onRetry: a }, D)),
          (n[26] = D),
          (n[27] = a),
          (n[28] = e),
          (n[29] = t),
          (n[30] = r),
          (n[31] = o))
        : (o = n[31]),
      o
    );
  }
  if (T) {
    let e;
    n[32] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(a, {
          id: `codex.space.openError`,
          defaultMessage: `Could not open space`,
          description: `Error shown when the current account cannot load a Space. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.`,
        })),
        (n[32] = e))
      : (e = n[32]);
    let r;
    n[33] === k ? (r = n[34]) : ((r = () => void k()), (n[33] = k), (n[34] = r));
    let i;
    n[35] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(a, {
          id: `codex.space.page.retry`,
          defaultMessage: `Try again`,
          description: `Button that retries loading shared Pages after a failure`,
        })),
        (n[35] = i))
      : (i = n[35]);
    let o;
    return (
      n[36] === r
        ? (o = n[37])
        : ((o = (0, $.jsx)(ee, {
            title: e,
            actions: (0, $.jsx)(t, { color: `secondary`, onClick: r, children: i }),
          })),
          (n[36] = r),
          (n[37] = o)),
      o
    );
  }
  let F;
  if (n[38] !== v || n[39] !== b?.items || n[40] !== i || n[41] !== w) {
    let e = b?.items.find((e) => e.id === i),
      t = w ?? v;
    ((F = t == null ? e : we(t, e)), (n[38] = v), (n[39] = b?.items), (n[40] = i), (n[41] = w), (n[42] = F));
  } else F = n[42];
  let I = F;
  if (I == null) {
    let e;
    return (
      n[43] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(J, {})), (n[43] = e))
        : (e = n[43]),
      e
    );
  }
  let L = O ? w : void 0,
    R;
  return (
    n[44] !== g.take || n[45] !== f || n[46] !== I || n[47] !== L || n[48] !== s
      ? ((R = (0, $.jsx)(jt, {
          ...s,
          navigate: f,
          space: I,
          authorizedSpace: L,
          takeInitialBootstrap: g.take,
        })),
        (n[44] = g.take),
        (n[45] = f),
        (n[46] = I),
        (n[47] = L),
        (n[48] = s),
        (n[49] = R))
      : (R = n[49]),
    R
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
      panelTarget: d,
      panelTabId: f,
    } = e,
    p = D();
  ie.bindSpaceRoot(r.id, r.root_page_id);
  let m;
  t[0] !== p || t[1] !== l || t[2] !== r.root_page_id
    ? ((m = l == null ? b(`page://${r.root_page_id}${p.hash}`) : null),
      (t[0] = p),
      (t[1] = l),
      (t[2] = r.root_page_id),
      (t[3] = m))
    : (m = t[3]);
  let h = m,
    g;
  t[4] !== s || t[5] !== l || t[6] !== d || t[7] !== r.root_page_id
    ? ((g =
        l == null
          ? { pageId: r.root_page_id, surface: `route` }
          : {
              pageId: r.root_page_id,
              surface: `side-panel`,
              onOpenPage: l,
              panelTarget: d ?? null,
              isActive: s ?? !0,
            }),
      (t[4] = s),
      (t[5] = l),
      (t[6] = d),
      (t[7] = r.root_page_id),
      (t[8] = g))
    : (g = t[8]);
  let _ = g,
    v = l != null,
    x;
  t[9] !== o ||
  t[10] !== _ ||
  t[11] !== p ||
  t[12] !== n ||
  t[13] !== l ||
  t[14] !== u ||
  t[15] !== c?.blockId ||
  t[16] !== c?.focusTitle ||
  t[17] !== c?.navigationTarget ||
  t[18] !== c?.pagePreview ||
  t[19] !== f ||
  t[20] !== h ||
  t[21] !== r
    ? ((x = (e) => {
        let t = (t) =>
          (0, $.jsx)(Q.Suspense, {
            fallback: e,
            children: (0, $.jsx)(
              lt,
              {
                explorer: t ?? void 0,
                panelTabId: f,
                ..._,
                blockId:
                  h?.kind === `page` ? (h.blockId ?? (p.state?.scrollPageToTop ? null : void 0)) : c?.blockId,
                blockNavigationKey: l == null ? p.key : o,
                focusTitle: l == null ? p.state?.focusPageTitle : c?.focusTitle,
                pagePreview: c?.pagePreview,
                loadingFallback: e,
                navigationTarget: l == null ? y(p.search, p.key) : c?.navigationTarget,
                onTitleFocused:
                  l == null
                    ? () => {
                        n(p, { replace: !0, state: { ...p.state, focusPageTitle: !1, scrollPageToTop: !1 } });
                      }
                    : u,
                space: r.backing_type === `drive` ? r : void 0,
              },
              r.root_page_id,
            ),
          });
        return l == null || f != null
          ? (0, $.jsx)(ht, { pageId: r.root_page_id, tabId: l == null ? void 0 : f, children: t })
          : t(null);
      }),
      (t[9] = o),
      (t[10] = _),
      (t[11] = p),
      (t[12] = n),
      (t[13] = l),
      (t[14] = u),
      (t[15] = c?.blockId),
      (t[16] = c?.focusTitle),
      (t[17] = c?.navigationTarget),
      (t[18] = c?.pagePreview),
      (t[19] = f),
      (t[20] = h),
      (t[21] = r),
      (t[22] = x))
    : (x = t[22]);
  let S;
  return (
    t[23] !== i || t[24] !== f || t[25] !== r || t[26] !== v || t[27] !== x || t[28] !== a
      ? ((S = (0, $.jsx)(
          Mt,
          { authorizedSpace: i, space: r, takeInitialBootstrap: a, panelTabId: f, embedded: v, children: x },
          r.root_page_id,
        )),
        (t[23] = i),
        (t[24] = f),
        (t[25] = r),
        (t[26] = v),
        (t[27] = x),
        (t[28] = a),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function Mt(e) {
  let t = (0, Z.c)(19),
    { authorizedSpace: n, children: r, space: i, takeInitialBootstrap: a, embedded: o, panelTabId: s } = e,
    c = o !== void 0 && o,
    [l] = (0, Q.useState)(Date.now),
    u;
  if (t[0] !== i) {
    let e = G(i);
    ((u = e == null ? void 0 : ye(e)), (t[0] = i), (t[1] = u));
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
              ? (0, $.jsx)(ze, {})
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
    { pageId: n, session: r, embedded: a, panelTabId: o, space: s } = e,
    l = c(),
    u = (0, Q.useId)(),
    d;
  t[0] === u ? (d = t[1]) : ((d = () => new Ge(u)), (t[0] = u), (t[1] = d));
  let [f] = (0, Q.useState)(d),
    [p] = (0, Q.useState)(Pt),
    m = (0, Q.useSyncExternalStore)(r.subscribe, r.getSnapshot, r.getSnapshot),
    h = m.hasCanonicalDocument ? m.remoteDocumentRevision : 0,
    g;
  t[2] !== r.document || t[3] !== h
    ? ((g = xe(r.document, void 0, h, !0)), (t[2] = r.document), (t[3] = h), (t[4] = g))
    : (g = t[4]);
  let _ = g;
  if (_ == null) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(J, {})), (t[5] = e)) : (e = t[5]),
      e
    );
  }
  let v = _.kind === `complete` ? _.document : _,
    y;
  t[6] !== a || t[7] !== n || t[8] !== o || t[9] !== m.previewSource || t[10] !== m.remoteDocumentRevision
    ? ((y =
        (!a || o != null) &&
        (0, $.jsx)(i, {
          scope: te,
          value: { tabId: null, pageId: n, accountId: null },
          children: (0, $.jsx)(at, {
            pageId: n,
            panelTabId: o,
            synchronized: !1,
            previewSource: m.previewSource,
            contentRevision: m.remoteDocumentRevision,
          }),
        })),
      (t[6] = a),
      (t[7] = n),
      (t[8] = o),
      (t[9] = m.previewSource),
      (t[10] = m.remoteDocumentRevision),
      (t[11] = y))
    : (y = t[11]);
  let b;
  t[12] !== a || t[13] !== n || t[14] !== v.units || t[15] !== r
    ? ((b = (0, $.jsx)(pe, {
        requireVisibleAtPaint: !0,
        onPaint: () => {
          (r.recordRenderedFrame($e(v.units).trim() !== ``, !1), a || ie.get(n)?.paintOpportunity());
        },
      })),
      (t[12] = a),
      (t[13] = n),
      (t[14] = v.units),
      (t[15] = r),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== n || t[18] !== v.title || t[19] !== s
    ? ((x = (0, $.jsx)(dt, { pageId: n, space: s, title: v.title })),
      (t[17] = n),
      (t[18] = v.title),
      (t[19] = s),
      (t[20] = x))
    : (x = t[20]);
  let S;
  t[21] === f ? (S = t[22]) : ((S = (0, $.jsx)(We, { editable: !1, registry: f })), (t[21] = f), (t[22] = S));
  let C;
  t[23] === l
    ? (C = t[24])
    : ((C = l.formatMessage({
        id: `codex.space.page.editorPreviewLabel`,
        defaultMessage: `Page document preview`,
        description: `Accessible label for the temporary read-only preview shown while a large Page prepares its full editor`,
      })),
      (t[23] = l),
      (t[24] = C));
  let w;
  t[25] === l.formatMessage
    ? (w = t[26])
    : ((w = L(l.formatMessage)), (t[25] = l.formatMessage), (t[26] = w));
  let T;
  t[27] !== f || t[28] !== p || t[29] !== v.units || t[30] !== C || t[31] !== w
    ? ((T = (0, $.jsx)(tt, { ariaLabel: C, checkboxes: f, markdown: w, mentionIcons: p, units: v.units })),
      (t[27] = f),
      (t[28] = p),
      (t[29] = v.units),
      (t[30] = C),
      (t[31] = w),
      (t[32] = T))
    : (T = t[32]);
  let E;
  t[33] === p ? (E = t[34]) : ((E = (0, $.jsx)(le, { registry: p })), (t[33] = p), (t[34] = E));
  let D;
  t[35] !== T || t[36] !== E || t[37] !== S
    ? ((D = (0, $.jsxs)(`div`, {
        className: `relative`,
        "data-page-document-selection": !0,
        children: [S, T, E],
      })),
      (t[35] = T),
      (t[36] = E),
      (t[37] = S),
      (t[38] = D))
    : (D = t[38]);
  let O;
  t[39] !== D || t[40] !== x
    ? ((O = (0, $.jsx)(pt, { heading: x, children: D })), (t[39] = D), (t[40] = x), (t[41] = O))
    : (O = t[41]);
  let k;
  return (
    t[42] !== O || t[43] !== y || t[44] !== b
      ? ((k = (0, $.jsxs)(`div`, {
          className: `min-h-0 flex-1 scrollbar-stable overflow-y-auto`,
          children: [y, b, O],
        })),
        (t[42] = O),
        (t[43] = y),
        (t[44] = b),
        (t[45] = k))
      : (k = t[45]),
    k
  );
}
function Pt() {
  return new R();
}
function Ft() {
  let e = (0, Z.c)(7),
    t = o(Te),
    n = r(),
    i = D(),
    a;
  e[0] === i.search
    ? (a = e[1])
    : ((a = new URLSearchParams(i.search).get(`creation`)), (e[0] = i.search), (e[1] = a));
  let s = a;
  if (s != null) {
    let t;
    return (e[2] === s ? (t = e[3]) : ((t = (0, $.jsx)(gt, { pageId: s })), (e[2] = s), (e[3] = t)), t);
  }
  let c;
  return (
    e[4] !== n || e[5] !== t
      ? ((c = (0, $.jsx)(Ze, {
          onClose: (e) => {
            e === `cancel` && n(t.get(q));
          },
        })),
        (e[4] = n),
        (e[5] = t),
        (e[6] = c))
      : (c = e[6]),
    c
  );
}
var Z, Q, $;
function It() {
  return (It = e(() => {
    ((Z = T()),
      d(),
      s(),
      p(),
      h(),
      (Q = k()),
      _(),
      f(),
      Ie(),
      C(),
      Ee(),
      ve(),
      N(),
      oe(),
      Le(),
      Xe(),
      St(),
      Ue(),
      Ke(),
      et(),
      Qe(),
      M(),
      it(),
      _e(),
      st(),
      ut(),
      ot(),
      ae(),
      ft(),
      mt(),
      ue(),
      Oe(),
      me(),
      rt(),
      U(),
      Re(),
      de(),
      fe(),
      I(),
      w(),
      Dt(),
      Je(),
      ($ = O()));
  }))();
}
export { It as n, Ot as t };
//# sourceMappingURL=page-f11db65b77f5.js.map
