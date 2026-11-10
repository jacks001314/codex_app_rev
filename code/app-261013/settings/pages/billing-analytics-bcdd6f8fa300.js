import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $It as r,
  ADt as i,
  AO as a,
  CO as o,
  Cot as s,
  Cwt as c,
  DDt as l,
  DV as u,
  Dut as d,
  EB as f,
  EPt as p,
  FD as m,
  Fat as h,
  IDt as g,
  JC as _,
  JR as v,
  Jbt as y,
  LLt as b,
  LT as x,
  Mz as S,
  ND as C,
  Nz as w,
  Pat as T,
  Pxt as E,
  RT as D,
  Sj as O,
  Swt as k,
  TDt as A,
  TJ as j,
  TLt as M,
  TO as N,
  Twt as P,
  UD as F,
  VDt as ee,
  Xot as I,
  YC as L,
  YR as R,
  Yot as z,
  ZC as te,
  Zxt as B,
  _It as ne,
  _Mt as re,
  _wt as ie,
  cz as ae,
  dj as oe,
  ds as se,
  fLt as ce,
  frt as le,
  fs as ue,
  gMt as de,
  gs as fe,
  gwt as V,
  hrt as pe,
  hs as me,
  hz as he,
  iot as H,
  iw as ge,
  jDt as U,
  ls as _e,
  ms as W,
  mz as ve,
  oIt as ye,
  pIt as be,
  pLt as xe,
  pRt as Se,
  ps as Ce,
  qC as G,
  rst as we,
  sj as Te,
  sz as Ee,
  t3 as De,
  tw as Oe,
  us as ke,
  vzt as Ae,
  wot as je,
  wwt as Me,
  xMt as K,
  yj as Ne,
  yzt as Pe,
  zU as Fe,
  zxt as q,
} from "./app-shared-bbfeca5e5737.js";
import {
  A8t as Ie,
  EXt as Le,
  Ek as Re,
  Emr as ze,
  Fin as Be,
  H1 as Ve,
  Hin as He,
  P0n as Ue,
  QP as We,
  QPr as Ge,
  Tk as J,
  Tmr as Ke,
  V1 as qe,
  XPr as Je,
  Xd as Ye,
  YPr as Xe,
  Yd as Ze,
  a1 as Qe,
  dSr as $e,
  eDr as et,
  eFr as tt,
  fur as nt,
  hp as rt,
  i1 as it,
  iPr as at,
  j8t as ot,
  mp as st,
  nDr as ct,
  oFr as lt,
  pur as ut,
  qdr as dt,
  sPr as ft,
  tF as pt,
  uSr as mt,
  ubr as ht,
  vCt as gt,
  yCt as _t,
} from "./app-initial-5851df3f6cb1.js";
import { c as vt, g as yt, h as bt, s as xt } from "./CartesianChart-f1064596079e.js";
import { n as St, t as Ct } from "./Tooltip-f42f98e527a6.js";
import { a as wt, i as Tt, n as Et, o as Dt, r as Ot, t as kt } from "./BarChart-964e7b8db80e.js";
import { n as At, t as jt } from "./AreaChart-e2014620358e.js";
import {
  _ as Mt,
  a as Nt,
  c as Pt,
  d as Ft,
  f as It,
  g as Lt,
  h as Rt,
  i as zt,
  l as Bt,
  m as Vt,
  n as Ht,
  o as Ut,
  p as Wt,
  r as Gt,
  t as Kt,
  u as qt,
} from "./activity-chart-d7e6ae6b8d7d.js";
import { n as Jt, t as Yt } from "./settings-loading-row-bf72bf2df25d.js";
import { a as Xt, r as Zt } from "./visualization-theme-bedd32a367a0.js";
import { i as Qt, n as $t } from "./usage-data-188598c9d599.js";
import { n as en, r as tn, t as nn } from "./thread-usage-breakdown-493f7d53d79c.js";
import {
  a as rn,
  c as an,
  d as on,
  i as sn,
  l as cn,
  n as ln,
  o as un,
  s as dn,
  t as fn,
  u as pn,
} from "./queries-4983d9ee034f.js";
import {
  A as mn,
  C as hn,
  F as gn,
  I as _n,
  L as vn,
  M as yn,
  N as bn,
  O as xn,
  P as Sn,
  S as Cn,
  _ as wn,
  a as Tn,
  b as En,
  c as Dn,
  d as On,
  f as kn,
  g as An,
  h as jn,
  i as Mn,
  j as Nn,
  k as Pn,
  m as Fn,
  o as In,
  p as Ln,
  r as Rn,
  s as zn,
  t as Bn,
  u as Vn,
  x as Hn,
  y as Un,
} from "./settings-analytics-telemetry-3391e47ea62e.js";
var Wn, Gn, Kn;
function qn() {
  return (qn = e(() => {
    (E(),
      Je(),
      tt(),
      je(),
      lt(),
      h(),
      (Wn = 100),
      (Gn = 2592e6),
      (Kn = B(s, ({ accountId: e, userId: t }, { get: n, scope: r }) => ({
        enabled: n(Ge, H) != null,
        queryKey: [`top-consuming-chats`, e, t, H],
        queryFn: async ({ signal: e }) => {
          let t = (Date.now() - Gn) / 1e3,
            n = [],
            i = new Set(),
            a = null;
          do {
            e.throwIfAborted();
            let o = await Xe(r, H).sendRequest(
              `thread/list`,
              {
                archived: !1,
                cursor: a,
                limit: Wn,
                modelProviders: null,
                sortKey: `updated_at`,
                useStateDbOnly: !0,
              },
              { priority: `background`, source: `thread_list` },
            );
            e.throwIfAborted();
            let s = o.nextCursor;
            if (s != null && i.has(s)) throw Error(`App Server repeated a thread list cursor`);
            let c = o.data.filter((e) => e.updatedAt >= t);
            if ((n.push(...c), c.length < o.data.length)) break;
            (s != null && i.add(s), (a = s));
          } while (a != null);
          return n;
        },
        refetchInterval: T.ONE_MINUTE,
        retry: !1,
        staleTime: T.ONE_MINUTE,
      }))));
  }))();
}
function Jn(e) {
  let t = (0, $n.c)(48),
    { accountId: r, isUsdWorkspace: i, isPolling: a, userId: o } = e,
    s = i !== void 0 && i,
    c = a === void 0 || a,
    [l, u] = (0, er.useState)(!1),
    [d, f] = (0, er.useState)(!1),
    p;
  t[0] !== r || t[1] !== o
    ? ((p = { accountId: r, userId: o }), (t[0] = r), (t[1] = o), (t[2] = p))
    : (p = t[2]);
  let m = c || !l,
    h;
  t[3] === m ? (h = t[4]) : ((h = { enabled: m }), (t[3] = m), (t[4] = h));
  let { data: _, isError: v, isLoading: b, isSuccess: x, refetch: S } = q(Kn, p, h),
    C = s ? `usd` : `credit`,
    w;
  t[5] === _ ? (w = t[6]) : ((w = _?.map(Zn) ?? []), (t[5] = _), (t[6] = w));
  let T;
  t[7] !== r || t[8] !== C || t[9] !== w
    ? ((T = { accountId: r, balanceUnit: C, conversationIds: w }),
      (t[7] = r),
      (t[8] = C),
      (t[9] = w),
      (t[10] = T))
    : (T = t[10]);
  let E = c || !d,
    D;
  t[11] === E ? (D = t[12]) : ((D = { enabled: E }), (t[11] = E), (t[12] = D));
  let { data: O, isError: k, isLoading: A, isSuccess: j, refetch: M } = q(Qt, T, D);
  (!l && (x || v) && u(!0), !d && (v || (x && (j || k))) && f(!0));
  let [N, P] = (0, er.useState)(!1),
    F,
    ee,
    I,
    R,
    z,
    te,
    B;
  if (
    t[13] !== v ||
    t[14] !== b ||
    t[15] !== k ||
    t[16] !== A ||
    t[17] !== s ||
    t[18] !== _ ||
    t[19] !== S ||
    t[20] !== M ||
    t[21] !== N ||
    t[22] !== O
  ) {
    B = _?.flatMap((e) => {
      let t = O?.get(e.id);
      return t == null ? [] : [{ conversationId: y(e.id), title: $e(e, mt), usage: t }];
    }).sort((e, t) =>
      s ? (t.usage.costUsd ?? 0) - (e.usage.costUsd ?? 0) : t.usage.creditsUsed - e.usage.creditsUsed,
    );
    let e = b || (_ != null && _.length > 0 && A),
      r = v || k || (_ != null && _.length > 0 && (O == null || B?.length === 0)),
      i = s || (B?.some(Xn) ?? !1);
    I = J;
    let a;
    (t[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Y.jsx)(g, {
          id: `settings.usage.topConsumingChats.title`,
          defaultMessage: `Top chats`,
          description: `Title for the highest-usage Work and Codex chats`,
        })),
        (t[30] = a))
      : (a = t[30]),
      t[31] === s
        ? (te = t[32])
        : ((te = (0, Y.jsx)(J.Header, {
            title: a,
            subtitle: s
              ? (0, Y.jsx)(g, {
                  id: `settings.usage.topConsumingChats.usdSubtitle`,
                  defaultMessage: `Work and Codex chats active in the last 30 days ranked by lifetime spend`,
                  description: `Explains that recently active Work and Codex chats are ranked by their native USD spend`,
                })
              : (0, Y.jsx)(g, {
                  id: `settings.usage.topConsumingChats.subtitle`,
                  defaultMessage: `Work and Codex chats active in the last 30 days ranked by lifetime credits`,
                  description: `Explains that recently active Work and Codex chats are ranked by lifetime credit usage`,
                }),
          })),
          (t[31] = s),
          (t[32] = te)),
      (ee = J.Content),
      (z = `gap-3`),
      (F = G),
      (R = e
        ? (0, Y.jsx)(Yt, {
            children: (0, Y.jsx)(g, {
              id: `settings.usage.topConsumingChats.loading`,
              defaultMessage: `Loading chat usage…`,
              description: `Loading state while fetching the highest-credit Codex chats`,
            }),
          })
        : r
          ? (0, Y.jsx)(Oe, {
              label: (0, Y.jsx)(g, {
                id: `settings.usage.topConsumingChats.error`,
                defaultMessage: `Could not load chat usage`,
                description: `Error state when recent Codex chat usage cannot be loaded`,
              }),
              control: (0, Y.jsx)(n, {
                color: `secondary`,
                size: `toolbar`,
                onClick: () => {
                  v ? S() : M();
                },
                children: (0, Y.jsx)(g, {
                  id: `settings.usage.topConsumingChats.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry button for loading top consuming Codex chats`,
                }),
              }),
            })
          : B == null || B.length === 0
            ? (0, Y.jsx)(st, {
                layout: `settings-row`,
                children: (0, Y.jsx)(g, {
                  id: `settings.usage.topConsumingChats.empty`,
                  defaultMessage: `No chat activity during this period`,
                  description: `Empty state when no Codex chat has recorded activity during the displayed usage period`,
                }),
              })
            : (0, Y.jsxs)(`div`, {
                className: `${L} pb-2`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `grid h-[37px] grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-xs leading-4 font-medium text-secondary after:hidden`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: i && !s ? void 0 : `col-span-2`,
                        children: (0, Y.jsx)(g, {
                          id: `settings.usage.topConsumingChats.chatColumn`,
                          defaultMessage: `Chat`,
                          description: `Column heading for the title of a high-usage Codex chat`,
                        }),
                      }),
                      i
                        ? (0, Y.jsx)(`span`, {
                            className: `text-end`,
                            children: s
                              ? (0, Y.jsx)(g, {
                                  id: `settings.usage.topConsumingChats.nativeSpendColumn`,
                                  defaultMessage: `Spent`,
                                  description: `Column heading for native US dollar spend on a Codex chat`,
                                })
                              : (0, Y.jsx)(g, {
                                  id: `settings.usage.topConsumingChats.estimatedSpendColumn`,
                                  defaultMessage: `Est. $ spent`,
                                  description: `Column heading for estimated US dollars spent on a Codex chat`,
                                }),
                          })
                        : null,
                      s
                        ? null
                        : (0, Y.jsx)(`span`, {
                            className: `text-end`,
                            children: (0, Y.jsx)(g, {
                              id: `settings.usage.topConsumingChats.creditsColumn`,
                              defaultMessage: `Credits used`,
                              description: `Column heading for the lifetime credits used by a Codex chat`,
                            }),
                          }),
                    ],
                  }),
                  B.slice(0, N ? void 0 : tr).map((e) =>
                    (0, Y.jsx)(Qn, { isUsdWorkspace: s, showEstimatedSpend: i, task: e }, e.conversationId),
                  ),
                ],
              })),
      (t[13] = v),
      (t[14] = b),
      (t[15] = k),
      (t[16] = A),
      (t[17] = s),
      (t[18] = _),
      (t[19] = S),
      (t[20] = M),
      (t[21] = N),
      (t[22] = O),
      (t[23] = F),
      (t[24] = ee),
      (t[25] = I),
      (t[26] = R),
      (t[27] = z),
      (t[28] = te),
      (t[29] = B));
  } else ((F = t[23]), (ee = t[24]), (I = t[25]), (R = t[26]), (z = t[27]), (te = t[28]), (B = t[29]));
  let ne;
  t[33] !== F || t[34] !== R
    ? ((ne = (0, Y.jsx)(F, { children: R })), (t[33] = F), (t[34] = R), (t[35] = ne))
    : (ne = t[35]);
  let re;
  t[36] !== N || t[37] !== B
    ? ((re =
        B != null && B.length > tr
          ? (0, Y.jsx)(n, {
              color: `secondary`,
              className: `self-start`,
              size: `compact`,
              onClick: () => {
                P(Yn);
              },
              children: N
                ? (0, Y.jsx)(g, {
                    id: `settings.usage.topConsumingChats.seeLess`,
                    defaultMessage: `See less`,
                    description: `Action to collapse the full list of top consuming Codex chats`,
                  })
                : (0, Y.jsx)(g, {
                    id: `settings.usage.topConsumingChats.seeMore`,
                    defaultMessage: `See more`,
                    description: `Action to expand the full list of top consuming Codex chats`,
                  }),
            })
          : null),
      (t[36] = N),
      (t[37] = B),
      (t[38] = re))
    : (re = t[38]);
  let ie;
  t[39] !== ee || t[40] !== z || t[41] !== ne || t[42] !== re
    ? ((ie = (0, Y.jsxs)(ee, { className: z, children: [ne, re] })),
      (t[39] = ee),
      (t[40] = z),
      (t[41] = ne),
      (t[42] = re),
      (t[43] = ie))
    : (ie = t[43]);
  let ae;
  return (
    t[44] !== I || t[45] !== te || t[46] !== ie
      ? ((ae = (0, Y.jsxs)(I, { children: [te, ie] })), (t[44] = I), (t[45] = te), (t[46] = ie), (t[47] = ae))
      : (ae = t[47]),
    ae
  );
}
function Yn(e) {
  return !e;
}
function Xn(e) {
  let { usage: t } = e;
  return t.costUsd != null;
}
function Zn(e) {
  let { id: t } = e;
  return y(t);
}
function Qn(e) {
  let t = (0, $n.c)(34),
    { isUsdWorkspace: n, showEstimatedSpend: r, task: i } = e,
    a = _t(),
    o;
  t[0] === i.conversationId
    ? (o = t[1])
    : ((o = { hostId: H, threadId: i.conversationId }), (t[0] = i.conversationId), (t[1] = o));
  let s = q(Ve, o),
    c = (0, er.useRef)(null),
    u = (0, er.useRef)(null),
    d = (0, er.useRef)(!1),
    f = s ?? i.title,
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () =>
        Array.from(u.current?.querySelectorAll(`button:not([disabled]):not([tabindex="-1"])`) ?? [])),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    h;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        d.current = e;
      }),
      (t[3] = h))
    : (h = t[3]);
  let _;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (e) => {
        if (e.key === `Escape`) {
          (e.preventDefault(), c.current?.focus(), ve());
          return;
        }
        if (e.key !== `Tab`) return;
        let t = m(),
          n = t[0],
          r = t.at(-1);
        if (e.shiftKey && e.target === n) {
          (e.preventDefault(), c.current?.focus());
          return;
        }
        if (!e.shiftKey && e.target === r) {
          let t =
            c.current?.nextElementSibling ?? c.current?.parentElement?.parentElement?.nextElementSibling;
          if (!(t instanceof HTMLButtonElement)) return;
          (e.preventDefault(), ve(), t.focus());
        }
      }),
      (t[4] = _))
    : (_ = t[4]);
  let v;
  t[5] !== i.usage || t[6] !== f
    ? ((v = (0, Y.jsx)(`div`, {
        ref: u,
        className: `w-96 max-w-full`,
        role: `presentation`,
        onKeyDown: _,
        children: (0, Y.jsx)(en, { title: f, usage: i.usage }),
      })),
      (t[5] = i.usage),
      (t[6] = f),
      (t[7] = v))
    : (v = t[7]);
  let y;
  t[8] !== a || t[9] !== i.conversationId
    ? ((y = (e) => {
        (e.preventDefault(), ve(), a(i.conversationId));
      }),
      (t[8] = a),
      (t[9] = i.conversationId),
      (t[10] = y))
    : (y = t[10]);
  let b;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e) => {
        if (e.key === `Escape` && d.current) {
          (e.preventDefault(), ve());
          return;
        }
        if (e.key !== `Tab` || e.shiftKey) return;
        let t = m()[0];
        t != null && (e.preventDefault(), t.focus());
      }),
      (t[11] = b))
    : (b = t[11]);
  let x = r && !n ? `flex min-w-0` : `col-span-2 flex min-w-0`,
    S;
  t[12] === f
    ? (S = t[13])
    : ((S =
        f ??
        (0, Y.jsx)(g, {
          id: `settings.usage.topConsumingChats.untitled`,
          defaultMessage: `Untitled chat`,
          description: `Fallback label for a Codex chat that does not have a title`,
        })),
      (t[12] = f),
      (t[13] = S));
  let C;
  t[14] === S
    ? (C = t[15])
    : ((C = (0, Y.jsx)(it, {
        className: `min-w-0 flex-1 underline underline-offset-2`,
        animateOnGroupHover: !0,
        children: S,
      })),
      (t[14] = S),
      (t[15] = C));
  let w;
  t[16] !== C || t[17] !== x
    ? ((w = (0, Y.jsx)(`span`, { className: x, children: C })), (t[16] = C), (t[17] = x), (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== n || t[20] !== r || t[21] !== i.usage
    ? ((T = r
        ? (0, Y.jsx)(`span`, {
            className: `text-end text-secondary`,
            children:
              i.usage.costUsd == null
                ? null
                : (0, Y.jsx)(l, {
                    value: i.usage.costUsd,
                    style: `currency`,
                    currency: `USD`,
                    maximumFractionDigits: n && Math.abs(i.usage.costUsd) < 0.01 ? 6 : 2,
                  }),
          })
        : null),
      (t[19] = n),
      (t[20] = r),
      (t[21] = i.usage),
      (t[22] = T))
    : (T = t[22]);
  let E;
  t[23] !== n || t[24] !== i.usage
    ? ((E = n
        ? null
        : (0, Y.jsx)(`span`, {
            className: `text-end text-default`,
            children: (0, Y.jsx)(l, { value: i.usage.creditsUsed, maximumFractionDigits: 0 }),
          })),
      (t[23] = n),
      (t[24] = i.usage),
      (t[25] = E))
    : (E = t[25]);
  let D;
  t[26] !== w || t[27] !== T || t[28] !== E || t[29] !== y
    ? ((D = (0, Y.jsxs)(`button`, {
        className: `group grid h-[35px] w-full cursor-interaction grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-start text-xs leading-4 select-none hover:bg-primary-ghost-hover not-last:hover:after:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring has-[+button:hover]:after:opacity-0`,
        type: `button`,
        onClick: y,
        onKeyDown: b,
        children: [w, T, E],
      })),
      (t[26] = w),
      (t[27] = T),
      (t[28] = E),
      (t[29] = y),
      (t[30] = D))
    : (D = t[30]);
  let O;
  return (
    t[31] !== D || t[32] !== v
      ? ((O = (0, Y.jsx)(Ee, {
          align: `center`,
          delayDuration: 0,
          interactive: !0,
          onOpenChange: h,
          side: `top`,
          sideOffset: 8,
          tooltipContent: v,
          tooltipMaxWidth: `min(24rem, calc(100vw - 16px))`,
          tooltipBodyClassName: `overflow-y-auto`,
          triggerRef: c,
          variant: `rich`,
          children: D,
        })),
        (t[31] = D),
        (t[32] = v),
        (t[33] = O))
      : (O = t[33]),
    O
  );
}
var $n, er, Y, tr;
function nr() {
  return (nr = e(() => {
    (($n = Ae()),
      ht(),
      E(),
      we(),
      (er = Pe()),
      U(),
      De(),
      rt(),
      Qe(),
      ae(),
      he(),
      Re(),
      Jt(),
      ge(),
      te(),
      _(),
      lt(),
      qe(),
      $t(),
      gt(),
      qn(),
      tn(),
      (Y = K()),
      (tr = 5));
  }))();
}
function rr(e, t) {
  return t.formatDate(new Date(e), {
    month: `short`,
    day: `numeric`,
    hour: `numeric`,
    minute: `2-digit`,
    timeZone: `UTC`,
    timeZoneName: `short`,
  });
}
function ir(e, t) {
  return e == null || t == null ? null : Date.parse(e) <= Date.parse(t) ? e : t;
}
function ar({ current: e, days: t, enabled: n, fallback: r = [], hasManualSelection: i, hasResolved: a }) {
  let o =
    n &&
    t === 7 &&
    !i &&
    !a &&
    e.length > 0 &&
    e.every(({ isError: e, isLoading: t, total: n }) => !e && !t && n === 0);
  if (!o || r.length === 0) return { shouldProbe: o, shouldResolve: !1, shouldSelectThirtyDays: !1 };
  let s = r.some(({ total: e }) => (e ?? 0) > 0);
  return {
    shouldProbe: o,
    shouldResolve: s || r.every(({ isError: e, isLoading: t, total: n }) => e || (!t && n != null)),
    shouldSelectThirtyDays: s,
  };
}
function or(e) {
  let t = (0, ur.c)(107),
    { isActive: n, isPolling: r, reduceMotion: i, consumerAnalytics: a, scope: o } = e,
    s = r === void 0 || r,
    c = a !== void 0 && a,
    l = (0, dr.use)(xn)?.scope ?? null,
    u = ut(),
    d = ee(),
    [f, p] = (0, dr.useState)(7),
    [m, h] = (0, dr.useState)(`model`),
    [_, v] = (0, dr.useState)(null),
    y = u.accountId ?? null,
    b = u.userId ?? null,
    x;
  t[0] !== o || t[1] !== y || t[2] !== b
    ? ((x = { accountId: y, userId: b, scope: o, hasManualSelection: !1, hasResolved: !1 }),
      (t[0] = o),
      (t[1] = y),
      (t[2] = b),
      (t[3] = x))
    : (x = t[3]);
  let [S, C] = (0, dr.useState)(x),
    w = S.accountId === (u.accountId ?? null) && S.userId === (u.userId ?? null) && S.scope === o;
  w ||
    (C({
      accountId: u.accountId ?? null,
      userId: u.userId ?? null,
      scope: o,
      hasManualSelection: !1,
      hasResolved: !1,
    }),
    p(7),
    v(null));
  let [T, E] = (0, dr.useState)(!1),
    D;
  t[4] !== u || t[5] !== f || t[6] !== n || t[7] !== s || t[8] !== o
    ? ((D = rn({ isPolling: s, auth: u, days: f, enabled: n, scope: o })),
      (t[4] = u),
      (t[5] = f),
      (t[6] = n),
      (t[7] = s),
      (t[8] = o),
      (t[9] = D))
    : (D = t[9]);
  let O = I(D),
    { data: k, isLoading: A, isError: j, refetch: M } = O,
    N;
  t[10] !== u || t[11] !== f || t[12] !== n || t[13] !== s || t[14] !== o
    ? ((N = sn({ isPolling: s, auth: u, days: f, enabled: n, scope: o })),
      (t[10] = u),
      (t[11] = f),
      (t[12] = n),
      (t[13] = s),
      (t[14] = o),
      (t[15] = N))
    : (N = t[15]);
  let P = I(N),
    { data: F, isLoading: L, isError: R, refetch: z } = P,
    te = {
      current: [
        { total: k?.byModel.total, isLoading: A, isError: j },
        ...(o === `business` ? [{ total: F?.total, isLoading: L, isError: R }] : []),
      ],
      days: f,
      enabled: n && w,
      ...S,
    },
    { shouldProbe: B } = ar(te),
    {
      data: ne,
      isLoading: re,
      isError: ie,
    } = I(rn({ isPolling: s, auth: u, days: 30, enabled: B, scope: o })),
    ae = B && o === `business` && !re && !ie && ne?.byModel.total === 0,
    {
      data: oe,
      isLoading: se,
      isError: ce,
    } = I(sn({ isPolling: s, auth: u, days: 30, enabled: ae, scope: o })),
    le = ar({
      ...te,
      fallback: [
        { total: ne?.byModel.total, isLoading: re, isError: ie },
        ...(ae ? [{ total: oe?.total, isLoading: se, isError: ce }] : []),
      ],
    }),
    ue = (B && !le.shouldResolve) || (o === `business` && L && !j);
  le.shouldResolve && (C(cr), le.shouldSelectThirtyDays && p(30));
  let [de, fe] = (0, dr.useState)(null),
    V = de?.accountId === (u.accountId ?? null) && de.userId === (u.userId ?? null),
    pe = A && !j && k == null && V && de.data.turns != null,
    me = L && !R && F == null && V && de.data.linesOfCode != null,
    he = pe ? de.data.turns : k,
    H = me ? de.data.linesOfCode : F,
    ge = he?.[m === `model` ? `byModel` : `bySurface`],
    U = V && (de.data.turns?.[m === `model` ? `byModel` : `bySurface`].total ?? 0) > 0 && ge?.total === 0,
    _e = V && (de.data.linesOfCode?.total ?? 0) > 0 && H?.total === 0,
    W;
  t[16] !== n || t[17] !== P || t[18] !== o || t[19] !== O
    ? ((W = n
        ? (0, fr.jsx)(Bn, { chart: `product_activity`, queries: [O, ...(o === `business` ? [P] : [])] })
        : null),
      (t[16] = n),
      (t[17] = P),
      (t[18] = o),
      (t[19] = O),
      (t[20] = W))
    : (W = t[20]);
  let ve, ye;
  t[21] === c
    ? ((ve = t[22]), (ye = t[23]))
    : ((ye = c
        ? (0, fr.jsx)(g, {
            id: `settings.usage.billing.messages.sectionTitle`,
            defaultMessage: `Messages`,
            description: `Heading for the Consumer message count section`,
          })
        : (0, fr.jsx)(g, {
            id: `settings.usage.billing.productActivity.title`,
            defaultMessage: `Product activity`,
            description: `Heading for a Consumer or Business user's Codex conversation turns and, when available to Business users, lines of code`,
          })),
      (ve = c
        ? (0, fr.jsx)(g, {
            id: `settings.usage.billing.messages.subtitle`,
            defaultMessage: `Track the number of messages sent over time`,
            description: `Description for Consumer message counts grouped by model or product surface`,
          })
        : (0, fr.jsx)(g, {
            id: `settings.usage.billing.productActivity.subtitle`,
            defaultMessage: `See how your activity varies across products and models`,
            description: `Description for Codex activity charts showing personal conversation turns and eligible lines of code grouped by product surface or AI model`,
          })),
      (t[21] = c),
      (t[22] = ve),
      (t[23] = ye));
  let be;
  t[24] !== c || t[25] !== d
    ? ((be = c
        ? d.formatMessage({
            id: `settings.usage.billing.messages.periodLabel`,
            defaultMessage: `Messages time range`,
            description: `Accessible label for the Consumer message count date-range selector`,
          })
        : d.formatMessage({
            id: `settings.usage.billing.turns.periodLabel`,
            defaultMessage: `Turns and lines of code time range`,
            description: `Accessible label for the shared seven-day or thirty-day time range used by the turns and lines-of-code charts`,
          })),
      (t[24] = c),
      (t[25] = d),
      (t[26] = be))
    : (be = t[26]);
  let xe;
  t[27] !== l ||
  t[28] !== u.accountId ||
  t[29] !== u.userId ||
  t[30] !== f ||
  t[31] !== H ||
  t[32] !== ge?.total ||
  t[33] !== he
    ? ((xe = (e) => {
        (e !== f && Nn(l, `product_activity`, e),
          E(he != null && ge?.total === 0),
          fe(
            (ge?.total ?? 0) > 0 || (H?.total ?? 0) > 0
              ? {
                  accountId: u.accountId ?? null,
                  data: { turns: he, linesOfCode: H },
                  userId: u.userId ?? null,
                }
              : null,
          ),
          C(sr),
          p(e));
      }),
      (t[27] = l),
      (t[28] = u.accountId),
      (t[29] = u.userId),
      (t[30] = f),
      (t[31] = H),
      (t[32] = ge?.total),
      (t[33] = he),
      (t[34] = xe))
    : (xe = t[34]);
  let Se;
  t[35] !== f || t[36] !== be || t[37] !== xe
    ? ((Se = (0, fr.jsx)(Vt, { ariaLabel: be, days: f, onChange: xe })),
      (t[35] = f),
      (t[36] = be),
      (t[37] = xe),
      (t[38] = Se))
    : (Se = t[38]);
  let Ce;
  t[39] !== c || t[40] !== d
    ? ((Ce = c
        ? d.formatMessage({
            id: `settings.usage.billing.messages.breakdownLabel`,
            defaultMessage: `Group messages by model or surface`,
            description: `Accessible label for grouping Consumer messages by AI model or Codex product surface`,
          })
        : d.formatMessage({
            id: `settings.usage.billing.turns.breakdownLabel`,
            defaultMessage: `Group turns by model or surface`,
            description: `Accessible label for the selector that groups the turns chart by AI model or Codex product surface`,
          })),
      (t[39] = c),
      (t[40] = d),
      (t[41] = Ce))
    : (Ce = t[41]);
  let G;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = { id: `model`, label: (0, fr.jsx)(Wt, { breakdown: `model` }) }), (t[42] = G))
    : (G = t[42]);
  let we;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = [G, { id: `surface`, label: (0, fr.jsx)(Wt, { breakdown: `surface` }) }]), (t[43] = we))
    : (we = t[43]);
  let Te;
  t[44] !== l || t[45] !== m
    ? ((Te = (e) => {
        (e !== m && mn(l, `product_activity`, e), v(m), h(e));
      }),
      (t[44] = l),
      (t[45] = m),
      (t[46] = Te))
    : (Te = t[46]);
  let Ee;
  t[47] !== m || t[48] !== Ce || t[49] !== Te
    ? ((Ee = (0, fr.jsx)(Ze, { ariaLabel: Ce, options: we, selectedId: m, variant: `inset`, onSelect: Te })),
      (t[47] = m),
      (t[48] = Ce),
      (t[49] = Te),
      (t[50] = Ee))
    : (Ee = t[50]);
  let De;
  t[51] !== Se || t[52] !== Ee
    ? ((De = (0, fr.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-end gap-2`,
        children: [Se, Ee],
      })),
      (t[51] = Se),
      (t[52] = Ee),
      (t[53] = De))
    : (De = t[53]);
  let Oe;
  t[54] !== ve || t[55] !== De || t[56] !== ye
    ? ((Oe = (0, fr.jsx)(J.Header, {
        className: `max-sm:flex-col max-sm:items-stretch`,
        actionsAlignment: `end`,
        title: ye,
        subtitle: ve,
        actions: De,
      })),
      (t[54] = ve),
      (t[55] = De),
      (t[56] = ye),
      (t[57] = Oe))
    : (Oe = t[57]);
  let ke;
  t[58] !== c || t[59] !== H?.total || t[60] !== he || t[61] !== A || t[62] !== T || t[63] !== o
    ? ((ke =
        he != null || (A && T)
          ? (0, fr.jsx)(lr, { consumerAnalytics: c, scope: o, hasNoLinesOfCode: H?.total === 0 })
          : void 0),
      (t[58] = c),
      (t[59] = H?.total),
      (t[60] = he),
      (t[61] = A),
      (t[62] = T),
      (t[63] = o),
      (t[64] = ke))
    : (ke = t[64]);
  let Ae = !i && ((_ != null && _ !== m) || (k != null && V && de.data.turns != null && de.data.turns !== k)),
    je = A || ue,
    Me;
  t[65] === Symbol.for(`react.memo_cache_sentinel`) ? ((Me = () => v(null)), (t[65] = Me)) : (Me = t[65]);
  let K;
  t[66] === M
    ? (K = t[67])
    : ((K = () => {
        M();
      }),
      (t[66] = M),
      (t[67] = K));
  let Ne;
  t[68] !== j || t[69] !== pe || t[70] !== T || t[71] !== i || t[72] !== Ae || t[73] !== je || t[74] !== K
    ? ((Ne = {
        animateDataChanges: Ae,
        isError: j,
        isLoading: je,
        isUpdating: pe,
        preserveEmptyLayout: T,
        reduceMotion: i,
        onAnimationEnd: Me,
        onRetry: K,
      }),
      (t[68] = j),
      (t[69] = pe),
      (t[70] = T),
      (t[71] = i),
      (t[72] = Ae),
      (t[73] = je),
      (t[74] = K),
      (t[75] = Ne))
    : (Ne = t[75]);
  let Pe;
  t[76] === c
    ? (Pe = t[77])
    : ((Pe = c
        ? (0, fr.jsx)(g, {
            id: `settings.usage.billing.messages.title`,
            defaultMessage: `Messages`,
            description: `Metric label for the Consumer message count chart; the underlying conversation-turn count is unchanged`,
          })
        : (0, fr.jsx)(g, {
            id: `settings.usage.billing.turns.title`,
            defaultMessage: `Turns`,
            description: `Label for the chart showing the number of Codex conversation turns`,
          })),
      (t[76] = c),
      (t[77] = Pe));
  let Fe;
  t[78] !== m ||
  t[79] !== c ||
  t[80] !== ge ||
  t[81] !== U ||
  t[82] !== o ||
  t[83] !== ke ||
  t[84] !== Ne ||
  t[85] !== Pe
    ? ((Fe = (0, fr.jsx)(Kt, {
        analyticsChart: `product_activity`,
        consumerAnalytics: c,
        breakdown: m,
        data: ge,
        emptyMessage: ke,
        preservePopulatedCardLayout: U,
        scope: o,
        status: Ne,
        title: Pe,
        unit: `turns`,
      })),
      (t[78] = m),
      (t[79] = c),
      (t[80] = ge),
      (t[81] = U),
      (t[82] = o),
      (t[83] = ke),
      (t[84] = Ne),
      (t[85] = Pe),
      (t[86] = Fe))
    : (Fe = t[86]);
  let q;
  t[87] !== c ||
  t[88] !== H ||
  t[89] !== R ||
  t[90] !== L ||
  t[91] !== me ||
  t[92] !== F ||
  t[93] !== _e ||
  t[94] !== de ||
  t[95] !== V ||
  t[96] !== i ||
  t[97] !== z ||
  t[98] !== o
    ? ((q =
        o === `business` && ((H?.total ?? 0) > 0 || _e || R)
          ? (0, fr.jsx)(Kt, {
              analyticsChart: `product_activity`,
              consumerAnalytics: c,
              data: H,
              emptyMessage: (0, fr.jsx)(g, {
                id: `settings.usage.billing.linesOfCode.empty`,
                defaultMessage: `No lines of code during this period`,
                description: `Empty state for a Business user's lines-of-code chart when the selected period has no lines of code after a previously populated period`,
              }),
              preservePopulatedCardLayout: _e,
              scope: o,
              status: {
                animateDataChanges:
                  !i && F != null && V && de.data.linesOfCode != null && de.data.linesOfCode !== F,
                isError: R,
                isLoading: L,
                isUpdating: me,
                reduceMotion: i,
                onRetry: () => {
                  z();
                },
              },
              title: (0, fr.jsx)(g, {
                id: `settings.usage.billing.linesOfCode.title`,
                defaultMessage: `Lines of code`,
                description: `Label for the chart showing lines of code added through Codex during the selected time range`,
              }),
              unit: `lines`,
            })
          : null),
      (t[87] = c),
      (t[88] = H),
      (t[89] = R),
      (t[90] = L),
      (t[91] = me),
      (t[92] = F),
      (t[93] = _e),
      (t[94] = de),
      (t[95] = V),
      (t[96] = i),
      (t[97] = z),
      (t[98] = o),
      (t[99] = q))
    : (q = t[99]);
  let Ie;
  t[100] !== Fe || t[101] !== q
    ? ((Ie = (0, fr.jsxs)(J.Content, { className: `gap-3`, children: [Fe, q] })),
      (t[100] = Fe),
      (t[101] = q),
      (t[102] = Ie))
    : (Ie = t[102]);
  let Le;
  return (
    t[103] !== Oe || t[104] !== Ie || t[105] !== W
      ? ((Le = (0, fr.jsxs)(J, { children: [W, Oe, Ie] })),
        (t[103] = Oe),
        (t[104] = Ie),
        (t[105] = W),
        (t[106] = Le))
      : (Le = t[106]),
    Le
  );
}
function sr(e) {
  return { ...e, hasManualSelection: !0 };
}
function cr(e) {
  return { ...e, hasResolved: !0 };
}
function lr(e) {
  let t = (0, ur.c)(3),
    { consumerAnalytics: n, scope: r, hasNoLinesOfCode: i } = e;
  if (n !== void 0 && n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, fr.jsx)(g, {
            id: `settings.usage.billing.messages.empty`,
            defaultMessage: `No messages during this period`,
            description: `Empty state for the Consumer message count chart during the selected period`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r === `business` && i) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, fr.jsx)(g, {
            id: `settings.usage.billing.productActivity.empty`,
            defaultMessage: `No turns or lines of code during this period`,
            description: `Empty state for a Business user's product activity section when there were no conversation turns and no lines of code during the selected period`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let a;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, fr.jsx)(g, {
          id: `settings.usage.billing.turns.empty`,
          defaultMessage: `No turns during this period`,
          description: `Empty state for a Consumer or Business user's conversation-turns chart during the selected period`,
        })),
        (t[2] = a))
      : (a = t[2]),
    a
  );
}
var ur, dr, fr;
function pr() {
  return (pr = e(() => {
    ((ur = Ae()), z(), (dr = Pe()), U(), nt(), Ye(), ln(), Re(), Rt(), Ht(), Pn(), Rn(), (fr = K()));
  }))();
}
var mr;
function hr() {
  return (hr = e(() => {
    (U(),
      (mr = i({
        desktop_app: {
          id: `settings.usage.surface.desktopApp`,
          defaultMessage: `Desktop App`,
          description: `Desktop app usage surface`,
        },
        work_desktop: {
          id: `settings.usage.surface.workDesktop`,
          defaultMessage: `Desktop (Work)`,
          description: `Short product surface label in Codex usage settings. Identifies Codex usage from the ChatGPT Work desktop client, distinct from the Codex desktop app.`,
        },
        cli: { id: `settings.usage.surface.cli`, defaultMessage: `CLI`, description: `CLI usage surface` },
        vscode: {
          id: `settings.usage.surface.vscode`,
          defaultMessage: `Extension`,
          description: `VS Code extension usage surface`,
        },
        web: {
          id: `settings.usage.surface.web`,
          defaultMessage: `Cloud`,
          description: `Cloud usage surface`,
        },
        work_web: {
          id: `settings.usage.surface.workWeb`,
          defaultMessage: `Web`,
          description: `Short product surface label in Codex usage settings. Identifies Codex usage from ChatGPT Work on the web, distinct from Codex Cloud usage.`,
        },
        mobile: {
          id: `settings.usage.surface.mobile`,
          defaultMessage: `Mobile`,
          description: `Mobile usage surface`,
        },
        work_mobile: {
          id: `settings.usage.surface.workMobile`,
          defaultMessage: `Mobile`,
          description: `Short product surface label in Codex usage settings. Identifies Codex usage from the ChatGPT Work mobile client.`,
        },
        agent_identity: {
          id: `settings.usage.surface.agentIdentity`,
          defaultMessage: `Access tokens`,
          description: `Access token usage surface`,
        },
        github: {
          id: `settings.usage.surface.github`,
          defaultMessage: `GitHub`,
          description: `GitHub usage surface`,
        },
        github_code_review: {
          id: `settings.usage.surface.githubCodeReview`,
          defaultMessage: `GitHub code review`,
          description: `GitHub code review usage surface`,
        },
        codex_security_cloud: {
          id: `settings.usage.surface.codexSecurityCloud`,
          defaultMessage: `Codex Security Cloud`,
          description: `Short service label in Codex usage charts and credit history for users and workspace admins. Identifies credits used by cloud security scans, distinct from GitHub code review. Preserve the product name Codex Security Cloud.`,
        },
        jetbrains: {
          id: `settings.usage.surface.jetbrains`,
          defaultMessage: `JetBrains`,
          description: `JetBrains usage surface`,
        },
        slack: {
          id: `settings.usage.surface.slack`,
          defaultMessage: `Slack`,
          description: `Slack usage surface`,
        },
        linear: {
          id: `settings.usage.surface.linear`,
          defaultMessage: `Linear`,
          description: `Linear usage surface`,
        },
        sdk: { id: `settings.usage.surface.sdk`, defaultMessage: `SDK`, description: `SDK usage surface` },
        exec: {
          id: `settings.usage.surface.exec`,
          defaultMessage: `Exec`,
          description: `Exec usage surface`,
        },
        unknown: {
          id: `settings.usage.surface.unknown`,
          defaultMessage: `Uncategorized`,
          description: `Unknown usage surface`,
        },
        other: {
          id: `settings.usage.surface.other`,
          defaultMessage: `Other`,
          description: `Other usage surface`,
        },
      })));
  }))();
}
function gr({ breakdown: e, data: t, intl: n, isPersonalUsage: r, unit: i, scope: a, consumerAnalytics: o }) {
  let s = t != null && `bucketTotals` in t,
    c = s
      ? new Map(t.series.toSorted((e, t) => t.total - e.total).map(({ key: e }, t) => [e, yr[t % yr.length]]))
      : null,
    l = [`codex`, `work`, ...Object.keys(mr)],
    u = (
      s
        ? t.series
        : [...(t?.series ?? [])].sort((t, n) =>
            a !== `workspace` && (t.key === `other` || n.key === `other`)
              ? Number(t.key === `other`) - Number(n.key === `other`)
              : a !== `workspace` && e === `product`
                ? l.indexOf(t.key) - l.indexOf(n.key)
                : n.total - t.total,
          )
    )
      .map(({ key: t, label: r, total: i }, l) => {
        if (s) return { key: t, name: r, total: i, color: c?.get(t) };
        let u = o ? Zt[l % Zt.length] : void 0;
        return {
          key: t,
          name: a !== `workspace` && vr(t) ? n.formatMessage(mr[t]) : _r(t, r, e, n, a),
          total: i,
          color:
            a !== `workspace` && e === `product` && (t === `codex` || t === `work`) ? Zt[+(t === `work`)] : u,
        };
      })
      .filter(({ key: e, total: n }) =>
        o || i === `usd` ? t?.data.some((t) => (t.values[e] ?? 0) !== 0) : n > 0,
      ),
    d = !r && u.length > 3 ? u.filter(({ key: e }) => e !== `other`).slice(0, 3) : u,
    f = u.filter(({ key: e }) => !d.some((t) => t.key === e));
  return {
    availableSeries: u,
    barSeries:
      f.length === 0
        ? d
        : [
            ...d,
            {
              color: o ? zn(d) : void 0,
              key: Mn,
              name: n.formatMessage({
                id: `settings.usage.billing.history.other`,
                defaultMessage: `Other`,
                description: `Combined usage from models or surfaces outside the three most-used categories`,
              }),
            },
          ],
    otherSeries: f,
    otherSeriesKeys: f.map(({ key: e }) => e),
  };
}
function _r(e, t, n, r, i) {
  switch (n) {
    case `product`:
      return i !== `workspace` && (e === `codex` || e === `work`)
        ? r.formatMessage(
            {
              id: `settings.usage.billing.history.productSeries`,
              defaultMessage: `{product, select, codex {Codex} work {Work} other {Other}}`,
              description: `Short product legend label in a Consumer or Business account holder's personal plan-usage or purchased-credit chart. Codex and Work are OpenAI product names and should remain consistent with their branding.`,
            },
            { product: e },
          )
        : t;
    case `model`:
      return i === `workspace` ? t : e === `other` ? r.formatMessage(mr.other) : Le(t);
    case `reasoning`:
      return r.formatMessage(
        {
          id: `settings.usage.billing.credits.history.reasoningSeries`,
          defaultMessage: `{effort, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} unspecified {Unspecified} unknown {Unknown} other {Other}}`,
          description: `Reasoning effort label in the credit usage history chart`,
        },
        { effort: e },
      );
    case `speed`:
      return r.formatMessage(
        {
          id: `settings.usage.billing.credits.history.speedSeries`,
          defaultMessage: `{speed, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} unknown {Unknown} other {Other}}`,
          description: `Response speed label in the credit usage history chart`,
        },
        { speed: e },
      );
  }
}
function vr(e) {
  return Object.hasOwn(mr, e);
}
var yr;
function br() {
  return (br = e(() => {
    (Xt(),
      hr(),
      On(),
      (yr = [
        ...Zt,
        `var(--color-chart-yellow)`,
        `var(--color-chart-red)`,
        `var(--color-chart-purple)`,
        `var(--color-text-tertiary)`,
      ]));
  }))();
}
function xr(e) {
  let t = (0, Cr.c)(7),
    { children: n, rangeKey: r, direction: i, reduceMotion: a } = e,
    o = a !== void 0 && a,
    s;
  t[0] !== n || t[1] !== i || t[2] !== r || t[3] !== o
    ? ((s = o
        ? n
        : (0, Tr.jsx)(k, {
            initial: !1,
            custom: i,
            children: (0, Tr.jsx)(Sr, { direction: i, children: n }, r),
          })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = o),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === s
      ? (c = t[6])
      : ((c = (0, Tr.jsx)(`div`, { className: `grid h-full min-h-0 min-w-0 overflow-hidden`, children: s })),
        (t[5] = s),
        (t[6] = c)),
    c
  );
}
function Sr(e) {
  let t = (0, Cr.c)(13),
    { children: n, direction: r } = e,
    i = P(),
    [a, o] = (0, wr.useState)(!1),
    s = (!i || a) && `pointer-events-none`,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = de(`col-start-1 row-start-1 h-full min-h-0 min-w-0`, s)), (t[0] = s), (t[1] = c));
  let l = !i || void 0,
    u = !i,
    d;
  t[2] === r ? (d = t[3]) : ((d = r === 0 ? { duration: 0 } : Ne), (t[2] = r), (t[3] = d));
  let f, p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () => o(!0)), (p = () => o(!1)), (t[4] = f), (t[5] = p))
    : ((f = t[4]), (p = t[5]));
  let m;
  return (
    t[6] !== n || t[7] !== r || t[8] !== c || t[9] !== l || t[10] !== u || t[11] !== d
      ? ((m = (0, Tr.jsx)(ie.div, {
          className: c,
          "aria-hidden": l,
          inert: u,
          custom: r,
          variants: Er,
          initial: `enter`,
          animate: `visible`,
          exit: `exit`,
          transition: d,
          onAnimationStart: f,
          onAnimationComplete: p,
          children: n,
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = c),
        (t[9] = l),
        (t[10] = u),
        (t[11] = d),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
var Cr, wr, Tr, Er;
function Dr() {
  return (Dr = e(() => {
    ((Cr = Ae()),
      re(),
      c(),
      V(),
      Me(),
      (wr = Pe()),
      O(),
      (Tr = K()),
      (Er = {
        enter: (e) => ({ x: `${e * 100}%` }),
        visible: { x: `0%` },
        exit: (e) => ({ x: `${-e * 100}%`, transition: e === 0 ? { duration: 0 } : Ne }),
      }));
  }))();
}
function Or(e) {
  let t = (0, Pr.c)(259),
    {
      actions: n,
      analyticsChart: r,
      ariaLabel: i,
      barSize: a,
      breakdown: o,
      data: s,
      dateRange: c,
      emptyMessage: l,
      estimatedSpendUsd: u,
      hideTotal: d,
      isPersonalUsage: f,
      preservePopulatedCardLayout: p,
      consumerAnalytics: m,
      selectedDayLegend: h,
      rangeDirection: _,
      scope: v,
      status: y,
      title: b,
      unit: x,
    } = e,
    S = f !== void 0 && f,
    C = p !== void 0 && p,
    w = m !== void 0 && m,
    T = h !== void 0 && h,
    E = x === void 0 ? `credits` : x,
    D = ee(),
    O = E === `usd`,
    k = s != null && `bucketTotals` in s ? s : void 0,
    A = k?.data[0]?.date,
    j;
  t[0] === k?.data ? (j = t[1]) : ((j = k?.data.at(-1)?.date), (t[0] = k?.data), (t[1] = j));
  let M = j,
    N = `${A}:${M}`,
    [P, F] = (0, Ir.useState)(N),
    [I, L] = (0, Ir.useState)(null),
    [R, z] = (0, Ir.useState)(null),
    te;
  t[2] !== I || t[3] !== k?.data
    ? ((te =
        k?.data.findIndex((e) => {
          let { date: t } = e;
          return t === I;
        }) ?? -1),
      (t[2] = I),
      (t[3] = k?.data),
      (t[4] = te))
    : (te = t[4]);
  let B = te,
    ne;
  t[5] !== R || t[6] !== B || t[7] !== k?.data
    ? ((ne =
        B >= 0
          ? B
          : (k?.data.findIndex((e) => {
              let { date: t } = e;
              return t === R;
            }) ?? -1)),
      (t[5] = R),
      (t[6] = B),
      (t[7] = k?.data),
      (t[8] = ne))
    : (ne = t[8]);
  let re = ne,
    ie = k?.data[re],
    ae = ie?.date,
    oe = (0, Ir.useId)(),
    [se, ce] = (0, Ir.useState)(null),
    [le, ue] = (0, Ir.useState)(null),
    [de, fe] = (0, Ir.useState)(void 0),
    [V, pe] = (0, Ir.useState)(!1);
  P !== N && (F(N), L(null), z(null), pe(!1));
  let [me, he] = (0, Ir.useState)(null),
    H;
  t[9] !== s?.series || t[10] !== se || t[11] !== S || t[12] !== v || t[13] !== T
    ? ((H =
        T ||
        (S &&
          v !== `workspace` &&
          se != null &&
          !s?.series.some((e) => {
            let { key: t } = e;
            return t === se;
          }))
          ? null
          : se),
      (t[9] = s?.series),
      (t[10] = se),
      (t[11] = S),
      (t[12] = v),
      (t[13] = T),
      (t[14] = H))
    : (H = t[14]);
  let ge = H,
    [U, _e] = (0, Ir.useState)(null),
    [W, ve] = (0, Ir.useState)(null),
    ye = s?.total ?? 0,
    be = k != null || (S && (s == null || !(`units` in s) || s.units !== `credits`)),
    xe = O || u == null || ye <= 0 ? null : u / ye,
    Se;
  t[15] !== o || t[16] !== w || t[17] !== s || t[18] !== D || t[19] !== S || t[20] !== v || t[21] !== E
    ? ((Se = gr({
        breakdown: o,
        data: s,
        intl: D,
        isPersonalUsage: S,
        unit: E,
        scope: v,
        consumerAnalytics: w,
      })),
      (t[15] = o),
      (t[16] = w),
      (t[17] = s),
      (t[18] = D),
      (t[19] = S),
      (t[20] = v),
      (t[21] = E),
      (t[22] = Se))
    : (Se = t[22]);
  let { availableSeries: Ce, barSeries: G, otherSeries: we, otherSeriesKeys: Te } = Se,
    Ee;
  t[23] !== G || t[24] !== v || t[25] !== U
    ? ((Ee =
        v !== `workspace` &&
        U != null &&
        !G.some((e) => {
          let { key: t } = e;
          return !U.has(t);
        })
          ? null
          : U),
      (t[23] = G),
      (t[24] = v),
      (t[25] = U),
      (t[26] = Ee))
    : (Ee = t[26]);
  let De = Ee,
    Oe;
  t[27] !== G || t[28] !== w || t[29] !== O || t[30] !== De || t[31] !== U
    ? ((Oe = w || O ? In(U, G) : De),
      (t[27] = G),
      (t[28] = w),
      (t[29] = O),
      (t[30] = De),
      (t[31] = U),
      (t[32] = Oe))
    : (Oe = t[32]);
  let ke = Oe,
    Ae;
  t[33] !== G || t[34] !== ke || t[35] !== le
    ? ((Ae = G.some((e) => {
        let { key: t } = e;
        return t === le && !ke?.has(t);
      })
        ? le
        : null),
      (t[33] = G),
      (t[34] = ke),
      (t[35] = le),
      (t[36] = Ae))
    : (Ae = t[36]);
  let je = Ae,
    Me = W != null && W.history === s && W.series === (w || O ? U : ke),
    K;
  t[37] !== G ||
  t[38] !== w ||
  t[39] !== ke ||
  t[40] !== Me ||
  t[41] !== k ||
  t[42] !== W ||
  t[43] !== y.reduceMotion
    ? ((K =
        w && k != null
          ? k.data.map(
              (e, t) =>
                (0, Fr.default)(G, (n) => {
                  let { key: r } = n;
                  return (
                    (!ke?.has(r) || (!y.reduceMotion && Me && W.topSeriesKeys?.[t] === r)) &&
                    (e.values[r] ?? 0) > 0
                  );
                })?.key,
            )
          : void 0),
      (t[37] = G),
      (t[38] = w),
      (t[39] = ke),
      (t[40] = Me),
      (t[41] = k),
      (t[42] = W),
      (t[43] = y.reduceMotion),
      (t[44] = K))
    : (K = t[44]);
  let Ne = K,
    Pe = s?.total;
  if (s != null && ke?.size) {
    let e = 0,
      n = 0;
    if (t[45] !== Ce || t[46] !== G || t[47] !== ke || t[48] !== e || t[49] !== n) {
      for (let t of Ce) {
        let r = G.some((e) => {
          let { key: n } = e;
          return n === t.key;
        })
          ? t.key
          : Mn;
        ke.has(r) ? (e += t.total) : (n += t.total);
      }
      ((t[45] = Ce), (t[46] = G), (t[47] = ke), (t[48] = e), (t[49] = n), (t[50] = e), (t[51] = n));
    } else ((e = t[50]), (n = t[51]));
    Pe = O ? n : s.total - e;
  }
  let Fe;
  t[52] !== s?.data || t[53] !== k
    ? ((Fe = s?.data.reduce(
        (e, t) =>
          Math.max(e, k == null ? Object.values(t.values).reduce(Mr, 0) : (k.bucketTotals[t.date] ?? 0)),
        0,
      )),
      (t[52] = s?.data),
      (t[53] = k),
      (t[54] = Fe))
    : (Fe = t[54]);
  let q = Fe,
    Ie;
  t[55] !== G || t[56] !== s?.data || t[57] !== O || t[58] !== we
    ? ((Ie = O
        ? s?.data.reduce(
            (e, t) => {
              let n = 0,
                r = 0;
              for (let e of G) {
                let i =
                  e.key === `__other_usage_series__`
                    ? we.reduce((e, n) => e + (t.values[n.key] ?? 0), 0)
                    : (t.values[e.key] ?? 0);
                ((n += Math.max(0, i)), (r += Math.min(0, i)));
              }
              return { minimum: Math.min(e.minimum, r), maximum: Math.max(e.maximum, n) };
            },
            { minimum: 0, maximum: 0 },
          )
        : void 0),
      (t[55] = G),
      (t[56] = s?.data),
      (t[57] = O),
      (t[58] = we),
      (t[59] = Ie))
    : (Ie = t[59]);
  let Le = Ie,
    Re;
  t[60] === k
    ? (Re = t[61])
    : ((Re = k?.data.every((e) => {
        let { date: t } = e;
        return k.bucketTotals[t] != null;
      })
        ? k.data.reduce((e, t) => {
            let { date: n } = t;
            return e + (k.bucketTotals[n] ?? 0);
          }, 0)
        : 0),
      (t[60] = k),
      (t[61] = Re));
  let ze = Re,
    Be = ae == null ? ze : k?.bucketTotals[ae],
    Ve = c?.startDate ?? A,
    He = c?.endDate ?? M,
    Ue;
  t[62] !== D || t[63] !== ae || t[64] !== He || t[65] !== Ve
    ? ((Ue =
        Ve != null && He != null
          ? D.formatDateTimeRange(new Date(`${ae ?? Ve}T00:00:00Z`), new Date(`${ae ?? He}T00:00:00Z`), {
              month: `short`,
              day: `numeric`,
              year: `numeric`,
              timeZone: `UTC`,
            })
          : void 0),
      (t[62] = D),
      (t[63] = ae),
      (t[64] = He),
      (t[65] = Ve),
      (t[66] = Ue))
    : (Ue = t[66]);
  let We = Ue,
    Ge;
  if (
    t[67] !== n ||
    t[68] !== je ||
    t[69] !== ge ||
    t[70] !== r ||
    t[71] !== i ||
    t[72] !== G ||
    t[73] !== a ||
    t[74] !== de ||
    t[75] !== w ||
    t[76] !== s ||
    t[77] !== l ||
    t[78] !== u ||
    t[79] !== A ||
    t[80] !== ke ||
    t[81] !== d ||
    t[82] !== D ||
    t[83] !== S ||
    t[84] !== be ||
    t[85] !== Me ||
    t[86] !== V ||
    t[87] !== O ||
    t[88] !== M ||
    t[89] !== ae ||
    t[90] !== re ||
    t[91] !== We ||
    t[92] !== ie ||
    t[93] !== Be ||
    t[94] !== q ||
    t[95] !== we ||
    t[96] !== Te ||
    t[97] !== ze ||
    t[98] !== B ||
    t[99] !== C ||
    t[100] !== _ ||
    t[101] !== N ||
    t[102] !== k ||
    t[103] !== W ||
    t[104] !== v ||
    t[105] !== T ||
    t[106] !== Le?.maximum ||
    t[107] !== Le?.minimum ||
    t[108] !== me ||
    t[109] !== oe ||
    t[110] !== y ||
    t[111] !== U ||
    t[112] !== b ||
    t[113] !== Ne ||
    t[114] !== ye ||
    t[115] !== E ||
    t[116] !== xe ||
    t[117] !== Pe
  ) {
    let e =
        T && k != null
          ? new Map(
              G.map((e) => {
                let { key: t, total: n } = e;
                return [t, Be != null && Be > 0 ? (ie == null ? (n ?? 0) : (ie.values[t] ?? 0)) / Be : null];
              }),
            )
          : void 0,
      o;
    t[119] !== A || t[120] !== D || t[121] !== M || t[122] !== ze || t[123] !== k || t[124] !== T
      ? ((o = (e) =>
          T || k == null || ze <= 0 || A == null || M == null
            ? e
            : {
                ...e,
                tooltip: (0, Lr.jsx)(g, {
                  id: `settings.usage.billing.chart.legend.totalUsagePeriodSummary`,
                  defaultMessage: `{series} · {share} of total usage · {period} UTC`,
                  description: `Tooltip for a usage chart legend item, showing its share of all plan and purchased-credit usage in the selected UTC period. Hiding series does not change this denominator`,
                  values: {
                    series: e.name,
                    share: D.formatNumber((e.total ?? 0) / ze, {
                      style: `percent`,
                      maximumFractionDigits: 1,
                    }),
                    period: D.formatDateTimeRange(new Date(`${A}T00:00:00Z`), new Date(`${M}T00:00:00Z`), {
                      month: `short`,
                      day: `numeric`,
                      year: `numeric`,
                      timeZone: `UTC`,
                    }),
                  },
                }),
              }),
        (t[119] = A),
        (t[120] = D),
        (t[121] = M),
        (t[122] = ze),
        (t[123] = k),
        (t[124] = T),
        (t[125] = o))
      : (o = t[125]);
    let c = G.map(o),
      { onAnimationEnd: f } = y,
      p;
    t[126] !== f || t[127] !== W
      ? ((p = () => {
          (f?.(), ve((e) => (e === W ? null : e)));
        }),
        (t[126] = f),
        (t[127] = W),
        (t[128] = p))
      : (p = t[128]);
    let m = p,
      h;
    t[129] !== s || t[130] !== f
      ? ((h = () => {
          (fe(s), ve(null), f?.());
        }),
        (t[129] = s),
        (t[130] = f),
        (t[131] = h))
      : (h = t[131]);
    let x = h,
      j;
    t[132] !== s || t[133] !== Ne
      ? ((j = (e) => {
          (fe(s), ve(s == null ? null : { history: s, series: e, topSeriesKeys: Ne }), _e(e));
        }),
        (t[132] = s),
        (t[133] = Ne),
        (t[134] = j))
      : (j = t[134]);
    let P = j,
      F;
    t[135] === k?.data
      ? (F = t[136])
      : ((F = (e, t, n) => {
          n.stopPropagation();
          let r = k?.data[t]?.date;
          r != null && (L((e) => (e === r ? null : r)), z(null), pe(!0));
        }),
        (t[135] = k?.data),
        (t[136] = F));
    let ee = F,
      I;
    t[137] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((I = () => {
          (L(null), z(null), pe(!0));
        }),
        (t[137] = I))
      : (I = t[137]);
    let R = I,
      te;
    if (
      t[138] !== je ||
      t[139] !== G ||
      t[140] !== de ||
      t[141] !== w ||
      t[142] !== s ||
      t[143] !== m ||
      t[144] !== x ||
      t[145] !== ee ||
      t[146] !== ke ||
      t[147] !== S ||
      t[148] !== Me ||
      t[149] !== V ||
      t[150] !== we ||
      t[151] !== Te ||
      t[152] !== B ||
      t[153] !== N ||
      t[154] !== v ||
      t[155] !== T ||
      t[156] !== oe ||
      t[157] !== y.animateDataChanges ||
      t[158] !== y.reduceMotion ||
      t[159] !== Ne
    ) {
      let e;
      (t[161] !== je ||
      t[162] !== de ||
      t[163] !== w ||
      t[164] !== s ||
      t[165] !== m ||
      t[166] !== x ||
      t[167] !== ee ||
      t[168] !== ke ||
      t[169] !== S ||
      t[170] !== Me ||
      t[171] !== V ||
      t[172] !== we ||
      t[173] !== Te ||
      t[174] !== B ||
      t[175] !== N ||
      t[176] !== v ||
      t[177] !== T ||
      t[178] !== oe ||
      t[179] !== y.animateDataChanges ||
      t[180] !== y.reduceMotion ||
      t[181] !== Ne
        ? ((e = (e, t) =>
            w
              ? (0, Lr.jsx)(
                  Pt,
                  {
                    seriesKey: e.key,
                    name: e.key,
                    color: e.color,
                    dimmed: je != null && je !== e.key,
                    highlightHoveredDay: T && !V,
                    pinnedDayIndex: B >= 0 ? B : void 0,
                    hidden: !!ke?.has(e.key),
                    otherSeriesKeys: e.key === `__other_usage_series__` ? Te : void 0,
                    stackId: `usage`,
                    stackClipId: Ne == null ? void 0 : `${oe}-${N}`,
                    topSeriesKeys: Ne,
                    stackRadius: Tn,
                    grow: !!y.animateDataChanges && (!T || de !== s) && !Me && !y.reduceMotion,
                    restack: Me && !y.reduceMotion,
                    onAnimationEnd: m,
                    onClick: T ? ee : void 0,
                    onGrowEnd: x,
                    onHoverChange: T ? void 0 : ce,
                  },
                  e.key,
                )
              : (0, Lr.jsx)(
                  Ot,
                  {
                    animationDuration: 150,
                    animationEasing: `ease-out`,
                    dataKey: (t) =>
                      ke?.has(e.key)
                        ? null
                        : e.key === `__other_usage_series__`
                          ? we.reduce((e, n) => e + (t.values[n.key] ?? 0), 0)
                          : (t.values[e.key] ?? 0),
                    fill: e.color ?? Zt[t % Zt.length],
                    isAnimationActive:
                      !y.reduceMotion && ((v !== `workspace` && !!y.animateDataChanges) || Me),
                    name: e.key,
                    onAnimationEnd: m,
                    onMouseEnter: () => {
                      ce(e.key);
                    },
                    onMouseLeave: () => {
                      ce(null);
                    },
                    radius: 0,
                    stackId: `usage`,
                  },
                  S ? t : e.key,
                )),
          (t[161] = je),
          (t[162] = de),
          (t[163] = w),
          (t[164] = s),
          (t[165] = m),
          (t[166] = x),
          (t[167] = ee),
          (t[168] = ke),
          (t[169] = S),
          (t[170] = Me),
          (t[171] = V),
          (t[172] = we),
          (t[173] = Te),
          (t[174] = B),
          (t[175] = N),
          (t[176] = v),
          (t[177] = T),
          (t[178] = oe),
          (t[179] = y.animateDataChanges),
          (t[180] = y.reduceMotion),
          (t[181] = Ne),
          (t[182] = e))
        : (e = t[182]),
        (te = G.map(e)),
        (t[138] = je),
        (t[139] = G),
        (t[140] = de),
        (t[141] = w),
        (t[142] = s),
        (t[143] = m),
        (t[144] = x),
        (t[145] = ee),
        (t[146] = ke),
        (t[147] = S),
        (t[148] = Me),
        (t[149] = V),
        (t[150] = we),
        (t[151] = Te),
        (t[152] = B),
        (t[153] = N),
        (t[154] = v),
        (t[155] = T),
        (t[156] = oe),
        (t[157] = y.animateDataChanges),
        (t[158] = y.reduceMotion),
        (t[159] = Ne),
        (t[160] = te));
    } else te = t[160];
    let ne = te,
      se;
    t[183] !== w || t[184] !== D || t[185] !== S || t[186] !== v || t[187] !== E
      ? ((se = Nr(D, S, v, w, E)),
        (t[183] = w),
        (t[184] = D),
        (t[185] = S),
        (t[186] = v),
        (t[187] = E),
        (t[188] = se))
      : (se = t[188]);
    let le = se,
      H = b === void 0 ? le.title : b;
    if (T && We != null) {
      let e;
      (t[189] !== D || t[190] !== ae || t[191] !== We
        ? ((e = ae == null ? We : (0, Lr.jsx)(`time`, { dateTime: ae, children: Nt(ae, D) })),
          (t[189] = D),
          (t[190] = ae),
          (t[191] = We),
          (t[192] = e))
        : (e = t[192]),
        (H = e));
    }
    let Se = u;
    O ? (Se = void 0) : ke?.size && xe != null && Pe != null && (Se = Pe * xe);
    let Ce;
    t[193] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ce = () => {
          (he(null), ce(null), z(null));
        }),
        (t[193] = Ce))
      : (Ce = t[193]);
    let Ee = !T,
      De;
    t[194] === T ? (De = t[195]) : ((De = T ? [] : void 0), (t[194] = T), (t[195] = De));
    let Oe = T ? void 0 : (i ?? le.ariaLabel),
      Ae = s?.data,
      K = k == null ? 4 : 20,
      Fe;
    t[196] === K
      ? (Fe = t[197])
      : ((Fe = { top: K, right: 0, left: 0, bottom: 0 }), (t[196] = K), (t[197] = Fe));
    let Ie = v !== `workspace` && s?.data.length === 1 ? 44 : void 0,
      Re = O ? `sign` : void 0,
      Ve = T ? R : void 0,
      He = v === `workspace` ? void 0 : jr,
      Ue;
    t[198] === w ? (Ue = t[199]) : ((Ue = w ? () => he(null) : void 0), (t[198] = w), (t[199] = Ue));
    let J;
    t[200] !== w || t[201] !== T
      ? ((J = w
          ? (e, t) => {
              let { activeLabel: n, isTooltipActive: r } = e;
              if (T) {
                z(r && typeof n == `string` ? n : null);
                return;
              }
              he(jn(t, !1, !0));
            }
          : void 0),
        (t[200] = w),
        (t[201] = T),
        (t[202] = J))
      : (J = t[202]);
    let Ke;
    t[203] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((Ke = (0, Lr.jsx)(bt, { stroke: `var(--color-border-subtle)`, vertical: !1 })), (t[203] = Ke))
      : (Ke = t[203]);
    let qe = k != null,
      Je = Le?.maximum ?? q,
      Ye = Le?.minimum,
      Xe = be ? `percent` : E,
      Ze;
    t[204] !== qe || t[205] !== Je || t[206] !== Ye || t[207] !== Xe
      ? ((Ze = (0, Lr.jsx)(gn, {
          hideValues: qe,
          maximumValue: Je,
          minimumValue: Ye,
          showPercentageUnit: !1,
          unit: Xe,
        })),
        (t[204] = qe),
        (t[205] = Je),
        (t[206] = Ye),
        (t[207] = Xe),
        (t[208] = Ze))
      : (Ze = t[208]);
    let Qe;
    t[209] === k
      ? (Qe = t[210])
      : ((Qe = k == null ? void 0 : { left: 20, right: 20 }), (t[209] = k), (t[210] = Qe));
    let $e = k == null ? bn : Ar,
      et;
    t[211] === D ? (et = t[212]) : ((et = (e) => Nt(e, D)), (t[211] = D), (t[212] = et));
    let tt = s?.data,
      nt;
    t[213] === tt ? (nt = t[214]) : ((nt = Ut(tt)), (t[213] = tt), (t[214] = nt));
    let rt;
    t[215] !== Qe || t[216] !== $e || t[217] !== et || t[218] !== nt
      ? ((rt = (0, Lr.jsx)(xt, {
          axisLine: !1,
          dataKey: `date`,
          height: 22,
          interval: 0,
          minTickGap: 32,
          padding: Qe,
          tick: $e,
          tickFormatter: et,
          tickLine: !1,
          ticks: nt,
        })),
        (t[215] = Qe),
        (t[216] = $e),
        (t[217] = et),
        (t[218] = nt),
        (t[219] = rt))
      : (rt = t[219]);
    let it = !V && void 0,
      at = T
        ? kr
        : (0, Lr.jsx)(Gt, {
            consumerAnalytics: w,
            activeSeriesKey: ge,
            hiddenSeriesKeys: ke,
            isRelativeUsage: be,
            report: k,
            scope: v,
            series: c,
            unit: be ? `percent` : E,
            usdPerCredit: xe,
          }),
      ot;
    t[220] === T ? (ot = t[221]) : ((ot = !T && (0, Lr.jsx)(Sn, {})), (t[220] = T), (t[221] = ot));
    let st;
    t[222] === me ? (st = t[223]) : ((st = me == null ? void 0 : An(me)), (t[222] = me), (t[223] = st));
    let ct;
    t[224] !== it || t[225] !== at || t[226] !== ot || t[227] !== st
      ? ((ct = (0, Lr.jsx)(Ct, { active: it, isAnimationActive: !1, content: at, cursor: ot, position: st })),
        (t[224] = it),
        (t[225] = at),
        (t[226] = ot),
        (t[227] = st),
        (t[228] = ct))
      : (ct = t[228]);
    let lt;
    t[229] !== ne || t[230] !== Ne
      ? ((lt = Ne == null ? (0, Lr.jsx)(wt, { radius: Tn, children: ne }) : ne),
        (t[229] = ne),
        (t[230] = Ne),
        (t[231] = lt))
      : (lt = t[231]);
    let ut;
    t[232] !== a ||
    t[233] !== Ee ||
    t[234] !== De ||
    t[235] !== Oe ||
    t[236] !== Ae ||
    t[237] !== Fe ||
    t[238] !== Ie ||
    t[239] !== Re ||
    t[240] !== Ve ||
    t[241] !== He ||
    t[242] !== Ue ||
    t[243] !== J ||
    t[244] !== Ze ||
    t[245] !== rt ||
    t[246] !== ct ||
    t[247] !== lt
      ? ((ut = (0, Lr.jsxs)(kt, {
          accessibilityLayer: Ee,
          throttledEvents: De,
          "aria-label": Oe,
          barSize: a,
          data: Ae,
          margin: Fe,
          maxBarSize: Ie,
          stackOffset: Re,
          onClick: Ve,
          onMouseDown: He,
          onMouseLeave: Ue,
          onMouseMove: J,
          children: [Ke, Ze, rt, ct, lt],
        })),
        (t[232] = a),
        (t[233] = Ee),
        (t[234] = De),
        (t[235] = Oe),
        (t[236] = Ae),
        (t[237] = Fe),
        (t[238] = Ie),
        (t[239] = Re),
        (t[240] = Ve),
        (t[241] = He),
        (t[242] = Ue),
        (t[243] = J),
        (t[244] = Ze),
        (t[245] = rt),
        (t[246] = ct),
        (t[247] = lt),
        (t[248] = ut))
      : (ut = t[248]);
    let dt;
    t[249] !== w || t[250] !== V || t[251] !== v || t[252] !== ut
      ? ((dt = (0, Lr.jsx)(kn, {
          consumerAnalytics: w,
          isTooltipDismissed: V,
          onResetHover: Ce,
          onTooltipDismissedChange: pe,
          scope: v,
          children: ut,
        })),
        (t[249] = w),
        (t[250] = V),
        (t[251] = v),
        (t[252] = ut),
        (t[253] = dt))
      : (dt = t[253]);
    let ft = dt,
      pt;
    (t[254] !== d || t[255] !== D || t[256] !== O || t[257] !== Pe
      ? ((pt = O && !d && Pe != null ? vn(Pe, D, !0) : void 0),
        (t[254] = d),
        (t[255] = D),
        (t[256] = O),
        (t[257] = Pe),
        (t[258] = pt))
      : (pt = t[258]),
      (Ge = (0, Lr.jsx)(Hn, {
        analyticsChart: r,
        consumerAnalytics: w,
        actions: n,
        dailyLegend: T ? { shares: e } : void 0,
        fillChartHeight: T || k != null,
        activeSeriesKey: ge,
        onHoverSeriesChange: T ? ue : void 0,
        emptyMessage: l ?? le.emptyMessage,
        estimatedSpendUsd: Se,
        hasData: w || O ? ye !== 0 || c.length > 0 : ye > 0,
        hiddenSeriesKeys: ke,
        hideTotal: be || d,
        preservePopulatedCardLayout: C,
        scope: v,
        series: c,
        status: y,
        title: H,
        total: Pe,
        totalLabel: pt,
        onChangeSeriesIsolation: w
          ? (e) => {
              P(e == null ? new Set() : Dn(e, c, U));
            }
          : void 0,
        onToggleSeries: (e) => {
          let t = Vn(ke, e, c, w ? U : ke);
          t.has(e) !== !!ke?.has(e) && P(t);
        },
        children:
          T && k != null
            ? (0, Lr.jsxs)(Lr.Fragment, {
                children: [
                  (0, Lr.jsx)(`div`, {
                    className: `h-full`,
                    role: `slider`,
                    tabIndex: 0,
                    "aria-label": i ?? le.ariaLabel,
                    "aria-valuemin": 0,
                    "aria-valuemax": k.data.length,
                    "aria-valuenow": re + 1,
                    "aria-valuetext": We,
                    onKeyDown: (e) => {
                      let t = re;
                      bb867: switch (e.key) {
                        case `ArrowLeft`:
                        case `ArrowDown`:
                          --t;
                          break bb867;
                        case `ArrowRight`:
                        case `ArrowUp`:
                          t += 1;
                          break bb867;
                        case `Home`:
                          t = -1;
                          break bb867;
                        case `End`:
                          t = k.data.length - 1;
                          break bb867;
                        case `Escape`:
                          (e.preventDefault(), e.stopPropagation(), R());
                          return;
                        default:
                          return;
                      }
                      e.preventDefault();
                      let n = k.data[Math.max(-1, Math.min(t, k.data.length - 1))]?.date ?? null;
                      (L(n), z(null), pe(n == null));
                    },
                    children:
                      _ == null
                        ? ft
                        : (0, Lr.jsx)(xr, {
                            rangeKey: N,
                            direction: _,
                            reduceMotion: y.reduceMotion,
                            children: ft,
                          }),
                  }),
                  (0, Lr.jsxs)(`div`, {
                    className: `sr-only`,
                    role: `status`,
                    "aria-live": `polite`,
                    children: [
                      We,
                      c.map((t) => {
                        let { key: n, name: r } = t,
                          i = e?.get(n);
                        return ke?.has(n)
                          ? null
                          : (0, Lr.jsx)(
                              `div`,
                              {
                                children:
                                  i != null && i > 0 && i < 0.001
                                    ? (0, Lr.jsx)(g, {
                                        id: `settings.usage.billing.chart.smallShareAnnouncement`,
                                        defaultMessage: `{series}: less than {threshold}`,
                                        description: `Screen reader announcement of a usage category with a positive share below 0.1 percent for the inspected day or displayed date range`,
                                        values: {
                                          series: r,
                                          threshold: D.formatNumber(0.001, {
                                            style: `percent`,
                                            maximumFractionDigits: 1,
                                          }),
                                        },
                                      })
                                    : (0, Lr.jsx)(g, {
                                        id: `settings.usage.billing.chart.shareAnnouncement`,
                                        defaultMessage: `{series}: {share}`,
                                        description: `Screen reader announcement of a usage category and its percentage of all usage for the inspected day or displayed date range. Share is a formatted percentage, or a dash when unavailable`,
                                        values: {
                                          series: r,
                                          share:
                                            i == null
                                              ? `-`
                                              : D.formatNumber(i, {
                                                  style: `percent`,
                                                  maximumFractionDigits: 1,
                                                }),
                                        },
                                      }),
                              },
                              n,
                            );
                      }),
                    ],
                  }),
                ],
              })
            : ft,
      })),
      (t[67] = n),
      (t[68] = je),
      (t[69] = ge),
      (t[70] = r),
      (t[71] = i),
      (t[72] = G),
      (t[73] = a),
      (t[74] = de),
      (t[75] = w),
      (t[76] = s),
      (t[77] = l),
      (t[78] = u),
      (t[79] = A),
      (t[80] = ke),
      (t[81] = d),
      (t[82] = D),
      (t[83] = S),
      (t[84] = be),
      (t[85] = Me),
      (t[86] = V),
      (t[87] = O),
      (t[88] = M),
      (t[89] = ae),
      (t[90] = re),
      (t[91] = We),
      (t[92] = ie),
      (t[93] = Be),
      (t[94] = q),
      (t[95] = we),
      (t[96] = Te),
      (t[97] = ze),
      (t[98] = B),
      (t[99] = C),
      (t[100] = _),
      (t[101] = N),
      (t[102] = k),
      (t[103] = W),
      (t[104] = v),
      (t[105] = T),
      (t[106] = Le?.maximum),
      (t[107] = Le?.minimum),
      (t[108] = me),
      (t[109] = oe),
      (t[110] = y),
      (t[111] = U),
      (t[112] = b),
      (t[113] = Ne),
      (t[114] = ye),
      (t[115] = E),
      (t[116] = xe),
      (t[117] = Pe),
      (t[118] = Ge));
  } else Ge = t[118];
  return Ge;
}
function kr() {
  return null;
}
function Ar(e) {
  return (0, Lr.jsx)(bn, { ...e, centerLabels: !0 });
}
function jr(e, t) {
  t.preventDefault();
}
function Mr(e, t) {
  return e + t;
}
function Nr(e, t, n, r, i) {
  if (i === `usd`)
    return {
      title: (0, Lr.jsx)(g, {
        id: `settings.usage.billing.spend.title`,
        defaultMessage: `Spend`,
        description: `Metric label for an Enterprise workspace member's native USD spend`,
      }),
      ariaLabel: e.formatMessage({
        id: `settings.usage.billing.spend.chartLabel`,
        defaultMessage: `Spend in USD`,
        description: `Accessible label for the Enterprise workspace member's native USD spend chart`,
      }),
      emptyMessage: (0, Lr.jsx)(g, {
        id: `settings.usage.billing.spend.empty`,
        defaultMessage: `No spend recorded during this period`,
        description: `Empty state for the Enterprise workspace member's native USD spend history when the selected period has no spend`,
      }),
    };
  let a = t
    ? (0, Lr.jsx)(g, {
        id: `settings.usage.billing.chart.empty`,
        defaultMessage: `No usage recorded yet`,
        description: `Empty state for enterprise billing and usage charts`,
      })
    : (0, Lr.jsx)(g, {
        id: `settings.usage.billing.credits.empty`,
        defaultMessage: `No plan usage or credits consumed during this period`,
        description: `Empty state when the selected enterprise workspace usage period has no plan usage or consumed credits`,
      });
  return t
    ? {
        emptyMessage: a,
        title: (0, Lr.jsx)(g, {
          id: `settings.usage.billing.personalUsage.title`,
          defaultMessage: `Plan usage`,
          description: `Chart title showing a Consumer or Business user's own included-plan Codex activity or included plan credits, not separately purchased credits or remaining allowance`,
        }),
        ariaLabel: e.formatMessage({
          id: `settings.usage.billing.personalUsage.chartLabel`,
          defaultMessage: `Plan usage`,
          description: `Accessible label for a Consumer or Business user's included-plan Codex usage chart; values represent relative activity or included plan credits, not separately purchased credits or remaining allowance`,
        }),
      }
    : n === `workspace` || r
      ? {
          emptyMessage: a,
          title: (0, Lr.jsx)(g, {
            id: `settings.usage.billing.credits.title`,
            defaultMessage: `Credits used`,
            description: `Label for the Consumer or enterprise credits usage chart`,
          }),
          ariaLabel: e.formatMessage({
            id: `settings.usage.billing.credits.chartLabel`,
            defaultMessage: `Credits used`,
            description: `Accessible label for the Consumer or enterprise credits usage chart`,
          }),
        }
      : {
          emptyMessage: a,
          title: (0, Lr.jsx)(g, {
            id: `settings.usage.billing.credits.personalTitle`,
            defaultMessage: `Credits spent`,
            description: `Chart title showing separately purchased credits spent by the current Consumer or Business workspace member in Codex desktop analytics settings`,
          }),
          ariaLabel: e.formatMessage({
            id: `settings.usage.billing.credits.personalChartLabel`,
            defaultMessage: `Credits spent`,
            description: `Accessible label for a Consumer or Business workspace member's purchased-credit spending chart in Codex desktop analytics settings`,
          }),
        };
}
var Pr, Fr, Ir, Lr;
function Rr() {
  return (Rr = e(() => {
    ((Pr = Ae()),
      (Fr = t(d(), 1)),
      (Ir = Pe()),
      U(),
      Tt(),
      Et(),
      Dt(),
      yt(),
      St(),
      vt(),
      O(),
      Xt(),
      _n(),
      hn(),
      Bt(),
      br(),
      Fn(),
      wn(),
      Dr(),
      On(),
      zt(),
      (Lr = K()));
  }))();
}
function zr(e) {
  let t = (0, Hr.c)(147),
    { data: n, preservePopulatedCardLayout: r, selectedModel: i, scope: a, status: o } = e,
    s = r !== void 0 && r,
    c = ee(),
    [l, u] = (0, Ur.useState)(null),
    [d, f] = (0, Ur.useState)(!1),
    [p, m] = (0, Ur.useState)(null),
    [h, _] = (0, Ur.useState)(null),
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    E,
    D,
    O,
    k,
    A,
    j,
    M,
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    te,
    B,
    ne,
    re,
    ie,
    ae,
    oe,
    se,
    ce,
    le,
    ue,
    fe,
    V,
    pe,
    me,
    he,
    H,
    ge;
  if (
    t[0] !== l ||
    t[1] !== n?.data ||
    t[2] !== n?.models ||
    t[3] !== n?.total ||
    t[4] !== c ||
    t[5] !== d ||
    t[6] !== s ||
    t[7] !== a ||
    t[8] !== i ||
    t[9] !== o ||
    t[10] !== h
  ) {
    ((T =
      a === `business`
        ? (n?.models ?? [])
            .filter((e) => {
              let { key: t, total: n } = e;
              return n > 0 && (i == null || t === i);
            })
            .map((e) => {
              let { key: t } = e;
              return { key: t, name: t === `other` ? c.formatMessage(mr.other) : Le(t) };
            })
        : [
            {
              key: `outputTokens`,
              name: c.formatMessage({
                id: `settings.usage.billing.tokens.output`,
                defaultMessage: `Output`,
                description: `Output token series in enterprise token usage charts`,
              }),
            },
            {
              key: `uncachedInputTokens`,
              name: c.formatMessage({
                id: `settings.usage.billing.tokens.uncachedInput`,
                defaultMessage: `Uncached input`,
                description: `Uncached input token series in enterprise token usage charts`,
              }),
            },
            {
              key: `cachedInputTokens`,
              name: c.formatMessage({
                id: `settings.usage.billing.tokens.cachedInput`,
                defaultMessage: `Cached input`,
                description: `Cached input token series in enterprise token usage charts`,
              }),
            },
          ]),
      (C =
        h != null &&
        !T.some((e) => {
          let { key: t } = e;
          return !h.has(t);
        })
          ? null
          : h),
      (S = n?.data.map((e) => {
        if (a === `business` || i == null) return e;
        let t = e.tokensByModel[i];
        return {
          ...e,
          uncachedInputTokens: t?.uncachedInputTokens ?? 0,
          cachedInputTokens: t?.cachedInputTokens ?? 0,
          outputTokens: t?.outputTokens ?? 0,
        };
      })));
    let e;
    t[51] !== n?.models || t[52] !== n?.total || t[53] !== i
      ? ((e =
          i == null
            ? n?.total
            : n?.models.find((e) => {
                let { key: t } = e;
                return t === i;
              })?.total),
        (t[51] = n?.models),
        (t[52] = n?.total),
        (t[53] = i),
        (t[54] = e))
      : (e = t[54]);
    let r = e,
      p;
    (t[55] === C
      ? (p = t[56])
      : ((p = (e) => {
          let { key: t } = e;
          return !C?.has(t);
        }),
        (t[55] = C),
        (t[56] = p)),
      (w = T.map(Vr).filter(p)));
    let ee =
      r == null || !C?.size
        ? r
        : r -
          (S?.reduce(
            (e, t) =>
              e +
              T.reduce(
                (e, n) =>
                  C.has(n.key)
                    ? e +
                      (n.key === `outputTokens` ||
                      n.key === `uncachedInputTokens` ||
                      n.key === `cachedInputTokens`
                        ? t[n.key]
                        : (t.tokensByModel[n.key]?.totalTokens ?? 0))
                    : e,
                0,
              ),
            0,
          ) ?? 0);
    ((x = Hn),
      (te = l),
      t[57] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((B = (0, Wr.jsx)(g, {
            id: `settings.usage.billing.tokens.empty`,
            defaultMessage: `No tokens used during this period`,
            description: `Empty state when the selected enterprise workspace usage period has no tokens consumed`,
          })),
          (t[57] = B))
        : (B = t[57]),
      (ne = (r ?? 0) > 0),
      (re = s),
      (ie = (e) => {
        _(Vn(C, e, T, C));
      }),
      (ae = a),
      (oe = C),
      (ce = T),
      (le = o),
      t[58] === a
        ? (ue = t[59])
        : ((ue =
            a === `workspace`
              ? (0, Wr.jsx)(g, {
                  id: `settings.usage.billing.tokens.title`,
                  defaultMessage: `Tokens used`,
                  description: `Label for the enterprise token usage chart`,
                })
              : (0, Wr.jsx)(g, {
                  id: `settings.usage.billing.tokens.personalTitle`,
                  defaultMessage: `Total tokens`,
                  description: `Chart title showing the total input, output, and cached tokens consumed by the current Business workspace member in Codex desktop analytics settings`,
                })),
          (t[58] = a),
          (t[59] = ue)),
      (fe = ee),
      (b = kn),
      (F = d),
      t[60] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((L = () => {
            (m(null), u(null));
          }),
          (t[60] = L))
        : (L = t[60]),
      (R = f),
      (z = a),
      (y = jt),
      t[61] !== c || t[62] !== a
        ? ((D =
            a === `workspace`
              ? c.formatMessage({
                  id: `settings.usage.billing.tokens.chartLabel`,
                  defaultMessage: `Tokens used`,
                  description: `Accessible label for the enterprise token usage chart`,
                })
              : c.formatMessage({
                  id: `settings.usage.billing.tokens.personalChartLabel`,
                  defaultMessage: `Total tokens`,
                  description: `Accessible label for a Business workspace member's chart of total input, output, and cached tokens in Codex desktop analytics settings`,
                })),
          (t[61] = c),
          (t[62] = a),
          (t[63] = D))
        : (D = t[63]),
      (O = S),
      t[64] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = { top: 4, right: 0, left: 0, bottom: 0 }), (t[64] = k))
        : (k = t[64]),
      (A = a === `workspace` ? void 0 : Br),
      t[65] === a
        ? ((j = t[66]), (M = t[67]))
        : ((j = () => {
            (m(null), a !== `workspace` && u(null));
          }),
          (M = (e, t) => {
            m(jn(t, a === `workspace`));
          }),
          (t[65] = a),
          (t[66] = j),
          (t[67] = M)),
      t[68] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((N = (0, Wr.jsx)(bt, { stroke: `var(--color-border-subtle)`, vertical: !1 })),
          (P = (0, Wr.jsx)(gn, { unit: `tokens` })),
          (t[68] = N),
          (t[69] = P))
        : ((N = t[68]), (P = t[69])),
      (v = xt),
      (I = !1),
      (se = `date`),
      (V = 22),
      (pe = 0),
      (me = 32),
      (he = bn),
      t[70] === c ? (H = t[71]) : ((H = (e) => Nt(e, c)), (t[70] = c), (t[71] = H)),
      (ge = !1),
      (E = Ut(S)),
      (t[0] = l),
      (t[1] = n?.data),
      (t[2] = n?.models),
      (t[3] = n?.total),
      (t[4] = c),
      (t[5] = d),
      (t[6] = s),
      (t[7] = a),
      (t[8] = i),
      (t[9] = o),
      (t[10] = h),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E),
      (t[20] = D),
      (t[21] = O),
      (t[22] = k),
      (t[23] = A),
      (t[24] = j),
      (t[25] = M),
      (t[26] = N),
      (t[27] = P),
      (t[28] = F),
      (t[29] = I),
      (t[30] = L),
      (t[31] = R),
      (t[32] = z),
      (t[33] = te),
      (t[34] = B),
      (t[35] = ne),
      (t[36] = re),
      (t[37] = ie),
      (t[38] = ae),
      (t[39] = oe),
      (t[40] = se),
      (t[41] = ce),
      (t[42] = le),
      (t[43] = ue),
      (t[44] = fe),
      (t[45] = V),
      (t[46] = pe),
      (t[47] = me),
      (t[48] = he),
      (t[49] = H),
      (t[50] = ge));
  } else
    ((v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (x = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]),
      (T = t[18]),
      (E = t[19]),
      (D = t[20]),
      (O = t[21]),
      (k = t[22]),
      (A = t[23]),
      (j = t[24]),
      (M = t[25]),
      (N = t[26]),
      (P = t[27]),
      (F = t[28]),
      (I = t[29]),
      (L = t[30]),
      (R = t[31]),
      (z = t[32]),
      (te = t[33]),
      (B = t[34]),
      (ne = t[35]),
      (re = t[36]),
      (ie = t[37]),
      (ae = t[38]),
      (oe = t[39]),
      (se = t[40]),
      (ce = t[41]),
      (le = t[42]),
      (ue = t[43]),
      (fe = t[44]),
      (V = t[45]),
      (pe = t[46]),
      (me = t[47]),
      (he = t[48]),
      (H = t[49]),
      (ge = t[50]));
  let U;
  t[72] !== v ||
  t[73] !== E ||
  t[74] !== I ||
  t[75] !== se ||
  t[76] !== V ||
  t[77] !== pe ||
  t[78] !== me ||
  t[79] !== he ||
  t[80] !== H ||
  t[81] !== ge
    ? ((U = (0, Wr.jsx)(v, {
        axisLine: I,
        dataKey: se,
        height: V,
        interval: pe,
        minTickGap: me,
        tick: he,
        tickFormatter: H,
        tickLine: ge,
        ticks: E,
      })),
      (t[72] = v),
      (t[73] = E),
      (t[74] = I),
      (t[75] = se),
      (t[76] = V),
      (t[77] = pe),
      (t[78] = me),
      (t[79] = he),
      (t[80] = H),
      (t[81] = ge),
      (t[82] = U))
    : (U = t[82]);
  let _e = !d && void 0,
    W;
  t[83] !== l || t[84] !== C || t[85] !== a || t[86] !== T
    ? ((W = (0, Wr.jsx)(Gt, {
        activeSeriesKey: l,
        hiddenSeriesKeys: C,
        scope: a,
        series: T,
        unit: `tokens`,
      })),
      (t[83] = l),
      (t[84] = C),
      (t[85] = a),
      (t[86] = T),
      (t[87] = W))
    : (W = t[87]);
  let ve;
  t[88] === p ? (ve = t[89]) : ((ve = p == null && (0, Wr.jsx)(Sn, {})), (t[88] = p), (t[89] = ve));
  let ye;
  t[90] === p ? (ye = t[91]) : ((ye = p == null ? void 0 : An(p)), (t[90] = p), (t[91] = ye));
  let be;
  t[92] !== _e || t[93] !== W || t[94] !== ve || t[95] !== ye
    ? ((be = (0, Wr.jsx)(Ct, { active: _e, isAnimationActive: !1, content: W, cursor: ve, position: ye })),
      (t[92] = _e),
      (t[93] = W),
      (t[94] = ve),
      (t[95] = ye),
      (t[96] = be))
    : (be = t[96]);
  let xe;
  if (t[97] !== C || t[98] !== a || t[99] !== T || t[100] !== p || t[101] !== o) {
    let e;
    (t[103] !== C || t[104] !== a || t[105] !== p || t[106] !== o
      ? ((e = (e, t) => {
          let n =
            e.key === `outputTokens` || e.key === `uncachedInputTokens` || e.key === `cachedInputTokens`
              ? e.key
              : (t) => t.tokensByModel[e.key]?.totalTokens ?? 0;
          return (0, Wr.jsx)(
            Lt,
            {
              className: de(
                !o.reduceMotion &&
                  `transition-opacity duration-basic ease-basic motion-reduce:transition-none`,
                C?.has(e.key) && `pointer-events-none opacity-0`,
              ),
              activeDot: !1,
              animationDuration: 200,
              animationEasing: `ease-out`,
              animationInterpolateFn: Un,
              animationMatchBy: En,
              dataKey: n,
              dot: !1,
              isAnimationActive:
                !o.reduceMotion && !!o.animateDataChanges && (a === `workspace` || p == null),
              name: e.key,
              onMouseEnter: () => {
                u(e.key);
              },
              onMouseLeave: () => {
                u(null);
              },
              shape: { visibleLength: null },
              stroke: Zt[t % Zt.length],
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              strokeWidth: 2,
              type: `linear`,
            },
            e.key,
          );
        }),
        (t[103] = C),
        (t[104] = a),
        (t[105] = p),
        (t[106] = o),
        (t[107] = e))
      : (e = t[107]),
      (xe = T.map(e)),
      (t[97] = C),
      (t[98] = a),
      (t[99] = T),
      (t[100] = p),
      (t[101] = o),
      (t[102] = xe));
  } else xe = t[102];
  let Se;
  t[108] !== S || t[109] !== w || t[110] !== p
    ? ((Se = (0, Wr.jsx)(Ln, { data: S, pointer: p, series: w })),
      (t[108] = S),
      (t[109] = w),
      (t[110] = p),
      (t[111] = Se))
    : (Se = t[111]);
  let Ce;
  t[112] !== y ||
  t[113] !== D ||
  t[114] !== O ||
  t[115] !== k ||
  t[116] !== A ||
  t[117] !== j ||
  t[118] !== M ||
  t[119] !== N ||
  t[120] !== P ||
  t[121] !== U ||
  t[122] !== be ||
  t[123] !== xe ||
  t[124] !== Se
    ? ((Ce = (0, Wr.jsxs)(y, {
        "aria-label": D,
        data: O,
        margin: k,
        onMouseDown: A,
        onMouseLeave: j,
        onMouseMove: M,
        children: [N, P, U, be, xe, Se],
      })),
      (t[112] = y),
      (t[113] = D),
      (t[114] = O),
      (t[115] = k),
      (t[116] = A),
      (t[117] = j),
      (t[118] = M),
      (t[119] = N),
      (t[120] = P),
      (t[121] = U),
      (t[122] = be),
      (t[123] = xe),
      (t[124] = Se),
      (t[125] = Ce))
    : (Ce = t[125]);
  let G;
  t[126] !== b || t[127] !== F || t[128] !== L || t[129] !== R || t[130] !== z || t[131] !== Ce
    ? ((G = (0, Wr.jsx)(b, {
        isTooltipDismissed: F,
        onResetHover: L,
        onTooltipDismissedChange: R,
        scope: z,
        children: Ce,
      })),
      (t[126] = b),
      (t[127] = F),
      (t[128] = L),
      (t[129] = R),
      (t[130] = z),
      (t[131] = Ce),
      (t[132] = G))
    : (G = t[132]);
  let we;
  return (
    t[133] !== x ||
    t[134] !== te ||
    t[135] !== B ||
    t[136] !== ne ||
    t[137] !== re ||
    t[138] !== ie ||
    t[139] !== ae ||
    t[140] !== oe ||
    t[141] !== ce ||
    t[142] !== le ||
    t[143] !== ue ||
    t[144] !== fe ||
    t[145] !== G
      ? ((we = (0, Wr.jsx)(x, {
          activeSeriesKey: te,
          emptyMessage: B,
          hasData: ne,
          preservePopulatedCardLayout: re,
          onToggleSeries: ie,
          scope: ae,
          hiddenSeriesKeys: oe,
          series: ce,
          status: le,
          title: ue,
          total: fe,
          children: G,
        })),
        (t[133] = x),
        (t[134] = te),
        (t[135] = B),
        (t[136] = ne),
        (t[137] = re),
        (t[138] = ie),
        (t[139] = ae),
        (t[140] = oe),
        (t[141] = ce),
        (t[142] = le),
        (t[143] = ue),
        (t[144] = fe),
        (t[145] = G),
        (t[146] = we))
      : (we = t[146]),
    we
  );
}
function Br(e, t) {
  t.preventDefault();
}
function Vr(e, t) {
  return {
    key: e.key,
    name: e.name,
    color: Zt[t % Zt.length],
    value: (t) =>
      e.key === `outputTokens` || e.key === `uncachedInputTokens` || e.key === `cachedInputTokens`
        ? t[e.key]
        : (t.tokensByModel[e.key]?.totalTokens ?? 0),
  };
}
var Hr, Ur, Wr;
function Gr() {
  return (Gr = e(() => {
    ((Hr = Ae()),
      re(),
      (Ur = Pe()),
      U(),
      At(),
      yt(),
      Mt(),
      St(),
      vt(),
      Xt(),
      hr(),
      _n(),
      hn(),
      Fn(),
      wn(),
      On(),
      zt(),
      (Wr = K()));
  }))();
}
function Kr(e, t, n) {
  let r = new Map(),
    i = [],
    a = {};
  for (let n of e) {
    if (n.attribution == null) return;
    let e = {};
    a[n.date] = 0;
    for (let i of n.attribution) {
      a[n.date] += i.value;
      let o = {
        feature: i.thread_source === `aeon_child` ? `agent_created_thread` : i.thread_source,
        "turn-start": `start-${i.turn_trigger}`,
        model: i.model,
        surface: i.surface,
      }[t];
      ((e[o] = (e[o] ?? 0) + i.value), r.set(o, (r.get(o) ?? 0) + i.value));
    }
    i.push({ date: n.date, values: e });
  }
  let o = [...r.entries()]
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, t]) => ({ key: e, total: t, label: n(e) }));
  return { data: i, series: o, total: o.reduce((e, t) => e + t.total, 0), bucketTotals: a };
}
function qr(e) {
  let t = (0, Yr.c)(14),
    { ariaLabel: n, breakdown: r, triggerWidth: i, onChange: a } = e,
    s = (i === void 0 ? `fixed` : i) === `fixed` && `w-32`,
    c;
  t[0] === s ? (c = t[1]) : ((c = de(`shrink-0`, s)), (t[0] = s), (t[1] = c));
  let l;
  t[2] === r
    ? (l = t[3])
    : ((l = (0, Xr.jsx)(`span`, { className: `truncate`, children: (0, Xr.jsx)(Jr, { breakdown: r }) })),
      (t[2] = r),
      (t[3] = l));
  let d;
  t[4] !== n || t[5] !== c || t[6] !== l
    ? ((d = (0, Xr.jsx)(We, { className: c, "aria-label": n, children: l })),
      (t[4] = n),
      (t[5] = c),
      (t[6] = l),
      (t[7] = d))
    : (d = t[7]);
  let f;
  t[8] !== r || t[9] !== a
    ? ((f = Zr.map((e) =>
        (0, Xr.jsx)(
          N.Item,
          {
            "aria-checked": r === e,
            RightIcon: r === e ? u : void 0,
            role: `menuitemradio`,
            onSelect: () => a(e),
            children: (0, Xr.jsx)(Jr, { breakdown: e }),
          },
          e,
        ),
      )),
      (t[8] = r),
      (t[9] = a),
      (t[10] = f))
    : (f = t[10]);
  let p;
  return (
    t[11] !== d || t[12] !== f
      ? ((p = (0, Xr.jsx)(o, { align: `start`, contentWidth: `menuNarrow`, triggerButton: d, children: f })),
        (t[11] = d),
        (t[12] = f),
        (t[13] = p))
      : (p = t[13]),
    p
  );
}
function Jr(e) {
  let t = (0, Yr.c)(2),
    { breakdown: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Xr.jsx)(g, {
          id: `consumerUsage.breakdown.label`,
          defaultMessage: `{breakdown, select, feature {By feature} model {By model} surface {By surface} other {By turn start}}`,
          description: `Chart grouping options; all options include usage from every feature. By turn start groups usage by what started each turn`,
          values: { breakdown: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Yr, Xr, Zr;
function Qr() {
  return (Qr = e(() => {
    ((Yr = Ae()),
      re(),
      U(),
      a(),
      j(),
      pt(),
      (Xr = K()),
      (Zr = [`feature`, `model`, `surface`, `turn-start`]));
  }))();
}
function $r(e, t, n) {
  if (n === `model` && t !== `unknown`) return t;
  switch (t) {
    case `cli`:
    case `mobile`:
    case `slack`:
    case `linear`:
    case `jetbrains`:
    case `sdk`:
    case `exec`:
    case `github`:
    case `github_code_review`:
    case `codex_security_cloud`:
    case `other`:
      return e.formatMessage(mr[t]);
  }
  if (n === `turn-start`) {
    let n = t.slice(6);
    return (
      e.formatMessage(
        {
          id: `consumerUsage.series.turnTriggerLabel`,
          defaultMessage: `{trigger, select,
        user {User messages}
        composer {User messages}
        composer_queue {Queued messages}
        composer_queue_run_now {Manually started queued messages}
        automation_cron_scheduled {Scheduled automations}
        automation_cron_run_now {Manually started automations}
        automation_heartbeat_scheduled {Scheduled follow-ups}
        automation_heartbeat_run_now {Manually started follow-ups}
        ambient_suggestion_task {Suggested tasks}
        environment_onboarding {Environment setup}
        pull_request_review_chat {PR review conversations}
        app_tool_create_thread {Agent-created chats}
        app_tool_send_message {Agent follow-ups}
        app_update_resume {App update resumes}
        artifact_comment {Artifact comments}
        avatar_quick_chat {Avatar chats}
        avatar_follow_up {Avatar follow-ups}
        avatar_implement_plan {Avatar plan execution}
        capacity_retry_automatic {Automatic retries after capacity limits}
        capacity_retry_manual {Manual retries after capacity limits}
        chatgpt_handoff {ChatGPT handoffs}
        code_review {Code review}
        codex_replay {Codex replay}
        conversational_onboarding {Onboarding}
        conversational_onboarding_revert {Onboarding resets}
        edit_user_message {Edited messages}
        image_edit {Image edits}
        implement_todo {TODO implementation}
        local_environment_configuration {Environment configuration}
        mcp_app_follow_up {App follow-ups}
        notification_reply {Notification replies}
        onboarding_checklist {Onboarding checklist}
        plan_feedback {Plan feedback}
        plan_implementation {Plan implementation}
        plugin_suggestion_connected {Connected plugin suggestions}
        pull_request_fix_setup {PR fix setup}
        queued_side_chat {Queued side chats}
        resume_interrupted_task {Resumed tasks}
        safety_buffer_retry {Safety retries}
        send_user_message_async_question {Replies to agent questions}
        security_remediation {Security remediation}
        security_scan {Security scans}
        side_chat {Side chats}
        slides_outline {Slide outlines}
        thread_handoff {Task handoffs}
        visualization_follow_up {Visualization follow-ups}
        visualization_repair {Visualization repairs}
        visualization_sites_handoff {Site creation from visualizations}
        guardian_classifier {Auto review checks}
        guardian_review {Auto review}
        goal {Goal continuations}
        queue {Queued turns}
        retry {Retries}
        realtime {Realtime}
        persistent_mode {Persistent continuations}
        unknown {Unknown}
        other {}
      }`,
          description: `Legend label for the recorded reason a chat turn started. User messages come from the composer. Automations run on a recurring schedule; follow-ups are scheduled within an existing chat. Run now means manually started. Queued messages wait for an active turn to finish. Unrecognized identifiers are shown as readable words; their underlying category is unchanged.`,
        },
        { trigger: n },
      ) || $r(e, n, `feature`)
    );
  }
  return e.formatMessage(
    {
      id: `consumerUsage.series.sourceLabel`,
      defaultMessage: `{key, select,
        agent_created_thread {Agent-created chats}
        agent_forked_thread {Agent-forked chats}
        ambient_suggestion_safety {Suggestion safety checks}
        ambient_suggestion_task {Suggested tasks}
        ambient_suggestions {Proactive suggestions}
        automated_review {Automated code review}
        automation {Automations}
        avatar_quick_chat {Avatar chats}
        chatgpt_handoff {ChatGPT handoffs}
        code_review {Code review}
        codex_replay {Codex replay}
        codex_web_code_review {Cloud code review}
        codex_web_pr {Cloud coding}
        codex_web_qa {Cloud questions}
        codex_web_security_review {Cloud security review}
        commit_message {Commit messages}
        commit_pull_request_message {Commit and PR descriptions}
        computer_history {Computer history}
        conversation_digest {Conversation digests}
        conversational_onboarding {Onboarding}
        dictation_cleanup {Dictation cleanup}
        guardian_classifier {Auto review checks}
        guardian_review {Auto review}
        implement_todo {TODO implementation}
        inline_edit {Inline edits}
        local_environment_configuration {Environment configuration}
        mcp_app_follow_up {App follow-ups}
        mcp_extension_host {App integrations}
        memory_consolidation {Memory updates}
        onboarding_checklist {Onboarding checklist}
        pull_request_fix_automation {Automated PR fixes}
        pull_request_message {PR descriptions}
        realtime_voice {Realtime voice}
        security_remediation {Security remediation}
        security_scan {Security scans}
        subagent {Subagents}
        system {System}
        thread_description {Chat descriptions}
        thread_summary {Chat summaries}
        thread_title {Chat titles}
        thread_title_reconsideration {Chat title updates}
        title {Titles}
        title_generation {Title generation}
        user {Chats}
        voice_chat {Voice chats}
        worktree_setup_auto_fix {Worktree setup repairs}
        vscode {VS Code}
        web {Web}
        work_web {Web (Work)}
        work_mobile {Mobile (Work)}
        desktop_app {Desktop app}
        work_desktop {Desktop (Work)}
        agent_identity {Workspace agents}
        unknown {Unknown}
      other {{fallback}}
    }`,
      description: `Legend label for a recorded consumer usage source. Chats are user-created conversations; technical sources are separate categories. Preserve brand names. Unrecognized identifiers are shown as readable words without merging categories. Model identifiers bypass this formatter.`,
    },
    { key: t, fallback: (0, ei.default)(t.replace(/[_:-]+/g, ` `)) },
  );
}
var ei;
function ti() {
  return (ti = e(() => {
    ((ei = t(Ue(), 1)), hr());
  }))();
}
function ni(e) {
  let t = (0, ri.c)(55),
    { buckets: r, days: i, onDaysChange: a, pagination: o, status: s } = e,
    c = (0, ii.use)(xn)?.scope ?? null,
    l = ee(),
    [u, d] = (0, ii.useState)(`feature`),
    [f, p] = (0, ii.useState)(!1),
    [m, h] = (0, ii.useState)(0),
    _;
  t[0] !== u || t[1] !== r || t[2] !== l
    ? ((_ = r == null ? void 0 : Kr(r, u, (e) => $r(l, e, u))),
      (t[0] = u),
      (t[1] = r),
      (t[2] = l),
      (t[3] = _))
    : (_ = t[3]);
  let v = _,
    y;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, ai.jsx)(J.Header, {
        subtitleWrap: `wrap`,
        title: (0, ai.jsx)(g, {
          id: `consumerUsage.history.title`,
          defaultMessage: `Usage history`,
          description: `Heading for total usage across plan allowances and purchased credits`,
        }),
        subtitle: (0, ai.jsx)(g, {
          id: `consumerUsage.history.description`,
          defaultMessage: `See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.`,
          description: `Description of usage history covering plan allowances and credits for agentic work, excluding Chat conversations`,
        }),
      })),
      (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] === l
    ? (b = t[6])
    : ((b = l.formatMessage({
        id: `consumerAnalyticsPreview.history.period`,
        defaultMessage: `Usage history date range`,
        description: `Accessible label for the date range of total usage history, including plan usage and credits`,
      })),
      (t[5] = l),
      (t[6] = b));
  let x;
  t[7] === a
    ? (x = t[8])
    : ((x = (e) => {
        (h(0), a(e));
      }),
      (t[7] = a),
      (t[8] = x));
  let C;
  t[9] !== i || t[10] !== b || t[11] !== x
    ? ((C = (0, ai.jsx)(Vt, { ariaLabel: b, days: i, onChange: x })),
      (t[9] = i),
      (t[10] = b),
      (t[11] = x),
      (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] === l
    ? (w = t[14])
    : ((w = l.formatMessage({
        id: `consumerUsage.history.breakdown`,
        defaultMessage: `Group usage history`,
        description: `Accessible label for grouping total usage by feature, model, surface, or how each turn started`,
      })),
      (t[13] = l),
      (t[14] = w));
  let T;
  t[15] !== c || t[16] !== u
    ? ((T = (e) => {
        e !== u && ((e === `model` || e === `surface`) && mn(c, `usage_history`, e), p(!0), d(e));
      }),
      (t[15] = c),
      (t[16] = u),
      (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] !== u || t[19] !== w || t[20] !== T
    ? ((E = (0, ai.jsx)(qr, { ariaLabel: w, breakdown: u, triggerWidth: `content`, onChange: T })),
      (t[18] = u),
      (t[19] = w),
      (t[20] = T),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] !== C || t[23] !== E
    ? ((D = (0, ai.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-between gap-2 select-none`,
        children: [C, E],
      })),
      (t[22] = C),
      (t[23] = E),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] === l
    ? (O = t[26])
    : ((O = l.formatMessage({
        id: `consumerUsage.history.chartLabel`,
        defaultMessage: `Compare total usage by day, including plan usage and credits.`,
        description: `Accessible description of relative daily usage across plan allowances and purchased credits`,
      })),
      (t[25] = l),
      (t[26] = O));
  let k = o?.offsetDays,
    A;
  t[27] !== i || t[28] !== k ? ((A = fn(i, k)), (t[27] = i), (t[28] = k), (t[29] = A)) : (A = t[29]);
  let j;
  t[30] !== i || t[31] !== l || t[32] !== o || t[33] !== s.isLoading || t[34] !== s.isUpdating
    ? ((j =
        o == null
          ? void 0
          : (0, ai.jsxs)(`div`, {
              className: `flex items-center justify-end`,
              children: [
                (0, ai.jsx)(n, {
                  "aria-label": l.formatMessage({
                    id: `consumerUsage.history.previousPeriod`,
                    defaultMessage: `Previous period`,
                    description: `Move the usage history chart to the previous 7-day or 30-day period`,
                  }),
                  color: `ghostActive`,
                  radius: `large`,
                  size: `iconCircle`,
                  disabled: s.isLoading || s.isUpdating,
                  onClick: () => {
                    (p(!1), h(-1), o.onOffsetDaysChange(o.offsetDays + i));
                  },
                  children: (0, ai.jsx)(S, { className: `rtl:rotate-180`, asset: me }),
                }),
                (0, ai.jsx)(n, {
                  "aria-label": l.formatMessage({
                    id: `consumerUsage.history.nextPeriod`,
                    defaultMessage: `Next period`,
                    description: `Move the usage history chart to the next 7-day or 30-day period, up to the current period`,
                  }),
                  color: `ghostActive`,
                  radius: `large`,
                  size: `iconCircle`,
                  disabled: o.offsetDays === 0 || s.isLoading || s.isUpdating,
                  onClick: () => {
                    (p(!1), h(1), o.onOffsetDaysChange(Math.max(0, o.offsetDays - i)));
                  },
                  children: (0, ai.jsx)(S, { className: `rtl:rotate-180`, asset: Ce }),
                }),
              ],
            })),
      (t[30] = i),
      (t[31] = l),
      (t[32] = o),
      (t[33] = s.isLoading),
      (t[34] = s.isUpdating),
      (t[35] = j))
    : (j = t[35]);
  let M;
  t[36] !== r || t[37] !== v
    ? ((M =
        r != null && v == null
          ? (0, ai.jsx)(g, {
              id: `consumerUsage.history.unavailableAttribution`,
              defaultMessage: `Usage breakdown is unavailable for this period`,
              description: `Shown when historical usage exists but the API does not have category attribution for the selected dates`,
            })
          : (0, ai.jsx)(g, {
              id: `consumerUsage.history.emptyPeriod`,
              defaultMessage: `No usage recorded during this period`,
              description: `Shown when no plan usage or purchased credits were consumed during the selected usage history period`,
            })),
      (t[36] = r),
      (t[37] = v),
      (t[38] = M))
    : (M = t[38]);
  let N = (v?.data.length ?? i) > 7 ? 18 : 38,
    P = !s.reduceMotion && (f || (m === 0 && s.animateDataChanges)),
    F;
  t[39] === Symbol.for(`react.memo_cache_sentinel`) ? ((F = () => p(!1)), (t[39] = F)) : (F = t[39]);
  let I;
  t[40] !== s || t[41] !== P
    ? ((I = { ...s, animateDataChanges: P, onAnimationEnd: F }), (t[40] = s), (t[41] = P), (t[42] = I))
    : (I = t[42]);
  let L;
  t[43] !== v ||
  t[44] !== m ||
  t[45] !== O ||
  t[46] !== A ||
  t[47] !== j ||
  t[48] !== M ||
  t[49] !== N ||
  t[50] !== I
    ? ((L = (0, ai.jsx)(Or, {
        consumerAnalytics: !0,
        selectedDayLegend: !0,
        breakdown: `model`,
        scope: `consumer`,
        isPersonalUsage: !0,
        preservePopulatedCardLayout: !0,
        ariaLabel: O,
        data: v,
        dateRange: A,
        hideTotal: !0,
        rangeDirection: m,
        actions: j,
        emptyMessage: M,
        barSize: N,
        status: I,
      })),
      (t[43] = v),
      (t[44] = m),
      (t[45] = O),
      (t[46] = A),
      (t[47] = j),
      (t[48] = M),
      (t[49] = N),
      (t[50] = I),
      (t[51] = L))
    : (L = t[51]);
  let R;
  return (
    t[52] !== L || t[53] !== D
      ? ((R = (0, ai.jsxs)(J, {
          children: [y, (0, ai.jsxs)(J.Content, { className: `gap-3`, children: [D, L] })],
        })),
        (t[52] = L),
        (t[53] = D),
        (t[54] = R))
      : (R = t[54]),
    R
  );
}
var ri, ii, ai;
function oi() {
  return (oi = e(() => {
    ((ri = Ae()),
      fe(),
      W(),
      (ii = Pe()),
      U(),
      De(),
      w(),
      Re(),
      Rt(),
      Rr(),
      ln(),
      Pn(),
      Qr(),
      ti(),
      (ai = K()));
  }))();
}
function si(e, t) {
  if (e?.data_as_of == null) return;
  let n = Date.parse(e.data_as_of),
    r = { feature: `thread_source`, "turn-start": `turn_trigger`, model: `model`, surface: `surface` }[
      t.breakdown
    ];
  return {
    asOf: n,
    coverage: e.coverage_complete ? `complete` : `partial`,
    periods: e.periods
      .filter((e) => e.window_minutes === (t.limit === `fiveHour` ? 300 : 10080))
      .sort((e, t) => Date.parse(t.starts_at) - Date.parse(e.starts_at))
      .map((e) => {
        let t = e.breakdowns?.find((e) => e.dimension === r);
        return {
          id: e.id,
          interval: { startAt: Date.parse(e.starts_at), endAt: Date.parse(e.ends_at) },
          status: Date.parse(e.ends_at) > n ? `current` : `ended`,
          usedBasisPoints: e.used_basis_points,
          accountingComplete: e.accounting_complete,
          breakdown:
            t == null
              ? null
              : {
                  rows: t.rows.map((e) => ({
                    key: r === `turn_trigger` ? `start-${e.key}` : e.key,
                    basisPoints: e.basis_points,
                  })),
                },
        };
      }),
  };
}
function ci(e) {
  let t = (0, mi.c)(55),
    { period: r, asOf: i, limit: a, breakdown: o, expanded: s, onToggle: c, reduceMotion: l } = e,
    u = ee(),
    d = (0, hi.useId)(),
    f;
  t[0] !== u || t[1] !== a || t[2] !== r.interval.endAt || t[3] !== r.interval.startAt || t[4] !== r.status
    ? ((f = u.formatMessage(
        {
          id: `consumerAnalyticsPreview.limitHistory.openPeriod`,
          defaultMessage: `{limit, select, fiveHour {5-hour period} other {Weekly period}} from {start} to {end} UTC{current, select, yes {, current at last update} other {}}`,
          description: `Expand or collapse the usage details for this exact reset period, including full dates and current-period status`,
        },
        {
          limit: a,
          start: u.formatDate(r.interval.startAt, {
            year: `numeric`,
            month: `short`,
            day: `numeric`,
            hour: `numeric`,
            minute: `2-digit`,
            timeZone: `UTC`,
          }),
          end: u.formatDate(r.interval.endAt, {
            year: `numeric`,
            month: `short`,
            day: `numeric`,
            hour: `numeric`,
            minute: `2-digit`,
            timeZone: `UTC`,
          }),
          current: r.status === `current` ? `yes` : `no`,
        },
      )),
      (t[0] = u),
      (t[1] = a),
      (t[2] = r.interval.endAt),
      (t[3] = r.interval.startAt),
      (t[4] = r.status),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] !== s || t[7] !== c || t[8] !== p || t[9] !== d
    ? ((m = (0, X.jsx)(n, {
        className: `absolute inset-0 w-full`,
        "aria-controls": d,
        "aria-expanded": s,
        "aria-label": p,
        color: `ghostMuted`,
        focusRing: `inset`,
        size: `inline`,
        onPointerDown: li,
        onClick: c,
      })),
      (t[6] = s),
      (t[7] = c),
      (t[8] = p),
      (t[9] = d),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== p || t[12] !== m
    ? ((h = (0, X.jsx)(Ee, { tooltipContent: p, closeOnTriggerClick: !0, children: m })),
      (t[11] = p),
      (t[12] = m),
      (t[13] = h))
    : (h = t[13]);
  let _;
  t[14] !== u || t[15] !== a || t[16] !== r.interval.endAt || t[17] !== r.interval.startAt
    ? ((_ = u.formatDateTimeRange(r.interval.startAt, r.interval.endAt, {
        month: `short`,
        day: `numeric`,
        ...(a === `fiveHour` ? { hour: `numeric`, minute: `2-digit` } : {}),
        timeZone: `UTC`,
      })),
      (t[14] = u),
      (t[15] = a),
      (t[16] = r.interval.endAt),
      (t[17] = r.interval.startAt),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] === _
    ? (v = t[20])
    : ((v = (0, X.jsx)(`span`, { className: `min-w-0 whitespace-normal`, children: _ })),
      (t[19] = _),
      (t[20] = v));
  let y = s ? se : _e,
    b;
  t[21] === y
    ? (b = t[22])
    : ((b = (0, X.jsx)(S, { className: `shrink-0`, asset: y, focusable: `false` })),
      (t[21] = y),
      (t[22] = b));
  let x;
  t[23] !== v || t[24] !== b
    ? ((x = (0, X.jsxs)(`span`, {
        className: `pointer-events-none relative flex items-center gap-2`,
        children: [v, b],
      })),
      (t[23] = v),
      (t[24] = b),
      (t[25] = x))
    : (x = t[25]);
  let C;
  t[26] !== i || t[27] !== u || t[28] !== r.status
    ? ((C =
        r.status === `current`
          ? (0, X.jsxs)(`span`, {
              className: `pointer-events-none relative mt-1 flex items-center gap-1 text-xs text-secondary`,
              children: [
                (0, X.jsx)(g, {
                  id: `consumerUsage.limitHistory.bucketDataAsOf`,
                  defaultMessage: `Usage as of {asOf}`,
                  description: `Data timestamp for this allowance period, rather than the time the page was refreshed`,
                  values: {
                    asOf: (0, X.jsx)(A, {
                      value: i,
                      month: `short`,
                      day: `numeric`,
                      hour: `numeric`,
                      minute: `2-digit`,
                      timeZone: `UTC`,
                      timeZoneName: `short`,
                    }),
                  },
                }),
                (0, X.jsx)(`span`, {
                  className: `pointer-events-auto`,
                  children: (0, X.jsx)(Ee, {
                    cloneCustomTrigger: !0,
                    tooltipContent: (0, X.jsx)(g, {
                      id: `consumerUsage.limitHistory.dailyCalculationNotice`,
                      defaultMessage: `Calculations run daily. Usage for this period may be out of date.`,
                      description: `Explains why the allowance period still open at the last daily calculation may not include recent usage`,
                    }),
                    children: (0, X.jsx)(n, {
                      "aria-label": u.formatMessage({
                        id: `consumerUsage.limitHistory.staleUsage`,
                        defaultMessage: `Usage may be out of date`,
                        description: `Accessible label for the explanation of delayed usage calculations for this period`,
                      }),
                      color: `ghostTertiary`,
                      size: `inline`,
                      children: (0, X.jsx)(Fe, {}),
                    }),
                  }),
                }),
              ],
            })
          : null),
      (t[26] = i),
      (t[27] = u),
      (t[28] = r.status),
      (t[29] = C))
    : (C = t[29]);
  let w;
  t[30] !== h || t[31] !== x || t[32] !== C
    ? ((w = (0, X.jsxs)(`th`, {
        className: `px-4 py-3 text-start font-normal`,
        scope: `row`,
        children: [h, x, C],
      })),
      (t[30] = h),
      (t[31] = x),
      (t[32] = C),
      (t[33] = w))
    : (w = t[33]);
  let T;
  t[34] === r.usedBasisPoints
    ? (T = t[35])
    : ((T = (0, X.jsx)(`td`, {
        className: `pointer-events-none px-4 py-3 text-end align-top font-semibold tabular-nums`,
        children:
          r.usedBasisPoints == null
            ? (0, X.jsx)(g, {
                id: `consumerAnalyticsPreview.limitHistory.totalUnavailable`,
                defaultMessage: `Not available`,
                description: `The total for this period was not provided; never display it as zero`,
              })
            : (0, X.jsx)(pi, { basisPoints: r.usedBasisPoints }),
      })),
      (t[34] = r.usedBasisPoints),
      (t[35] = T));
  let E;
  t[36] !== w || t[37] !== T
    ? ((E = (0, X.jsxs)(`tr`, {
        className: `relative border-t border-default hover:bg-primary-ghost-hover has-[:focus-visible]:bg-primary-ghost-hover`,
        children: [w, T],
      })),
      (t[36] = w),
      (t[37] = T),
      (t[38] = E))
    : (E = t[38]);
  let D = !s,
    O;
  t[39] !== o || t[40] !== s || t[41] !== r || t[42] !== l
    ? ((O = s ? (0, X.jsx)(ui, { period: r, breakdown: o, reduceMotion: l }) : null),
      (t[39] = o),
      (t[40] = s),
      (t[41] = r),
      (t[42] = l),
      (t[43] = O))
    : (O = t[43]);
  let j;
  t[44] === O ? (j = t[45]) : ((j = (0, X.jsx)(k, { initial: !1, children: O })), (t[44] = O), (t[45] = j));
  let M;
  t[46] !== d || t[47] !== j
    ? ((M = (0, X.jsx)(`td`, { id: d, className: `p-0`, colSpan: 2, children: j })),
      (t[46] = d),
      (t[47] = j),
      (t[48] = M))
    : (M = t[48]);
  let N;
  t[49] !== D || t[50] !== M
    ? ((N = (0, X.jsx)(`tr`, { "aria-hidden": D, children: M })), (t[49] = D), (t[50] = M), (t[51] = N))
    : (N = t[51]);
  let P;
  return (
    t[52] !== E || t[53] !== N
      ? ((P = (0, X.jsxs)(X.Fragment, { children: [E, N] })), (t[52] = E), (t[53] = N), (t[54] = P))
      : (P = t[54]),
    P
  );
}
function li(e) {
  e.button === 0 && e.currentTarget.blur();
}
function ui(e) {
  let t = (0, mi.c)(22),
    { period: n, breakdown: r, reduceMotion: i } = e,
    a = ee(),
    [o, s] = (0, hi.useState)(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e) => {
        s(F(e).height);
      }),
      (t[0] = c))
    : (c = t[0]);
  let l = m(c),
    u = o ?? `auto`,
    d;
  t[1] === u ? (d = t[2]) : ((d = { height: u }), (t[1] = u), (t[2] = d));
  let f, p;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = { height: 0 }), (p = { height: 0 }), (t[3] = f), (t[4] = p))
    : ((f = t[3]), (p = t[4]));
  let h;
  t[5] === i ? (h = t[6]) : ((h = i ? { duration: 0 } : Te), (t[5] = i), (t[6] = h));
  let _;
  t[7] === n.accountingComplete
    ? (_ = t[8])
    : ((_ = n.accountingComplete
        ? null
        : (0, X.jsx)(`p`, {
            className: `text-secondary`,
            children: (0, X.jsx)(g, {
              id: `consumerUsage.limitHistory.incompleteAccounting`,
              defaultMessage: `Some usage is unavailable; this period may be incomplete`,
              description: `Some observations could not be accounted for, even when a known approximate amount is shown`,
            }),
          })),
      (t[7] = n.accountingComplete),
      (t[8] = _));
  let v;
  t[9] !== r || t[10] !== a || t[11] !== n.accountingComplete || t[12] !== n.breakdown
    ? ((v =
        n.breakdown == null
          ? (0, X.jsx)(`p`, {
              className: `text-xs text-secondary`,
              children: (0, X.jsx)(g, {
                id: `consumerAnalyticsPreview.limitHistory.breakdownUnavailable`,
                defaultMessage: `Breakdown isn't available for this period`,
                description: `A known limit period can lack attribution data; never substitute another period's data or sample rows`,
              }),
            })
          : (0, X.jsxs)(X.Fragment, {
              children: [
                (0, X.jsx)(`dl`, {
                  className: `flex flex-col gap-2.5`,
                  children: n.breakdown.rows
                    .filter(fi)
                    .map((e) =>
                      (0, X.jsxs)(
                        `div`,
                        {
                          className: `flex items-start justify-between gap-4`,
                          children: [
                            (0, X.jsx)(`dt`, { className: `text-secondary`, children: $r(a, e.key, r) }),
                            (0, X.jsx)(`dd`, {
                              className: `text-end tabular-nums`,
                              children: (0, X.jsx)(pi, { basisPoints: e.basisPoints }),
                            }),
                          ],
                        },
                        e.key,
                      ),
                    ),
                }),
                n.accountingComplete && n.breakdown.rows.every(di)
                  ? (0, X.jsx)(`p`, {
                      className: `text-secondary`,
                      children: (0, X.jsx)(g, {
                        id: `consumerAnalyticsPreview.limitHistory.noContributions`,
                        defaultMessage: `No usage to show for this breakdown`,
                        description: `No positive contributions exist for this grouping in the selected period`,
                      }),
                    })
                  : null,
              ],
            })),
      (t[9] = r),
      (t[10] = a),
      (t[11] = n.accountingComplete),
      (t[12] = n.breakdown),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] !== l || t[15] !== _ || t[16] !== v
    ? ((y = (0, X.jsxs)(`div`, { ref: l, className: `flex flex-col gap-3 px-4 pb-3`, children: [_, v] })),
      (t[14] = l),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y))
    : (y = t[17]);
  let b;
  return (
    t[18] !== d || t[19] !== h || t[20] !== y
      ? ((b = (0, X.jsx)(ie.div, {
          className: `overflow-hidden`,
          animate: d,
          exit: f,
          initial: p,
          transition: h,
          children: y,
        })),
        (t[18] = d),
        (t[19] = h),
        (t[20] = y),
        (t[21] = b))
      : (b = t[21]),
    b
  );
}
function di(e) {
  return e.basisPoints === 0;
}
function fi(e) {
  return e.basisPoints > 0;
}
function pi(e) {
  let t = (0, mi.c)(2),
    { basisPoints: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n > 0 && n < 10
            ? (0, X.jsx)(g, {
                id: `consumerAnalyticsPreview.limitHistory.belowPrecision`,
                defaultMessage: `<{threshold}`,
                description: `Positive plan usage below the displayed one-decimal percentage precision; less than 0.1 percent, not zero usage`,
                values: {
                  threshold: (0, X.jsx)(l, { value: 0.001, style: `percent`, maximumFractionDigits: 1 }),
                },
              })
            : (0, X.jsx)(l, { value: n / 1e4, style: `percent`, maximumFractionDigits: 1 })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var mi, hi, X;
function gi() {
  return (gi = e(() => {
    ((mi = Ae()), ue(), ke(), c(), V(), (hi = Pe()), U(), De(), w(), j(), ae(), C(), O(), ti(), (X = K()));
  }))();
}
var _i;
function vi() {
  return (vi = e(() => {
    (p(),
      (_i = xe({
        data_as_of: Se({ offset: !0 }).nullable(),
        coverage_start: Se({ offset: !0 }).nullable(),
        coverage_complete: ne(),
        approximate: ne().default(!0),
        boundary_tolerance_seconds: ce().nullable(),
        periods: be(
          xe({
            id: M(),
            window_minutes: b([r(300), r(10080)]),
            plan_type: M(),
            starts_at: Se({ offset: !0 }),
            ends_at: Se({ offset: !0 }),
            accounting_complete: ne(),
            used_basis_points: ce().nullable(),
            breakdowns: be(
              xe({
                dimension: ye([`thread_source`, `turn_trigger`, `model`, `surface`]),
                rows: be(xe({ key: M(), basis_points: ce() })),
              }),
            ).nullable(),
          }),
        ),
      })));
  }))();
}
function yi({ accountId: e, userId: t, authMethod: n }, r = !0, i = !0) {
  return {
    queryKey: [`consumer-plan-limit-history`, e, t, 7],
    enabled: r && n === `chatgpt` && e != null && t != null,
    queryFn: async ({ signal: e }) => {
      try {
        let t = await at.safeGet(`/wham/usage/plan_limit_history`, {
          parameters: { query: { days: 7 } },
          signal: e,
          expectedErrorStatuses: [404],
        });
        return _i.parse(t);
      } catch (e) {
        if (e instanceof pe && e.status === 404) return null;
        throw e;
      }
    },
    retry: !1,
    staleTime: T.FIVE_MINUTES,
    refetchInterval: i ? T.FIVE_MINUTES : !1,
    refetchOnWindowFocus: !1,
  };
}
function bi() {
  return (bi = e(() => {
    (h(), ft(), le(), vi());
  }))();
}
function xi(e) {
  let t = (0, Ti.c)(56),
    { isActive: r, isPolling: i, reduceMotion: a } = e,
    o = i === void 0 || i,
    s = ut(),
    c;
  t[0] !== s || t[1] !== r || t[2] !== o
    ? ((c = yi(s, r, o)), (t[0] = s), (t[1] = r), (t[2] = o), (t[3] = c))
    : (c = t[3]);
  let { data: l, isLoading: u, isError: d, refetch: f } = I(c),
    p = l ?? void 0,
    m;
  t[4] !== d || t[5] !== u
    ? ((m = `ready`), u ? (m = `loading`) : d && (m = `error`), (t[4] = d), (t[5] = u), (t[6] = m))
    : (m = t[6]);
  let h = ee(),
    [_, v] = (0, Ei.useState)(`feature`),
    y;
  t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = [`fiveHour`, `weekly`]), (t[7] = y)) : (y = t[7]);
  let b;
  t[8] !== p || t[9] !== m
    ? ((b = y.filter(
        (e) =>
          m !== `ready` ||
          p?.data_as_of == null ||
          p.periods.length === 0 ||
          p.periods.some((t) => t.window_minutes === (e === `fiveHour` ? 300 : 10080)),
      )),
      (t[8] = p),
      (t[9] = m),
      (t[10] = b))
    : (b = t[10]);
  let x = b,
    S;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(g, {
        id: `consumerAnalyticsPreview.limitHistory.title`,
        defaultMessage: `Plan usage history`,
        description: `Analytics section for exploring current and past five-hour and weekly plan allowances separately`,
      })),
      (t[11] = S))
    : (S = t[11]);
  let C;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(g, {
          id: `consumerAnalyticsPreview.limitHistory.description`,
          defaultMessage: `See what used each of your plan limits`,
          description: `Explains the period-by-period allowance breakdown, separate from total usage and purchased credit history`,
        }),
      })),
      (t[12] = C))
    : (C = t[12]);
  let w;
  t[13] === _
    ? (w = t[14])
    : ((w =
        _ === `turn-start`
          ? (0, Z.jsx)(`p`, {
              children: (0, Z.jsx)(g, {
                id: `consumerUsage.limitHistory.tasksOnly`,
                defaultMessage: `By turn start includes Chats only; percentages use the full period limit`,
                description: `Allowance history turn-trigger breakdown excludes other features and need not sum to the period total`,
              }),
            })
          : null),
      (t[13] = _),
      (t[14] = w));
  let T;
  t[15] !== p?.approximate || t[16] !== m
    ? ((T =
        p?.approximate && m === `ready`
          ? (0, Z.jsx)(`p`, {
              children: (0, Z.jsx)(g, {
                id: `consumerUsage.limitHistory.approximateAmounts`,
                defaultMessage: `Amounts and period boundaries are approximate`,
                description: `Explains that historical usage amounts and allowance period boundaries are estimates`,
              }),
            })
          : null),
      (t[15] = p?.approximate),
      (t[16] = m),
      (t[17] = T))
    : (T = t[17]);
  let E;
  t[18] !== p || t[19] !== m
    ? ((E =
        m === `ready` && p?.coverage_complete === !1 && p.periods.length > 0
          ? (0, Z.jsx)(`p`, {
              children: (0, Z.jsx)(g, {
                id: `consumerAnalyticsPreview.limitHistory.partial`,
                defaultMessage: `Some periods aren't available yet`,
                description: `The response does not cover the full selected lookback; absence of rows must not imply no usage`,
              }),
            })
          : null),
      (t[18] = p),
      (t[19] = m),
      (t[20] = E))
    : (E = t[20]);
  let D;
  t[21] !== w || t[22] !== T || t[23] !== E
    ? ((D = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [C, w, T, E] })),
      (t[21] = w),
      (t[22] = T),
      (t[23] = E),
      (t[24] = D))
    : (D = t[24]);
  let O;
  t[25] === h
    ? (O = t[26])
    : ((O = h.formatMessage({
        id: `consumerUsage.limitHistory.details`,
        defaultMessage: `About plan usage history`,
        description: `Accessible label for the tooltip explaining plan usage history coverage and timing`,
      })),
      (t[25] = h),
      (t[26] = O));
  let k;
  t[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((k = (0, Z.jsx)(Fe, {})), (t[27] = k)) : (k = t[27]);
  let A;
  t[28] === O
    ? (A = t[29])
    : ((A = (0, Z.jsx)(n, { "aria-label": O, color: `ghostTertiary`, size: `inline`, children: k })),
      (t[28] = O),
      (t[29] = A));
  let j;
  t[30] !== D || t[31] !== A
    ? ((j = (0, Z.jsxs)(`span`, {
        className: `inline-flex items-center gap-2`,
        children: [
          S,
          (0, Z.jsx)(Ee, {
            cloneCustomTrigger: !0,
            side: `bottom`,
            align: `start`,
            tooltipContent: D,
            children: A,
          }),
        ],
      })),
      (t[30] = D),
      (t[31] = A),
      (t[32] = j))
    : (j = t[32]);
  let M;
  t[33] === h
    ? (M = t[34])
    : ((M = h.formatMessage({
        id: `consumerAnalyticsPreview.limitHistory.sharedGroup`,
        defaultMessage: `Group plan usage history`,
        description: `Choose the breakdown for both the five-hour and weekly limit tables without changing their periods, total percentages, or other analytics sections`,
      })),
      (t[33] = h),
      (t[34] = M));
  let N;
  t[35] !== _ || t[36] !== M
    ? ((N = (0, Z.jsx)(qr, { ariaLabel: M, breakdown: _, onChange: v })),
      (t[35] = _),
      (t[36] = M),
      (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] !== j || t[39] !== N
    ? ((P = (0, Z.jsx)(J.Header, {
        className: `@max-2xl:flex-col @max-2xl:items-start`,
        actionsAlignment: `end`,
        title: j,
        actions: N,
      })),
      (t[38] = j),
      (t[39] = N),
      (t[40] = P))
    : (P = t[40]);
  let F = x.length > 1 && `@2xl:grid-cols-2`,
    L;
  t[41] === F ? (L = t[42]) : ((L = de(`grid grid-cols-1 items-start gap-6`, F)), (t[41] = F), (t[42] = L));
  let R;
  t[43] !== _ || t[44] !== p || t[45] !== x || t[46] !== a || t[47] !== f || t[48] !== m
    ? ((R = x.map((e) =>
        (0, Z.jsx)(
          Si,
          { limit: e, breakdown: _, data: p, state: m, onRetry: () => void f(), reduceMotion: a },
          `${e}:${p?.data_as_of}`,
        ),
      )),
      (t[43] = _),
      (t[44] = p),
      (t[45] = x),
      (t[46] = a),
      (t[47] = f),
      (t[48] = m),
      (t[49] = R))
    : (R = t[49]);
  let z;
  t[50] !== L || t[51] !== R
    ? ((z = (0, Z.jsx)(J.Content, {
        className: `gap-4`,
        children: (0, Z.jsx)(`div`, { className: L, children: R }),
      })),
      (t[50] = L),
      (t[51] = R),
      (t[52] = z))
    : (z = t[52]);
  let te;
  return (
    t[53] !== P || t[54] !== z
      ? ((te = (0, Z.jsxs)(J, {
          id: `consumer-plan-limit-history`,
          className: `@container`,
          children: [P, z],
        })),
        (t[53] = P),
        (t[54] = z),
        (t[55] = te))
      : (te = t[55]),
    te
  );
}
function Si(e) {
  let t = (0, Ti.c)(31),
    { limit: r, breakdown: i, data: a, state: o, onRetry: s, reduceMotion: c } = e,
    [l, u] = (0, Ei.useState)(),
    [d, f] = (0, Ei.useState)(!1),
    p,
    m,
    h,
    _;
  t[0] !== i || t[1] !== a || t[2] !== l || t[3] !== r || t[4] !== d
    ? ((m = si(a, { limit: r, breakdown: i })),
      (p = m?.periods),
      (_ = p?.slice(0, d ? void 0 : 5)),
      (h =
        l !== void 0 && l == null ? null : (_?.find((e) => e.id === l)?.id ?? _?.find(Ci)?.id ?? _?.[0]?.id)),
      (t[0] = i),
      (t[1] = a),
      (t[2] = l),
      (t[3] = r),
      (t[4] = d),
      (t[5] = p),
      (t[6] = m),
      (t[7] = h),
      (t[8] = _))
    : ((p = t[5]), (m = t[6]), (h = t[7]), (_ = t[8]));
  let v = h,
    y;
  t[9] === r
    ? (y = t[10])
    : ((y = (0, Z.jsx)(J.Header, {
        size: `compact`,
        title: (0, Z.jsx)(g, {
          id: `consumerAnalyticsPreview.limitHistory.limitHeading`,
          defaultMessage: `{limit, select, fiveHour {5-hour limits} other {Weekly limits}}`,
          description: `Separate headings for five-hour and weekly allowances; one shared grouping control applies to both tables`,
          values: { limit: r },
        }),
      })),
      (t[9] = r),
      (t[10] = y));
  let b;
  t[11] !== i ||
  t[12] !== r ||
  t[13] !== s ||
  t[14] !== c ||
  t[15] !== m ||
  t[16] !== v ||
  t[17] !== o ||
  t[18] !== _
    ? ((b = (0, Z.jsx)(G, {
        children: (0, Z.jsx)(wi, {
          limit: r,
          breakdown: i,
          report: m,
          visiblePeriods: _,
          selectedId: v,
          onSelect: u,
          state: o,
          onRetry: s,
          reduceMotion: c,
        }),
      })),
      (t[11] = i),
      (t[12] = r),
      (t[13] = s),
      (t[14] = c),
      (t[15] = m),
      (t[16] = v),
      (t[17] = o),
      (t[18] = _),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== p || t[21] !== v || t[22] !== d || t[23] !== o
    ? ((x =
        o === `ready` && p != null && p.length > 5
          ? (0, Z.jsx)(n, {
              className: `self-start`,
              color: `secondary`,
              size: `compact`,
              onClick: () => {
                (d && !p.slice(0, 5).some((e) => e.id === v) && u(void 0), f(!d));
              },
              children: (0, Z.jsx)(g, {
                id: `consumerAnalyticsPreview.limitHistory.toggleRows`,
                defaultMessage: `{expanded, select, yes {Show less} other {Show more}}`,
                description: `Expand or collapse older periods in this limit table only; the other table and date range stay unchanged`,
                values: { expanded: d ? `yes` : `no` },
              }),
            })
          : null),
      (t[20] = p),
      (t[21] = v),
      (t[22] = d),
      (t[23] = o),
      (t[24] = x))
    : (x = t[24]);
  let S;
  t[25] !== b || t[26] !== x
    ? ((S = (0, Z.jsxs)(J.Content, { className: `gap-3`, children: [b, x] })),
      (t[25] = b),
      (t[26] = x),
      (t[27] = S))
    : (S = t[27]);
  let C;
  return (
    t[28] !== y || t[29] !== S
      ? ((C = (0, Z.jsxs)(J, { className: `@container min-w-0`, children: [y, S] })),
        (t[28] = y),
        (t[29] = S),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
function Ci(e) {
  return e.status === `current`;
}
function wi(e) {
  let t = (0, Ti.c)(26),
    {
      limit: r,
      breakdown: i,
      report: a,
      visiblePeriods: o,
      selectedId: s,
      onSelect: c,
      state: l,
      onRetry: u,
      reduceMotion: d,
    } = e,
    f = ee();
  if (l === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(Yt, {
            children: (0, Z.jsx)(g, {
              id: `consumerAnalyticsPreview.limitHistory.loading`,
              defaultMessage: `Loading limit history…`,
              description: `Loading state for one plan limit history table`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (l === `error`) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(g, {
          id: `consumerAnalyticsPreview.limitHistory.error`,
          defaultMessage: `Couldn't load limit history`,
          description: `Error state for one plan limit history table`,
        })),
        (t[1] = e))
      : (e = t[1]);
    let r;
    t[2] === u
      ? (r = t[3])
      : ((r =
          u == null
            ? void 0
            : (0, Z.jsx)(n, {
                color: `secondary`,
                size: `compact`,
                onClick: u,
                children: (0, Z.jsx)(g, {
                  id: `consumerAnalyticsPreview.limitHistory.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry loading limit period history`,
                }),
              })),
        (t[2] = u),
        (t[3] = r));
    let i;
    return (
      t[4] === r ? (i = t[5]) : ((i = (0, Z.jsx)(Oe, { label: e, control: r })), (t[4] = r), (t[5] = i)),
      i
    );
  }
  if (a == null || (a.coverage === `partial` && a.periods.length === 0)) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(st, {
            layout: `settings-row`,
            children: (0, Z.jsx)(g, {
              id: `consumerAnalyticsPreview.limitHistory.unavailable`,
              defaultMessage: `Limit history isn't available yet`,
              description: `The data does not include historical periods or does not yet cover the selected range; absence of data is not zero usage and never falls back to samples`,
            }),
          })),
          (t[6] = e))
        : (e = t[6]),
      e
    );
  }
  if (l === `empty` || a.periods.length === 0) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(st, {
            layout: `settings-row`,
            children: (0, Z.jsx)(g, {
              id: `consumerAnalyticsPreview.limitHistory.empty`,
              defaultMessage: `No limit periods in this date range`,
              description: `Empty history response for the selected lookback, distinct from unsupported or missing data`,
            }),
          })),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let p;
  t[8] !== f || t[9] !== r
    ? ((p = f.formatMessage(
        {
          id: `consumerAnalyticsPreview.limitHistory.tableName`,
          defaultMessage: `{limit, select, fiveHour {5-hour limits} other {Weekly limits}}`,
          description: `Accessible names of the two independent allowance history tables`,
        },
        { limit: r },
      )),
      (t[8] = f),
      (t[9] = r),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(`th`, {
        className: `px-4 py-2 text-start font-medium`,
        scope: `col`,
        children: (0, Z.jsx)(g, {
          id: `consumerAnalyticsPreview.limitHistory.period`,
          defaultMessage: `Period`,
          description: `Column containing the actual beginning and reset time of one plan allowance`,
        }),
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(`thead`, {
        className: `bg-surface-secondary/92 text-secondary`,
        children: (0, Z.jsxs)(`tr`, {
          children: [
            m,
            (0, Z.jsx)(`th`, {
              className: `px-4 py-2 text-end font-medium`,
              scope: `col`,
              children: (0, Z.jsx)(g, {
                id: `consumerAnalyticsPreview.limitHistory.used`,
                defaultMessage: `% of limit used`,
                description: `Percentage consumed from the particular allowance identified by this row, not a share of all usage`,
              }),
            }),
          ],
        }),
      })),
      (t[12] = h))
    : (h = t[12]);
  let _;
  t[13] !== i || t[14] !== r || t[15] !== c || t[16] !== d || t[17] !== a || t[18] !== s || t[19] !== o
    ? ((_ = o?.map((e) =>
        (0, Z.jsx)(
          ci,
          {
            period: e,
            asOf: a.asOf,
            limit: r,
            breakdown: i,
            expanded: s === e.id,
            onToggle: () => c(s === e.id ? null : e.id),
            reduceMotion: d,
          },
          e.id,
        ),
      )),
      (t[13] = i),
      (t[14] = r),
      (t[15] = c),
      (t[16] = d),
      (t[17] = a),
      (t[18] = s),
      (t[19] = o),
      (t[20] = _))
    : (_ = t[20]);
  let v;
  t[21] === _ ? (v = t[22]) : ((v = (0, Z.jsx)(`tbody`, { children: _ })), (t[21] = _), (t[22] = v));
  let y;
  return (
    t[23] !== p || t[24] !== v
      ? ((y = (0, Z.jsxs)(`table`, {
          className: `w-full text-xs leading-4`,
          "aria-label": p,
          children: [h, v],
        })),
        (t[23] = p),
        (t[24] = v),
        (t[25] = y))
      : (y = t[25]),
    y
  );
}
var Ti, Ei, Z;
function Di() {
  return (Di = e(() => {
    ((Ti = Ae()),
      z(),
      re(),
      (Ei = Pe()),
      U(),
      nt(),
      De(),
      j(),
      rt(),
      ae(),
      Re(),
      Jt(),
      ge(),
      _(),
      Qr(),
      gi(),
      bi(),
      (Z = K()));
  }))();
}
function Oi(e) {
  let t = (0, ki.c)(5),
    { isActive: n, isPolling: r, reduceMotion: i, scope: a } = e,
    o = r === void 0 || r,
    s = a === void 0 ? `consumer` : a,
    c = ut();
  if (!ct(s === `business` ? `1014047933` : `1504786190`)) return null;
  let l = `${c.accountId}:${c.userId}`,
    u;
  return (
    t[0] !== n || t[1] !== o || t[2] !== i || t[3] !== l
      ? ((u = (0, Ai.jsx)(xi, { isActive: n, isPolling: o, reduceMotion: i }, l)),
        (t[0] = n),
        (t[1] = o),
        (t[2] = i),
        (t[3] = l),
        (t[4] = u))
      : (u = t[4]),
    u
  );
}
var ki, Ai;
function ji() {
  return (ji = e(() => {
    ((ki = Ae()), nt(), et(), Di(), (Ai = K()));
  }))();
}
function Mi(e) {
  let t = (0, Pi.c)(2),
    { metric: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Fi.jsx)(g, {
          id: `consumerUsage.chats.metric`,
          defaultMessage: `{metric, select, five_hour_limit_percent {% of 5h limit} weekly_limit_percent {% of weekly limit} other {Credits used}}`,
          description: `Chat lifetime usage compared with the current full allowance, or actual purchased/granted credits debited`,
          values: { metric: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ni(e) {
  let t = (0, Pi.c)(5),
    { value: n, metric: r } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Fi.jsx)(g, {
            id: `consumerUsage.chats.unavailable`,
            defaultMessage: `-`,
            description: `An amount is unknown; it is not zero`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i = r === `balance_usage_credits`,
    a = i ? n : n / 100,
    o = i ? `decimal` : `percent`,
    s = n !== 0 && Math.abs(n) < 0.01 ? 2 : void 0,
    c;
  return (
    t[1] !== a || t[2] !== o || t[3] !== s
      ? ((c = (0, Fi.jsx)(l, { value: a, style: o, maximumFractionDigits: 2, maximumSignificantDigits: s })),
        (t[1] = a),
        (t[2] = o),
        (t[3] = s),
        (t[4] = c))
      : (c = t[4]),
    c
  );
}
var Pi, Fi;
function Ii() {
  return (Ii = e(() => {
    ((Pi = Ae()), U(), (Fi = K()));
  }))();
}
function Li(e) {
  let t = (0, zi.c)(3),
    { row: n, metric: r } = e,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = (0, Bi.jsx)(`div`, {
          className: `flex min-w-0 flex-col gap-3 text-sm leading-5 font-normal select-none`,
          children: (0, Bi.jsx)(`dl`, {
            className: `grid w-fit max-w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-1.5 @lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)]`,
            children: [`model`, `reasoning_effort`, `speed`].map((e) => {
              let t = Ri(n.usage, e, r);
              return (0, Bi.jsxs)(
                `div`,
                {
                  className: `col-span-full grid grid-cols-subgrid items-baseline`,
                  children: [
                    (0, Bi.jsx)(`dt`, {
                      className: `w-16 text-xs leading-5 text-secondary`,
                      children: (0, Bi.jsx)(g, {
                        id: `consumerUsage.chats.breakdownDimension`,
                        defaultMessage: `{dimension, select, model {Model} reasoning_effort {Effort} other {Speed}}`,
                        description: `Row labels for a chat's independent model, reasoning effort, and speed usage breakdowns`,
                        values: { dimension: e },
                      }),
                    }),
                    (0, Bi.jsx)(`dd`, {
                      className: `col-start-2 -col-end-1 grid min-w-0 grid-cols-subgrid items-baseline gap-y-1.5`,
                      children:
                        t.length === 0
                          ? (0, Bi.jsx)(`span`, {
                              className: `text-secondary`,
                              children: (0, Bi.jsx)(g, {
                                id: `consumerUsage.chats.breakdownUnavailable`,
                                defaultMessage: `Not available`,
                                description: `A chat has no available usage breakdown`,
                              }),
                            })
                          : t.map((n) =>
                              (0, Bi.jsxs)(
                                `span`,
                                {
                                  className: `inline-flex min-w-0 flex-wrap items-baseline gap-x-1.5 justify-self-start wrap-anywhere`,
                                  children: [
                                    (0, Bi.jsx)(nn, { dimension: e, value: n.value }),
                                    t.length === 1 && n.share === 1
                                      ? null
                                      : (0, Bi.jsx)(`span`, {
                                          className: `text-secondary tabular-nums`,
                                          children:
                                            n.share == null
                                              ? (0, Bi.jsx)(g, {
                                                  id: `consumerUsage.chats.unavailable`,
                                                  defaultMessage: `-`,
                                                  description: `An amount is unknown; it is not zero`,
                                                })
                                              : (0, Bi.jsx)(l, {
                                                  value: n.share,
                                                  style: `percent`,
                                                  maximumFractionDigits: 0,
                                                }),
                                        }),
                                  ],
                                },
                                JSON.stringify(n.value),
                              ),
                            ),
                    }),
                  ],
                },
                e,
              );
            }),
          }),
        })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Ri(e, t, n) {
  if (e == null || e.data_status === `unavailable`) return [];
  let r = e[n] == null ? null : Number(e[n]),
    i = new Map();
  for (let r of e.groups) {
    let e = r[t],
      a = r[n] == null ? null : Number(r[n]),
      o = i.get(e);
    i.set(e, a == null || (i.has(e) && o == null) ? null : (o ?? 0) + a);
  }
  return [...i]
    .map(([e, t]) => ({ value: e, share: r != null && r > 0 && t != null ? t / r : null }))
    .sort((e, t) => (e.share == null ? (t.share == null ? 0 : 1) : t.share == null ? -1 : t.share - e.share));
}
var zi, Bi;
function Vi() {
  return (Vi = e(() => {
    ((zi = Ae()), U(), tn(), (Bi = K()));
  }))();
}
var Hi;
function Ui() {
  return (Ui = e(() => {
    Hi = [`five_hour_limit_percent`, `weekly_limit_percent`, `balance_usage_credits`];
  }))();
}
var Wi, Gi, Ki, qi, Ji;
function Yi() {
  return (Yi = e(() => {
    ((Wi = t(dt(), 1)),
      E(),
      we(),
      Je(),
      ze(),
      je(),
      lt(),
      h(),
      ft(),
      (Gi = 2),
      (Ki = 100),
      (qi = 1e3),
      (Ji = B(s, ({ accountId: e, userId: t, threads: n }, { scope: r }) => {
        let i = n.filter((e) => !Ke(e)).sort((e, t) => t.updatedAt - e.updatedAt || e.id.localeCompare(t.id)),
          a = i.slice(0, Ki);
        return {
          enabled: n.length > 0,
          queryKey: [
            `consumer-task-usage-v2`,
            e,
            t,
            H,
            a.map(({ id: e, createdAt: t }) => [e, t]).sort(([e], [t]) => e.localeCompare(t)),
            i.length > a.length,
          ],
          queryFn: async ({ signal: e }) => {
            let t = [],
              n = [];
            for (let i of (0, Wi.default)(a, Gi)) {
              e.throwIfAborted();
              let a = await Promise.all(i.map((e) => Xe(r, H).getSubagentDescendantSnapshot(y(e.id))));
              (e.throwIfAborted(),
                i.forEach((e, r) => {
                  let i = a[r],
                    o = [...new Set(i.descendantThreads.map(({ id: e }) => e))];
                  (t.push({ thread: e, usage: null, subagentCount: i.isComplete ? o.length : null }),
                    !(o.length >= qi) &&
                      n.push({
                        thread_id: e.id,
                        created_at:
                          Number.isFinite(e.createdAt) && e.createdAt > 0
                            ? new Date(e.createdAt * 1e3).toISOString()
                            : null,
                        descendant_thread_ids: o,
                      }));
                }));
            }
            let o = [],
              s = [],
              c = 0,
              l = new Set();
            for (let e of n) {
              let t = [e.thread_id, ...(e.descendant_thread_ids ?? [])];
              if (t.some((e) => l.has(e))) throw Error(`Task usage groups overlap`);
              (t.forEach((e) => l.add(e)),
                (s.length === Ki || c + t.length > qi) && (o.push(s), (s = []), (c = 0)),
                s.push(e),
                (c += t.length));
            }
            s.length > 0 && o.push(s);
            let u = [];
            for (let t of (0, Wi.default)(o, Gi)) {
              e.throwIfAborted();
              let n = await Promise.all(
                t.map((t) =>
                  at.safePost(`/wham/usage/thread_usage/query_v2`, {
                    requestBody: { threads: t },
                    signal: e,
                  }),
                ),
              );
              u.push(...n);
            }
            let d = new Map(u.flatMap((e) => e.threads.map((e) => [e.thread_id, e]))),
              f = u.map((e) => e.data_as_of);
            return {
              isTruncated: a.length < i.length,
              dataAsOf: f.every((e) => e != null)
                ? (f.sort((e, t) => Date.parse(e) - Date.parse(t))[0] ?? null)
                : null,
              rows: t.map((e) => ({ ...e, usage: d.get(e.thread.id) ?? null })),
            };
          },
          retry: !1,
          staleTime: T.FIVE_MINUTES,
          refetchInterval: T.FIVE_MINUTES,
        };
      })));
  }))();
}
function Xi(e) {
  let t = (0, ra.c)(18),
    { accountId: n, isPolling: r, userId: i } = e,
    a = r === void 0 || r,
    [o, s] = (0, ia.useState)(!1),
    c;
  t[0] !== n || t[1] !== i
    ? ((c = { accountId: n, userId: i }), (t[0] = n), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let l = a || !o,
    u;
  t[3] === l ? (u = t[4]) : ((u = { enabled: l }), (t[3] = l), (t[4] = u));
  let { data: d, isPending: f, isError: p, isSuccess: m, refetch: h } = q(Kn, c, u);
  if ((!o && (m || p) && s(!0), f || p)) {
    let e;
    t[5] !== p || t[6] !== f ? ((e = na(p, f)), (t[5] = p), (t[6] = f), (t[7] = e)) : (e = t[7]);
    let n;
    t[8] === h ? (n = t[9]) : ((n = () => void h()), (t[8] = h), (t[9] = n));
    let r;
    return (
      t[10] !== e || t[11] !== n
        ? ((r = (0, Q.jsx)(Qi, { rows: void 0, status: e, onRetry: n })),
          (t[10] = e),
          (t[11] = n),
          (t[12] = r))
        : (r = t[12]),
      r
    );
  }
  let g;
  return (
    t[13] !== n || t[14] !== a || t[15] !== d || t[16] !== i
      ? ((g = (0, Q.jsx)(Zi, { isPolling: a, accountId: n, userId: i, threads: d })),
        (t[13] = n),
        (t[14] = a),
        (t[15] = d),
        (t[16] = i),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function Zi(e) {
  let t = (0, ra.c)(18),
    { accountId: n, isPolling: r, userId: i, threads: a } = e,
    [o, s] = (0, ia.useState)(!1),
    c;
  t[0] !== n || t[1] !== a || t[2] !== i
    ? ((c = { accountId: n, userId: i, threads: a }), (t[0] = n), (t[1] = a), (t[2] = i), (t[3] = c))
    : (c = t[3]);
  let l = r || !o,
    u;
  t[4] === l ? (u = t[5]) : ((u = { enabled: l }), (t[4] = l), (t[5] = u));
  let { data: d, isPending: f, isError: p, isSuccess: m, refetch: h } = q(Ji, c, u);
  !o && (m || p) && s(!0);
  let g;
  t[6] !== d?.rows || t[7] !== a.length
    ? ((g = a.length === 0 ? [] : d?.rows), (t[6] = d?.rows), (t[7] = a.length), (t[8] = g))
    : (g = t[8]);
  let _ = a.length > 0 && f,
    v;
  t[9] !== p || t[10] !== _ ? ((v = na(p, _)), (t[9] = p), (t[10] = _), (t[11] = v)) : (v = t[11]);
  let y;
  t[12] === h ? (y = t[13]) : ((y = () => void h()), (t[12] = h), (t[13] = y));
  let b;
  return (
    t[14] !== g || t[15] !== v || t[16] !== y
      ? ((b = (0, Q.jsx)(Qi, { rows: g, status: v, onRetry: y })),
        (t[14] = g),
        (t[15] = v),
        (t[16] = y),
        (t[17] = b))
      : (b = t[17]),
    b
  );
}
function Qi(e) {
  let t = (0, ra.c)(27),
    { rows: r, status: i, onRetry: a, defaultExpandedThreadId: o } = e,
    s = (0, ia.useId)(),
    [c, l] = (0, ia.useState)(!1),
    [u, d] = (0, ia.useState)(`weekly_limit_percent`),
    f,
    p;
  if (t[0] !== r || t[1] !== u) {
    let e;
    (t[4] === r
      ? (e = t[5])
      : ((e = (e) =>
          e === `balance_usage_credits` ||
          r?.some((t) => {
            let { usage: n } = t;
            return ta(n, e) != null;
          })),
        (t[4] = r),
        (t[5] = e)),
      (f = Hi.filter(e)),
      (p = f.includes(u) ? u : (f[0] ?? `balance_usage_credits`)),
      (t[0] = r),
      (t[1] = u),
      (t[2] = f),
      (t[3] = p));
  } else ((f = t[2]), (p = t[3]));
  let m = p,
    h;
  t[6] !== m || t[7] !== r
    ? ((h = r?.slice().sort((e, t) => {
        let n = ta(e.usage, m),
          r = ta(t.usage, m);
        return n == null ? (r == null ? 0 : 1) : r == null ? -1 : r - n;
      })),
      (t[6] = m),
      (t[7] = r),
      (t[8] = h))
    : (h = t[8]);
  let _ = h,
    v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(J.Header, {
        title: (0, Q.jsx)(g, {
          id: `consumerUsage.chats.title`,
          defaultMessage: `Top chats`,
          description: `Heading for task usage ranked by the selected allowance or credit metric`,
        }),
        subtitle: (0, Q.jsx)(g, {
          id: `consumerUsage.chats.recentDescription`,
          defaultMessage: `Compare each chat’s plan and credit usage`,
          description: `At most the 100 most recently active local root chats from the last thirty days are checked. Amounts cover each chat's lifetime including subagents.`,
        }),
      })),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== o ||
  t[11] !== m ||
  t[12] !== f ||
  t[13] !== a ||
  t[14] !== c ||
  t[15] !== _ ||
  t[16] !== i ||
  t[17] !== s
    ? ((y = (0, Q.jsx)(G, {
        children: (0, Q.jsx)($i, {
          id: s,
          rows: _,
          status: i,
          onRetry: a,
          metric: m,
          metrics: f,
          setMetric: d,
          showAll: c,
          defaultExpandedThreadId: o,
        }),
      })),
      (t[10] = o),
      (t[11] = m),
      (t[12] = f),
      (t[13] = a),
      (t[14] = c),
      (t[15] = _),
      (t[16] = i),
      (t[17] = s),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== r || t[20] !== c || t[21] !== i || t[22] !== s
    ? ((b =
        i === `ready` && r != null && r.length > 5
          ? (0, Q.jsx)(n, {
              className: `self-start`,
              "aria-controls": s,
              "aria-expanded": c,
              color: `secondary`,
              size: `compact`,
              onClick: () => l(!c),
              children: (0, Q.jsx)(g, {
                id: `consumerAnalyticsPreview.chats.toggleRows`,
                defaultMessage: `{expanded, select, yes {Show less} other {Show more}}`,
                description: `Expand or collapse the full chat table`,
                values: { expanded: c ? `yes` : `no` },
              }),
            })
          : null),
      (t[19] = r),
      (t[20] = c),
      (t[21] = i),
      (t[22] = s),
      (t[23] = b))
    : (b = t[23]);
  let x;
  return (
    t[24] !== y || t[25] !== b
      ? ((x = (0, Q.jsxs)(J, {
          id: `consumer-top-chats`,
          children: [v, (0, Q.jsxs)(J.Content, { className: `gap-3`, children: [y, b] })],
        })),
        (t[24] = y),
        (t[25] = b),
        (t[26] = x))
      : (x = t[26]),
    x
  );
}
function $i(e) {
  let t = (0, ra.c)(54),
    {
      id: r,
      rows: i,
      status: a,
      onRetry: o,
      metric: s,
      metrics: c,
      setMetric: l,
      showAll: u,
      defaultExpandedThreadId: d,
    } = e,
    f = (0, ia.useId)(),
    p = R(),
    [m, h] = (0, ia.useState)(d ?? null),
    _,
    v,
    y,
    b,
    x,
    S,
    C;
  if (
    t[0] !== m ||
    t[1] !== f ||
    t[2] !== r ||
    t[3] !== s ||
    t[4] !== c ||
    t[5] !== o ||
    t[6] !== p ||
    t[7] !== i ||
    t[8] !== l ||
    t[9] !== u ||
    t[10] !== a
  ) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = i?.slice(0, u ? void 0 : 5);
      if ((m != null && (a !== `ready` || !e?.some((e) => e.thread.id === m)) && h(null), a === `loading`)) {
        let e;
        (t[18] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(Yt, {
              children: (0, Q.jsx)(g, {
                id: `consumerAnalyticsPreview.chats.loading`,
                defaultMessage: `Loading chat usage…`,
                description: `Loading the consumer chat-usage table`,
              }),
            })),
            (t[18] = e))
          : (e = t[18]),
          (C = e));
        break bb0;
      }
      if (a === `error`) {
        let e;
        t[19] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(g, {
              id: `consumerAnalyticsPreview.chats.error`,
              defaultMessage: `Couldn't load chat usage`,
              description: `Chat usage could not be fetched; previous results are not presented as fresh usage`,
            })),
            (t[19] = e))
          : (e = t[19]);
        let r;
        t[20] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, Q.jsx)(g, {
              id: `consumerAnalyticsPreview.chats.retry`,
              defaultMessage: `Retry`,
              description: `Reload chat usage`,
            })),
            (t[20] = r))
          : (r = t[20]);
        let i;
        (t[21] === o
          ? (i = t[22])
          : ((i = (0, Q.jsx)(Oe, {
              label: e,
              control: (0, Q.jsx)(n, { color: `secondary`, size: `compact`, onClick: o, children: r }),
            })),
            (t[21] = o),
            (t[22] = i)),
          (C = i));
        break bb0;
      }
      if (i == null || i.length === 0) {
        let e;
        (t[23] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(st, {
              layout: `settings-row`,
              children: (0, Q.jsx)(g, {
                id: `consumerUsage.chats.empty`,
                defaultMessage: `No recent chats on this device`,
                description: `No local root tasks were active in the last thirty days`,
              }),
            })),
            (t[23] = e))
          : (e = t[23]),
          (C = e));
        break bb0;
      }
      ((S = `@container min-w-0 overflow-x-auto`), (v = r), (y = `w-full text-sm leading-5 font-normal`));
      let d;
      t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((d = (0, Q.jsx)(`col`, {})), (t[24] = d))
        : (d = t[24]);
      let w;
      if (t[25] !== c) {
        let e;
        (t[27] === c.length
          ? (e = t[28])
          : ((e = (e) =>
              (0, Q.jsx)(
                `col`,
                {
                  className: de(
                    c.length === 3 && `w-1/6`,
                    c.length === 2 && `w-1/4`,
                    c.length === 1 && `w-1/3`,
                  ),
                },
                e,
              )),
            (t[27] = c.length),
            (t[28] = e)),
          (w = c.map(e)),
          (t[25] = c),
          (t[26] = w));
      } else w = t[26];
      t[29] === w
        ? (b = t[30])
        : ((b = (0, Q.jsxs)(`colgroup`, { children: [d, w] })), (t[29] = w), (t[30] = b));
      let T;
      t[31] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((T = (0, Q.jsx)(`th`, {
            className: `py-2 ps-10 pe-4 text-start font-normal`,
            scope: `col`,
            children: (0, Q.jsx)(g, {
              id: `consumerAnalyticsPreview.chats.chat`,
              defaultMessage: `Chat`,
              description: `Column heading for the chat title`,
            }),
          })),
          (t[31] = T))
        : (T = t[31]);
      let E;
      if (t[32] !== f || t[33] !== s || t[34] !== c || t[35] !== l) {
        let e;
        (t[37] !== f || t[38] !== s || t[39] !== l
          ? ((e = (e) =>
              (0, Q.jsx)(
                `th`,
                {
                  className: `py-2 ps-2 pe-6 text-end font-normal`,
                  scope: `col`,
                  "aria-labelledby": `${f}-${e}`,
                  "aria-sort": e === s ? `descending` : `none`,
                  children: (0, Q.jsx)(`div`, {
                    className: `flex justify-end`,
                    children: (0, Q.jsx)(n, {
                      color: `ghostMuted`,
                      size: `inline`,
                      onClick: () => l(e),
                      children: (0, Q.jsx)(`span`, {
                        id: `${f}-${e}`,
                        className: `text-end`,
                        children: (0, Q.jsx)(Mi, { metric: e }),
                      }),
                    }),
                  }),
                },
                e,
              )),
            (t[37] = f),
            (t[38] = s),
            (t[39] = l),
            (t[40] = e))
          : (e = t[40]),
          (E = c.map(e)),
          (t[32] = f),
          (t[33] = s),
          (t[34] = c),
          (t[35] = l),
          (t[36] = E));
      } else E = t[36];
      (t[41] === E
        ? (x = t[42])
        : ((x = (0, Q.jsx)(`thead`, {
            className: `text-xs leading-5 text-secondary`,
            children: (0, Q.jsxs)(`tr`, { children: [T, E] }),
          })),
          (t[41] = E),
          (t[42] = x)),
        (_ = e?.map((e) =>
          (0, Q.jsx)(
            ea,
            {
              row: e,
              metric: s,
              metrics: c,
              expanded: e.thread.id === m,
              onToggle: () => h(e.thread.id === m ? null : e.thread.id),
              reduceMotion: p,
            },
            e.thread.id,
          ),
        )));
    }
    ((t[0] = m),
      (t[1] = f),
      (t[2] = r),
      (t[3] = s),
      (t[4] = c),
      (t[5] = o),
      (t[6] = p),
      (t[7] = i),
      (t[8] = l),
      (t[9] = u),
      (t[10] = a),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S),
      (t[17] = C));
  } else ((_ = t[11]), (v = t[12]), (y = t[13]), (b = t[14]), (x = t[15]), (S = t[16]), (C = t[17]));
  if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
  let w;
  t[43] === _ ? (w = t[44]) : ((w = (0, Q.jsx)(`tbody`, { children: _ })), (t[43] = _), (t[44] = w));
  let T;
  t[45] !== v || t[46] !== y || t[47] !== b || t[48] !== x || t[49] !== w
    ? ((T = (0, Q.jsxs)(`table`, { id: v, className: y, children: [b, x, w] })),
      (t[45] = v),
      (t[46] = y),
      (t[47] = b),
      (t[48] = x),
      (t[49] = w),
      (t[50] = T))
    : (T = t[50]);
  let E;
  return (
    t[51] !== S || t[52] !== T
      ? ((E = (0, Q.jsx)(`div`, { className: S, children: T })), (t[51] = S), (t[52] = T), (t[53] = E))
      : (E = t[53]),
    E
  );
}
function ea(e) {
  let t = (0, ra.c)(73),
    { row: r, metric: i, metrics: a, expanded: o, onToggle: s, reduceMotion: c } = e,
    l = _t(),
    u = (0, ia.useId)(),
    [d, p] = (0, ia.useState)(),
    h;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        p(F(e).height);
      }),
      (t[0] = h))
    : (h = t[0]);
  let _ = m(h),
    v = q(Ve, { hostId: `local`, threadId: y(r.thread.id) }) ?? $e(r.thread, mt),
    b = o ? `bg-text/3` : `hover:bg-primary-ghost-hover has-[:focus-visible]:bg-primary-ghost-hover`,
    x;
  t[1] === b ? (x = t[2]) : ((x = de(`group relative border-t border-default`, b)), (t[1] = b), (t[2] = x));
  let C = `${u}-trigger`,
    w = `${u}-details`,
    T = `${u}-title`,
    E;
  t[3] !== o || t[4] !== s || t[5] !== C || t[6] !== w || t[7] !== T
    ? ((E = (0, Q.jsx)(n, {
        id: C,
        className: `absolute inset-0 w-full`,
        "aria-controls": w,
        "aria-expanded": o,
        "aria-labelledby": T,
        color: `ghostMuted`,
        focusRing: `inset`,
        size: `inline`,
        onClick: s,
      })),
      (t[3] = o),
      (t[4] = s),
      (t[5] = C),
      (t[6] = w),
      (t[7] = T),
      (t[8] = E))
    : (E = t[8]);
  let D = o && `rotate-90`,
    O = c && `transition-none`,
    k;
  t[9] !== D || t[10] !== O
    ? ((k = de(`shrink-0 text-secondary transition-transform duration-relaxed ease-enter-snappy`, D, O)),
      (t[9] = D),
      (t[10] = O),
      (t[11] = k))
    : (k = t[11]);
  let A;
  t[12] === k
    ? (A = t[13])
    : ((A = (0, Q.jsx)(S, { className: k, asset: Ce, focusable: `false` })), (t[12] = k), (t[13] = A));
  let j = `${u}-title`,
    M;
  t[14] === v
    ? (M = t[15])
    : ((M =
        v ||
        (0, Q.jsx)(g, {
          id: `consumerUsage.chats.untitled`,
          defaultMessage: `Untitled chat`,
          description: `Fallback title for a chat without a name or preview`,
        })),
      (t[14] = v),
      (t[15] = M));
  let N;
  t[16] !== j || t[17] !== M
    ? ((N = (0, Q.jsx)(it, { id: j, className: `min-w-0 flex-1`, animateOnGroupHover: !0, children: M })),
      (t[16] = j),
      (t[17] = M),
      (t[18] = N))
    : (N = t[18]);
  let P;
  t[19] !== A || t[20] !== N
    ? ((P = (0, Q.jsxs)(`span`, {
        className: `pointer-events-none relative flex items-center gap-2 select-none`,
        children: [A, N],
      })),
      (t[19] = A),
      (t[20] = N),
      (t[21] = P))
    : (P = t[21]);
  let ee;
  t[22] !== P || t[23] !== E
    ? ((ee = (0, Q.jsxs)(`th`, {
        className: `max-w-0 px-4 py-2.5 text-start font-normal text-default`,
        scope: `row`,
        children: [E, P],
      })),
      (t[22] = P),
      (t[23] = E),
      (t[24] = ee))
    : (ee = t[24]);
  let I;
  if (t[25] !== a || t[26] !== r.usage) {
    let e;
    (t[28] === r.usage
      ? (e = t[29])
      : ((e = (e) =>
          (0, Q.jsx)(
            `td`,
            {
              className: `pointer-events-none py-2.5 ps-2 pe-6 text-end tabular-nums`,
              children: (0, Q.jsx)(Ni, { value: ta(r.usage, e), metric: e }),
            },
            e,
          )),
        (t[28] = r.usage),
        (t[29] = e)),
      (I = a.map(e)),
      (t[25] = a),
      (t[26] = r.usage),
      (t[27] = I));
  } else I = t[27];
  let L;
  t[30] !== ee || t[31] !== I || t[32] !== x
    ? ((L = (0, Q.jsxs)(`tr`, { className: x, children: [ee, I] })),
      (t[30] = ee),
      (t[31] = I),
      (t[32] = x),
      (t[33] = L))
    : (L = t[33]);
  let R = !o,
    z = a.length + 1,
    te = `${u}-details`,
    B = o ? `opacity-100` : `opacity-0`,
    ne = c && `transition-none`,
    re;
  t[34] !== B || t[35] !== ne
    ? ((re = de(`overflow-hidden transition-opacity duration-basic ease-out`, B, ne)),
      (t[34] = B),
      (t[35] = ne),
      (t[36] = re))
    : (re = t[36]);
  let ae = `${u}-title`,
    se = !o,
    ce = !o,
    le = o ? (d ?? `auto`) : 0,
    ue;
  t[37] === le ? (ue = t[38]) : ((ue = { height: le }), (t[37] = le), (t[38] = ue));
  let fe = c ? 0 : 300 / 1e3,
    V;
  t[39] === fe ? (V = t[40]) : ((V = { duration: fe, ease: oe }), (t[39] = fe), (t[40] = V));
  let pe;
  t[41] !== i || t[42] !== r
    ? ((pe = (0, Q.jsx)(Li, { row: r, metric: i })), (t[41] = i), (t[42] = r), (t[43] = pe))
    : (pe = t[43]);
  let me;
  t[44] !== l || t[45] !== r.thread.id
    ? ((me = () => l(y(r.thread.id), H)), (t[44] = l), (t[45] = r.thread.id), (t[46] = me))
    : (me = t[46]);
  let he, ge;
  t[47] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, Q.jsx)(g, {
        id: `consumerUsage.chats.openInChat`,
        defaultMessage: `Open chat`,
        description: `Open the chat whose usage breakdown is expanded`,
      })),
      (ge = (0, Q.jsx)(f, {})),
      (t[47] = he),
      (t[48] = ge))
    : ((he = t[47]), (ge = t[48]));
  let U;
  t[49] === me
    ? (U = t[50])
    : ((U = (0, Q.jsxs)(n, {
        className: `underline-offset-2 hover:underline focus-visible:underline`,
        color: `ghostMuted`,
        size: `inline`,
        onClick: me,
        children: [he, ge],
      })),
      (t[49] = me),
      (t[50] = U));
  let _e;
  t[51] !== _ || t[52] !== pe || t[53] !== U
    ? ((_e = (0, Q.jsxs)(`div`, {
        ref: _,
        className: `flex flex-col items-start gap-3 ps-10 pe-6 pt-1.5 pb-4`,
        children: [pe, U],
      })),
      (t[51] = _),
      (t[52] = pe),
      (t[53] = U),
      (t[54] = _e))
    : (_e = t[54]);
  let W;
  t[55] !== te ||
  t[56] !== re ||
  t[57] !== ae ||
  t[58] !== se ||
  t[59] !== ce ||
  t[60] !== ue ||
  t[61] !== V ||
  t[62] !== _e
    ? ((W = (0, Q.jsx)(ie.section, {
        id: te,
        className: re,
        "aria-labelledby": ae,
        "aria-hidden": se,
        inert: ce,
        animate: ue,
        initial: !1,
        transition: V,
        children: _e,
      })),
      (t[55] = te),
      (t[56] = re),
      (t[57] = ae),
      (t[58] = se),
      (t[59] = ce),
      (t[60] = ue),
      (t[61] = V),
      (t[62] = _e),
      (t[63] = W))
    : (W = t[63]);
  let ve;
  t[64] !== z || t[65] !== W
    ? ((ve = (0, Q.jsx)(`td`, { className: `p-0`, colSpan: z, children: W })),
      (t[64] = z),
      (t[65] = W),
      (t[66] = ve))
    : (ve = t[66]);
  let ye;
  t[67] !== R || t[68] !== ve
    ? ((ye = (0, Q.jsx)(`tr`, { className: `bg-text/3`, "aria-hidden": R, children: ve })),
      (t[67] = R),
      (t[68] = ve),
      (t[69] = ye))
    : (ye = t[69]);
  let be;
  return (
    t[70] !== L || t[71] !== ye
      ? ((be = (0, Q.jsxs)(Q.Fragment, { children: [L, ye] })), (t[70] = L), (t[71] = ye), (t[72] = be))
      : (be = t[72]),
    be
  );
}
function ta(e, t) {
  return e == null || e.data_status === `unavailable` || e[t] == null ? null : Number(e[t]);
}
function na(e, t) {
  return e ? `error` : t ? `loading` : `ready`;
}
var ra, ia, Q;
function aa() {
  return (aa = e(() => {
    ((ra = Ae()),
      W(),
      ht(),
      re(),
      V(),
      E(),
      we(),
      (ia = Pe()),
      U(),
      De(),
      w(),
      j(),
      rt(),
      Qe(),
      v(),
      C(),
      Re(),
      Jt(),
      ge(),
      _(),
      lt(),
      qe(),
      qn(),
      O(),
      gt(),
      Ii(),
      Vi(),
      Ui(),
      Yi(),
      (Q = K()));
  }))();
}
function oa(e) {
  let t = (0, da.c)(49),
    { enabled: n, isPolling: r, reduceMotion: i } = e,
    a = r === void 0 || r,
    o = ee(),
    [s, c] = (0, fa.useState)(7),
    [l, u] = (0, fa.useState)(`product`),
    [d, f] = (0, fa.useState)(),
    p;
  t[0] !== l || t[1] !== s || t[2] !== n || t[3] !== a
    ? ((p = { isPolling: a, balanceUnit: `usd`, breakdown: l, days: s, enabled: n, scope: `workspace` }),
      (t[0] = l),
      (t[1] = s),
      (t[2] = n),
      (t[3] = a),
      (t[4] = p))
    : (p = t[4]);
  let { data: m, isError: h, isLoading: _, refetch: v } = dn(p),
    y;
  t[5] === d?.data ? (y = t[6]) : ((y = d?.data.some(la)), (t[5] = d?.data), (t[6] = y));
  let b = y,
    x = _ && !h && !!b,
    S = x ? d : m,
    C = S?.dataFreshnessTimestamp,
    w;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, pa.jsx)(g, {
        id: `settings.usage.billing.spend.history.title`,
        defaultMessage: `Spend history`,
        description: `Heading for the enterprise workspace member's native USD spend history`,
      })),
      (t[7] = w))
    : (w = t[7]);
  let T;
  t[8] !== o || t[9] !== C
    ? ((T =
        C == null
          ? (0, pa.jsx)(g, {
              id: `settings.usage.billing.spend.history.subtitle`,
              defaultMessage: `Track spend in USD over time`,
              description: `Description of the enterprise workspace member's native USD spend history`,
            })
          : (0, pa.jsx)(g, {
              id: `settings.usage.billing.spend.history.subtitle.updated`,
              defaultMessage: `Track spend in USD over time. Updated {date}`,
              description: `Description of the enterprise workspace member's native USD spend history, with the source's last update date`,
              values: { date: rr(C, o) },
            })),
      (t[8] = o),
      (t[9] = C),
      (t[10] = T))
    : (T = t[10]);
  let E;
  t[11] === o
    ? (E = t[12])
    : ((E = o.formatMessage({
        id: `settings.usage.billing.spend.history.periodLabel`,
        defaultMessage: `Spend history time range`,
        description: `Accessible label for the seven-day or thirty-day range of the native USD spend history`,
      })),
      (t[11] = o),
      (t[12] = E));
  let D;
  t[13] === S
    ? (D = t[14])
    : ((D = (e) => {
        (f(S), c(e));
      }),
      (t[13] = S),
      (t[14] = D));
  let O;
  t[15] !== s || t[16] !== E || t[17] !== D
    ? ((O = (0, pa.jsx)(Vt, { ariaLabel: E, days: s, onChange: D })),
      (t[15] = s),
      (t[16] = E),
      (t[17] = D),
      (t[18] = O))
    : (O = t[18]);
  let k;
  t[19] === o
    ? (k = t[20])
    : ((k = o.formatMessage({
        id: `settings.usage.billing.spend.history.breakdownLabel`,
        defaultMessage: `Group spend history`,
        description: `Accessible label for the product, model, reasoning effort, or speed breakdown of the native USD spend history`,
      })),
      (t[19] = o),
      (t[20] = k));
  let A;
  t[21] === S
    ? (A = t[22])
    : ((A = (e) => {
        (f(S?.data.some(sa) ? void 0 : S), u(e));
      }),
      (t[21] = S),
      (t[22] = A));
  let j;
  t[23] !== l || t[24] !== A || t[25] !== k
    ? ((j = (0, pa.jsx)(qt, { ariaLabel: k, breakdown: l, scope: `workspace`, onChange: A })),
      (t[23] = l),
      (t[24] = A),
      (t[25] = k),
      (t[26] = j))
    : (j = t[26]);
  let M;
  t[27] !== j || t[28] !== O
    ? ((M = (0, pa.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-end gap-2`,
        children: [O, j],
      })),
      (t[27] = j),
      (t[28] = O),
      (t[29] = M))
    : (M = t[29]);
  let N;
  t[30] !== M || t[31] !== T
    ? ((N = (0, pa.jsx)(J.Header, { actionsAlignment: `end`, title: w, subtitle: T, actions: M })),
      (t[30] = M),
      (t[31] = T),
      (t[32] = N))
    : (N = t[32]);
  let P = d != null && !b,
    F;
  t[33] === v
    ? (F = t[34])
    : ((F = () => {
        v();
      }),
      (t[33] = v),
      (t[34] = F));
  let I;
  t[35] !== h || t[36] !== _ || t[37] !== x || t[38] !== i || t[39] !== P || t[40] !== F
    ? ((I = { isError: h, isLoading: _, isUpdating: x, preserveEmptyLayout: P, reduceMotion: i, onRetry: F }),
      (t[35] = h),
      (t[36] = _),
      (t[37] = x),
      (t[38] = i),
      (t[39] = P),
      (t[40] = F),
      (t[41] = I))
    : (I = t[41]);
  let L;
  t[42] !== l || t[43] !== S || t[44] !== I
    ? ((L = (0, pa.jsx)(J.Content, {
        children: (0, pa.jsx)(Or, {
          breakdown: l,
          data: S,
          hideTotal: !0,
          scope: `workspace`,
          status: I,
          unit: `usd`,
        }),
      })),
      (t[42] = l),
      (t[43] = S),
      (t[44] = I),
      (t[45] = L))
    : (L = t[45]);
  let R;
  return (
    t[46] !== N || t[47] !== L
      ? ((R = (0, pa.jsxs)(J, { children: [N, L] })), (t[46] = N), (t[47] = L), (t[48] = R))
      : (R = t[48]),
    R
  );
}
function sa(e) {
  let { values: t } = e;
  return Object.values(t).some(ca);
}
function ca(e) {
  return e !== 0;
}
function la(e) {
  let { values: t } = e;
  return Object.values(t).some(ua);
}
function ua(e) {
  return e !== 0;
}
var da, fa, pa;
function ma() {
  return (ma = e(() => {
    ((da = Ae()), (fa = Pe()), U(), Re(), Rt(), Rr(), ln(), (pa = K()));
  }))();
}
function ha(e) {
  let t = (0, Aa.c)(7),
    {
      canViewCreditSettings: n,
      isUsdWorkspace: r,
      isPolling: i,
      reduceMotion: a,
      scope: o,
      workspaceTaskUsage: s,
    } = e,
    c = n === void 0 || n,
    l = r !== void 0 && r,
    u = i === void 0 || i,
    d = a !== void 0 && a,
    f = o === void 0 ? `workspace` : o,
    p = f === `workspace` || (s !== void 0 && s),
    m;
  return (
    t[0] !== c || t[1] !== u || t[2] !== l || t[3] !== d || t[4] !== f || t[5] !== p
      ? ((m = (0, $.jsx)(ga, {
          canViewCreditSettings: c,
          isUsdWorkspace: l,
          isPolling: u,
          reduceMotion: d,
          scope: f,
          workspaceTaskUsage: p,
        })),
        (t[0] = c),
        (t[1] = u),
        (t[2] = l),
        (t[3] = d),
        (t[4] = f),
        (t[5] = p),
        (t[6] = m))
      : (m = t[6]),
    m
  );
}
function ga(e) {
  let t = (0, Aa.c)(376),
    {
      canViewCreditSettings: n,
      isActive: r,
      isUsdWorkspace: i,
      isPolling: a,
      reduceMotion: o,
      scope: s,
      workspaceTaskUsage: c,
    } = e,
    l = r === void 0 || r,
    u = i !== void 0 && i,
    d = a === void 0 || a,
    f = o !== void 0 && o,
    p = (0, ja.use)(xn)?.scope ?? null,
    m = ee(),
    { accountId: h, userId: _ } = ut(),
    { data: v } = He(),
    y = s === `workspace` ? (v?.id ?? null) : h,
    b = s === `consumer`,
    C = ct(b ? `393259752` : !1),
    w = ct(s === `business` && `1014047933`),
    T = (b && C) || w,
    E = ct(T && !c ? `1034085511` : !1),
    [D, O] = (0, ja.useState)(7),
    [k, A] = (0, ja.useState)(0),
    [j, M] = (0, ja.useState)(`surface`),
    [N, P] = (0, ja.useState)(null),
    [F, I] = (0, ja.useState)(null),
    [L, R] = (0, ja.useState)(7),
    [z, te] = (0, ja.useState)(null),
    [B, ne] = (0, ja.useState)(s === `workspace` ? 30 : 7),
    re = y ?? null,
    ie = _ ?? null,
    ae,
    oe,
    se;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = { hasManualSelection: !1, hasResolved: !1 }),
      (oe = { hasManualSelection: !1, hasResolved: !1 }),
      (se = { hasManualSelection: !1, hasResolved: !1 }),
      (t[0] = ae),
      (t[1] = oe),
      (t[2] = se))
    : ((ae = t[0]), (oe = t[1]), (se = t[2]));
  let ce;
  t[3] !== s || t[4] !== re || t[5] !== ie
    ? ((ce = { accountId: re, userId: ie, scope: s, usage: ae, tokens: oe, tools: se }),
      (t[3] = s),
      (t[4] = re),
      (t[5] = ie),
      (t[6] = ce))
    : (ce = t[6]);
  let [le, ue] = (0, ja.useState)(ce),
    fe = s === `workspace` || (le.accountId === (y ?? null) && le.userId === (_ ?? null) && le.scope === s);
  fe ||
    (ue({
      accountId: y ?? null,
      userId: _ ?? null,
      scope: s,
      usage: { hasManualSelection: !1, hasResolved: !1 },
      tokens: { hasManualSelection: !1, hasResolved: !1 },
      tools: { hasManualSelection: !1, hasResolved: !1 },
    }),
    O(7),
    A(0),
    M(`surface`),
    P(null),
    I(null),
    R(7),
    te(null),
    ne(7));
  let [V, pe] = (0, ja.useState)(!1),
    [me, he] = (0, ja.useState)(!1),
    [H, ge] = (0, ja.useState)(!1),
    [U, _e] = (0, ja.useState)(!1),
    [W, ve] = (0, ja.useState)(null),
    [ye, be] = (0, ja.useState)(null),
    [xe, Se] = (0, ja.useState)(null),
    [Ce, we] = (0, ja.useState)(null),
    [Te, Ee] = (0, ja.useState)(null),
    De = b || (s === `business` && F === `reasoning`) ? `product` : (F ?? `product`),
    Oe = T ? k : 0,
    ke = l && s !== `workspace` && fe,
    Ae;
  t[7] !== d || t[8] !== Oe || t[9] !== ke || t[10] !== D
    ? ((Ae = { isPolling: d, days: D, offsetDays: Oe, enabled: ke }),
      (t[7] = d),
      (t[8] = Oe),
      (t[9] = ke),
      (t[10] = D),
      (t[11] = Ae))
    : (Ae = t[11]);
  let je = an(Ae),
    { data: Me, isLoading: K, isError: Ne, refetch: Pe } = je,
    Fe = K && !Ne && Me == null && W?.accountId === (y ?? null) && W.userId === (_ ?? null),
    q = Fe ? W.data : Me,
    Ie =
      s !== `workspace` &&
      W?.accountId === (y ?? null) &&
      W.userId === (_ ?? null) &&
      Math.max(W.data.total, W.data.byModel.total) > 0 &&
      q != null &&
      Math.max(q.total, q.byModel.total) === 0,
    Le;
  t[12] === q?.byModel.series
    ? (Le = t[13])
    : ((Le = q?.byModel.series.some(Ea) ?? !1), (t[12] = q?.byModel.series), (t[13] = Le));
  let Re = Le,
    ze = q?.series.some(Ta) ?? !1,
    Be = Re && (j === `model` || !ze) ? `model` : `surface`,
    Ve = l && !u && (!b || n),
    Ue;
  t[14] !== d || t[15] !== s || t[16] !== De || t[17] !== Ve || t[18] !== D
    ? ((Ue = { isPolling: d, breakdown: De, days: D, enabled: Ve, scope: s }),
      (t[14] = d),
      (t[15] = s),
      (t[16] = De),
      (t[17] = Ve),
      (t[18] = D),
      (t[19] = Ue))
    : (Ue = t[19]);
  let We = dn(Ue),
    { data: Ge, isLoading: Ke, isError: qe, refetch: Je } = We,
    Ye =
      s === `business` && F == null && (Be === `model` || Ge?.total === 0) && (Ge?.paidModelTotal ?? 0) > 0,
    Xe = l && Ye,
    Qe;
  t[20] !== d || t[21] !== s || t[22] !== Xe || t[23] !== D
    ? ((Qe = { isPolling: d, breakdown: `model`, days: D, enabled: Xe, scope: s }),
      (t[20] = d),
      (t[21] = s),
      (t[22] = Xe),
      (t[23] = D),
      (t[24] = Qe))
    : (Qe = t[24]);
  let $e = dn(Qe),
    { data: et, isLoading: tt, isError: nt, refetch: rt } = $e,
    it = Ye ? et : Ge,
    at = Ye ? tt : Ke,
    ot = Ye ? nt : qe,
    lt = Ye ? rt : Je,
    dt = Ye ? `model` : De,
    ft = {
      current: [
        { total: Me == null ? void 0 : Math.max(Me.total, Me.byModel.total), isLoading: K, isError: Ne },
        ...(!b || n
          ? [
              {
                total: it == null ? void 0 : Math.max(it.total, it.paidModelTotal ?? 0),
                isLoading: at,
                isError: ot,
              },
            ]
          : []),
      ],
      days: D,
      enabled: l && s !== `workspace` && fe,
      ...le.usage,
    },
    { shouldProbe: pt } = ar(ft),
    { data: mt, isLoading: ht, isError: gt } = an({ isPolling: d, days: 30, enabled: pt }),
    {
      data: _t,
      isLoading: vt,
      isError: yt,
    } = dn({ isPolling: d, breakdown: De, days: 30, enabled: pt && (!b || n), scope: s }),
    bt = ar({
      ...ft,
      fallback: [
        { total: mt == null ? void 0 : Math.max(mt.total, mt.byModel.total), isLoading: ht, isError: gt },
        ...(!b || n
          ? [
              {
                total: _t == null ? void 0 : Math.max(_t.total, _t.paidModelTotal ?? 0),
                isLoading: vt,
                isError: yt,
              },
            ]
          : []),
      ],
    }),
    xt = (pt && !bt.shouldResolve) || (at && !Ne);
  bt.shouldResolve && (ue(wa), bt.shouldSelectThirtyDays && O(30));
  let St = at && !ot && it == null && ye?.accountId === (y ?? null) && ye.userId === (_ ?? null),
    Ct = St ? ye.data : it,
    wt =
      Ct?.dataFreshnessTimestamp ??
      (at && !ot && it == null && xe?.accountId === (y ?? null) && xe.userId === (_ ?? null)
        ? xe.data
        : null),
    Tt;
  t[25] !== y || t[26] !== wt || t[27] !== _
    ? ((Tt = () => {
        Se(wt == null ? null : { accountId: y ?? null, data: wt, userId: _ ?? null });
      }),
      (t[25] = y),
      (t[26] = wt),
      (t[27] = _),
      (t[28] = Tt))
    : (Tt = t[28]);
  let Et = Tt,
    Dt;
  t[29] !== y || t[30] !== p || t[31] !== Ct || t[32] !== q || t[33] !== Et || t[34] !== D || t[35] !== _
    ? ((Dt = (e, t) => {
        let n = t === void 0 ? 0 : t;
        e !== D && Nn(p, `usage_history`, e);
        let r = q == null ? void 0 : Math.max(q.total, q.byModel.total);
        (pe(r === 0),
          ve(q != null && (r ?? 0) > 0 ? { accountId: y ?? null, data: q, userId: _ ?? null } : null),
          e !== D &&
            (Et(),
            he(Ct?.total === 0),
            be(Ct != null && Ct.total > 0 ? { accountId: y ?? null, data: Ct, userId: _ ?? null } : null)),
          ue(Ca),
          O(e),
          A(n));
      }),
      (t[29] = y),
      (t[30] = p),
      (t[31] = Ct),
      (t[32] = q),
      (t[33] = Et),
      (t[34] = D),
      (t[35] = _),
      (t[36] = Dt))
    : (Dt = t[36]);
  let Ot = Dt,
    kt = !f && it != null && ye?.accountId === (y ?? null) && ye.userId === (_ ?? null) && ye.data !== it,
    At;
  t[37] === lt
    ? (At = t[38])
    : ((At = () => {
        lt();
      }),
      (t[37] = lt),
      (t[38] = At));
  let jt;
  t[39] !== ot || t[40] !== at || t[41] !== St || t[42] !== me || t[43] !== f || t[44] !== kt || t[45] !== At
    ? ((jt = {
        animateDataChanges: kt,
        isError: ot,
        isLoading: at,
        isUpdating: St,
        preserveEmptyLayout: me,
        reduceMotion: f,
        onRetry: At,
      }),
      (t[39] = ot),
      (t[40] = at),
      (t[41] = St),
      (t[42] = me),
      (t[43] = f),
      (t[44] = kt),
      (t[45] = At),
      (t[46] = jt))
    : (jt = t[46]);
  let Mt = jt,
    Nt = l && !b,
    Pt;
  t[47] !== d || t[48] !== s || t[49] !== Nt || t[50] !== L
    ? ((Pt = { isPolling: d, days: L, enabled: Nt, scope: s }),
      (t[47] = d),
      (t[48] = s),
      (t[49] = Nt),
      (t[50] = L),
      (t[51] = Pt))
    : (Pt = t[51]);
  let Lt = on(Pt),
    { data: Rt, isLoading: zt, isError: Bt, refetch: Ht } = Lt,
    Ut = {
      current: [{ total: Rt?.total, isLoading: zt, isError: Bt }],
      days: L,
      enabled: l && s === `business` && fe,
      ...le.tokens,
    },
    { shouldProbe: Gt } = ar(Ut),
    { data: Jt, isLoading: Yt, isError: Xt } = on({ isPolling: d, days: 30, enabled: Gt, scope: s }),
    Zt = ar({ ...Ut, fallback: [{ total: Jt?.total, isLoading: Yt, isError: Xt }] }),
    Qt = Gt && !Zt.shouldResolve;
  Zt.shouldResolve && (ue(Sa), Zt.shouldSelectThirtyDays && R(30));
  let $t = zt && !Bt && Rt == null && Ce?.accountId === (y ?? null) && Ce.userId === (_ ?? null),
    en = $t ? Ce.data : Rt,
    tn;
  t[52] !== en?.models || t[53] !== s
    ? ((tn = s === `business` ? en?.models.filter(xa) : en?.models),
      (t[52] = en?.models),
      (t[53] = s),
      (t[54] = tn))
    : (tn = t[54]);
  let nn = tn,
    rn;
  t[55] !== z || t[56] !== nn
    ? ((rn =
        z != null &&
        nn?.some((e) => {
          let { key: t } = e;
          return t === z;
        })
          ? z
          : null),
      (t[55] = z),
      (t[56] = nn),
      (t[57] = rn))
    : (rn = t[57]);
  let sn = rn,
    ln = !f && Rt != null && Ce?.accountId === (y ?? null) && Ce.userId === (_ ?? null) && Ce.data !== Rt,
    un = zt || Qt,
    fn;
  t[58] === Ht
    ? (fn = t[59])
    : ((fn = () => {
        Ht();
      }),
      (t[58] = Ht),
      (t[59] = fn));
  let hn;
  t[60] !== Bt || t[61] !== $t || t[62] !== H || t[63] !== f || t[64] !== ln || t[65] !== un || t[66] !== fn
    ? ((hn = {
        animateDataChanges: ln,
        isError: Bt,
        isLoading: un,
        isUpdating: $t,
        preserveEmptyLayout: H,
        reduceMotion: f,
        onRetry: fn,
      }),
      (t[60] = Bt),
      (t[61] = $t),
      (t[62] = H),
      (t[63] = f),
      (t[64] = ln),
      (t[65] = un),
      (t[66] = fn),
      (t[67] = hn))
    : (hn = t[67]);
  let gn = hn,
    _n;
  t[68] !== B || t[69] !== l || t[70] !== d || t[71] !== s
    ? ((_n = { isPolling: d, days: B, enabled: l, scope: s }),
      (t[68] = B),
      (t[69] = l),
      (t[70] = d),
      (t[71] = s),
      (t[72] = _n))
    : (_n = t[72]);
  let vn = cn(_n),
    { data: bn, isLoading: Sn, isError: wn, refetch: Tn } = vn,
    En;
  t[73] !== B || t[74] !== l || t[75] !== d || t[76] !== s
    ? ((En = { isPolling: d, days: B, enabled: l, scope: s }),
      (t[73] = B),
      (t[74] = l),
      (t[75] = d),
      (t[76] = s),
      (t[77] = En))
    : (En = t[77]);
  let Dn = pn(En),
    { data: On, isLoading: kn, isError: An, refetch: jn } = Dn,
    Mn = {
      current: [
        { total: bn?.total, isLoading: Sn, isError: wn },
        { total: On?.total, isLoading: kn, isError: An },
      ],
      days: B,
      enabled: l && s !== `workspace` && fe,
      ...le.tools,
    },
    { shouldProbe: Pn } = ar(Mn),
    { data: Fn, isLoading: In, isError: Ln } = cn({ isPolling: d, days: 30, enabled: Pn, scope: s }),
    { data: Rn, isLoading: zn, isError: Vn } = pn({ isPolling: d, days: 30, enabled: Pn, scope: s }),
    Hn = ar({
      ...Mn,
      fallback: [
        { total: Fn?.total, isLoading: In, isError: Ln },
        { total: Rn?.total, isLoading: zn, isError: Vn },
      ],
    });
  Hn.shouldResolve && (ue(ba), Hn.shouldSelectThirtyDays && ne(30));
  let Un = Te?.accountId === (y ?? null) && Te.userId === (_ ?? null),
    Wn;
  t[78] !== Un || t[79] !== f
    ? ((Wn = (e, t) => !f && e != null && Un && t != null && t !== e),
      (t[78] = Un),
      (t[79] = f),
      (t[80] = Wn))
    : (Wn = t[80]);
  let Gn = Wn,
    Kn = Sn && !wn && bn == null && Un && Te.data.plugins != null,
    qn = kn && !An && On == null && Un && Te.data.skills != null,
    Yn = Kn ? Te.data.plugins : bn,
    Xn = qn ? Te.data.skills : On,
    Zn = s !== `workspace` && Un && (Te.data.plugins?.total ?? 0) > 0 && Yn?.total === 0,
    Qn = s !== `workspace` && Un && (Te.data.skills?.total ?? 0) > 0 && Xn?.total === 0,
    $n,
    er,
    Y,
    tr,
    nr,
    sr,
    cr,
    lr,
    ur,
    dr,
    fr,
    pr,
    mr,
    hr,
    gr,
    _r,
    vr,
    yr,
    br,
    xr,
    Sr,
    Cr;
  if (
    t[81] !== y ||
    t[82] !== p ||
    t[83] !== h ||
    t[84] !== n ||
    t[85] !== T ||
    t[86] !== wt ||
    t[87] !== Mt ||
    t[88] !== dt ||
    t[89] !== Ct ||
    t[90] !== q ||
    t[91] !== Yn?.dataFreshnessTimestamp ||
    t[92] !== Yn?.total ||
    t[93] !== Xn?.dataFreshnessTimestamp ||
    t[94] !== Xn?.total ||
    t[95] !== en ||
    t[96] !== fe ||
    t[97] !== Re ||
    t[98] !== m ||
    t[99] !== l ||
    t[100] !== b ||
    t[101] !== ot ||
    t[102] !== Ne ||
    t[103] !== K ||
    t[104] !== Fe ||
    t[105] !== wn ||
    t[106] !== Sn ||
    t[107] !== d ||
    t[108] !== An ||
    t[109] !== kn ||
    t[110] !== xt ||
    t[111] !== u ||
    t[112] !== $e ||
    t[113] !== je ||
    t[114] !== Me ||
    t[115] !== bn ||
    t[116] !== vn ||
    t[117] !== U ||
    t[118] !== V ||
    t[119] !== Ie ||
    t[120] !== N ||
    t[121] !== W ||
    t[122] !== Ce ||
    t[123] !== f ||
    t[124] !== Pe ||
    t[125] !== Et ||
    t[126] !== s ||
    t[127] !== We ||
    t[128] !== Be ||
    t[129] !== sn ||
    t[130] !== Pn ||
    t[131] !== On ||
    t[132] !== Dn ||
    t[133] !== E ||
    t[134] !== L ||
    t[135] !== Lt ||
    t[136] !== gn ||
    t[137] !== nn ||
    t[138] !== Hn.shouldResolve ||
    t[139] !== Ot ||
    t[140] !== D ||
    t[141] !== k ||
    t[142] !== Ye ||
    t[143] !== _ ||
    t[144] !== c
  ) {
    let e = ir(Yn?.dataFreshnessTimestamp, Xn?.dataFreshnessTimestamp);
    ((Y = bn != null && On != null && bn.total === 0 && On.total === 0 && !Sn && !kn && !wn && !An),
      (tr = U && (Sn || kn) && (bn?.total ?? 0) === 0 && (On?.total ?? 0) === 0 && !wn && !An),
      (nr =
        s !== `workspace` &&
        ((Sn && bn == null) || (kn && On == null) || (Pn && !Hn.shouldResolve)) &&
        (Yn?.total ?? 0) === 0 &&
        (Xn?.total ?? 0) === 0 &&
        !wn &&
        !An));
    let r;
    t[167] !== T || t[168] !== q || t[169] !== k
      ? ((r = T && (k > 0 || q == null || q.attribution.every(ya))),
        (t[167] = T),
        (t[168] = q),
        (t[169] = k),
        (t[170] = r))
      : (r = t[170]);
    let i = r,
      a;
    t[171] !== y || t[172] !== l || t[173] !== d || t[174] !== u || t[175] !== _ || t[176] !== c
      ? ((a =
          c && l && y != null && _ != null
            ? (0, $.jsx)(
                ka,
                { children: (0, $.jsx)(Jn, { accountId: y, isUsdWorkspace: u, isPolling: d, userId: _ }) },
                `workspace-top-chats:${y}:${_}`,
              )
            : null),
        (t[171] = y),
        (t[172] = l),
        (t[173] = d),
        (t[174] = u),
        (t[175] = _),
        (t[176] = c),
        (t[177] = a))
      : (a = t[177]);
    let o = a;
    dr = `flex w-full flex-col gap-[22px]`;
    let v;
    t[178] !== fe || t[179] !== l || t[180] !== je || t[181] !== s
      ? ((v = s !== `workspace` && l && fe ? [je] : []),
        (t[178] = fe),
        (t[179] = l),
        (t[180] = je),
        (t[181] = s),
        (t[182] = v))
      : (v = t[182]);
    let C;
    (t[183] !== n ||
    t[184] !== l ||
    t[185] !== b ||
    t[186] !== u ||
    t[187] !== $e ||
    t[188] !== We ||
    t[189] !== Ye
      ? ((C = l && !u && (!b || n) ? [Ye ? $e : We] : []),
        (t[183] = n),
        (t[184] = l),
        (t[185] = b),
        (t[186] = u),
        (t[187] = $e),
        (t[188] = We),
        (t[189] = Ye),
        (t[190] = C))
      : (C = t[190]),
      t[191] !== v || t[192] !== C
        ? ((fr = (0, $.jsx)(Bn, { chart: `usage_history`, queries: [...v, ...C] })),
          (t[191] = v),
          (t[192] = C),
          (t[193] = fr))
        : (fr = t[193]),
      t[194] !== l || t[195] !== b || t[196] !== Lt
        ? ((pr = !b && l ? (0, $.jsx)(Bn, { chart: `tokens`, queries: [Lt] }) : null),
          (t[194] = l),
          (t[195] = b),
          (t[196] = Lt),
          (t[197] = pr))
        : (pr = t[197]),
      t[198] !== l || t[199] !== vn || t[200] !== Dn
        ? ((mr = l ? (0, $.jsx)(Bn, { chart: `tool_activity`, queries: [vn, Dn] }) : null),
          (t[198] = l),
          (t[199] = vn),
          (t[200] = Dn),
          (t[201] = mr))
        : (mr = t[201]),
      t[202] !== y ||
      t[203] !== T ||
      t[204] !== q?.attribution ||
      t[205] !== Ne ||
      t[206] !== K ||
      t[207] !== Fe ||
      t[208] !== xt ||
      t[209] !== Me ||
      t[210] !== V ||
      t[211] !== W ||
      t[212] !== f ||
      t[213] !== Pe ||
      t[214] !== i ||
      t[215] !== Ot ||
      t[216] !== D ||
      t[217] !== k ||
      t[218] !== _
        ? ((hr = i
            ? (0, $.jsx)(
                ni,
                {
                  buckets: q?.attribution,
                  days: D,
                  onDaysChange: Ot,
                  pagination: T ? { offsetDays: k, onOffsetDaysChange: (e) => Ot(D, e) } : void 0,
                  status: {
                    animateDataChanges:
                      Me != null && W?.accountId === (y ?? null) && W.userId === (_ ?? null) && W.data !== Me,
                    isError: Ne,
                    isLoading: K || xt,
                    isUpdating: Fe,
                    preserveEmptyLayout: V,
                    reduceMotion: f,
                    onRetry: () => {
                      Pe();
                    },
                  },
                },
                `consumer-usage-history:${y}:${_}`,
              )
            : null),
          (t[202] = y),
          (t[203] = T),
          (t[204] = q?.attribution),
          (t[205] = Ne),
          (t[206] = K),
          (t[207] = Fe),
          (t[208] = xt),
          (t[209] = Me),
          (t[210] = V),
          (t[211] = W),
          (t[212] = f),
          (t[213] = Pe),
          (t[214] = i),
          (t[215] = Ot),
          (t[216] = D),
          (t[217] = k),
          (t[218] = _),
          (t[219] = hr))
        : (hr = t[219]),
      t[220] !== y ||
      t[221] !== p ||
      t[222] !== T ||
      t[223] !== q ||
      t[224] !== Re ||
      t[225] !== m ||
      t[226] !== Ne ||
      t[227] !== K ||
      t[228] !== Fe ||
      t[229] !== d ||
      t[230] !== xt ||
      t[231] !== Me ||
      t[232] !== V ||
      t[233] !== Ie ||
      t[234] !== N ||
      t[235] !== W ||
      t[236] !== f ||
      t[237] !== Pe ||
      t[238] !== s ||
      t[239] !== Be ||
      t[240] !== i ||
      t[241] !== Ot ||
      t[242] !== D ||
      t[243] !== _
        ? ((gr =
            !i && s !== `workspace`
              ? (0, $.jsxs)(J, {
                  children: [
                    (0, $.jsx)(J.Header, {
                      actionsAlignment: `end`,
                      size: `default`,
                      title: (0, $.jsx)(g, {
                        id: `settings.usage.billing.personalUsage.history.title`,
                        defaultMessage: `Usage history`,
                        description: `Heading above a Consumer or Business user's own included-plan usage history in Codex desktop analytics settings; the chart does not show remaining plan allowance`,
                      }),
                      subtitle: (0, $.jsx)(g, {
                        id: `settings.usage.billing.personalUsage.history.subtitle`,
                        defaultMessage: `See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.`,
                        description: `Supporting text beneath Usage history in Codex desktop analytics settings. Explains that a Consumer or Business user's included-plan activity and credit charts include Work, Codex, and other agentic tasks, but exclude ordinary Chat conversations. Work, Codex, and Chat are OpenAI product names.`,
                      }),
                      actions: (0, $.jsx)(Vt, {
                        ariaLabel: m.formatMessage({
                          id: `settings.usage.billing.personalUsage.history.periodLabel`,
                          defaultMessage: `Personal usage history time range`,
                          description: `Accessible label for a Consumer or Business user's historical personal Codex usage date-range selector`,
                        }),
                        days: D,
                        onChange: Ot,
                      }),
                    }),
                    (0, $.jsx)(J.Content, {
                      children: (0, $.jsx)(Da, {
                        isPolling: d,
                        consumerAnalytics: T,
                        actions: Re
                          ? (0, $.jsx)(Ze, {
                              ariaLabel: m.formatMessage({
                                id: `settings.usage.billing.personalUsage.breakdownLabel`,
                                defaultMessage: `Group personal usage by product or model`,
                                description: `Accessible label for the selector that groups a Consumer or Business account holder’s personal usage by the Codex or Work product, or by AI model`,
                              }),
                              options: [
                                { id: `surface`, label: (0, $.jsx)(Ft, { breakdown: `product` }) },
                                { id: `model`, label: (0, $.jsx)(Wt, { breakdown: `model` }) },
                              ],
                              selectedId: Be,
                              variant: `inset`,
                              onSelect: (e) => {
                                (e !== Be && mn(p, `usage_history`, e === `surface` ? `product` : e),
                                  P(Be),
                                  M(e));
                              },
                            })
                          : void 0,
                        breakdown: Be === `model` ? `model` : `product`,
                        data: Be === `model` ? q?.byModel : q,
                        isPersonalUsage: !0,
                        preservePopulatedCardLayout: Ie,
                        scope: s,
                        status: {
                          animateDataChanges:
                            !f &&
                            ((N != null && N !== Be) ||
                              (Me != null &&
                                W?.accountId === (y ?? null) &&
                                W.userId === (_ ?? null) &&
                                W.data !== Me)),
                          isError: Ne,
                          isLoading: K || xt,
                          isUpdating: Fe,
                          preserveEmptyLayout: V,
                          reduceMotion: f,
                          onAnimationEnd: () => P(null),
                          onRetry: () => {
                            Pe();
                          },
                        },
                      }),
                    }),
                    (0, $.jsxs)(J.Footer, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(S, { className: `shrink-0`, asset: x }),
                        (0, $.jsx)(g, {
                          id: `settings.usage.daily.subtitle`,
                          defaultMessage: `Usage data is approximate and may be delayed by up to 6 hours`,
                          description: `Description for daily usage in usage settings`,
                        }),
                      ],
                    }),
                  ],
                })
              : null),
          (t[220] = y),
          (t[221] = p),
          (t[222] = T),
          (t[223] = q),
          (t[224] = Re),
          (t[225] = m),
          (t[226] = Ne),
          (t[227] = K),
          (t[228] = Fe),
          (t[229] = d),
          (t[230] = xt),
          (t[231] = Me),
          (t[232] = V),
          (t[233] = Ie),
          (t[234] = N),
          (t[235] = W),
          (t[236] = f),
          (t[237] = Pe),
          (t[238] = s),
          (t[239] = Be),
          (t[240] = i),
          (t[241] = Ot),
          (t[242] = D),
          (t[243] = _),
          (t[244] = gr))
        : (gr = t[244]),
      t[245] !== y ||
      t[246] !== T ||
      t[247] !== l ||
      t[248] !== d ||
      t[249] !== E ||
      t[250] !== _ ||
      t[251] !== c
        ? ((_r =
            T && !c && E && l && y != null && _ != null
              ? (0, $.jsx)(
                  ka,
                  { children: (0, $.jsx)(Xi, { isPolling: d, accountId: y, userId: _ }) },
                  `consumer-top-chats:${y}:${_}`,
                )
              : null),
          (t[245] = y),
          (t[246] = T),
          (t[247] = l),
          (t[248] = d),
          (t[249] = E),
          (t[250] = _),
          (t[251] = c),
          (t[252] = _r))
        : (_r = t[252]),
      (vr = s === `consumer` ? o : null),
      t[253] !== T || t[254] !== l || t[255] !== d || t[256] !== f || t[257] !== s
        ? ((yr = T
            ? (0, $.jsx)(Oi, {
                isPolling: d,
                isActive: l,
                reduceMotion: f,
                scope: s === `business` ? `business` : `consumer`,
              })
            : null),
          (t[253] = T),
          (t[254] = l),
          (t[255] = d),
          (t[256] = f),
          (t[257] = s),
          (t[258] = yr))
        : (yr = t[258]),
      t[259] !== h || t[260] !== l || t[261] !== d || t[262] !== u || t[263] !== f || t[264] !== _
        ? ((br = u
            ? (0, $.jsx)(
                oa,
                { isPolling: d, enabled: l, reduceMotion: f },
                `enterprise-spend-history:${h}:${_}`,
              )
            : null),
          (t[259] = h),
          (t[260] = l),
          (t[261] = d),
          (t[262] = u),
          (t[263] = f),
          (t[264] = _),
          (t[265] = br))
        : (br = t[265]),
      t[266] !== y ||
      t[267] !== p ||
      t[268] !== n ||
      t[269] !== T ||
      t[270] !== wt ||
      t[271] !== Mt ||
      t[272] !== dt ||
      t[273] !== Ct ||
      t[274] !== m ||
      t[275] !== b ||
      t[276] !== ot ||
      t[277] !== d ||
      t[278] !== u ||
      t[279] !== Et ||
      t[280] !== s ||
      t[281] !== Ot ||
      t[282] !== D ||
      t[283] !== _
        ? ((xr =
            !u &&
            (!b || n) &&
            (s === `workspace` || ot || (Ct?.total ?? 0) > 0 || (Ct?.paidModelTotal ?? 0) > 0)
              ? (0, $.jsxs)(J, {
                  children: [
                    (0, $.jsx)(J.Header, {
                      className: s === `workspace` ? void 0 : `max-sm:flex-col max-sm:items-stretch`,
                      actionsAlignment: `end`,
                      size: `default`,
                      title: (0, $.jsx)(Oa, { scope: s, consumerAnalytics: T }),
                      subtitle:
                        wt == null
                          ? (0, $.jsx)(g, {
                              id: `settings.usage.billing.credits.history.subtitle`,
                              defaultMessage: `Track credits usage over time`,
                              description: `Description for the credit usage history chart when freshness is unavailable`,
                            })
                          : (0, $.jsx)(g, {
                              id: `settings.usage.billing.credits.history.subtitle.updated`,
                              defaultMessage: `Track credits usage over time. Updated {date}`,
                              description: `Description and source freshness timestamp for the credit usage history chart`,
                              values: { date: rr(wt, m) },
                            }),
                      actions: (0, $.jsxs)(`div`, {
                        className: `flex flex-wrap items-center justify-end gap-2`,
                        children: [
                          (0, $.jsx)(Vt, {
                            ariaLabel: T
                              ? m.formatMessage({
                                  id: `settings.usage.billing.credits.consumer.history.periodLabel`,
                                  defaultMessage: `Credits history time range`,
                                  description: `Accessible label for the Consumer credit history date-range selector`,
                                })
                              : m.formatMessage({
                                  id: `settings.usage.billing.credits.history.periodLabel`,
                                  defaultMessage: `Credit usage history time range`,
                                  description: `Accessible label for the enterprise credit usage history date-range selector`,
                                }),
                            days: D,
                            onChange: (e) => {
                              if (s !== `workspace`) {
                                Ot(e);
                                return;
                              }
                              (e !== D && Nn(p, `usage_history`, e),
                                Et(),
                                he(Ct?.total === 0),
                                be(
                                  Ct != null && Ct.total > 0
                                    ? { accountId: y ?? null, data: Ct, userId: _ ?? null }
                                    : null,
                                ),
                                O(e));
                            },
                          }),
                          (0, $.jsx)(qt, {
                            breakdown: dt,
                            scope: s,
                            onChange: (e) => {
                              (e !== dt && (e === `model` || e === `product`) && mn(p, `usage_history`, e),
                                Et(),
                                he(Ct?.total === 0),
                                be(null),
                                I(e));
                            },
                          }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(J.Content, {
                      children: (0, $.jsx)(Da, {
                        isPolling: d,
                        consumerAnalytics: T,
                        breakdown: dt,
                        data: Ct,
                        scope: s,
                        status: Mt,
                      }),
                    }),
                  ],
                })
              : null),
          (t[266] = y),
          (t[267] = p),
          (t[268] = n),
          (t[269] = T),
          (t[270] = wt),
          (t[271] = Mt),
          (t[272] = dt),
          (t[273] = Ct),
          (t[274] = m),
          (t[275] = b),
          (t[276] = ot),
          (t[277] = d),
          (t[278] = u),
          (t[279] = Et),
          (t[280] = s),
          (t[281] = Ot),
          (t[282] = D),
          (t[283] = _),
          (t[284] = xr))
        : (xr = t[284]),
      t[285] !== y ||
      t[286] !== p ||
      t[287] !== en ||
      t[288] !== m ||
      t[289] !== b ||
      t[290] !== Ce ||
      t[291] !== s ||
      t[292] !== sn ||
      t[293] !== L ||
      t[294] !== gn ||
      t[295] !== nn ||
      t[296] !== _
        ? ((Sr = b
            ? null
            : (0, $.jsxs)(J, {
                children: [
                  (0, $.jsx)(J.Header, {
                    className: s === `workspace` ? void 0 : `max-sm:flex-col max-sm:items-stretch`,
                    actionsAlignment: `end`,
                    size: `default`,
                    title:
                      s === `workspace`
                        ? (0, $.jsx)(g, {
                            id: `settings.usage.billing.tokens.history.title`,
                            defaultMessage: `Token usage history`,
                            description: `Title for the token usage history chart in enterprise billing settings`,
                          })
                        : (0, $.jsx)(g, {
                            id: `settings.usage.billing.tokens.business.history.title`,
                            defaultMessage: `Tokens by model`,
                            description: `Heading above a Business workspace member's own token usage grouped by AI model in Codex desktop analytics settings`,
                          }),
                    subtitle:
                      en?.dataFreshnessTimestamp == null
                        ? (0, $.jsx)(g, {
                            id: `settings.usage.billing.tokens.history.subtitle`,
                            defaultMessage: `Track token usage over time`,
                            description: `Description for the token usage history chart when freshness is unavailable`,
                          })
                        : (0, $.jsx)(g, {
                            id: `settings.usage.billing.tokens.history.subtitle.updated`,
                            defaultMessage: `Track token usage over time. Updated {date}`,
                            description: `Description and source freshness timestamp for the token usage history chart`,
                            values: { date: rr(en.dataFreshnessTimestamp, m) },
                          }),
                    actions: (0, $.jsxs)(`div`, {
                      className: `flex flex-wrap items-center justify-end gap-2`,
                      children: [
                        (0, $.jsx)(Vt, {
                          ariaLabel: m.formatMessage({
                            id: `settings.usage.billing.tokens.history.periodLabel`,
                            defaultMessage: `Token usage history time range`,
                            description: `Accessible label for the enterprise token usage history date-range selector`,
                          }),
                          days: L,
                          onChange: (e) => {
                            (e !== L && Nn(p, `tokens`, e),
                              ge(en?.total === 0),
                              we((e) =>
                                en?.total
                                  ? { accountId: y ?? null, data: en, userId: _ ?? null }
                                  : s === `business` &&
                                      e?.accountId === (y ?? null) &&
                                      e.userId === (_ ?? null)
                                    ? e
                                    : null,
                              ),
                              ue(va),
                              R(e));
                          },
                        }),
                        (0, $.jsx)(It, {
                          models: nn ?? [],
                          selectedModel: sn,
                          onChange: (e) => {
                            (e !== sn && yn(p, `tokens`, e), te(e));
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, $.jsx)(J.Content, {
                    children: (0, $.jsx)(zr, {
                      data: en,
                      preservePopulatedCardLayout:
                        s === `business` &&
                        Ce?.accountId === (y ?? null) &&
                        Ce.userId === (_ ?? null) &&
                        Ce.data.total > 0 &&
                        en?.total === 0,
                      selectedModel: sn,
                      scope: s,
                      status: gn,
                    }),
                  }),
                ],
              })),
          (t[285] = y),
          (t[286] = p),
          (t[287] = en),
          (t[288] = m),
          (t[289] = b),
          (t[290] = Ce),
          (t[291] = s),
          (t[292] = sn),
          (t[293] = L),
          (t[294] = gn),
          (t[295] = nn),
          (t[296] = _),
          (t[297] = Sr))
        : (Sr = t[297]),
      (Cr = s === `workspace` ? o : null),
      (er = J),
      ($n = J.Header),
      (sr = `end`),
      (cr = `default`),
      t[298] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((lr = (0, $.jsx)(g, {
            id: `settings.usage.billing.activity.title`,
            defaultMessage: `Tool activity`,
            description: `Title for skill and plugin usage charts in enterprise billing settings`,
          })),
          (t[298] = lr))
        : (lr = t[298]),
      (ur =
        e == null
          ? (0, $.jsx)(g, {
              id: `settings.usage.billing.activity.subtitle`,
              defaultMessage: `See which plugins and skills were used over time`,
              description: `Description for plugin and skill activity charts when freshness is unavailable`,
            })
          : (0, $.jsx)(g, {
              id: `settings.usage.billing.activity.subtitle.updated`,
              defaultMessage: `See which plugins and skills were used over time. Updated {date}`,
              description: `Description and oldest source freshness timestamp for the combined plugin and skill activity charts`,
              values: { date: rr(e, m) },
            })),
      (t[81] = y),
      (t[82] = p),
      (t[83] = h),
      (t[84] = n),
      (t[85] = T),
      (t[86] = wt),
      (t[87] = Mt),
      (t[88] = dt),
      (t[89] = Ct),
      (t[90] = q),
      (t[91] = Yn?.dataFreshnessTimestamp),
      (t[92] = Yn?.total),
      (t[93] = Xn?.dataFreshnessTimestamp),
      (t[94] = Xn?.total),
      (t[95] = en),
      (t[96] = fe),
      (t[97] = Re),
      (t[98] = m),
      (t[99] = l),
      (t[100] = b),
      (t[101] = ot),
      (t[102] = Ne),
      (t[103] = K),
      (t[104] = Fe),
      (t[105] = wn),
      (t[106] = Sn),
      (t[107] = d),
      (t[108] = An),
      (t[109] = kn),
      (t[110] = xt),
      (t[111] = u),
      (t[112] = $e),
      (t[113] = je),
      (t[114] = Me),
      (t[115] = bn),
      (t[116] = vn),
      (t[117] = U),
      (t[118] = V),
      (t[119] = Ie),
      (t[120] = N),
      (t[121] = W),
      (t[122] = Ce),
      (t[123] = f),
      (t[124] = Pe),
      (t[125] = Et),
      (t[126] = s),
      (t[127] = We),
      (t[128] = Be),
      (t[129] = sn),
      (t[130] = Pn),
      (t[131] = On),
      (t[132] = Dn),
      (t[133] = E),
      (t[134] = L),
      (t[135] = Lt),
      (t[136] = gn),
      (t[137] = nn),
      (t[138] = Hn.shouldResolve),
      (t[139] = Ot),
      (t[140] = D),
      (t[141] = k),
      (t[142] = Ye),
      (t[143] = _),
      (t[144] = c),
      (t[145] = $n),
      (t[146] = er),
      (t[147] = Y),
      (t[148] = tr),
      (t[149] = nr),
      (t[150] = sr),
      (t[151] = cr),
      (t[152] = lr),
      (t[153] = ur),
      (t[154] = dr),
      (t[155] = fr),
      (t[156] = pr),
      (t[157] = mr),
      (t[158] = hr),
      (t[159] = gr),
      (t[160] = _r),
      (t[161] = vr),
      (t[162] = yr),
      (t[163] = br),
      (t[164] = xr),
      (t[165] = Sr),
      (t[166] = Cr));
  } else
    (($n = t[145]),
      (er = t[146]),
      (Y = t[147]),
      (tr = t[148]),
      (nr = t[149]),
      (sr = t[150]),
      (cr = t[151]),
      (lr = t[152]),
      (ur = t[153]),
      (dr = t[154]),
      (fr = t[155]),
      (pr = t[156]),
      (mr = t[157]),
      (hr = t[158]),
      (gr = t[159]),
      (_r = t[160]),
      (vr = t[161]),
      (yr = t[162]),
      (br = t[163]),
      (xr = t[164]),
      (Sr = t[165]),
      (Cr = t[166]));
  let wr;
  t[299] === m
    ? (wr = t[300])
    : ((wr = m.formatMessage({
        id: `settings.usage.billing.activity.periodLabel`,
        defaultMessage: `Tool activity time range`,
        description: `Accessible label for the enterprise tool activity date-range selector`,
      })),
      (t[299] = m),
      (t[300] = wr));
  let Tr;
  t[301] !== y ||
  t[302] !== B ||
  t[303] !== p ||
  t[304] !== Yn ||
  t[305] !== Xn ||
  t[306] !== Y ||
  t[307] !== _
    ? ((Tr = (e) => {
        (e !== B && Nn(p, `tool_activity`, e),
          _e(Y),
          Ee(
            (Yn?.total ?? 0) > 0 || (Xn?.total ?? 0) > 0
              ? { accountId: y ?? null, data: { plugins: Yn, skills: Xn }, userId: _ ?? null }
              : null,
          ),
          ue(_a),
          ne(e));
      }),
      (t[301] = y),
      (t[302] = B),
      (t[303] = p),
      (t[304] = Yn),
      (t[305] = Xn),
      (t[306] = Y),
      (t[307] = _),
      (t[308] = Tr))
    : (Tr = t[308]);
  let Er;
  t[309] !== B || t[310] !== wr || t[311] !== Tr
    ? ((Er = (0, $.jsx)(Vt, { ariaLabel: wr, days: B, onChange: Tr })),
      (t[309] = B),
      (t[310] = wr),
      (t[311] = Tr),
      (t[312] = Er))
    : (Er = t[312]);
  let Dr;
  t[313] !== $n || t[314] !== sr || t[315] !== cr || t[316] !== lr || t[317] !== ur || t[318] !== Er
    ? ((Dr = (0, $.jsx)($n, { actionsAlignment: sr, size: cr, title: lr, subtitle: ur, actions: Er })),
      (t[313] = $n),
      (t[314] = sr),
      (t[315] = cr),
      (t[316] = lr),
      (t[317] = ur),
      (t[318] = Er),
      (t[319] = Dr))
    : (Dr = t[319]);
  let Or = s === `workspace` && `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
    kr = s === `workspace` && (Y || tr ? `min-h-16 justify-center` : `min-h-128`),
    Ar;
  t[320] !== Or || t[321] !== kr
    ? ((Ar = de(`gap-3`, Or, kr)), (t[320] = Or), (t[321] = kr), (t[322] = Ar))
    : (Ar = t[322]);
  let jr;
  t[323] !== T ||
  t[324] !== Yn ||
  t[325] !== Xn ||
  t[326] !== Y ||
  t[327] !== tr ||
  t[328] !== nr ||
  t[329] !== wn ||
  t[330] !== Sn ||
  t[331] !== Kn ||
  t[332] !== An ||
  t[333] !== kn ||
  t[334] !== qn ||
  t[335] !== bn ||
  t[336] !== U ||
  t[337] !== Zn ||
  t[338] !== Qn ||
  t[339] !== Te?.data ||
  t[340] !== f ||
  t[341] !== Tn ||
  t[342] !== jn ||
  t[343] !== s ||
  t[344] !== Gn ||
  t[345] !== On
    ? ((jr =
        (Y && !Zn && !Qn) || tr || nr
          ? (0, $.jsx)(G, {
              children: (0, $.jsx)(st, {
                layout: `settings-row`,
                children:
                  tr || nr
                    ? (0, $.jsx)(Cn, { compact: !0, reduceMotion: f })
                    : (0, $.jsx)(g, {
                        id: `settings.usage.billing.activity.empty`,
                        defaultMessage: `No plugin calls or skills used during this period`,
                        description: `Empty state when neither plugins nor skills were used during the selected enterprise workspace usage period`,
                      }),
              }),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                s === `workspace` || (Yn?.total ?? 0) > 0 || wn || Zn
                  ? (0, $.jsx)(Kt, {
                      analyticsChart: `tool_activity`,
                      consumerAnalytics: T,
                      data: Yn,
                      preservePopulatedCardLayout: Zn,
                      scope: s,
                      status: {
                        animateDataChanges: Gn(bn, Te?.data.plugins),
                        isError: wn,
                        isLoading: Sn,
                        isUpdating: Kn,
                        preserveEmptyLayout: U,
                        reduceMotion: f,
                        onRetry: () => {
                          Tn();
                        },
                      },
                      title:
                        s === `workspace` || T
                          ? (0, $.jsx)(g, {
                              id: `settings.usage.billing.activity.plugins`,
                              defaultMessage: `Plugins called`,
                              description: `Label for Consumer or enterprise plugin invocation activity`,
                            })
                          : (0, $.jsx)(g, {
                              id: `settings.usage.billing.activity.personalPluginCalls`,
                              defaultMessage: `Plugin calls`,
                              description: `Chart title showing the number of plugins called by the current Consumer or Business workspace member in Codex desktop analytics settings`,
                            }),
                      unit: `calls`,
                    })
                  : null,
                s === `workspace` || (Xn?.total ?? 0) > 0 || An || Qn
                  ? (0, $.jsx)(Kt, {
                      analyticsChart: `tool_activity`,
                      consumerAnalytics: T,
                      data: Xn,
                      preservePopulatedCardLayout: Qn,
                      scope: s,
                      status: {
                        animateDataChanges: Gn(On, Te?.data.skills),
                        isError: An,
                        isLoading: kn,
                        isUpdating: qn,
                        preserveEmptyLayout: U,
                        reduceMotion: f,
                        onRetry: () => {
                          jn();
                        },
                      },
                      title: (0, $.jsx)(g, {
                        id: `settings.usage.billing.activity.skills`,
                        defaultMessage: `Skills used`,
                        description: `Label for enterprise skill invocation activity`,
                      }),
                      unit: `uses`,
                    })
                  : null,
              ],
            })),
      (t[323] = T),
      (t[324] = Yn),
      (t[325] = Xn),
      (t[326] = Y),
      (t[327] = tr),
      (t[328] = nr),
      (t[329] = wn),
      (t[330] = Sn),
      (t[331] = Kn),
      (t[332] = An),
      (t[333] = kn),
      (t[334] = qn),
      (t[335] = bn),
      (t[336] = U),
      (t[337] = Zn),
      (t[338] = Qn),
      (t[339] = Te?.data),
      (t[340] = f),
      (t[341] = Tn),
      (t[342] = jn),
      (t[343] = s),
      (t[344] = Gn),
      (t[345] = On),
      (t[346] = jr))
    : (jr = t[346]);
  let Mr;
  t[347] !== Ar || t[348] !== jr
    ? ((Mr = (0, $.jsx)(J.Content, { className: Ar, children: jr })),
      (t[347] = Ar),
      (t[348] = jr),
      (t[349] = Mr))
    : (Mr = t[349]);
  let Nr;
  t[350] !== er || t[351] !== Dr || t[352] !== Mr
    ? ((Nr = (0, $.jsxs)(er, { children: [Dr, Mr] })),
      (t[350] = er),
      (t[351] = Dr),
      (t[352] = Mr),
      (t[353] = Nr))
    : (Nr = t[353]);
  let Pr;
  t[354] !== T || t[355] !== l || t[356] !== d || t[357] !== f || t[358] !== s
    ? ((Pr =
        s === `consumer` || s === `business`
          ? (0, $.jsx)(or, { isPolling: d, consumerAnalytics: T, isActive: l, reduceMotion: f, scope: s })
          : null),
      (t[354] = T),
      (t[355] = l),
      (t[356] = d),
      (t[357] = f),
      (t[358] = s),
      (t[359] = Pr))
    : (Pr = t[359]);
  let Fr;
  return (
    t[360] !== dr ||
    t[361] !== fr ||
    t[362] !== pr ||
    t[363] !== mr ||
    t[364] !== hr ||
    t[365] !== gr ||
    t[366] !== _r ||
    t[367] !== vr ||
    t[368] !== yr ||
    t[369] !== br ||
    t[370] !== xr ||
    t[371] !== Sr ||
    t[372] !== Cr ||
    t[373] !== Nr ||
    t[374] !== Pr
      ? ((Fr = (0, $.jsxs)(`div`, {
          className: dr,
          children: [fr, pr, mr, hr, gr, _r, vr, yr, br, xr, Sr, Cr, Nr, Pr],
        })),
        (t[360] = dr),
        (t[361] = fr),
        (t[362] = pr),
        (t[363] = mr),
        (t[364] = hr),
        (t[365] = gr),
        (t[366] = _r),
        (t[367] = vr),
        (t[368] = yr),
        (t[369] = br),
        (t[370] = xr),
        (t[371] = Sr),
        (t[372] = Cr),
        (t[373] = Nr),
        (t[374] = Pr),
        (t[375] = Fr))
      : (Fr = t[375]),
    Fr
  );
}
function _a(e) {
  return { ...e, tools: { ...e.tools, hasManualSelection: !0 } };
}
function va(e) {
  return { ...e, tokens: { ...e.tokens, hasManualSelection: !0 } };
}
function ya(e) {
  return e.attribution != null;
}
function ba(e) {
  return { ...e, tools: { ...e.tools, hasResolved: !0 } };
}
function xa(e) {
  let { total: t } = e;
  return t > 0;
}
function Sa(e) {
  return { ...e, tokens: { ...e.tokens, hasResolved: !0 } };
}
function Ca(e) {
  return { ...e, usage: { ...e.usage, hasManualSelection: !0 } };
}
function wa(e) {
  return { ...e, usage: { ...e.usage, hasResolved: !0 } };
}
function Ta(e) {
  let { total: t } = e;
  return t > 0;
}
function Ea(e) {
  let { total: t } = e;
  return t > 0;
}
function Da(e) {
  let t = (0, Aa.c)(14),
    {
      isPolling: n,
      actions: r,
      breakdown: i,
      data: a,
      isPersonalUsage: o,
      preservePopulatedCardLayout: s,
      consumerAnalytics: c,
      scope: l,
      status: u,
    } = e,
    d = c !== void 0 && c,
    f = a?.total ?? 0,
    p = l === `workspace` && (a?.total ?? 0) > 0,
    m;
  t[0] !== n || t[1] !== f || t[2] !== p
    ? ((m = { isPolling: n, credits: f, enabled: p }), (t[0] = n), (t[1] = f), (t[2] = p), (t[3] = m))
    : (m = t[3]);
  let { data: h } = un(m),
    g =
      l !== `workspace` || h?.estimated_usage_usd_micros == null ? null : h.estimated_usage_usd_micros / 1e6,
    _;
  return (
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== d ||
    t[7] !== a ||
    t[8] !== o ||
    t[9] !== s ||
    t[10] !== l ||
    t[11] !== u ||
    t[12] !== g
      ? ((_ = (0, $.jsx)(Or, {
          analyticsChart: `usage_history`,
          consumerAnalytics: d,
          actions: r,
          breakdown: i,
          data: a,
          estimatedSpendUsd: g,
          isPersonalUsage: o,
          preservePopulatedCardLayout: s,
          scope: l,
          status: u,
        })),
        (t[4] = r),
        (t[5] = i),
        (t[6] = d),
        (t[7] = a),
        (t[8] = o),
        (t[9] = s),
        (t[10] = l),
        (t[11] = u),
        (t[12] = g),
        (t[13] = _))
      : (_ = t[13]),
    _
  );
}
function Oa(e) {
  let t = (0, Aa.c)(3),
    { consumerAnalytics: n, scope: r } = e;
  if (n !== void 0 && n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(g, {
            id: `settings.usage.billing.credits.consumer.history.title`,
            defaultMessage: `Credits history`,
            description: `Credit history section heading for Consumer analytics`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r === `workspace`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(g, {
            id: `settings.usage.billing.credits.workspace.history.title`,
            defaultMessage: `Credits usage history`,
            description: `Title for the credit usage history chart in enterprise workspace usage settings`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(g, {
          id: `settings.usage.billing.credits.history.title`,
          defaultMessage: `Credit usage history`,
          description: `Title for the credit usage history chart in usage settings`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function ka(e) {
  let t = (0, Aa.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(Ie, { name: `usage.local-top-chats`, children: n }),
            (0, $.jsx)(Ie, { name: `codex.browser.execution`, children: n }),
          ],
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var Aa, ja, $;
function Ma() {
  return (Ma = e(() => {
    ((Aa = Ae()),
      D(),
      re(),
      (ja = Pe()),
      U(),
      ot(),
      nt(),
      Be(),
      w(),
      rt(),
      Ye(),
      ln(),
      Re(),
      _(),
      et(),
      nr(),
      Rt(),
      pr(),
      Ht(),
      hn(),
      Rr(),
      Gr(),
      oi(),
      ji(),
      aa(),
      ma(),
      Pn(),
      Rn(),
      ($ = K()));
  }))();
}
export { Ma as n, ha as t };
//# sourceMappingURL=billing-analytics-bcdd6f8fa300.js.map
