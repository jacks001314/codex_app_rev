import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  AMt as r,
  Amn as i,
  Apt as a,
  Aw as o,
  B6t as s,
  BDt as c,
  BS as l,
  C0t as u,
  Cpn as d,
  Cst as f,
  D3t as p,
  E7t as m,
  F3t as h,
  FKt as g,
  Gj as _,
  H4t as v,
  Hu as y,
  IXt as b,
  JG as x,
  JK as S,
  JS as C,
  JXt as w,
  Jit as T,
  K6 as E,
  KG as D,
  KWt as O,
  KYt as k,
  Kit as A,
  Kj as j,
  MMt as M,
  Mw as N,
  Not as P,
  O3t as F,
  OC as I,
  OW as L,
  Opn as ee,
  Ow as R,
  P4t as z,
  QWt as B,
  Qu as V,
  RKt as H,
  RS as te,
  Rit as U,
  S3t as ne,
  Spn as re,
  T7t as W,
  TJt as G,
  Uft as K,
  VS as q,
  Vu as ie,
  Wft as ae,
  XS as oe,
  Xdt as se,
  Xu as J,
  ZG as Y,
  ZWt as ce,
  Zu as le,
  _3 as ue,
  _Jt as de,
  _Kt as fe,
  a3t as pe,
  cS as me,
  d3t as he,
  dqt as ge,
  e4t as _e,
  e8t as ve,
  fKt as ye,
  fxt as be,
  gMt as xe,
  hMt as Se,
  hmn as Ce,
  i3t as we,
  iJt as Te,
  jMt as Ee,
  jXt as De,
  jw as Oe,
  kC as ke,
  kMt as Ae,
  kW as je,
  kXt as Me,
  kmn as Ne,
  kpt as Pe,
  l3t as Fe,
  lKt as Ie,
  lS as Le,
  lot as Re,
  mJt as ze,
  mxt as Be,
  o3t as Ve,
  pJt as He,
  pqt as Ue,
  q6 as We,
  qK as Ge,
  qqt as Ke,
  qu as qe,
  r3t as Je,
  rTt as Ye,
  s3t as Xe,
  snn as Ze,
  t0t as Qe,
  u3 as $e,
  v3 as et,
  vlt as tt,
  wJt as nt,
  wst as rt,
  xpn as it,
  y3 as at,
  zDt as ot,
  zit as st,
  zot as ct,
} from "./app-initial-f094ef01c64d.js";
import {
  $w as lt,
  Am as ut,
  Bw as dt,
  Dm as ft,
  Em as pt,
  Fm as mt,
  Gw as ht,
  Hm as gt,
  Im as _t,
  Kw as vt,
  Lm as X,
  Mm as yt,
  Nm as bt,
  Om as xt,
  Pm as St,
  Rm as Ct,
  Vm as wt,
  eT as Tt,
  iT as Et,
  jm as Dt,
  km as Ot,
  rT as kt,
  zw as At,
} from "./app-primary-4c40d73a1074.js";
import { n as jt, t as Mt } from "./settings-loading-row-de4ab81779d6.js";
import { n as Nt, t as Pt } from "./delete-archived-chats-dialog-b764183e8ea2.js";
import { n as Ft, t as It } from "./control-group-1ab27e5eeaa6.js";
function Lt(e) {
  let t = (0, zt.c)(63),
    { archivedTask: r, showProjectName: i } = e,
    a = n(pe),
    o = p(),
    s = h(O),
    c = ee(),
    l = w(),
    u;
  t[0] === r.title ? (u = t[1]) : ((u = rt(r.title ?? ``).trim()), (t[0] = r.title), (t[1] = u));
  let f = u,
    m;
  t[2] === f
    ? (m = t[3])
    : ((m =
        f.length > 0
          ? f
          : (0, Z.jsx)(d, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[2] = f),
      (t[3] = m));
  let _ = m,
    v = `archived` in r,
    y = v ? `recover-cloud-task` : `unarchive-chatgpt-conversation`,
    b;
  t[4] !== r.id || t[5] !== y
    ? ((b = [y, r.id]), (t[4] = r.id), (t[5] = y), (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== r.id || t[8] !== v || t[9] !== a
    ? ((x = async () => {
        v
          ? await g.safePost(`/wham/tasks/{task_id}/recover`, {
              parameters: { path: { task_id: r.id } },
            })
          : await ct({ scope: a, conversationId: r.id });
      }),
      (t[7] = r.id),
      (t[8] = v),
      (t[9] = a),
      (t[10] = x))
    : (x = t[10]);
  let S;
  t[11] !== r.id || t[12] !== c || t[13] !== a
    ? ((S = () => {
        a.get(De).danger(c.formatMessage(X.unarchiveError), { id: `recover-cloud-task-${r.id}` });
      }),
      (t[11] = r.id),
      (t[12] = c),
      (t[13] = a),
      (t[14] = S))
    : (S = t[14]);
  let C;
  t[15] !== s || t[16] !== r.id || t[17] !== v || t[18] !== l || t[19] !== o || t[20] !== a
    ? ((C = () => {
        v &&
          (o.setQueryData([`tasks`, `archived`, s], (e) =>
            e == null
              ? e
              : {
                  ...e,
                  pages: e.pages.map((e) => ({
                    ...e,
                    items: e.items.filter((e) => e.id !== r.id),
                  })),
                },
          ),
          gt(a, r.id, !1));
        let e = a.get(De).info((0, Z.jsx)(d, { ...X.unarchiveSuccessPlain }), {
          leading: (0, Z.jsx)(Se, { "aria-hidden": !1, asset: Pe }),
          primaryAction: {
            label: (0, Z.jsx)(d, { ...X.viewNow }),
            onClick: () => {
              (e.close(), l(v ? `/remote/${r.id}` : ge(r.id)));
            },
          },
          id: `${v ? `recover-cloud-task` : `unarchive-chatgpt-conversation`}-${r.id}`,
        });
      }),
      (t[15] = s),
      (t[16] = r.id),
      (t[17] = v),
      (t[18] = l),
      (t[19] = o),
      (t[20] = a),
      (t[21] = C))
    : (C = t[21]);
  let T;
  t[22] !== v || t[23] !== o
    ? ((T = () => {
        v && o.invalidateQueries({ queryKey: [`tasks`] });
      }),
      (t[22] = v),
      (t[23] = o),
      (t[24] = T))
    : (T = t[24]);
  let E;
  t[25] !== b || t[26] !== x || t[27] !== S || t[28] !== C || t[29] !== T
    ? ((E = { mutationKey: b, mutationFn: x, onError: S, onSuccess: C, onSettled: T }),
      (t[25] = b),
      (t[26] = x),
      (t[27] = S),
      (t[28] = C),
      (t[29] = T),
      (t[30] = E))
    : (E = t[30]);
  let D = he(E),
    k,
    A,
    j,
    M;
  if (t[31] !== r || t[32] !== c || t[33] !== v || t[34] !== i) {
    let e = Rt(r),
      n;
    (t[39] !== r.task_status_display?.environment_label || t[40] !== v || t[41] !== i
      ? ((n = i && v ? r.task_status_display?.environment_label?.trim() : null),
        (t[39] = r.task_status_display?.environment_label),
        (t[40] = v),
        (t[41] = i),
        (t[42] = n))
      : (n = t[42]),
      (A = n),
      (j = e != null),
      (k = j ? c.formatDate(e, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (M = j ? c.formatTime(e, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[31] = r),
      (t[32] = c),
      (t[33] = v),
      (t[34] = i),
      (t[35] = k),
      (t[36] = A),
      (t[37] = j),
      (t[38] = M));
  } else ((k = t[35]), (A = t[36]), (j = t[37]), (M = t[38]));
  let N = M,
    P;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(lt, { className: `icon-sm` })), (t[43] = P))
    : (P = t[43]);
  let F;
  t[44] === _
    ? (F = t[45])
    : ((F = (0, Z.jsx)(`div`, { className: `truncate`, children: _ })), (t[44] = _), (t[45] = F));
  let I;
  t[46] !== k || t[47] !== A || t[48] !== j || t[49] !== N
    ? ((I = j
        ? A
          ? (0, Z.jsx)(d, {
              id: `settings.dataControls.archivedChats.dateTimeWithEnvironment`,
              defaultMessage: `{date}, {time} • {environment}`,
              description: `Date, time, and environment name for an archived cloud task`,
              values: { date: k, time: N, environment: A },
            })
          : (0, Z.jsx)(d, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: k, time: N },
            })
        : null),
      (t[46] = k),
      (t[47] = A),
      (t[48] = j),
      (t[49] = N),
      (t[50] = I))
    : (I = t[50]);
  let L;
  t[51] === I
    ? (L = t[52])
    : ((L = (0, Z.jsx)(`div`, { className: `truncate`, children: I })), (t[51] = I), (t[52] = L));
  let R;
  t[53] === D
    ? (R = t[54])
    : ((R = () => {
        D.isPending || D.mutate();
      }),
      (t[53] = D),
      (t[54] = R));
  let z;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Z.jsx)(d, { ...X.unarchive })), (t[55] = z))
    : (z = t[55]);
  let B;
  t[56] !== R || t[57] !== D.isPending
    ? ((B = (0, Z.jsx)(Ae, {
        color: `secondary`,
        size: `toolbar`,
        disabled: D.isPending,
        loading: D.isPending,
        onClick: R,
        children: z,
      })),
      (t[56] = R),
      (t[57] = D.isPending),
      (t[58] = B))
    : (B = t[58]);
  let V;
  return (
    t[59] !== F || t[60] !== L || t[61] !== B
      ? ((V = (0, Z.jsx)(qe, { icon: P, label: F, description: L, control: B })),
        (t[59] = F),
        (t[60] = L),
        (t[61] = B),
        (t[62] = V))
      : (V = t[62]),
    V
  );
}
function Rt(e) {
  let t = `archived` in e ? (e.updated_at ?? e.created_at) : (e.update_time ?? e.create_time);
  if (t == null) return null;
  let n = new Date(typeof t == `number` ? t * 1e3 : t);
  return Number.isFinite(n.getTime()) ? n : null;
}
var zt,
  Z,
  Bt = e(() => {
    ((zt = Ne()),
      a(),
      Xe(),
      F(),
      re(),
      b(),
      B(),
      P(),
      Ue(),
      r(),
      xe(),
      Me(),
      Tt(),
      f(),
      wt(),
      Ve(),
      J(),
      H(),
      Ct(),
      (Z = Ce()));
  });
function Vt() {
  let e = (0, sn.c)(64),
    t = n(pe),
    { selectedHostId: r } = o(),
    i = h(O),
    a = h(ce),
    s = h(fe),
    c = h(Ie),
    l = h(ue),
    u = h(et),
    d = h(Te),
    f = h(at),
    p;
  e[0] === r ? (p = e[1]) : ((p = [`archived-threads`, r]), (e[0] = r), (e[1] = p));
  let m;
  e[2] !== t || e[3] !== r
    ? ((m = async () => {
        let e = [],
          n = new Set(),
          i = null;
        do {
          let a = await Je(t, r).sendRequest(
            `thread/list`,
            {
              archived: !0,
              cursor: i,
              limit: 100,
              modelProviders: null,
              sortKey: `updated_at`,
              sourceKinds: ve,
              useStateDbOnly: !0,
            },
            { priority: `background`, source: `thread_list` },
          );
          if ((e.push(...a.data), (i = a.nextCursor), i != null && n.has(i)))
            throw Error(`App Server repeated an archived thread list cursor`);
          i != null && n.add(i);
        } while (i != null);
        return e;
      }),
      (e[2] = t),
      (e[3] = r),
      (e[4] = m))
    : (m = e[4]);
  let g = c,
    _;
  e[5] !== p || e[6] !== m || e[7] !== g
    ? ((_ = { queryKey: p, queryFn: m, enabled: g, staleTime: nt.FIVE_SECONDS }),
      (e[5] = p),
      (e[6] = m),
      (e[7] = g),
      (e[8] = _))
    : (_ = e[8]);
  let { data: v, isLoading: y, isError: b } = ne(_),
    {
      data: x,
      fetchNextPage: S,
      hasNextPage: C,
      isLoading: w,
      isFetchNextPageError: T,
      isFetchingNextPage: E,
      isError: D,
    } = ft(),
    k = r === `local` && a && i != null,
    A;
  e[9] !== i || e[10] !== s
    ? ((A = [Re, 20, s, i]), (e[9] = i), (e[10] = s), (e[11] = A))
    : (A = e[11]);
  let j;
  e[12] !== t || e[13] !== s
    ? ((j = (e) => {
        let { pageParam: n } = e;
        return t.get(be).list({
          excludeConversationOrigin: s ? void 0 : `tpp`,
          hideProjectConversations: !1,
          isArchived: !0,
          limit: 20,
          offset: n,
          order: `updated`,
        });
      }),
      (e[12] = t),
      (e[13] = s),
      (e[14] = j))
    : (j = e[14]);
  let M;
  e[15] !== k || e[16] !== A || e[17] !== j
    ? ((M = {
        queryKey: A,
        initialPageParam: 0,
        queryFn: j,
        getNextPageParam: qt,
        select: Gt,
        enabled: k,
        staleTime: nt.ONE_MINUTE,
      }),
      (e[15] = k),
      (e[16] = A),
      (e[17] = j),
      (e[18] = M))
    : (M = e[18]);
  let {
      data: N,
      fetchNextPage: P,
      hasNextPage: F,
      isLoading: I,
      isFetchNextPageError: L,
      isFetchingNextPage: ee,
      isError: R,
    } = Fe(M),
    z;
  e[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = ze(`inbox-items`, { limit: un })), (e[19] = z))
    : (z = e[19]);
  let B = r === _e,
    V;
  e[20] === B
    ? (V = e[21])
    : ((V = { queryKey: z, queryFn: Wt, enabled: B, staleTime: nt.FIVE_SECONDS }),
      (e[20] = B),
      (e[21] = V));
  let { data: H, isLoading: te } = ne(V),
    U,
    re;
  if (
    e[22] !== H ||
    e[23] !== N ||
    e[24] !== x ||
    e[25] !== v ||
    e[26] !== c ||
    e[27] !== u ||
    e[28] !== l ||
    e[29] !== r ||
    e[30] !== k ||
    e[31] !== d ||
    e[32] !== f
  ) {
    let t = c ? v : void 0,
      n;
    if (e[35] !== N || e[36] !== c || e[37] !== l || e[38] !== r || e[39] !== k) {
      let t = new Map();
      for (let e of Oe(l, r)) {
        if (!c && (!We(e) || !k || !N?.some((t) => t.gizmo_id === e.projectId))) continue;
        let n = {
          groupId: Dt(e),
          hostId: e.hostId,
          label: e.label,
          path: e.path,
          projectId: e.projectId,
          projectKind: e.projectKind,
        };
        t.set(n.groupId, n);
      }
      ((n = [...t.values()]),
        (e[35] = N),
        (e[36] = c),
        (e[37] = l),
        (e[38] = r),
        (e[39] = k),
        (e[40] = n));
    } else n = e[40];
    U = n;
    let i;
    (e[41] === H?.items
      ? (i = e[42])
      : ((i = new Set(H?.items.flatMap(Ut) ?? [])), (e[41] = H?.items), (e[42] = i)),
      (re = ut({
        automationThreadIds: i,
        chatGptConversations: k ? N : void 0,
        cloudTasks: x,
        localThreads: t,
        projects: U,
        projectlessThreadIds: new Set(u ?? []),
        threadProjectAssignments: d,
        threadWorkspaceRootHints: f,
      })),
      (e[22] = H),
      (e[23] = N),
      (e[24] = x),
      (e[25] = v),
      (e[26] = c),
      (e[27] = u),
      (e[28] = l),
      (e[29] = r),
      (e[30] = k),
      (e[31] = d),
      (e[32] = f),
      (e[33] = U),
      (e[34] = re));
  } else ((U = e[33]), (re = e[34]));
  let W = re,
    G = C && !T,
    K = k && F && !L,
    q;
  e[43] !== U || e[44] !== i || e[45] !== c || e[46] !== r
    ? ((q = c ? `${r}:${U.map(Ht).join(`,`)}` : `${r}:chatgpt:${i ?? ``}`),
      (e[43] = U),
      (e[44] = i),
      (e[45] = c),
      (e[46] = r),
      (e[47] = q))
    : (q = e[47]);
  let ie = G || K,
    ae = W.length === 0 && ((c && y) || w || (k && I) || (r === `local` && te)),
    oe = E || (k && ee),
    se = W.length === 0 && ((c && b) || (x == null && D) || (k && N == null && R)),
    J;
  e[48] !== K || e[49] !== G || e[50] !== P || e[51] !== S
    ? ((J = () => Promise.all([G ? S() : void 0, K ? P() : void 0])),
      (e[48] = K),
      (e[49] = G),
      (e[50] = P),
      (e[51] = S),
      (e[52] = J))
    : (J = e[52]);
  let Y;
  return (
    e[53] !== U ||
    e[54] !== W ||
    e[55] !== c ||
    e[56] !== r ||
    e[57] !== q ||
    e[58] !== ie ||
    e[59] !== ae ||
    e[60] !== oe ||
    e[61] !== se ||
    e[62] !== J
      ? ((Y = (0, Q.jsx)(
          Jt,
          {
            archivedChats: W,
            projects: U,
            hostId: r,
            localChatsAvailable: c,
            hasNextPage: ie,
            isLoading: ae,
            isFetchingNextPage: oe,
            isError: se,
            onLoadNextPage: J,
          },
          q,
        )),
        (e[53] = U),
        (e[54] = W),
        (e[55] = c),
        (e[56] = r),
        (e[57] = q),
        (e[58] = ie),
        (e[59] = ae),
        (e[60] = oe),
        (e[61] = se),
        (e[62] = J),
        (e[63] = Y))
      : (Y = e[63]),
    Y
  );
}
function Ht(e) {
  let { groupId: t } = e;
  return t;
}
function Ut(e) {
  return e.automationId != null && e.threadId != null ? [e.threadId] : [];
}
function Wt() {
  return He(`inbox-items`, { params: { limit: un } });
}
function Gt(e) {
  let { pages: t } = e;
  return t.flatMap(Kt);
}
function Kt(e) {
  let { items: t } = e;
  return t;
}
function qt(e) {
  let { limit: t, offset: n, total: r } = e;
  return n + t < r ? n + t : null;
}
function Jt(e) {
  let t = (0, sn.c)(123),
    {
      archivedChats: r,
      projects: i,
      hostId: a,
      localChatsAvailable: o,
      hasNextPage: s,
      isLoading: c,
      isFetchingNextPage: f,
      isError: h,
      onLoadNextPage: g,
    } = e,
    _ = n(pe),
    v = p(),
    y = ee(),
    b = w(),
    x = Le(),
    [S, T] = (0, cn.useState)(null),
    [E, D] = (0, cn.useState)(``),
    O = (0, cn.useDeferredValue)(E),
    [k, A] = (0, cn.useState)(`all`),
    [j, M] = (0, cn.useState)(ln),
    [N, P] = (0, cn.useState)(`updated`),
    F = new Set([...i.map(Qt), Ot, xt]),
    I = j.kind === `all` || F.has(j.groupId) ? j : ln,
    R = o || k !== `local` ? k : `all`,
    z = I.kind === `all` ? `project` : `none`,
    B;
  t[0] !== R || t[1] !== I || t[2] !== r || t[3] !== O || t[4] !== N || t[5] !== z
    ? ((B = bt({
        entries: r,
        groupKey: z,
        kindFilter: R,
        projectFilter: I,
        searchQuery: O,
        sortKey: N,
      })),
      (t[0] = R),
      (t[1] = I),
      (t[2] = r),
      (t[3] = O),
      (t[4] = N),
      (t[5] = z),
      (t[6] = B))
    : (B = t[6]);
  let V = B,
    H = R !== `local` && s,
    te;
  t[7] !== r || t[8] !== a
    ? ((te = a === `local` && r.some(Zt)), (t[7] = r), (t[8] = a), (t[9] = te))
    : (te = t[9]);
  let U = te,
    ne;
  t[10] !== a || t[11] !== b || t[12] !== x || t[13] !== _
    ? ((ne = (e) => {
        (Ze(e.id), a === `local` && x(e.id));
      }),
      (t[10] = a),
      (t[11] = b),
      (t[12] = x),
      (t[13] = _),
      (t[14] = ne))
    : (ne = t[14]);
  let re = ne,
    W;
  t[15] === a ? (W = t[16]) : ((W = [`unarchive-thread`, a]), (t[15] = a), (t[16] = W));
  let G;
  t[17] !== a || t[18] !== _
    ? ((G = async (e) => (
        await Je(_, a).unarchiveConversation(Ze(e.id), { useAppServerPins: _.get(ot) }),
        e
      )),
      (t[17] = a),
      (t[18] = _),
      (t[19] = G))
    : (G = t[19]);
  let K;
  t[20] !== a || t[21] !== v || t[22] !== _
    ? ((K = async (e) => {
        (_.get(De).info(
          (0, Q.jsx)(d, {
            id: `settings.dataControls.archivedChats.unarchiving`,
            defaultMessage: `Unarchiving chat`,
            description: `Toast shown while unarchiving a chat`,
          }),
          {
            id: `unarchive-thread-${e.id}`,
            duration: 0,
            leading: (0, Q.jsx)(Ee, { className: `icon-xs` }),
            hasCloseButton: !1,
          },
        ),
          await v.cancelQueries({ queryKey: [`archived-threads`, a] }));
        let t = v.getQueryData([`archived-threads`, a]) ?? [];
        return (
          v.setQueryData(
            [`archived-threads`, a],
            t.filter((t) => t.id !== e.id),
          ),
          { previousThreads: t }
        );
      }),
      (t[20] = a),
      (t[21] = v),
      (t[22] = _),
      (t[23] = K))
    : (K = t[23]);
  let q;
  t[24] !== a || t[25] !== y || t[26] !== v || t[27] !== _
    ? ((q = (e, t, n) => {
        let r = e instanceof u;
        (!r && n?.previousThreads && v.setQueryData([`archived-threads`, a], n.previousThreads),
          _.get(De).danger(y.formatMessage(r ? X.openError : X.unarchiveError), {
            id: `unarchive-thread-${t.id}`,
          }));
      }),
      (t[24] = a),
      (t[25] = y),
      (t[26] = v),
      (t[27] = _),
      (t[28] = q))
    : (q = t[28]);
  let ae;
  t[29] !== re || t[30] !== _
    ? ((ae = (e) => {
        let t = _.get(De).info((0, Q.jsx)(d, { ...X.unarchiveSuccessPlain }), {
          leading: (0, Q.jsx)(Se, { "aria-hidden": !1, asset: Pe }),
          primaryAction: {
            label: (0, Q.jsx)(d, { ...X.viewNow }),
            onClick: () => {
              (t.close(), re(e));
            },
          },
          id: `unarchive-thread-${e.id}`,
        });
      }),
      (t[29] = re),
      (t[30] = _),
      (t[31] = ae))
    : (ae = t[31]);
  let oe;
  t[32] !== a || t[33] !== v
    ? ((oe = () => {
        v.invalidateQueries({ queryKey: [`archived-threads`, a] });
      }),
      (t[32] = a),
      (t[33] = v),
      (t[34] = oe))
    : (oe = t[34]);
  let se;
  t[35] !== oe || t[36] !== W || t[37] !== G || t[38] !== K || t[39] !== q || t[40] !== ae
    ? ((se = {
        mutationKey: W,
        mutationFn: G,
        onMutate: K,
        onError: q,
        onSuccess: ae,
        onSettled: oe,
      }),
      (t[35] = oe),
      (t[36] = W),
      (t[37] = G),
      (t[38] = K),
      (t[39] = q),
      (t[40] = ae),
      (t[41] = se))
    : (se = t[41]);
  let J = he(se),
    Y;
  t[42] === a
    ? (Y = t[43])
    : ((Y = [`delete-archived-conversations`, a]), (t[42] = a), (t[43] = Y));
  let ce;
  t[44] !== a || t[45] !== _
    ? ((ce = async (e) =>
        e.kind === `all`
          ? Je(_, a).deleteAllArchivedConversations()
          : e.kind === `project`
            ? (
                await Promise.all(
                  e.threadIds.map((e) => Je(_, a).deleteArchivedConversation(Ze(e))),
                )
              ).flat()
            : Je(_, a).deleteArchivedConversation(Ze(e.thread.id))),
      (t[44] = a),
      (t[45] = _),
      (t[46] = ce))
    : (ce = t[46]);
  let le;
  t[47] !== a || t[48] !== v || t[49] !== _
    ? ((le = async (e) => {
        let t = e.kind === `single` ? [e.thread.id] : e.threadIds;
        (_.get(De).info(
          e.kind === `single`
            ? (0, Q.jsx)(d, { ...X.deleting })
            : (0, Q.jsx)(d, { ...X.deletingAll }),
          {
            id: on(e),
            duration: 0,
            hasCloseButton: !1,
            leading: (0, Q.jsx)(Ee, { className: `icon-xs` }),
          },
        ),
          await v.cancelQueries({ queryKey: [`archived-threads`, a] }));
        let n = v.getQueryData([`archived-threads`, a]) ?? [];
        return (
          v.setQueryData(
            [`archived-threads`, a],
            n.filter((e) => !t.includes(e.id)),
          ),
          { deletingThreadIds: t, previousThreads: n }
        );
      }),
      (t[47] = a),
      (t[48] = v),
      (t[49] = _),
      (t[50] = le))
    : (le = t[50]);
  let ue;
  t[51] !== a || t[52] !== y || t[53] !== v || t[54] !== _
    ? ((ue = (e, t, n) => {
        (n?.previousThreads && v.setQueryData([`archived-threads`, a], n.previousThreads),
          _.get(De).danger(
            y.formatMessage(
              m(e, `thread/delete`)
                ? X.deleteUnsupported
                : t.kind === `single`
                  ? X.deleteError
                  : X.deleteAllError,
            ),
            { id: on(t) },
          ));
      }),
      (t[51] = a),
      (t[52] = y),
      (t[53] = v),
      (t[54] = _),
      (t[55] = ue))
    : (ue = t[55]);
  let de;
  t[56] !== y || t[57] !== _
    ? ((de = (e, t) => {
        if (t.kind !== `single`) {
          _.get(De).success(
            y.formatMessage(
              {
                id: `settings.dataControls.archivedChats.deleteAllSuccess`,
                defaultMessage: `Deleted {count, plural, one {# archived chat} other {# archived chats}}`,
                description: `Success toast after deleting archived chats`,
              },
              { count: e.length || t.threadIds.length },
            ),
            { id: on(t) },
          );
          return;
        }
        _.get(De).success(y.formatMessage(X.deleteSuccessPlain), { id: on(t) });
      }),
      (t[56] = y),
      (t[57] = _),
      (t[58] = de))
    : (de = t[58]);
  let fe;
  t[59] !== a || t[60] !== v
    ? ((fe = () => {
        v.invalidateQueries({ queryKey: [`archived-threads`, a] });
      }),
      (t[59] = a),
      (t[60] = v),
      (t[61] = fe))
    : (fe = t[61]);
  let me;
  t[62] !== Y || t[63] !== ce || t[64] !== le || t[65] !== ue || t[66] !== de || t[67] !== fe
    ? ((me = {
        mutationKey: Y,
        mutationFn: ce,
        onMutate: le,
        onError: ue,
        onSuccess: de,
        onSettled: fe,
      }),
      (t[62] = Y),
      (t[63] = ce),
      (t[64] = le),
      (t[65] = ue),
      (t[66] = de),
      (t[67] = fe),
      (t[68] = me))
    : (me = t[68]);
  let ge = he(me),
    _e = J.isPending || ge.isPending,
    ve = null,
    ye;
  if (c) {
    let e;
    (t[69] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(ie, {
          children: (0, Q.jsx)(Mt, {
            children: (0, Q.jsx)(d, {
              id: `settings.dataControls.archivedChats.loading`,
              defaultMessage: `Loading archived chats…`,
              description: `Loading state label for archived chats list`,
            }),
          }),
        })),
        (t[69] = e))
      : (e = t[69]),
      (ye = e));
  } else if (h || r.length === 0) {
    let e;
    (t[70] === h
      ? (e = t[71])
      : ((e = (0, Q.jsx)(ie, {
          children: (0, Q.jsx)(L, {
            layout: `settings-row`,
            children: h
              ? (0, Q.jsx)(d, {
                  id: `settings.dataControls.archivedChats.error`,
                  defaultMessage: `Could not load archived chats`,
                  description: `Error state label for archived chats list`,
                })
              : (0, Q.jsx)(d, {
                  id: `settings.dataControls.archivedChats.empty`,
                  defaultMessage: `No archived chats`,
                  description: `Empty state label for archived chats list`,
                }),
          }),
        })),
        (t[70] = h),
        (t[71] = e)),
      (ye = e));
  } else {
    let e;
    (t[72] !== R || t[73] !== I || t[74] !== o || t[75] !== i || t[76] !== E || t[77] !== N
      ? ((e = (0, Q.jsx)($t, {
          kindFilter: R,
          localChatsAvailable: o,
          projectFilter: I,
          projects: i,
          searchQuery: E,
          sortKey: N,
          onKindFilterChange: A,
          onProjectFilterChange: M,
          onSearchQueryChange: D,
          onSortKeyChange: P,
        })),
        (t[72] = R),
        (t[73] = I),
        (t[74] = o),
        (t[75] = i),
        (t[76] = E),
        (t[77] = N),
        (t[78] = e))
      : (e = t[78]),
      (ve = e));
    let n;
    t[79] !== H || t[80] !== f || t[81] !== V.length
      ? ((n =
          V.length === 0 && !H && !f
            ? (0, Q.jsx)(ie, {
                children: (0, Q.jsx)(L, {
                  layout: `settings-row`,
                  children: (0, Q.jsx)(d, {
                    id: `settings.dataControls.archivedChats.noMatches`,
                    defaultMessage: `No matching archived chats`,
                    description: `Empty state shown when archived chat search has no matches`,
                  }),
                }),
              })
            : null),
        (t[79] = H),
        (t[80] = f),
        (t[81] = V.length),
        (t[82] = n))
      : (n = t[82]);
    let r;
    if (t[83] !== I.kind || t[84] !== _e || t[85] !== a || t[86] !== J || t[87] !== V) {
      let e;
      (t[89] !== I.kind || t[90] !== _e || t[91] !== a || t[92] !== J
        ? ((e = (e) =>
            (0, Q.jsx)(
              nn,
              {
                group: e,
                hostId: a,
                isDeleteDisabled: _e,
                showHeader: I.kind === `all`,
                unarchivingThreadId: J.variables?.id ?? null,
                isUnarchiving: J.isPending,
                onDelete: (e) => {
                  T({ kind: `single`, thread: e });
                },
                onUnarchive: (e) => {
                  J.mutate(e);
                },
                onDeleteProject: (e, t) => {
                  T({ kind: `project`, projectLabel: e, threads: t });
                },
              },
              e.id,
            )),
          (t[89] = I.kind),
          (t[90] = _e),
          (t[91] = a),
          (t[92] = J),
          (t[93] = e))
        : (e = t[93]),
        (r = V.map(e)),
        (t[83] = I.kind),
        (t[84] = _e),
        (t[85] = a),
        (t[86] = J),
        (t[87] = V),
        (t[88] = r));
    } else r = t[88];
    let s;
    t[94] === g
      ? (s = t[95])
      : ((s = () => {
          g();
        }),
        (t[94] = g),
        (t[95] = s));
    let c;
    t[96] !== H || t[97] !== f || t[98] !== s
      ? ((c = (0, Q.jsx)(kt, { hasNextPage: H, isFetchingNextPage: f, onLoadNextPage: s })),
        (t[96] = H),
        (t[97] = f),
        (t[98] = s),
        (t[99] = c))
      : (c = t[99]);
    let l;
    (t[100] !== n || t[101] !== r || t[102] !== c
      ? ((l = (0, Q.jsxs)(Q.Fragment, { children: [n, r, c] })),
        (t[100] = n),
        (t[101] = r),
        (t[102] = c),
        (t[103] = l))
      : (l = t[103]),
      (ye = l));
  }
  let be;
  t[104] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, Q.jsx)(l, { slug: `data-controls` })), (t[104] = be))
    : (be = t[104]);
  let xe;
  t[105] !== _e || t[106] !== U || t[107] !== h || t[108] !== c
    ? ((xe =
        U && !c && !h
          ? (0, Q.jsxs)(Ae, {
              color: `danger`,
              size: `toolbar`,
              disabled: _e,
              onClick: () => {
                T({ kind: `all` });
              },
              children: [
                (0, Q.jsx)(At, { className: `icon-xs shrink-0` }),
                (0, Q.jsx)(d, { ...X.deleteAll }),
              ],
            })
          : null),
      (t[105] = _e),
      (t[106] = U),
      (t[107] = h),
      (t[108] = c),
      (t[109] = xe))
    : (xe = t[109]);
  let Ce;
  t[110] !== r || t[111] !== ge || t[112] !== S
    ? ((Ce = () => {
        if (S != null) {
          if ((T(null), S.kind === `all`)) {
            ge.mutate({ kind: `all`, threadIds: r.flatMap(Xt) });
            return;
          }
          if (S.kind === `project`) {
            ge.mutate({
              kind: `project`,
              projectLabel: S.projectLabel,
              threadIds: S.threads.map(Yt),
            });
            return;
          }
          ge.mutate({ kind: `single`, thread: S.thread });
        }
      }),
      (t[110] = r),
      (t[111] = ge),
      (t[112] = S),
      (t[113] = Ce))
    : (Ce = t[113]);
  let we;
  t[114] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (e) => {
        e || T(null);
      }),
      (t[114] = we))
    : (we = t[114]);
  let Te;
  t[115] !== S || t[116] !== Ce
    ? ((Te = (0, Q.jsx)(Pt, { state: S, onConfirm: Ce, onOpenChange: we })),
      (t[115] = S),
      (t[116] = Ce),
      (t[117] = Te))
    : (Te = t[117]);
  let Oe;
  return (
    t[118] !== ye || t[119] !== ve || t[120] !== xe || t[121] !== Te
      ? ((Oe = (0, Q.jsxs)(C, { stickyControls: ve, title: be, action: xe, children: [ye, Te] })),
        (t[118] = ye),
        (t[119] = ve),
        (t[120] = xe),
        (t[121] = Te),
        (t[122] = Oe))
      : (Oe = t[122]),
    Oe
  );
}
function Yt(e) {
  return e.id;
}
function Xt(e) {
  return e.kind === `local` ? [e.thread.id] : [];
}
function Zt(e) {
  return e.kind === `local`;
}
function Qt(e) {
  return e.groupId;
}
function $t(e) {
  let t = (0, sn.c)(25),
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
    f = ee(),
    p;
  t[0] === f ? (p = t[1]) : ((p = f.formatMessage($.searchArchivedChats)), (t[0] = f), (t[1] = p));
  let m;
  t[2] === f ? (m = t[3]) : ((m = f.formatMessage($.searchArchivedChats)), (t[2] = f), (t[3] = m));
  let h;
  t[4] !== u || t[5] !== o || t[6] !== p || t[7] !== m
    ? ((h = (0, Q.jsx)(I, {
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
    ? ((g = (0, Q.jsx)(en, {
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
    ? ((_ = (0, Q.jsx)(tn, { projectFilter: i, projects: a, onProjectFilterChange: l })),
      (t[15] = l),
      (t[16] = i),
      (t[17] = a),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] !== g || t[20] !== _
    ? ((v = (0, Q.jsxs)(It, { className: `shrink-0`, children: [g, _] })),
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
function en(e) {
  let t = (0, sn.c)(55),
    {
      kindFilter: n,
      localChatsAvailable: r,
      sortKey: i,
      onKindFilterChange: a,
      onSortKeyChange: o,
    } = e,
    s = ee(),
    c;
  t[0] === s ? (c = t[1]) : ((c = s.formatMessage($.filterArchivedChats)), (t[0] = s), (t[1] = c));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(Se, { className: `shrink-0`, "aria-hidden": !1, asset: K })), (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n ? (u = t[4]) : ((u = an(n)), (t[3] = n), (t[4] = u));
  let f;
  t[5] === u
    ? (f = t[6])
    : ((f = (0, Q.jsx)(`span`, { className: `truncate`, children: (0, Q.jsx)(d, { ...u }) })),
      (t[5] = u),
      (t[6] = f));
  let p;
  t[7] !== c || t[8] !== f
    ? ((p = (0, Q.jsxs)(te, { className: `w-[150px] md:w-36`, "aria-label": c, children: [l, f] })),
      (t[7] = c),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(x.SectionLabel, { children: (0, Q.jsx)(d, { ...$.type }) })), (t[10] = m))
    : (m = t[10]);
  let h = n === `all` ? Ge : void 0,
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
    ? ((_ = (0, Q.jsx)(d, { ...$.allChats })), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== h || t[15] !== g
    ? ((v = (0, Q.jsx)(x.Item, { RightIcon: h, onSelect: g, children: _ })),
      (t[14] = h),
      (t[15] = g),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== n || t[18] !== r || t[19] !== a
    ? ((y = r
        ? (0, Q.jsx)(x.Item, {
            RightIcon: n === `local` ? Ge : void 0,
            onSelect: () => {
              a(`local`);
            },
            children: (0, Q.jsx)(d, { ...$.local }),
          })
        : null),
      (t[17] = n),
      (t[18] = r),
      (t[19] = a),
      (t[20] = y))
    : (y = t[20]);
  let b = n === `cloud` ? Ge : void 0,
    S;
  t[21] === a
    ? (S = t[22])
    : ((S = () => {
        a(`cloud`);
      }),
      (t[21] = a),
      (t[22] = S));
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(d, { ...$.cloud })), (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== b || t[25] !== S
    ? ((w = (0, Q.jsx)(x.Item, { RightIcon: b, onSelect: S, children: C })),
      (t[24] = b),
      (t[25] = S),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, Q.jsx)(x.Separator, {})), (t[27] = T))
    : (T = t[27]);
  let E;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(x.SectionLabel, { children: (0, Q.jsx)(d, { ...$.sortBy }) })), (t[28] = E))
    : (E = t[28]);
  let O = i === `updated` ? Ge : void 0,
    k;
  t[29] === o
    ? (k = t[30])
    : ((k = () => {
        o(`updated`);
      }),
      (t[29] = o),
      (t[30] = k));
  let A;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(d, { ...$.updated })), (t[31] = A))
    : (A = t[31]);
  let j;
  t[32] !== O || t[33] !== k
    ? ((j = (0, Q.jsx)(x.Item, { RightIcon: O, onSelect: k, children: A })),
      (t[32] = O),
      (t[33] = k),
      (t[34] = j))
    : (j = t[34]);
  let M = i === `created` ? Ge : void 0,
    N;
  t[35] === o
    ? (N = t[36])
    : ((N = () => {
        o(`created`);
      }),
      (t[35] = o),
      (t[36] = N));
  let P;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(d, { ...$.created })), (t[37] = P))
    : (P = t[37]);
  let F;
  t[38] !== M || t[39] !== N
    ? ((F = (0, Q.jsx)(x.Item, { RightIcon: M, onSelect: N, children: P })),
      (t[38] = M),
      (t[39] = N),
      (t[40] = F))
    : (F = t[40]);
  let I = i === `alphabetical` ? Ge : void 0,
    L;
  t[41] === o
    ? (L = t[42])
    : ((L = () => {
        o(`alphabetical`);
      }),
      (t[41] = o),
      (t[42] = L));
  let R;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(d, { ...$.alphabetical })), (t[43] = R))
    : (R = t[43]);
  let z;
  t[44] !== I || t[45] !== L
    ? ((z = (0, Q.jsx)(x.Item, { RightIcon: I, onSelect: L, children: R })),
      (t[44] = I),
      (t[45] = L),
      (t[46] = z))
    : (z = t[46]);
  let B;
  return (
    t[47] !== v ||
    t[48] !== y ||
    t[49] !== w ||
    t[50] !== j ||
    t[51] !== F ||
    t[52] !== z ||
    t[53] !== p
      ? ((B = (0, Q.jsxs)(D, {
          side: `bottom`,
          align: `end`,
          contentWidth: `menuNarrow`,
          triggerButton: p,
          children: [m, v, y, w, T, E, j, F, z],
        })),
        (t[47] = v),
        (t[48] = y),
        (t[49] = w),
        (t[50] = j),
        (t[51] = F),
        (t[52] = z),
        (t[53] = p),
        (t[54] = B))
      : (B = t[54]),
    B
  );
}
function tn(e) {
  let t = (0, sn.c)(63),
    { projectFilter: n, projects: r, onProjectFilterChange: i } = e,
    a = ee(),
    o;
  t[0] !== n.groupId || t[1] !== n.kind || t[2] !== r
    ? ((o = n.kind === `group` ? r.find((e) => e.groupId === n.groupId) : null),
      (t[0] = n.groupId),
      (t[1] = n.kind),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = o,
    c,
    l,
    u,
    f,
    p,
    m,
    h,
    g,
    v;
  if (
    t[4] !== a ||
    t[5] !== i ||
    t[6] !== n.groupId ||
    t[7] !== n.kind ||
    t[8] !== r ||
    t[9] !== s
  ) {
    let e = new Map();
    for (let t of r) {
      let n = e.get(t.label) ?? [];
      (n.push(t.path ?? t.label), e.set(t.label, n));
    }
    ((c = D), (l = `bottom`), (u = `end`), (f = `workspace`), (p = `tall`));
    let o;
    t[19] === a
      ? (o = t[20])
      : ((o = a.formatMessage($.filterArchivedChatsByProject)), (t[19] = a), (t[20] = o));
    let _;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((_ = (0, Q.jsx)(U, { className: `icon-xs shrink-0` })), (t[21] = _))
      : (_ = t[21]);
    let y;
    t[22] !== n.groupId || t[23] !== n.kind || t[24] !== s
      ? ((y =
          n.kind === `all`
            ? (0, Q.jsx)(d, { ...$.allProjects })
            : n.groupId === `special:automations`
              ? (0, Q.jsx)(d, { ...$.automations })
              : n.groupId === `special:none`
                ? (0, Q.jsx)(d, { ...$.chats })
                : s == null
                  ? (0, Q.jsx)(d, { ...$.allProjects })
                  : s.label),
        (t[22] = n.groupId),
        (t[23] = n.kind),
        (t[24] = s),
        (t[25] = y))
      : (y = t[25]);
    let b;
    (t[26] === y
      ? (b = t[27])
      : ((b = (0, Q.jsx)(`span`, { className: `truncate`, children: y })),
        (t[26] = y),
        (t[27] = b)),
      t[28] !== o || t[29] !== b
        ? ((m = (0, Q.jsxs)(te, {
            className: `w-[180px] md:w-44`,
            "aria-label": o,
            children: [_, b],
          })),
          (t[28] = o),
          (t[29] = b),
          (t[30] = m))
        : (m = t[30]));
    let S = n.kind === `all` ? Ge : void 0,
      C;
    t[31] === i
      ? (C = t[32])
      : ((C = () => {
          i({ kind: `all` });
        }),
        (t[31] = i),
        (t[32] = C));
    let w;
    (t[33] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((w = (0, Q.jsx)(d, { ...$.allProjects })), (t[33] = w))
      : (w = t[33]),
      t[34] !== S || t[35] !== C
        ? ((h = (0, Q.jsx)(x.Item, { RightIcon: S, onSelect: C, children: w })),
          (t[34] = S),
          (t[35] = C),
          (t[36] = h))
        : (h = t[36]),
      t[37] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((g = (0, Q.jsx)(x.Separator, {})), (t[37] = g))
        : (g = t[37]),
      (v = r.map((t) => {
        let r = e.get(t.label) ?? [],
          a = r.length > 1 ? z(t.path ?? t.label, r) : void 0,
          o = n.kind === `group` && n.groupId === t.groupId;
        return (0, Q.jsx)(
          x.Item,
          {
            LeftIcon: U,
            RightIcon: o ? Ge : void 0,
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
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = u),
      (t[13] = f),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h),
      (t[17] = g),
      (t[18] = v));
  } else
    ((c = t[10]),
      (l = t[11]),
      (u = t[12]),
      (f = t[13]),
      (p = t[14]),
      (m = t[15]),
      (h = t[16]),
      (g = t[17]),
      (v = t[18]));
  let y;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(x.Separator, {})), (t[38] = y))
    : (y = t[38]);
  let b = n.kind === `group` && n.groupId === `special:none` ? Ge : void 0,
    S;
  t[39] === i
    ? (S = t[40])
    : ((S = () => {
        i({ kind: `group`, groupId: Ot });
      }),
      (t[39] = i),
      (t[40] = S));
  let C;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(d, { ...$.chats })), (t[41] = C))
    : (C = t[41]);
  let w;
  t[42] !== b || t[43] !== S
    ? ((w = (0, Q.jsx)(x.Item, { LeftIcon: _, RightIcon: b, onSelect: S, children: C })),
      (t[42] = b),
      (t[43] = S),
      (t[44] = w))
    : (w = t[44]);
  let T = n.kind === `group` && n.groupId === `special:automations` ? Ge : void 0,
    E;
  t[45] === i
    ? (E = t[46])
    : ((E = () => {
        i({ kind: `group`, groupId: xt });
      }),
      (t[45] = i),
      (t[46] = E));
  let O;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Q.jsx)(d, { ...$.automations })), (t[47] = O))
    : (O = t[47]);
  let k;
  t[48] !== T || t[49] !== E
    ? ((k = (0, Q.jsx)(x.Item, {
        LeftIcon: tt,
        leftIconClassName: ``,
        RightIcon: T,
        onSelect: E,
        children: O,
      })),
      (t[48] = T),
      (t[49] = E),
      (t[50] = k))
    : (k = t[50]);
  let A;
  return (
    t[51] !== c ||
    t[52] !== w ||
    t[53] !== k ||
    t[54] !== l ||
    t[55] !== u ||
    t[56] !== f ||
    t[57] !== p ||
    t[58] !== m ||
    t[59] !== h ||
    t[60] !== g ||
    t[61] !== v
      ? ((A = (0, Q.jsxs)(c, {
          side: l,
          align: u,
          contentWidth: f,
          contentMaxHeight: p,
          triggerButton: m,
          children: [h, g, v, y, w, k],
        })),
        (t[51] = c),
        (t[52] = w),
        (t[53] = k),
        (t[54] = l),
        (t[55] = u),
        (t[56] = f),
        (t[57] = p),
        (t[58] = m),
        (t[59] = h),
        (t[60] = g),
        (t[61] = v),
        (t[62] = A))
      : (A = t[62]),
    A
  );
}
function nn(e) {
  let t = (0, sn.c)(34),
    {
      group: n,
      hostId: r,
      isDeleteDisabled: i,
      showHeader: a,
      unarchivingThreadId: o,
      isUnarchiving: s,
      onDelete: c,
      onDeleteProject: l,
      onUnarchive: u,
    } = e,
    f = ee(),
    p;
  t[0] !== n.entries || t[1] !== n.id
    ? ((p = yt(n.entries, n.id)), (t[0] = n.entries), (t[1] = n.id), (t[2] = p))
    : (p = t[2]);
  let m = p,
    h = n.projectLabel != null && r === `local` && m.length > 0,
    g;
  t[3] !== h ||
  t[4] !== n.entries.length ||
  t[5] !== n.projectLabel ||
  t[6] !== f ||
  t[7] !== i ||
  t[8] !== l ||
  t[9] !== m ||
  t[10] !== a
    ? ((g = a
        ? (0, Q.jsx)(le.Header, {
            title: (0, Q.jsxs)(`span`, {
              className: `flex min-w-0 items-center gap-2`,
              children: [
                (0, Q.jsx)(U, { className: `icon-xs shrink-0` }),
                (0, Q.jsx)(`span`, {
                  className: `truncate`,
                  children:
                    n.projectLabel ??
                    (0, Q.jsx)(d, {
                      id: `settings.dataControls.archivedChats.noProject`,
                      defaultMessage: `No project`,
                      description: `Fallback project header for archived chats without a project`,
                    }),
                }),
              ],
            }),
            actions: (0, Q.jsxs)(Q.Fragment, {
              children: [
                (0, Q.jsx)(`span`, {
                  className: `text-sm text-secondary`,
                  children: (0, Q.jsx)(d, {
                    id: `settings.dataControls.archivedChats.groupCount`,
                    defaultMessage: `{count, plural, one {# chat} other {# chats}}`,
                    description: `Archived chat count shown in a project group header`,
                    values: { count: n.entries.length },
                  }),
                }),
                h
                  ? (0, Q.jsx)(D, {
                      align: `end`,
                      contentWidth: `menu`,
                      triggerButton: (0, Q.jsx)(ht, {
                        className: `text-codex-description hover:bg-primary-ghost-hover hover:text-default`,
                        label: f.formatMessage({
                          id: `settings.dataControls.archivedChats.projectActions`,
                          defaultMessage: `Project actions`,
                          description: `Accessible label for the project archived chats actions menu`,
                        }),
                        size: `toolbar`,
                      }),
                      children: (0, Q.jsx)(x.Item, {
                        LeftIcon: At,
                        className: `!text-danger`,
                        leftIconClassName: `icon-xs text-danger`,
                        disabled: i,
                        onSelect: () => {
                          l(n.projectLabel, m);
                        },
                        children: (0, Q.jsx)(d, { ...$.deleteProjectChats }),
                      }),
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[3] = h),
      (t[4] = n.entries.length),
      (t[5] = n.projectLabel),
      (t[6] = f),
      (t[7] = i),
      (t[8] = l),
      (t[9] = m),
      (t[10] = a),
      (t[11] = g))
    : (g = t[11]);
  let _;
  if (
    t[12] !== n.entries ||
    t[13] !== r ||
    t[14] !== i ||
    t[15] !== s ||
    t[16] !== c ||
    t[17] !== u ||
    t[18] !== a ||
    t[19] !== o
  ) {
    let e;
    (t[21] !== r ||
    t[22] !== i ||
    t[23] !== s ||
    t[24] !== c ||
    t[25] !== u ||
    t[26] !== a ||
    t[27] !== o
      ? ((e = (e) => {
          switch (e.kind) {
            case `cloud`:
              return (0, Q.jsx)(
                Lt,
                { archivedTask: e.task, showProjectName: !a },
                `${`archived` in e.task ? `cloud` : `chatgpt`}:${e.task.id}`,
              );
            case `local`:
              return (0, Q.jsx)(
                rn,
                {
                  archivedThread: e.thread,
                  isDeleteDisabled: i,
                  isUnarchiving: s && o === e.thread.id,
                  showDeleteButton: r === _e,
                  showProjectName: !a,
                  onDelete: () => {
                    c(e.thread);
                  },
                  onUnarchive: () => {
                    u(e.thread);
                  },
                },
                `local:${e.thread.id}`,
              );
          }
        }),
        (t[21] = r),
        (t[22] = i),
        (t[23] = s),
        (t[24] = c),
        (t[25] = u),
        (t[26] = a),
        (t[27] = o),
        (t[28] = e))
      : (e = t[28]),
      (_ = n.entries.map(e)),
      (t[12] = n.entries),
      (t[13] = r),
      (t[14] = i),
      (t[15] = s),
      (t[16] = c),
      (t[17] = u),
      (t[18] = a),
      (t[19] = o),
      (t[20] = _));
  } else _ = t[20];
  let v;
  t[29] === _
    ? (v = t[30])
    : ((v = (0, Q.jsx)(le.Content, { children: (0, Q.jsx)(ie, { children: _ }) })),
      (t[29] = _),
      (t[30] = v));
  let y;
  return (
    t[31] !== g || t[32] !== v
      ? ((y = (0, Q.jsxs)(le, { children: [g, v] })), (t[31] = g), (t[32] = v), (t[33] = y))
      : (y = t[33]),
    y
  );
}
function rn(e) {
  let t = (0, sn.c)(50),
    {
      archivedThread: n,
      isDeleteDisabled: r,
      isUnarchiving: i,
      showDeleteButton: a,
      showProjectName: o,
      onDelete: s,
      onUnarchive: c,
    } = e,
    l = ee(),
    u;
  t[0] !== n.name || t[1] !== n.preview
    ? ((u = rt(n.name?.trim() || n.preview).trim()),
      (t[0] = n.name),
      (t[1] = n.preview),
      (t[2] = u))
    : (u = t[2]);
  let f = u,
    p,
    m,
    h,
    g;
  if (
    t[3] !== n.createdAt ||
    t[4] !== n.cwd ||
    t[5] !== n.path ||
    t[6] !== n.updatedAt ||
    t[7] !== l ||
    t[8] !== o
  ) {
    let e = new Date(n.updatedAt * 1e3),
      r = new Date(n.createdAt * 1e3),
      i = Number.isFinite(e.getTime()) ? e : Number.isFinite(r.getTime()) ? r : null,
      a;
    (t[13] !== n.cwd || t[14] !== n.path || t[15] !== o
      ? ((a = o ? (mt(n.cwd) ?? mt(n.path)) : null),
        (t[13] = n.cwd),
        (t[14] = n.path),
        (t[15] = o),
        (t[16] = a))
      : (a = t[16]),
      (h = a),
      (m = i != null),
      (p = m ? l.formatDate(i, { year: `numeric`, month: `short`, day: `numeric` }) : ``),
      (g = m ? l.formatTime(i, { hour: `numeric`, minute: `2-digit` }) : ``),
      (t[3] = n.createdAt),
      (t[4] = n.cwd),
      (t[5] = n.path),
      (t[6] = n.updatedAt),
      (t[7] = l),
      (t[8] = o),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g));
  } else ((p = t[9]), (m = t[10]), (h = t[11]), (g = t[12]));
  let _ = g,
    v;
  t[17] === l
    ? (v = t[18])
    : ((v = l.formatMessage({
        id: `settings.dataControls.archivedChats.deleteAriaLabel`,
        defaultMessage: `Delete archived chat`,
        description: `Aria label for deleting an archived chat`,
      })),
      (t[17] = l),
      (t[18] = v));
  let y = v,
    b;
  t[19] === f
    ? (b = t[20])
    : ((b =
        f.length > 0
          ? f
          : (0, Q.jsx)(d, {
              id: `settings.dataControls.archivedChats.untitled`,
              defaultMessage: `Untitled chat`,
              description: `Fallback title for an archived chat`,
            })),
      (t[19] = f),
      (t[20] = b));
  let x;
  t[21] === b
    ? (x = t[22])
    : ((x = (0, Q.jsx)(`div`, { className: `truncate`, children: b })), (t[21] = b), (t[22] = x));
  let S;
  t[23] !== p || t[24] !== m || t[25] !== h || t[26] !== _
    ? ((S = m
        ? h
          ? (0, Q.jsx)(d, {
              id: `settings.dataControls.archivedChats.dateTimeWithRepo`,
              defaultMessage: `{date}, {time} • {repo}`,
              description: `Date, time, and repo name for an archived chat`,
              values: { date: p, time: _, repo: h },
            })
          : (0, Q.jsx)(d, {
              id: `settings.dataControls.archivedChats.dateTime`,
              defaultMessage: `{date}, {time}`,
              description: `Date and time for an archived chat`,
              values: { date: p, time: _ },
            })
        : null),
      (t[23] = p),
      (t[24] = m),
      (t[25] = h),
      (t[26] = _),
      (t[27] = S))
    : (S = t[27]);
  let C;
  t[28] === S
    ? (C = t[29])
    : ((C = (0, Q.jsx)(`div`, { className: `truncate`, children: S })), (t[28] = S), (t[29] = C));
  let w;
  t[30] !== y || t[31] !== r || t[32] !== s || t[33] !== a
    ? ((w = a
        ? (0, Q.jsx)(A, {
            tooltipContent: y,
            children: (0, Q.jsx)(Ae, {
              "aria-label": y,
              className: `text-chart-red enabled:hover:bg-chart-red/10`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: r,
              onClick: s,
              children: (0, Q.jsx)(At, { className: `icon-xs` }),
            }),
          })
        : null),
      (t[30] = y),
      (t[31] = r),
      (t[32] = s),
      (t[33] = a),
      (t[34] = w))
    : (w = t[34]);
  let T;
  t[35] !== r || t[36] !== c
    ? ((T = () => {
        r || c();
      }),
      (t[35] = r),
      (t[36] = c),
      (t[37] = T))
    : (T = t[37]);
  let E;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Q.jsx)(d, { ...X.unarchive })), (t[38] = E))
    : (E = t[38]);
  let D;
  t[39] !== r || t[40] !== i || t[41] !== T
    ? ((D = (0, Q.jsx)(Ae, {
        className: `shrink-0`,
        color: `secondary`,
        size: `toolbar`,
        disabled: r,
        loading: i,
        onClick: T,
        children: E,
      })),
      (t[39] = r),
      (t[40] = i),
      (t[41] = T),
      (t[42] = D))
    : (D = t[42]);
  let O;
  t[43] !== D || t[44] !== w
    ? ((O = (0, Q.jsxs)(Q.Fragment, { children: [w, D] })), (t[43] = D), (t[44] = w), (t[45] = O))
    : (O = t[45]);
  let k;
  return (
    t[46] !== O || t[47] !== x || t[48] !== C
      ? ((k = (0, Q.jsx)(qe, { label: x, description: C, control: O })),
        (t[46] = O),
        (t[47] = x),
        (t[48] = C),
        (t[49] = k))
      : (k = t[49]),
    k
  );
}
function an(e) {
  switch (e) {
    case `all`:
      return $.allChats;
    case `cloud`:
      return $.cloud;
    case `local`:
      return $.local;
  }
}
function on(e) {
  return e.kind === `all`
    ? `delete-archived-chats`
    : e.kind === `project`
      ? `delete-archived-project-${e.projectLabel ?? `no-project`}`
      : `delete-archived-thread-${e.thread.id}`;
}
var sn, cn, Q, $, ln, un;
e(() => {
  ((sn = Ne()),
    a(),
    ae(),
    Xe(),
    Qe(),
    F(),
    s(),
    W(),
    (cn = t(i(), 1)),
    re(),
    b(),
    we(),
    Ye(),
    B(),
    ye(),
    Be(),
    P(),
    r(),
    Y(),
    xe(),
    se(),
    Et(),
    je(),
    vt(),
    ke(),
    M(),
    Me(),
    T(),
    j(),
    S(),
    st(),
    dt(),
    f(),
    c(),
    Ve(),
    Ke(),
    Ft(),
    oe(),
    V(),
    R(),
    N(),
    jt(),
    J(),
    q(),
    y(),
    k(),
    $e(),
    E(),
    _t(),
    v(),
    G(),
    me(),
    de(),
    Ct(),
    St(),
    Bt(),
    pt(),
    Nt(),
    (Q = Ce()),
    ($ = it({
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
    (ln = { kind: `all` }),
    (un = 1e5));
})();
export { Vt as DataControlsSettings };
//# sourceMappingURL=data-controls-8fe0b8b2caf1.js.map
