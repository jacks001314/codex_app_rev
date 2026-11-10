import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  Apt as a,
  Bst as o,
  DB as s,
  FBt as c,
  HCt as l,
  KH as u,
  LNt as d,
  Lst as f,
  M2 as p,
  MFt as m,
  Mst as h,
  NSt as g,
  Nst as _,
  OB as v,
  Opt as y,
  Oz as b,
  PBt as x,
  Pst as S,
  Q1 as C,
  QY as w,
  Qst as T,
  Rst as E,
  S3 as D,
  TY as O,
  Ty as k,
  USt as A,
  Uot as j,
  VCt as M,
  Vot as N,
  Vrt as P,
  XOt as F,
  Y3 as ee,
  YOt as I,
  Yst as te,
  Z1 as L,
  Z3 as ne,
  ZSt as re,
  ZY as ie,
  b2 as ae,
  bSt as oe,
  ck as se,
  d0 as ce,
  e6 as R,
  ew as z,
  f0 as le,
  hst as ue,
  iCt as de,
  j2 as B,
  jFt as fe,
  jst as V,
  mst as pe,
  nA as H,
  nB as me,
  nCt as he,
  okt as ge,
  ovt as U,
  qrt as W,
  rA as G,
  rB as K,
  rk as q,
  sct as _e,
  sw as ve,
  tk as ye,
  tkt as J,
  uSt as be,
  uw as xe,
  vst as Se,
  w_t as Ce,
  wy as we,
  x3 as Te,
  y2 as Y,
  yst as Ee,
  yz as De,
  zst as Oe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AG as ke,
  Aur as Ae,
  BJ as je,
  CCn as Me,
  CLr as Ne,
  Dyn as Pe,
  Exr as Fe,
  FBr as Ie,
  FF as Le,
  FJ as Re,
  HGn as ze,
  HJ as Be,
  IBr as Ve,
  IJ as He,
  JJ as Ue,
  KBr as We,
  LF as Ge,
  LIr as Ke,
  LJ as qe,
  MJ as Je,
  Myn as Ye,
  NJ as Xe,
  Oyn as Ze,
  PIr as Qe,
  QF as $e,
  RF as et,
  RJ as tt,
  Tmn as nt,
  UIr as rt,
  VGn as it,
  VJ as X,
  Wln as at,
  Xnr as ot,
  YJ as st,
  YTr as ct,
  Znr as lt,
  _p as ut,
  b2 as dt,
  bbr as ft,
  cA as pt,
  cGt as mt,
  cat as ht,
  cnr as gt,
  cun as _t,
  eI as vt,
  eer as yt,
  fxr as bt,
  gp as xt,
  hut as St,
  iRr as Ct,
  iat as wt,
  iun as Tt,
  jG as Et,
  jJ as Dt,
  jur as Ot,
  jyn as kt,
  kyn as At,
  lnr as jt,
  m0 as Mt,
  mQ as Nt,
  mut as Pt,
  mwr as Ft,
  oat as It,
  oun as Lt,
  p0 as Rt,
  rVr as zt,
  sA as Bt,
  sGt as Vt,
  sRr as Ht,
  sat as Ut,
  vun as Wt,
  wLr as Gt,
  wmn as Kt,
  wyn as qt,
  x2 as Jt,
  xbr as Yt,
  ybr as Xt,
  zJ as Zt,
  zRr as Qt,
} from "./app-initial-ad16eaadf81f.js";
import { Du as $t, Eu as en } from "./app-primary-3e00728c2a4c.js";
import { n as tn, t as nn } from "./settings-loading-row-1fcc5b514745.js";
import { n as rn, t as an } from "./delete-archived-chats-dialog-26bed4eece2a.js";
import { n as on, t as sn } from "./thread-emoji-a1443c735c6b.js";
import { n as cn, t as ln } from "./control-group-c6e0f99046fd.js";
function un(e) {
  let t = (0, fn.c)(108),
    { archivedTask: n, showProjectName: i, onUnarchiveStart: a } = e,
    o = r(T),
    c = E(),
    l = de(Qt),
    u = ge(),
    d = A(),
    f;
  t[0] === n.title ? (f = t[1]) : ((f = jt(n.title ?? ``).trim()), (t[0] = n.title), (t[1] = f));
  let p = f,
    m;
  t[2] === p
    ? (m = t[3])
    : ((m =
        p.length > 0
          ? p
          : (0, Z.jsx)(J, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[2] = p),
      (t[3] = m));
  let h = m,
    g = `archived` in n,
    [_, v] = (0, pn.useState)(!1),
    y;
  t[4] !== n.id || t[5] !== o
    ? ((y = () => Tt({ scope: o, conversationId: n.id })), (t[4] = n.id), (t[5] = o), (t[6] = y))
    : (y = t[6]);
  let b;
  t[7] === c
    ? (b = t[8])
    : ((b = async () => {
        (v(!1), await c.invalidateQueries({ queryKey: [at] }));
      }),
      (t[7] = c),
      (t[8] = b));
  let x;
  t[9] !== u || t[10] !== o
    ? ((x = () => {
        o.get(W).danger(u.formatMessage(X.deleteError), {
          errorAnalytics: { toastId: `archived_conversations_modal_delete_failed` },
        });
      }),
      (t[9] = u),
      (t[10] = o),
      (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== y || t[13] !== b || t[14] !== x
    ? ((S = { mutationFn: y, onSuccess: b, onError: x }), (t[12] = y), (t[13] = b), (t[14] = x), (t[15] = S))
    : (S = t[15]);
  let C = Ee(S),
    w = g ? `recover-cloud-task` : `unarchive-chatgpt-conversation`,
    D;
  t[16] !== n.id || t[17] !== w ? ((D = [w, n.id]), (t[16] = n.id), (t[17] = w), (t[18] = D)) : (D = t[18]);
  let O;
  t[19] !== n.id || t[20] !== g || t[21] !== o
    ? ((O = async () => {
        g
          ? await Ct.safePost(`/wham/tasks/{task_id}/recover`, { parameters: { path: { task_id: n.id } } })
          : await Wt({ scope: o, conversationId: n.id });
      }),
      (t[19] = n.id),
      (t[20] = g),
      (t[21] = o),
      (t[22] = O))
    : (O = t[22]);
  let k;
  t[23] !== n.id || t[24] !== u || t[25] !== o
    ? ((k = () => {
        o.get(W).danger(u.formatMessage(X.unarchiveError), {
          errorAnalytics: { toastId: `archivedCloudChats.onError.unarchiveError` },
          id: `recover-cloud-task-${n.id}`,
        });
      }),
      (t[23] = n.id),
      (t[24] = u),
      (t[25] = o),
      (t[26] = k))
    : (k = t[26]);
  let j;
  t[27] !== l || t[28] !== n.id || t[29] !== g || t[30] !== d || t[31] !== c || t[32] !== o
    ? ((j = () => {
        g &&
          (c.setQueryData([`tasks`, `archived`, l], (e) =>
            e == null
              ? e
              : { ...e, pages: e.pages.map((e) => ({ ...e, items: e.items.filter((e) => e.id !== n.id) })) },
          ),
          Mt(o, n.id, !1));
        let e = o.get(W).info((0, Z.jsx)(J, { ...X.unarchiveSuccessPlain }), {
          leading: (0, Z.jsx)(s, { "aria-hidden": !1, asset: Te }),
          primaryAction: {
            label: (0, Z.jsx)(J, { ...X.viewNow }),
            onClick: () => {
              (e.close(), d(g ? `/remote/${n.id}` : N(n.id)));
            },
          },
          id: `${g ? `recover-cloud-task` : `unarchive-chatgpt-conversation`}-${n.id}`,
        });
      }),
      (t[27] = l),
      (t[28] = n.id),
      (t[29] = g),
      (t[30] = d),
      (t[31] = c),
      (t[32] = o),
      (t[33] = j))
    : (j = t[33]);
  let M;
  t[34] !== g || t[35] !== c
    ? ((M = () => {
        g && c.invalidateQueries({ queryKey: [`tasks`] });
      }),
      (t[34] = g),
      (t[35] = c),
      (t[36] = M))
    : (M = t[36]);
  let P;
  t[37] !== k || t[38] !== j || t[39] !== M || t[40] !== D || t[41] !== O
    ? ((P = { mutationKey: D, mutationFn: O, onError: k, onSuccess: j, onSettled: M }),
      (t[37] = k),
      (t[38] = j),
      (t[39] = M),
      (t[40] = D),
      (t[41] = O),
      (t[42] = P))
    : (P = t[42]);
  let F = Ee(P),
    I,
    te,
    L,
    ne;
  if (t[43] !== n || t[44] !== u || t[45] !== g || t[46] !== i) {
    let e = dn(n),
      r;
    (t[51] !== n.task_status_display?.environment_label || t[52] !== g || t[53] !== i
      ? ((r = i && g ? n.task_status_display?.environment_label?.trim() : null),
        (t[51] = n.task_status_display?.environment_label),
        (t[52] = g),
        (t[53] = i),
        (t[54] = r))
      : (r = t[54]),
      (te = r),
      (L = e != null),
      (I = L ? u.formatDate(e, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (ne = L ? u.formatTime(e, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[43] = n),
      (t[44] = u),
      (t[45] = g),
      (t[46] = i),
      (t[47] = I),
      (t[48] = te),
      (t[49] = L),
      (t[50] = ne));
  } else ((I = t[47]), (te = t[48]), (L = t[49]), (ne = t[50]));
  let re = ne,
    ie;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Z.jsx)(en, { className: `icon-sm` })), (t[55] = ie))
    : (ie = t[55]);
  let ae;
  t[56] === n.id ? (ae = t[57]) : ((ae = (0, Z.jsx)(sn, { threadId: n.id })), (t[56] = n.id), (t[57] = ae));
  let se;
  t[58] !== n.id || t[59] !== g || t[60] !== h
    ? ((se = g
        ? (0, Z.jsx)(`span`, { className: `truncate`, children: h })
        : (0, Z.jsx)(me, {
            cloneCustomTrigger: !0,
            tooltipContent: h,
            openWhen: `trigger-overflows`,
            scaleAvailableSizeWithZoom: !0,
            children: (0, Z.jsx)(oe, {
              className: `cursor-interaction truncate text-info hover:underline`,
              to: N(n.id),
              children: h,
            }),
          })),
      (t[58] = n.id),
      (t[59] = g),
      (t[60] = h),
      (t[61] = se))
    : (se = t[61]);
  let ce;
  t[62] !== ae || t[63] !== se
    ? ((ce = (0, Z.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1 truncate`,
        children: [ae, se],
      })),
      (t[62] = ae),
      (t[63] = se),
      (t[64] = ce))
    : (ce = t[64]);
  let R;
  t[65] !== I || t[66] !== te || t[67] !== L || t[68] !== re
    ? ((R = L
        ? te
          ? (0, Z.jsx)(J, {
              id: `settings.dataControls.archivedChats.dateTimeWithEnvironment`,
              defaultMessage: `{date}, {time} • {environment}`,
              description: `Date, time, and environment name for an archived cloud task`,
              values: { date: I, time: re, environment: te },
            })
          : (0, Z.jsx)(J, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: I, time: re },
            })
        : null),
      (t[65] = I),
      (t[66] = te),
      (t[67] = L),
      (t[68] = re),
      (t[69] = R))
    : (R = t[69]);
  let z;
  t[70] === R
    ? (z = t[71])
    : ((z = (0, Z.jsx)(`div`, { className: `truncate`, children: R })), (t[70] = R), (t[71] = z));
  let le = !g || void 0,
    ue = F.isPending || C.isPending,
    B;
  t[72] !== g || t[73] !== a || t[74] !== F
    ? ((B = (e) => {
        if (F.isPending) return;
        if (g) {
          F.mutate();
          return;
        }
        let t = a?.(e.currentTarget);
        F.mutateAsync().then(
          () => t?.(!0),
          () => t?.(!1),
        );
      }),
      (t[72] = g),
      (t[73] = a),
      (t[74] = F),
      (t[75] = B))
    : (B = t[75]);
  let fe;
  t[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, Z.jsx)(J, { ...X.unarchive })), (t[76] = fe))
    : (fe = t[76]);
  let V;
  t[77] !== le || t[78] !== ue || t[79] !== B || t[80] !== F.isPending
    ? ((V = (0, Z.jsx)(ee, {
        "data-archived-chat-unarchive": le,
        color: `secondary`,
        size: `toolbar`,
        disabled: ue,
        loading: F.isPending,
        onClick: B,
        children: fe,
      })),
      (t[77] = le),
      (t[78] = ue),
      (t[79] = B),
      (t[80] = F.isPending),
      (t[81] = V))
    : (V = t[81]);
  let pe;
  t[82] !== C.isPending || t[83] !== u || t[84] !== g || t[85] !== p || t[86] !== F.isPending
    ? ((pe = g
        ? null
        : (0, Z.jsx)(ee, {
            "aria-label": u.formatMessage(
              {
                id: `settings.dataControls.archivedChats.deleteWithTitle`,
                defaultMessage: `Delete archived chat {title}`,
                description: `Accessible label for the Delete button in a ChatGPT archived chats row. {title} is the displayed conversation title.`,
              },
              { title: p },
            ),
            color: `danger`,
            size: `toolbar`,
            disabled: F.isPending || C.isPending,
            onClick: () => v(!0),
            children: (0, Z.jsx)(J, { ...X.delete }),
          })),
      (t[82] = C.isPending),
      (t[83] = u),
      (t[84] = g),
      (t[85] = p),
      (t[86] = F.isPending),
      (t[87] = pe))
    : (pe = t[87]);
  let H;
  t[88] !== V || t[89] !== pe
    ? ((H = (0, Z.jsxs)(Z.Fragment, { children: [V, pe] })), (t[88] = V), (t[89] = pe), (t[90] = H))
    : (H = t[90]);
  let he;
  t[91] !== ce || t[92] !== z || t[93] !== H
    ? ((he = (0, Z.jsx)(ve, { icon: ie, label: ce, description: z, control: H })),
      (t[91] = ce),
      (t[92] = z),
      (t[93] = H),
      (t[94] = he))
    : (he = t[94]);
  let U;
  t[95] === C ? (U = t[96]) : ((U = () => C.mutate()), (t[95] = C), (t[96] = U));
  let G;
  t[97] !== u || t[98] !== p
    ? ((G =
        p ||
        u.formatMessage({
          id: `settings.dataControls.archivedChats.untitled`,
          defaultMessage: `Untitled chat`,
          description: `Fallback title for an archived chat`,
        })),
      (t[97] = u),
      (t[98] = p),
      (t[99] = G))
    : (G = t[99]);
  let K;
  t[100] !== C.isPending || t[101] !== _ || t[102] !== U || t[103] !== G
    ? ((K = (0, Z.jsx)(ke, { open: _, onOpenChange: v, isDeleting: C.isPending, onConfirm: U, title: G })),
      (t[100] = C.isPending),
      (t[101] = _),
      (t[102] = U),
      (t[103] = G),
      (t[104] = K))
    : (K = t[104]);
  let q;
  return (
    t[105] !== he || t[106] !== K
      ? ((q = (0, Z.jsxs)(Z.Fragment, { children: [he, K] })), (t[105] = he), (t[106] = K), (t[107] = q))
      : (q = t[107]),
    q
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
    ((fn = x()),
      D(),
      Se(),
      f(),
      re(),
      (pn = c()),
      F(),
      g(),
      Gt(),
      Et(),
      Lt(),
      j(),
      ne(),
      v(),
      P(),
      K(),
      $t(),
      gt(),
      Rt(),
      i(),
      xe(),
      on(),
      Ht(),
      Be(),
      (Z = d()));
  }))();
}
function hn(e) {
  let t = (0, Ln.c)(31),
    { backSlot: n } = e,
    i = r(T),
    { selectedHostId: a } = It(),
    o = de(Qt),
    s = de(Ne),
    c = de(rt),
    u = de(Qe),
    d = de(Pe),
    f = de(Ze),
    p = de(Fe),
    { data: g } = de(Ae),
    _ = de(At),
    v = he(zt, Ce),
    y = [a, ...(a === `local` && o != null ? [Ce] : [])],
    b = S({
      queries: y.map((e) => ({
        queryKey: Cn(e, o),
        queryFn: l({
          refetchMode: `replace`,
          initialValue: [],
          reducer: xn,
          streamFn: (t) => {
            let { signal: n } = t;
            return Sn(i, e, n);
          },
        }),
        enabled: u && (e !== `durable` || v === `connected`),
        staleTime: Oe.FIVE_SECONDS,
      })),
    }),
    {
      data: x,
      fetchNextPage: C,
      hasNextPage: w,
      isLoading: E,
      isFetchNextPageError: D,
      isFetchingNextPage: O,
      isError: k,
    } = Je(),
    A = a === `local` && s && o != null,
    j;
  t[0] !== o || t[1] !== c ? ((j = [at, 20, c, o]), (t[0] = o), (t[1] = c), (t[2] = j)) : (j = t[2]);
  let M;
  t[3] !== i || t[4] !== c
    ? ((M = (e) => {
        let { pageParam: t, signal: n } = e;
        return _t(i, { includeWorkCloud: c, limit: 20, offset: t }, n);
      }),
      (t[3] = i),
      (t[4] = c),
      (t[5] = M))
    : (M = t[5]);
  let N;
  t[6] !== A || t[7] !== j || t[8] !== M
    ? ((N = {
        queryKey: j,
        initialPageParam: 0,
        queryFn: M,
        getNextPageParam: bn,
        select: vn,
        enabled: A,
        retry: ze,
        staleTime: Oe.ONE_MINUTE,
      }),
      (t[6] = A),
      (t[7] = j),
      (t[8] = M),
      (t[9] = N))
    : (N = t[9]);
  let {
      data: P,
      fetchNextPage: F,
      hasNextPage: ee,
      isLoading: I,
      isFetchNextPageError: L,
      isFetchingNextPage: ne,
      isError: re,
      error: ie,
      refetch: ae,
    } = ue(N),
    oe;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((oe = Xt({ limit: Bn })), (t[10] = oe)) : (oe = t[10]);
  let se = a === te,
    ce;
  t[11] === se
    ? (ce = t[12])
    : ((ce = { queryKey: oe, queryFn: _n, enabled: se, staleTime: Oe.FIVE_SECONDS }),
      (t[11] = se),
      (t[12] = ce));
  let { data: R, isLoading: z } = h(ce),
    { data: le, isFetching: B, isError: fe, refetch: V } = b[0],
    pe = u ? le : void 0,
    H = new Map();
  for (let e of y.flatMap((e) => Ut(d, e))) {
    if (!u && (!Ye(e) || !A || !P?.some((t) => t.gizmo_id === e.projectId))) continue;
    let t = {
      groupId: qe(e),
      hostId: e.hostId,
      label: e.label,
      path: e.path,
      projectId: e.projectId,
      projectKind: e.projectKind,
    };
    H.set(t.groupId, t);
  }
  let me = [...H.values()],
    ge;
  t[13] === R?.items
    ? (ge = t[14])
    : ((ge = new Set(R?.items.flatMap(gn) ?? [])), (t[13] = R?.items), (t[14] = ge));
  let U = [
      ...He({
        automationThreadIds: ge,
        chatGptConversations: A ? P : void 0,
        cloudTasks: x,
        cloudDotAttachments: g,
        localThreads: pe,
        localHostId: a,
        projects: me.filter((e) => (e.hostId ?? `local`) === a),
        projectlessThreadIds: new Set(f ?? []),
        threadProjectAssignments: p,
        threadWorkspaceRootHints: _,
      }),
      ...He({
        cloudTasks: void 0,
        cloudDotAttachments: g,
        localThreads: u ? b[1]?.data : void 0,
        localHostId: Ce,
        projects: me,
        projectlessThreadIds: new Set(f ?? []),
        threadProjectAssignments: p,
        threadWorkspaceRootHints: _,
      }),
    ],
    W = w && !D,
    G = A && ee && !re,
    K;
  t[15] !== u || t[16] !== V
    ? ((K = () => {
        u && V();
      }),
      (t[15] = u),
      (t[16] = V),
      (t[17] = K))
    : (K = t[17]);
  let q;
  t[18] !== b || t[19] !== v || t[20] !== u
    ? ((q = () => {
        u &&
          b[1] != null &&
          (v === `connected`
            ? b[1].refetch()
            : (v === `disconnected` || v === `error`) &&
              m.dispatchMessage(`codex-app-server-restart`, {
                hostId: Ce,
                intent: `reconnect`,
                remoteControlEnabled: !1,
              }));
      }),
      (t[18] = b),
      (t[19] = v),
      (t[20] = u),
      (t[21] = q))
    : (q = t[21]);
  let _e;
  t[22] !== F || t[23] !== L || t[24] !== ae
    ? ((_e = () => {
        L ? F() : ae();
      }),
      (t[22] = F),
      (t[23] = L),
      (t[24] = ae),
      (t[25] = _e))
    : (_e = t[25]);
  let ve;
  return (
    t[26] !== G || t[27] !== W || t[28] !== F || t[29] !== C
      ? ((ve = () => Promise.all([W ? C() : void 0, G ? F() : void 0])),
        (t[26] = G),
        (t[27] = W),
        (t[28] = F),
        (t[29] = C),
        (t[30] = ve))
      : (ve = t[30]),
    (0, Q.jsx)(
      wn,
      {
        archivedChats: U,
        backSlot: n,
        projects: me,
        hostId: a,
        localChatsAvailable: u,
        isLocalArchiveFetching: u && B,
        isLocalArchiveError: u && fe,
        isDurableArchiveFetching:
          u && b[1] != null && (b[1].isFetching || v === `connecting` || v === `restarting`),
        isDurableArchiveError: u && b[1] != null && (b[1].isError || v === `disconnected` || v === `error`),
        onRetryLocalArchive: K,
        onRetryDurableArchive: q,
        hasNextPage: W || G,
        isLoading: U.length === 0 && (E || (A && I) || (a === `local` && z)),
        isFetchingNextPage: O || (A && ne),
        isError: U.length === 0 && ((x == null && k) || (A && P == null && re)),
        chatGptArchiveError: A && re ? ie : null,
        onRetryChatGptArchive: _e,
        onLoadNextPage: ve,
      },
      `${a}:${u}:${o ?? ``}`,
    )
  );
}
function gn(e) {
  return e.automationId != null && e.threadId != null ? [e.threadId] : [];
}
function _n() {
  return Yt({ limit: Bn });
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
  let r = Ie(e, t),
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
        sourceKinds: U,
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
  let i = (0, Ln.c)(136),
    {
      archivedChats: o,
      backSlot: c,
      projects: l,
      hostId: u,
      localChatsAvailable: d,
      isLocalArchiveFetching: f,
      isLocalArchiveError: p,
      isDurableArchiveFetching: m,
      isDurableArchiveError: h,
      onRetryLocalArchive: g,
      onRetryDurableArchive: _,
      hasNextPage: v,
      isLoading: y,
      isFetchingNextPage: b,
      isError: x,
      chatGptArchiveError: S,
      onRetryChatGptArchive: C,
      onLoadNextPage: D,
    } = e,
    O = r(T),
    k = E(),
    A = de(Qt),
    j = ge(),
    M = mt(),
    N = (0, Rn.useRef)(null),
    [P, F] = (0, Rn.useState)(null),
    [I, te] = (0, Rn.useState)(``),
    L = (0, Rn.useDeferredValue)(I),
    [ne, re] = (0, Rn.useState)(`all`),
    [ie, ae] = (0, Rn.useState)(zn),
    [oe, se] = (0, Rn.useState)(`updated`),
    ce = new Set([...l.map(kn), Re, Xe]),
    R = ie.kind === `all` || ce.has(ie.groupId) ? ie : zn,
    z = d || ne !== `local` ? ne : `all`,
    le = R.kind === `all` ? `project` : `none`,
    ue;
  i[0] !== z || i[1] !== R || i[2] !== o || i[3] !== L || i[4] !== oe || i[5] !== le
    ? ((ue = Zt({ entries: o, groupKey: le, kindFilter: z, projectFilter: R, searchQuery: L, sortKey: oe })),
      (i[0] = z),
      (i[1] = R),
      (i[2] = o),
      (i[3] = L),
      (i[4] = oe),
      (i[5] = le),
      (i[6] = ue))
    : (ue = i[6]);
  let B = ue,
    fe = z !== `local` && v,
    V;
  i[7] !== o || i[8] !== u
    ? ((V = u === `local` && o.some(On)), (i[7] = o), (i[8] = u), (i[9] = V))
    : (V = i[9]);
  let pe = V,
    H;
  i[10] === u ? (H = i[11]) : ((H = [`unarchive-thread`, u]), (i[10] = u), (i[11] = H));
  let me;
  i[12] === O
    ? (me = i[13])
    : ((me = async (e) => {
        let { thread: t, hostId: n } = e;
        return (await Ie(O, n).unarchiveConversation(be(t.id), { useAppServerPins: O.get(ot) }), e);
      }),
      (i[12] = O),
      (i[13] = me));
  let he;
  i[14] !== A || i[15] !== k || i[16] !== O
    ? ((he = async (e) => {
        let { thread: n, hostId: r } = e,
          i = Cn(r, A);
        (O.get(W).info(
          (0, Q.jsx)(J, {
            id: `settings.dataControls.archivedChats.unarchiving`,
            defaultMessage: `Unarchiving chat`,
            description: `Toast shown while unarchiving a chat`,
          }),
          {
            id: `unarchive-thread-${n.id}`,
            duration: 0,
            leading: (0, Q.jsx)(t, { className: `icon-xs` }),
            hasCloseButton: !1,
          },
        ),
          await k.cancelQueries({ queryKey: i }));
        let a = k.getQueryData(i) ?? [];
        return (
          k.setQueryData(
            i,
            a.filter((e) => e.id !== n.id),
          ),
          { previousThreads: a, queryKey: i }
        );
      }),
      (i[14] = A),
      (i[15] = k),
      (i[16] = O),
      (i[17] = he))
    : (he = i[17]);
  let U;
  i[18] !== j || i[19] !== k || i[20] !== O
    ? ((U = (e, t, n) => {
        let { thread: r } = t,
          i = ct(e);
        (!i && n?.previousThreads && k.setQueryData(n.queryKey, n.previousThreads),
          O.get(W).danger(j.formatMessage(i ? X.openError : X.unarchiveError), {
            errorAnalytics: { toastId: `dataControls.onError.openError` },
            id: `unarchive-thread-${r.id}`,
          }));
      }),
      (i[18] = j),
      (i[19] = k),
      (i[20] = O),
      (i[21] = U))
    : (U = i[21]);
  let G;
  i[22] !== M || i[23] !== O
    ? ((G = (e) => {
        let { thread: t, hostId: n } = e,
          r = O.get(W).info((0, Q.jsx)(J, { ...X.unarchiveSuccessPlain }), {
            leading: (0, Q.jsx)(s, { "aria-hidden": !1, asset: Te }),
            primaryAction: {
              label: (0, Q.jsx)(J, { ...X.viewNow }),
              onClick: () => {
                (r.close(), M(t.id, n === `local` ? void 0 : n));
              },
            },
            id: `unarchive-thread-${t.id}`,
          });
      }),
      (i[22] = M),
      (i[23] = O),
      (i[24] = G))
    : (G = i[24]);
  let K;
  i[25] === k
    ? (K = i[26])
    : ((K = (e, t, n) => {
        let { hostId: r } = n;
        k.invalidateQueries({ queryKey: [`archived-threads`, r] });
      }),
      (i[25] = k),
      (i[26] = K));
  let q;
  i[27] !== H || i[28] !== me || i[29] !== he || i[30] !== U || i[31] !== G || i[32] !== K
    ? ((q = { mutationKey: H, mutationFn: me, onMutate: he, onError: U, onSuccess: G, onSettled: K }),
      (i[27] = H),
      (i[28] = me),
      (i[29] = he),
      (i[30] = U),
      (i[31] = G),
      (i[32] = K),
      (i[33] = q))
    : (q = i[33]);
  let _e = Ee(q),
    ye;
  i[34] === u ? (ye = i[35]) : ((ye = [`delete-archived-conversations`, u]), (i[34] = u), (i[35] = ye));
  let xe;
  i[36] !== u || i[37] !== O
    ? ((xe = async (e) =>
        e.kind === `all`
          ? Ie(O, u).deleteAllArchivedConversations()
          : e.kind === `project`
            ? (await Promise.all(e.threadIds.map((e) => Ie(O, u).deleteArchivedConversation(be(e))))).flat()
            : Ie(O, u).deleteArchivedConversation(be(e.thread.id))),
      (i[36] = u),
      (i[37] = O),
      (i[38] = xe))
    : (xe = i[38]);
  let Se;
  i[39] !== u || i[40] !== k || i[41] !== O
    ? ((Se = async (e) => {
        let n = e.kind === `single` ? [e.thread.id] : e.threadIds;
        (O.get(W).info(
          e.kind === `single` ? (0, Q.jsx)(J, { ...X.deleting }) : (0, Q.jsx)(J, { ...X.deletingAll }),
          { id: In(e), duration: 0, hasCloseButton: !1, leading: (0, Q.jsx)(t, { className: `icon-xs` }) },
        ),
          await k.cancelQueries({ queryKey: [`archived-threads`, u] }));
        let r = k.getQueryData([`archived-threads`, u]) ?? [];
        return (
          k.setQueryData(
            [`archived-threads`, u],
            r.filter((e) => !n.includes(e.id)),
          ),
          { deletingThreadIds: n, previousThreads: r }
        );
      }),
      (i[39] = u),
      (i[40] = k),
      (i[41] = O),
      (i[42] = Se))
    : (Se = i[42]);
  let Ce;
  i[43] !== u || i[44] !== j || i[45] !== k || i[46] !== O
    ? ((Ce = (e, t, n) => {
        (n?.previousThreads && k.setQueryData([`archived-threads`, u], n.previousThreads),
          O.get(W).danger(
            j.formatMessage(
              a(e, `thread/delete`)
                ? X.deleteUnsupported
                : t.kind === `single`
                  ? X.deleteError
                  : X.deleteAllError,
            ),
            { errorAnalytics: { toastId: `dataControls.onError.deleteUnsupported` }, id: In(t) },
          ));
      }),
      (i[43] = u),
      (i[44] = j),
      (i[45] = k),
      (i[46] = O),
      (i[47] = Ce))
    : (Ce = i[47]);
  let we;
  i[48] !== j || i[49] !== O
    ? ((we = (e, t) => {
        if (t.kind !== `single`) {
          O.get(W).success(
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
        O.get(W).success(j.formatMessage(X.deleteSuccessPlain), { id: In(t) });
      }),
      (i[48] = j),
      (i[49] = O),
      (i[50] = we))
    : (we = i[50]);
  let Y;
  i[51] !== u || i[52] !== k
    ? ((Y = () => {
        k.invalidateQueries({ queryKey: [`archived-threads`, u] });
      }),
      (i[51] = u),
      (i[52] = k),
      (i[53] = Y))
    : (Y = i[53]);
  let De;
  i[54] !== ye || i[55] !== xe || i[56] !== Se || i[57] !== Ce || i[58] !== we || i[59] !== Y
    ? ((De = { mutationKey: ye, mutationFn: xe, onMutate: Se, onError: Ce, onSuccess: we, onSettled: Y }),
      (i[54] = ye),
      (i[55] = xe),
      (i[56] = Se),
      (i[57] = Ce),
      (i[58] = we),
      (i[59] = Y),
      (i[60] = De))
    : (De = i[60]);
  let Oe = Ee(De),
    ke = _e.isPending || Oe.isPending,
    Ae = ke || f || p,
    je;
  i[61] !== o.length || i[62] !== c
    ? ((je = function (e) {
        let t = N.current,
          n = e.ownerDocument;
        if (t == null || n.activeElement !== e) return;
        let r = Array.from(t.querySelectorAll(`button[data-archived-chat-unarchive]`)),
          i = r.indexOf(e),
          a = [...r.slice(i + 1), ...r.slice(0, i).reverse()],
          s = new AbortController();
        return (
          n.addEventListener(
            `focusin`,
            (t) => {
              t.target !== e && s.abort();
            },
            { signal: s.signal },
          ),
          (r) => {
            let i = s.signal.aborted;
            (s.abort(),
              requestAnimationFrame(() => {
                i ||
                  !t.isConnected ||
                  (n.activeElement !== n.body && n.activeElement !== e) ||
                  (
                    (r ? a : [e]).find(Dn) ??
                    (o.length > 1 || !r ? t.querySelector(`#archived-tasks-search`) : null) ??
                    (c == null ? null : t.querySelector(`button:not(:disabled)`)) ??
                    t
                  ).focus({ preventScroll: !0 });
              }));
          }
        );
      }),
      (i[61] = o.length),
      (i[62] = c),
      (i[63] = je))
    : (je = i[63]);
  let Me = je,
    Ne;
  i[64] !== z ||
  i[65] !== R ||
  i[66] !== o.length ||
  i[67] !== d ||
  i[68] !== l ||
  i[69] !== I ||
  i[70] !== oe
    ? ((Ne =
        o.length === 0
          ? null
          : (0, Q.jsx)(An, {
              kindFilter: z,
              localChatsAvailable: d,
              projectFilter: R,
              projects: l,
              searchQuery: I,
              sortKey: oe,
              onKindFilterChange: re,
              onProjectFilterChange: ae,
              onSearchQueryChange: te,
              onSortKeyChange: se,
            })),
      (i[64] = z),
      (i[65] = R),
      (i[66] = o.length),
      (i[67] = d),
      (i[68] = l),
      (i[69] = I),
      (i[70] = oe),
      (i[71] = Ne))
    : (Ne = i[71]);
  let Pe = Ne,
    Fe = z !== `cloud` && p,
    Le = z !== `local` && h,
    ze;
  if (y || (B.length === 0 && ((z !== `cloud` && f) || (z !== `local` && m)))) {
    let e;
    (i[72] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(n, {
          children: (0, Q.jsx)(nn, {
            children: (0, Q.jsx)(J, {
              id: `settings.dataControls.archivedChats.loading`,
              defaultMessage: `Loading archived chats…`,
              description: `Loading state label for archived chats list`,
            }),
          }),
        })),
        (i[72] = e))
      : (e = i[72]),
      (ze = e));
  } else if (o.length === 0 && (S != null || Fe || Le)) ze = null;
  else if (x || o.length === 0) {
    let e;
    (i[73] === x
      ? (e = i[74])
      : ((e = (0, Q.jsx)(n, {
          children: (0, Q.jsx)(xt, {
            layout: `settings-row`,
            children: x
              ? (0, Q.jsx)(J, {
                  id: `settings.dataControls.archivedChats.error`,
                  defaultMessage: `Could not load archived chats`,
                  description: `Error state label for archived chats list`,
                })
              : (0, Q.jsx)(J, {
                  id: `settings.dataControls.archivedChats.empty`,
                  defaultMessage: `No archived chats`,
                  description: `Empty state label for archived chats list`,
                }),
          }),
        })),
        (i[73] = x),
        (i[74] = e)),
      (ze = e));
  } else {
    let e;
    i[75] !== fe || i[76] !== S || i[77] !== b || i[78] !== Le || i[79] !== Fe || i[80] !== B.length
      ? ((e =
          B.length === 0 && !fe && !b && S == null && !Fe && !Le
            ? (0, Q.jsx)(n, {
                children: (0, Q.jsx)(xt, {
                  layout: `settings-row`,
                  children: (0, Q.jsx)(J, {
                    id: `settings.dataControls.archivedChats.noMatches`,
                    defaultMessage: `No matching archived chats`,
                    description: `Empty state shown when archived chat search has no matches`,
                  }),
                }),
              })
            : null),
        (i[75] = fe),
        (i[76] = S),
        (i[77] = b),
        (i[78] = Le),
        (i[79] = Fe),
        (i[80] = B.length),
        (i[81] = e))
      : (e = i[81]);
    let t;
    if (
      i[82] !== R.kind ||
      i[83] !== Ae ||
      i[84] !== ke ||
      i[85] !== u ||
      i[86] !== Me ||
      i[87] !== _e ||
      i[88] !== B
    ) {
      let e;
      (i[90] !== R.kind || i[91] !== Ae || i[92] !== ke || i[93] !== u || i[94] !== Me || i[95] !== _e
        ? ((e = (e) =>
            (0, Q.jsx)(
              Nn,
              {
                group: e,
                hostId: u,
                isDeleteDisabled: ke,
                isProjectDeleteDisabled: Ae,
                showHeader: R.kind === `all`,
                unarchivingThreadId: _e.variables?.thread.id ?? null,
                isUnarchiving: _e.isPending,
                onDelete: (e) => {
                  F({ kind: `single`, thread: e });
                },
                onUnarchive: (e) => {
                  _e.mutate(e);
                },
                onChatGptUnarchiveStart: Me,
                onDeleteProject: (e, t) => {
                  F({ kind: `project`, projectLabel: e, threads: t });
                },
              },
              e.id,
            )),
          (i[90] = R.kind),
          (i[91] = Ae),
          (i[92] = ke),
          (i[93] = u),
          (i[94] = Me),
          (i[95] = _e),
          (i[96] = e))
        : (e = i[96]),
        (t = B.map(e)),
        (i[82] = R.kind),
        (i[83] = Ae),
        (i[84] = ke),
        (i[85] = u),
        (i[86] = Me),
        (i[87] = _e),
        (i[88] = B),
        (i[89] = t));
    } else t = i[89];
    let r;
    i[97] === D
      ? (r = i[98])
      : ((r = () => {
          D();
        }),
        (i[97] = D),
        (i[98] = r));
    let a;
    i[99] !== fe || i[100] !== b || i[101] !== r
      ? ((a = (0, Q.jsx)(dt, { hasNextPage: fe, isFetchingNextPage: b, onLoadNextPage: r })),
        (i[99] = fe),
        (i[100] = b),
        (i[101] = r),
        (i[102] = a))
      : (a = i[102]);
    let o;
    (i[103] !== e || i[104] !== t || i[105] !== a
      ? ((o = (0, Q.jsxs)(Q.Fragment, { children: [e, t, a] })),
        (i[103] = e),
        (i[104] = t),
        (i[105] = a),
        (i[106] = o))
      : (o = i[106]),
      (ze = o));
  }
  let Be;
  i[107] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Be = (0, Q.jsx)(Ge, { slug: `archived-chats` })), (i[107] = Be))
    : (Be = i[107]);
  let Ve;
  i[108] !== Ae || i[109] !== pe || i[110] !== x || i[111] !== y
    ? ((Ve =
        pe && !y && !x
          ? (0, Q.jsxs)(ee, {
              color: `danger`,
              size: `toolbar`,
              disabled: Ae,
              onClick: () => {
                F({ kind: `all` });
              },
              children: [
                (0, Q.jsx)(s, { className: `shrink-0`, "aria-hidden": !1, asset: w }),
                (0, Q.jsx)(J, { ...X.deleteAll }),
              ],
            })
          : null),
      (i[108] = Ae),
      (i[109] = pe),
      (i[110] = x),
      (i[111] = y),
      (i[112] = Ve))
    : (Ve = i[112]);
  let He;
  i[113] !== S ||
  i[114] !== y ||
  i[115] !== C ||
  i[116] !== _ ||
  i[117] !== g ||
  i[118] !== Le ||
  i[119] !== Fe
    ? ((He =
        (S != null || Fe || Le) && !y
          ? (0, Q.jsx)(n, {
              children: (0, Q.jsx)(ve, {
                label: (0, Q.jsx)(J, {
                  id: `settings.dataControls.archivedChats.error`,
                  defaultMessage: `Could not load archived chats`,
                  description: `Error state label for archived chats list`,
                }),
                control: (0, Q.jsx)(ee, {
                  color: `secondary`,
                  size: `toolbar`,
                  onClick: () => {
                    (Fe && g(), Le && _(), S != null && C());
                  },
                  children: (0, Q.jsx)(J, { ...Ue.retry }),
                }),
              }),
            })
          : null),
      (i[113] = S),
      (i[114] = y),
      (i[115] = C),
      (i[116] = _),
      (i[117] = g),
      (i[118] = Le),
      (i[119] = Fe),
      (i[120] = He))
    : (He = i[120]);
  let We;
  i[121] !== o || i[122] !== Oe || i[123] !== P
    ? ((We = () => {
        if (P != null) {
          if ((F(null), P.kind === `all`)) {
            Oe.mutate({ kind: `all`, threadIds: o.flatMap(En) });
            return;
          }
          if (P.kind === `project`) {
            Oe.mutate({ kind: `project`, projectLabel: P.projectLabel, threadIds: P.threads.map(Tn) });
            return;
          }
          Oe.mutate({ kind: `single`, thread: P.thread });
        }
      }),
      (i[121] = o),
      (i[122] = Oe),
      (i[123] = P),
      (i[124] = We))
    : (We = i[124]);
  let Ke;
  i[125] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ke = (e) => {
        e || F(null);
      }),
      (i[125] = Ke))
    : (Ke = i[125]);
  let qe;
  i[126] !== P || i[127] !== We
    ? ((qe = (0, Q.jsx)(an, { state: P, onConfirm: We, onOpenChange: Ke })),
      (i[126] = P),
      (i[127] = We),
      (i[128] = qe))
    : (qe = i[128]);
  let Je;
  return (
    i[129] !== ze || i[130] !== Pe || i[131] !== c || i[132] !== Ve || i[133] !== He || i[134] !== qe
      ? ((Je = (0, Q.jsxs)($e, {
          ref: N,
          tabIndex: -1,
          backSlot: c,
          stickyControls: Pe,
          title: Be,
          action: Ve,
          children: [ze, He, qe],
        })),
        (i[129] = ze),
        (i[130] = Pe),
        (i[131] = c),
        (i[132] = Ve),
        (i[133] = He),
        (i[134] = qe),
        (i[135] = Je))
      : (Je = i[135]),
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
    f = ge(),
    p;
  t[0] === f ? (p = t[1]) : ((p = f.formatMessage($.searchArchivedChats)), (t[0] = f), (t[1] = p));
  let m;
  t[2] === f ? (m = t[3]) : ((m = f.formatMessage($.searchArchivedChats)), (t[2] = f), (t[3] = m));
  let h;
  t[4] !== u || t[5] !== o || t[6] !== p || t[7] !== m
    ? ((h = (0, Q.jsx)(Pt, {
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
    { kindFilter: n, localChatsAvailable: r, sortKey: i, onKindFilterChange: a, onSortKeyChange: o } = e,
    c = ge(),
    l;
  t[0] === c ? (l = t[1]) : ((l = c.formatMessage($.filterArchivedChats)), (t[0] = c), (t[1] = l));
  let u;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Q.jsx)(s, { className: `shrink-0`, "aria-hidden": !1, asset: ce })), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === n ? (d = t[4]) : ((d = Fn(n)), (t[3] = n), (t[4] = d));
  let f;
  t[5] === d
    ? (f = t[6])
    : ((f = (0, Q.jsx)(`span`, { className: `truncate`, children: (0, Q.jsx)(J, { ...d }) })),
      (t[5] = d),
      (t[6] = f));
  let p;
  t[7] !== l || t[8] !== f
    ? ((p = (0, Q.jsxs)(Le, { className: `w-[150px] md:w-36`, "aria-label": l, children: [u, f] })),
      (t[7] = l),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(q.SectionLabel, { children: (0, Q.jsx)(J, { ...$.type }) })), (t[10] = m))
    : (m = t[10]);
  let h = n === `all` ? Y : void 0,
    g;
  t[11] === a
    ? (g = t[12])
    : ((g = () => {
        a(`all`);
      }),
      (t[11] = a),
      (t[12] = g));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(J, { ...$.allChats })), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== h || t[15] !== g
    ? ((v = (0, Q.jsx)(q.Item, { rightIconAsset: h, onSelect: g, children: _ })),
      (t[14] = h),
      (t[15] = g),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== n || t[18] !== r || t[19] !== a
    ? ((y = r
        ? (0, Q.jsx)(q.Item, {
            rightIconAsset: n === `local` ? Y : void 0,
            onSelect: () => {
              a(`local`);
            },
            children: (0, Q.jsx)(J, { ...$.local }),
          })
        : null),
      (t[17] = n),
      (t[18] = r),
      (t[19] = a),
      (t[20] = y))
    : (y = t[20]);
  let b = n === `cloud` ? Y : void 0,
    x;
  t[21] === a
    ? (x = t[22])
    : ((x = () => {
        a(`cloud`);
      }),
      (t[21] = a),
      (t[22] = x));
  let S;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(J, { ...$.cloud })), (t[23] = S))
    : (S = t[23]);
  let C;
  t[24] !== b || t[25] !== x
    ? ((C = (0, Q.jsx)(q.Item, { rightIconAsset: b, onSelect: x, children: S })),
      (t[24] = b),
      (t[25] = x),
      (t[26] = C))
    : (C = t[26]);
  let w;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Q.jsx)(q.Separator, {})), (t[27] = w))
    : (w = t[27]);
  let T;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(q.SectionLabel, { children: (0, Q.jsx)(J, { ...$.sortBy }) })), (t[28] = T))
    : (T = t[28]);
  let E = i === `updated` ? Y : void 0,
    D;
  t[29] === o
    ? (D = t[30])
    : ((D = () => {
        o(`updated`);
      }),
      (t[29] = o),
      (t[30] = D));
  let O;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(J, { ...$.updated })), (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] !== E || t[33] !== D
    ? ((k = (0, Q.jsx)(q.Item, { rightIconAsset: E, onSelect: D, children: O })),
      (t[32] = E),
      (t[33] = D),
      (t[34] = k))
    : (k = t[34]);
  let A = i === `created` ? Y : void 0,
    j;
  t[35] === o
    ? (j = t[36])
    : ((j = () => {
        o(`created`);
      }),
      (t[35] = o),
      (t[36] = j));
  let M;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(J, { ...$.created })), (t[37] = M))
    : (M = t[37]);
  let N;
  t[38] !== A || t[39] !== j
    ? ((N = (0, Q.jsx)(q.Item, { rightIconAsset: A, onSelect: j, children: M })),
      (t[38] = A),
      (t[39] = j),
      (t[40] = N))
    : (N = t[40]);
  let P = i === `alphabetical` ? Y : void 0,
    F;
  t[41] === o
    ? (F = t[42])
    : ((F = () => {
        o(`alphabetical`);
      }),
      (t[41] = o),
      (t[42] = F));
  let ee;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, Q.jsx)(J, { ...$.alphabetical })), (t[43] = ee))
    : (ee = t[43]);
  let I;
  t[44] !== P || t[45] !== F
    ? ((I = (0, Q.jsx)(q.Item, { rightIconAsset: P, onSelect: F, children: ee })),
      (t[44] = P),
      (t[45] = F),
      (t[46] = I))
    : (I = t[46]);
  let te;
  return (
    t[47] !== v || t[48] !== y || t[49] !== C || t[50] !== k || t[51] !== N || t[52] !== I || t[53] !== p
      ? ((te = (0, Q.jsxs)(ye, {
          side: `bottom`,
          align: `end`,
          contentWidth: `menuNarrow`,
          triggerButton: p,
          children: [m, v, y, C, w, T, k, N, I],
        })),
        (t[47] = v),
        (t[48] = y),
        (t[49] = C),
        (t[50] = k),
        (t[51] = N),
        (t[52] = I),
        (t[53] = p),
        (t[54] = te))
      : (te = t[54]),
    te
  );
}
function Mn(e) {
  let t = (0, Ln.c)(63),
    { projectFilter: n, projects: r, onProjectFilterChange: i } = e,
    a = ge(),
    o;
  t[0] !== n.groupId || t[1] !== n.kind || t[2] !== r
    ? ((o = n.kind === `group` ? r.find((e) => e.groupId === n.groupId) : null),
      (t[0] = n.groupId),
      (t[1] = n.kind),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let c = o,
    l,
    d,
    f,
    p,
    m,
    h,
    g,
    _,
    v;
  if (t[4] !== a || t[5] !== i || t[6] !== n.groupId || t[7] !== n.kind || t[8] !== r || t[9] !== c) {
    let e = new Map();
    for (let t of r) {
      let n = e.get(t.label) ?? [];
      (n.push(t.path ?? t.label), e.set(t.label, n));
    }
    ((l = ye), (d = `bottom`), (f = `end`), (p = `workspace`), (m = `tall`));
    let o;
    t[19] === a
      ? (o = t[20])
      : ((o = a.formatMessage($.filterArchivedChatsByProject)), (t[19] = a), (t[20] = o));
    let u;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Q.jsx)(s, { className: `shrink-0`, "aria-hidden": !1, asset: L })), (t[21] = u))
      : (u = t[21]);
    let y;
    t[22] !== n.groupId || t[23] !== n.kind || t[24] !== c
      ? ((y =
          n.kind === `all`
            ? (0, Q.jsx)(J, { ...$.allProjects })
            : n.groupId === `special:automations`
              ? (0, Q.jsx)(J, { ...$.automations })
              : n.groupId === `special:none`
                ? (0, Q.jsx)(J, { ...$.chats })
                : c == null
                  ? (0, Q.jsx)(J, { ...$.allProjects })
                  : c.label),
        (t[22] = n.groupId),
        (t[23] = n.kind),
        (t[24] = c),
        (t[25] = y))
      : (y = t[25]);
    let b;
    (t[26] === y
      ? (b = t[27])
      : ((b = (0, Q.jsx)(`span`, { className: `truncate`, children: y })), (t[26] = y), (t[27] = b)),
      t[28] !== o || t[29] !== b
        ? ((h = (0, Q.jsxs)(Le, { className: `w-[180px] md:w-44`, "aria-label": o, children: [u, b] })),
          (t[28] = o),
          (t[29] = b),
          (t[30] = h))
        : (h = t[30]));
    let x = n.kind === `all` ? Y : void 0,
      S;
    t[31] === i
      ? (S = t[32])
      : ((S = () => {
          i({ kind: `all` });
        }),
        (t[31] = i),
        (t[32] = S));
    let C;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, Q.jsx)(J, { ...$.allProjects })), (t[33] = C))
      : (C = t[33]),
      t[34] !== x || t[35] !== S
        ? ((g = (0, Q.jsx)(q.Item, { rightIconAsset: x, onSelect: S, children: C })),
          (t[34] = x),
          (t[35] = S),
          (t[36] = g))
        : (g = t[36]),
      t[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, Q.jsx)(q.Separator, {})), (t[37] = _))
        : (_ = t[37]),
      (v = r.map((t) => {
        let r = e.get(t.label) ?? [],
          a = r.length > 1 ? De(t.path ?? t.label, r) : void 0,
          o = n.kind === `group` && n.groupId === t.groupId;
        return (0, Q.jsx)(
          q.Item,
          {
            LeftIcon: H,
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
      (t[4] = a),
      (t[5] = i),
      (t[6] = n.groupId),
      (t[7] = n.kind),
      (t[8] = r),
      (t[9] = c),
      (t[10] = l),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m),
      (t[15] = h),
      (t[16] = g),
      (t[17] = _),
      (t[18] = v));
  } else
    ((l = t[10]),
      (d = t[11]),
      (f = t[12]),
      (p = t[13]),
      (m = t[14]),
      (h = t[15]),
      (g = t[16]),
      (_ = t[17]),
      (v = t[18]));
  let y;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(q.Separator, {})), (t[38] = y))
    : (y = t[38]);
  let b = n.kind === `group` && n.groupId === `special:none` ? Y : void 0,
    x;
  t[39] === i
    ? (x = t[40])
    : ((x = () => {
        i({ kind: `group`, groupId: Re });
      }),
      (t[39] = i),
      (t[40] = x));
  let S;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Q.jsx)(J, { ...$.chats })), (t[41] = S))
    : (S = t[41]);
  let C;
  t[42] !== b || t[43] !== x
    ? ((C = (0, Q.jsx)(q.Item, { leftIconAsset: B, rightIconAsset: b, onSelect: x, children: S })),
      (t[42] = b),
      (t[43] = x),
      (t[44] = C))
    : (C = t[44]);
  let w = n.kind === `group` && n.groupId === `special:automations` ? Y : void 0,
    T;
  t[45] === i
    ? (T = t[46])
    : ((T = () => {
        i({ kind: `group`, groupId: Xe });
      }),
      (t[45] = i),
      (t[46] = T));
  let E;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(J, { ...$.automations })), (t[47] = E))
    : (E = t[47]);
  let D;
  t[48] !== w || t[49] !== T
    ? ((D = (0, Q.jsx)(q.Item, {
        LeftIcon: u,
        leftIconClassName: ``,
        rightIconAsset: w,
        onSelect: T,
        children: E,
      })),
      (t[48] = w),
      (t[49] = T),
      (t[50] = D))
    : (D = t[50]);
  let O;
  return (
    t[51] !== l ||
    t[52] !== C ||
    t[53] !== D ||
    t[54] !== d ||
    t[55] !== f ||
    t[56] !== p ||
    t[57] !== m ||
    t[58] !== h ||
    t[59] !== g ||
    t[60] !== _ ||
    t[61] !== v
      ? ((O = (0, Q.jsxs)(l, {
          side: d,
          align: f,
          contentWidth: p,
          contentMaxHeight: m,
          triggerButton: h,
          children: [g, _, v, y, C, D],
        })),
        (t[51] = l),
        (t[52] = C),
        (t[53] = D),
        (t[54] = d),
        (t[55] = f),
        (t[56] = p),
        (t[57] = m),
        (t[58] = h),
        (t[59] = g),
        (t[60] = _),
        (t[61] = v),
        (t[62] = O))
      : (O = t[62]),
    O
  );
}
function Nn(e) {
  let t = (0, Ln.c)(35),
    {
      group: r,
      hostId: i,
      isDeleteDisabled: a,
      isProjectDeleteDisabled: o,
      showHeader: c,
      unarchivingThreadId: l,
      isUnarchiving: u,
      onDelete: d,
      onDeleteProject: f,
      onUnarchive: p,
      onChatGptUnarchiveStart: m,
    } = e,
    h = ge(),
    g;
  t[0] !== r.entries || t[1] !== r.id
    ? ((g = tt(r.entries, r.id)), (t[0] = r.entries), (t[1] = r.id), (t[2] = g))
    : (g = t[2]);
  let _ = g,
    v = r.projectLabel != null && i === `local` && _.length > 0,
    y;
  t[3] !== v ||
  t[4] !== r.entries.length ||
  t[5] !== r.id ||
  t[6] !== r.projectLabel ||
  t[7] !== h ||
  t[8] !== o ||
  t[9] !== f ||
  t[10] !== _ ||
  t[11] !== c
    ? ((y = c
        ? (0, Q.jsx)(Bt.Header, {
            title: (0, Q.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, Q.jsx)(s, { className: `shrink-0`, "aria-hidden": !1, asset: L }),
                (0, Q.jsx)(`span`, {
                  className: `truncate`,
                  children:
                    r.id === `special:dot`
                      ? (0, Q.jsx)(J, { ...nt.title, values: { dot: `dot` } })
                      : (r.projectLabel ??
                        (0, Q.jsx)(J, {
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
                  children: (0, Q.jsx)(J, {
                    id: `settings.dataControls.archivedChats.groupCount`,
                    defaultMessage: `{count, plural, one {# chat} other {# chats}}`,
                    description: `Archived chat count shown in a project group header`,
                    values: { count: r.entries.length },
                  }),
                }),
                v
                  ? (0, Q.jsx)(ye, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(we, {
                        label: h.formatMessage({
                          id: `settings.dataControls.archivedChats.projectActions`,
                          defaultMessage: `Project actions`,
                          description: `Accessible label for the project archived chats actions menu`,
                        }),
                      }),
                      children: (0, Q.jsx)(q.Item, {
                        leftIconAsset: w,
                        className: `!text-danger`,
                        leftIconClassName: `text-danger`,
                        disabled: o,
                        onSelect: () => {
                          f(r.projectLabel, _);
                        },
                        children: (0, Q.jsx)(J, { ...$.deleteProjectChats }),
                      }),
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[3] = v),
      (t[4] = r.entries.length),
      (t[5] = r.id),
      (t[6] = r.projectLabel),
      (t[7] = h),
      (t[8] = o),
      (t[9] = f),
      (t[10] = _),
      (t[11] = c),
      (t[12] = y))
    : (y = t[12]);
  let b;
  if (
    t[13] !== r.entries ||
    t[14] !== a ||
    t[15] !== u ||
    t[16] !== m ||
    t[17] !== d ||
    t[18] !== p ||
    t[19] !== c ||
    t[20] !== l
  ) {
    let e;
    (t[22] !== a || t[23] !== u || t[24] !== m || t[25] !== d || t[26] !== p || t[27] !== c || t[28] !== l
      ? ((e = (e) => {
          switch (e.kind) {
            case `cloud`:
              return (0, Q.jsx)(
                un,
                { archivedTask: e.task, showProjectName: !c, onUnarchiveStart: m },
                `${`archived` in e.task ? `cloud` : `chatgpt`}:${e.task.id}`,
              );
            case `local`:
              return (0, Q.jsx)(
                Pn,
                {
                  archivedThread: e.thread,
                  isDeleteDisabled: a,
                  isUnarchiving: u && l === e.thread.id,
                  showDeleteButton: e.hostId === te,
                  showProjectName: !c,
                  onDelete: () => {
                    d(e.thread);
                  },
                  onUnarchive: () => {
                    p(e);
                  },
                },
                `local:${e.hostId}:${e.thread.id}`,
              );
          }
        }),
        (t[22] = a),
        (t[23] = u),
        (t[24] = m),
        (t[25] = d),
        (t[26] = p),
        (t[27] = c),
        (t[28] = l),
        (t[29] = e))
      : (e = t[29]),
      (b = r.entries.map(e)),
      (t[13] = r.entries),
      (t[14] = a),
      (t[15] = u),
      (t[16] = m),
      (t[17] = d),
      (t[18] = p),
      (t[19] = c),
      (t[20] = l),
      (t[21] = b));
  } else b = t[21];
  let x;
  t[30] === b
    ? (x = t[31])
    : ((x = (0, Q.jsx)(Bt.Content, { children: (0, Q.jsx)(n, { children: b }) })), (t[30] = b), (t[31] = x));
  let S;
  return (
    t[32] !== y || t[33] !== x
      ? ((S = (0, Q.jsxs)(Bt, { children: [y, x] })), (t[32] = y), (t[33] = x), (t[34] = S))
      : (S = t[34]),
    S
  );
}
function Pn(e) {
  let t = (0, Ln.c)(55),
    {
      archivedThread: n,
      isDeleteDisabled: r,
      isUnarchiving: i,
      showDeleteButton: a,
      showProjectName: o,
      onDelete: c,
      onUnarchive: l,
    } = e,
    u = ge(),
    d;
  t[0] !== n.name || t[1] !== n.preview
    ? ((d = jt(n.name?.trim() || n.preview).trim()), (t[0] = n.name), (t[1] = n.preview), (t[2] = d))
    : (d = t[2]);
  let f = d,
    p,
    m,
    h,
    g;
  if (
    t[3] !== n.createdAt ||
    t[4] !== n.cwd ||
    t[5] !== n.path ||
    t[6] !== n.updatedAt ||
    t[7] !== u ||
    t[8] !== o
  ) {
    let e = new Date(n.updatedAt * 1e3),
      r = new Date(n.createdAt * 1e3),
      i = Number.isFinite(e.getTime()) ? e : Number.isFinite(r.getTime()) ? r : null,
      a;
    (t[13] !== n.cwd || t[14] !== n.path || t[15] !== o
      ? ((a = o ? (Nt(n.cwd) ?? Nt(n.path)) : null),
        (t[13] = n.cwd),
        (t[14] = n.path),
        (t[15] = o),
        (t[16] = a))
      : (a = t[16]),
      (h = a),
      (m = i != null),
      (p = m ? u.formatDate(i, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (g = m ? u.formatTime(i, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[3] = n.createdAt),
      (t[4] = n.cwd),
      (t[5] = n.path),
      (t[6] = n.updatedAt),
      (t[7] = u),
      (t[8] = o),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g));
  } else ((p = t[9]), (m = t[10]), (h = t[11]), (g = t[12]));
  let _ = g,
    v;
  t[17] === u
    ? (v = t[18])
    : ((v = u.formatMessage({
        id: `settings.dataControls.archivedChats.deleteAriaLabel`,
        defaultMessage: `Delete archived chat`,
        description: `Aria label for deleting an archived chat`,
      })),
      (t[17] = u),
      (t[18] = v));
  let y = v,
    b;
  t[19] === n.id ? (b = t[20]) : ((b = (0, Q.jsx)(sn, { threadId: n.id })), (t[19] = n.id), (t[20] = b));
  let x;
  t[21] === f
    ? (x = t[22])
    : ((x =
        f.length > 0
          ? f
          : (0, Q.jsx)(J, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[21] = f),
      (t[22] = x));
  let S;
  t[23] === x
    ? (S = t[24])
    : ((S = (0, Q.jsx)(`span`, { className: `truncate`, children: x })), (t[23] = x), (t[24] = S));
  let C;
  t[25] !== b || t[26] !== S
    ? ((C = (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-1 truncate`, children: [b, S] })),
      (t[25] = b),
      (t[26] = S),
      (t[27] = C))
    : (C = t[27]);
  let T;
  t[28] !== p || t[29] !== m || t[30] !== h || t[31] !== _
    ? ((T = m
        ? h
          ? (0, Q.jsx)(J, {
              id: `settings.dataControls.archivedChats.dateTimeWithRepo`,
              defaultMessage: `{date}, {time} • {repo}`,
              description: `Date, time, and repo name for an archived chat`,
              values: { date: p, time: _, repo: h },
            })
          : (0, Q.jsx)(J, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: p, time: _ },
            })
        : null),
      (t[28] = p),
      (t[29] = m),
      (t[30] = h),
      (t[31] = _),
      (t[32] = T))
    : (T = t[32]);
  let E;
  t[33] === T
    ? (E = t[34])
    : ((E = (0, Q.jsx)(`div`, { className: `truncate`, children: T })), (t[33] = T), (t[34] = E));
  let D;
  t[35] !== y || t[36] !== r || t[37] !== c || t[38] !== a
    ? ((D = a
        ? (0, Q.jsx)(me, {
            tooltipContent: y,
            children: (0, Q.jsx)(ee, {
              "aria-label": y,
              className: `text-chart-red enabled:hover:bg-chart-red/10`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: r,
              onClick: c,
              children: (0, Q.jsx)(s, { "aria-hidden": !1, asset: w }),
            }),
          })
        : null),
      (t[35] = y),
      (t[36] = r),
      (t[37] = c),
      (t[38] = a),
      (t[39] = D))
    : (D = t[39]);
  let O;
  t[40] !== r || t[41] !== l
    ? ((O = () => {
        r || l();
      }),
      (t[40] = r),
      (t[41] = l),
      (t[42] = O))
    : (O = t[42]);
  let k;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(J, { ...X.unarchive })), (t[43] = k))
    : (k = t[43]);
  let A;
  t[44] !== r || t[45] !== i || t[46] !== O
    ? ((A = (0, Q.jsx)(ee, {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: r,
        loading: i,
        onClick: O,
        children: k,
      })),
      (t[44] = r),
      (t[45] = i),
      (t[46] = O),
      (t[47] = A))
    : (A = t[47]);
  let j;
  t[48] !== D || t[49] !== A
    ? ((j = (0, Q.jsxs)(Q.Fragment, { children: [D, A] })), (t[48] = D), (t[49] = A), (t[50] = j))
    : (j = t[50]);
  let M;
  return (
    t[51] !== j || t[52] !== C || t[53] !== E
      ? ((M = (0, Q.jsx)(ve, { label: C, description: E, control: j })),
        (t[51] = j),
        (t[52] = C),
        (t[53] = E),
        (t[54] = M))
      : (M = t[54]),
    M
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
    ((Ln = x()),
      D(),
      p(),
      ae(),
      le(),
      C(),
      ie(),
      M(),
      pe(),
      Se(),
      _(),
      V(),
      f(),
      Ft(),
      re(),
      _e(),
      y(),
      (Rn = c()),
      F(),
      Ve(),
      yt(),
      Gt(),
      Ke(),
      ft(),
      st(),
      it(),
      Lt(),
      ne(),
      se(),
      v(),
      O(),
      Jt(),
      ut(),
      k(),
      St(),
      R(),
      P(),
      K(),
      G(),
      gt(),
      fe(),
      Me(),
      Ot(),
      Kt(),
      lt(),
      i(),
      bt(),
      cn(),
      vt(),
      pt(),
      wt(),
      ht(),
      tn(),
      xe(),
      et(),
      z(),
      We(),
      qt(),
      kt(),
      on(),
      b(),
      o(),
      Vt(),
      Be(),
      je(),
      mn(),
      Dt(),
      rn(),
      (Q = d()),
      ($ = I({
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
//# sourceMappingURL=data-controls-a8b342041278.js.map
