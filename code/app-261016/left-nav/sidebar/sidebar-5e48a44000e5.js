import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as n,
  $O as r,
  $St as i,
  $W as a,
  $st as o,
  DB as s,
  FBt as c,
  HO as l,
  IO as u,
  JO as d,
  JOt as f,
  KO as p,
  LNt as m,
  LO as h,
  NO as g,
  NSt as _,
  Nbt as v,
  OB as y,
  PBt as b,
  PO as x,
  Qst as ee,
  RO as S,
  SB as te,
  TY as C,
  USt as w,
  VSt as T,
  Vrt as E,
  WO as D,
  XI as ne,
  XOt as re,
  Y3 as ie,
  YOt as ae,
  Z3 as O,
  ZI as k,
  ZSt as A,
  Zst as j,
  _G as oe,
  dY as M,
  e6 as N,
  ek as se,
  fW as ce,
  iCt as P,
  jxt as le,
  kV as ue,
  nB as de,
  nCt as fe,
  oH as pe,
  okt as F,
  pW as me,
  qO as I,
  qrt as L,
  rB as R,
  sH as he,
  sJ as z,
  sY as B,
  sct as ge,
  tkt as V,
  vG as _e,
  vT as H,
  wB as U,
  yT as W,
  zO as G,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $kn as K,
  Axn as ve,
  Bxn as q,
  Ctt as ye,
  Dmr as J,
  Dtt as be,
  Eat as Y,
  Ett as X,
  F7n as Z,
  Fxn as xe,
  G0 as Se,
  Ixn as Ce,
  K0 as we,
  KFn as Te,
  L7n as Ee,
  Lxn as De,
  Mir as Oe,
  Mxn as ke,
  Nir as Ae,
  Nxn as je,
  Olr as Me,
  Ott as Ne,
  Pxn as Pe,
  Rxn as Fe,
  Stt as Ie,
  Tfr as Le,
  XFn as Re,
  _2 as ze,
  b2 as Be,
  cH as Ve,
  eAn as He,
  ftt as Ue,
  htt as We,
  hut as Ge,
  jxn as Ke,
  kat as qe,
  kfr as Je,
  ktt as Ye,
  mlr as Xe,
  mtt as Ze,
  mut as Qe,
  nAn as $e,
  okn as et,
  ptt as tt,
  rAn as nt,
  sH as rt,
  skn as it,
  tAn as at,
  v2 as ot,
  vTn as st,
  wLr as ct,
  wtt as lt,
  x2 as ut,
  xTn as dt,
  xtt as ft,
  y2 as pt,
  zRr as mt,
  zxn as ht,
} from "./app-initial-ad16eaadf81f.js";
function gt(e) {
  let t = (0, yt.c)(17),
    { note: n, children: o } = e,
    s = i(ee),
    c = F(),
    [l, u] = (0, bt.useState)(!1),
    [d, p] = (0, bt.useState)(null),
    m;
  t[0] !== c ||
  t[1] !== n.id ||
  t[2] !== n.phase ||
  t[3] !== n.summaryPageId ||
  t[4] !== n.summaryPageUrl ||
  t[5] !== l ||
  t[6] !== s
    ? ((m = () => {
        if (n.phase === `preparing` || n.id.startsWith(`preparing:`)) return [];
        let e = Ye(s),
          t = s.get(nt)?.pluginId,
          r = () => e === Ye(s) && t === s.get(nt)?.pluginId,
          i =
            n.summaryPageId && le.test(n.summaryPageId)
              ? `https://chatgpt.com/space/${n.summaryPageId}`
              : n.summaryPageUrl?.match(
                  /^https:\/\/chatgpt\.com\/space\/[A-Za-z0-9][A-Za-z0-9_-]{0,199}$/u,
                )?.[0],
          o = [],
          d = s.get(Ne);
        return (
          n.phase === `failed` &&
            d != null &&
            o.push({
              id: `retry`,
              icon: ue,
              enabled: !l,
              message: f({
                id: `meetings.sidebar.retryProcessing`,
                defaultMessage: `Retry`,
                description: `Retry processing a failed meeting note using the existing recording`,
              }),
              onSelect: () => {
                r() &&
                  s.get(Ne) === d &&
                  !l &&
                  (u(!0),
                  d
                    .retry(n.id)
                    .catch(_t)
                    .then((e) => {
                      !e &&
                        r() &&
                        s.get(Ne) === d &&
                        s
                          .get(L)
                          .danger(
                            c.formatMessage({
                              id: `meetings.sidebar.retryFailed`,
                              defaultMessage: `Couldn’t retry processing`,
                              description: `Retrying a failed meeting note did not succeed`,
                            }),
                            { errorAnalytics: { toastId: `meetings.sidebar.retryFailed` } },
                          );
                    })
                    .finally(() => u(!1)));
              },
            }),
          i &&
            o.push({
              id: `copy-url`,
              icon: a,
              message: f({
                id: `meetings.sidebar.copyUrl`,
                defaultMessage: `Copy URL`,
                description: `Copy the meeting note's linked Page URL`,
              }),
              onSelect: () => {
                r() &&
                  g(i).then((e) => {
                    e && r() && Ve(s);
                  });
              },
            }),
          o.push({
            id: `copy-id`,
            icon: z,
            message: f({
              id: `meetings.sidebar.copyId`,
              defaultMessage: `Copy ID`,
              description: `Copy the meeting note ID`,
            }),
            onSelect: () => {
              r() && g(n.id);
            },
          }),
          t != null &&
            o.push({
              id: `delete`,
              icon: B,
              tone: `danger`,
              selectAfterClose: !0,
              message: f({
                id: `meetings.sidebar.delete`,
                defaultMessage: `Delete`,
                description: `Open confirmation to delete this meeting note`,
              }),
              onSelect: () => {
                r() && p(() => () => ft(s, n.id, { sessionKey: e, pluginId: t }));
              },
            }),
          o
        );
      }),
      (t[0] = c),
      (t[1] = n.id),
      (t[2] = n.phase),
      (t[3] = n.summaryPageId),
      (t[4] = n.summaryPageUrl),
      (t[5] = l),
      (t[6] = s),
      (t[7] = m))
    : (m = t[7]);
  let h = m,
    _;
  t[8] !== o || t[9] !== h
    ? ((_ = (0, Q.jsx)(r, { getItems: h, children: o })), (t[8] = o), (t[9] = h), (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] !== d || t[12] !== n.title
    ? ((v = d == null ? null : (0, Q.jsx)(vt, { title: n.title, onDelete: d, onClose: () => p(null) })),
      (t[11] = d),
      (t[12] = n.title),
      (t[13] = v))
    : (v = t[13]);
  let y;
  return (
    t[14] !== _ || t[15] !== v
      ? ((y = (0, Q.jsxs)(Q.Fragment, { children: [_, v] })), (t[14] = _), (t[15] = v), (t[16] = y))
      : (y = t[16]),
    y
  );
}
function _t() {
  return !1;
}
function vt(e) {
  let t = (0, yt.c)(29),
    { title: n, onDelete: r, onClose: a } = e,
    o = i(ee),
    s = F(),
    c = (0, bt.useRef)(!1),
    [l, d] = (0, bt.useState)(!1),
    f;
  t[0] !== s || t[1] !== a || t[2] !== r || t[3] !== o
    ? ((f = async () => {
        if (!c.current) {
          ((c.current = !0), d(!0));
          try {
            await r();
          } catch {
            (o
              .get(L)
              .danger(
                s.formatMessage({
                  id: `meetings.sidebar.deleteFailed`,
                  defaultMessage: `Couldn’t delete this meeting. Try again.`,
                  description: `Deletion failed; keep the meeting and confirmation available for retry`,
                }),
                { errorAnalytics: { toastId: `meetings.sidebar.deleteFailed` } },
              ),
              (c.current = !1),
              d(!1));
            return;
          }
          a();
        }
      }),
      (t[0] = s),
      (t[1] = a),
      (t[2] = r),
      (t[3] = o),
      (t[4] = f))
    : (f = t[4]);
  let m = f,
    g;
  t[5] === a
    ? (g = t[6])
    : ((g = (e) => {
        !e && !c.current && a();
      }),
      (t[5] = a),
      (t[6] = g));
  let _;
  t[7] === m
    ? (_ = t[8])
    : ((_ = (e) => {
        (e.preventDefault(), m());
      }),
      (t[7] = m),
      (t[8] = _));
  let v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(I, {
        children: (0, Q.jsx)(V, {
          id: `meetings.sidebar.deleteTitle`,
          defaultMessage: `Delete from Meetings?`,
          description: `Title of the irreversible meeting note deletion confirmation`,
        }),
      })),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] === n
    ? (y = t[11])
    : ((y = (0, Q.jsx)(G, {
        children: (0, Q.jsx)(S, {
          title: v,
          subtitle: (0, Q.jsx)(p, {
            children: (0, Q.jsx)(V, {
              id: `meetings.sidebar.deleteDescription`,
              defaultMessage: `Delete “{title}” from Meetings? This cannot be undone.`,
              description: `Warn that deleting this meeting is irreversible; title is the unchanged meeting title`,
              values: { title: (0, Q.jsx)(`bdi`, { children: n }) },
            }),
          }),
        }),
      })),
      (t[10] = n),
      (t[11] = y));
  let b;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Q.jsx)(V, {
        id: `meetings.sidebar.deleteCancel`,
        defaultMessage: `Cancel`,
        description: `Close confirmation without deleting the meeting`,
      })),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== l || t[14] !== a
    ? ((x = (0, Q.jsx)(ie, {
        autoFocus: !0,
        color: `outline`,
        type: `button`,
        disabled: l,
        onClick: a,
        children: b,
      })),
      (t[13] = l),
      (t[14] = a),
      (t[15] = x))
    : (x = t[15]);
  let te;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsx)(V, {
        id: `meetings.sidebar.deleteConfirm`,
        defaultMessage: `Delete`,
        description: `Confirm permanent meeting deletion`,
      })),
      (t[16] = te))
    : (te = t[16]);
  let C;
  t[17] === l
    ? (C = t[18])
    : ((C = (0, Q.jsx)(ie, { color: `danger`, type: `submit`, loading: l, children: te })),
      (t[17] = l),
      (t[18] = C));
  let w;
  t[19] !== x || t[20] !== C
    ? ((w = (0, Q.jsx)(G, { children: (0, Q.jsxs)(h, { children: [x, C] }) })),
      (t[19] = x),
      (t[20] = C),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== w || t[23] !== _ || t[24] !== y
    ? ((T = (0, Q.jsxs)(u, { as: `form`, className: `select-none`, onSubmit: _, children: [y, w] })),
      (t[22] = w),
      (t[23] = _),
      (t[24] = y),
      (t[25] = T))
    : (T = t[25]);
  let E;
  return (
    t[26] !== T || t[27] !== g
      ? ((E = (0, Q.jsx)(D, { open: !0, size: `compact`, onOpenChange: g, children: T })),
        (t[26] = T),
        (t[27] = g),
        (t[28] = E))
      : (E = t[28]),
    E
  );
}
var yt, bt, Q;
function xt() {
  return (xt = e(() => {
    ((yt = b()),
      A(),
      k(),
      (bt = c()),
      re(),
      O(),
      se(),
      d(),
      l(),
      C(),
      E(),
      o(),
      rt(),
      x(),
      X(),
      Ie(),
      K(),
      (Q = m()));
  }))();
}
function St(e) {
  let t = (0, Ct.c)(21),
    { phase: r, ccaWaitUntil: i } = e,
    a = F(),
    [o, c] = (0, wt.useState)(Date.now),
    l;
  t[0] === i ? (l = t[1]) : ((l = i == null ? NaN : Date.parse(i)), (t[0] = i), (t[1] = l));
  let u = l,
    d = r === `personalizing` && u > o,
    f;
  t[2] !== u || t[3] !== d
    ? ((f = () => {
        if (!d) return;
        let e = setTimeout(() => c(Date.now()), Math.max(0, u - Date.now()));
        return () => clearTimeout(e);
      }),
      (t[2] = u),
      (t[3] = d),
      (t[4] = f))
    : (f = t[4]);
  let p;
  if (
    (t[5] !== o || t[6] !== u || t[7] !== d
      ? ((p = [u, d, o]), (t[5] = o), (t[6] = u), (t[7] = d), (t[8] = p))
      : (p = t[8]),
    (0, wt.useEffect)(f, p),
    r === `idle` || (r === `personalizing` && !d))
  )
    return null;
  let m;
  t[9] !== a || t[10] !== r
    ? ((m = a.formatMessage(Et[r])), (t[9] = a), (t[10] = r), (t[11] = m))
    : (m = t[11]);
  let h = m,
    g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Tt.jsx)(n, { as: `span`, className: `icon-xs shrink-0` })), (t[12] = g))
    : (g = t[12]);
  let _ = g;
  if (r === `failed`) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Tt.jsx)(s, { asset: H, className: `shrink-0 text-danger` })), (t[13] = e))
      : (e = t[13]),
      (_ = e));
  } else if (r === `recording`) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Tt.jsx)(M, { className: `text-success motion-safe:animate-pulse` })), (t[14] = e))
      : (e = t[14]),
      (_ = e));
  }
  let v;
  t[15] !== _ || t[16] !== h
    ? ((v = (0, Tt.jsx)(`span`, {
        className: `flex h-5 w-5 shrink-0 items-center justify-center leading-none`,
        role: `img`,
        "aria-label": h,
        children: _,
      })),
      (t[15] = _),
      (t[16] = h),
      (t[17] = v))
    : (v = t[17]);
  let y;
  return (
    t[18] !== h || t[19] !== v
      ? ((y = (0, Tt.jsx)(de, { tooltipContent: h, children: v })), (t[18] = h), (t[19] = v), (t[20] = y))
      : (y = t[20]),
    y
  );
}
var Ct, wt, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((Ct = b()),
      W(),
      (wt = c()),
      re(),
      y(),
      C(),
      N(),
      R(),
      (Tt = m()),
      (Et = ae({
        failed: {
          id: `meetings.sidebar.failed`,
          defaultMessage: `Processing failed`,
          description: `Meeting note processing failed; the recording is not active`,
        },
        preparing: {
          id: `meetings.sidebar.preparing`,
          defaultMessage: `Preparing`,
          description: `Meeting recording started but its note or Page is not yet available`,
        },
        recording: {
          id: `meetings.sidebar.recording`,
          defaultMessage: `Taking notes`,
          description: `Live recording indicator for a meeting note`,
        },
        processing: {
          id: `meetings.sidebar.processing`,
          defaultMessage: `Processing`,
          description: `Meeting note is uploading or processing after recording`,
        },
        personalizing: {
          id: `meetings.sidebar.personalizing`,
          defaultMessage: `Personalizing`,
          description: `Meeting note is waiting for optional personalization to finish`,
        },
      })));
  }))();
}
function Ot(e, t) {
  let n = e.get(nt);
  e.get(He) && n?.pluginId === t.plugin.id && Ae(e, Y(t, n.hostId));
}
function kt() {
  return (kt = e(() => {
    (Oe(), qe(), K());
  }))();
}
function At() {
  let e = (0, Pt.c)(159),
    t = i(ee),
    n = F(),
    r = T(),
    a = w(),
    o = P(at),
    s = P(nt),
    c = s?.hostId ?? `local`,
    l = s != null,
    u;
  e[0] !== c || e[1] !== l
    ? ((u = { hostId: c, roots: void 0, resolveActiveRoots: !0, enabled: l }),
      (e[0] = c),
      (e[1] = l),
      (e[2] = u))
    : (u = e[2]);
  let { data: d } = Je(u),
    f;
  e[3] !== d || e[4] !== s?.pluginId
    ? ((f = d?.find((e) => {
        let { plugin: t } = e;
        return t.id === s?.pluginId;
      })),
      (e[3] = d),
      (e[4] = s?.pluginId),
      (e[5] = f))
    : (f = e[5]);
  let p = f,
    m;
  e[6] === r.state ? (m = e[7]) : ((m = v.safeParse(r.state)), (e[6] = r.state), (e[7] = m));
  let h = m,
    {
      data: g,
      isPending: _,
      isError: y,
      hasNextPage: b,
      isFetching: x,
      isFetchingNextPage: S,
      isFetchNextPageError: C,
      fetchNextPage: E,
      refetch: D,
    } = P(ye),
    re = P(tt),
    ie = P(Ze),
    ae = fe(st, `meetings.takeNotes`),
    O = P(be),
    k = P($e),
    A = P(mt),
    j = k.accountId === A ? k.query : ``,
    M;
  e[8] !== A || e[9] !== t
    ? ((M = (e) => t.set($e, { accountId: A, query: e })), (e[8] = A), (e[9] = t), (e[10] = M))
    : (M = e[10]);
  let N = M,
    se,
    ue,
    I,
    L,
    R,
    z,
    B,
    ge;
  if (
    e[11] !== re ||
    e[12] !== g?.pages ||
    e[13] !== n ||
    e[14] !== O ||
    e[15] !== r ||
    e[16] !== a ||
    e[17] !== h ||
    e[18] !== o ||
    e[19] !== j ||
    e[20] !== t ||
    e[21] !== N ||
    e[22] !== p ||
    e[23] !== ae ||
    e[24] !== ie ||
    e[25] !== s?.title
  ) {
    let i = lt(g?.pages, O?.notes);
    R = O?.pending ?? [];
    let c = new Set();
    for (let e of R) {
      let t = `preparing:${e.recordingId}`;
      (c.add(t),
        i.set(t, {
          id: t,
          title: n.formatMessage({
            id: `meetings.sidebar.newNote`,
            defaultMessage: `New meeting note`,
            description: `Title of an optimistic meeting row before the server creates the note`,
          }),
          startTime: e.startedAt,
          phase: e.stoppedAt == null ? `preparing` : `processing`,
          disabled: !0,
        }));
    }
    L = [...i.values()].sort(jt);
    let l;
    e[34] === O
      ? (l = e[35])
      : ((l = O?.bindings.find((e) => e.sessionId === O.activeSessionId)?.noteId), (e[34] = O), (e[35] = l));
    let u = l,
      d;
    e[36] !== u || e[37] !== c || e[38] !== j
      ? ((d = (e) =>
          c.has(e.id) || e.id === u || e.title.toLocaleLowerCase().includes(j.toLocaleLowerCase())),
        (e[36] = u),
        (e[37] = c),
        (e[38] = j),
        (e[39] = d))
      : (d = e[39]);
    let f;
    (e[40] === n
      ? (f = e[41])
      : ((f = (e) => n.formatDate(e.startTime, { month: `long`, day: `numeric`, year: `numeric` })),
        (e[40] = n),
        (e[41] = f)),
      (I = (0, Ft.default)(L.filter(d), f)));
    let m;
    e[42] === n
      ? (m = e[43])
      : ((m = n.formatMessage({
          id: `meetings.sidebar.takeNotes`,
          defaultMessage: `Take notes`,
          description: `Start taking meeting notes from the sidebar`,
        })),
        (e[42] = n),
        (e[43] = m));
    let _ = m,
      v =
        !re ||
        ie ||
        O?.starting === !0 ||
        O?.awaitingRecordingCorrelation === !0 ||
        O?.activeSessionId != null,
      y = r.pathname === o && (!h.success || (h.data.mcpAppDeepLink?.path.length ?? 0) === 0),
      b;
    e[44] !== a || e[45] !== o
      ? ((b = () => {
          o != null &&
            a(o, {
              state: {
                sidebarPrimaryContent: !0,
                entrypoint: `global`,
                mcpAppDeepLink: { path: [], query: [] },
              },
            });
        }),
        (e[44] = a),
        (e[45] = o),
        (e[46] = b))
      : (b = e[46]);
    let x = b;
    ((ge = `flex min-h-0 flex-1 flex-col select-none`), (ue = Se));
    let ee = s?.title,
      S;
    e[47] === ee ? (S = e[48]) : ((S = (0, $.jsx)(Pe, { children: ee })), (e[47] = ee), (e[48] = S));
    let C;
    e[49] === n
      ? (C = e[50])
      : ((C = n.formatMessage({
          id: `meetings.sidebar.upcoming`,
          defaultMessage: `Upcoming`,
          description: `Open the Meetings home screen with upcoming calendar meetings`,
        })),
        (e[49] = n),
        (e[50] = C));
    let w;
    e[51] === n
      ? (w = e[52])
      : ((w = n.formatMessage({
          id: `meetings.sidebar.upcoming`,
          defaultMessage: `Upcoming`,
          description: `Open the Meetings home screen with upcoming calendar meetings`,
        })),
        (e[51] = n),
        (e[52] = w));
    let T = y ? `page` : void 0,
      E = o == null,
      D;
    e[53] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((D = (0, $.jsx)(te, { "data-no-autosize": !0, icon: { 16: pe, 20: he } })), (e[53] = D))
      : (D = e[53]);
    let k;
    e[54] !== x || e[55] !== y || e[56] !== w || e[57] !== T || e[58] !== E
      ? ((k = (0, $.jsx)(Ke, {
          "aria-label": w,
          "aria-current": T,
          selected: y,
          disabled: E,
          uniform: !0,
          onClick: x,
          children: D,
        })),
        (e[54] = x),
        (e[55] = y),
        (e[56] = w),
        (e[57] = T),
        (e[58] = E),
        (e[59] = k))
      : (k = e[59]);
    let A;
    e[60] !== C || e[61] !== k
      ? ((A = (0, $.jsx)(de, { tooltipContent: C, children: k })), (e[60] = C), (e[61] = k), (e[62] = A))
      : (A = e[62]);
    let M;
    e[63] === n
      ? (M = e[64])
      : ((M = n.formatMessage({
          id: `meetings.sidebar.settings`,
          defaultMessage: `Settings`,
          description: `Open Meetings settings`,
        })),
        (e[63] = n),
        (e[64] = M));
    let P;
    e[65] === n
      ? (P = e[66])
      : ((P = n.formatMessage({
          id: `meetings.sidebar.settings`,
          defaultMessage: `Settings`,
          description: `Open Meetings settings`,
        })),
        (e[65] = n),
        (e[66] = P));
    let fe = p == null,
      F;
    e[67] !== t || e[68] !== p
      ? ((F = () => {
          p != null && Ot(t, p);
        }),
        (e[67] = t),
        (e[68] = p),
        (e[69] = F))
      : (F = e[69]);
    let V;
    e[70] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((V = (0, $.jsx)(te, { "data-no-autosize": !0, icon: { 16: ce, 20: me } })), (e[70] = V))
      : (V = e[70]);
    let H;
    e[71] !== P || e[72] !== fe || e[73] !== F
      ? ((H = (0, $.jsx)(Ke, { "aria-label": P, disabled: fe, uniform: !0, onClick: F, children: V })),
        (e[71] = P),
        (e[72] = fe),
        (e[73] = F),
        (e[74] = H))
      : (H = e[74]);
    let U;
    e[75] !== M || e[76] !== H
      ? ((U = (0, $.jsx)(de, { tooltipContent: M, children: H })), (e[75] = M), (e[76] = H), (e[77] = U))
      : (U = e[77]);
    let W;
    e[78] !== A || e[79] !== U
      ? ((W = (0, $.jsxs)(ve, { children: [A, U] })), (e[78] = A), (e[79] = U), (e[80] = W))
      : (W = e[80]);
    let G;
    e[81] !== S || e[82] !== W
      ? ((G = (0, $.jsxs)(ke, { children: [S, W] })), (e[81] = S), (e[82] = W), (e[83] = G))
      : (G = e[83]);
    let K = ae ? _ : null,
      q;
    e[84] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((q = (0, $.jsx)(te, { icon: { 16: oe, 20: _e } })), (e[84] = q))
      : (q = e[84]);
    let J;
    e[85] !== x || e[86] !== t || e[87] !== N
      ? ((J = () => {
          (N(``),
            x(),
            We(t).finally(() => {
              t.query.invalidate(ye);
            }));
        }),
        (e[85] = x),
        (e[86] = t),
        (e[87] = N),
        (e[88] = J))
      : (J = e[88]);
    let be;
    e[89] !== J || e[90] !== v || e[91] !== _
      ? ((be = (0, $.jsx)(Ce, { icon: q, label: _, disabled: v, onClick: J })),
        (e[89] = J),
        (e[90] = v),
        (e[91] = _),
        (e[92] = be))
      : (be = e[92]);
    let Y;
    e[93] !== K || e[94] !== be || e[95] !== v || e[96] !== ae
      ? ((Y = (0, $.jsx)(je, {
          children: (0, $.jsx)(de, { disabled: v, tooltipContent: K, shortcut: ae, children: be }),
        })),
        (e[93] = K),
        (e[94] = be),
        (e[95] = v),
        (e[96] = ae),
        (e[97] = Y))
      : (Y = e[97]);
    let X;
    e[98] === n
      ? (X = e[99])
      : ((X = n.formatMessage({
          id: `meetings.sidebar.search`,
          defaultMessage: `Search meetings`,
          description: `Search meeting titles in the sidebar`,
        })),
        (e[98] = n),
        (e[99] = X));
    let Z;
    e[100] === n
      ? (Z = e[101])
      : ((Z = n.formatMessage({
          id: `meetings.sidebar.search`,
          defaultMessage: `Search meetings`,
          description: `Search meeting titles in the sidebar`,
        })),
        (e[100] = n),
        (e[101] = Z));
    let xe;
    (e[102] !== j || e[103] !== N || e[104] !== X || e[105] !== Z
      ? ((xe = (0, $.jsx)(Qe, {
          id: `meetings-search`,
          variant: `sidebar-header`,
          searchQuery: j,
          onSearchQueryChange: N,
          label: X,
          placeholder: Z,
        })),
        (e[102] = j),
        (e[103] = N),
        (e[104] = X),
        (e[105] = Z),
        (e[106] = xe))
      : (xe = e[106]),
      e[107] !== G || e[108] !== Y || e[109] !== xe
        ? ((B = (0, $.jsxs)($.Fragment, { children: [G, Y, xe] })),
          (e[107] = G),
          (e[108] = Y),
          (e[109] = xe),
          (e[110] = B))
        : (B = e[110]),
      (se = ht),
      (z = Object.entries(I).map((e) => {
        let [i, s] = e;
        return (0, $.jsx)(
          Fe,
          {
            title: i,
            children: (0, $.jsx)(De, {
              children: s.map((e) => {
                let i = e.endTime
                  ? n.formatDateTimeRange(new Date(e.startTime), new Date(e.endTime), {
                      hour: `numeric`,
                      minute: `2-digit`,
                    })
                  : n.formatTime(e.startTime, { hour: `numeric`, minute: `2-digit` });
                return (0, $.jsx)(
                  gt,
                  {
                    note: e,
                    children: (0, $.jsx)(Ce, {
                      layout: `summary`,
                      label: e.title,
                      disabled: e.disabled,
                      trailing: (0, $.jsx)(St, { phase: e.phase, ccaWaitUntil: e.ccaWaitUntil }),
                      description: i,
                      isActive: e.summaryPageId != null && r.pathname === ne(e.summaryPageId),
                      onClick: () => {
                        let n = t.get(mt),
                          i = t.get(nt);
                        if (
                          o == null ||
                          i == null ||
                          n == null ||
                          !t.get(Me) ||
                          e.summaryPageId == null ||
                          !le.test(e.summaryPageId) ||
                          e.summaryPageStatus === `unavailable`
                        )
                          return;
                        let s = {
                          sidebarPrimaryContent: !0,
                          sidebarArea: `meetings`,
                          sidebarProductMode: t.get(it),
                          sidebarProductModeAccountKey: `chatgpt:${n}`,
                          sidebarDestinationId: `mcp:${Te(i)}`,
                          spaceSidebarAccountId: n,
                          spacePageOrigin: {
                            accountId: n,
                            pageId: e.summaryPageId,
                            location: {
                              ...r,
                              pathname: o,
                              search: ``,
                              state: { entrypoint: `global`, mcpAppDeepLink: { path: [], query: [] } },
                            },
                          },
                        };
                        a(ne(e.summaryPageId), { state: s });
                      },
                    }),
                  },
                  e.id,
                );
              }),
            }),
          },
          i,
        );
      })),
      (e[11] = re),
      (e[12] = g?.pages),
      (e[13] = n),
      (e[14] = O),
      (e[15] = r),
      (e[16] = a),
      (e[17] = h),
      (e[18] = o),
      (e[19] = j),
      (e[20] = t),
      (e[21] = N),
      (e[22] = p),
      (e[23] = ae),
      (e[24] = ie),
      (e[25] = s?.title),
      (e[26] = se),
      (e[27] = ue),
      (e[28] = I),
      (e[29] = L),
      (e[30] = R),
      (e[31] = z),
      (e[32] = B),
      (e[33] = ge));
  } else
    ((se = e[26]),
      (ue = e[27]),
      (I = e[28]),
      (L = e[29]),
      (R = e[30]),
      (z = e[31]),
      (B = e[32]),
      (ge = e[33]));
  let H;
  e[111] !== _ || e[112] !== L || e[113] !== R
    ? ((H = _ && L.length === 0 && R.length === 0 ? (0, $.jsx)(Fe, { children: (0, $.jsx)(Mt, {}) }) : null),
      (e[111] = _),
      (e[112] = L),
      (e[113] = R),
      (e[114] = H))
    : (H = e[114]);
  let U;
  e[115] !== I || e[116] !== b || e[117] !== y || e[118] !== _ || e[119] !== R
    ? ((U =
        !_ && !y && !b && R.length === 0 && Object.keys(I).length === 0
          ? (0, $.jsx)(Fe, {
              title: (0, $.jsx)(V, {
                id: `meetings.sidebar.empty`,
                defaultMessage: `No meetings found`,
                description: `Empty meeting search results`,
              }),
              children: null,
            })
          : null),
      (e[115] = I),
      (e[116] = b),
      (e[117] = y),
      (e[118] = _),
      (e[119] = R),
      (e[120] = U))
    : (U = e[120]);
  let W;
  e[121] !== E || e[122] !== b || e[123] !== y || e[124] !== x || e[125] !== _ || e[126] !== j
    ? ((W =
        !_ && !y && j.trim() !== `` && b
          ? (0, $.jsx)(ze, {
              disabled: x,
              onClick: () => void E(),
              children: (0, $.jsx)(V, {
                id: `meetings.sidebar.searchOlder`,
                defaultMessage: `Search older meetings`,
                description: `Load the next page of older meeting notes and search their titles using the current search text`,
              }),
            })
          : null),
      (e[121] = E),
      (e[122] = b),
      (e[123] = y),
      (e[124] = x),
      (e[125] = _),
      (e[126] = j),
      (e[127] = W))
    : (W = e[127]);
  let G;
  e[128] !== E || e[129] !== y || e[130] !== C || e[131] !== x || e[132] !== D
    ? ((G = y
        ? (0, $.jsx)(ze, {
            disabled: x,
            onClick: () => void (C ? E() : D()),
            children: (0, $.jsx)(V, {
              id: `meetings.sidebar.retry`,
              defaultMessage: `Retry`,
              description: `Retry loading meeting notes`,
            }),
          })
        : null),
      (e[128] = E),
      (e[129] = y),
      (e[130] = C),
      (e[131] = x),
      (e[132] = D),
      (e[133] = G))
    : (G = e[133]);
  let K;
  e[134] !== W || e[135] !== G
    ? ((K = (0, $.jsxs)(ot, { children: [W, G] })), (e[134] = W), (e[135] = G), (e[136] = K))
    : (K = e[136]);
  let q;
  e[137] !== E || e[138] !== b || e[139] !== y || e[140] !== x || e[141] !== S || e[142] !== _ || e[143] !== j
    ? ((q =
        !y && !_ && j.trim() === ``
          ? (0, $.jsx)(Be, {
              hasNextPage: b,
              isFetchingNextPage: x,
              onLoadNextPage: () => void E(),
              rootMargin: `160px`,
              loadingPlaceholder: S ? (0, $.jsx)(Mt, {}) : null,
            })
          : null),
      (e[137] = E),
      (e[138] = b),
      (e[139] = y),
      (e[140] = x),
      (e[141] = S),
      (e[142] = _),
      (e[143] = j),
      (e[144] = q))
    : (q = e[144]);
  let J;
  e[145] !== se || e[146] !== U || e[147] !== K || e[148] !== q || e[149] !== z || e[150] !== H
    ? ((J = (0, $.jsxs)(se, { children: [z, H, U, K, q] })),
      (e[145] = se),
      (e[146] = U),
      (e[147] = K),
      (e[148] = q),
      (e[149] = z),
      (e[150] = H),
      (e[151] = J))
    : (J = e[151]);
  let Y;
  e[152] !== ue || e[153] !== J || e[154] !== B
    ? ((Y = (0, $.jsx)(ue, { header: B, children: J })),
      (e[152] = ue),
      (e[153] = J),
      (e[154] = B),
      (e[155] = Y))
    : (Y = e[155]);
  let X;
  return (
    e[156] !== Y || e[157] !== ge
      ? ((X = (0, $.jsx)(`div`, { className: ge, children: Y })), (e[156] = Y), (e[157] = ge), (e[158] = X))
      : (X = e[158]),
    X
  );
}
function jt(e, t) {
  return Date.parse(t.startTime) - Date.parse(e.startTime);
}
function Mt() {
  let e = (0, Pt.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(V, {
          id: `meetings.sidebar.loading`,
          defaultMessage: `Loading meetings…`,
          description: `Meeting feed loading status`,
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(`div`, {
          role: `status`,
          "aria-live": `polite`,
          children: [t, (0, $.jsx)(De, { children: [72, 55, 68, 45].map(Nt) })],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function Nt(e) {
  return (0, $.jsx)(
    Ce,
    {
      layout: `summary`,
      disabled: !0,
      "aria-hidden": !0,
      label: (0, $.jsx)(Z, { as: `span`, widthPercent: e }),
      description: (0, $.jsx)(Z, { as: `span`, size: `sm`, widthPercent: 40 }),
    },
    e,
  );
}
var Pt, Ft, $;
function It() {
  return (It = e(() => {
    ((Pt = b()),
      (Ft = t(J(), 1)),
      A(),
      ge(),
      k(),
      re(),
      _(),
      ct(),
      dt(),
      C(),
      ut(),
      Ge(),
      Ee(),
      U(),
      R(),
      Ue(),
      Re(),
      Xe(),
      Le(),
      o(),
      j(),
      we(),
      xe(),
      q(),
      pt(),
      et(),
      xt(),
      Dt(),
      kt(),
      X(),
      Ie(),
      K(),
      ($ = m()));
  }))();
}
It();
export { At as MeetingsSidebar };
//# sourceMappingURL=sidebar-5e48a44000e5.js.map
