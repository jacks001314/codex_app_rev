import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  ADt as r,
  Cot as i,
  Dz as a,
  Ext as o,
  IDt as s,
  Ixt as c,
  LT as l,
  Mz as u,
  NB as d,
  Nz as f,
  Pxt as p,
  RT as m,
  SO as h,
  SW as g,
  TJ as _,
  VDt as v,
  Vxt as y,
  _O as b,
  _U as ee,
  _xt as x,
  _yt as S,
  cI as C,
  cO as te,
  cz as w,
  dJ as T,
  dV as ne,
  fO as E,
  gO as D,
  gU as re,
  hbt as ie,
  hot as O,
  i3 as k,
  iO as A,
  jDt as j,
  kDt as ae,
  kz as oe,
  lO as M,
  lot as N,
  mO as P,
  oO as F,
  oot as I,
  r3 as L,
  rO as R,
  rW as se,
  rst as ce,
  sI as le,
  sJ as z,
  sO as ue,
  sq as B,
  sz as de,
  t3 as fe,
  uV as pe,
  vO as V,
  vzt as H,
  wot as U,
  wxt as me,
  xMt as W,
  xO as G,
  xW as he,
  yzt as K,
  zxt as ge,
} from "./app-shared-bbfeca5e5737.js";
import {
  $1 as _e,
  $9 as q,
  AEn as J,
  Avn as ve,
  Bar as ye,
  Bcr as be,
  D1 as Y,
  E1 as xe,
  EMn as X,
  Ear as Z,
  Fvn as Se,
  G9 as Ce,
  GMr as we,
  Icr as Te,
  Iur as Ee,
  Ivn as De,
  K9 as Oe,
  LTn as ke,
  Lvn as Ae,
  MEn as je,
  Mvn as Me,
  NEn as Ne,
  Nvn as Pe,
  Ovn as Fe,
  PEn as Ie,
  Pvn as Le,
  Q1 as Re,
  Q3n as ze,
  RTn as Be,
  Rvn as Ve,
  SMn as He,
  W9 as Ue,
  aet as We,
  dH as Ge,
  e0 as Ke,
  e6n as qe,
  eet as Je,
  fSn as Ye,
  iet as Xe,
  jEn as Ze,
  jvn as Qe,
  kvn as $e,
  lIr as et,
  lSn as tt,
  lit as nt,
  llt as rt,
  n0 as it,
  net as at,
  oet as ot,
  oit as st,
  q9 as ct,
  set as lt,
  t0 as ut,
  tNr as dt,
  tet as ft,
  uH as pt,
  uIr as mt,
  ult as ht,
} from "./app-initial-5851df3f6cb1.js";
function gt(e) {
  let t = (0, yt.c)(17),
    { note: n, children: r } = e,
    a = c(i),
    o = v(),
    [s, l] = (0, bt.useState)(!1),
    [u, f] = (0, bt.useState)(null),
    p;
  t[0] !== o ||
  t[1] !== n.id ||
  t[2] !== n.phase ||
  t[3] !== n.summaryPageId ||
  t[4] !== n.summaryPageUrl ||
  t[5] !== s ||
  t[6] !== a
    ? ((p = () => {
        if (n.phase === `preparing` || n.id.startsWith(`preparing:`)) return [];
        let e = lt(a),
          t = a.get(Ie)?.pluginId,
          r = () => e === lt(a) && t === a.get(Ie)?.pluginId,
          i =
            n.summaryPageId && ie.test(n.summaryPageId)
              ? `https://chatgpt.com/space/${n.summaryPageId}`
              : n.summaryPageUrl?.match(
                  /^https:\/\/chatgpt\.com\/space\/[A-Za-z0-9][A-Za-z0-9_-]{0,199}$/u,
                )?.[0],
          c = [],
          u = a.get(ot);
        return (
          n.phase === `failed` &&
            u != null &&
            c.push({
              id: `retry`,
              icon: d,
              enabled: !s,
              message: ae({
                id: `meetings.sidebar.retryProcessing`,
                defaultMessage: `Retry`,
                description: `Retry processing a failed meeting note using the existing recording`,
              }),
              onSelect: () => {
                r() &&
                  a.get(ot) === u &&
                  !s &&
                  (l(!0),
                  u
                    .retry(n.id)
                    .catch(_t)
                    .then((e) => {
                      !e &&
                        r() &&
                        a.get(ot) === u &&
                        a
                          .get(O)
                          .danger(
                            o.formatMessage({
                              id: `meetings.sidebar.retryFailed`,
                              defaultMessage: `Couldn’t retry processing`,
                              description: `Retrying a failed meeting note did not succeed`,
                            }),
                            { errorAnalytics: { toastId: `meetings.sidebar.retryFailed` } },
                          );
                    })
                    .finally(() => l(!1)));
              },
            }),
          i &&
            c.push({
              id: `copy-url`,
              icon: se,
              message: ae({
                id: `meetings.sidebar.copyUrl`,
                defaultMessage: `Copy URL`,
                description: `Copy the meeting note's linked Page URL`,
              }),
              onSelect: () => {
                r() &&
                  R(i).then((e) => {
                    e && r() && Ge(a);
                  });
              },
            }),
          c.push({
            id: `copy-id`,
            icon: B,
            message: ae({
              id: `meetings.sidebar.copyId`,
              defaultMessage: `Copy ID`,
              description: `Copy the meeting note ID`,
            }),
            onSelect: () => {
              r() && R(n.id);
            },
          }),
          t != null &&
            c.push({
              id: `delete`,
              icon: z,
              tone: `danger`,
              selectAfterClose: !0,
              message: ae({
                id: `meetings.sidebar.delete`,
                defaultMessage: `Delete`,
                description: `Open confirmation to delete this meeting note`,
              }),
              onSelect: () => {
                r() && f(() => () => q(a, n.id, { sessionKey: e, pluginId: t }));
              },
            }),
          c
        );
      }),
      (t[0] = o),
      (t[1] = n.id),
      (t[2] = n.phase),
      (t[3] = n.summaryPageId),
      (t[4] = n.summaryPageUrl),
      (t[5] = s),
      (t[6] = a),
      (t[7] = p))
    : (p = t[7]);
  let m = p,
    h;
  t[8] !== r || t[9] !== m
    ? ((h = (0, Q.jsx)(G, { getItems: m, children: r })), (t[8] = r), (t[9] = m), (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] !== u || t[12] !== n.title
    ? ((g = u == null ? null : (0, Q.jsx)(vt, { title: n.title, onDelete: u, onClose: () => f(null) })),
      (t[11] = u),
      (t[12] = n.title),
      (t[13] = g))
    : (g = t[13]);
  let _;
  return (
    t[14] !== h || t[15] !== g
      ? ((_ = (0, Q.jsxs)(Q.Fragment, { children: [h, g] })), (t[14] = h), (t[15] = g), (t[16] = _))
      : (_ = t[16]),
    _
  );
}
function _t() {
  return !1;
}
function vt(e) {
  let t = (0, yt.c)(29),
    { title: r, onDelete: a, onClose: o } = e,
    l = c(i),
    u = v(),
    d = (0, bt.useRef)(!1),
    [f, p] = (0, bt.useState)(!1),
    m;
  t[0] !== u || t[1] !== o || t[2] !== a || t[3] !== l
    ? ((m = async () => {
        if (!d.current) {
          ((d.current = !0), p(!0));
          try {
            await a();
          } catch {
            (l
              .get(O)
              .danger(
                u.formatMessage({
                  id: `meetings.sidebar.deleteFailed`,
                  defaultMessage: `Couldn’t delete this meeting. Try again.`,
                  description: `Deletion failed; keep the meeting and confirmation available for retry`,
                }),
                { errorAnalytics: { toastId: `meetings.sidebar.deleteFailed` } },
              ),
              (d.current = !1),
              p(!1));
            return;
          }
          o();
        }
      }),
      (t[0] = u),
      (t[1] = o),
      (t[2] = a),
      (t[3] = l),
      (t[4] = m))
    : (m = t[4]);
  let h = m,
    g;
  t[5] === o
    ? (g = t[6])
    : ((g = (e) => {
        !e && !d.current && o();
      }),
      (t[5] = o),
      (t[6] = g));
  let _;
  t[7] === h
    ? (_ = t[8])
    : ((_ = (e) => {
        (e.preventDefault(), h());
      }),
      (t[7] = h),
      (t[8] = _));
  let y;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(b, {
        children: (0, Q.jsx)(s, {
          id: `meetings.sidebar.deleteTitle`,
          defaultMessage: `Delete from Meetings?`,
          description: `Title of the irreversible meeting note deletion confirmation`,
        }),
      })),
      (t[9] = y))
    : (y = t[9]);
  let ee;
  t[10] === r
    ? (ee = t[11])
    : ((ee = (0, Q.jsx)(M, {
        children: (0, Q.jsx)(te, {
          title: y,
          subtitle: (0, Q.jsx)(D, {
            children: (0, Q.jsx)(s, {
              id: `meetings.sidebar.deleteDescription`,
              defaultMessage: `Delete “{title}” from Meetings? This cannot be undone.`,
              description: `Warn that deleting this meeting is irreversible; title is the unchanged meeting title`,
              values: { title: (0, Q.jsx)(`bdi`, { children: r }) },
            }),
          }),
        }),
      })),
      (t[10] = r),
      (t[11] = ee));
  let x;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(s, {
        id: `meetings.sidebar.deleteCancel`,
        defaultMessage: `Cancel`,
        description: `Close confirmation without deleting the meeting`,
      })),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] !== f || t[14] !== o
    ? ((S = (0, Q.jsx)(n, {
        autoFocus: !0,
        color: `outline`,
        type: `button`,
        disabled: f,
        onClick: o,
        children: x,
      })),
      (t[13] = f),
      (t[14] = o),
      (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Q.jsx)(s, {
        id: `meetings.sidebar.deleteConfirm`,
        defaultMessage: `Delete`,
        description: `Confirm permanent meeting deletion`,
      })),
      (t[16] = C))
    : (C = t[16]);
  let w;
  t[17] === f
    ? (w = t[18])
    : ((w = (0, Q.jsx)(n, { color: `danger`, type: `submit`, loading: f, children: C })),
      (t[17] = f),
      (t[18] = w));
  let T;
  t[19] !== S || t[20] !== w
    ? ((T = (0, Q.jsx)(M, { children: (0, Q.jsxs)(ue, { children: [S, w] }) })),
      (t[19] = S),
      (t[20] = w),
      (t[21] = T))
    : (T = t[21]);
  let ne;
  t[22] !== T || t[23] !== _ || t[24] !== ee
    ? ((ne = (0, Q.jsxs)(F, { as: `form`, className: `select-none`, onSubmit: _, children: [ee, T] })),
      (t[22] = T),
      (t[23] = _),
      (t[24] = ee),
      (t[25] = ne))
    : (ne = t[25]);
  let E;
  return (
    t[26] !== ne || t[27] !== g
      ? ((E = (0, Q.jsx)(P, { open: !0, size: `compact`, onOpenChange: g, children: ne })),
        (t[26] = ne),
        (t[27] = g),
        (t[28] = E))
      : (E = t[28]),
    E
  );
}
var yt, bt, Q;
function xt() {
  return (xt = e(() => {
    ((yt = H()),
      p(),
      C(),
      (bt = K()),
      j(),
      fe(),
      h(),
      V(),
      E(),
      _(),
      N(),
      U(),
      pt(),
      A(),
      Xe(),
      Je(),
      J(),
      (Q = W()));
  }))();
}
function St(e) {
  let t = (0, Ct.c)(21),
    { phase: n, ccaWaitUntil: r } = e,
    i = v(),
    [a, o] = (0, wt.useState)(Date.now),
    s;
  t[0] === r ? (s = t[1]) : ((s = r == null ? NaN : Date.parse(r)), (t[0] = r), (t[1] = s));
  let c = s,
    d = n === `personalizing` && c > a,
    f;
  t[2] !== c || t[3] !== d
    ? ((f = () => {
        if (!d) return;
        let e = setTimeout(() => o(Date.now()), Math.max(0, c - Date.now()));
        return () => clearTimeout(e);
      }),
      (t[2] = c),
      (t[3] = d),
      (t[4] = f))
    : (f = t[4]);
  let p;
  if (
    (t[5] !== a || t[6] !== c || t[7] !== d
      ? ((p = [c, d, a]), (t[5] = a), (t[6] = c), (t[7] = d), (t[8] = p))
      : (p = t[8]),
    (0, wt.useEffect)(f, p),
    n === `idle` || (n === `personalizing` && !d))
  )
    return null;
  let m;
  t[9] !== i || t[10] !== n
    ? ((m = i.formatMessage(Et[n])), (t[9] = i), (t[10] = n), (t[11] = m))
    : (m = t[11]);
  let h = m,
    g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, Tt.jsx)(L, { as: `span`, className: `icon-xs shrink-0` })), (t[12] = g))
    : (g = t[12]);
  let _ = g;
  if (n === `failed`) {
    let e;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Tt.jsx)(u, { asset: l, className: `shrink-0 text-danger` })), (t[13] = e))
      : (e = t[13]),
      (_ = e));
  } else if (n === `recording`) {
    let e;
    (t[14] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Tt.jsx)(T, { className: `text-success motion-safe:animate-pulse` })), (t[14] = e))
      : (e = t[14]),
      (_ = e));
  }
  let y;
  t[15] !== _ || t[16] !== h
    ? ((y = (0, Tt.jsx)(`span`, {
        className: `flex h-5 w-5 shrink-0 items-center justify-center leading-none`,
        role: `img`,
        "aria-label": h,
        children: _,
      })),
      (t[15] = _),
      (t[16] = h),
      (t[17] = y))
    : (y = t[17]);
  let b;
  return (
    t[18] !== h || t[19] !== y
      ? ((b = (0, Tt.jsx)(de, { tooltipContent: h, children: y })), (t[18] = h), (t[19] = y), (t[20] = b))
      : (b = t[20]),
    b
  );
}
var Ct, wt, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((Ct = H()),
      m(),
      (wt = K()),
      j(),
      f(),
      _(),
      k(),
      w(),
      (Tt = W()),
      (Et = r({
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
  let n = e.get(Ie);
  e.get(Ze) && n?.pluginId === t.plugin.id && mt(e, st(t, n.hostId));
}
function kt() {
  return (kt = e(() => {
    (et(), nt(), J());
  }))();
}
function At() {
  let e = (0, Pt.c)(159),
    t = c(i),
    n = v(),
    r = me(),
    l = o(),
    u = y(je),
    d = y(Ie),
    f = d?.hostId ?? `local`,
    p = d != null,
    m;
  e[0] !== f || e[1] !== p
    ? ((m = { hostId: f, roots: void 0, resolveActiveRoots: !0, enabled: p }),
      (e[0] = f),
      (e[1] = p),
      (e[2] = m))
    : (m = e[2]);
  let { data: h } = be(m),
    _;
  e[3] !== h || e[4] !== d?.pluginId
    ? ((_ = h?.find((e) => {
        let { plugin: t } = e;
        return t.id === d?.pluginId;
      })),
      (e[3] = h),
      (e[4] = d?.pluginId),
      (e[5] = _))
    : (_ = e[5]);
  let b = _,
    x;
  e[6] === r.state ? (x = e[7]) : ((x = S.safeParse(r.state)), (e[6] = r.state), (e[7] = x));
  let C = x,
    {
      data: te,
      isPending: w,
      isError: T,
      hasNextPage: E,
      isFetching: D,
      isFetchingNextPage: O,
      isFetchNextPageError: k,
      fetchNextPage: A,
      refetch: j,
    } = y(ft),
    ae = y(Ce),
    oe = y(Oe),
    M = ge(tt, `meetings.takeNotes`),
    N = y(We),
    P = y(Ne),
    F = y(we),
    I = P.accountId === F ? P.query : ``,
    L;
  e[8] !== F || e[9] !== t
    ? ((L = (e) => t.set(Ne, { accountId: F, query: e })), (e[8] = F), (e[9] = t), (e[10] = L))
    : (L = e[10]);
  let R = L,
    se,
    ce,
    z,
    ue,
    B,
    fe,
    V,
    H;
  if (
    e[11] !== ae ||
    e[12] !== te?.pages ||
    e[13] !== n ||
    e[14] !== N ||
    e[15] !== r ||
    e[16] !== l ||
    e[17] !== C ||
    e[18] !== u ||
    e[19] !== I ||
    e[20] !== t ||
    e[21] !== R ||
    e[22] !== b ||
    e[23] !== M ||
    e[24] !== oe ||
    e[25] !== d?.title
  ) {
    let i = at(te?.pages, N?.notes);
    B = N?.pending ?? [];
    let o = new Set();
    for (let e of B) {
      let t = `preparing:${e.recordingId}`;
      (o.add(t),
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
    ue = [...i.values()].sort(jt);
    let s;
    e[34] === N
      ? (s = e[35])
      : ((s = N?.bindings.find((e) => e.sessionId === N.activeSessionId)?.noteId), (e[34] = N), (e[35] = s));
    let c = s,
      f;
    e[36] !== c || e[37] !== o || e[38] !== I
      ? ((f = (e) =>
          o.has(e.id) || e.id === c || e.title.toLocaleLowerCase().includes(I.toLocaleLowerCase())),
        (e[36] = c),
        (e[37] = o),
        (e[38] = I),
        (e[39] = f))
      : (f = e[39]);
    let p;
    (e[40] === n
      ? (p = e[41])
      : ((p = (e) => n.formatDate(e.startTime, { month: `long`, day: `numeric`, year: `numeric` })),
        (e[40] = n),
        (e[41] = p)),
      (z = (0, Ft.default)(ue.filter(f), p)));
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
    let h = m,
      _ =
        !ae ||
        oe ||
        N?.starting === !0 ||
        N?.awaitingRecordingCorrelation === !0 ||
        N?.activeSessionId != null,
      v = r.pathname === u && (!C.success || (C.data.mcpAppDeepLink?.path.length ?? 0) === 0),
      y;
    e[44] !== l || e[45] !== u
      ? ((y = () => {
          u != null && l(u, { state: { entrypoint: `global`, mcpAppDeepLink: { path: [], query: [] } } });
        }),
        (e[44] = l),
        (e[45] = u),
        (e[46] = y))
      : (y = e[46]);
    let x = y;
    ((H = `flex min-h-0 flex-1 flex-col select-none`), (ce = xe));
    let S = d?.title,
      w;
    e[47] === S ? (w = e[48]) : ((w = (0, $.jsx)(Me, { children: S })), (e[47] = S), (e[48] = w));
    let T;
    e[49] === n
      ? (T = e[50])
      : ((T = n.formatMessage({
          id: `meetings.sidebar.upcoming`,
          defaultMessage: `Upcoming`,
          description: `Open the Meetings home screen with upcoming calendar meetings`,
        })),
        (e[49] = n),
        (e[50] = T));
    let E;
    e[51] === n
      ? (E = e[52])
      : ((E = n.formatMessage({
          id: `meetings.sidebar.upcoming`,
          defaultMessage: `Upcoming`,
          description: `Open the Meetings home screen with upcoming calendar meetings`,
        })),
        (e[51] = n),
        (e[52] = E));
    let D = v ? `page` : void 0,
      O = u == null,
      k;
    e[53] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((k = (0, $.jsx)(a, { "data-no-autosize": !0, icon: { 16: pe, 20: ne } })), (e[53] = k))
      : (k = e[53]);
    let A;
    e[54] !== x || e[55] !== v || e[56] !== E || e[57] !== D || e[58] !== O
      ? ((A = (0, $.jsx)($e, {
          "aria-label": E,
          "aria-current": D,
          selected: v,
          disabled: O,
          uniform: !0,
          onClick: x,
          children: k,
        })),
        (e[54] = x),
        (e[55] = v),
        (e[56] = E),
        (e[57] = D),
        (e[58] = O),
        (e[59] = A))
      : (A = e[59]);
    let j;
    e[60] !== T || e[61] !== A
      ? ((j = (0, $.jsx)(de, { tooltipContent: T, children: A })), (e[60] = T), (e[61] = A), (e[62] = j))
      : (j = e[62]);
    let P;
    e[63] === n
      ? (P = e[64])
      : ((P = n.formatMessage({
          id: `meetings.sidebar.settings`,
          defaultMessage: `Settings`,
          description: `Open Meetings settings`,
        })),
        (e[63] = n),
        (e[64] = P));
    let F;
    e[65] === n
      ? (F = e[66])
      : ((F = n.formatMessage({
          id: `meetings.sidebar.settings`,
          defaultMessage: `Settings`,
          description: `Open Meetings settings`,
        })),
        (e[65] = n),
        (e[66] = F));
    let L = b == null,
      U;
    e[67] !== t || e[68] !== b
      ? ((U = () => {
          b != null && Ot(t, b);
        }),
        (e[67] = t),
        (e[68] = b),
        (e[69] = U))
      : (U = e[69]);
    let me;
    e[70] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((me = (0, $.jsx)(a, { "data-no-autosize": !0, icon: { 16: re, 20: ee } })), (e[70] = me))
      : (me = e[70]);
    let W;
    e[71] !== F || e[72] !== L || e[73] !== U
      ? ((W = (0, $.jsx)($e, { "aria-label": F, disabled: L, uniform: !0, onClick: U, children: me })),
        (e[71] = F),
        (e[72] = L),
        (e[73] = U),
        (e[74] = W))
      : (W = e[74]);
    let G;
    e[75] !== P || e[76] !== W
      ? ((G = (0, $.jsx)(de, { tooltipContent: P, children: W })), (e[75] = P), (e[76] = W), (e[77] = G))
      : (G = e[77]);
    let K;
    e[78] !== j || e[79] !== G
      ? ((K = (0, $.jsxs)(Fe, { children: [j, G] })), (e[78] = j), (e[79] = G), (e[80] = K))
      : (K = e[80]);
    let ge;
    e[81] !== w || e[82] !== K
      ? ((ge = (0, $.jsxs)(ve, { children: [w, K] })), (e[81] = w), (e[82] = K), (e[83] = ge))
      : (ge = e[83]);
    let _e = M ? h : null,
      q;
    e[84] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((q = (0, $.jsx)(a, { icon: { 16: he, 20: g } })), (e[84] = q))
      : (q = e[84]);
    let J;
    e[85] !== x || e[86] !== t || e[87] !== R
      ? ((J = () => {
          (R(``),
            x(),
            ct(t).finally(() => {
              t.query.invalidate(ft);
            }));
        }),
        (e[85] = x),
        (e[86] = t),
        (e[87] = R),
        (e[88] = J))
      : (J = e[88]);
    let be;
    e[89] !== J || e[90] !== _ || e[91] !== h
      ? ((be = (0, $.jsx)(Le, { icon: q, label: h, disabled: _, onClick: J })),
        (e[89] = J),
        (e[90] = _),
        (e[91] = h),
        (e[92] = be))
      : (be = e[92]);
    let Y;
    e[93] !== _e || e[94] !== be || e[95] !== _ || e[96] !== M
      ? ((Y = (0, $.jsx)(Qe, {
          children: (0, $.jsx)(de, { disabled: _, tooltipContent: _e, shortcut: M, children: be }),
        })),
        (e[93] = _e),
        (e[94] = be),
        (e[95] = _),
        (e[96] = M),
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
    let Ce;
    (e[102] !== I || e[103] !== R || e[104] !== X || e[105] !== Z
      ? ((Ce = (0, $.jsx)(rt, {
          id: `meetings-search`,
          variant: `sidebar-header`,
          searchQuery: I,
          onSearchQueryChange: R,
          label: X,
          placeholder: Z,
        })),
        (e[102] = I),
        (e[103] = R),
        (e[104] = X),
        (e[105] = Z),
        (e[106] = Ce))
      : (Ce = e[106]),
      e[107] !== ge || e[108] !== Y || e[109] !== Ce
        ? ((V = (0, $.jsxs)($.Fragment, { children: [ge, Y, Ce] })),
          (e[107] = ge),
          (e[108] = Y),
          (e[109] = Ce),
          (e[110] = V))
        : (V = e[110]),
      (se = Ae),
      (fe = Object.entries(z).map((e) => {
        let [i, a] = e;
        return (0, $.jsx)(
          De,
          {
            title: i,
            children: (0, $.jsx)(Se, {
              children: a.map((e) => {
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
                    children: (0, $.jsx)(Le, {
                      layout: `summary`,
                      label: e.title,
                      disabled: e.disabled,
                      trailing: (0, $.jsx)(St, { phase: e.phase, ccaWaitUntil: e.ccaWaitUntil }),
                      description: i,
                      isActive: e.summaryPageId != null && r.pathname === le(e.summaryPageId),
                      onClick: () => {
                        let n = t.get(we),
                          i = t.get(Ie);
                        if (
                          u == null ||
                          i == null ||
                          n == null ||
                          !t.get(ye) ||
                          e.summaryPageId == null ||
                          !ie.test(e.summaryPageId) ||
                          e.summaryPageStatus === `unavailable`
                        )
                          return;
                        let a = {
                          sidebarArea: `meetings`,
                          sidebarProductMode: t.get(Be),
                          sidebarProductModeAccountKey: `chatgpt:${n}`,
                          sidebarDestinationId: `mcp:${He(i)}`,
                          spaceSidebarAccountId: n,
                          spacePageOrigin: {
                            accountId: n,
                            pageId: e.summaryPageId,
                            location: {
                              ...r,
                              pathname: u,
                              search: ``,
                              state: { entrypoint: `global`, mcpAppDeepLink: { path: [], query: [] } },
                            },
                          },
                        };
                        l(le(e.summaryPageId), { state: a });
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
      (e[11] = ae),
      (e[12] = te?.pages),
      (e[13] = n),
      (e[14] = N),
      (e[15] = r),
      (e[16] = l),
      (e[17] = C),
      (e[18] = u),
      (e[19] = I),
      (e[20] = t),
      (e[21] = R),
      (e[22] = b),
      (e[23] = M),
      (e[24] = oe),
      (e[25] = d?.title),
      (e[26] = se),
      (e[27] = ce),
      (e[28] = z),
      (e[29] = ue),
      (e[30] = B),
      (e[31] = fe),
      (e[32] = V),
      (e[33] = H));
  } else
    ((se = e[26]),
      (ce = e[27]),
      (z = e[28]),
      (ue = e[29]),
      (B = e[30]),
      (fe = e[31]),
      (V = e[32]),
      (H = e[33]));
  let U;
  e[111] !== w || e[112] !== ue || e[113] !== B
    ? ((U = w && ue.length === 0 && B.length === 0 ? (0, $.jsx)(De, { children: (0, $.jsx)(Mt, {}) }) : null),
      (e[111] = w),
      (e[112] = ue),
      (e[113] = B),
      (e[114] = U))
    : (U = e[114]);
  let W;
  e[115] !== z || e[116] !== E || e[117] !== T || e[118] !== w || e[119] !== B
    ? ((W =
        !w && !T && !E && B.length === 0 && Object.keys(z).length === 0
          ? (0, $.jsx)(De, {
              title: (0, $.jsx)(s, {
                id: `meetings.sidebar.empty`,
                defaultMessage: `No meetings found`,
                description: `Empty meeting search results`,
              }),
              children: null,
            })
          : null),
      (e[115] = z),
      (e[116] = E),
      (e[117] = T),
      (e[118] = w),
      (e[119] = B),
      (e[120] = W))
    : (W = e[120]);
  let G;
  e[121] !== A || e[122] !== E || e[123] !== T || e[124] !== D || e[125] !== w || e[126] !== I
    ? ((G =
        !w && !T && I.trim() !== `` && E
          ? (0, $.jsx)(Re, {
              disabled: D,
              onClick: () => void A(),
              children: (0, $.jsx)(s, {
                id: `meetings.sidebar.searchOlder`,
                defaultMessage: `Search older meetings`,
                description: `Load the next page of older meeting notes and search their titles using the current search text`,
              }),
            })
          : null),
      (e[121] = A),
      (e[122] = E),
      (e[123] = T),
      (e[124] = D),
      (e[125] = w),
      (e[126] = I),
      (e[127] = G))
    : (G = e[127]);
  let K;
  e[128] !== A || e[129] !== T || e[130] !== k || e[131] !== D || e[132] !== j
    ? ((K = T
        ? (0, $.jsx)(Re, {
            disabled: D,
            onClick: () => void (k ? A() : j()),
            children: (0, $.jsx)(s, {
              id: `meetings.sidebar.retry`,
              defaultMessage: `Retry`,
              description: `Retry loading meeting notes`,
            }),
          })
        : null),
      (e[128] = A),
      (e[129] = T),
      (e[130] = k),
      (e[131] = D),
      (e[132] = j),
      (e[133] = K))
    : (K = e[133]);
  let q;
  e[134] !== G || e[135] !== K
    ? ((q = (0, $.jsxs)(_e, { children: [G, K] })), (e[134] = G), (e[135] = K), (e[136] = q))
    : (q = e[136]);
  let J;
  e[137] !== A || e[138] !== E || e[139] !== T || e[140] !== D || e[141] !== O || e[142] !== w || e[143] !== I
    ? ((J =
        !T && !w && I.trim() === ``
          ? (0, $.jsx)(ut, {
              hasNextPage: E,
              isFetchingNextPage: D,
              onLoadNextPage: () => void A(),
              rootMargin: `160px`,
              loadingPlaceholder: O ? (0, $.jsx)(Mt, {}) : null,
            })
          : null),
      (e[137] = A),
      (e[138] = E),
      (e[139] = T),
      (e[140] = D),
      (e[141] = O),
      (e[142] = w),
      (e[143] = I),
      (e[144] = J))
    : (J = e[144]);
  let Y;
  e[145] !== se || e[146] !== W || e[147] !== q || e[148] !== J || e[149] !== fe || e[150] !== U
    ? ((Y = (0, $.jsxs)(se, { children: [fe, U, W, q, J] })),
      (e[145] = se),
      (e[146] = W),
      (e[147] = q),
      (e[148] = J),
      (e[149] = fe),
      (e[150] = U),
      (e[151] = Y))
    : (Y = e[151]);
  let X;
  e[152] !== ce || e[153] !== Y || e[154] !== V
    ? ((X = (0, $.jsx)(ce, { header: V, children: Y })),
      (e[152] = ce),
      (e[153] = Y),
      (e[154] = V),
      (e[155] = X))
    : (X = e[155]);
  let Z;
  return (
    e[156] !== X || e[157] !== H
      ? ((Z = (0, $.jsx)(`div`, { className: H, children: X })), (e[156] = X), (e[157] = H), (e[158] = Z))
      : (Z = e[158]),
    Z
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
        children: (0, $.jsx)(s, {
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
          children: [t, (0, $.jsx)(Se, { children: [72, 55, 68, 45].map(Nt) })],
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
function Nt(e) {
  return (0, $.jsx)(
    Le,
    {
      layout: `summary`,
      disabled: !0,
      "aria-hidden": !0,
      label: (0, $.jsx)(ze, { as: `span`, widthPercent: e }),
      description: (0, $.jsx)(ze, { as: `span`, size: `sm`, widthPercent: 40 }),
    },
    e,
  );
}
var Pt, Ft, $;
function It() {
  return (It = e(() => {
    ((Pt = H()),
      (Ft = t(Ee(), 1)),
      p(),
      ce(),
      C(),
      j(),
      x(),
      dt(),
      Ye(),
      _(),
      it(),
      ht(),
      qe(),
      oe(),
      w(),
      Ue(),
      X(),
      Z(),
      Te(),
      U(),
      I(),
      Y(),
      Pe(),
      Ve(),
      Ke(),
      ke(),
      xt(),
      Dt(),
      kt(),
      Xe(),
      Je(),
      J(),
      ($ = W()));
  }))();
}
It();
export { At as MeetingsSidebar };
//# sourceMappingURL=sidebar-4c83f885ca4e.js.map
