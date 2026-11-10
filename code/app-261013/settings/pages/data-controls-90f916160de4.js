import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $v as n,
  ADt as r,
  AO as i,
  CO as a,
  Cat as o,
  Cot as s,
  E4 as c,
  Ext as l,
  Fat as u,
  Ggt as d,
  IDt as f,
  Iot as p,
  Ixt as m,
  JC as h,
  Jbt as g,
  LR as _,
  Lot as v,
  M0 as y,
  Mot as b,
  Mz as ee,
  Not as x,
  Nz as S,
  OR as C,
  Pat as w,
  Pxt as T,
  QJ as E,
  Qot as D,
  Qv as O,
  T4 as k,
  TJ as A,
  TO as j,
  TSt as M,
  Tk as N,
  VDt as te,
  Vxt as P,
  X$ as F,
  XV as I,
  Xot as L,
  Y$ as R,
  Yot as z,
  ZJ as B,
  Zot as ne,
  _xt as re,
  b0 as ie,
  cz as V,
  gPt as ae,
  hPt as oe,
  hft as se,
  hot as ce,
  i3 as H,
  iot as U,
  irt as le,
  iw as ue,
  ixt as de,
  j0 as fe,
  jDt as pe,
  lgt as me,
  lot as W,
  m1 as G,
  nst as he,
  p1 as K,
  pft as q,
  qC as J,
  r3 as ge,
  rrt as _e,
  rst as ve,
  srt as ye,
  sz as be,
  t3 as xe,
  tst as Se,
  tw as Ce,
  vzt as we,
  wSt as Te,
  wk as Ee,
  wot as De,
  xMt as Oe,
  xat as ke,
  y0 as Y,
  yzt as Ae,
  zxt as je,
} from "./app-shared-bbfeca5e5737.js";
import {
  Brt as Me,
  D7n as Ne,
  E$ as Pe,
  E7n as Fe,
  EX as Ie,
  Ek as Le,
  Exr as Re,
  GMr as ze,
  Gan as Be,
  Hor as Ve,
  Hrt as He,
  O9n as Ue,
  O_r as We,
  Oq as Ge,
  Oun as Ke,
  QP as qe,
  Rrt as Je,
  T$ as Ye,
  THn as Xe,
  Tk as Ze,
  Vor as Qe,
  Vrt as $e,
  XPr as et,
  YPr as tt,
  _F as nt,
  _W as rt,
  _q as it,
  aon as at,
  c_n as ot,
  cq as st,
  d_n as ct,
  eF as lt,
  eNr as ut,
  fMr as dt,
  f_n as ft,
  fbn as pt,
  fq as mt,
  gW as ht,
  gq as gt,
  hF as _t,
  hp as vt,
  hq as yt,
  iPr as bt,
  i_n as xt,
  k9n as St,
  kq as Ct,
  kun as wt,
  lMr as Tt,
  l_n as Et,
  llt as Dt,
  lon as Ot,
  lq as kt,
  mIr as At,
  m_r as jt,
  mp as Mt,
  mq as Nt,
  n0 as Pt,
  oFr as Ft,
  pq as It,
  sPr as Lt,
  s_n as Rt,
  son as zt,
  t0 as Bt,
  tF as Vt,
  tNr as Ht,
  ubr as Ut,
  ult as Wt,
  uq as Gt,
  v8n as Kt,
  vCt as qt,
  vMr as Jt,
  vq as X,
  wHn as Yt,
  yCt as Xt,
  yon as Zt,
  yq as Qt,
} from "./app-initial-5851df3f6cb1.js";
import { gu as $t, hu as en } from "./app-primary-fe8a450b3b04.js";
import { n as tn, t as nn } from "./settings-loading-row-bf72bf2df25d.js";
import { n as rn, t as an } from "./delete-archived-chats-dialog-45385c82c8a1.js";
import { n as on, t as sn } from "./thread-emoji-e2a0a4c63c7d.js";
import { n as cn, t as ln } from "./control-group-52557bc520ba.js";
function un(e) {
  let n = (0, fn.c)(108),
    { archivedTask: r, showProjectName: i, onUnarchiveStart: a } = e,
    o = m(s),
    c = he(),
    u = P(ze),
    d = te(),
    p = l(),
    h;
  n[0] === r.title ? (h = n[1]) : ((h = Ne(r.title ?? ``).trim()), (n[0] = r.title), (n[1] = h));
  let g = h,
    _;
  n[2] === g
    ? (_ = n[3])
    : ((_ =
        g.length > 0
          ? g
          : (0, Z.jsx)(f, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (n[2] = g),
      (n[3] = _));
  let y = _,
    b = `archived` in r,
    [x, S] = (0, pn.useState)(!1),
    C;
  n[4] !== r.id || n[5] !== o
    ? ((C = () => at({ scope: o, conversationId: r.id })), (n[4] = r.id), (n[5] = o), (n[6] = C))
    : (C = n[6]);
  let w;
  n[7] === c
    ? (w = n[8])
    : ((w = async () => {
        (S(!1), await c.invalidateQueries({ queryKey: [Be] }));
      }),
      (n[7] = c),
      (n[8] = w));
  let T;
  n[9] !== d || n[10] !== o
    ? ((T = () => {
        o.get(ce).danger(d.formatMessage(X.deleteError), {
          errorAnalytics: { toastId: `archived_conversations_modal_delete_failed` },
        });
      }),
      (n[9] = d),
      (n[10] = o),
      (n[11] = T))
    : (T = n[11]);
  let E;
  n[12] !== C || n[13] !== w || n[14] !== T
    ? ((E = { mutationFn: C, onSuccess: w, onError: T }), (n[12] = C), (n[13] = w), (n[14] = T), (n[15] = E))
    : (E = n[15]);
  let D = v(E),
    O = b ? `recover-cloud-task` : `unarchive-chatgpt-conversation`,
    A;
  n[16] !== r.id || n[17] !== O ? ((A = [O, r.id]), (n[16] = r.id), (n[17] = O), (n[18] = A)) : (A = n[18]);
  let j;
  n[19] !== r.id || n[20] !== b || n[21] !== o
    ? ((j = async () => {
        b
          ? await bt.safePost(`/wham/tasks/{task_id}/recover`, { parameters: { path: { task_id: r.id } } })
          : await Zt({ scope: o, conversationId: r.id });
      }),
      (n[19] = r.id),
      (n[20] = b),
      (n[21] = o),
      (n[22] = j))
    : (j = n[22]);
  let M;
  n[23] !== r.id || n[24] !== d || n[25] !== o
    ? ((M = () => {
        o.get(ce).danger(d.formatMessage(X.unarchiveError), {
          errorAnalytics: { toastId: `archivedCloudChats.onError.unarchiveError` },
          id: `recover-cloud-task-${r.id}`,
        });
      }),
      (n[23] = r.id),
      (n[24] = d),
      (n[25] = o),
      (n[26] = M))
    : (M = n[26]);
  let N;
  n[27] !== u || n[28] !== r.id || n[29] !== b || n[30] !== p || n[31] !== c || n[32] !== o
    ? ((N = () => {
        b &&
          (c.setQueryData([`tasks`, `archived`, u], (e) =>
            e == null
              ? e
              : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => e.id !== r.id) })) },
          ),
          Pe(o, r.id, !1));
        let e = o.get(ce).info((0, Z.jsx)(f, { ...X.unarchiveSuccessPlain }), {
          leading: (0, Z.jsx)(ee, { "aria-hidden": !1, asset: k }),
          primaryAction: {
            label: (0, Z.jsx)(f, { ...X.viewNow }),
            onClick: () => {
              (e.close(), p(b ? `/remote/${r.id}` : ke(r.id)));
            },
          },
          id: `${b ? `recover-cloud-task` : `unarchive-chatgpt-conversation`}-${r.id}`,
        });
      }),
      (n[27] = u),
      (n[28] = r.id),
      (n[29] = b),
      (n[30] = p),
      (n[31] = c),
      (n[32] = o),
      (n[33] = N))
    : (N = n[33]);
  let F;
  n[34] !== b || n[35] !== c
    ? ((F = () => {
        b && c.invalidateQueries({ queryKey: [`tasks`] });
      }),
      (n[34] = b),
      (n[35] = c),
      (n[36] = F))
    : (F = n[36]);
  let I;
  n[37] !== M || n[38] !== N || n[39] !== F || n[40] !== A || n[41] !== j
    ? ((I = { mutationKey: A, mutationFn: j, onError: M, onSuccess: N, onSettled: F }),
      (n[37] = M),
      (n[38] = N),
      (n[39] = F),
      (n[40] = A),
      (n[41] = j),
      (n[42] = I))
    : (I = n[42]);
  let L = v(I),
    R,
    z,
    B,
    ne;
  if (n[43] !== r || n[44] !== d || n[45] !== b || n[46] !== i) {
    let e = dn(r),
      t;
    (n[51] !== r.task_status_display?.environment_label || n[52] !== b || n[53] !== i
      ? ((t = i && b ? r.task_status_display?.environment_label?.trim() : null),
        (n[51] = r.task_status_display?.environment_label),
        (n[52] = b),
        (n[53] = i),
        (n[54] = t))
      : (t = n[54]),
      (z = t),
      (B = e != null),
      (R = B ? d.formatDate(e, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (ne = B ? d.formatTime(e, { hour: `numeric`, minute: `2-digit` }) : ``),
      (n[43] = r),
      (n[44] = d),
      (n[45] = b),
      (n[46] = i),
      (n[47] = R),
      (n[48] = z),
      (n[49] = B),
      (n[50] = ne));
  } else ((R = n[47]), (z = n[48]), (B = n[49]), (ne = n[50]));
  let re = ne,
    ie;
  n[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Z.jsx)(en, { className: `icon-sm` })), (n[55] = ie))
    : (ie = n[55]);
  let V;
  n[56] === r.id ? (V = n[57]) : ((V = (0, Z.jsx)(sn, { threadId: r.id })), (n[56] = r.id), (n[57] = V));
  let ae;
  n[58] !== r.id || n[59] !== b || n[60] !== y
    ? ((ae = b
        ? (0, Z.jsx)(`span`, { className: `truncate`, children: y })
        : (0, Z.jsx)(be, {
            cloneCustomTrigger: !0,
            tooltipContent: y,
            openWhen: `trigger-overflows`,
            scaleAvailableSizeWithZoom: !0,
            children: (0, Z.jsx)(de, {
              className: `cursor-interaction truncate text-info hover:underline`,
              to: ke(r.id),
              children: y,
            }),
          })),
      (n[58] = r.id),
      (n[59] = b),
      (n[60] = y),
      (n[61] = ae))
    : (ae = n[61]);
  let oe;
  n[62] !== V || n[63] !== ae
    ? ((oe = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1 truncate`,
        children: [V, ae],
      })),
      (n[62] = V),
      (n[63] = ae),
      (n[64] = oe))
    : (oe = n[64]);
  let se;
  n[65] !== R || n[66] !== z || n[67] !== B || n[68] !== re
    ? ((se = B
        ? z
          ? (0, Z.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTimeWithEnvironment`,
              defaultMessage: `{date}, {time} • {environment}`,
              description: `Date, time, and environment name for an archived cloud task`,
              values: { date: R, time: re, environment: z },
            })
          : (0, Z.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: R, time: re },
            })
        : null),
      (n[65] = R),
      (n[66] = z),
      (n[67] = B),
      (n[68] = re),
      (n[69] = se))
    : (se = n[69]);
  let H;
  n[70] === se
    ? (H = n[71])
    : ((H = (0, Z.jsx)(`div`, { className: `truncate`, children: se })), (n[70] = se), (n[71] = H));
  let U = !b || void 0,
    le = L.isPending || D.isPending,
    ue;
  n[72] !== b || n[73] !== a || n[74] !== L
    ? ((ue = (e) => {
        if (L.isPending) return;
        if (b) {
          L.mutate();
          return;
        }
        let t = a?.(e.currentTarget);
        L.mutateAsync().then(
          () => t?.(!0),
          () => t?.(!1),
        );
      }),
      (n[72] = b),
      (n[73] = a),
      (n[74] = L),
      (n[75] = ue))
    : (ue = n[75]);
  let fe;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Z.jsx)(f, { ...X.unarchive })), (n[76] = fe))
    : (fe = n[76]);
  let pe;
  n[77] !== U || n[78] !== le || n[79] !== ue || n[80] !== L.isPending
    ? ((pe = (0, Z.jsx)(t, {
        "data-archived-chat-unarchive": U,
        color: `secondary`,
        size: `toolbar`,
        disabled: le,
        loading: L.isPending,
        onClick: ue,
        children: fe,
      })),
      (n[77] = U),
      (n[78] = le),
      (n[79] = ue),
      (n[80] = L.isPending),
      (n[81] = pe))
    : (pe = n[81]);
  let me;
  n[82] !== D.isPending || n[83] !== d || n[84] !== b || n[85] !== g || n[86] !== L.isPending
    ? ((me = b
        ? null
        : (0, Z.jsx)(t, {
            "aria-label": d.formatMessage(
              {
                id: `settings.dataControls.archivedChats.deleteWithTitle`,
                defaultMessage: `Delete archived chat {title}`,
                description: `Accessible label for the Delete button in a ChatGPT archived chats row. {title} is the displayed conversation title.`,
              },
              { title: g },
            ),
            color: `danger`,
            size: `toolbar`,
            disabled: L.isPending || D.isPending,
            onClick: () => S(!0),
            children: (0, Z.jsx)(f, { ...X.delete }),
          })),
      (n[82] = D.isPending),
      (n[83] = d),
      (n[84] = b),
      (n[85] = g),
      (n[86] = L.isPending),
      (n[87] = me))
    : (me = n[87]);
  let W;
  n[88] !== pe || n[89] !== me
    ? ((W = (0, Z.jsxs)(Z.Fragment, { children: [pe, me] })), (n[88] = pe), (n[89] = me), (n[90] = W))
    : (W = n[90]);
  let G;
  n[91] !== oe || n[92] !== H || n[93] !== W
    ? ((G = (0, Z.jsx)(Ce, { icon: ie, label: oe, description: H, control: W })),
      (n[91] = oe),
      (n[92] = H),
      (n[93] = W),
      (n[94] = G))
    : (G = n[94]);
  let K;
  n[95] === D ? (K = n[96]) : ((K = () => D.mutate()), (n[95] = D), (n[96] = K));
  let q;
  n[97] !== d || n[98] !== g
    ? ((q =
        g ||
        d.formatMessage({
          id: `settings.dataControls.archivedChats.untitled`,
          defaultMessage: `Untitled chat`,
          description: `Fallback title for an archived chat`,
        })),
      (n[97] = d),
      (n[98] = g),
      (n[99] = q))
    : (q = n[99]);
  let J;
  n[100] !== D.isPending || n[101] !== x || n[102] !== K || n[103] !== q
    ? ((J = (0, Z.jsx)(ht, { open: x, onOpenChange: S, isDeleting: D.isPending, onConfirm: K, title: q })),
      (n[100] = D.isPending),
      (n[101] = x),
      (n[102] = K),
      (n[103] = q),
      (n[104] = J))
    : (J = n[104]);
  let ge;
  return (
    n[105] !== G || n[106] !== J
      ? ((ge = (0, Z.jsxs)(Z.Fragment, { children: [G, J] })), (n[105] = G), (n[106] = J), (n[107] = ge))
      : (ge = n[107]),
    ge
  );
}
function dn(e) {
  let t = `archived` in e ? (e.updated_at ?? e.created_at) : (e.update_time ?? e.create_time);
  if (t == null) return null;
  let n = new Date(typeof t == `number` ? t * 1e3 : t);
  return Number.isFinite(n.getTime()) ? n : null;
}
var fn, pn, Z;
function mn() {
  return (mn = e(() => {
    ((fn = we()),
      c(),
      p(),
      Se(),
      T(),
      (pn = Ae()),
      pe(),
      re(),
      Ht(),
      rt(),
      zt(),
      o(),
      xe(),
      S(),
      W(),
      V(),
      $t(),
      Fe(),
      Ye(),
      De(),
      ue(),
      on(),
      Lt(),
      Qt(),
      (Z = Oe()));
  }))();
}
function hn(e) {
  let t = (0, Ln.c)(31),
    { backSlot: n } = e,
    r = m(s),
    { selectedHostId: i } = Me(),
    a = P(ze),
    o = P(ut),
    c = P(Jt),
    l = P(Tt),
    u = P(Rt),
    d = P(ot),
    f = P(We),
    { data: p } = P(Qe),
    h = P(Et),
    g = je(At, me),
    _ = [i, ...(i === `local` && a != null ? [me] : [])],
    v = D({
      queries: _.map((e) => ({
        queryKey: Cn(e, a),
        queryFn: M({
          refetchMode: `replace`,
          initialValue: [],
          reducer: xn,
          streamFn: (t) => {
            let { signal: n } = t;
            return Sn(r, e, n);
          },
        }),
        enabled: l && (e !== `durable` || g === `connected`),
        staleTime: w.FIVE_SECONDS,
      })),
    }),
    {
      data: y,
      fetchNextPage: b,
      hasNextPage: ee,
      isLoading: S,
      isFetchNextPageError: C,
      isFetchingNextPage: T,
      isError: E,
    } = kt(),
    O = i === `local` && o && a != null,
    k;
  t[0] !== a || t[1] !== c ? ((k = [Be, 20, c, a]), (t[0] = a), (t[1] = c), (t[2] = k)) : (k = t[2]);
  let A;
  t[3] !== r || t[4] !== c
    ? ((A = (e) => {
        let { pageParam: t, signal: n } = e;
        return Ot(r, { includeWorkCloud: c, limit: 20, offset: t }, n);
      }),
      (t[3] = r),
      (t[4] = c),
      (t[5] = A))
    : (A = t[5]);
  let j;
  t[6] !== O || t[7] !== k || t[8] !== A
    ? ((j = {
        queryKey: k,
        initialPageParam: 0,
        queryFn: A,
        getNextPageParam: bn,
        select: vn,
        enabled: O,
        retry: Xe,
        staleTime: w.ONE_MINUTE,
      }),
      (t[6] = O),
      (t[7] = k),
      (t[8] = A),
      (t[9] = j))
    : (j = t[9]);
  let {
      data: N,
      fetchNextPage: te,
      hasNextPage: F,
      isLoading: I,
      isFetchNextPageError: R,
      isFetchingNextPage: z,
      isError: B,
      error: ne,
      refetch: re,
    } = x(j),
    ie;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = le(`inbox-items`, { limit: Bn })), (t[10] = ie))
    : (ie = t[10]);
  let V = i === U,
    oe;
  t[11] === V
    ? (oe = t[12])
    : ((oe = { queryKey: ie, queryFn: _n, enabled: V, staleTime: w.FIVE_SECONDS }),
      (t[11] = V),
      (t[12] = oe));
  let { data: se, isLoading: ce } = L(oe),
    { data: H, isFetching: ue, isError: de, refetch: fe } = v[0],
    pe = l ? H : void 0,
    W = new Map();
  for (let e of _.flatMap((e) => $e(u, e))) {
    if (!l && (!ft(e) || !O || !N?.some((t) => t.gizmo_id === e.projectId))) continue;
    let t = {
      groupId: Nt(e),
      hostId: e.hostId,
      label: e.label,
      path: e.path,
      projectId: e.projectId,
      projectKind: e.projectKind,
    };
    W.set(t.groupId, t);
  }
  let G = [...W.values()],
    he;
  t[13] === se?.items
    ? (he = t[14])
    : ((he = new Set(se?.items.flatMap(gn) ?? [])), (t[13] = se?.items), (t[14] = he));
  let K = [
      ...It({
        automationThreadIds: he,
        chatGptConversations: O ? N : void 0,
        cloudTasks: y,
        cloudDotAttachments: p,
        localThreads: pe,
        localHostId: i,
        projects: G.filter((e) => (e.hostId ?? `local`) === i),
        projectlessThreadIds: new Set(d ?? []),
        threadProjectAssignments: f,
        threadWorkspaceRootHints: h,
      }),
      ...It({
        cloudTasks: void 0,
        cloudDotAttachments: p,
        localThreads: l ? v[1]?.data : void 0,
        localHostId: me,
        projects: G,
        projectlessThreadIds: new Set(d ?? []),
        threadProjectAssignments: f,
        threadWorkspaceRootHints: h,
      }),
    ],
    q = ee && !C,
    J = O && F && !B,
    ge;
  t[15] !== l || t[16] !== fe
    ? ((ge = () => {
        l && fe();
      }),
      (t[15] = l),
      (t[16] = fe),
      (t[17] = ge))
    : (ge = t[17]);
  let _e;
  t[18] !== v || t[19] !== g || t[20] !== l
    ? ((_e = () => {
        l &&
          v[1] != null &&
          (g === `connected`
            ? v[1].refetch()
            : (g === `disconnected` || g === `error`) &&
              ae.dispatchMessage(`codex-app-server-restart`, {
                hostId: me,
                intent: `reconnect`,
                remoteControlEnabled: !1,
              }));
      }),
      (t[18] = v),
      (t[19] = g),
      (t[20] = l),
      (t[21] = _e))
    : (_e = t[21]);
  let ve;
  t[22] !== te || t[23] !== R || t[24] !== re
    ? ((ve = () => {
        R ? te() : re();
      }),
      (t[22] = te),
      (t[23] = R),
      (t[24] = re),
      (t[25] = ve))
    : (ve = t[25]);
  let ye;
  return (
    t[26] !== J || t[27] !== q || t[28] !== te || t[29] !== b
      ? ((ye = () => Promise.all([q ? b() : void 0, J ? te() : void 0])),
        (t[26] = J),
        (t[27] = q),
        (t[28] = te),
        (t[29] = b),
        (t[30] = ye))
      : (ye = t[30]),
    (0, Q.jsx)(
      wn,
      {
        archivedChats: K,
        backSlot: n,
        projects: G,
        hostId: i,
        localChatsAvailable: l,
        isLocalArchiveFetching: l && ue,
        isLocalArchiveError: l && de,
        isDurableArchiveFetching:
          l && v[1] != null && (v[1].isFetching || g === `connecting` || g === `restarting`),
        isDurableArchiveError: l && v[1] != null && (v[1].isError || g === `disconnected` || g === `error`),
        onRetryLocalArchive: ge,
        onRetryDurableArchive: _e,
        hasNextPage: q || J,
        isLoading: K.length === 0 && (S || (O && I) || (i === `local` && ce)),
        isFetchingNextPage: T || (O && z),
        isError: K.length === 0 && ((y == null && E) || (O && N == null && B)),
        chatGptArchiveError: O && B ? ne : null,
        onRetryChatGptArchive: ve,
        onLoadNextPage: ye,
      },
      `${i}:${l}:${a ?? ``}`,
    )
  );
}
function gn(e) {
  return e.automationId != null && e.threadId != null ? [e.threadId] : [];
}
function _n() {
  return _e(`inbox-items`, { params: { limit: Bn } });
}
function vn(e) {
  let { pages: t } = e;
  return t.flatMap(yn);
}
function yn(e) {
  let { page: t } = e;
  return t.items;
}
function bn(e) {
  let { nextOffset: t } = e;
  return t;
}
function xn(e, t) {
  return [...e, ...t];
}
async function* Sn(e, t, n) {
  let r = tt(e, t),
    i = new Set(),
    a = null;
  do {
    n.throwIfAborted();
    let e = await r.sendRequest(
      `thread/list`,
      {
        archived: !0,
        cursor: a,
        limit: 100,
        modelProviders: null,
        sortKey: `updated_at`,
        sourceKinds: d,
        useStateDbOnly: !0,
      },
      { priority: `background`, source: `thread_list` },
    );
    if ((n.throwIfAborted(), yield e.data, (a = e.nextCursor), a != null && i.has(a)))
      throw Error(`App Server repeated an archived thread list cursor`);
    a != null && i.add(a);
  } while (a != null);
}
function Cn(e, t) {
  return e === `durable` ? [`archived-threads`, e, t] : [`archived-threads`, e];
}
function wn(e) {
  let n = (0, Ln.c)(136),
    {
      archivedChats: r,
      backSlot: i,
      projects: a,
      hostId: o,
      localChatsAvailable: c,
      isLocalArchiveFetching: l,
      isLocalArchiveError: u,
      isDurableArchiveFetching: d,
      isDurableArchiveError: p,
      onRetryLocalArchive: h,
      onRetryDurableArchive: _,
      hasNextPage: y,
      isLoading: b,
      isFetchingNextPage: x,
      isError: S,
      chatGptArchiveError: C,
      onRetryChatGptArchive: w,
      onLoadNextPage: T,
    } = e,
    D = m(s),
    O = he(),
    A = P(ze),
    j = te(),
    M = Xt(),
    N = (0, Rn.useRef)(null),
    [F, I] = (0, Rn.useState)(null),
    [L, R] = (0, Rn.useState)(``),
    z = (0, Rn.useDeferredValue)(L),
    [B, ne] = (0, Rn.useState)(`all`),
    [re, ie] = (0, Rn.useState)(zn),
    [V, ae] = (0, Rn.useState)(`updated`),
    oe = new Set([...a.map(kn), mt, Gt]),
    H = re.kind === `all` || oe.has(re.groupId) ? re : zn,
    U = c || B !== `local` ? B : `all`,
    le = H.kind === `all` ? `project` : `none`,
    ue;
  n[0] !== U || n[1] !== H || n[2] !== r || n[3] !== z || n[4] !== V || n[5] !== le
    ? ((ue = gt({ entries: r, groupKey: le, kindFilter: U, projectFilter: H, searchQuery: z, sortKey: V })),
      (n[0] = U),
      (n[1] = H),
      (n[2] = r),
      (n[3] = z),
      (n[4] = V),
      (n[5] = le),
      (n[6] = ue))
    : (ue = n[6]);
  let de = ue,
    fe = U !== `local` && y,
    pe;
  n[7] !== r || n[8] !== o
    ? ((pe = o === `local` && r.some(On)), (n[7] = r), (n[8] = o), (n[9] = pe))
    : (pe = n[9]);
  let me = pe,
    W;
  n[10] === o ? (W = n[11]) : ((W = [`unarchive-thread`, o]), (n[10] = o), (n[11] = W));
  let G;
  n[12] === D
    ? (G = n[13])
    : ((G = async (e) => {
        let { thread: t, hostId: n } = e;
        return (await tt(D, n).unarchiveConversation(g(t.id), { useAppServerPins: D.get(Ue) }), e);
      }),
      (n[12] = D),
      (n[13] = G));
  let K;
  n[14] !== A || n[15] !== O || n[16] !== D
    ? ((K = async (e) => {
        let { thread: t, hostId: n } = e,
          r = Cn(n, A);
        (D.get(ce).info(
          (0, Q.jsx)(f, {
            id: `settings.dataControls.archivedChats.unarchiving`,
            defaultMessage: `Unarchiving chat`,
            description: `Toast shown while unarchiving a chat`,
          }),
          {
            id: `unarchive-thread-${t.id}`,
            duration: 0,
            leading: (0, Q.jsx)(ge, { className: `icon-xs` }),
            hasCloseButton: !1,
          },
        ),
          await O.cancelQueries({ queryKey: r }));
        let i = O.getQueryData(r) ?? [];
        return (
          O.setQueryData(
            r,
            i.filter((e) => e.id !== t.id),
          ),
          { previousThreads: i, queryKey: r }
        );
      }),
      (n[14] = A),
      (n[15] = O),
      (n[16] = D),
      (n[17] = K))
    : (K = n[17]);
  let q;
  n[18] !== j || n[19] !== O || n[20] !== D
    ? ((q = (e, t, n) => {
        let { thread: r } = t,
          i = e instanceof Re;
        (!i && n?.previousThreads && O.setQueryData(n.queryKey, n.previousThreads),
          D.get(ce).danger(j.formatMessage(i ? X.openError : X.unarchiveError), {
            errorAnalytics: { toastId: `dataControls.onError.openError` },
            id: `unarchive-thread-${r.id}`,
          }));
      }),
      (n[18] = j),
      (n[19] = O),
      (n[20] = D),
      (n[21] = q))
    : (q = n[21]);
  let _e;
  n[22] !== M || n[23] !== D
    ? ((_e = (e) => {
        let { thread: t, hostId: n } = e,
          r = D.get(ce).info((0, Q.jsx)(f, { ...X.unarchiveSuccessPlain }), {
            leading: (0, Q.jsx)(ee, { "aria-hidden": !1, asset: k }),
            primaryAction: {
              label: (0, Q.jsx)(f, { ...X.viewNow }),
              onClick: () => {
                (r.close(), M(t.id, n === `local` ? void 0 : n));
              },
            },
            id: `unarchive-thread-${t.id}`,
          });
      }),
      (n[22] = M),
      (n[23] = D),
      (n[24] = _e))
    : (_e = n[24]);
  let ve;
  n[25] === O
    ? (ve = n[26])
    : ((ve = (e, t, n) => {
        let { hostId: r } = n;
        O.invalidateQueries({ queryKey: [`archived-threads`, r] });
      }),
      (n[25] = O),
      (n[26] = ve));
  let ye;
  n[27] !== W || n[28] !== G || n[29] !== K || n[30] !== q || n[31] !== _e || n[32] !== ve
    ? ((ye = { mutationKey: W, mutationFn: G, onMutate: K, onError: q, onSuccess: _e, onSettled: ve }),
      (n[27] = W),
      (n[28] = G),
      (n[29] = K),
      (n[30] = q),
      (n[31] = _e),
      (n[32] = ve),
      (n[33] = ye))
    : (ye = n[33]);
  let be = v(ye),
    xe;
  n[34] === o ? (xe = n[35]) : ((xe = [`delete-archived-conversations`, o]), (n[34] = o), (n[35] = xe));
  let Se;
  n[36] !== o || n[37] !== D
    ? ((Se = async (e) =>
        e.kind === `all`
          ? tt(D, o).deleteAllArchivedConversations()
          : e.kind === `project`
            ? (await Promise.all(e.threadIds.map((e) => tt(D, o).deleteArchivedConversation(g(e))))).flat()
            : tt(D, o).deleteArchivedConversation(g(e.thread.id))),
      (n[36] = o),
      (n[37] = D),
      (n[38] = Se))
    : (Se = n[38]);
  let we;
  n[39] !== o || n[40] !== O || n[41] !== D
    ? ((we = async (e) => {
        let t = e.kind === `single` ? [e.thread.id] : e.threadIds;
        (D.get(ce).info(
          e.kind === `single` ? (0, Q.jsx)(f, { ...X.deleting }) : (0, Q.jsx)(f, { ...X.deletingAll }),
          { id: In(e), duration: 0, hasCloseButton: !1, leading: (0, Q.jsx)(ge, { className: `icon-xs` }) },
        ),
          await O.cancelQueries({ queryKey: [`archived-threads`, o] }));
        let n = O.getQueryData([`archived-threads`, o]) ?? [];
        return (
          O.setQueryData(
            [`archived-threads`, o],
            n.filter((e) => !t.includes(e.id)),
          ),
          { deletingThreadIds: t, previousThreads: n }
        );
      }),
      (n[39] = o),
      (n[40] = O),
      (n[41] = D),
      (n[42] = we))
    : (we = n[42]);
  let Te;
  n[43] !== o || n[44] !== j || n[45] !== O || n[46] !== D
    ? ((Te = (e, t, n) => {
        (n?.previousThreads && O.setQueryData([`archived-threads`, o], n.previousThreads),
          D.get(ce).danger(
            j.formatMessage(
              se(e, `thread/delete`)
                ? X.deleteUnsupported
                : t.kind === `single`
                  ? X.deleteError
                  : X.deleteAllError,
            ),
            { errorAnalytics: { toastId: `dataControls.onError.deleteUnsupported` }, id: In(t) },
          ));
      }),
      (n[43] = o),
      (n[44] = j),
      (n[45] = O),
      (n[46] = D),
      (n[47] = Te))
    : (Te = n[47]);
  let Ee;
  n[48] !== j || n[49] !== D
    ? ((Ee = (e, t) => {
        if (t.kind !== `single`) {
          D.get(ce).success(
            j.formatMessage(
              {
                id: `settings.dataControls.archivedChats.deleteAllSuccess`,
                defaultMessage: `Deleted {count, plural, one {# archived chat} other {# archived chats}}`,
                description: `Success toast after deleting archived chats`,
              },
              { count: e.length || t.threadIds.length },
            ),
            { id: In(t) },
          );
          return;
        }
        D.get(ce).success(j.formatMessage(X.deleteSuccessPlain), { id: In(t) });
      }),
      (n[48] = j),
      (n[49] = D),
      (n[50] = Ee))
    : (Ee = n[50]);
  let De;
  n[51] !== o || n[52] !== O
    ? ((De = () => {
        O.invalidateQueries({ queryKey: [`archived-threads`, o] });
      }),
      (n[51] = o),
      (n[52] = O),
      (n[53] = De))
    : (De = n[53]);
  let Oe;
  n[54] !== xe || n[55] !== Se || n[56] !== we || n[57] !== Te || n[58] !== Ee || n[59] !== De
    ? ((Oe = { mutationKey: xe, mutationFn: Se, onMutate: we, onError: Te, onSuccess: Ee, onSettled: De }),
      (n[54] = xe),
      (n[55] = Se),
      (n[56] = we),
      (n[57] = Te),
      (n[58] = Ee),
      (n[59] = De),
      (n[60] = Oe))
    : (Oe = n[60]);
  let ke = v(Oe),
    Y = be.isPending || ke.isPending,
    Ae = Y || l || u,
    je;
  n[61] !== r.length || n[62] !== i
    ? ((je = function (e) {
        let t = N.current,
          n = e.ownerDocument;
        if (t == null || n.activeElement !== e) return;
        let a = Array.from(t.querySelectorAll(`button[data-archived-chat-unarchive]`)),
          o = a.indexOf(e),
          s = [...a.slice(o + 1), ...a.slice(0, o).reverse()],
          c = new AbortController();
        return (
          n.addEventListener(
            `focusin`,
            (t) => {
              t.target !== e && c.abort();
            },
            { signal: c.signal },
          ),
          (a) => {
            let o = c.signal.aborted;
            (c.abort(),
              requestAnimationFrame(() => {
                o ||
                  !t.isConnected ||
                  (n.activeElement !== n.body && n.activeElement !== e) ||
                  (
                    (a ? s : [e]).find(Dn) ??
                    (r.length > 1 || !a ? t.querySelector(`#archived-tasks-search`) : null) ??
                    (i == null ? null : t.querySelector(`button:not(:disabled)`)) ??
                    t
                  ).focus({ preventScroll: !0 });
              }));
          }
        );
      }),
      (n[61] = r.length),
      (n[62] = i),
      (n[63] = je))
    : (je = n[63]);
  let Me = je,
    Ne;
  n[64] !== U || n[65] !== H || n[66] !== r.length || n[67] !== c || n[68] !== a || n[69] !== L || n[70] !== V
    ? ((Ne =
        r.length === 0
          ? null
          : (0, Q.jsx)(An, {
              kindFilter: U,
              localChatsAvailable: c,
              projectFilter: H,
              projects: a,
              searchQuery: L,
              sortKey: V,
              onKindFilterChange: ne,
              onProjectFilterChange: ie,
              onSearchQueryChange: R,
              onSortKeyChange: ae,
            })),
      (n[64] = U),
      (n[65] = H),
      (n[66] = r.length),
      (n[67] = c),
      (n[68] = a),
      (n[69] = L),
      (n[70] = V),
      (n[71] = Ne))
    : (Ne = n[71]);
  let Pe = Ne,
    Fe = U !== `cloud` && u,
    Ie = U !== `local` && p,
    Le;
  if (b || (de.length === 0 && ((U !== `cloud` && l) || (U !== `local` && d)))) {
    let e;
    (n[72] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(J, {
          children: (0, Q.jsx)(nn, {
            children: (0, Q.jsx)(f, {
              id: `settings.dataControls.archivedChats.loading`,
              defaultMessage: `Loading archived chats…`,
              description: `Loading state label for archived chats list`,
            }),
          }),
        })),
        (n[72] = e))
      : (e = n[72]),
      (Le = e));
  } else if (r.length === 0 && (C != null || Fe || Ie)) Le = null;
  else if (S || r.length === 0) {
    let e;
    (n[73] === S
      ? (e = n[74])
      : ((e = (0, Q.jsx)(J, {
          children: (0, Q.jsx)(Mt, {
            layout: `settings-row`,
            children: S
              ? (0, Q.jsx)(f, {
                  id: `settings.dataControls.archivedChats.error`,
                  defaultMessage: `Could not load archived chats`,
                  description: `Error state label for archived chats list`,
                })
              : (0, Q.jsx)(f, {
                  id: `settings.dataControls.archivedChats.empty`,
                  defaultMessage: `No archived chats`,
                  description: `Empty state label for archived chats list`,
                }),
          }),
        })),
        (n[73] = S),
        (n[74] = e)),
      (Le = e));
  } else {
    let e;
    n[75] !== fe || n[76] !== C || n[77] !== x || n[78] !== Ie || n[79] !== Fe || n[80] !== de.length
      ? ((e =
          de.length === 0 && !fe && !x && C == null && !Fe && !Ie
            ? (0, Q.jsx)(J, {
                children: (0, Q.jsx)(Mt, {
                  layout: `settings-row`,
                  children: (0, Q.jsx)(f, {
                    id: `settings.dataControls.archivedChats.noMatches`,
                    defaultMessage: `No matching archived chats`,
                    description: `Empty state shown when archived chat search has no matches`,
                  }),
                }),
              })
            : null),
        (n[75] = fe),
        (n[76] = C),
        (n[77] = x),
        (n[78] = Ie),
        (n[79] = Fe),
        (n[80] = de.length),
        (n[81] = e))
      : (e = n[81]);
    let t;
    if (
      n[82] !== H.kind ||
      n[83] !== Ae ||
      n[84] !== Y ||
      n[85] !== o ||
      n[86] !== Me ||
      n[87] !== be ||
      n[88] !== de
    ) {
      let e;
      (n[90] !== H.kind || n[91] !== Ae || n[92] !== Y || n[93] !== o || n[94] !== Me || n[95] !== be
        ? ((e = (e) =>
            (0, Q.jsx)(
              Nn,
              {
                group: e,
                hostId: o,
                isDeleteDisabled: Y,
                isProjectDeleteDisabled: Ae,
                showHeader: H.kind === `all`,
                unarchivingThreadId: be.variables?.thread.id ?? null,
                isUnarchiving: be.isPending,
                onDelete: (e) => {
                  I({ kind: `single`, thread: e });
                },
                onUnarchive: (e) => {
                  be.mutate(e);
                },
                onChatGptUnarchiveStart: Me,
                onDeleteProject: (e, t) => {
                  I({ kind: `project`, projectLabel: e, threads: t });
                },
              },
              e.id,
            )),
          (n[90] = H.kind),
          (n[91] = Ae),
          (n[92] = Y),
          (n[93] = o),
          (n[94] = Me),
          (n[95] = be),
          (n[96] = e))
        : (e = n[96]),
        (t = de.map(e)),
        (n[82] = H.kind),
        (n[83] = Ae),
        (n[84] = Y),
        (n[85] = o),
        (n[86] = Me),
        (n[87] = be),
        (n[88] = de),
        (n[89] = t));
    } else t = n[89];
    let r;
    n[97] === T
      ? (r = n[98])
      : ((r = () => {
          T();
        }),
        (n[97] = T),
        (n[98] = r));
    let i;
    n[99] !== fe || n[100] !== x || n[101] !== r
      ? ((i = (0, Q.jsx)(Bt, { hasNextPage: fe, isFetchingNextPage: x, onLoadNextPage: r })),
        (n[99] = fe),
        (n[100] = x),
        (n[101] = r),
        (n[102] = i))
      : (i = n[102]);
    let a;
    (n[103] !== e || n[104] !== t || n[105] !== i
      ? ((a = (0, Q.jsxs)(Q.Fragment, { children: [e, t, i] })),
        (n[103] = e),
        (n[104] = t),
        (n[105] = i),
        (n[106] = a))
      : (a = n[106]),
      (Le = a));
  }
  let Be;
  n[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, Q.jsx)(lt, { slug: `archived-chats` })), (n[107] = Be))
    : (Be = n[107]);
  let Ve;
  n[108] !== Ae || n[109] !== me || n[110] !== S || n[111] !== b
    ? ((Ve =
        me && !b && !S
          ? (0, Q.jsxs)(t, {
              color: `danger`,
              size: `toolbar`,
              disabled: Ae,
              onClick: () => {
                I({ kind: `all` });
              },
              children: [
                (0, Q.jsx)(ee, { className: `shrink-0`, "aria-hidden": !1, asset: E }),
                (0, Q.jsx)(f, { ...X.deleteAll }),
              ],
            })
          : null),
      (n[108] = Ae),
      (n[109] = me),
      (n[110] = S),
      (n[111] = b),
      (n[112] = Ve))
    : (Ve = n[112]);
  let He;
  n[113] !== C ||
  n[114] !== b ||
  n[115] !== w ||
  n[116] !== _ ||
  n[117] !== h ||
  n[118] !== Ie ||
  n[119] !== Fe
    ? ((He =
        (C != null || Fe || Ie) && !b
          ? (0, Q.jsx)(J, {
              children: (0, Q.jsx)(Ce, {
                label: (0, Q.jsx)(f, {
                  id: `settings.dataControls.archivedChats.error`,
                  defaultMessage: `Could not load archived chats`,
                  description: `Error state label for archived chats list`,
                }),
                control: (0, Q.jsx)(t, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => {
                    (Fe && h(), Ie && _(), C != null && w());
                  },
                  children: (0, Q.jsx)(f, { ...Ge.retry }),
                }),
              }),
            })
          : null),
      (n[113] = C),
      (n[114] = b),
      (n[115] = w),
      (n[116] = _),
      (n[117] = h),
      (n[118] = Ie),
      (n[119] = Fe),
      (n[120] = He))
    : (He = n[120]);
  let We;
  n[121] !== r || n[122] !== ke || n[123] !== F
    ? ((We = () => {
        if (F != null) {
          if ((I(null), F.kind === `all`)) {
            ke.mutate({ kind: `all`, threadIds: r.flatMap(En) });
            return;
          }
          if (F.kind === `project`) {
            ke.mutate({ kind: `project`, projectLabel: F.projectLabel, threadIds: F.threads.map(Tn) });
            return;
          }
          ke.mutate({ kind: `single`, thread: F.thread });
        }
      }),
      (n[121] = r),
      (n[122] = ke),
      (n[123] = F),
      (n[124] = We))
    : (We = n[124]);
  let Ke;
  n[125] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (e) => {
        e || I(null);
      }),
      (n[125] = Ke))
    : (Ke = n[125]);
  let qe;
  n[126] !== F || n[127] !== We
    ? ((qe = (0, Q.jsx)(an, { state: F, onConfirm: We, onOpenChange: Ke })),
      (n[126] = F),
      (n[127] = We),
      (n[128] = qe))
    : (qe = n[128]);
  let Je;
  return (
    n[129] !== Le || n[130] !== Pe || n[131] !== i || n[132] !== Ve || n[133] !== He || n[134] !== qe
      ? ((Je = (0, Q.jsxs)(_t, {
          ref: N,
          tabIndex: -1,
          backSlot: i,
          stickyControls: Pe,
          title: Be,
          action: Ve,
          children: [Le, He, qe],
        })),
        (n[129] = Le),
        (n[130] = Pe),
        (n[131] = i),
        (n[132] = Ve),
        (n[133] = He),
        (n[134] = qe),
        (n[135] = Je))
      : (Je = n[135]),
    Je
  );
}
function Tn(e) {
  return e.id;
}
function En(e) {
  return e.kind === `local` && e.hostId === `local` ? [e.thread.id] : [];
}
function Dn(e) {
  return e.isConnected && !e.disabled;
}
function On(e) {
  return e.kind === `local` && e.hostId === `local`;
}
function kn(e) {
  return e.groupId;
}
function An(e) {
  let t = (0, Ln.c)(25),
    {
      kindFilter: n,
      localChatsAvailable: r,
      projectFilter: i,
      projects: a,
      searchQuery: o,
      sortKey: s,
      onKindFilterChange: c,
      onProjectFilterChange: l,
      onSearchQueryChange: u,
      onSortKeyChange: d,
    } = e,
    f = te(),
    p;
  t[0] === f ? (p = t[1]) : ((p = f.formatMessage($.searchArchivedChats)), (t[0] = f), (t[1] = p));
  let m;
  t[2] === f ? (m = t[3]) : ((m = f.formatMessage($.searchArchivedChats)), (t[2] = f), (t[3] = m));
  let h;
  t[4] !== u || t[5] !== o || t[6] !== p || t[7] !== m
    ? ((h = (0, Q.jsx)(Dt, {
        id: `archived-tasks-search`,
        className: `min-w-0 flex-1`,
        label: p,
        placeholder: m,
        searchQuery: o,
        onSearchQueryChange: u,
      })),
      (t[4] = u),
      (t[5] = o),
      (t[6] = p),
      (t[7] = m),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== n || t[10] !== r || t[11] !== c || t[12] !== d || t[13] !== s
    ? ((g = (0, Q.jsx)(jn, {
        kindFilter: n,
        localChatsAvailable: r,
        sortKey: s,
        onKindFilterChange: c,
        onSortKeyChange: d,
      })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = c),
      (t[12] = d),
      (t[13] = s),
      (t[14] = g))
    : (g = t[14]);
  let _;
  t[15] !== l || t[16] !== i || t[17] !== a
    ? ((_ = (0, Q.jsx)(Mn, { projectFilter: i, projects: a, onProjectFilterChange: l })),
      (t[15] = l),
      (t[16] = i),
      (t[17] = a),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] !== g || t[20] !== _
    ? ((v = (0, Q.jsxs)(ln, { className: `shrink-0`, children: [g, _] })),
      (t[19] = g),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y;
  return (
    t[22] !== h || t[23] !== v
      ? ((y = (0, Q.jsxs)(`div`, {
          className: `flex flex-col gap-2 md:flex-row md:items-center`,
          children: [h, v],
        })),
        (t[22] = h),
        (t[23] = v),
        (t[24] = y))
      : (y = t[24]),
    y
  );
}
function jn(e) {
  let t = (0, Ln.c)(55),
    { kindFilter: n, localChatsAvailable: r, sortKey: i, onKindFilterChange: o, onSortKeyChange: s } = e,
    c = te(),
    l;
  t[0] === c ? (l = t[1]) : ((l = c.formatMessage($.filterArchivedChats)), (t[0] = c), (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(ee, { className: `shrink-0`, "aria-hidden": !1, asset: K })), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === n ? (d = t[4]) : ((d = Fn(n)), (t[3] = n), (t[4] = d));
  let p;
  t[5] === d
    ? (p = t[6])
    : ((p = (0, Q.jsx)(`span`, { className: `truncate`, children: (0, Q.jsx)(f, { ...d }) })),
      (t[5] = d),
      (t[6] = p));
  let m;
  t[7] !== l || t[8] !== p
    ? ((m = (0, Q.jsxs)(qe, { className: `w-[150px] md:w-36`, "aria-label": l, children: [u, p] })),
      (t[7] = l),
      (t[8] = p),
      (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(j.SectionLabel, { children: (0, Q.jsx)(f, { ...$.type }) })), (t[10] = h))
    : (h = t[10]);
  let g = n === `all` ? Y : void 0,
    _;
  t[11] === o
    ? (_ = t[12])
    : ((_ = () => {
        o(`all`);
      }),
      (t[11] = o),
      (t[12] = _));
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(f, { ...$.allChats })), (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== g || t[15] !== _
    ? ((y = (0, Q.jsx)(j.Item, { rightIconAsset: g, onSelect: _, children: v })),
      (t[14] = g),
      (t[15] = _),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] !== n || t[18] !== r || t[19] !== o
    ? ((b = r
        ? (0, Q.jsx)(j.Item, {
            rightIconAsset: n === `local` ? Y : void 0,
            onSelect: () => {
              o(`local`);
            },
            children: (0, Q.jsx)(f, { ...$.local }),
          })
        : null),
      (t[17] = n),
      (t[18] = r),
      (t[19] = o),
      (t[20] = b))
    : (b = t[20]);
  let x = n === `cloud` ? Y : void 0,
    S;
  t[21] === o
    ? (S = t[22])
    : ((S = () => {
        o(`cloud`);
      }),
      (t[21] = o),
      (t[22] = S));
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(f, { ...$.cloud })), (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== x || t[25] !== S
    ? ((w = (0, Q.jsx)(j.Item, { rightIconAsset: x, onSelect: S, children: C })),
      (t[24] = x),
      (t[25] = S),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(j.Separator, {})), (t[27] = T))
    : (T = t[27]);
  let E;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(j.SectionLabel, { children: (0, Q.jsx)(f, { ...$.sortBy }) })), (t[28] = E))
    : (E = t[28]);
  let D = i === `updated` ? Y : void 0,
    O;
  t[29] === s
    ? (O = t[30])
    : ((O = () => {
        s(`updated`);
      }),
      (t[29] = s),
      (t[30] = O));
  let k;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(f, { ...$.updated })), (t[31] = k))
    : (k = t[31]);
  let A;
  t[32] !== D || t[33] !== O
    ? ((A = (0, Q.jsx)(j.Item, { rightIconAsset: D, onSelect: O, children: k })),
      (t[32] = D),
      (t[33] = O),
      (t[34] = A))
    : (A = t[34]);
  let M = i === `created` ? Y : void 0,
    N;
  t[35] === s
    ? (N = t[36])
    : ((N = () => {
        s(`created`);
      }),
      (t[35] = s),
      (t[36] = N));
  let P;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(f, { ...$.created })), (t[37] = P))
    : (P = t[37]);
  let F;
  t[38] !== M || t[39] !== N
    ? ((F = (0, Q.jsx)(j.Item, { rightIconAsset: M, onSelect: N, children: P })),
      (t[38] = M),
      (t[39] = N),
      (t[40] = F))
    : (F = t[40]);
  let I = i === `alphabetical` ? Y : void 0,
    L;
  t[41] === s
    ? (L = t[42])
    : ((L = () => {
        s(`alphabetical`);
      }),
      (t[41] = s),
      (t[42] = L));
  let R;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(f, { ...$.alphabetical })), (t[43] = R))
    : (R = t[43]);
  let z;
  t[44] !== I || t[45] !== L
    ? ((z = (0, Q.jsx)(j.Item, { rightIconAsset: I, onSelect: L, children: R })),
      (t[44] = I),
      (t[45] = L),
      (t[46] = z))
    : (z = t[46]);
  let B;
  return (
    t[47] !== y || t[48] !== b || t[49] !== w || t[50] !== A || t[51] !== F || t[52] !== z || t[53] !== m
      ? ((B = (0, Q.jsxs)(a, {
          side: `bottom`,
          align: `end`,
          contentWidth: `menuNarrow`,
          triggerButton: m,
          children: [h, y, b, w, T, E, A, F, z],
        })),
        (t[47] = y),
        (t[48] = b),
        (t[49] = w),
        (t[50] = A),
        (t[51] = F),
        (t[52] = z),
        (t[53] = m),
        (t[54] = B))
      : (B = t[54]),
    B
  );
}
function Mn(e) {
  let t = (0, Ln.c)(63),
    { projectFilter: n, projects: r, onProjectFilterChange: i } = e,
    o = te(),
    s;
  t[0] !== n.groupId || t[1] !== n.kind || t[2] !== r
    ? ((s = n.kind === `group` ? r.find((e) => e.groupId === n.groupId) : null),
      (t[0] = n.groupId),
      (t[1] = n.kind),
      (t[2] = r),
      (t[3] = s))
    : (s = t[3]);
  let c = s,
    l,
    u,
    d,
    p,
    m,
    h,
    g,
    _,
    v;
  if (t[4] !== o || t[5] !== i || t[6] !== n.groupId || t[7] !== n.kind || t[8] !== r || t[9] !== c) {
    let e = new Map();
    for (let t of r) {
      let n = e.get(t.label) ?? [];
      (n.push(t.path ?? t.label), e.set(t.label, n));
    }
    ((l = a), (u = `bottom`), (d = `end`), (p = `workspace`), (m = `tall`));
    let s;
    t[19] === o
      ? (s = t[20])
      : ((s = o.formatMessage($.filterArchivedChatsByProject)), (t[19] = o), (t[20] = s));
    let y;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((y = (0, Q.jsx)(ee, { className: `shrink-0`, "aria-hidden": !1, asset: R })), (t[21] = y))
      : (y = t[21]);
    let b;
    t[22] !== n.groupId || t[23] !== n.kind || t[24] !== c
      ? ((b =
          n.kind === `all`
            ? (0, Q.jsx)(f, { ...$.allProjects })
            : n.groupId === `special:automations`
              ? (0, Q.jsx)(f, { ...$.automations })
              : n.groupId === `special:none`
                ? (0, Q.jsx)(f, { ...$.chats })
                : c == null
                  ? (0, Q.jsx)(f, { ...$.allProjects })
                  : c.label),
        (t[22] = n.groupId),
        (t[23] = n.kind),
        (t[24] = c),
        (t[25] = b))
      : (b = t[25]);
    let x;
    (t[26] === b
      ? (x = t[27])
      : ((x = (0, Q.jsx)(`span`, { className: `truncate`, children: b })), (t[26] = b), (t[27] = x)),
      t[28] !== s || t[29] !== x
        ? ((h = (0, Q.jsxs)(qe, { className: `w-[180px] md:w-44`, "aria-label": s, children: [y, x] })),
          (t[28] = s),
          (t[29] = x),
          (t[30] = h))
        : (h = t[30]));
    let S = n.kind === `all` ? Y : void 0,
      w;
    t[31] === i
      ? (w = t[32])
      : ((w = () => {
          i({ kind: `all` });
        }),
        (t[31] = i),
        (t[32] = w));
    let T;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, Q.jsx)(f, { ...$.allProjects })), (t[33] = T))
      : (T = t[33]),
      t[34] !== S || t[35] !== w
        ? ((g = (0, Q.jsx)(j.Item, { rightIconAsset: S, onSelect: w, children: T })),
          (t[34] = S),
          (t[35] = w),
          (t[36] = g))
        : (g = t[36]),
      t[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, Q.jsx)(j.Separator, {})), (t[37] = _))
        : (_ = t[37]),
      (v = r.map((t) => {
        let r = e.get(t.label) ?? [],
          a = r.length > 1 ? C(t.path ?? t.label, r) : void 0,
          o = n.kind === `group` && n.groupId === t.groupId;
        return (0, Q.jsx)(
          j.Item,
          {
            LeftIcon: Ee,
            rightIconAsset: o ? Y : void 0,
            tooltipText: a,
            tooltipAlign: `center`,
            onSelect: () => {
              i({ kind: `group`, groupId: t.groupId });
            },
            children: t.label,
          },
          t.groupId,
        );
      })),
      (t[4] = o),
      (t[5] = i),
      (t[6] = n.groupId),
      (t[7] = n.kind),
      (t[8] = r),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _),
      (t[18] = v));
  } else
    ((l = t[10]),
      (u = t[11]),
      (d = t[12]),
      (p = t[13]),
      (m = t[14]),
      (h = t[15]),
      (g = t[16]),
      (_ = t[17]),
      (v = t[18]));
  let y;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(j.Separator, {})), (t[38] = y))
    : (y = t[38]);
  let b = n.kind === `group` && n.groupId === `special:none` ? Y : void 0,
    x;
  t[39] === i
    ? (x = t[40])
    : ((x = () => {
        i({ kind: `group`, groupId: mt });
      }),
      (t[39] = i),
      (t[40] = x));
  let S;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(f, { ...$.chats })), (t[41] = S))
    : (S = t[41]);
  let w;
  t[42] !== b || t[43] !== x
    ? ((w = (0, Q.jsx)(j.Item, { leftIconAsset: fe, rightIconAsset: b, onSelect: x, children: S })),
      (t[42] = b),
      (t[43] = x),
      (t[44] = w))
    : (w = t[44]);
  let T = n.kind === `group` && n.groupId === `special:automations` ? Y : void 0,
    E;
  t[45] === i
    ? (E = t[46])
    : ((E = () => {
        i({ kind: `group`, groupId: Gt });
      }),
      (t[45] = i),
      (t[46] = E));
  let D;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Q.jsx)(f, { ...$.automations })), (t[47] = D))
    : (D = t[47]);
  let O;
  t[48] !== T || t[49] !== E
    ? ((O = (0, Q.jsx)(j.Item, {
        LeftIcon: I,
        leftIconClassName: ``,
        rightIconAsset: T,
        onSelect: E,
        children: D,
      })),
      (t[48] = T),
      (t[49] = E),
      (t[50] = O))
    : (O = t[50]);
  let k;
  return (
    t[51] !== l ||
    t[52] !== w ||
    t[53] !== O ||
    t[54] !== u ||
    t[55] !== d ||
    t[56] !== p ||
    t[57] !== m ||
    t[58] !== h ||
    t[59] !== g ||
    t[60] !== _ ||
    t[61] !== v
      ? ((k = (0, Q.jsxs)(l, {
          side: u,
          align: d,
          contentWidth: p,
          contentMaxHeight: m,
          triggerButton: h,
          children: [g, _, v, y, w, O],
        })),
        (t[51] = l),
        (t[52] = w),
        (t[53] = O),
        (t[54] = u),
        (t[55] = d),
        (t[56] = p),
        (t[57] = m),
        (t[58] = h),
        (t[59] = g),
        (t[60] = _),
        (t[61] = v),
        (t[62] = k))
      : (k = t[62]),
    k
  );
}
function Nn(e) {
  let t = (0, Ln.c)(35),
    {
      group: n,
      hostId: r,
      isDeleteDisabled: i,
      isProjectDeleteDisabled: o,
      showHeader: s,
      unarchivingThreadId: c,
      isUnarchiving: l,
      onDelete: u,
      onDeleteProject: d,
      onUnarchive: p,
      onChatGptUnarchiveStart: m,
    } = e,
    h = te(),
    g;
  t[0] !== n.entries || t[1] !== n.id
    ? ((g = yt(n.entries, n.id)), (t[0] = n.entries), (t[1] = n.id), (t[2] = g))
    : (g = t[2]);
  let _ = g,
    v = n.projectLabel != null && r === `local` && _.length > 0,
    y;
  t[3] !== v ||
  t[4] !== n.entries.length ||
  t[5] !== n.id ||
  t[6] !== n.projectLabel ||
  t[7] !== h ||
  t[8] !== o ||
  t[9] !== d ||
  t[10] !== _ ||
  t[11] !== s
    ? ((y = s
        ? (0, Q.jsx)(Ze.Header, {
            title: (0, Q.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, Q.jsx)(ee, { className: `shrink-0`, "aria-hidden": !1, asset: R }),
                (0, Q.jsx)(`span`, {
                  className: `truncate`,
                  children:
                    n.id === `special:dot`
                      ? (0, Q.jsx)(f, { ...wt.title, values: { dot: `dot` } })
                      : (n.projectLabel ??
                        (0, Q.jsx)(f, {
                          id: `settings.dataControls.archivedChats.noProject`,
                          defaultMessage: `No project`,
                          description: `Fallback project header for archived chats without a project`,
                        })),
                }),
              ],
            }),
            actions: (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, Q.jsx)(f, {
                    id: `settings.dataControls.archivedChats.groupCount`,
                    defaultMessage: `{count, plural, one {# chat} other {# chats}}`,
                    description: `Archived chat count shown in a project group header`,
                    values: { count: n.entries.length },
                  }),
                }),
                v
                  ? (0, Q.jsx)(a, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(O, {
                        label: h.formatMessage({
                          id: `settings.dataControls.archivedChats.projectActions`,
                          defaultMessage: `Project actions`,
                          description: `Accessible label for the project archived chats actions menu`,
                        }),
                      }),
                      children: (0, Q.jsx)(j.Item, {
                        leftIconAsset: E,
                        className: `!text-danger`,
                        leftIconClassName: `text-danger`,
                        disabled: o,
                        onSelect: () => {
                          d(n.projectLabel, _);
                        },
                        children: (0, Q.jsx)(f, { ...$.deleteProjectChats }),
                      }),
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[3] = v),
      (t[4] = n.entries.length),
      (t[5] = n.id),
      (t[6] = n.projectLabel),
      (t[7] = h),
      (t[8] = o),
      (t[9] = d),
      (t[10] = _),
      (t[11] = s),
      (t[12] = y))
    : (y = t[12]);
  let b;
  if (
    t[13] !== n.entries ||
    t[14] !== i ||
    t[15] !== l ||
    t[16] !== m ||
    t[17] !== u ||
    t[18] !== p ||
    t[19] !== s ||
    t[20] !== c
  ) {
    let e;
    (t[22] !== i || t[23] !== l || t[24] !== m || t[25] !== u || t[26] !== p || t[27] !== s || t[28] !== c
      ? ((e = (e) => {
          switch (e.kind) {
            case `cloud`:
              return (0, Q.jsx)(
                un,
                { archivedTask: e.task, showProjectName: !s, onUnarchiveStart: m },
                `${`archived` in e.task ? `cloud` : `chatgpt`}:${e.task.id}`,
              );
            case `local`:
              return (0, Q.jsx)(
                Pn,
                {
                  archivedThread: e.thread,
                  isDeleteDisabled: i,
                  isUnarchiving: l && c === e.thread.id,
                  showDeleteButton: e.hostId === U,
                  showProjectName: !s,
                  onDelete: () => {
                    u(e.thread);
                  },
                  onUnarchive: () => {
                    p(e);
                  },
                },
                `local:${e.hostId}:${e.thread.id}`,
              );
          }
        }),
        (t[22] = i),
        (t[23] = l),
        (t[24] = m),
        (t[25] = u),
        (t[26] = p),
        (t[27] = s),
        (t[28] = c),
        (t[29] = e))
      : (e = t[29]),
      (b = n.entries.map(e)),
      (t[13] = n.entries),
      (t[14] = i),
      (t[15] = l),
      (t[16] = m),
      (t[17] = u),
      (t[18] = p),
      (t[19] = s),
      (t[20] = c),
      (t[21] = b));
  } else b = t[21];
  let x;
  t[30] === b
    ? (x = t[31])
    : ((x = (0, Q.jsx)(Ze.Content, { children: (0, Q.jsx)(J, { children: b }) })), (t[30] = b), (t[31] = x));
  let S;
  return (
    t[32] !== y || t[33] !== x
      ? ((S = (0, Q.jsxs)(Ze, { children: [y, x] })), (t[32] = y), (t[33] = x), (t[34] = S))
      : (S = t[34]),
    S
  );
}
function Pn(e) {
  let n = (0, Ln.c)(55),
    {
      archivedThread: r,
      isDeleteDisabled: i,
      isUnarchiving: a,
      showDeleteButton: o,
      showProjectName: s,
      onDelete: c,
      onUnarchive: l,
    } = e,
    u = te(),
    d;
  n[0] !== r.name || n[1] !== r.preview
    ? ((d = Ne(r.name?.trim() || r.preview).trim()), (n[0] = r.name), (n[1] = r.preview), (n[2] = d))
    : (d = n[2]);
  let p = d,
    m,
    h,
    g,
    _;
  if (
    n[3] !== r.createdAt ||
    n[4] !== r.cwd ||
    n[5] !== r.path ||
    n[6] !== r.updatedAt ||
    n[7] !== u ||
    n[8] !== s
  ) {
    let e = new Date(r.updatedAt * 1e3),
      t = new Date(r.createdAt * 1e3),
      i = Number.isFinite(e.getTime()) ? e : Number.isFinite(t.getTime()) ? t : null,
      a;
    (n[13] !== r.cwd || n[14] !== r.path || n[15] !== s
      ? ((a = s ? (Ie(r.cwd) ?? Ie(r.path)) : null),
        (n[13] = r.cwd),
        (n[14] = r.path),
        (n[15] = s),
        (n[16] = a))
      : (a = n[16]),
      (g = a),
      (h = i != null),
      (m = h ? u.formatDate(i, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (_ = h ? u.formatTime(i, { hour: `numeric`, minute: `2-digit` }) : ``),
      (n[3] = r.createdAt),
      (n[4] = r.cwd),
      (n[5] = r.path),
      (n[6] = r.updatedAt),
      (n[7] = u),
      (n[8] = s),
      (n[9] = m),
      (n[10] = h),
      (n[11] = g),
      (n[12] = _));
  } else ((m = n[9]), (h = n[10]), (g = n[11]), (_ = n[12]));
  let v = _,
    y;
  n[17] === u
    ? (y = n[18])
    : ((y = u.formatMessage({
        id: `settings.dataControls.archivedChats.deleteAriaLabel`,
        defaultMessage: `Delete archived chat`,
        description: `Aria label for deleting an archived chat`,
      })),
      (n[17] = u),
      (n[18] = y));
  let b = y,
    x;
  n[19] === r.id ? (x = n[20]) : ((x = (0, Q.jsx)(sn, { threadId: r.id })), (n[19] = r.id), (n[20] = x));
  let S;
  n[21] === p
    ? (S = n[22])
    : ((S =
        p.length > 0
          ? p
          : (0, Q.jsx)(f, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (n[21] = p),
      (n[22] = S));
  let C;
  n[23] === S
    ? (C = n[24])
    : ((C = (0, Q.jsx)(`span`, { className: `truncate`, children: S })), (n[23] = S), (n[24] = C));
  let w;
  n[25] !== x || n[26] !== C
    ? ((w = (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-1 truncate`, children: [x, C] })),
      (n[25] = x),
      (n[26] = C),
      (n[27] = w))
    : (w = n[27]);
  let T;
  n[28] !== m || n[29] !== h || n[30] !== g || n[31] !== v
    ? ((T = h
        ? g
          ? (0, Q.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTimeWithRepo`,
              defaultMessage: `{date}, {time} • {repo}`,
              description: `Date, time, and repo name for an archived chat`,
              values: { date: m, time: v, repo: g },
            })
          : (0, Q.jsx)(f, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: m, time: v },
            })
        : null),
      (n[28] = m),
      (n[29] = h),
      (n[30] = g),
      (n[31] = v),
      (n[32] = T))
    : (T = n[32]);
  let D;
  n[33] === T
    ? (D = n[34])
    : ((D = (0, Q.jsx)(`div`, { className: `truncate`, children: T })), (n[33] = T), (n[34] = D));
  let O;
  n[35] !== b || n[36] !== i || n[37] !== c || n[38] !== o
    ? ((O = o
        ? (0, Q.jsx)(be, {
            tooltipContent: b,
            children: (0, Q.jsx)(t, {
              "aria-label": b,
              className: `text-chart-red enabled:hover:bg-chart-red/10`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: i,
              onClick: c,
              children: (0, Q.jsx)(ee, { "aria-hidden": !1, asset: E }),
            }),
          })
        : null),
      (n[35] = b),
      (n[36] = i),
      (n[37] = c),
      (n[38] = o),
      (n[39] = O))
    : (O = n[39]);
  let k;
  n[40] !== i || n[41] !== l
    ? ((k = () => {
        i || l();
      }),
      (n[40] = i),
      (n[41] = l),
      (n[42] = k))
    : (k = n[42]);
  let A;
  n[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(f, { ...X.unarchive })), (n[43] = A))
    : (A = n[43]);
  let j;
  n[44] !== i || n[45] !== a || n[46] !== k
    ? ((j = (0, Q.jsx)(t, {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: i,
        loading: a,
        onClick: k,
        children: A,
      })),
      (n[44] = i),
      (n[45] = a),
      (n[46] = k),
      (n[47] = j))
    : (j = n[47]);
  let M;
  n[48] !== O || n[49] !== j
    ? ((M = (0, Q.jsxs)(Q.Fragment, { children: [O, j] })), (n[48] = O), (n[49] = j), (n[50] = M))
    : (M = n[50]);
  let N;
  return (
    n[51] !== M || n[52] !== w || n[53] !== D
      ? ((N = (0, Q.jsx)(Ce, { label: w, description: D, control: M })),
        (n[51] = M),
        (n[52] = w),
        (n[53] = D),
        (n[54] = N))
      : (N = n[54]),
    N
  );
}
function Fn(e) {
  switch (e) {
    case `all`:
      return $.allChats;
    case `cloud`:
      return $.cloud;
    case `local`:
      return $.local;
  }
}
function In(e) {
  return e.kind === `all`
    ? `delete-archived-chats`
    : e.kind === `project`
      ? `delete-archived-project-${e.projectLabel ?? `no-project`}`
      : `delete-archived-thread-${e.thread.id}`;
}
var Ln, Rn, Q, $, zn, Bn;
function Vn() {
  return (Vn = e(() => {
    ((Ln = we()),
      c(),
      y(),
      ie(),
      G(),
      F(),
      B(),
      Te(),
      b(),
      p(),
      ne(),
      z(),
      Se(),
      Ut(),
      T(),
      ve(),
      q(),
      (Rn = Ae()),
      pe(),
      et(),
      Kt(),
      Ht(),
      dt(),
      Ct(),
      Yt(),
      zt(),
      xe(),
      i(),
      S(),
      A(),
      Pt(),
      vt(),
      n(),
      Wt(),
      H(),
      W(),
      V(),
      N(),
      Fe(),
      oe(),
      pt(),
      Ve(),
      Ke(),
      St(),
      De(),
      jt(),
      cn(),
      nt(),
      Le(),
      Je(),
      He(),
      tn(),
      ue(),
      Vt(),
      h(),
      Ft(),
      xt(),
      ct(),
      on(),
      _(),
      u(),
      qt(),
      ye(),
      Qt(),
      it(),
      mn(),
      st(),
      rn(),
      (Q = Oe()),
      ($ = r({
        searchArchivedChats: {
          id: `settings.dataControls.archivedChats.search.placeholder`,
          defaultMessage: `Search archived chats`,
          description: `Placeholder for the archived chats search input`,
        },
        filterArchivedChats: {
          id: `settings.dataControls.archivedChats.filter.ariaLabel`,
          defaultMessage: `Filter archived chats`,
          description: `Accessible label for the archived chats filter dropdown`,
        },
        groupArchivedChats: {
          id: `settings.dataControls.archivedChats.group.ariaLabel`,
          defaultMessage: `Group archived chats`,
          description: `Accessible label for the archived chats grouping dropdown`,
        },
        filterArchivedChatsByProject: {
          id: `settings.dataControls.archivedChats.projectFilter.ariaLabel`,
          defaultMessage: `Filter archived chats by project`,
          description: `Accessible label for the archived chats project dropdown`,
        },
        allProjects: {
          id: `settings.dataControls.archivedChats.projectFilter.allProjects`,
          defaultMessage: `All projects`,
          description: `Project filter option showing archived chats from all projects`,
        },
        chats: {
          id: `settings.dataControls.archivedChats.projectFilter.chats`,
          defaultMessage: `Chats`,
          description: `Project filter option showing projectless archived chats`,
        },
        automations: {
          id: `settings.dataControls.archivedChats.projectFilter.automations`,
          defaultMessage: `Scheduled tasks`,
          description: `Project filter option showing archived scheduled task runs`,
        },
        type: {
          id: `settings.dataControls.archivedChats.filter.section.type`,
          defaultMessage: `Type`,
          description: `Section label for archived chat type filter options`,
        },
        sortBy: {
          id: `settings.dataControls.archivedChats.filter.section.sort`,
          defaultMessage: `Sort by`,
          description: `Section label for archived chat sort options`,
        },
        allChats: {
          id: `settings.dataControls.archivedChats.filter.all`,
          defaultMessage: `All chats`,
          description: `Filter option showing every archived chat`,
        },
        local: {
          id: `settings.dataControls.archivedChats.filter.local`,
          defaultMessage: `Local`,
          description: `Filter option showing local archived chats`,
        },
        cloud: {
          id: `settings.dataControls.archivedChats.filter.cloud`,
          defaultMessage: `Cloud`,
          description: `Filter option showing cloud archived chats`,
        },
        project: {
          id: `settings.dataControls.archivedChats.group.project`,
          defaultMessage: `Project`,
          description: `Grouping option that groups archived chats by project`,
        },
        none: {
          id: `settings.dataControls.archivedChats.group.none`,
          defaultMessage: `None`,
          description: `Grouping option that shows archived chats in one list`,
        },
        updated: {
          id: `settings.dataControls.archivedChats.sort.updated`,
          defaultMessage: `Updated`,
          description: `Sort option for archived chats by last updated time`,
        },
        created: {
          id: `settings.dataControls.archivedChats.sort.created`,
          defaultMessage: `Created`,
          description: `Sort option for archived chats by creation time`,
        },
        alphabetical: {
          id: `settings.dataControls.archivedChats.sort.alphabetical`,
          defaultMessage: `Alphabetical`,
          description: `Sort option for archived chats by title`,
        },
        deleteProjectChats: {
          id: `settings.dataControls.archivedChats.deleteProjectChats`,
          defaultMessage: `Delete all in project`,
          description: `Menu item label for deleting local archived chats in a project`,
        },
      })),
      (zn = { kind: `all` }),
      (Bn = 1e5));
  }))();
}
Vn();
export { hn as DataControlsSettings };
//# sourceMappingURL=data-controls-90f916160de4.js.map
