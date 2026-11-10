import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  AO as r,
  Aat as i,
  BS as a,
  CO as o,
  CPt as s,
  Cot as c,
  E4 as l,
  Ext as u,
  GV as d,
  HNt as f,
  Hx as p,
  Hxt as m,
  IDt as h,
  Iot as g,
  Ixt as _,
  KG as v,
  Kat as y,
  LT as b,
  Lot as x,
  MV as S,
  Myt as C,
  Mz as ee,
  Nz as w,
  Oat as T,
  Pxt as E,
  RT as D,
  Rxt as te,
  SJ as ne,
  SPt as O,
  T4 as k,
  TJ as A,
  TO as j,
  VDt as M,
  VS as N,
  Vx as re,
  Vxt as ie,
  _xt as ae,
  cz as P,
  hft as F,
  hot as I,
  i3 as L,
  jDt as R,
  lot as z,
  mV as B,
  nSt as V,
  oSt as H,
  pft as U,
  qG as oe,
  qat as W,
  r3 as G,
  rst as K,
  sz as se,
  t3 as q,
  tq as ce,
  vzt as J,
  wot as le,
  wxt as ue,
  xMt as de,
  yzt as fe,
  zxt as Y,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as pe,
  $dn as me,
  $pr as he,
  ACn as ge,
  Agt as _e,
  BOt as ve,
  Cqt as ye,
  Ctt as be,
  Cwr as xe,
  D0 as Se,
  D8n as Ce,
  Dir as we,
  E0 as Te,
  E8n as Ee,
  Eqt as De,
  Evr as Oe,
  Exr as ke,
  FFr as Ae,
  Fyr as je,
  G8n as Me,
  GMr as Ne,
  HOt as Pe,
  Hwr as Fe,
  Iwr as Ie,
  Iyr as Le,
  Jut as Re,
  Jwn as ze,
  Kut as Be,
  LOt as Ve,
  Lqt as He,
  Nfr as Ue,
  O9n as We,
  Oir as Ge,
  Pyr as Ke,
  QSr as qe,
  Qpr as Je,
  Qut as Ye,
  S6n as Xe,
  Sqt as Ze,
  Tqt as Qe,
  Tvr as $e,
  Vqt as et,
  Wwr as tt,
  XPr as nt,
  Xut as rt,
  YPr as it,
  Yut as at,
  Ywn as ot,
  ZSr as st,
  Zut as ct,
  _Tr as lt,
  _bn as ut,
  _qt as dt,
  aIr as ft,
  bTn as pt,
  bgt as mt,
  bqt as ht,
  dCr as gt,
  ftt as _t,
  fvr as vt,
  g8n as yt,
  gvr as bt,
  gwr as xt,
  jCn as St,
  k9n as Ct,
  kfr as wt,
  kvr as Tt,
  ltt as Et,
  m8n as Dt,
  mvr as Ot,
  nbn as kt,
  nqt as At,
  o8n as jt,
  oFr as Mt,
  oIr as Nt,
  oqt as Pt,
  qut as Ft,
  qwr as It,
  rTn as Lt,
  rmr as Rt,
  sCr as zt,
  tNr as Bt,
  tTn as Vt,
  tbn as Ht,
  tfn as Ut,
  tqt as Wt,
  ubr as Gt,
  v8n as Kt,
  vTr as qt,
  vbn as Jt,
  vq as Yt,
  w6n as Xt,
  w8n as Zt,
  wtt as Qt,
  wvr as $t,
  x6n as en,
  xqt as tn,
  y8n as nn,
  yCr as rn,
  yTn as an,
  yq as on,
  yqt as sn,
  zFr as cn,
} from "./app-initial-5851df3f6cb1.js";
import { Bt as ln, Pm as un, Vt as dn } from "./app-primary-fe8a450b3b04.js";
import { n as fn, t as pn } from "./content-quick-chat-overlay-fae2ee1c31a8.js";
import { n as mn, t as hn } from "./delete-archived-chats-dialog-45385c82c8a1.js";
import { n as gn, t as _n } from "./preview-footer-controls-b897d8cb297b.js";
import {
  a as vn,
  d as yn,
  f as bn,
  n as xn,
  o as Sn,
  p as Cn,
  s as wn,
  u as Tn,
} from "./local-conversation-thread-6999d2419a30.js";
import { n as En, t as Dn } from "./pending-local-conversation-thread-1f3ac9e93aa2.js";
import { n as On, t as kn } from "./realtime-voice-launch-surface-6cde3ff5da14.js";
import { i as An, n as jn, r as Mn, t as Nn } from "./side-chat-composer-7be547a39e2e.js";
import { n as Pn, t as Fn } from "./lazy-room-view-da68d3e602b4.js";
import { r as In, t as Ln } from "./selection-composer-visibility-81abee1029e4.js";
import { c as Rn, o as zn, s as Bn } from "./quick-chat-floating-surface-51ff4a9417a5.js";
import { n as Vn, t as Hn } from "./thread-scroll-layout-96ebbe17c836.js";
function Un(e) {
  let t = (0, Wn.c)(77),
    { conversationId: n, hostId: r } = e,
    i = _(c),
    a = Y(jt, n),
    o = Y(Zt, n),
    s = ie(ct),
    l;
  t[0] !== n || t[1] !== r || t[2] !== s
    ? ((l = s?.find((e) => {
        let { task: t } = e;
        return t.kind === `local` && t.hostId === r && t.thread.id === n;
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = s),
      (t[3] = l))
    : (l = t[3]);
  let d = l,
    f = ie(Ye),
    [p, m] = (0, Gn.useState)(null),
    g = ue(),
    v = u(),
    b;
  t[4] !== g.hash || t[5] !== g.pathname || t[6] !== g.search || t[7] !== g.state || t[8] !== v || t[9] !== i
    ? ((b = () => {
        (Re(i),
          v(
            { pathname: g.pathname, search: g.search, hash: g.hash },
            { replace: !0, state: { ...g.state, archivedConversationPreview: !1 } },
          ));
      }),
      (t[4] = g.hash),
      (t[5] = g.pathname),
      (t[6] = g.search),
      (t[7] = g.state),
      (t[8] = v),
      (t[9] = i),
      (t[10] = b))
    : (b = t[10]);
  let S = b,
    C,
    w;
  t[11] !== n || t[12] !== r || t[13] !== i
    ? ((C = () => {
        let e = i.get(Ye);
        return e?.kind === `local` && e.hostId === r && e.thread.id === n ? Ft(i, e) : void 0;
      }),
      (w = async (e) => {
        (e != null && r !== `durable` && (await ve(i, { conversationId: n, cwd: e, hostId: r })),
          await it(i, r).unarchiveConversation(n, { useAppServerPins: i.get(We) }));
      }),
      (t[11] = n),
      (t[12] = r),
      (t[13] = i),
      (t[14] = C),
      (t[15] = w))
    : ((C = t[14]), (w = t[15]));
  let T;
  t[16] !== n || t[17] !== S || t[18] !== r || t[19] !== i
    ? ((T = (e, t, a) => {
        a?.(`restored`);
        let o = i.get(I).info((0, X.jsx)(h, { ...Yt.unarchiveSuccessPlain }), {
          leading: (0, X.jsx)(ee, { "aria-hidden": !1, asset: k }),
          primaryAction: {
            label: (0, X.jsx)(h, { ...Yt.viewNow }),
            onClick: () => {
              (o.close(), S());
            },
          },
          id: `unarchive-thread-${n}`,
        });
        i.queryClient.invalidateQueries({ queryKey: [`archived-threads`, r] });
      }),
      (t[16] = n),
      (t[17] = S),
      (t[18] = r),
      (t[19] = i),
      (t[20] = T))
    : (T = t[20]);
  let E;
  t[21] !== r || t[22] !== i
    ? ((E = (e, t, n) => {
        (n?.(e instanceof ke ? `restored` : null),
          e instanceof ke
            ? (i.queryClient.invalidateQueries({ queryKey: [`archived-threads`, r] }),
              i
                .get(I)
                .danger((0, X.jsx)(h, { ...Yt.openError }), {
                  errorAnalytics: { toastId: `localPreviewFooter.onError.openError` },
                }))
            : i
                .get(I)
                .danger(
                  (0, X.jsx)(h, {
                    id: `localConversation.archived.previewUnarchiveError`,
                    defaultMessage: `Could not unarchive this chat`,
                    description: `Error shown when restoring an archived chat from the transcript footer fails`,
                  }),
                  { errorAnalytics: { toastId: `localConversation.archived.previewUnarchiveError` } },
                ));
      }),
      (t[21] = r),
      (t[22] = i),
      (t[23] = E))
    : (E = t[23]);
  let D;
  t[24] !== C || t[25] !== w || t[26] !== T || t[27] !== E
    ? ((D = { onMutate: C, mutationFn: w, onSuccess: T, onError: E }),
      (t[24] = C),
      (t[25] = w),
      (t[26] = T),
      (t[27] = E),
      (t[28] = D))
    : (D = t[28]);
  let { mutate: te, isPending: ne } = x(D),
    O;
  t[29] === i
    ? (O = t[30])
    : ((O = () => ({ accountId: i.get(Ne), visit: i.get(Be), location: i.get(Ae) })),
      (t[29] = i),
      (t[30] = O));
  let A;
  t[31] !== n || t[32] !== r || t[33] !== i
    ? ((A = () => it(i, r).deleteArchivedConversation(n)), (t[31] = n), (t[32] = r), (t[33] = i), (t[34] = A))
    : (A = t[34]);
  let j;
  t[35] !== n || t[36] !== r || t[37] !== v || t[38] !== i
    ? ((j = async (e, t, a) => {
        if (i.get(Ne) !== a.accountId) return;
        if (!e.includes(n)) {
          i.get(I).danger((0, X.jsx)(h, { ...Yt.deleteError }), {
            errorAnalytics: { toastId: `localPreviewFooter.onSuccess.deleteError` },
          });
          return;
        }
        if (
          (await i.queryClient.cancelQueries({ queryKey: [`archived-threads`, r] }),
          i.get(Ne) !== a.accountId)
        )
          return;
        (i.queryClient.setQueriesData({ queryKey: [`archived-threads`, r, `sidebar`] }, (t) =>
          t == null
            ? t
            : { ...t, pages: t.pages.map((t) => ({ ...t, data: t.data.filter((t) => !e.includes(t.id)) })) },
        ),
          m(null),
          i.get(I).success((0, X.jsx)(h, { ...Yt.deleteSuccessPlain })));
        let o = i.get(Ye);
        i.get(Be) === a.visit &&
          i.get(Ae) === a.location &&
          o?.kind === `local` &&
          o.hostId === r &&
          o.thread.id === n &&
          (i.set(Ye, null),
          v(a.visit?.pathname === `/archive` ? a.visit : `/`, {
            replace: !0,
            state: a.visit?.pathname === `/archive` ? a.visit.state : null,
          }));
      }),
      (t[35] = n),
      (t[36] = r),
      (t[37] = v),
      (t[38] = i),
      (t[39] = j))
    : (j = t[39]);
  let M;
  t[40] === i
    ? (M = t[41])
    : ((M = (e, t, n) => {
        i.get(Ne) === n?.accountId &&
          i
            .get(I)
            .danger((0, X.jsx)(h, { ...(F(e, `thread/delete`) ? Yt.deleteUnsupported : Yt.deleteError) }), {
              errorAnalytics: { toastId: `localPreviewFooter.onError.deleteUnsupported` },
            });
      }),
      (t[40] = i),
      (t[41] = M));
  let N;
  t[42] !== r || t[43] !== i
    ? ((N = () => {
        i.queryClient.invalidateQueries({ queryKey: [`archived-threads`, r] });
      }),
      (t[42] = r),
      (t[43] = i),
      (t[44] = N))
    : (N = t[44]);
  let re;
  t[45] !== j || t[46] !== M || t[47] !== N || t[48] !== O || t[49] !== A
    ? ((re = { onMutate: O, mutationFn: A, onSuccess: j, onError: M, onSettled: N }),
      (t[45] = j),
      (t[46] = M),
      (t[47] = N),
      (t[48] = O),
      (t[49] = A),
      (t[50] = re))
    : (re = t[50]);
  let { mutate: ae, isPending: P } = x(re),
    L;
  t[51] !== n || t[52] !== r || t[53] !== f
    ? ((L =
        r === `local` &&
        y?.threadArchive != null &&
        f?.kind === `local` &&
        f.hostId === r &&
        f.thread.id === n
          ? () => m(f.thread)
          : void 0),
      (t[51] = n),
      (t[52] = r),
      (t[53] = f),
      (t[54] = L))
    : (L = t[54]);
  let R = !o || d?.status === `restored`,
    z = ne || d?.status === `restoring`,
    B;
  t[55] !== a || t[56] !== te ? ((B = () => te(a)), (t[55] = a), (t[56] = te), (t[57] = B)) : (B = t[57]);
  let V;
  t[58] !== S || t[59] !== P || t[60] !== L || t[61] !== R || t[62] !== z || t[63] !== B
    ? ((V = (0, X.jsx)(_n, {
        deleting: P,
        onDelete: L,
        restored: R,
        restoring: z,
        onUnarchive: B,
        onDone: S,
      })),
      (t[58] = S),
      (t[59] = P),
      (t[60] = L),
      (t[61] = R),
      (t[62] = z),
      (t[63] = B),
      (t[64] = V))
    : (V = t[64]);
  let H;
  t[65] === p
    ? (H = t[66])
    : ((H = p == null ? null : { kind: `single`, thread: p }), (t[65] = p), (t[66] = H));
  let U;
  t[67] === ae ? (U = t[68]) : ((U = () => ae()), (t[67] = ae), (t[68] = U));
  let oe;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (e) => {
        e || m(null);
      }),
      (t[69] = oe))
    : (oe = t[69]);
  let W;
  t[70] !== P || t[71] !== H || t[72] !== U
    ? ((W = (0, X.jsx)(hn, { state: H, isDeleting: P, onConfirm: U, onOpenChange: oe })),
      (t[70] = P),
      (t[71] = H),
      (t[72] = U),
      (t[73] = W))
    : (W = t[73]);
  let G;
  return (
    t[74] !== V || t[75] !== W
      ? ((G = (0, X.jsxs)(X.Fragment, { children: [V, W] })), (t[74] = V), (t[75] = W), (t[76] = G))
      : (G = t[76]),
    G
  );
}
var Wn, Gn, X;
function Kn() {
  return (Kn = e(() => {
    ((Wn = J()),
      l(),
      g(),
      Gt(),
      E(),
      K(),
      U(),
      (Gn = fe()),
      R(),
      ae(),
      nt(),
      Kt(),
      Bt(),
      w(),
      z(),
      cn(),
      Ct(),
      W(),
      le(),
      on(),
      mn(),
      Mt(),
      Ve(),
      gn(),
      at(),
      (X = de()));
  }))();
}
function qn(e) {
  let t = (0, Xn.c)(56),
    { conversationId: r, title: a, defaultOpen: c, newChatDisabled: l, onNewChat: u, onSelectChat: d } = e,
    f = c !== void 0 && c,
    p = l !== void 0 && l,
    m = _(xt),
    g = M(),
    v = ie(ot),
    [y, b] = (0, Zn.useState)(f),
    x = (0, Zn.useRef)(!1),
    C = Y(r == null ? null : Ze, r),
    ee = Y(tn, r),
    w = ie(ht),
    T = Y(Dt, r),
    E = Y(rt, r),
    D = Y(Zt, r);
  Y(Me, r);
  let te;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((te = !i() && !0), (t[0] = te)) : (te = t[0]);
  let ne = te,
    O;
  t[1] !== v || t[2] !== g
    ? ((O = v
        ? g.formatMessage({
            id: `floatingComposer.chooseChat`,
            defaultMessage: `Switch chat`,
            description: `Tooltip and accessible label for the floating composer menu that switches chats or starts a side chat`,
          })
        : g.formatMessage({
            id: `floatingComposer.chatOptions`,
            defaultMessage: `Chat options`,
            description: `Tooltip and accessible label for a workspace chat menu with a New chat action`,
          })),
      (t[1] = v),
      (t[2] = g),
      (t[3] = O))
    : (O = t[3]);
  let k = O,
    A;
  t[4] !== d || t[5] !== m
    ? ((A = (e) => {
        (m.set(ht, { ...m.get(ht), conversationId: e }), (x.current = !0), d?.(e));
      }),
      (t[4] = d),
      (t[5] = m),
      (t[6] = A))
    : (A = t[6]);
  let N = A,
    re;
  t[7] !== r || t[8] !== g || t[9] !== d || t[10] !== m
    ? ((re = async () => {
        if (r != null)
          try {
            let e = await An(m, r, g);
            e != null && m.get(ht).conversationId === e && d?.(e);
          } catch (e) {
            let t = e;
            (s.error(`Failed to create a side chat from the floating composer`, {
              safe: {},
              sensitive: { error: t },
            }),
              m
                .get(I)
                .danger(
                  (0, Z.jsx)(h, {
                    id: `floatingComposer.createSideChatError`,
                    defaultMessage: `Failed to start a new side chat`,
                    description: `Error shown when creating a side chat from the floating composer fails`,
                  }),
                  { errorAnalytics: { toastId: `floatingComposer.createSideChatError` } },
                ));
          }
      }),
      (t[7] = r),
      (t[8] = g),
      (t[9] = d),
      (t[10] = m),
      (t[11] = re))
    : (re = t[11]);
  let ae = re,
    P;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        x.current &&= (e.preventDefault(), !1);
      }),
      (t[12] = P))
    : (P = t[12]);
  let F;
  t[13] === a
    ? (F = t[14])
    : ((F =
        a ??
        (0, Z.jsx)(h, {
          id: `quickChat.mainConversation`,
          defaultMessage: `Chat`,
          description: `Fallback title for the task's main conversation in the floating chat`,
        })),
      (t[13] = a),
      (t[14] = F));
  let L;
  t[15] === F
    ? (L = t[16])
    : ((L = (0, Z.jsx)(`span`, { className: `truncate`, children: F })), (t[15] = F), (t[16] = L));
  let R;
  t[17] !== v || t[18] !== w
    ? ((R = v && w.isCreating ? (0, Z.jsx)(G, { as: `span`, className: `icon-xxs` }) : (0, Z.jsx)(S, {})),
      (t[17] = v),
      (t[18] = w),
      (t[19] = R))
    : (R = t[19]);
  let z;
  t[20] !== k || t[21] !== R || t[22] !== L
    ? ((z = (0, Z.jsxs)(n, {
        className: `max-w-full min-w-0`,
        color: `ghostSecondary`,
        size: `toolbar`,
        "aria-label": k,
        children: [L, R],
      })),
      (t[20] = k),
      (t[21] = R),
      (t[22] = L),
      (t[23] = z))
    : (z = t[23]);
  let B;
  t[24] !== k || t[25] !== z
    ? ((B = (0, Z.jsx)(se, { cloneCustomTrigger: !0, tooltipContent: k, children: z })),
      (t[24] = k),
      (t[25] = z),
      (t[26] = B))
    : (B = t[26]);
  let V;
  t[27] !== v || t[28] !== r || t[29] !== N || t[30] !== ee || t[31] !== C
    ? ((V =
        !v || r == null
          ? null
          : (0, Z.jsxs)(j.Section, {
              className: `vertical-scroll-fade-mask min-h-0 overflow-y-auto`,
              children: [
                (0, Z.jsx)(Jn, {
                  conversationId: r,
                  isMain: !0,
                  isActive: ee == null,
                  onSelect: () => N(null),
                }),
                C?.map((e) =>
                  (0, Z.jsx)(
                    Jn,
                    { conversationId: e, isMain: !1, isActive: ee === e, onSelect: () => N(e) },
                    e,
                  ),
                ),
              ],
            })),
      (t[27] = v),
      (t[28] = r),
      (t[29] = N),
      (t[30] = ee),
      (t[31] = C),
      (t[32] = V))
    : (V = t[32]);
  let H;
  t[33] !== v || t[34] !== r
    ? ((H = !v || r == null ? null : (0, Z.jsx)(j.Separator, {})), (t[33] = v), (t[34] = r), (t[35] = H))
    : (H = t[35]);
  let U;
  t[36] !== p || t[37] !== u
    ? ((U =
        u == null
          ? null
          : (0, Z.jsx)(j.Item, {
              LeftIcon: ce,
              disabled: p,
              onSelect: () => {
                ((x.current = !0), u());
              },
              children: (0, Z.jsx)(h, {
                id: `floatingComposer.newChat`,
                defaultMessage: `New chat`,
                description: `Menu action to start a new primary chat while keeping the workspace content open`,
              }),
            })),
      (t[36] = p),
      (t[37] = u),
      (t[38] = U))
    : (U = t[38]);
  let W;
  t[39] !== v || t[40] !== r || t[41] !== ae || t[42] !== T || t[43] !== E || t[44] !== D || t[45] !== w
    ? ((W = v
        ? (0, Z.jsx)(j.Item, {
            LeftIcon: oe,
            disabled: !ne || r == null || !T || E || D || w.isCreating,
            onSelect: () => void ae(),
            children: w.isCreating
              ? (0, Z.jsx)(h, {
                  id: `floatingComposer.creatingSideChat`,
                  defaultMessage: `Starting side chat…`,
                  description: `Menu action while a new side chat is being created`,
                })
              : (0, Z.jsx)(h, {
                  id: `floatingComposer.newSideChat`,
                  defaultMessage: `New side chat`,
                  description: `Menu action to create and select a new side chat in the floating composer`,
                }),
          })
        : null),
      (t[39] = v),
      (t[40] = r),
      (t[41] = ae),
      (t[42] = T),
      (t[43] = E),
      (t[44] = D),
      (t[45] = w),
      (t[46] = W))
    : (W = t[46]);
  let K;
  t[47] !== V || t[48] !== H || t[49] !== U || t[50] !== W
    ? ((K = (0, Z.jsxs)(`div`, { className: `flex max-h-[300px] min-h-0 flex-col`, children: [V, H, U, W] })),
      (t[47] = V),
      (t[48] = H),
      (t[49] = U),
      (t[50] = W),
      (t[51] = K))
    : (K = t[51]);
  let q;
  return (
    t[52] !== y || t[53] !== B || t[54] !== K
      ? ((q = (0, Z.jsx)(o, {
          open: y,
          onOpenChange: b,
          onCloseAutoFocus: P,
          contentWidth: `panel`,
          triggerButton: B,
          children: K,
        })),
        (t[52] = y),
        (t[53] = B),
        (t[54] = K),
        (t[55] = q))
      : (q = t[55]),
    q
  );
}
function Jn(e) {
  let t = (0, Xn.c)(42),
    { conversationId: n, isMain: r, isActive: i, onSelect: a } = e,
    o = M(),
    s = Y(Qe, n),
    c = Y(ye, n),
    l = Y(pe, n),
    u;
  t[0] !== n || t[1] !== l
    ? ((u = { hostId: l, conversationId: n }), (t[0] = n), (t[1] = l), (t[2] = u))
    : (u = t[2]);
  let d = Y(kt, u),
    f;
  if (t[3] !== d || t[4] !== o || t[5] !== r || t[6] !== c.type || t[7] !== c.unread) {
    let e = o.formatMessage({
        id: `floatingComposer.chatStatusUnread`,
        defaultMessage: `Unread response`,
        description: `Status of a chat with an unread response in the floating composer menu`,
      }),
      n;
    if (d?.kind === `approval`) {
      let e;
      (t[9] === o
        ? (e = t[10])
        : ((e = o.formatMessage({
            id: `floatingComposer.chatStatusApproval`,
            defaultMessage: `Awaiting approval`,
            description: `Status of a chat waiting for approval in the floating composer menu`,
          })),
          (t[9] = o),
          (t[10] = e)),
        (n = e));
    } else if (d?.kind === `input`) {
      let e;
      (t[11] === o
        ? (e = t[12])
        : ((e = o.formatMessage({
            id: `floatingComposer.chatStatusNeedsInput`,
            defaultMessage: `Needs input`,
            description: `Status of a chat waiting for the user to respond in the floating composer menu`,
          })),
          (t[11] = o),
          (t[12] = e)),
        (n = e));
    } else if (c.type === `error`) {
      let e;
      (t[13] === o
        ? (e = t[14])
        : ((e = o.formatMessage({
            id: `floatingComposer.chatStatusError`,
            defaultMessage: `Error`,
            description: `Status of a chat with a system error in the floating composer menu`,
          })),
          (t[13] = o),
          (t[14] = e)),
        (n = e));
    } else if (c.type === `loading`) {
      let e;
      (t[15] === o
        ? (e = t[16])
        : ((e = o.formatMessage({
            id: `floatingComposer.chatStatusRunning`,
            defaultMessage: `Running`,
            description: `Status of a chat that is working in the floating composer menu`,
          })),
          (t[15] = o),
          (t[16] = e)),
        (n = e));
    } else if (c.unread) n = e;
    else {
      let e;
      (t[17] === o
        ? (e = t[18])
        : ((e = o.formatMessage({
            id: `floatingComposer.chatStatusIdle`,
            defaultMessage: `Idle`,
            description: `Status of a chat with no activity or unread response in the floating composer menu`,
          })),
          (t[17] = o),
          (t[18] = e)),
        (n = e));
    }
    let i = c.unread && (d != null || c.type !== `idle`);
    ((f = o.formatList(
      [
        ...(r
          ? [
              o.formatMessage({
                id: `floatingComposer.mainChat`,
                defaultMessage: `Main chat`,
                description: `Accessible description identifying the parent task in the floating composer menu`,
              }),
            ]
          : []),
        n,
        ...(i ? [e] : []),
      ],
      { type: `unit` },
    )),
      (t[3] = d),
      (t[4] = o),
      (t[5] = r),
      (t[6] = c.type),
      (t[7] = c.unread),
      (t[8] = f));
  } else f = t[8];
  let p = f,
    m;
  t[19] !== n || t[20] !== r || t[21] !== c.unread
    ? ((m = r
        ? (0, Z.jsx)(Te, { badgeEnabled: c.unread, children: (0, Z.jsx)(B, {}) })
        : (0, Z.jsx)(Yn, { conversationId: n })),
      (t[19] = n),
      (t[20] = r),
      (t[21] = c.unread),
      (t[22] = m))
    : (m = t[22]);
  let g = m;
  if (d != null) {
    let e;
    t[23] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(ee, { asset: re })), (t[23] = e))
      : (e = t[23]);
    let n;
    (t[24] === c.unread
      ? (n = t[25])
      : ((n = (0, Z.jsx)(Te, { badgeEnabled: c.unread, children: e })), (t[24] = c.unread), (t[25] = n)),
      (g = n));
  } else if (c.type === `error`) {
    let e;
    t[26] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(ee, { asset: b, className: `text-danger` })), (t[26] = e))
      : (e = t[26]);
    let n;
    (t[27] === c.unread
      ? (n = t[28])
      : ((n = (0, Z.jsx)(Te, { badgeEnabled: c.unread, children: e })), (t[27] = c.unread), (t[28] = n)),
      (g = n));
  } else if (r && c.type === `loading`) {
    let e;
    (t[29] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(G, { className: `icon-xs shrink-0 text-text/70` })), (t[29] = e))
      : (e = t[29]),
      (g = e));
  }
  let _;
  t[30] === g
    ? (_ = t[31])
    : ((_ = (0, Z.jsx)(j.ItemIcon, {
        size: `xs`,
        children: (0, Z.jsx)(`span`, { "aria-hidden": `true`, children: g }),
      })),
      (t[30] = g),
      (t[31] = _));
  let v;
  t[32] !== r || t[33] !== s
    ? ((v =
        s ??
        (r
          ? (0, Z.jsx)(h, {
              id: `quickChat.mainConversation`,
              defaultMessage: `Chat`,
              description: `Fallback title for the task's main conversation in the floating chat`,
            })
          : (0, Z.jsx)(h, {
              id: `floatingComposer.sideChat`,
              defaultMessage: `Side chat`,
              description: `Fallback title for a side chat in the floating composer menu`,
            }))),
      (t[32] = r),
      (t[33] = s),
      (t[34] = v))
    : (v = t[34]);
  let y;
  return (
    t[35] !== p || t[36] !== i || t[37] !== a || t[38] !== _ || t[39] !== v || t[40] !== s
      ? ((y = (0, Z.jsx)(j.Item, {
          "aria-description": p,
          isActive: i,
          leftIcon: _,
          textOverflow: `fade`,
          tooltipOpenWhen: `trigger-overflows`,
          tooltipText: s,
          onSelect: a,
          children: v,
        })),
        (t[35] = p),
        (t[36] = i),
        (t[37] = a),
        (t[38] = _),
        (t[39] = v),
        (t[40] = s),
        (t[41] = y))
      : (y = t[41]),
    y
  );
}
function Yn(e) {
  let t = (0, Xn.c)(4),
    { conversationId: n } = e,
    r = Y(Ce, n) === !0,
    i = Y(yt, n) === !0;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(G, { className: `icon-xs shrink-0 text-text/70` })), (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = (0, Z.jsx)(v, {})), (t[1] = a)) : (a = t[1]);
  let o;
  return (
    t[2] === i
      ? (o = t[3])
      : ((o = (0, Z.jsx)(Te, { badgeEnabled: i, children: a })), (t[2] = i), (t[3] = o)),
    o
  );
}
var Xn, Zn, Z;
function Qn() {
  return (Qn = e(() => {
    ((Xn = J()),
      D(),
      p(),
      E(),
      (Zn = fe()),
      R(),
      Kt(),
      T(),
      Se(),
      q(),
      r(),
      w(),
      A(),
      L(),
      z(),
      P(),
      Ht(),
      xe(),
      at(),
      ze(),
      O(),
      Mn(),
      De(),
      (Z = de()));
  }))();
}
function $n(e) {
  let t = (0, er.c)(24),
    { title: r, preview: i, onOpen: o, onDismiss: s } = e,
    c = M(),
    l;
  t[0] !== c || t[1] !== r
    ? ((l = c.formatMessage(
        {
          id: `quickChat.openCompletedResponse`,
          defaultMessage: `Open completed response: {title}`,
          description: `Accessible label for opening a completed response from the floating chat preview`,
        },
        { title: r },
      )),
      (t[0] = c),
      (t[1] = r),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(d, { className: `text-success` })), (t[3] = u))
    : (u = t[3]);
  let f;
  t[4] === r
    ? (f = t[5])
    : ((f = (0, Q.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-sm font-semibold text-default`,
        children: [u, (0, Q.jsx)(`span`, { className: `truncate`, children: r })],
      })),
      (t[4] = r),
      (t[5] = f));
  let p;
  t[6] === i
    ? (p = t[7])
    : ((p =
        i ||
        (0, Q.jsx)(h, {
          id: `quickChat.responseReady`,
          defaultMessage: `Response ready`,
          description: `Fallback preview in the floating chat when a turn has completed without displayable text`,
        })),
      (t[6] = i),
      (t[7] = p));
  let m;
  t[8] === p
    ? (m = t[9])
    : ((m = (0, Q.jsx)(`span`, { className: `block truncate text-sm text-secondary`, children: p })),
      (t[8] = p),
      (t[9] = m));
  let g;
  t[10] !== o || t[11] !== l || t[12] !== f || t[13] !== m
    ? ((g = (0, Q.jsxs)(`button`, {
        className: `min-w-0 flex-1 cursor-interaction rounded-[inherit] px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`,
        "aria-label": l,
        type: `button`,
        onClick: o,
        children: [f, m],
      })),
      (t[10] = o),
      (t[11] = l),
      (t[12] = f),
      (t[13] = m),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] === c
    ? (_ = t[16])
    : ((_ = c.formatMessage({
        id: `quickChat.dismissCompletedResponse`,
        defaultMessage: `Dismiss and mark as read`,
        description: `Close the completed-response notification and mark its conversation as read, without closing the floating composer`,
      })),
      (t[15] = c),
      (t[16] = _));
  let v;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(ne, { className: `pointer-events-none` })), (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== s || t[19] !== _
    ? ((y = (0, Q.jsx)(`div`, {
        className: `absolute -top-1 -left-1 flex rounded-full bg-surface`,
        children: (0, Q.jsx)(n, {
          "aria-label": _,
          color: `outlineSurface`,
          radius: `full`,
          size: `iconCircleSm`,
          onClick: s,
          children: v,
        }),
      })),
      (t[18] = s),
      (t[19] = _),
      (t[20] = y))
    : (y = t[20]);
  let b;
  return (
    t[21] !== g || t[22] !== y
      ? ((b = (0, Q.jsxs)(a, {
          className: `relative flex shrink-0 select-none`,
          role: `status`,
          variant: `notice`,
          children: [g, y],
        })),
        (t[21] = g),
        (t[22] = y),
        (t[23] = b))
      : (b = t[23]),
    b
  );
}
var er, Q;
function tr() {
  return (tr = e(() => {
    ((er = J()), R(), q(), N(), A(), (Q = de()));
  }))();
}
var nr, rr, ir;
function ar() {
  return (ar = e(() => {
    ((nr = t(f(), 1)),
      E(),
      st(),
      Kt(),
      vt(),
      we(),
      ft(),
      Rn(),
      le(),
      xe(),
      Le(),
      De(),
      (rr = V(
        xt,
        (e, { get: t }) => {
          if (e == null) return zn;
          let n = [],
            r = !1;
          for (let i of [e, ...t(Ze, e)])
            switch (t(ir, i).type) {
              case `none`:
                break;
              case `pending`:
                r = !0;
                break;
              case `ready`:
                n.push(i);
            }
          return n.length > 0 ? { type: `ready`, value: n } : r ? Bn : zn;
        },
        { isEqual: nr.default },
      )),
      (ir = V(
        c,
        (e, { get: t, scope: n }) => {
          let r = t(dt, e);
          if (r.type === `idle` && !r.unread) return zn;
          let i = t(pe, e),
            a = t($t, { hostId: i, threadId: e })?.at(-1),
            o = t(Oe, a ?? null),
            s = t($e, { hostId: i, threadId: e });
          if (r.type === `loading` || s === `loading` || o?.status === `inProgress`) return Bn;
          if (!r.unread || r.type !== `idle` || a == null || o?.status !== `completed`) return zn;
          let c = t(Tt, a),
            l = Ge(bt(n, a));
          for (let e of c?.toReversed() ?? []) {
            let n = t(Ot, { ...a, itemId: e });
            if (n?.type !== `agentMessage` || (n.phase === `commentary` && n.delivery !== `async`)) continue;
            let r = Ke({ content: n.text, phase: n.phase, isStreaming: !1, isHeartbeatAutomationTurn: l }),
              i = je(r, t(Nt)),
              o = i == null ? `` : qe(i).trim();
            if (o !== ``) return { type: `ready`, value: o };
          }
          return { type: `ready`, value: `` };
        },
        { isEqual: nr.default },
      )));
  }))();
}
function or(e) {
  let t = (0, sr.c)(15),
    { conversationId: n, onOpen: r } = e,
    i = _(Ie),
    a = M(),
    o = Y(ir, n),
    s = Y(Qe, n);
  if (o.type !== `ready`) return null;
  let c;
  t[0] !== a || t[1] !== s
    ? ((c =
        s ??
        a.formatMessage({
          id: `quickChat.mainConversation`,
          defaultMessage: `Chat`,
          description: `Fallback title for the task's main conversation in the floating chat`,
        })),
      (t[0] = a),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== n || t[4] !== i ? ((l = () => yn(i, n)), (t[3] = n), (t[4] = i), (t[5] = l)) : (l = t[5]);
  let u;
  t[6] !== n || t[7] !== r || t[8] !== i
    ? ((u = () => {
        (i.set(ht, { conversationId: n, isCreating: !1 }), r());
      }),
      (t[6] = n),
      (t[7] = r),
      (t[8] = i),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== o.value || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, cr.jsx)($n, { title: c, preview: o.value, onDismiss: l, onOpen: u })),
        (t[10] = o.value),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
var sr, cr;
function lr() {
  return (lr = e(() => {
    ((sr = J()), E(), R(), tr(), It(), Tn(), ar(), De(), (cr = de()));
  }))();
}
function ur(e) {
  let t = (0, dr.c)(64),
    {
      children: n,
      isHidden: r,
      conversationId: i,
      pendingClientThreadId: a,
      onNewChat: o,
      newChatDisabled: s,
      emptyTitle: c,
      renderMainTranscript: l,
      renderSideChatComposer: u,
    } = e,
    d = _(zt),
    f = _(xt),
    p;
  t[0] === d ? (p = t[1]) : ((p = d.getOwnValue(zt)), (t[0] = d), (t[1] = p));
  let h = p,
    g = (0, fr.useRef)(null),
    v = (0, fr.useId)(),
    y = Y(tn, i),
    b = y ?? i,
    x = b != null || a != null,
    S = Y(pe, b),
    C;
  t[2] !== S || t[3] !== b
    ? ((C = b == null ? null : { hostId: S, threadId: b }), (t[2] = S), (t[3] = b), (t[4] = C))
    : (C = t[4]);
  let ee = C,
    w = Y(Rt, ee),
    T = Y(Je, ee),
    E;
  t[5] !== T || t[6] !== w || t[7] !== f || t[8] !== y
    ? ((E = w || T !== !1 || (y == null && qt(f.value))),
      (t[5] = T),
      (t[6] = w),
      (t[7] = f),
      (t[8] = y),
      (t[9] = E))
    : (E = t[9]);
  let D = E,
    ne = te(ye, b),
    O = Y(Qe, b) ?? (b == null ? c : null),
    k = Y(sn, i),
    A = Y(Jt, b),
    j = Y(Xt, b),
    M = ie(_t),
    N = ie(In),
    re = ie(pr),
    ae = ie(be),
    P = Y(rr, i == null || D || j || (M && ae === `expanded`) ? null : i),
    F = Y(Dt, b),
    I = Y(Ee, b),
    L;
  t[10] === y ? (L = t[11]) : ((L = y == null ? null : tt(y)), (t[10] = y), (t[11] = L));
  let R = Y(y == null ? null : Fe, L),
    z;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = () => {
        requestAnimationFrame(() => {
          g.current?.querySelector(`[data-codex-composer], [data-composer-markdown]`)?.focus();
        });
      }),
      (t[12] = z))
    : (z = t[12]);
  let B = z,
    V;
  t[13] !== R || t[14] !== i || t[15] !== h || t[16] !== y
    ? ((V = y == null ? h : gt(y, `side`, i, R ?? void 0)),
      (t[13] = R),
      (t[14] = i),
      (t[15] = h),
      (t[16] = y),
      (t[17] = V))
    : (V = t[17]);
  let H = x || D,
    U = !x,
    oe = r || N || re,
    W;
  t[18] !== i || t[19] !== s || t[20] !== o || t[21] !== O
    ? ((W =
        i == null && o == null
          ? void 0
          : (0, $.jsx)(qn, {
              conversationId: i,
              title: O,
              onNewChat: o,
              newChatDisabled: s,
              onSelectChat: B,
            })),
      (t[18] = i),
      (t[19] = s),
      (t[20] = o),
      (t[21] = O),
      (t[22] = W))
    : (W = t[22]);
  let G;
  t[23] !== A || t[24] !== k
    ? ((G = A && k.type === `loading` ? { ...k, type: `idle` } : k), (t[23] = A), (t[24] = k), (t[25] = G))
    : (G = t[25]);
  let K;
  t[26] === P
    ? (K = t[27])
    : ((K = (e) => {
        let { onOpen: t } = e;
        switch (P.type) {
          case `none`:
          case `pending`:
            return P;
          case `ready`:
            return {
              type: `ready`,
              value: P.value.map((e) => ({
                id: e,
                content: (0, $.jsx)(or, { conversationId: e, onOpen: t }),
              })),
            };
        }
      }),
      (t[26] = P),
      (t[27] = K));
  let se;
  t[28] !== v ||
  t[29] !== F ||
  t[30] !== S ||
  t[31] !== I ||
  t[32] !== a ||
  t[33] !== l ||
  t[34] !== b ||
  t[35] !== D ||
  t[36] !== y
    ? ((se = D
        ? void 0
        : (e) => {
            let { isVisible: t } = e,
              n = null;
            return (
              y == null && a != null
                ? (n = (0, $.jsx)(`div`, {
                    className: `min-h-0 flex-1`,
                    children: (0, $.jsx)(Hn, { children: (0, $.jsx)(Dn, { clientThreadId: a }) }),
                  }))
                : b != null &&
                  F &&
                  (n = (0, $.jsx)(
                    xn,
                    {
                      conversationId: b,
                      contentSearchOrchestrationId: v,
                      hostId: S,
                      trackReadState: t,
                      isReadOnly: I === !0,
                      retainActiveInterest: I !== !0,
                      showSideChatEmptyState: y != null && I === !1,
                    },
                    b,
                  )),
              y == null && l != null ? l({ transcript: n, isVisible: t }) : n
            );
          }),
      (t[28] = v),
      (t[29] = F),
      (t[30] = S),
      (t[31] = I),
      (t[32] = a),
      (t[33] = l),
      (t[34] = b),
      (t[35] = D),
      (t[36] = y),
      (t[37] = se))
    : (se = t[37]);
  let q;
  t[38] !== n ||
  t[39] !== v ||
  t[40] !== i ||
  t[41] !== u ||
  t[42] !== f ||
  t[43] !== d ||
  t[44] !== b ||
  t[45] !== D ||
  t[46] !== y
    ? ((q = (e) => {
        let t;
        return (
          (t = D
            ? (0, $.jsx)(fr.Suspense, {
                fallback: (0, $.jsx)(an, {}),
                children: (0, $.jsx)(
                  Fn,
                  { conversationId: b, active: !e?.isMinimized && !e?.isHidden, showHeader: !1 },
                  b,
                ),
              })
            : y == null
              ? n(e)
              : u == null
                ? (0, $.jsx)(Nn, {
                    browserConversationId: wt(d) ?? void 0,
                    conversationId: y,
                    presentation: e,
                  })
                : u(y, e)),
          (0, $.jsx)(`div`, {
            ref: g,
            onMouseDownCapture: () => {
              _e(f, `conversation`, v);
            },
            onFocusCapture: () => {
              _e(f, `conversation`, v);
            },
            children: (0, $.jsx)(en.Consumer, {
              children: (e) => (0, $.jsx)(en, { value: { ...e, floatingChatGroupId: i }, children: t }),
            }),
          })
        );
      }),
      (t[38] = n),
      (t[39] = v),
      (t[40] = i),
      (t[41] = u),
      (t[42] = f),
      (t[43] = d),
      (t[44] = b),
      (t[45] = D),
      (t[46] = y),
      (t[47] = q))
    : (q = t[47]);
  let ce;
  t[48] !== j ||
  t[49] !== x ||
  t[50] !== W ||
  t[51] !== G ||
  t[52] !== K ||
  t[53] !== se ||
  t[54] !== q ||
  t[55] !== H ||
  t[56] !== U ||
  t[57] !== oe ||
  t[58] !== O ||
  t[59] !== ne
    ? ((ce = (0, $.jsx)(pn, {
        hasTranscript: H,
        showComposerDivider: x,
        composerOnly: U,
        isHidden: oe,
        title: O,
        titleContent: W,
        statusState: G,
        titleStatusState: ne,
        hasElicitation: j,
        renderCompletionPreviews: K,
        renderTranscript: se,
        children: q,
      })),
      (t[48] = j),
      (t[49] = x),
      (t[50] = W),
      (t[51] = G),
      (t[52] = K),
      (t[53] = se),
      (t[54] = q),
      (t[55] = H),
      (t[56] = U),
      (t[57] = oe),
      (t[58] = O),
      (t[59] = ne),
      (t[60] = ce))
    : (ce = t[60]);
  let J;
  return (
    t[61] !== ce || t[62] !== V
      ? ((J = (0, $.jsx)(m, { scope: zt, value: V, children: ce })), (t[61] = ce), (t[62] = V), (t[63] = J))
      : (J = t[63]),
    J
  );
}
var dr, fr, $, pr;
function mr() {
  return (mr = e(() => {
    ((dr = J()),
      E(),
      (fr = fe()),
      Kt(),
      Ue(),
      He(),
      mt(),
      pt(),
      ut(),
      Pn(),
      lt(),
      he(),
      Wt(),
      Ln(),
      fn(),
      Qt(),
      rn(),
      xe(),
      It(),
      Xe(),
      Et(),
      Vn(),
      wn(),
      En(),
      Qn(),
      lr(),
      ar(),
      jn(),
      De(),
      ($ = de()),
      (pr = H(xt, ({ get: e }) => {
        let t = e(et);
        return e(Pt) != null || (t?.kind === `codex` && e(At, { accountId: t.accountId, pageId: t.pageId }));
      })));
  }))();
}
function hr(e) {
  let t = (0, gr.c)(34),
    { conversationId: n, resumeState: r, renderComposer: i, onNewChat: a } = e,
    o = _(xt),
    s = ie(ot),
    c = M(),
    l = ie(Ut),
    u = Y(pe, n),
    d = Y(Pe, n),
    f = Y(Ce, n) ?? !1;
  (Y(nn, n), Y(Me, n));
  let p = f || !1,
    m = Y(Dt, n),
    h;
  t[0] !== n || t[1] !== u || t[2] !== o.value.clientThreadId
    ? ((h = { clientThreadId: o.value.clientThreadId, conversationId: n, hostId: u }),
      (t[0] = n),
      (t[1] = u),
      (t[2] = o.value.clientThreadId),
      (t[3] = h))
    : (h = t[3]);
  let g = Y(Lt, h),
    v;
  t[4] !== n ||
  t[5] !== m ||
  t[6] !== c ||
  t[7] !== p ||
  t[8] !== d ||
  t[9] !== g ||
  t[10] !== i ||
  t[11] !== r.hasResumeFailed ||
  t[12] !== r.isResuming ||
  t[13] !== r.isUnavailable ||
  t[14] !== r.isWriterConflict ||
  t[15] !== r.retryResume ||
  t[16] !== s ||
  t[17] !== o ||
  t[18] !== l
    ? ((v = (e) => {
        let t = {
          ...un(e),
          selectedProject: l,
          browserConversationId: wt(o) ?? void 0,
          aboveComposerContentLayout: `header`,
          isResponseInProgress: p,
          isThreadResuming: r.isResuming,
          isThreadHistoryLoading: n == null || !m || r.isResuming,
          submitDisabled:
            n == null || g != null || r.hasResumeFailed || r.isUnavailable || r.isWriterConflict,
          composerLayoutMode: `auto-single-line`,
          localWorkspaceMaterialization: d,
          showUtilityBarBranchWhen: `always`,
          showUtilityBar: !1,
          onLocalSubmitStart: e?.onSubmitStart,
          onCreateSideConversation: s && n != null ? (e) => An(o, n, c, e) : void 0,
        };
        return (0, _r.jsxs)(ln, {
          children: [
            r.hasResumeFailed || r.isUnavailable ? (0, _r.jsx)(vn, { onRetry: r.retryResume }) : null,
            r.isWriterConflict ? (0, _r.jsx)(Sn, { isResuming: r.isResuming, onRetry: r.retryResume }) : null,
            i(t, e),
          ],
        });
      }),
      (t[4] = n),
      (t[5] = m),
      (t[6] = c),
      (t[7] = p),
      (t[8] = d),
      (t[9] = g),
      (t[10] = i),
      (t[11] = r.hasResumeFailed),
      (t[12] = r.isResuming),
      (t[13] = r.isUnavailable),
      (t[14] = r.isWriterConflict),
      (t[15] = r.retryResume),
      (t[16] = s),
      (t[17] = o),
      (t[18] = l),
      (t[19] = v))
    : (v = t[19]);
  let y = v,
    b = g != null,
    x;
  t[20] !== n ||
  t[21] !== u ||
  t[22] !== g ||
  t[23] !== r.hasResumeFailed ||
  t[24] !== r.isUnavailable ||
  t[25] !== o.value.clientThreadId
    ? ((x = (e) => {
        let { transcript: t, isVisible: i } = e;
        return r.hasResumeFailed || r.isUnavailable
          ? null
          : g == null
            ? (0, _r.jsx)(bn, {
                clientThreadId: C(o.value.clientThreadId) ? o.value.clientThreadId : void 0,
                codexPerspective:
                  n == null
                    ? null
                    : (0, _r.jsxs)(_r.Fragment, {
                        children: [t, (0, _r.jsx)(kn, { threadLocator: { conversationId: n, hostId: u } })],
                      }),
                conversationId: n,
                hostId: u,
                includesComposer: !1,
                isVisible: i,
              })
            : t;
      }),
      (t[20] = n),
      (t[21] = u),
      (t[22] = g),
      (t[23] = r.hasResumeFailed),
      (t[24] = r.isUnavailable),
      (t[25] = o.value.clientThreadId),
      (t[26] = x))
    : (x = t[26]);
  let S;
  return (
    t[27] !== n || t[28] !== a || t[29] !== g || t[30] !== y || t[31] !== b || t[32] !== x
      ? ((S = (0, _r.jsx)(ur, {
          conversationId: n,
          pendingClientThreadId: g,
          onNewChat: a,
          newChatDisabled: b,
          renderMainTranscript: x,
          children: y,
        })),
        (t[27] = n),
        (t[28] = a),
        (t[29] = g),
        (t[30] = y),
        (t[31] = b),
        (t[32] = x),
        (t[33] = S))
      : (S = t[33]),
    S
  );
}
var gr, _r;
function vr() {
  return (vr = e(() => {
    ((gr = J()),
      E(),
      K(),
      R(),
      Kt(),
      Ue(),
      dn(),
      On(),
      Cn(),
      me(),
      xe(),
      ze(),
      Ve(),
      Mn(),
      mr(),
      wn(),
      Vt(),
      (_r = de()));
  }))();
}
function yr() {
  let e = (0, br.c)(7),
    t = u(),
    r,
    i;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, xr.jsx)(h, {
        id: `localConversation.remoteConnectionUnavailable.title`,
        defaultMessage: `Remote connection unavailable`,
        description: `Title shown when a task belongs to a remote connection that is no longer configured`,
      })),
      (i = (0, xr.jsx)(h, {
        id: `localConversation.remoteConnectionUnavailable.description`,
        defaultMessage: `This chat's remote connection is no longer configured. Add it again in Settings to continue`,
        description: `Description shown when a task cannot load because its remote host was removed`,
      })),
      (e[0] = r),
      (e[1] = i))
    : ((r = e[0]), (i = e[1]));
  let a;
  e[2] === t ? (a = e[3]) : ((a = () => void t(`/settings/connections`)), (e[2] = t), (e[3] = a));
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, xr.jsx)(h, {
        id: `localConversation.remoteConnectionUnavailable.action`,
        defaultMessage: `Open connection settings`,
        description: `Button that opens connection settings for a task whose remote host was removed`,
      })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  return (
    e[5] === a
      ? (s = e[6])
      : ((s = (0, xr.jsx)(ge, {
          className: `h-full`,
          title: r,
          description: i,
          actions: (0, xr.jsx)(n, { onClick: a, children: o }),
        })),
        (e[5] = a),
        (e[6] = s)),
    s
  );
}
var br, xr;
function Sr() {
  return (Sr = e(() => {
    ((br = J()), R(), ae(), q(), St(), (xr = de()));
  }))();
}
export { ur as a, Qn as c, vr as i, Un as l, Sr as n, mr as o, hr as r, qn as s, yr as t, Kn as u };
//# sourceMappingURL=unavailable-local-conversation-page-d4a23c309685.js.map
