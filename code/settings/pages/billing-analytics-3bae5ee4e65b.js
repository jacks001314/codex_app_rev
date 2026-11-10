import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Amn as r,
  B6t as i,
  Cpn as a,
  Eln as o,
  F6 as s,
  FKt as c,
  Fd as l,
  HDt as u,
  Hu as d,
  Id as f,
  Irn as p,
  JG as m,
  JK as h,
  Jit as g,
  KG as _,
  KYt as v,
  Kit as y,
  Mwt as b,
  N3t as x,
  NB as S,
  NMt as C,
  O3t as w,
  OW as T,
  Opn as E,
  P6 as D,
  PMt as O,
  Qu as k,
  RKt as A,
  RS as j,
  Rpn as M,
  S3t as N,
  SJt as P,
  Spn as F,
  TJt as I,
  Trn as L,
  U3t as R,
  Uu as ee,
  VS as z,
  Vu as te,
  Wu as ne,
  Xdt as re,
  Xu as ie,
  ZG as ae,
  Zu as B,
  a3t as oe,
  aYt as V,
  bMt as se,
  cF as ce,
  cS as le,
  dK as ue,
  dW as de,
  dbt as fe,
  drn as H,
  e4t as U,
  fW as W,
  gMt as pe,
  gpn as G,
  grn as me,
  hEt as he,
  hMt as ge,
  hmn as K,
  i3t as _e,
  jB as ve,
  jln as ye,
  jrn as be,
  k5t as xe,
  kMt as Se,
  kW as Ce,
  kmn as q,
  krn as we,
  lS as Te,
  lW as Ee,
  llt as De,
  mK as J,
  mrn as Oe,
  mzt as ke,
  nln as Ae,
  o3t as je,
  pzt as Me,
  qK as Ne,
  qu as Pe,
  r3t as Fe,
  rTt as Ie,
  rq as Le,
  rrn as Re,
  s3t as ze,
  sF as Be,
  sW as Ve,
  sYt as He,
  snn as Ue,
  ubt as We,
  uq as Ge,
  vpn as Ke,
  wJt as qe,
  wrn as Je,
  xJt as Ye,
  xpn as Xe,
  xrn as Ze,
  yMt as Qe,
  zpn as $e,
} from "./app-initial-f094ef01c64d.js";
import {
  Ah as et,
  Cm as tt,
  Ll as nt,
  Mh as rt,
  Rl as it,
  Sm as at,
} from "./app-primary-4c40d73a1074.js";
import { n as ot, t as st } from "./tabs-efdcd8aaf082.js";
import { n as ct, t as lt } from "./segmented-toggle-30e6111a9bfb.js";
import { n as ut, t as dt } from "./animated-segmented-toggle-ee8d2d190de7.js";
import {
  a as ft,
  c as pt,
  i as mt,
  l as ht,
  n as gt,
  o as _t,
  r as vt,
  s as yt,
  t as bt,
  u as xt,
} from "./queries-82a0d88b0673.js";
import { n as St, t as Ct } from "./settings-loading-row-de4ab81779d6.js";
import { n as wt, r as Tt, t as Et } from "./thread-usage-breakdown-f26f6335d0fb.js";
import {
  C as Dt,
  D as Ot,
  E as kt,
  F as At,
  L as jt,
  N as Mt,
  S as Nt,
  c as Pt,
  f as Ft,
  g as It,
  i as Lt,
  j as Rt,
  k as zt,
  m as Bt,
  n as Vt,
  o as Ht,
  t as Ut,
  u as Wt,
  v as Gt,
  w as Kt,
  x as qt,
  z as Jt,
} from "./es6-40f481069c89.js";
var Yt,
  Xt,
  Zt,
  Qt = e(() => {
    (w(),
      _e(),
      Ie(),
      je(),
      v(),
      I(),
      (Yt = 100),
      (Xt = 720 * 60 * 60 * 1e3),
      (Zt = R(oe, ({ accountId: e, userId: t }, { get: n, scope: r }) => {
        let i = n(b, U);
        return {
          enabled: i != null,
          queryKey: [`top-consuming-chats`, e, t, U],
          queryFn: async ({ signal: e }) => {
            if (i == null) throw Error(`App Server is unavailable`);
            let t = (Date.now() - Xt) / 1e3,
              n = [],
              a = new Set(),
              o = null;
            do {
              e.throwIfAborted();
              let i = await Fe(r, U).sendRequest(
                `thread/list`,
                {
                  archived: !1,
                  cursor: o,
                  limit: Yt,
                  modelProviders: null,
                  sortKey: `updated_at`,
                  useStateDbOnly: !0,
                },
                { priority: `background`, source: `thread_list` },
              );
              e.throwIfAborted();
              let s = i.nextCursor;
              if (s != null && a.has(s)) throw Error(`App Server repeated a thread list cursor`);
              let c = i.data.filter((e) => e.updatedAt >= t);
              if ((n.push(...c), c.length < i.data.length)) break;
              (s != null && a.add(s), (o = s));
            } while (o != null);
            return n;
          },
          refetchInterval: qe.ONE_MINUTE,
          retry: !1,
          staleTime: qe.ONE_MINUTE,
        };
      })));
  });
function $t(e) {
  let t = (0, on.c)(40),
    { accountId: n, userId: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let { data: o, isError: s, isLoading: c, refetch: l } = x(Zt, i),
    u;
  t[3] === o ? (u = t[4]) : ((u = o?.map(rn) ?? []), (t[3] = o), (t[4] = u));
  let d;
  t[5] !== n || t[6] !== u
    ? ((d = { accountId: n, conversationIds: u }), (t[5] = n), (t[6] = u), (t[7] = d))
    : (d = t[7]);
  let { data: f, isError: p, isLoading: m, refetch: h } = x(rt, d),
    [g, _] = (0, sn.useState)(!1),
    v,
    y,
    b,
    S,
    C,
    w,
    E;
  if (
    t[8] !== s ||
    t[9] !== c ||
    t[10] !== p ||
    t[11] !== m ||
    t[12] !== o ||
    t[13] !== l ||
    t[14] !== h ||
    t[15] !== g ||
    t[16] !== f
  ) {
    E = o
      ?.flatMap((e) => {
        let t = f?.get(e.id);
        return t == null
          ? []
          : [
              {
                conversationId: Ue(e.id),
                title: e.name?.trim() || e.preview.trim() || null,
                usage: t,
              },
            ];
      })
      .sort(nn);
    let e = c || (o != null && o.length > 0 && m),
      n = s || p || (o != null && o.length > 0 && (f == null || E?.length === 0)),
      r = E?.some(tn) ?? !1;
    ((b = B),
      t[24] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((w = (0, Y.jsx)(B.Header, {
            title: (0, Y.jsx)(a, {
              id: `settings.usage.topConsumingChats.title`,
              defaultMessage: `Top chats`,
              description: `Title for the highest-usage Work and Codex chats`,
            }),
            subtitle: (0, Y.jsx)(a, {
              id: `settings.usage.topConsumingChats.subtitle`,
              defaultMessage: `Work and Codex chats active in the last 30 days ranked by lifetime credits`,
              description: `Explains that recently active Work and Codex chats are ranked by lifetime credit usage`,
            }),
          })),
          (t[24] = w))
        : (w = t[24]),
      (y = B.Content),
      (C = `gap-3`),
      (v = te),
      (S = e
        ? (0, Y.jsx)(Ct, {
            children: (0, Y.jsx)(a, {
              id: `settings.usage.topConsumingChats.loading`,
              defaultMessage: `Loading task usage…`,
              description: `Loading state while fetching the highest-credit Codex tasks`,
            }),
          })
        : n
          ? (0, Y.jsx)(Pe, {
              label: (0, Y.jsx)(a, {
                id: `settings.usage.topConsumingChats.error`,
                defaultMessage: `Could not load task usage`,
                description: `Error state when recent Codex task usage cannot be loaded`,
              }),
              control: (0, Y.jsx)(Se, {
                color: `secondary`,
                size: `toolbar`,
                onClick: () => {
                  s ? l() : h();
                },
                children: (0, Y.jsx)(a, {
                  id: `settings.usage.topConsumingChats.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry button for loading top consuming Codex tasks`,
                }),
              }),
            })
          : E == null || E.length === 0
            ? (0, Y.jsx)(T, {
                layout: `settings-row`,
                children: (0, Y.jsx)(a, {
                  id: `settings.usage.topConsumingChats.empty`,
                  defaultMessage: `No thread activity during this period`,
                  description: `Empty state when no Codex thread has recorded activity during the displayed usage period`,
                }),
              })
            : (0, Y.jsxs)(`div`, {
                className: `${ee} pb-2`,
                children: [
                  (0, Y.jsxs)(`div`, {
                    className: `grid h-[37px] grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 bg-surface-secondary/92 px-4 text-xs leading-4 font-medium text-secondary after:hidden`,
                    children: [
                      (0, Y.jsx)(`span`, {
                        className: r ? void 0 : `col-span-2`,
                        children: (0, Y.jsx)(a, {
                          id: `settings.usage.topConsumingChats.chatColumn`,
                          defaultMessage: `Chat`,
                          description: `Column heading for the title of a high-usage Codex chat`,
                        }),
                      }),
                      r
                        ? (0, Y.jsx)(`span`, {
                            className: `text-end`,
                            children: (0, Y.jsx)(a, {
                              id: `settings.usage.topConsumingChats.estimatedSpendColumn`,
                              defaultMessage: `Est. $ spent`,
                              description: `Column heading for estimated US dollars spent on a Codex chat`,
                            }),
                          })
                        : null,
                      (0, Y.jsx)(`span`, {
                        className: `text-end`,
                        children: (0, Y.jsx)(a, {
                          id: `settings.usage.topConsumingChats.creditsColumn`,
                          defaultMessage: `Credits used`,
                          description: `Column heading for the lifetime credits used by a Codex chat`,
                        }),
                      }),
                    ],
                  }),
                  E.slice(0, g ? void 0 : cn).map((e) =>
                    (0, Y.jsx)(an, { showEstimatedSpend: r, task: e }, e.conversationId),
                  ),
                ],
              })),
      (t[8] = s),
      (t[9] = c),
      (t[10] = p),
      (t[11] = m),
      (t[12] = o),
      (t[13] = l),
      (t[14] = h),
      (t[15] = g),
      (t[16] = f),
      (t[17] = v),
      (t[18] = y),
      (t[19] = b),
      (t[20] = S),
      (t[21] = C),
      (t[22] = w),
      (t[23] = E));
  } else
    ((v = t[17]), (y = t[18]), (b = t[19]), (S = t[20]), (C = t[21]), (w = t[22]), (E = t[23]));
  let D;
  t[25] !== v || t[26] !== S
    ? ((D = (0, Y.jsx)(v, { children: S })), (t[25] = v), (t[26] = S), (t[27] = D))
    : (D = t[27]);
  let O;
  t[28] !== g || t[29] !== E
    ? ((O =
        E != null && E.length > cn
          ? (0, Y.jsx)(Se, {
              color: `secondary`,
              className: `self-start`,
              size: `compact`,
              onClick: () => {
                _(en);
              },
              children: g
                ? (0, Y.jsx)(a, {
                    id: `settings.usage.topConsumingChats.seeLess`,
                    defaultMessage: `See less`,
                    description: `Action to collapse the full list of top consuming Codex tasks`,
                  })
                : (0, Y.jsx)(a, {
                    id: `settings.usage.topConsumingChats.seeMore`,
                    defaultMessage: `See more`,
                    description: `Action to expand the full list of top consuming Codex tasks`,
                  }),
            })
          : null),
      (t[28] = g),
      (t[29] = E),
      (t[30] = O))
    : (O = t[30]);
  let k;
  t[31] !== y || t[32] !== C || t[33] !== D || t[34] !== O
    ? ((k = (0, Y.jsxs)(y, { className: C, children: [D, O] })),
      (t[31] = y),
      (t[32] = C),
      (t[33] = D),
      (t[34] = O),
      (t[35] = k))
    : (k = t[35]);
  let A;
  return (
    t[36] !== b || t[37] !== w || t[38] !== k
      ? ((A = (0, Y.jsxs)(b, { children: [w, k] })),
        (t[36] = b),
        (t[37] = w),
        (t[38] = k),
        (t[39] = A))
      : (A = t[39]),
    A
  );
}
function en(e) {
  return !e;
}
function tn(e) {
  let { usage: t } = e;
  return t.costUsd != null;
}
function nn(e, t) {
  return t.usage.creditsUsed - e.usage.creditsUsed;
}
function rn(e) {
  let { id: t } = e;
  return Ue(t);
}
function an(e) {
  let t = (0, on.c)(33),
    { showEstimatedSpend: n, task: r } = e,
    i = Te(),
    o;
  t[0] === r.conversationId
    ? (o = t[1])
    : ((o = { hostId: U, threadId: r.conversationId }), (t[0] = r.conversationId), (t[1] = o));
  let s = x(he, o),
    c = (0, sn.useRef)(null),
    l = (0, sn.useRef)(null),
    u = (0, sn.useRef)(!1),
    d = s ?? r.title,
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = () =>
        Array.from(
          l.current?.querySelectorAll(`button:not([disabled]):not([tabindex="-1"])`) ?? [],
        )),
      (t[2] = f))
    : (f = t[2]);
  let p = f,
    m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => {
        u.current = e;
      }),
      (t[3] = m))
    : (m = t[3]);
  let h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        if (e.key === `Escape`) {
          (e.preventDefault(), c.current?.focus(), Me());
          return;
        }
        if (e.key !== `Tab`) return;
        let t = p(),
          n = t[0],
          r = t.at(-1);
        if (e.shiftKey && e.target === n) {
          (e.preventDefault(), c.current?.focus());
          return;
        }
        if (!e.shiftKey && e.target === r) {
          let t =
            c.current?.nextElementSibling ??
            c.current?.parentElement?.parentElement?.nextElementSibling;
          if (!(t instanceof HTMLButtonElement)) return;
          (e.preventDefault(), Me(), t.focus());
        }
      }),
      (t[4] = h))
    : (h = t[4]);
  let g;
  t[5] !== r.usage || t[6] !== d
    ? ((g = (0, Y.jsx)(`div`, {
        ref: l,
        className: `w-96 max-w-full`,
        role: `presentation`,
        onKeyDown: h,
        children: (0, Y.jsx)(wt, { title: d, usage: r.usage }),
      })),
      (t[5] = r.usage),
      (t[6] = d),
      (t[7] = g))
    : (g = t[7]);
  let _;
  t[8] !== i || t[9] !== r.conversationId
    ? ((_ = (e) => {
        (e.preventDefault(), Me(), i(r.conversationId));
      }),
      (t[8] = i),
      (t[9] = r.conversationId),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e) => {
        if (e.key === `Escape` && u.current) {
          (e.preventDefault(), Me());
          return;
        }
        if (e.key !== `Tab` || e.shiftKey) return;
        let t = p()[0];
        t != null && (e.preventDefault(), t.focus());
      }),
      (t[11] = v))
    : (v = t[11]);
  let b = n ? `flex min-w-0` : `col-span-2 flex min-w-0`,
    S = d ?? void 0,
    C;
  t[12] === d
    ? (C = t[13])
    : ((C =
        d ??
        (0, Y.jsx)(a, {
          id: `settings.usage.topConsumingChats.untitled`,
          defaultMessage: `Untitled task`,
          description: `Fallback label for a Codex task that does not have a title`,
        })),
      (t[12] = d),
      (t[13] = C));
  let w;
  t[14] !== C || t[15] !== S
    ? ((w = (0, Y.jsx)(at, {
        className: `min-w-0 flex-1 underline underline-offset-2`,
        title: S,
        animateOnGroupHover: !0,
        children: C,
      })),
      (t[14] = C),
      (t[15] = S),
      (t[16] = w))
    : (w = t[16]);
  let T;
  t[17] !== w || t[18] !== b
    ? ((T = (0, Y.jsx)(`span`, { className: b, children: w })),
      (t[17] = w),
      (t[18] = b),
      (t[19] = T))
    : (T = t[19]);
  let E;
  t[20] !== n || t[21] !== r.usage.costUsd
    ? ((E = n
        ? (0, Y.jsx)(`span`, {
            className: `text-end text-secondary`,
            children:
              r.usage.costUsd == null
                ? null
                : (0, Y.jsx)(Ke, {
                    value: r.usage.costUsd,
                    style: `currency`,
                    currency: `USD`,
                    maximumFractionDigits: 2,
                  }),
          })
        : null),
      (t[20] = n),
      (t[21] = r.usage.costUsd),
      (t[22] = E))
    : (E = t[22]);
  let D;
  t[23] === r.usage.creditsUsed
    ? (D = t[24])
    : ((D = (0, Y.jsx)(`span`, {
        className: `text-end text-default`,
        children: (0, Y.jsx)(Ke, { value: r.usage.creditsUsed, maximumFractionDigits: 0 }),
      })),
      (t[23] = r.usage.creditsUsed),
      (t[24] = D));
  let O;
  t[25] !== T || t[26] !== E || t[27] !== D || t[28] !== _
    ? ((O = (0, Y.jsxs)(`button`, {
        className: `group grid h-[35px] w-full cursor-interaction grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-start text-xs leading-4 select-none hover:bg-primary-ghost-hover not-last:hover:after:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring has-[+button:hover]:after:opacity-0`,
        type: `button`,
        onClick: _,
        onKeyDown: v,
        children: [T, E, D],
      })),
      (t[25] = T),
      (t[26] = E),
      (t[27] = D),
      (t[28] = _),
      (t[29] = O))
    : (O = t[29]);
  let k;
  return (
    t[30] !== O || t[31] !== g
      ? ((k = (0, Y.jsx)(y, {
          align: `center`,
          delayDuration: 0,
          interactive: !0,
          onOpenChange: m,
          side: `top`,
          sideOffset: 8,
          tooltipContent: g,
          tooltipMaxWidth: `min(24rem, calc(100vw - 16px))`,
          triggerRef: c,
          variant: `rich`,
          children: O,
        })),
        (t[30] = O),
        (t[31] = g),
        (t[32] = k))
      : (k = t[32]),
    k
  );
}
var on,
  sn,
  Y,
  cn,
  ln = e(() => {
    ((on = q()),
      w(),
      i(),
      (sn = t(r(), 1)),
      F(),
      Ie(),
      n(),
      Ce(),
      tt(),
      g(),
      ke(),
      k(),
      St(),
      ie(),
      ne(),
      d(),
      v(),
      et(),
      le(),
      Qt(),
      Tt(),
      (Y = K()),
      (cn = 5));
  });
function un(e, t) {
  return t.formatDate(new Date(e), {
    month: `short`,
    day: `numeric`,
    hour: `numeric`,
    minute: `2-digit`,
    timeZone: `UTC`,
    timeZoneName: `short`,
  });
}
function dn(e, t) {
  return e == null || t == null ? null : Date.parse(e) <= Date.parse(t) ? e : t;
}
var fn = e(() => {});
function pn(e) {
  let t = (0, yn.c)(2),
    { breakdown: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, bn.jsx)(a, {
          id: `settings.usage.billing.turns.breakdown`,
          defaultMessage: `{breakdown, select, model {By model} surface {By surface} other {By model}}`,
          description: `Label identifying whether a Codex usage chart groups activity by AI model or product surface`,
          values: { breakdown: n },
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function mn(e) {
  let t = (0, yn.c)(8),
    { ariaLabel: n, days: r, onChange: i } = e,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = {
        id: `7`,
        label: (0, bn.jsx)(a, {
          id: `settings.usage.billing.period.sevenDays`,
          defaultMessage: `7d`,
          description: `Seven-day usage and activity chart date range`,
        }),
      }),
      (t[0] = o))
    : (o = t[0]);
  let s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = [
        o,
        {
          id: `30`,
          label: (0, bn.jsx)(a, {
            id: `settings.usage.billing.period.thirtyDays`,
            defaultMessage: `30d`,
            description: `Thirty-day usage and activity chart date range`,
          }),
        },
      ]),
      (t[1] = s))
    : (s = t[1]);
  let c = r === 7 ? `7` : `30`,
    l;
  t[2] === i
    ? (l = t[3])
    : ((l = (e) => {
        i(e === `7` ? 7 : 30);
      }),
      (t[2] = i),
      (t[3] = l));
  let u;
  return (
    t[4] !== n || t[5] !== c || t[6] !== l
      ? ((u = (0, bn.jsx)(dt, {
          ariaLabel: n,
          options: s,
          selectedId: c,
          size: `compact`,
          onSelect: l,
        })),
        (t[4] = n),
        (t[5] = c),
        (t[6] = l),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function hn(e) {
  let t = (0, yn.c)(19),
    { breakdown: n, scope: r, onChange: i } = e,
    a = E(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `settings.usage.billing.credits.history.breakdownLabel`,
        defaultMessage: `Group credit usage history`,
        description: `Accessible label for the enterprise credit usage history grouping selector`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === n ? (s = t[3]) : ((s = (0, bn.jsx)(gn, { breakdown: n })), (t[2] = n), (t[3] = s));
  let c;
  t[4] !== o || t[5] !== s
    ? ((c = (0, bn.jsx)(j, { "aria-label": o, children: s })), (t[4] = o), (t[5] = s), (t[6] = c))
    : (c = t[6]);
  let l;
  if (t[7] !== n || t[8] !== i || t[9] !== r) {
    let e;
    t[11] === r
      ? (e = t[12])
      : ((e = (e) =>
          r === `workspace` || e === `product` || (r === `business` && e !== `reasoning`)),
        (t[11] = r),
        (t[12] = e));
    let a;
    (t[13] !== n || t[14] !== i
      ? ((a = (e) =>
          (0, bn.jsx)(
            m.Item,
            {
              "aria-checked": n === e,
              RightIcon: n === e ? Ne : void 0,
              role: `menuitemradio`,
              onSelect: () => {
                i(e);
              },
              children: (0, bn.jsx)(gn, { breakdown: e }),
            },
            e,
          )),
        (t[13] = n),
        (t[14] = i),
        (t[15] = a))
      : (a = t[15]),
      (l = xn.filter(e).map(a)),
      (t[7] = n),
      (t[8] = i),
      (t[9] = r),
      (t[10] = l));
  } else l = t[10];
  let u;
  return (
    t[16] !== c || t[17] !== l
      ? ((u = (0, bn.jsx)(_, {
          align: `end`,
          contentWidth: `menuNarrow`,
          side: `bottom`,
          triggerButton: c,
          children: l,
        })),
        (t[16] = c),
        (t[17] = l),
        (t[18] = u))
      : (u = t[18]),
    u
  );
}
function gn(e) {
  let t = (0, yn.c)(4),
    { breakdown: n } = e;
  switch (n) {
    case `product`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, bn.jsx)(a, {
              id: `settings.usage.billing.credits.history.byProduct`,
              defaultMessage: `By product`,
              description: `Group credit usage history by product`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `model`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, bn.jsx)(a, {
              id: `settings.usage.billing.credits.history.byModel`,
              defaultMessage: `By model`,
              description: `Group credit usage history by model`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `reasoning`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, bn.jsx)(a, {
              id: `settings.usage.billing.credits.history.byReasoning`,
              defaultMessage: `By reasoning`,
              description: `Group credit usage history by reasoning effort`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `speed`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, bn.jsx)(a, {
              id: `settings.usage.billing.credits.history.bySpeed`,
              defaultMessage: `By speed`,
              description: `Group credit usage history by response speed`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function _n(e) {
  let t = (0, yn.c)(25),
    { models: n, onChange: r, selectedModel: i } = e,
    a = E(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `settings.usage.billing.tokens.history.modelFilterLabel`,
        defaultMessage: `Filter token usage history by model`,
        description: `Accessible label for the enterprise token usage history model filter`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === i ? (s = t[3]) : ((s = (0, bn.jsx)(vn, { model: i })), (t[2] = i), (t[3] = s));
  let c;
  t[4] !== o || t[5] !== s
    ? ((c = (0, bn.jsx)(j, { "aria-label": o, children: s })), (t[4] = o), (t[5] = s), (t[6] = c))
    : (c = t[6]);
  let l = i == null,
    u = i == null ? Ne : void 0,
    d;
  t[7] === r
    ? (d = t[8])
    : ((d = () => {
        r(null);
      }),
      (t[7] = r),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, bn.jsx)(vn, { model: null })), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] !== l || t[11] !== u || t[12] !== d
    ? ((p = (0, bn.jsx)(m.Item, {
        "aria-checked": l,
        RightIcon: u,
        role: `menuitemradio`,
        onSelect: d,
        children: f,
      })),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = p))
    : (p = t[13]);
  let h;
  if (t[14] !== n || t[15] !== r || t[16] !== i) {
    let e;
    (t[18] !== r || t[19] !== i
      ? ((e = (e) => {
          let { key: t } = e;
          return (0, bn.jsx)(
            m.Item,
            {
              "aria-checked": i === t,
              RightIcon: i === t ? Ne : void 0,
              role: `menuitemradio`,
              onSelect: () => {
                r(t);
              },
              children: (0, bn.jsx)(vn, { model: t }),
            },
            t,
          );
        }),
        (t[18] = r),
        (t[19] = i),
        (t[20] = e))
      : (e = t[20]),
      (h = n.map(e)),
      (t[14] = n),
      (t[15] = r),
      (t[16] = i),
      (t[17] = h));
  } else h = t[17];
  let g;
  return (
    t[21] !== c || t[22] !== p || t[23] !== h
      ? ((g = (0, bn.jsxs)(_, {
          align: `end`,
          contentWidth: `menuNarrow`,
          side: `bottom`,
          triggerButton: c,
          children: [p, h],
        })),
        (t[21] = c),
        (t[22] = p),
        (t[23] = h),
        (t[24] = g))
      : (g = t[24]),
    g
  );
}
function vn(e) {
  let t = (0, yn.c)(6),
    { model: n } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, bn.jsx)(a, {
            id: `settings.usage.billing.tokens.history.allModels`,
            defaultMessage: `All models`,
            description: `Token usage history model filter option for every model`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n === `other`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, bn.jsx)(a, {
            id: `settings.usage.billing.tokens.history.otherModel`,
            defaultMessage: `Other`,
            description: `Token usage history model filter option for aggregated other models`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let r;
  t[2] === n ? (r = t[3]) : ((r = Be(n)), (t[2] = n), (t[3] = r));
  let i;
  return (
    t[4] === r
      ? (i = t[5])
      : ((i = (0, bn.jsx)(bn.Fragment, { children: r })), (t[4] = r), (t[5] = i)),
    i
  );
}
var yn,
  bn,
  xn,
  Sn = e(() => {
    ((yn = q()),
      F(),
      ut(),
      ae(),
      h(),
      z(),
      ce(),
      (bn = K()),
      (xn = [`model`, `reasoning`, `speed`, `product`]));
  });
function Cn(e) {
  let t = (0, En.c)(22),
    { hideValues: n, maximumValue: r, showPercentageUnit: i, unit: a } = e,
    o = n !== void 0 && n,
    s = i === void 0 || i,
    c = E(),
    l = r;
  if (s && a === `percent`) l = 100;
  else if (r != null && r !== 0) {
    let e;
    (t[0] !== o || t[1] !== r || t[2] !== a
      ? ((e = At([0, r], 4, a === `credits` || o).at(-1) ?? r),
        (t[0] = o),
        (t[1] = r),
        (t[2] = a),
        (t[3] = e))
      : (e = t[3]),
      (l = e));
  }
  let u = a === `credits` || o,
    d;
  t[4] === l ? (d = t[5]) : ((d = l == null ? void 0 : [0, l]), (t[4] = l), (t[5] = d));
  let f;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = {
        className: `text-xs`,
        fill: `var(--color-text-secondary)`,
        textAnchor: `start`,
        x: 0,
      }),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== s || t[8] !== a
    ? ((p = s && a === `percent` ? [0, 33.333333333333336, 66.66666666666667, 100] : void 0),
      (t[7] = s),
      (t[8] = a),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] !== o || t[11] !== c || t[12] !== s || t[13] !== a
    ? ((m = (e) =>
        o
          ? ``
          : s && a === `percent`
            ? c.formatNumber(e / 100, { maximumFractionDigits: 0, style: `percent` })
            : c.formatNumber(e, { maximumFractionDigits: e < 1 ? 2 : 1, notation: `compact` })),
      (t[10] = o),
      (t[11] = c),
      (t[12] = s),
      (t[13] = a),
      (t[14] = m))
    : (m = t[14]);
  let h = o ? 0 : 56,
    g;
  return (
    t[15] !== o || t[16] !== u || t[17] !== d || t[18] !== p || t[19] !== m || t[20] !== h
      ? ((g = (0, Dn.jsx)(Pt, {
          allowDecimals: u,
          axisLine: !1,
          hide: o,
          domain: d,
          interval: 0,
          tick: f,
          tickCount: 4,
          ticks: p,
          tickFormatter: m,
          tickLine: !1,
          width: h,
        })),
        (t[15] = o),
        (t[16] = u),
        (t[17] = d),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
function wn(e) {
  let t = (0, En.c)(9),
    {
      centerLabels: n,
      index: r,
      payload: i,
      tickFormatter: a,
      visibleTicksCount: o,
      x: s,
      y: c,
    } = e,
    l = n !== void 0 && n,
    u = `middle`;
  !l && r === 0 ? (u = `start`) : !l && r === o - 1 && (u = `end`);
  let d;
  t[0] !== r || t[1] !== i.value || t[2] !== a
    ? ((d = a == null ? i.value : a(i.value, r)),
      (t[0] = r),
      (t[1] = i.value),
      (t[2] = a),
      (t[3] = d))
    : (d = t[3]);
  let f;
  return (
    t[4] !== d || t[5] !== u || t[6] !== s || t[7] !== c
      ? ((f = (0, Dn.jsx)(`text`, {
          className: `text-xs`,
          dy: 12,
          fill: `var(--color-text-secondary)`,
          textAnchor: u,
          x: s,
          y: c,
          children: d,
        })),
        (t[4] = d),
        (t[5] = u),
        (t[6] = s),
        (t[7] = c),
        (t[8] = f))
      : (f = t[8]),
    f
  );
}
function Tn(e) {
  let t = (0, En.c)(6),
    { height: n, points: r, width: i, x: a, y: o } = e,
    s = r?.[0],
    c;
  t[0] === r ? (c = t[1]) : ((c = r?.at(-1)), (t[0] = r), (t[1] = c));
  let l = c,
    u,
    d,
    f;
  if (s != null && l != null) ((u = s.x), (d = s.y), (f = l.y));
  else if (a != null && o != null && i != null && n != null)
    ((u = a + i / 2), (d = o), (f = o + n));
  else return null;
  let p;
  return (
    t[2] !== f || t[3] !== d || t[4] !== u
      ? ((p = (0, Dn.jsx)(`line`, {
          x1: u,
          x2: u,
          y1: d,
          y2: f,
          pointerEvents: `none`,
          stroke: `var(--color-border-strong)`,
        })),
        (t[2] = f),
        (t[3] = d),
        (t[4] = u),
        (t[5] = p))
      : (p = t[5]),
    p
  );
}
var En,
  Dn,
  On = e(() => {
    ((En = q()), F(), Ut(), (Dn = K()));
  });
function kn(e) {
  let t = (0, An.c)(3),
    { usd: n } = e,
    r = n > 0 && n < 0.01 ? 6 : 2,
    i;
  return (
    t[0] !== r || t[1] !== n
      ? ((i = (0, jn.jsx)(a, {
          id: `settings.usage.billing.estimatedSpend`,
          defaultMessage: `Est. {value}`,
          description: `Estimated US dollar cost for a credit usage amount`,
          values: {
            value: (0, jn.jsx)(Ke, {
              value: n,
              style: `currency`,
              currency: `USD`,
              minimumFractionDigits: 2,
              maximumFractionDigits: r,
            }),
          },
        })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var An,
  jn,
  Mn = e(() => {
    ((An = q()), F(), (jn = K()));
  });
function Nn(e) {
  let t = (0, Pn.c)(2),
    { color: n, index: r } = e,
    i = n ?? ve[r % ve.length],
    a;
  return (
    t[0] === i
      ? (a = t[1])
      : ((a = (0, Fn.jsx)(`svg`, {
          "aria-hidden": `true`,
          className: `size-2.5 shrink-0`,
          viewBox: `0 0 10 10`,
          children: (0, Fn.jsx)(`circle`, { cx: 5, cy: 5, fill: i, r: 5 }),
        })),
        (t[0] = i),
        (t[1] = a)),
    a
  );
}
var Pn,
  Fn,
  In = e(() => {
    ((Pn = q()), S(), (Fn = K()));
  });
function Ln(e) {
  let t = (0, Wn.c)(61),
    {
      actions: n,
      activeSeriesKey: r,
      children: i,
      emptyMessage: o,
      estimatedSpendUsd: s,
      fillChartHeight: c,
      hasData: l,
      hideTotal: u,
      onChangeSeriesIsolation: d,
      onToggleSeries: f,
      preservePopulatedCardLayout: p,
      consumerAnalytics: m,
      scope: h,
      hiddenSeriesKeys: g,
      series: _,
      singleSelection: v,
      status: b,
      title: x,
      total: S,
      totalLabel: C,
    } = e,
    w = c !== void 0 && c,
    E = u !== void 0 && u,
    D = p !== void 0 && p,
    O = m !== void 0 && m,
    k = v !== void 0 && v,
    A = (0, Gn.useRef)(null),
    j = O && w,
    N = j && E && x == null,
    P = b.isLoading && !l,
    F = !!b.isUpdating,
    I = P || F,
    L = _.length > 0 || f != null;
  if (
    (S != null || (b.isLoading && b.preserveEmptyLayout)) &&
    !l &&
    !b.isError &&
    o != null &&
    !D &&
    (!b.isLoading || b.preserveEmptyLayout)
  ) {
    let e =
        !b.reduceMotion &&
        `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
      n;
    t[0] === e
      ? (n = t[1])
      : ((n = M(`flex min-h-16 flex-col justify-center`, e)), (t[0] = e), (t[1] = n));
    let r;
    t[2] !== o || t[3] !== b.isLoading || t[4] !== b.reduceMotion
      ? ((r = b.isLoading ? (0, X.jsx)(Rn, { compact: !0, reduceMotion: b.reduceMotion }) : o),
        (t[2] = o),
        (t[3] = b.isLoading),
        (t[4] = b.reduceMotion),
        (t[5] = r))
      : (r = t[5]);
    let i;
    t[6] === r
      ? (i = t[7])
      : ((i = (0, X.jsx)(T, { layout: `settings-row`, children: r })), (t[6] = r), (t[7] = i));
    let a;
    return (
      t[8] !== n || t[9] !== i
        ? ((a = (0, X.jsx)(te, { children: (0, X.jsx)(`div`, { className: n, children: i }) })),
          (t[8] = n),
          (t[9] = i),
          (t[10] = a))
        : (a = t[10]),
      a
    );
  }
  let R = f == null ? `span` : `button`,
    ee = !O && `mt-2`,
    z = !l && `min-h-4`,
    ne =
      !b.reduceMotion &&
      `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
    re = F && `opacity-60`,
    ie;
  t[11] !== ee || t[12] !== z || t[13] !== ne || t[14] !== re
    ? ((ie = M(
        `flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs leading-4 text-secondary`,
        ee,
        z,
        ne,
        re,
      )),
      (t[11] = ee),
      (t[12] = z),
      (t[13] = ne),
      (t[14] = re),
      (t[15] = ie))
    : (ie = t[15]);
  let ae = _.map((e, t) => {
      let n = _.length > 1 && !g?.has(e.key) && _.every((t) => t.key === e.key || g?.has(t.key)),
        i = (0, X.jsxs)(
          R,
          {
            className: M(
              `inline-flex items-center gap-1`,
              f != null && `cursor-interaction`,
              r != null && r !== e.key && `opacity-40`,
              g?.has(e.key) && `opacity-50`,
            ),
            "aria-pressed": f == null ? void 0 : !g?.has(e.key) && (!k || !!g?.size),
            onClick:
              f == null
                ? void 0
                : (t) => {
                    (d == null || t.detail === 0 || t.detail % 2 == 1) &&
                      ((A.current = n ? e.key : null), f(e.key));
                  },
            onDoubleClick: d == null ? void 0 : () => d(A.current === e.key ? null : e.key),
            type: f == null ? void 0 : `button`,
            children: [
              (0, X.jsx)(Nn, { color: e.color, index: t }),
              e.name,
              !O && k && e.total != null
                ? (0, X.jsx)(`span`, { children: (0, X.jsx)(Ke, { value: e.total }) })
                : null,
            ],
          },
          e.key,
        );
      return e.tooltip == null && d == null
        ? i
        : (0, X.jsx)(
            y,
            {
              tooltipContent: (0, X.jsxs)(X.Fragment, {
                children: [
                  e.tooltip,
                  d == null
                    ? null
                    : (0, X.jsx)(`div`, {
                        children: n
                          ? (0, X.jsx)(a, {
                              id: `settings.usage.billing.chart.legend.showAll`,
                              defaultMessage: `Double-click to show all`,
                              description: `Chart legend tooltip explaining how to restore every series after isolating one`,
                            })
                          : (0, X.jsx)(a, {
                              id: `settings.usage.billing.chart.legend.isolate`,
                              defaultMessage: `Double-click to isolate`,
                              description: `Chart legend tooltip explaining how to show only this series`,
                            }),
                      }),
                ],
              }),
              children: i,
            },
            e.key,
          );
    }),
    B;
  t[16] !== ie || t[17] !== ae
    ? ((B = (0, X.jsx)(`div`, { className: ie, children: ae })),
      (t[16] = ie),
      (t[17] = ae),
      (t[18] = B))
    : (B = t[18]);
  let oe = B,
    V;
  t[19] !== O || t[20] !== oe || t[21] !== b.reduceMotion
    ? ((V = O ? (0, X.jsx)(Un, { reduceMotion: b.reduceMotion, children: oe }) : oe),
      (t[19] = O),
      (t[20] = oe),
      (t[21] = b.reduceMotion),
      (t[22] = V))
    : (V = t[22]);
  let se = V,
    ce = N ? `pt-6` : `pt-3.5`,
    le = !j && (!O || L ? `min-h-64` : `min-h-60`),
    ue =
      !b.reduceMotion && `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
    de;
  t[23] !== ce || t[24] !== le || t[25] !== ue
    ? ((de = M(`flex flex-col gap-2 px-4 pb-3 select-none`, ce, le, ue)),
      (t[23] = ce),
      (t[24] = le),
      (t[25] = ue),
      (t[26] = de))
    : (de = t[26]);
  let fe;
  t[27] !== n ||
  t[28] !== s ||
  t[29] !== E ||
  t[30] !== P ||
  t[31] !== I ||
  t[32] !== h ||
  t[33] !== b.reduceMotion ||
  t[34] !== x ||
  t[35] !== S ||
  t[36] !== C
    ? ((fe =
        x != null || n != null || !E || C != null || I
          ? (0, X.jsxs)(`div`, {
              className: `mb-2 flex flex-col gap-0`,
              children: [
                (0, X.jsxs)(`div`, {
                  className: `flex flex-wrap items-center justify-between gap-2`,
                  children: [
                    (0, X.jsxs)(`span`, {
                      className: M(
                        `text-xs leading-4 text-default`,
                        I && `inline-flex items-center gap-2`,
                      ),
                      children: [
                        (0, X.jsx)(`span`, {
                          className: M(
                            !b.reduceMotion &&
                              `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
                            I && `opacity-60`,
                          ),
                          children: x,
                        }),
                        I ? (0, X.jsx)(Bn, { reduceMotion: b.reduceMotion }) : null,
                      ],
                    }),
                    n,
                  ],
                }),
                !E || C != null
                  ? (0, X.jsxs)(`div`, {
                      className: M(
                        `flex items-baseline gap-1`,
                        !b.reduceMotion &&
                          `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
                        I && `opacity-60`,
                      ),
                      children: [
                        P
                          ? (0, X.jsx)(`div`, { "aria-hidden": !0, className: `h-8` })
                          : (0, X.jsx)(`span`, {
                              className: `heading-lg font-medium text-default`,
                              children:
                                C ??
                                (S == null
                                  ? null
                                  : (0, X.jsx)(Ke, {
                                      value: S,
                                      notation: h === `workspace` ? `compact` : `standard`,
                                      maximumFractionDigits: h === `workspace` && S < 1e3 ? 0 : 1,
                                    })),
                            }),
                        s == null
                          ? null
                          : (0, X.jsx)(`span`, {
                              className: `text-xs leading-4 text-secondary`,
                              children: (0, X.jsx)(kn, { usd: s }),
                            }),
                      ],
                    })
                  : null,
              ],
            })
          : null),
      (t[27] = n),
      (t[28] = s),
      (t[29] = E),
      (t[30] = P),
      (t[31] = I),
      (t[32] = h),
      (t[33] = b.reduceMotion),
      (t[34] = x),
      (t[35] = S),
      (t[36] = C),
      (t[37] = fe))
    : (fe = t[37]);
  let H = O && `relative z-10`,
    U;
  t[38] !== j ||
  t[39] !== I ||
  t[40] !== N ||
  t[41] !== f ||
  t[42] !== D ||
  t[43] !== b.reduceMotion ||
  t[44] !== H
    ? ((U = M(
        H,
        j ? M(`shrink-0`, N ? `h-44` : `h-36`) : `flex-1`,
        D && f != null ? `min-h-36` : `min-h-24`,
        !b.reduceMotion &&
          `transition-opacity duration-relaxed ease-basic motion-reduce:transition-none`,
        I && `opacity-60`,
      )),
      (t[38] = j),
      (t[39] = I),
      (t[40] = N),
      (t[41] = f),
      (t[42] = D),
      (t[43] = b.reduceMotion),
      (t[44] = H),
      (t[45] = U))
    : (U = t[45]);
  let W = F || void 0,
    pe;
  t[46] !== i || t[47] !== o || t[48] !== w || t[49] !== l || t[50] !== b
    ? ((pe = (0, X.jsx)(Hn, {
        emptyMessage: o,
        fillChartHeight: w,
        hasData: l,
        status: b,
        children: i,
      })),
      (t[46] = i),
      (t[47] = o),
      (t[48] = w),
      (t[49] = l),
      (t[50] = b),
      (t[51] = pe))
    : (pe = t[51]);
  let G;
  t[52] !== U || t[53] !== W || t[54] !== pe
    ? ((G = (0, X.jsx)(`div`, { className: U, "aria-busy": W, children: pe })),
      (t[52] = U),
      (t[53] = W),
      (t[54] = pe),
      (t[55] = G))
    : (G = t[55]);
  let me = (l && (!O || _.length > 0)) || (D && f != null) ? se : null,
    he;
  return (
    t[56] !== de || t[57] !== fe || t[58] !== G || t[59] !== me
      ? ((he = (0, X.jsx)(te, {
          contentOverflow: `visible`,
          children: (0, X.jsxs)(`div`, { className: de, children: [fe, G, me] }),
        })),
        (t[56] = de),
        (t[57] = fe),
        (t[58] = G),
        (t[59] = me),
        (t[60] = he))
      : (he = t[60]),
    he
  );
}
function Rn(e) {
  let t = (0, Wn.c)(4),
    { compact: n, reduceMotion: r } = e,
    i = n !== void 0 && n,
    a = r !== void 0 && r;
  if (i) {
    let e;
    return (
      t[0] === a ? (e = t[1]) : ((e = (0, X.jsx)(Bn, { reduceMotion: a })), (t[0] = a), (t[1] = e)),
      e
    );
  }
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, X.jsx)(`div`, { className: `w-11 shrink-0` })), (t[2] = o))
    : (o = t[2]);
  let s;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, X.jsxs)(`div`, {
          "aria-hidden": !0,
          className: `flex h-36 gap-3`,
          children: [
            o,
            (0, X.jsx)(`svg`, {
              className: `min-w-0 flex-1`,
              preserveAspectRatio: `none`,
              viewBox: `0 0 100 144`,
              children: [4, 43, 83, 122].map(zn),
            }),
          ],
        })),
        (t[3] = s))
      : (s = t[3]),
    s
  );
}
function zn(e) {
  return (0, X.jsx)(
    `line`,
    {
      stroke: `var(--color-border-subtle)`,
      vectorEffect: `non-scaling-stroke`,
      x1: 0,
      x2: 100,
      y1: e,
      y2: e,
    },
    e,
  );
}
function Bn(e) {
  let t = (0, Wn.c)(7),
    { reduceMotion: n } = e,
    r = !(n !== void 0 && n) && `motion-safe:animate-spin`,
    i;
  t[0] === r ? (i = t[1]) : ((i = M(`icon-xs text-secondary`, r)), (t[0] = r), (t[1] = i));
  let o;
  t[2] === i
    ? (o = t[3])
    : ((o = (0, X.jsx)(C, { "aria-hidden": `true`, className: i })), (t[2] = i), (t[3] = o));
  let s;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(`span`, {
        className: `sr-only`,
        children: (0, X.jsx)(a, {
          id: `settings.usage.billing.chart.loading`,
          defaultMessage: `Loading usage data…`,
          description: `Loading state for enterprise billing and usage charts`,
        }),
      })),
      (t[4] = s))
    : (s = t[4]);
  let c;
  return (
    t[5] === o
      ? (c = t[6])
      : ((c = (0, X.jsxs)(`span`, {
          className: `inline-flex items-center`,
          role: `status`,
          children: [o, s],
        })),
        (t[5] = o),
        (t[6] = c)),
    c
  );
}
function Vn(e) {
  let t = (0, Wn.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, X.jsx)(`div`, {
          className: `flex h-full items-center justify-center gap-3 text-sm text-tertiary`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Hn(e) {
  let t = (0, Wn.c)(13),
    { children: n, emptyMessage: r, fillChartHeight: i, hasData: o, status: s } = e;
  if (o) {
    let e;
    return (
      t[0] !== n || t[1] !== i
        ? ((e = i ? (0, X.jsx)(`div`, { className: `absolute inset-0`, children: n }) : n),
          (t[0] = n),
          (t[1] = i),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  if (s.isLoading) {
    let e;
    return (
      t[3] === s.reduceMotion
        ? (e = t[4])
        : ((e = (0, X.jsx)(Rn, { reduceMotion: s.reduceMotion })),
          (t[3] = s.reduceMotion),
          (t[4] = e)),
      e
    );
  }
  if (s.isError) {
    let e;
    t[5] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, X.jsx)(`span`, {
          children: (0, X.jsx)(a, {
            id: `settings.usage.billing.chart.error`,
            defaultMessage: `Could not load usage data`,
            description: `Error state for enterprise billing and usage charts`,
          }),
        })),
        (t[5] = e))
      : (e = t[5]);
    let n;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, X.jsx)(a, {
          id: `settings.usage.billing.chart.retry`,
          defaultMessage: `Retry`,
          description: `Retry button for enterprise billing and usage charts`,
        })),
        (t[6] = n))
      : (n = t[6]);
    let r;
    return (
      t[7] === s.onRetry
        ? (r = t[8])
        : ((r = (0, X.jsxs)(Vn, {
            children: [
              e,
              (0, X.jsx)(Se, {
                color: `secondary`,
                size: `toolbar`,
                onClick: s.onRetry,
                children: n,
              }),
            ],
          })),
          (t[7] = s.onRetry),
          (t[8] = r)),
      r
    );
  }
  let c;
  t[9] === r
    ? (c = t[10])
    : ((c =
        r ??
        (0, X.jsx)(a, {
          id: `settings.usage.billing.chart.empty`,
          defaultMessage: `No usage recorded yet`,
          description: `Empty state for enterprise billing and usage charts`,
        })),
      (t[9] = r),
      (t[10] = c));
  let l;
  return (
    t[11] === c ? (l = t[12]) : ((l = (0, X.jsx)(Vn, { children: c })), (t[11] = c), (t[12] = l)), l
  );
}
function Un(e) {
  let t = (0, Wn.c)(12),
    { children: n, reduceMotion: r } = e,
    [i, a] = (0, Gn.useState)(null),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (e) => {
        a(e.contentRect.height);
      }),
      (t[0] = o))
    : (o = t[0]);
  let s = Ee(o),
    c = !r && `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
    l;
  t[1] === c
    ? (l = t[2])
    : ((l = M(`-mx-1 -mb-1 mt-1 box-content shrink-0 overflow-hidden p-1`, c)),
      (t[1] = c),
      (t[2] = l));
  let u;
  t[3] === i ? (u = t[4]) : ((u = i == null ? void 0 : { height: i }), (t[3] = i), (t[4] = u));
  let d;
  t[5] !== n || t[6] !== s
    ? ((d = (0, X.jsx)(`div`, { ref: s, children: n })), (t[5] = n), (t[6] = s), (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== l || t[9] !== u || t[10] !== d
      ? ((f = (0, X.jsx)(`div`, { className: l, style: u, children: d })),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    f
  );
}
var Wn,
  Gn,
  X,
  Kn = e(() => {
    ((Wn = q()),
      $e(),
      (Gn = t(r(), 1)),
      F(),
      n(),
      Ce(),
      g(),
      O(),
      Ve(),
      d(),
      Mn(),
      In(),
      (X = K()));
  }),
  qn,
  Jn,
  Yn = e(() => {
    ((qn = `_grow_j99rt_1`), (Jn = { grow: qn, "usage-bar-grow": `_usage-bar-grow_j99rt_1` }));
  });
function Xn(e) {
  let t = (0, Zn.c)(22),
    { bar: n, stackClipId: r, grow: i, onGrowEnd: a, radius: o } = e,
    s = r != null && o != null;
  if (n.width === 0 || (n.height === 0 && !s)) return null;
  let c;
  t[0] !== n.stackedBarStart ||
  t[1] !== n.width ||
  t[2] !== n.x ||
  t[3] !== n.y ||
  t[4] !== s ||
  t[5] !== o ||
  t[6] !== r
    ? ((c = s
        ? (0, Qn.jsx)(`defs`, {
            children: (0, Qn.jsx)(`clipPath`, {
              id: r,
              clipPathUnits: `userSpaceOnUse`,
              children: (0, Qn.jsx)(jt, {
                x: n.x,
                y: n.y,
                width: n.width,
                height: n.stackedBarStart - n.y,
                radius: o,
                isAnimationActive: !1,
                isUpdateAnimationActive: !1,
              }),
            }),
          })
        : null),
      (t[0] = n.stackedBarStart),
      (t[1] = n.width),
      (t[2] = n.x),
      (t[3] = n.y),
      (t[4] = s),
      (t[5] = o),
      (t[6] = r),
      (t[7] = c))
    : (c = t[7]);
  let l = r == null ? void 0 : `url(#${r})`,
    u = r == null ? (o ?? n.radius) : 0,
    d = i && Jn.grow,
    f;
  t[8] === d ? (f = t[9]) : ((f = M(d, `motion-reduce:animate-none`)), (t[8] = d), (t[9] = f));
  let p = `0px ${n.stackedBarStart}px`,
    m;
  t[10] === p ? (m = t[11]) : ((m = { transformOrigin: p }), (t[10] = p), (t[11] = m));
  let h;
  t[12] !== n || t[13] !== l || t[14] !== u || t[15] !== f || t[16] !== m
    ? ((h = (0, Qn.jsx)(jt, {
        ...n,
        clipPath: l,
        radius: u,
        className: f,
        isAnimationActive: !1,
        isUpdateAnimationActive: !1,
        style: m,
      })),
      (t[12] = n),
      (t[13] = l),
      (t[14] = u),
      (t[15] = f),
      (t[16] = m),
      (t[17] = h))
    : (h = t[17]);
  let g;
  return (
    t[18] !== a || t[19] !== c || t[20] !== h
      ? ((g = (0, Qn.jsxs)(`g`, { onAnimationEnd: a, children: [c, h] })),
        (t[18] = a),
        (t[19] = c),
        (t[20] = h),
        (t[21] = g))
      : (g = t[21]),
    g
  );
}
var Zn,
  Qn,
  $n = e(() => {
    ((Zn = q()), $e(), Ut(), Yn(), (Qn = K()));
  });
function er(e, t, n = !1) {
  let { relativeX: r, relativeY: i } = Ht(e),
    a = e.currentTarget.querySelector(`.recharts-tooltip-wrapper`),
    o = e.currentTarget.clientWidth,
    s = e.currentTarget.clientHeight,
    c = t || n ? e.currentTarget.getBoundingClientRect() : void 0,
    l = c == null || o === 0 ? 1 : c.width / o || 1,
    u = c == null || s === 0 ? l : c.height / s || 1,
    d = t ? a?.getBoundingClientRect() : void 0,
    f;
  if (n && c != null) {
    let t = 0,
      n = window.innerHeight;
    for (let r = e.currentTarget.parentElement; r != null; r = r.parentElement)
      if (getComputedStyle(r).overflowY !== `visible`) {
        let e = r.getBoundingClientRect();
        ((t = Math.max(t, e.top)), (n = Math.min(n, e.bottom)));
      }
    f = { top: (t - c.top) / u, bottom: (n - c.top) / u };
  }
  return {
    x: r,
    y: i,
    chartWidth: o,
    chartHeight: s,
    tooltipWidth: d == null ? (a?.offsetWidth ?? 0) : d.width / l,
    tooltipHeight: d == null ? (a?.offsetHeight ?? 0) : d.height / u,
    tooltipVerticalBounds: f,
    curveYBySeries: t
      ? Array.from(
          e.currentTarget.querySelectorAll(`.recharts-line:not(.opacity-0) .recharts-line-curve`),
          (e) => rr(e, r),
        )
      : void 0,
  };
}
function tr(e) {
  let t = e.tooltipWidth || 260,
    n = e.tooltipHeight,
    r = e.tooltipVerticalBounds?.top ?? 0,
    i = e.tooltipVerticalBounds?.bottom ?? (e.chartHeight === 0 ? 1 / 0 : e.chartHeight),
    a = e.y + 12,
    o = n === 0 || a + n <= i ? a : e.y - n - 12,
    s = Math.max(r, i - n);
  return { x: Math.max(0, Math.min(e.x + 12, e.chartWidth - t)), y: Math.max(r, Math.min(o, s)) };
}
function nr({ data: e, pointer: t, series: n, xScale: r, yScale: i, yInverseScale: a }) {
  if (e == null || e.length === 0) return [];
  let o = e.findIndex((e) => {
    let n = r(e.date, { position: `middle` });
    return n != null && n >= t.x;
  });
  o < 0 && (o = e.length - 1);
  let s = e[Math.max(0, o - 1)],
    c = e[o];
  if (s == null || c == null) return [];
  let l = r(s.date, { position: `middle` }),
    u = r(c.date, { position: `middle` });
  if (l == null || u == null) return [];
  let d = l === u ? 0 : Math.max(0, Math.min(1, (t.x - l) / (u - l)));
  return n.flatMap((e, n) => {
    let r = e.value(s),
      o = e.value(c);
    if (!Number.isFinite(r) || !Number.isFinite(o)) return [];
    let l = r + (o - r) * d,
      u = t.curveYBySeries?.[n] ?? i(l);
    if (u == null || !Number.isFinite(u)) return [];
    let f = t.curveYBySeries == null ? void 0 : a?.(u),
      p = typeof f == `number` && Number.isFinite(f) ? f : l;
    return [{ key: e.key, name: e.name, color: e.color, value: p, y: u }];
  });
}
function rr(e, t) {
  if (typeof e.getTotalLength != `function` || typeof e.getPointAtLength != `function`) return null;
  try {
    let n = 0,
      r = e.getTotalLength();
    if (!Number.isFinite(r) || r === 0) return null;
    let i = e.getPointAtLength(n),
      a = e.getPointAtLength(r);
    if (t <= i.x) return i.y;
    if (t >= a.x) return a.y;
    for (let i = 0; i < 11; i += 1) {
      let i = (n + r) / 2;
      e.getPointAtLength(i).x < t ? (n = i) : (r = i);
    }
    return e.getPointAtLength((n + r) / 2).y;
  } catch {
    return null;
  }
}
var ir,
  ar,
  or,
  sr = e(() => {
    (Ut(),
      (ir = kt(`date`)),
      (ar = (e, t) => {
        let n = e?.some(
          (e) => e.status !== `matched` || e.prev.x !== e.next.x || e.prev.width !== e.next.width,
        );
        return (
          e?.flatMap((e) => {
            if (e.status === `removed`) return [];
            let r = e.next,
              i = e.status === `added` || n ? null : e.prev,
              a = i?.y ?? r.stackedBarStart,
              o = i?.height ?? 0;
            return [{ ...r, y: a + (r.y - a) * t, height: o + (r.height - o) * t }];
          }) ?? []
        );
      }),
      (or = (e, t) => {
        let n = e?.flatMap((e) => (e.status === `added` ? [] : [e.prev])) ?? [];
        return (
          e?.flatMap((e) => {
            if (e.status === `removed`) return [];
            let r = e.next,
              i = r.x;
            if (i == null || r.y == null || n.length === 0) return [r];
            let a = n.findIndex((e) => e.x != null && e.x >= i),
              o = a === -1 ? n.length - 1 : a,
              s = n[Math.max(0, o - 1)],
              c = n[o];
            if (s.x == null || s.y == null || c.x == null || c.y == null) return [r];
            let l = c.x === s.x ? c.y : s.y + ((c.y - s.y) * (i - s.x)) / (c.x - s.x);
            return [{ ...r, y: l + (r.y - l) * t }];
          }) ?? []
        );
      }));
  });
function cr(e) {
  let t = (0, lr.c)(29),
    {
      seriesKey: n,
      name: r,
      color: i,
      hidden: a,
      otherSeriesKeys: o,
      stackId: s,
      stackClipId: c,
      topSeriesKeys: l,
      stackRadius: u,
      grow: d,
      restack: f,
      onAnimationEnd: p,
      onGrowEnd: m,
      onHoverChange: h,
    } = e,
    g;
  t[0] !== a || t[1] !== o || t[2] !== n
    ? ((g = (e) =>
        a ? null : o == null ? (e.values[n] ?? 0) : o.reduce((t, n) => t + (e.values[n] ?? 0), 0)),
      (t[0] = a),
      (t[1] = o),
      (t[2] = n),
      (t[3] = g))
    : (g = t[3]);
  let _ = f ? p : void 0,
    v;
  t[4] !== h || t[5] !== n
    ? ((v = h == null ? void 0 : () => h(n)), (t[4] = h), (t[5] = n), (t[6] = v))
    : (v = t[6]);
  let y;
  t[7] === h ? (y = t[8]) : ((y = h == null ? void 0 : () => h(null)), (t[7] = h), (t[8] = y));
  let b;
  t[9] === s ? (b = t[10]) : ((b = s == null ? [8, 8, 0, 0] : 0), (t[9] = s), (t[10] = b));
  let x;
  t[11] !== d || t[12] !== m || t[13] !== n || t[14] !== c || t[15] !== u || t[16] !== l
    ? ((x = (e) =>
        (0, ur.jsx)(Xn, {
          bar: e,
          stackClipId: c == null ? void 0 : `${c}-${e.originalDataIndex}`,
          grow: d,
          onGrowEnd: m,
          radius: l?.[e.originalDataIndex] === n ? u : void 0,
        })),
      (t[11] = d),
      (t[12] = m),
      (t[13] = n),
      (t[14] = c),
      (t[15] = u),
      (t[16] = l),
      (t[17] = x))
    : (x = t[17]);
  let S;
  return (
    t[18] !== i ||
    t[19] !== r ||
    t[20] !== f ||
    t[21] !== s ||
    t[22] !== g ||
    t[23] !== _ ||
    t[24] !== v ||
    t[25] !== y ||
    t[26] !== b ||
    t[27] !== x
      ? ((S = (0, ur.jsx)(Ft, {
          animationDuration: 300,
          animationEasing: `ease`,
          animationInterpolateFn: ar,
          animationMatchBy: ir,
          dataKey: g,
          fill: i,
          isAnimationActive: f,
          name: r,
          onAnimationEnd: _,
          onMouseEnter: v,
          onMouseLeave: y,
          radius: b,
          shape: x,
          stackId: s,
        })),
        (t[18] = i),
        (t[19] = r),
        (t[20] = f),
        (t[21] = s),
        (t[22] = g),
        (t[23] = _),
        (t[24] = v),
        (t[25] = y),
        (t[26] = b),
        (t[27] = x),
        (t[28] = S))
      : (S = t[28]),
    S
  );
}
var lr,
  ur,
  dr = e(() => {
    ((lr = q()), Ut(), J(), $n(), sr(), (ur = K()));
  });
function fr(e, t) {
  return t.formatDate(new Date(`${e}T00:00:00Z`), {
    month: `short`,
    day: `numeric`,
    timeZone: `UTC`,
  });
}
function pr(e) {
  if (e == null || e.length === 0) return;
  let t = e[0]?.date,
    n = e[Math.floor(e.length / 2)]?.date,
    r = e.at(-1)?.date;
  if (!(t == null || n == null || r == null)) return Array.from(new Set([t, n, r]));
}
var mr = e(() => {});
function hr(e) {
  let t = (0, _r.c)(17),
    {
      children: n,
      isTooltipDismissed: r,
      onResetHover: i,
      onTooltipDismissedChange: a,
      consumerAnalytics: o,
      scope: s,
    } = e,
    c = o !== void 0 && o,
    l;
  t[0] !== r || t[1] !== a
    ? ((l = r ? () => a(!1) : void 0), (t[0] = r), (t[1] = a), (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== i || t[4] !== a || t[5] !== s
    ? ((d =
        s === `workspace`
          ? void 0
          : () => {
              (a(!0), i());
            }),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s),
      (t[6] = d))
    : (d = t[6]);
  let f = d,
    p;
  t[7] !== c || t[8] !== i || t[9] !== a || t[10] !== u
    ? ((p = c
        ? (e) => {
            if (e.key === `Escape`) {
              let t = e.currentTarget.querySelector(`.recharts-tooltip-wrapper`);
              t?.querySelector(`[role="status"]`) != null &&
                getComputedStyle(t).visibility === `visible` &&
                (e.stopPropagation(), a(!0), i());
            } else u?.();
          }
        : u),
      (t[7] = c),
      (t[8] = i),
      (t[9] = a),
      (t[10] = u),
      (t[11] = p))
    : (p = t[11]);
  let m;
  return (
    t[12] !== n || t[13] !== f || t[14] !== u || t[15] !== p
      ? ((m = (0, vr.jsx)(Jt, {
          width: `100%`,
          height: `100%`,
          minHeight: 144,
          onFocusCapture: u,
          onKeyDownCapture: p,
          onMouseLeave: f,
          onMouseMoveCapture: u,
          onWheelCapture: f,
          children: n,
        })),
        (t[12] = n),
        (t[13] = f),
        (t[14] = u),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function gr(e) {
  let t = (0, _r.c)(29),
    { data: n, pointer: r, series: i } = e,
    a = qt(),
    o = Nt(),
    s = Kt(),
    c = Dt();
  if (
    r == null ||
    a == null ||
    o == null ||
    s == null ||
    r.x < a.x ||
    r.x > a.x + a.width ||
    r.y < a.y ||
    r.y > a.y + a.height
  )
    return null;
  let l, u, d, f, p, m;
  if (
    t[0] !== n ||
    t[1] !== a.height ||
    t[2] !== a.y ||
    t[3] !== r ||
    t[4] !== i ||
    t[5] !== o ||
    t[6] !== c ||
    t[7] !== s
  ) {
    let e = nr({ data: n, pointer: r, series: i, xScale: o, yScale: s, yInverseScale: c });
    ((l = Rt), (m = Mt.activeDot), (u = `true`), (d = `none`));
    let h = a.y + a.height;
    t[14] !== a.y || t[15] !== r.x || t[16] !== h
      ? ((f = (0, vr.jsx)(`line`, {
          x1: r.x,
          x2: r.x,
          y1: a.y,
          y2: h,
          stroke: `var(--color-border-strong)`,
        })),
        (t[14] = a.y),
        (t[15] = r.x),
        (t[16] = h),
        (t[17] = f))
      : (f = t[17]);
    let g;
    (t[18] === r.x
      ? (g = t[19])
      : ((g = (e) =>
          (0, vr.jsx)(
            `circle`,
            {
              cx: r.x,
              cy: e.y,
              fill: e.color,
              r: 4,
              stroke: `var(--color-surface)`,
              strokeWidth: 2,
            },
            e.key,
          )),
        (t[18] = r.x),
        (t[19] = g)),
      (p = e.map(g)),
      (t[0] = n),
      (t[1] = a.height),
      (t[2] = a.y),
      (t[3] = r),
      (t[4] = i),
      (t[5] = o),
      (t[6] = c),
      (t[7] = s),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  } else ((l = t[8]), (u = t[9]), (d = t[10]), (f = t[11]), (p = t[12]), (m = t[13]));
  let h;
  t[20] !== u || t[21] !== d || t[22] !== f || t[23] !== p
    ? ((h = (0, vr.jsxs)(`g`, { "aria-hidden": u, pointerEvents: d, children: [f, p] })),
      (t[20] = u),
      (t[21] = d),
      (t[22] = f),
      (t[23] = p),
      (t[24] = h))
    : (h = t[24]);
  let g;
  return (
    t[25] !== l || t[26] !== m || t[27] !== h
      ? ((g = (0, vr.jsx)(l, { zIndex: m, children: h })),
        (t[25] = l),
        (t[26] = m),
        (t[27] = h),
        (t[28] = g))
      : (g = t[28]),
    g
  );
}
var _r,
  vr,
  yr = e(() => {
    ((_r = q()), Ut(), sr(), (vr = K()));
  });
function br(e) {
  let t = e.indexOf(`: `);
  if (t === -1) return e;
  let n = e.slice(0, t),
    r = e.slice(t + 2),
    i = `${n} `;
  return (r.startsWith(i) && r.slice(i.length)) || r;
}
function xr(e) {
  return [...ve.slice(3), ...ve.slice(0, 3)].find((t) => !e.some((e) => e.color === t)) ?? ve[3];
}
function Sr(e, t) {
  return e != null && t.some(({ key: t }) => e.has(t)) && t.some(({ key: t }) => !e.has(t))
    ? e
    : null;
}
function Cr(e, t, n, r) {
  let i = new Set([...(e ?? []), ...[...(r ?? [])].filter((e) => !n.some((t) => t.key === e))]);
  return i.has(t)
    ? (i.delete(t), i)
    : n.some((e) => e.key !== t && !i.has(e.key))
      ? (i.add(t), i)
      : (e ?? i);
}
function wr(e, t, n) {
  let r = new Set([...(n ?? []), ...t.map((e) => e.key)]);
  return (r.delete(e), r);
}
var Tr,
  Er,
  Dr = e(() => {
    (S(), (Tr = `__other_usage_series__`), (Er = [4, 4, 0, 0]));
  });
function Or(e) {
  let t = (0, Pr.c)(63),
    {
      active: n,
      activeSeriesName: r,
      hiddenSeriesKeys: i,
      isRelativeUsage: o,
      label: s,
      payload: c,
      report: l,
      consumerAnalytics: u,
      scope: d,
      series: f,
      sortBySeriesOrder: p,
      unit: m,
      usdPerCredit: h,
    } = e,
    g = o !== void 0 && o,
    _ = u !== void 0 && u,
    v = p !== void 0 && p,
    y = E();
  if (!n || c == null || c.length === 0) return null;
  let b;
  if (t[0] !== i || t[1] !== c || t[2] !== f || t[3] !== v) {
    let e = i?.size
      ? c.filter((e) => {
          let { name: t } = e;
          return !i.has(f?.find((e) => e.key === t || e.name === t)?.key ?? ``);
        })
      : c;
    ((b =
      v && f != null
        ? [...e].sort(
            (e, t) =>
              f.findIndex((t) => t.key === e.name || t.name === e.name) -
              f.findIndex((e) => e.key === t.name || e.name === t.name),
          )
        : e),
      (t[0] = i),
      (t[1] = c),
      (t[2] = f),
      (t[3] = v),
      (t[4] = b));
  } else b = t[4];
  let x = b,
    S = x.reduce(Ar, 0),
    C = l == null ? (g ? S : 100) : (l.bucketTotals[String(s)] ?? 0),
    w = l != null,
    T = w ? 2 : m === `percent` ? 0 : 1;
  if (w && (C <= 0 || !x.some(kr))) return null;
  let D;
  t[5] !== y || t[6] !== s
    ? ((D =
        s == null
          ? null
          : y.formatDate(new Date(`${s}T00:00:00Z`), {
              month: `short`,
              day: `numeric`,
              year: `numeric`,
              timeZone: `UTC`,
            })),
      (t[5] = y),
      (t[6] = s),
      (t[7] = D))
    : (D = t[7]);
  let O = D,
    k = !_ && `z-50`,
    A = Ir[m],
    j;
  t[8] !== k || t[9] !== A
    ? ((j = M(
        `bg-surface-elevated-secondary text-default ring-border flex flex-col gap-0.5 rounded-xl px-2.5 py-2 text-xs leading-4 break-words whitespace-normal shadow-xl-spread ring-[0.5px] select-none`,
        k,
        A,
      )),
      (t[8] = k),
      (t[9] = A),
      (t[10] = j))
    : (j = t[10]);
  let N;
  t[11] === l
    ? (N = t[12])
    : ((N =
        l == null
          ? null
          : (0, Fr.jsx)(`span`, {
              className: `font-medium`,
              children: (0, Fr.jsx)(a, {
                id: `settings.usage.billing.chart.tooltip.totalUsageShare`,
                defaultMessage: `Share of total usage`,
                description: `Usage chart tooltip header; each series is a share of all plan and purchased-credit usage in this bucket, including hidden series`,
              }),
            })),
      (t[11] = l),
      (t[12] = N));
  let P;
  t[13] !== d || t[14] !== S || t[15] !== m
    ? ((P =
        d !== `workspace` && m === `percent` && S === 0
          ? (0, Fr.jsx)(`span`, {
              className: `font-medium`,
              children: (0, Fr.jsx)(Ke, { value: 0, style: `percent` }),
            })
          : null),
      (t[13] = d),
      (t[14] = S),
      (t[15] = m),
      (t[16] = P))
    : (P = t[16]);
  let F;
  t[17] !== _ || t[18] !== d || t[19] !== S || t[20] !== m || t[21] !== h
    ? ((F =
        m === `percent`
          ? null
          : (0, Fr.jsx)(`span`, {
              className: `font-medium`,
              children: (0, Fr.jsx)(Mr, {
                consumerAnalytics: _,
                estimatedSpendUsd: h == null ? null : S * h,
                scope: d,
                total: S,
                unit: m,
              }),
            })),
      (t[17] = _),
      (t[18] = d),
      (t[19] = S),
      (t[20] = m),
      (t[21] = h),
      (t[22] = F))
    : (F = t[22]);
  let I;
  t[23] === O
    ? (I = t[24])
    : ((I =
        O == null
          ? null
          : (0, Fr.jsx)(`span`, { className: `text-codex-description`, children: O })),
      (t[23] = O),
      (t[24] = I));
  let L;
  t[25] !== P || t[26] !== F || t[27] !== I || t[28] !== N
    ? ((L = (0, Fr.jsxs)(`div`, {
        className: `flex flex-col gap-0.5 border-b border-default pb-1`,
        children: [N, P, F, I],
      })),
      (t[25] = P),
      (t[26] = F),
      (t[27] = I),
      (t[28] = N),
      (t[29] = L))
    : (L = t[29]);
  let R = _ && `-mx-1.5 px-1.5`,
    ee = !_ && d !== `workspace` && `max-h-40 overflow-x-hidden overflow-y-auto`,
    z;
  t[30] !== R || t[31] !== ee
    ? ((z = M(`flex flex-col pt-0.5`, R, ee)), (t[30] = R), (t[31] = ee), (t[32] = z))
    : (z = t[32]);
  let te;
  if (
    t[33] !== r ||
    t[34] !== _ ||
    t[35] !== w ||
    t[36] !== T ||
    t[37] !== x ||
    t[38] !== C ||
    t[39] !== d ||
    t[40] !== f ||
    t[41] !== v ||
    t[42] !== m ||
    t[43] !== h
  ) {
    let e;
    (t[45] !== r ||
    t[46] !== _ ||
    t[47] !== w ||
    t[48] !== T ||
    t[49] !== C ||
    t[50] !== d ||
    t[51] !== f ||
    t[52] !== v ||
    t[53] !== m ||
    t[54] !== h
      ? ((e = (e, t) => {
          let n = typeof e.value == `number` ? e.value : 0;
          if ((w && n <= 0) || ((d !== `workspace` || v || m === `percent`) && n === 0))
            return null;
          let i = f?.findIndex((t) => t.key === e.name || t.name === e.name) ?? t,
            a = i < 0 ? t : i;
          return (0, Fr.jsxs)(
            `span`,
            {
              className: M(
                `-mx-1.5 flex items-center justify-between gap-4 rounded-md px-1.5 py-0.5`,
                r != null && e.name === r && `bg-primary-ghost-hover`,
              ),
              children: [
                (0, Fr.jsxs)(`span`, {
                  className: M(
                    `inline-flex items-center gap-1.5 text-codex-description`,
                    d !== `workspace` && `min-w-0`,
                  ),
                  children: [
                    (0, Fr.jsx)(Nn, { color: f?.[a]?.color, index: a }),
                    d === `workspace`
                      ? Nr(e.name, f)
                      : (0, Fr.jsx)(`span`, { className: `truncate`, children: Nr(e.name, f) }),
                  ],
                }),
                (0, Fr.jsxs)(`span`, {
                  className: M(`flex flex-col items-end`, d !== `workspace` && `shrink-0`),
                  children: [
                    (0, Fr.jsx)(`span`, {
                      className: `font-medium`,
                      children:
                        m === `credits`
                          ? (0, Fr.jsx)(jr, {
                              consumerAnalytics: _,
                              value: d === `workspace` ? n : Math.round(n * 10) / 10,
                            })
                          : (0, Fr.jsx)(Ke, {
                              value: m === `percent` ? n / C : n,
                              style: m === `percent` ? `percent` : void 0,
                              maximumFractionDigits: T,
                            }),
                    }),
                    m === `credits` && h != null
                      ? (0, Fr.jsx)(`span`, {
                          className: `text-codex-description`,
                          children: (0, Fr.jsx)(kn, { usd: n * h }),
                        })
                      : null,
                  ],
                }),
              ],
            },
            `${e.name ?? `usage`}-${t}`,
          );
        }),
        (t[45] = r),
        (t[46] = _),
        (t[47] = w),
        (t[48] = T),
        (t[49] = C),
        (t[50] = d),
        (t[51] = f),
        (t[52] = v),
        (t[53] = m),
        (t[54] = h),
        (t[55] = e))
      : (e = t[55]),
      (te = x.map(e)),
      (t[33] = r),
      (t[34] = _),
      (t[35] = w),
      (t[36] = T),
      (t[37] = x),
      (t[38] = C),
      (t[39] = d),
      (t[40] = f),
      (t[41] = v),
      (t[42] = m),
      (t[43] = h),
      (t[44] = te));
  } else te = t[44];
  let ne;
  t[56] !== z || t[57] !== te
    ? ((ne = (0, Fr.jsx)(`div`, { className: z, children: te })),
      (t[56] = z),
      (t[57] = te),
      (t[58] = ne))
    : (ne = t[58]);
  let re;
  return (
    t[59] !== L || t[60] !== ne || t[61] !== j
      ? ((re = (0, Fr.jsxs)(`div`, {
          className: j,
          role: `status`,
          "aria-live": `assertive`,
          children: [L, ne],
        })),
        (t[59] = L),
        (t[60] = ne),
        (t[61] = j),
        (t[62] = re))
      : (re = t[62]),
    re
  );
}
function kr(e) {
  let { value: t } = e;
  return typeof t == `number` && t > 0;
}
function Ar(e, t) {
  return e + (typeof t.value == `number` ? t.value : 0);
}
function jr(e) {
  let t = (0, Pr.c)(4),
    { consumerAnalytics: n, value: r } = e;
  if (n) {
    let e;
    return (
      t[0] === r
        ? (e = t[1])
        : ((e = (0, Fr.jsx)(a, {
            id: `settings.usage.billing.chart.tooltip.creditAmount`,
            defaultMessage: `{value, plural, one {# credit} other {# credits}}`,
            description: `Credit amount for one series when a user hovers a usage chart. Value is a number of credits and may include a decimal fraction`,
            values: { value: r },
          })),
          (t[0] = r),
          (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, Fr.jsx)(a, {
          id: `settings.usage.billing.chart.tooltip.creditValue`,
          defaultMessage: `{value, number} credits`,
          description: `Credit amount shown for one series in a usage chart tooltip`,
          values: { value: r },
        })),
        (t[2] = r),
        (t[3] = i)),
    i
  );
}
function Mr(e) {
  let t = (0, Pr.c)(23),
    { estimatedSpendUsd: n, consumerAnalytics: r, scope: i, total: o, unit: s } = e,
    c = r !== void 0 && r;
  switch (s) {
    case `credits`: {
      let e;
      t[0] !== c || t[1] !== i || t[2] !== o
        ? ((e = c
            ? (0, Fr.jsx)(jr, {
                consumerAnalytics: !0,
                value: i === `workspace` ? Math.round(o) : Math.round(o * 10) / 10,
              })
            : (0, Fr.jsx)(a, {
                id: `settings.usage.billing.chart.tooltip.credits`,
                defaultMessage: `{value, number} credits`,
                description: `Total credits shown in a usage chart tooltip`,
                values: { value: i === `workspace` ? Math.round(o) : Math.round(o * 10) / 10 },
              })),
          (t[0] = c),
          (t[1] = i),
          (t[2] = o),
          (t[3] = e))
        : (e = t[3]);
      let r;
      t[4] === n
        ? (r = t[5])
        : ((r =
            n == null
              ? null
              : (0, Fr.jsx)(`span`, {
                  className: `font-normal text-codex-description`,
                  children: (0, Fr.jsx)(kn, { usd: n }),
                })),
          (t[4] = n),
          (t[5] = r));
      let s;
      return (
        t[6] !== e || t[7] !== r
          ? ((s = (0, Fr.jsxs)(`span`, {
              className: `inline-flex items-baseline gap-1`,
              children: [e, r],
            })),
            (t[6] = e),
            (t[7] = r),
            (t[8] = s))
          : (s = t[8]),
        s
      );
    }
    case `tokens`: {
      let e;
      return (
        t[9] === o
          ? (e = t[10])
          : ((e = (0, Fr.jsx)(a, {
              id: `settings.usage.billing.chart.tooltip.tokens`,
              defaultMessage: `{value, number} tokens`,
              description: `Total tokens shown in a usage chart tooltip`,
              values: { value: o },
            })),
            (t[9] = o),
            (t[10] = e)),
        e
      );
    }
    case `calls`: {
      let e;
      return (
        t[11] === o
          ? (e = t[12])
          : ((e = (0, Fr.jsx)(a, {
              id: `settings.usage.billing.chart.tooltip.calls`,
              defaultMessage: `{value, number} calls`,
              description: `Total plugin calls shown in a usage chart tooltip`,
              values: { value: o },
            })),
            (t[11] = o),
            (t[12] = e)),
        e
      );
    }
    case `uses`: {
      let e;
      return (
        t[13] === o
          ? (e = t[14])
          : ((e = (0, Fr.jsx)(a, {
              id: `settings.usage.billing.chart.tooltip.uses`,
              defaultMessage: `{value, number} uses`,
              description: `Total skill uses shown in a usage chart tooltip`,
              values: { value: o },
            })),
            (t[13] = o),
            (t[14] = e)),
        e
      );
    }
    case `turns`: {
      let e;
      return (
        t[15] !== c || t[16] !== o
          ? ((e = c
              ? (0, Fr.jsx)(a, {
                  id: `settings.usage.billing.chart.tooltip.messages`,
                  defaultMessage: `{value, plural, one {# message} other {# messages}}`,
                  description: `Total Consumer messages shown in a usage chart tooltip; the underlying conversation-turn count is unchanged`,
                  values: { value: o },
                })
              : (0, Fr.jsx)(a, {
                  id: `settings.usage.billing.chart.tooltip.turns`,
                  defaultMessage: `{value, number} turns`,
                  description: `Total Codex conversation turns shown in a usage chart tooltip`,
                  values: { value: o },
                })),
            (t[15] = c),
            (t[16] = o),
            (t[17] = e))
          : (e = t[17]),
        e
      );
    }
    case `lines`: {
      let e;
      return (
        t[18] === o
          ? (e = t[19])
          : ((e = (0, Fr.jsx)(a, {
              id: `settings.usage.billing.chart.tooltip.lines`,
              defaultMessage: `{value, number} lines`,
              description: `Total lines of code added through Codex shown in a usage chart tooltip`,
              values: { value: o },
            })),
            (t[18] = o),
            (t[19] = e)),
        e
      );
    }
    case `issues`:
    case `reviews`:
    case `reactions`: {
      let e;
      return (
        t[20] !== o || t[21] !== s
          ? ((e = (0, Fr.jsx)(a, {
              id: `settings.usage.billing.codeReview.tooltip.total`,
              defaultMessage: `{unit, select, issues {{value, plural, one {# issue} other {# issues}}} reviews {{value, plural, one {# review} other {# reviews}}} reactions {{value, plural, one {# reaction} other {# reactions}}} other {{value, number}}}`,
              description: `Total number of discovered issues, completed pull-request reviews, or reactions shown for one day in a Codex code review analytics chart tooltip`,
              values: { unit: s, value: o },
            })),
            (t[20] = o),
            (t[21] = s),
            (t[22] = e))
          : (e = t[22]),
        e
      );
    }
  }
}
function Nr(e, t) {
  return typeof e == `string` ? (t?.find(({ key: t }) => t === e)?.name ?? e) : e;
}
var Pr,
  Fr,
  Ir,
  Lr = e(() => {
    ((Pr = q()),
      $e(),
      F(),
      Mn(),
      In(),
      (Fr = K()),
      (Ir = {
        calls: `w-64`,
        credits: `w-[260px]`,
        issues: `w-64`,
        lines: `w-64`,
        percent: `w-[260px]`,
        reactions: `w-64`,
        reviews: `w-64`,
        tokens: `w-[242px]`,
        turns: `w-64`,
        uses: `w-64`,
      }));
  });
function Rr(e) {
  let t = (0, Ur.c)(155),
    {
      actions: n,
      ariaLabel: r,
      breakdown: i,
      data: o,
      emptyMessage: s,
      hideTotal: c,
      preservePopulatedCardLayout: l,
      consumerAnalytics: u,
      scope: d,
      status: f,
      title: p,
      totalLabel: m,
      unit: h,
      visualization: g,
    } = e,
    _ = u !== void 0 && u,
    v = E(),
    y = g === `stacked-bar`,
    [b, x] = (0, Wr.useState)(null),
    [S, C] = (0, Wr.useState)(!1),
    [w, T] = (0, Wr.useState)(null),
    [D, O] = (0, Wr.useState)(null),
    [k, A] = (0, Wr.useState)(null),
    j = k != null && k === o,
    { onAnimationEnd: N } = f,
    P;
  t[0] === N
    ? (P = t[1])
    : ((P = () => {
        (A(null), N?.());
      }),
      (t[0] = N),
      (t[1] = P));
  let F = P,
    I,
    L,
    R,
    ee,
    z,
    te,
    ne,
    re,
    ie,
    ae,
    B,
    oe,
    V,
    se,
    ce,
    le,
    ue,
    de,
    fe,
    H,
    U,
    W,
    pe,
    G,
    me,
    he,
    ge,
    K,
    _e,
    ye,
    be,
    xe,
    Se,
    Ce,
    q,
    we,
    Te,
    Ee,
    De,
    J;
  if (
    t[2] !== n ||
    t[3] !== b ||
    t[4] !== j ||
    t[5] !== r ||
    t[6] !== i ||
    t[7] !== _ ||
    t[8] !== o ||
    t[9] !== s ||
    t[10] !== F ||
    t[11] !== c ||
    t[12] !== v ||
    t[13] !== y ||
    t[14] !== S ||
    t[15] !== l ||
    t[16] !== d ||
    t[17] !== w ||
    t[18] !== f ||
    t[19] !== D ||
    t[20] !== p ||
    t[21] !== m ||
    t[22] !== h ||
    t[23] !== g
  ) {
    let { visibleSeries: e, groupedToolSeries: u } = Br(o, d, h, y, _),
      E;
    t[64] !== i || t[65] !== v || t[66] !== y || t[67] !== h
      ? ((E = (e) => ({
          color: e.color,
          key: e.key,
          name: Vr(e, h, i, y, v),
          total: y ? e.total : void 0,
        })),
        (t[64] = i),
        (t[65] = v),
        (t[66] = y),
        (t[67] = h),
        (t[68] = E))
      : (E = t[68]);
    let k = (e ?? []).map(E),
      N =
        D != null &&
        (y || (d !== `workspace` && (h === `calls` || h === `uses`))) &&
        !k.some((e) => !D.has(e.key) && (!y || (e.total ?? 0) > 0))
          ? null
          : D,
      P = _ ? Sr(D, k) : N,
      Oe = h === `lines` || g === `bar` || y,
      ke = y ? Kr : 44;
    J = !Oe;
    let Ae = (e, t) =>
      t === `__other_usage_series__`
        ? u.reduce((t, n) => t + (e.values[n.key] ?? 0), 0)
        : (e.values[t] ?? 0);
    ee = k
      .map((e, t) => ({
        key: e.key,
        name: e.key,
        color: e.color ?? ve[t % ve.length],
        value: (t) => Ae(t, e.key),
      }))
      .filter((e) => {
        let { key: t } = e;
        return !P?.has(t);
      });
    let je =
        o == null
          ? void 0
          : o.total -
            o.series.reduce(
              (e, t) =>
                P?.has(
                  u.some((e) => {
                    let { key: n } = e;
                    return n === t.key;
                  })
                    ? `__other_usage_series__`
                    : t.key,
                )
                  ? e + t.total
                  : e,
              0,
            ),
      Me = Oe ? Lt : Vt;
    ((R = Ln),
      (le = _),
      (ue = n),
      (de = b),
      t[69] !== s || t[70] !== d || t[71] !== h
        ? ((fe =
            s ??
            (d !== `workspace` && (h === `calls` || h === `uses`)
              ? (0, Gr.jsx)(a, {
                  id: `settings.usage.billing.chart.empty`,
                  defaultMessage: `No usage recorded yet`,
                  description: `Empty state for enterprise billing and usage charts`,
                })
              : void 0)),
          (t[69] = s),
          (t[70] = d),
          (t[71] = h),
          (t[72] = fe))
        : (fe = t[72]),
      (H = (o?.total ?? 0) > 0),
      (U = c),
      (W = l),
      (pe =
        _ && (J || y)
          ? (e) => {
              (y && A(o ?? null), O(e == null ? null : wr(e, k, D)));
            }
          : void 0),
      (G =
        J || y
          ? (e) => {
              (_ && y && A(o ?? null),
                O((t) =>
                  y
                    ? (
                        _
                          ? !P?.has(e) && k.every((t) => t.key === e || P?.has(t.key))
                          : P?.size === k.length - 1 && !P.has(e)
                      )
                      ? null
                      : wr(e, k, _ ? t : null)
                    : Cr(_ ? P : t, e, k, t),
                ));
            }
          : void 0),
      (he = d),
      (ge = P),
      (K = Oe && !y ? [] : k),
      (_e = y),
      (ye = f),
      (be = p),
      (xe = je),
      (Se = m),
      (L = hr),
      (B = _),
      (oe = S),
      t[73] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((V = () => {
            (T(null), x(null));
          }),
          (t[73] = V))
        : (V = t[73]),
      (se = C),
      (ce = d),
      (I = Me),
      t[74] !== r || t[75] !== _ || t[76] !== v || t[77] !== d || t[78] !== h
        ? ((me = Hr(r, h, d, v, _)),
          (t[74] = r),
          (t[75] = _),
          (t[76] = v),
          (t[77] = d),
          (t[78] = h),
          (t[79] = me))
        : (me = t[79]),
      (Ce = y ? `38%` : void 0),
      (q = o?.data));
    let Ne = y ? 20 : 4;
    (t[80] === Ne
      ? (we = t[81])
      : ((we = { top: Ne, right: 0, left: 0, bottom: 0 }), (t[80] = Ne), (t[81] = we)),
      (Te = d === `workspace` || !Oe ? void 0 : ke),
      (Ee = d === `workspace` ? void 0 : zr),
      t[82] !== _ || t[83] !== d || t[84] !== J
        ? ((De =
            J || _
              ? () => {
                  (T(null), d !== `workspace` && x(null));
                }
              : void 0),
          (t[82] = _),
          (t[83] = d),
          (t[84] = J),
          (t[85] = De))
        : (De = t[85]),
      t[86] !== _ || t[87] !== d || t[88] !== J
        ? ((z =
            J || _
              ? (e, t) => {
                  T(er(t, d === `workspace`, _));
                }
              : void 0),
          (t[86] = _),
          (t[87] = d),
          (t[88] = J),
          (t[89] = z))
        : (z = t[89]),
      t[90] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((te = (0, Gr.jsx)(Gt, { stroke: `var(--color-border-subtle)`, vertical: !1 })),
          (t[90] = te))
        : (te = t[90]),
      t[91] !== y || t[92] !== h
        ? ((ne = y ? (0, Gr.jsx)(Pt, { hide: !0 }) : (0, Gr.jsx)(Cn, { unit: h })),
          (t[91] = y),
          (t[92] = h),
          (t[93] = ne))
        : (ne = t[93]));
    let Pe;
    t[94] === v ? (Pe = t[95]) : ((Pe = (e) => fr(e, v)), (t[94] = v), (t[95] = Pe));
    let Fe = o?.data,
      Ie;
    (t[96] === Fe ? (Ie = t[97]) : ((Ie = pr(Fe)), (t[96] = Fe), (t[97] = Ie)),
      t[98] !== Pe || t[99] !== Ie
        ? ((re = (0, Gr.jsx)(Wt, {
            axisLine: !1,
            dataKey: `date`,
            height: 22,
            interval: 0,
            minTickGap: 32,
            tick: wn,
            tickFormatter: Pe,
            tickLine: !1,
            ticks: Ie,
          })),
          (t[98] = Pe),
          (t[99] = Ie),
          (t[100] = re))
        : (re = t[100]));
    let Le;
    t[101] !== w || t[102] !== J
      ? ((Le = J && w != null ? !1 : (0, Gr.jsx)(Tn, {})),
        (t[101] = w),
        (t[102] = J),
        (t[103] = Le))
      : (Le = t[103]);
    let Re;
    (t[104] === w
      ? (Re = t[105])
      : ((Re = w == null ? void 0 : tr(w)), (t[104] = w), (t[105] = Re)),
      (ie = (0, Gr.jsx)(zt, {
        active: !S && void 0,
        filterNull: !0,
        isAnimationActive: !1,
        content: (0, Gr.jsx)(Or, {
          consumerAnalytics: _,
          activeSeriesName: b,
          hiddenSeriesKeys: P,
          scope: d,
          series: k,
          sortBySeriesOrder: y,
          unit: h,
        }),
        cursor: Le,
        position: Re,
      })),
      (ae = y
        ? (0, Gr.jsx)(Bt, {
            radius: Er,
            children: [...k].reverse().map((e) =>
              _
                ? (0, Gr.jsx)(
                    cr,
                    {
                      seriesKey: e.key,
                      name: e.key,
                      color: e.color,
                      hidden: !!P?.has(e.key),
                      otherSeriesKeys: void 0,
                      stackId: `priority`,
                      grow: !!f.animateDataChanges && !j && !f.reduceMotion,
                      restack: j && !f.reduceMotion,
                      onAnimationEnd: F,
                      onGrowEnd: F,
                      onHoverChange: void 0,
                    },
                    e.key,
                  )
                : (0, Gr.jsx)(
                    Ft,
                    {
                      dataKey: (t) => (P?.has(e.key) ? null : (t.values[e.key] ?? 0)),
                      fill: e.color,
                      isAnimationActive: !1,
                      name: e.key,
                      radius: 0,
                      stackId: `priority`,
                      children: (0, Gr.jsx)(Ot, {
                        className: `text-xs`,
                        dataKey: (t) => {
                          if (
                            k.find((e) => !P?.has(e.key) && (t.values[e.key] ?? 0) > 0)?.key ===
                            e.key
                          )
                            return k.reduce(
                              (e, n) => (P?.has(n.key) ? e : e + (t.values[n.key] ?? 0)),
                              0,
                            );
                        },
                        fill: `var(--color-text-secondary)`,
                        formatter: (e) => (typeof e == `number` && e > 0 ? v.formatNumber(e) : ``),
                        offset: 4,
                        position: `top`,
                      }),
                    },
                    e.key,
                  ),
            ),
          })
        : k.map((e, t) => {
            let n = e.color ?? ve[t % ve.length];
            return Oe
              ? _
                ? (0, Gr.jsx)(
                    cr,
                    {
                      seriesKey: e.key,
                      name: e.key,
                      color: n,
                      hidden: !1,
                      otherSeriesKeys: void 0,
                      stackId: void 0,
                      grow: !!f.animateDataChanges && !f.reduceMotion,
                      restack: !1,
                      onAnimationEnd: f.onAnimationEnd,
                      onGrowEnd: f.onAnimationEnd,
                      onHoverChange: void 0,
                    },
                    e.key,
                  )
                : (0, Gr.jsx)(
                    Ft,
                    {
                      dataKey: `values[${JSON.stringify(e.key)}]`,
                      fill: n,
                      isAnimationActive: !1,
                      name: e.key,
                      radius: [8, 8, 0, 0],
                    },
                    e.key,
                  )
              : (0, Gr.jsx)(
                  It,
                  {
                    className: M(
                      !f.reduceMotion &&
                        `transition-opacity duration-basic ease-basic motion-reduce:transition-none`,
                      P?.has(e.key) && `pointer-events-none opacity-0`,
                    ),
                    activeDot: !1,
                    animationDuration: _ && (h === `reactions` || h === `percent`) ? 300 : 200,
                    animationEasing: `ease-out`,
                    animationInterpolateFn: or,
                    animationMatchBy: ir,
                    dataKey: (t) => Ae(t, e.key),
                    dot: !1,
                    isAnimationActive:
                      !f.reduceMotion && !!f.animateDataChanges && (d === `workspace` || w == null),
                    name: e.key,
                    onAnimationEnd: f.onAnimationEnd,
                    onMouseEnter: () => {
                      x(e.key);
                    },
                    onMouseLeave: () => {
                      x(null);
                    },
                    shape: { visibleLength: null },
                    stroke: n,
                    strokeLinecap: `round`,
                    strokeLinejoin: `round`,
                    strokeWidth: 2,
                    type: `linear`,
                  },
                  h === `turns` ? t : e.key,
                );
          })),
      (t[2] = n),
      (t[3] = b),
      (t[4] = j),
      (t[5] = r),
      (t[6] = i),
      (t[7] = _),
      (t[8] = o),
      (t[9] = s),
      (t[10] = F),
      (t[11] = c),
      (t[12] = v),
      (t[13] = y),
      (t[14] = S),
      (t[15] = l),
      (t[16] = d),
      (t[17] = w),
      (t[18] = f),
      (t[19] = D),
      (t[20] = p),
      (t[21] = m),
      (t[22] = h),
      (t[23] = g),
      (t[24] = I),
      (t[25] = L),
      (t[26] = R),
      (t[27] = ee),
      (t[28] = z),
      (t[29] = te),
      (t[30] = ne),
      (t[31] = re),
      (t[32] = ie),
      (t[33] = ae),
      (t[34] = B),
      (t[35] = oe),
      (t[36] = V),
      (t[37] = se),
      (t[38] = ce),
      (t[39] = le),
      (t[40] = ue),
      (t[41] = de),
      (t[42] = fe),
      (t[43] = H),
      (t[44] = U),
      (t[45] = W),
      (t[46] = pe),
      (t[47] = G),
      (t[48] = me),
      (t[49] = he),
      (t[50] = ge),
      (t[51] = K),
      (t[52] = _e),
      (t[53] = ye),
      (t[54] = be),
      (t[55] = xe),
      (t[56] = Se),
      (t[57] = Ce),
      (t[58] = q),
      (t[59] = we),
      (t[60] = Te),
      (t[61] = Ee),
      (t[62] = De),
      (t[63] = J));
  } else
    ((I = t[24]),
      (L = t[25]),
      (R = t[26]),
      (ee = t[27]),
      (z = t[28]),
      (te = t[29]),
      (ne = t[30]),
      (re = t[31]),
      (ie = t[32]),
      (ae = t[33]),
      (B = t[34]),
      (oe = t[35]),
      (V = t[36]),
      (se = t[37]),
      (ce = t[38]),
      (le = t[39]),
      (ue = t[40]),
      (de = t[41]),
      (fe = t[42]),
      (H = t[43]),
      (U = t[44]),
      (W = t[45]),
      (pe = t[46]),
      (G = t[47]),
      (me = t[48]),
      (he = t[49]),
      (ge = t[50]),
      (K = t[51]),
      (_e = t[52]),
      (ye = t[53]),
      (be = t[54]),
      (xe = t[55]),
      (Se = t[56]),
      (Ce = t[57]),
      (q = t[58]),
      (we = t[59]),
      (Te = t[60]),
      (Ee = t[61]),
      (De = t[62]),
      (J = t[63]));
  let Oe;
  t[106] !== o?.data || t[107] !== ee || t[108] !== w || t[109] !== J
    ? ((Oe = J ? (0, Gr.jsx)(gr, { data: o?.data, pointer: w, series: ee }) : null),
      (t[106] = o?.data),
      (t[107] = ee),
      (t[108] = w),
      (t[109] = J),
      (t[110] = Oe))
    : (Oe = t[110]);
  let ke;
  t[111] !== I ||
  t[112] !== z ||
  t[113] !== te ||
  t[114] !== ne ||
  t[115] !== re ||
  t[116] !== ie ||
  t[117] !== ae ||
  t[118] !== me ||
  t[119] !== Oe ||
  t[120] !== Ce ||
  t[121] !== q ||
  t[122] !== we ||
  t[123] !== Te ||
  t[124] !== Ee ||
  t[125] !== De
    ? ((ke = (0, Gr.jsxs)(I, {
        "aria-label": me,
        barCategoryGap: Ce,
        data: q,
        margin: we,
        maxBarSize: Te,
        onMouseDown: Ee,
        onMouseLeave: De,
        onMouseMove: z,
        children: [te, ne, re, ie, ae, Oe],
      })),
      (t[111] = I),
      (t[112] = z),
      (t[113] = te),
      (t[114] = ne),
      (t[115] = re),
      (t[116] = ie),
      (t[117] = ae),
      (t[118] = me),
      (t[119] = Oe),
      (t[120] = Ce),
      (t[121] = q),
      (t[122] = we),
      (t[123] = Te),
      (t[124] = Ee),
      (t[125] = De),
      (t[126] = ke))
    : (ke = t[126]);
  let Ae;
  t[127] !== L ||
  t[128] !== B ||
  t[129] !== oe ||
  t[130] !== V ||
  t[131] !== se ||
  t[132] !== ce ||
  t[133] !== ke
    ? ((Ae = (0, Gr.jsx)(L, {
        consumerAnalytics: B,
        isTooltipDismissed: oe,
        onResetHover: V,
        onTooltipDismissedChange: se,
        scope: ce,
        children: ke,
      })),
      (t[127] = L),
      (t[128] = B),
      (t[129] = oe),
      (t[130] = V),
      (t[131] = se),
      (t[132] = ce),
      (t[133] = ke),
      (t[134] = Ae))
    : (Ae = t[134]);
  let je;
  return (
    t[135] !== R ||
    t[136] !== le ||
    t[137] !== ue ||
    t[138] !== de ||
    t[139] !== fe ||
    t[140] !== H ||
    t[141] !== U ||
    t[142] !== W ||
    t[143] !== pe ||
    t[144] !== G ||
    t[145] !== he ||
    t[146] !== ge ||
    t[147] !== K ||
    t[148] !== _e ||
    t[149] !== ye ||
    t[150] !== be ||
    t[151] !== xe ||
    t[152] !== Se ||
    t[153] !== Ae
      ? ((je = (0, Gr.jsx)(R, {
          consumerAnalytics: le,
          actions: ue,
          activeSeriesKey: de,
          emptyMessage: fe,
          hasData: H,
          hideTotal: U,
          preservePopulatedCardLayout: W,
          onChangeSeriesIsolation: pe,
          onToggleSeries: G,
          scope: he,
          hiddenSeriesKeys: ge,
          series: K,
          singleSelection: _e,
          status: ye,
          title: be,
          total: xe,
          totalLabel: Se,
          children: Ae,
        })),
        (t[135] = R),
        (t[136] = le),
        (t[137] = ue),
        (t[138] = de),
        (t[139] = fe),
        (t[140] = H),
        (t[141] = U),
        (t[142] = W),
        (t[143] = pe),
        (t[144] = G),
        (t[145] = he),
        (t[146] = ge),
        (t[147] = K),
        (t[148] = _e),
        (t[149] = ye),
        (t[150] = be),
        (t[151] = xe),
        (t[152] = Se),
        (t[153] = Ae),
        (t[154] = je))
      : (je = t[154]),
    je
  );
}
function zr(e, t) {
  t.preventDefault();
}
function Br(e, t, n, r, i) {
  let a = e?.series
    .map((e, t) =>
      r
        ? { ...e, color: !i && t === 1 ? `var(--color-chart-orange)` : qr[t] }
        : { ...e, color: i ? ve[t % ve.length] : void 0 },
    )
    .filter(({ key: t }) => !i || e.data.some((e) => (e.values[t] ?? 0) !== 0));
  if (t === `workspace` && n === `uses`)
    return { visibleSeries: a?.slice(0, 6), groupedToolSeries: [] };
  if (t === `workspace` && n === `calls`)
    return { visibleSeries: a?.slice(0, 8), groupedToolSeries: [] };
  if (t !== `workspace` && (n === `calls` || n === `uses`) && a != null && a.length > 3) {
    let e = a.filter(({ key: e }) => e !== `other` && e !== `__other_usage_series__`).slice(0, 3),
      t = a.filter(({ key: t }) => !e.some((e) => e.key === t));
    return {
      groupedToolSeries: t,
      visibleSeries: [
        ...e,
        {
          color: i ? xr(e) : void 0,
          key: Tr,
          name: `Other`,
          total: t.reduce((e, t) => e + t.total, 0),
        },
      ],
    };
  }
  return { visibleSeries: a, groupedToolSeries: [] };
}
function Vr(e, t, n, r, i) {
  return t === `turns` && n === `surface`
    ? i.formatMessage(
        {
          id: `settings.usage.billing.turns.surface`,
          defaultMessage: `{surface, select, desktop {Desktop} cli {CLI} vscode {Extension} web {Codex Cloud} workWeb {Work Web} mobile {Mobile} codeReview {Code review} other {Other}}`,
          description: `Short product surface label shown in a Consumer or Business user's Codex turns chart. Identifies Desktop, CLI, the IDE extension, Codex Cloud, ChatGPT Work Web, Mobile, Code review, or Other; Codex Cloud and Work Web are distinct web surfaces.`,
        },
        { surface: e.key },
      )
    : t === `lines`
      ? i.formatMessage({
          id: `settings.usage.billing.linesOfCode.series`,
          defaultMessage: `Lines of code`,
          description: `Legend or tooltip label for lines of code added through Codex`,
        })
      : (e.key === `other` || e.name === `Other`) && !r
        ? i.formatMessage({
            id: `settings.usage.billing.activity.other`,
            defaultMessage: `Other`,
            description: `Label for aggregated plugin or skill activity outside the most-used tools`,
          })
        : t === `uses`
          ? br(e.name)
          : e.name;
}
function Hr(e, t, n, r, i) {
  return (
    e ??
    (t === `calls`
      ? n === `workspace` || i
        ? r.formatMessage({
            id: `settings.usage.billing.plugins.chartLabel`,
            defaultMessage: `Plugins called`,
            description: `Accessible label for the Consumer or enterprise plugin activity chart`,
          })
        : r.formatMessage({
            id: `settings.usage.billing.plugins.personalChartLabel`,
            defaultMessage: `Plugin calls`,
            description: `Accessible label for the Consumer or Business workspace member's plugin calls chart in Codex desktop analytics settings`,
          })
      : t === `uses`
        ? r.formatMessage({
            id: `settings.usage.billing.skills.chartLabel`,
            defaultMessage: `Skills used`,
            description: `Accessible label for the enterprise skill activity chart`,
          })
        : t === `turns` && i
          ? r.formatMessage({
              id: `settings.usage.billing.messages.chartLabel`,
              defaultMessage: `Messages`,
              description: `Accessible label for the Consumer message count chart`,
            })
          : r.formatMessage(
              {
                id: `settings.usage.billing.activity.chartLabel`,
                defaultMessage: `{unit, select, turns {Turns} lines {Lines of code} other {Usage}}`,
                description: `Accessible label for a chart showing conversation turns or lines of code added`,
              },
              { unit: t },
            ))
  );
}
var Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr = e(() => {
    ((Ur = q()),
      $e(),
      (Wr = t(r(), 1)),
      F(),
      Ut(),
      bt(),
      J(),
      S(),
      On(),
      Kn(),
      dr(),
      mr(),
      yr(),
      sr(),
      Dr(),
      Lr(),
      (Gr = K()),
      (Kr = 31),
      (qr = [
        `var(--color-chart-red)`,
        `var(--color-chart-yellow)`,
        `var(--color-chart-blue)`,
        `var(--color-text-tertiary)`,
      ]));
  });
function Yr(e) {
  let t = (0, ei.c)(34),
    { chart: n, metrics: r, consumerAnalytics: i, scope: o, status: s } = e,
    c = i !== void 0 && i,
    u = E(),
    d = n.key === `priorities`,
    f;
  if (t[0] !== n.fields || t[1] !== n.key || t[2] !== u || t[3] !== d || t[4] !== r) {
    let e = r?.data.map((e) => {
      let t = n.fields.reduce((t, n) => {
          let { field: r } = n;
          return t + e[r];
        }, 0),
        r = t;
      n.key === `reactions` ? (r = e.n_reactions) : d && (r = e.n_comments);
      let i = Object.fromEntries(
        n.fields.map((t) => {
          let { key: i, field: a } = t;
          return [i, n.key === `sentiment` && r > 0 ? (e[a] / r) * 100 : e[a]];
        }),
      );
      return (
        d && (i.other = Math.max(e.n_comments - t, 0)), { date: e.date, total: r, values: i }
      );
    });
    ((f =
      e == null || r == null
        ? void 0
        : {
            total: e.reduce($r, 0),
            dataFreshnessTimestamp: null,
            series: [
              ...n.fields.map((e) => {
                let { key: t, field: n } = e;
                return {
                  key: t,
                  name: u.formatMessage(
                    {
                      id: `settings.usage.billing.codeReview.series`,
                      defaultMessage: `{series, select, issues {Issues found} reviews {PRs reviewed} p0 {P0} p1 {P1} p2 {P2} plus1 {👍 reactions} minus1 {👎 reactions} other {Other reactions}}`,
                      description: `Localized legend or tooltip label for a Codex code review chart series: total issues, reviewed pull requests, P0 through P2 issue priorities, thumbs-up reactions, thumbs-down reactions, or other reactions`,
                    },
                    { series: t },
                  ),
                  total: r.data.reduce((e, t) => e + t[n], 0),
                };
              }),
              ...(d
                ? [
                    {
                      key: `other`,
                      name: u.formatMessage({
                        id: `settings.usage.billing.codeReview.priorityOther`,
                        defaultMessage: `Other`,
                        description: `Legend and tooltip label for Codex code review issues without a P0, P1, or P2 priority`,
                      }),
                      total: e.reduce(Qr, 0),
                    },
                  ]
                : []),
            ],
            data: e,
          }),
      (t[0] = n.fields),
      (t[1] = n.key),
      (t[2] = u),
      (t[3] = d),
      (t[4] = r),
      (t[5] = f));
  } else f = t[5];
  let p = f,
    m = `area`;
  d ? (m = `stacked-bar`) : (n.key === `issues` || n.key === `reviews`) && (m = `bar`);
  let h;
  t[6] !== n.key || t[7] !== u
    ? ((h = u.formatMessage(
        {
          id: `settings.usage.billing.codeReview.chartLabel`,
          defaultMessage: `{chart, select, issues {Issues found} reviews {PRs reviewed} priorities {Issues by priority} reactions {Reactions} sentiment {Reaction sentiment} other {Code review}}`,
          description: `Accessible label identifying a Codex code review analytics chart: issues found, pull requests reviewed, issues by priority, reactions, or reaction sentiment`,
        },
        { chart: n.key },
      )),
      (t[6] = n.key),
      (t[7] = u),
      (t[8] = h))
    : (h = t[8]);
  let g = n.key === `sentiment`,
    _;
  t[9] !== n.key || t[10] !== u || t[11] !== r
    ? ((_ =
        n.key === `sentiment` && r != null
          ? (0, ti.jsx)(a, {
              id: `settings.usage.billing.codeReview.sentiment.summary`,
              defaultMessage: `{percentage} positive`,
              description: `Summary below the reaction sentiment chart title showing the percentage of positive Codex code review reactions during the selected period`,
              values: {
                percentage: u.formatNumber(r.data.reduce(Zr, 0) / r.data.reduce(Xr, 0), {
                  maximumFractionDigits: 0,
                  style: `percent`,
                }),
              },
            })
          : void 0),
      (t[9] = n.key),
      (t[10] = u),
      (t[11] = r),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === n.key
    ? (v = t[14])
    : ((v = (0, ti.jsx)(a, {
        id: `settings.usage.billing.codeReview.chart.title`,
        defaultMessage: `{chart, select, issues {Issues found} reviews {PRs reviewed} priorities {Issues by priority} reactions {Reactions} sentiment {Reaction sentiment} other {Code review}}`,
        description: `Title of a desktop Codex code review analytics chart: issues found, pull requests reviewed, issues by priority, reactions, or reaction sentiment`,
        values: { chart: n.key },
      })),
      (t[13] = n.key),
      (t[14] = v));
  let b;
  t[15] !== n.key || t[16] !== c || t[17] !== u || t[18] !== d
    ? ((b =
        c || d
          ? null
          : (0, ti.jsx)(y, {
              tooltipContent: (0, ti.jsx)(a, {
                id: `settings.usage.billing.codeReview.chart.info`,
                defaultMessage: `{chart, select, issues {Issues found by Codex code review during the selected time period} reviews {Pull requests reviewed by Codex during the selected time period} priorities {Issues found by Codex code review grouped by priority during the selected time period} reactions {Reactions to Codex code review comments during the selected time period} sentiment {Share of code review reactions grouped by reaction type during the selected time period} other {Code review activity during the selected time period}}`,
                description: `Information tooltip explaining what the selected Codex code review analytics chart measures: issues found, reviewed pull requests, issues grouped by priority, reactions, or reaction sentiment`,
                values: { chart: n.key },
              }),
              children: (0, ti.jsx)(`button`, {
                "aria-label": u.formatMessage(
                  {
                    id: `settings.usage.billing.codeReview.chart.infoLabel`,
                    defaultMessage: `{chart, select, issues {More information about issues found} reviews {More information about PRs reviewed} priorities {More information about issues by priority} reactions {More information about reactions} sentiment {More information about reaction sentiment} other {More information about code review}}`,
                    description: `Accessible label for the information button explaining a Codex code review analytics chart: issues found, reviewed pull requests, issues by priority, reactions, or reaction sentiment`,
                  },
                  { chart: n.key },
                ),
                className: `cursor-interaction text-tertiary`,
                type: `button`,
                children: (0, ti.jsx)(ge, { asset: l }),
              }),
            })),
      (t[15] = n.key),
      (t[16] = c),
      (t[17] = u),
      (t[18] = d),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== v || t[21] !== b
    ? ((x = (0, ti.jsxs)(`span`, {
        className: `inline-flex items-center gap-1`,
        children: [v, b],
      })),
      (t[20] = v),
      (t[21] = b),
      (t[22] = x))
    : (x = t[22]);
  let S;
  return (
    t[23] !== n.unit ||
    t[24] !== c ||
    t[25] !== p ||
    t[26] !== o ||
    t[27] !== s ||
    t[28] !== h ||
    t[29] !== g ||
    t[30] !== _ ||
    t[31] !== x ||
    t[32] !== m
      ? ((S = (0, ti.jsx)(Rr, {
          consumerAnalytics: c,
          ariaLabel: h,
          data: p,
          hideTotal: g,
          scope: o,
          status: s,
          totalLabel: _,
          title: x,
          unit: n.unit,
          visualization: m,
        })),
        (t[23] = n.unit),
        (t[24] = c),
        (t[25] = p),
        (t[26] = o),
        (t[27] = s),
        (t[28] = h),
        (t[29] = g),
        (t[30] = _),
        (t[31] = x),
        (t[32] = m),
        (t[33] = S))
      : (S = t[33]),
    S
  );
}
function Xr(e, t) {
  return e + t.n_reactions;
}
function Zr(e, t) {
  return e + t.n_reactions_plus1;
}
function Qr(e, t) {
  return e + (t.values.other ?? 0);
}
function $r(e, t) {
  return e + t.total;
}
var ei,
  ti,
  ni = e(() => {
    ((ei = q()), f(), F(), pe(), g(), Jr(), (ti = K()));
  });
function ri(e) {
  return ii.filter(
    ({ key: t }) =>
      (t !== `reactions` && t !== `sentiment`) ||
      e == null ||
      e.data.some(({ n_reactions: e }) => e > 0),
  );
}
var ii,
  ai = e(() => {
    ii = [
      { key: `issues`, unit: `issues`, fields: [{ key: `issues`, field: `n_comments` }] },
      { key: `reviews`, unit: `reviews`, fields: [{ key: `reviews`, field: `n_reviews` }] },
      {
        key: `priorities`,
        unit: `issues`,
        fields: [
          { key: `p0`, field: `n_comments_p0` },
          { key: `p1`, field: `n_comments_p1` },
          { key: `p2`, field: `n_comments_p2` },
        ],
      },
      {
        key: `reactions`,
        unit: `reactions`,
        fields: [
          { key: `plus1`, field: `n_reactions_plus1` },
          { key: `minus1`, field: `n_reactions_minus1` },
          { key: `other`, field: `n_reactions_other` },
        ],
      },
      {
        key: `sentiment`,
        unit: `percent`,
        fields: [
          { key: `plus1`, field: `n_reactions_plus1` },
          { key: `minus1`, field: `n_reactions_minus1` },
          { key: `other`, field: `n_reactions_other` },
        ],
      },
    ];
  });
function oi(e) {
  let t = (0, ci.c)(34),
    { isActive: n, reduceMotion: r, scope: i } = e,
    o = He(i === `consumer` && `393259752`),
    s = i === `consumer` && o,
    c = fe(),
    l = E(),
    [u, d] = (0, li.useState)(30),
    [f, p] = (0, li.useState)(null),
    m;
  t[0] !== c || t[1] !== u || t[2] !== n || t[3] !== i
    ? ((m = gt({ auth: c, days: u, enabled: n, scope: i })),
      (t[0] = c),
      (t[1] = u),
      (t[2] = n),
      (t[3] = i),
      (t[4] = m))
    : (m = t[4]);
  let { data: h, isError: g, isLoading: _, refetch: v } = N(m),
    y =
      _ &&
      !g &&
      h == null &&
      f?.accountId === (c.accountId ?? null) &&
      f.userId === (c.userId ?? null),
    b = y ? f.data : h,
    x =
      !r &&
      h != null &&
      f?.accountId === (c.accountId ?? null) &&
      f.userId === (c.userId ?? null) &&
      f.data !== h,
    S;
  t[5] === v
    ? (S = t[6])
    : ((S = () => {
        v();
      }),
      (t[5] = v),
      (t[6] = S));
  let C;
  t[7] !== y || t[8] !== g || t[9] !== _ || t[10] !== r || t[11] !== x || t[12] !== S
    ? ((C = {
        animateDataChanges: x,
        isError: g,
        isLoading: _,
        isUpdating: y,
        reduceMotion: r,
        onRetry: S,
      }),
      (t[7] = y),
      (t[8] = g),
      (t[9] = _),
      (t[10] = r),
      (t[11] = x),
      (t[12] = S),
      (t[13] = C))
    : (C = t[13]);
  let w = C,
    T;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, ui.jsx)(a, {
        id: `settings.usage.billing.codeReview.title`,
        defaultMessage: `Code review`,
        description: `Heading for analytics about the account holder's Codex code reviews, discovered issues, and reactions`,
      })),
      (t[14] = T))
    : (T = t[14]);
  let D;
  t[15] === l
    ? (D = t[16])
    : ((D = l.formatMessage({
        id: `settings.usage.billing.codeReview.periodLabel`,
        defaultMessage: `Code review time range`,
        description: `Accessible label for the seven-day or thirty-day date-range selector shared by all desktop Codex code review analytics charts`,
      })),
      (t[15] = l),
      (t[16] = D));
  let O;
  t[17] !== c || t[18] !== b
    ? ((O = (e) => {
        (p(
          b?.data.some(si)
            ? { accountId: c.accountId ?? null, data: b, userId: c.userId ?? null }
            : null,
        ),
          d(e));
      }),
      (t[17] = c),
      (t[18] = b),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== u || t[21] !== D || t[22] !== O
    ? ((k = (0, ui.jsx)(B.Header, {
        actionsAlignment: `end`,
        title: T,
        actions: (0, ui.jsx)(mn, { ariaLabel: D, days: u, onChange: O }),
      })),
      (t[20] = u),
      (t[21] = D),
      (t[22] = O),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] !== s || t[25] !== b || t[26] !== i || t[27] !== w
    ? ((A = ri(b).map((e) =>
        (0, ui.jsx)(Yr, { consumerAnalytics: s, chart: e, metrics: b, scope: i, status: w }, e.key),
      )),
      (t[24] = s),
      (t[25] = b),
      (t[26] = i),
      (t[27] = w),
      (t[28] = A))
    : (A = t[28]);
  let j;
  t[29] === A
    ? (j = t[30])
    : ((j = (0, ui.jsx)(B.Content, { className: `gap-3`, children: A })), (t[29] = A), (t[30] = j));
  let M;
  return (
    t[31] !== j || t[32] !== k
      ? ((M = (0, ui.jsxs)(B, { children: [k, j] })), (t[31] = j), (t[32] = k), (t[33] = M))
      : (M = t[33]),
    M
  );
}
function si(e) {
  let { n_comments: t, n_reactions: n, n_reviews: r } = e;
  return t > 0 || n > 0 || r > 0;
}
var ci,
  li,
  ui,
  di = e(() => {
    ((ci = q()), ze(), (li = t(r(), 1)), F(), We(), bt(), k(), V(), Sn(), ni(), ai(), (ui = K()));
  });
function fi({
  current: e,
  days: t,
  enabled: n,
  fallback: r = [],
  hasManualSelection: i,
  hasResolved: a,
}) {
  let o =
    n &&
    t === 7 &&
    !i &&
    !a &&
    e.length > 0 &&
    e.every(({ isError: e, isLoading: t, total: n }) => !e && !t && n === 0);
  if (!o || r.length === 0)
    return { shouldProbe: o, shouldResolve: !1, shouldSelectThirtyDays: !1 };
  let s = r.some(({ total: e }) => (e ?? 0) > 0);
  return {
    shouldProbe: o,
    shouldResolve: s || r.every(({ isError: e, isLoading: t, total: n }) => e || (!t && n != null)),
    shouldSelectThirtyDays: s,
  };
}
var pi = e(() => {});
function mi(e) {
  let t = (0, vi.c)(96),
    { isActive: n, reduceMotion: r, consumerAnalytics: i, scope: o } = e,
    s = i !== void 0 && i,
    c = fe(),
    l = E(),
    [u, d] = (0, yi.useState)(7),
    [f, p] = (0, yi.useState)(`model`),
    [m, h] = (0, yi.useState)(null),
    g = c.accountId ?? null,
    _ = c.userId ?? null,
    v;
  t[0] !== o || t[1] !== g || t[2] !== _
    ? ((v = { accountId: g, userId: _, scope: o, hasManualSelection: !1, hasResolved: !1 }),
      (t[0] = o),
      (t[1] = g),
      (t[2] = _),
      (t[3] = v))
    : (v = t[3]);
  let [y, b] = (0, yi.useState)(v),
    x = y.accountId === (c.accountId ?? null) && y.userId === (c.userId ?? null) && y.scope === o;
  x ||
    (b({
      accountId: c.accountId ?? null,
      userId: c.userId ?? null,
      scope: o,
      hasManualSelection: !1,
      hasResolved: !1,
    }),
    d(7),
    h(null));
  let [S, C] = (0, yi.useState)(!1),
    w;
  t[4] !== c || t[5] !== u || t[6] !== n || t[7] !== o
    ? ((w = mt({ auth: c, days: u, enabled: n, scope: o })),
      (t[4] = c),
      (t[5] = u),
      (t[6] = n),
      (t[7] = o),
      (t[8] = w))
    : (w = t[8]);
  let { data: T, isLoading: D, isError: O, refetch: k } = N(w),
    A;
  t[9] !== c || t[10] !== u || t[11] !== n || t[12] !== o
    ? ((A = vt({ auth: c, days: u, enabled: n, scope: o })),
      (t[9] = c),
      (t[10] = u),
      (t[11] = n),
      (t[12] = o),
      (t[13] = A))
    : (A = t[13]);
  let { data: j, isLoading: M, isError: P, refetch: F } = N(A),
    I = {
      current: [
        { total: T?.byModel.total, isLoading: D, isError: O },
        ...(o === `business` ? [{ total: j?.total, isLoading: M, isError: P }] : []),
      ],
      days: u,
      enabled: n && x,
      ...y,
    },
    { shouldProbe: L } = fi(I),
    { data: R, isLoading: ee, isError: z } = N(mt({ auth: c, days: 30, enabled: L, scope: o })),
    te = L && o === `business` && !ee && !z && R?.byModel.total === 0,
    { data: ne, isLoading: re, isError: ie } = N(vt({ auth: c, days: 30, enabled: te, scope: o })),
    ae = fi({
      ...I,
      fallback: [
        { total: R?.byModel.total, isLoading: ee, isError: z },
        ...(te ? [{ total: ne?.total, isLoading: re, isError: ie }] : []),
      ],
    }),
    oe = (L && !ae.shouldResolve) || (o === `business` && M && !O);
  ae.shouldResolve && (b(gi), ae.shouldSelectThirtyDays && d(30));
  let [V, se] = (0, yi.useState)(null),
    ce = V?.accountId === (c.accountId ?? null) && V.userId === (c.userId ?? null),
    le = D && !O && T == null && ce && V.data.turns != null,
    ue = M && !P && j == null && ce && V.data.linesOfCode != null,
    de = le ? V.data.turns : T,
    H = ue ? V.data.linesOfCode : j,
    U = de?.[f === `model` ? `byModel` : `bySurface`],
    W =
      ce &&
      (V.data.turns?.[f === `model` ? `byModel` : `bySurface`].total ?? 0) > 0 &&
      U?.total === 0,
    pe = ce && (V.data.linesOfCode?.total ?? 0) > 0 && H?.total === 0,
    G,
    me;
  t[14] === s
    ? ((G = t[15]), (me = t[16]))
    : ((G = s
        ? (0, bi.jsx)(a, {
            id: `settings.usage.billing.messages.sectionTitle`,
            defaultMessage: `Messages`,
            description: `Heading for the Consumer message count section`,
          })
        : (0, bi.jsx)(a, {
            id: `settings.usage.billing.productActivity.title`,
            defaultMessage: `Product activity`,
            description: `Heading for a Consumer or Business user's Codex conversation turns and, when available to Business users, lines of code`,
          })),
      (me = s
        ? (0, bi.jsx)(a, {
            id: `settings.usage.billing.messages.subtitle`,
            defaultMessage: `Track the number of messages sent over time`,
            description: `Description for Consumer message counts grouped by model or product surface`,
          })
        : (0, bi.jsx)(a, {
            id: `settings.usage.billing.productActivity.subtitle`,
            defaultMessage: `See how your activity varies across products and models`,
            description: `Description for Codex activity charts showing personal conversation turns and eligible lines of code grouped by product surface or AI model`,
          })),
      (t[14] = s),
      (t[15] = G),
      (t[16] = me));
  let he;
  t[17] !== s || t[18] !== l
    ? ((he = s
        ? l.formatMessage({
            id: `settings.usage.billing.messages.periodLabel`,
            defaultMessage: `Messages time range`,
            description: `Accessible label for the Consumer message count date-range selector`,
          })
        : l.formatMessage({
            id: `settings.usage.billing.turns.periodLabel`,
            defaultMessage: `Turns and lines of code time range`,
            description: `Accessible label for the shared seven-day or thirty-day time range used by the turns and lines-of-code charts`,
          })),
      (t[17] = s),
      (t[18] = l),
      (t[19] = he))
    : (he = t[19]);
  let ge;
  t[20] !== c.accountId || t[21] !== c.userId || t[22] !== H || t[23] !== U?.total || t[24] !== de
    ? ((ge = (e) => {
        (C(de != null && U?.total === 0),
          se(
            (U?.total ?? 0) > 0 || (H?.total ?? 0) > 0
              ? {
                  accountId: c.accountId ?? null,
                  data: { turns: de, linesOfCode: H },
                  userId: c.userId ?? null,
                }
              : null,
          ),
          b(hi),
          d(e));
      }),
      (t[20] = c.accountId),
      (t[21] = c.userId),
      (t[22] = H),
      (t[23] = U?.total),
      (t[24] = de),
      (t[25] = ge))
    : (ge = t[25]);
  let K;
  t[26] !== u || t[27] !== ge || t[28] !== he
    ? ((K = (0, bi.jsx)(mn, { ariaLabel: he, days: u, onChange: ge })),
      (t[26] = u),
      (t[27] = ge),
      (t[28] = he),
      (t[29] = K))
    : (K = t[29]);
  let _e;
  t[30] !== s || t[31] !== l
    ? ((_e = s
        ? l.formatMessage({
            id: `settings.usage.billing.messages.breakdownLabel`,
            defaultMessage: `Group messages by model or surface`,
            description: `Accessible label for grouping Consumer messages by AI model or Codex product surface`,
          })
        : l.formatMessage({
            id: `settings.usage.billing.turns.breakdownLabel`,
            defaultMessage: `Group turns by model or surface`,
            description: `Accessible label for the selector that groups the turns chart by AI model or Codex product surface`,
          })),
      (t[30] = s),
      (t[31] = l),
      (t[32] = _e))
    : (_e = t[32]);
  let ve;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = { id: `model`, label: (0, bi.jsx)(pn, { breakdown: `model` }) }), (t[33] = ve))
    : (ve = t[33]);
  let ye;
  t[34] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = [ve, { id: `surface`, label: (0, bi.jsx)(pn, { breakdown: `surface` }) }]),
      (t[34] = ye))
    : (ye = t[34]);
  let be;
  t[35] === f
    ? (be = t[36])
    : ((be = (e) => {
        (h(f), p(e));
      }),
      (t[35] = f),
      (t[36] = be));
  let xe;
  t[37] !== f || t[38] !== _e || t[39] !== be
    ? ((xe = (0, bi.jsx)(lt, {
        ariaLabel: _e,
        options: ye,
        selectedId: f,
        variant: `inset`,
        onSelect: be,
      })),
      (t[37] = f),
      (t[38] = _e),
      (t[39] = be),
      (t[40] = xe))
    : (xe = t[40]);
  let Se;
  t[41] !== K || t[42] !== xe
    ? ((Se = (0, bi.jsxs)(`div`, {
        className: `flex flex-wrap items-center justify-end gap-2`,
        children: [K, xe],
      })),
      (t[41] = K),
      (t[42] = xe),
      (t[43] = Se))
    : (Se = t[43]);
  let Ce;
  t[44] !== Se || t[45] !== G || t[46] !== me
    ? ((Ce = (0, bi.jsx)(B.Header, {
        className: `max-sm:flex-col max-sm:items-stretch`,
        actionsAlignment: `end`,
        title: G,
        subtitle: me,
        actions: Se,
      })),
      (t[44] = Se),
      (t[45] = G),
      (t[46] = me),
      (t[47] = Ce))
    : (Ce = t[47]);
  let q;
  t[48] !== s || t[49] !== H?.total || t[50] !== de || t[51] !== D || t[52] !== S || t[53] !== o
    ? ((q =
        de != null || (D && S)
          ? (0, bi.jsx)(_i, { consumerAnalytics: s, scope: o, hasNoLinesOfCode: H?.total === 0 })
          : void 0),
      (t[48] = s),
      (t[49] = H?.total),
      (t[50] = de),
      (t[51] = D),
      (t[52] = S),
      (t[53] = o),
      (t[54] = q))
    : (q = t[54]);
  let we =
      !r &&
      ((m != null && m !== f) || (T != null && ce && V.data.turns != null && V.data.turns !== T)),
    Te = D || oe,
    Ee;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = () => h(null)), (t[55] = Ee))
    : (Ee = t[55]);
  let De;
  t[56] === k
    ? (De = t[57])
    : ((De = () => {
        k();
      }),
      (t[56] = k),
      (t[57] = De));
  let J;
  t[58] !== O ||
  t[59] !== le ||
  t[60] !== S ||
  t[61] !== r ||
  t[62] !== we ||
  t[63] !== Te ||
  t[64] !== De
    ? ((J = {
        animateDataChanges: we,
        isError: O,
        isLoading: Te,
        isUpdating: le,
        preserveEmptyLayout: S,
        reduceMotion: r,
        onAnimationEnd: Ee,
        onRetry: De,
      }),
      (t[58] = O),
      (t[59] = le),
      (t[60] = S),
      (t[61] = r),
      (t[62] = we),
      (t[63] = Te),
      (t[64] = De),
      (t[65] = J))
    : (J = t[65]);
  let Oe;
  t[66] === s
    ? (Oe = t[67])
    : ((Oe = s
        ? (0, bi.jsx)(a, {
            id: `settings.usage.billing.messages.title`,
            defaultMessage: `Messages`,
            description: `Metric label for the Consumer message count chart; the underlying conversation-turn count is unchanged`,
          })
        : (0, bi.jsx)(a, {
            id: `settings.usage.billing.turns.title`,
            defaultMessage: `Turns`,
            description: `Label for the chart showing the number of Codex conversation turns`,
          })),
      (t[66] = s),
      (t[67] = Oe));
  let ke;
  t[68] !== f ||
  t[69] !== s ||
  t[70] !== U ||
  t[71] !== W ||
  t[72] !== o ||
  t[73] !== q ||
  t[74] !== J ||
  t[75] !== Oe
    ? ((ke = (0, bi.jsx)(Rr, {
        consumerAnalytics: s,
        breakdown: f,
        data: U,
        emptyMessage: q,
        preservePopulatedCardLayout: W,
        scope: o,
        status: J,
        title: Oe,
        unit: `turns`,
      })),
      (t[68] = f),
      (t[69] = s),
      (t[70] = U),
      (t[71] = W),
      (t[72] = o),
      (t[73] = q),
      (t[74] = J),
      (t[75] = Oe),
      (t[76] = ke))
    : (ke = t[76]);
  let Ae;
  t[77] !== s ||
  t[78] !== H ||
  t[79] !== P ||
  t[80] !== M ||
  t[81] !== ue ||
  t[82] !== j ||
  t[83] !== pe ||
  t[84] !== V ||
  t[85] !== ce ||
  t[86] !== r ||
  t[87] !== F ||
  t[88] !== o
    ? ((Ae =
        o === `business` && ((H?.total ?? 0) > 0 || pe || P)
          ? (0, bi.jsx)(Rr, {
              consumerAnalytics: s,
              data: H,
              emptyMessage: (0, bi.jsx)(a, {
                id: `settings.usage.billing.linesOfCode.empty`,
                defaultMessage: `No lines of code during this period`,
                description: `Empty state for a Business user's lines-of-code chart when the selected period has no lines of code after a previously populated period`,
              }),
              preservePopulatedCardLayout: pe,
              scope: o,
              status: {
                animateDataChanges:
                  !r && j != null && ce && V.data.linesOfCode != null && V.data.linesOfCode !== j,
                isError: P,
                isLoading: M,
                isUpdating: ue,
                reduceMotion: r,
                onRetry: () => {
                  F();
                },
              },
              title: (0, bi.jsx)(a, {
                id: `settings.usage.billing.linesOfCode.title`,
                defaultMessage: `Lines of code`,
                description: `Label for the chart showing lines of code added through Codex during the selected time range`,
              }),
              unit: `lines`,
            })
          : null),
      (t[77] = s),
      (t[78] = H),
      (t[79] = P),
      (t[80] = M),
      (t[81] = ue),
      (t[82] = j),
      (t[83] = pe),
      (t[84] = V),
      (t[85] = ce),
      (t[86] = r),
      (t[87] = F),
      (t[88] = o),
      (t[89] = Ae))
    : (Ae = t[89]);
  let je;
  t[90] !== ke || t[91] !== Ae
    ? ((je = (0, bi.jsxs)(B.Content, { className: `gap-3`, children: [ke, Ae] })),
      (t[90] = ke),
      (t[91] = Ae),
      (t[92] = je))
    : (je = t[92]);
  let Me;
  return (
    t[93] !== Ce || t[94] !== je
      ? ((Me = (0, bi.jsxs)(B, { children: [Ce, je] })), (t[93] = Ce), (t[94] = je), (t[95] = Me))
      : (Me = t[95]),
    Me
  );
}
function hi(e) {
  return { ...e, hasManualSelection: !0 };
}
function gi(e) {
  return { ...e, hasResolved: !0 };
}
function _i(e) {
  let t = (0, vi.c)(3),
    { consumerAnalytics: n, scope: r, hasNoLinesOfCode: i } = e;
  if (n !== void 0 && n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, bi.jsx)(a, {
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
        ? ((e = (0, bi.jsx)(a, {
            id: `settings.usage.billing.productActivity.empty`,
            defaultMessage: `No turns or lines of code during this period`,
            description: `Empty state for a Business user's product activity section when there were no conversation turns and no lines of code during the selected period`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let o;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, bi.jsx)(a, {
          id: `settings.usage.billing.turns.empty`,
          defaultMessage: `No turns during this period`,
          description: `Empty state for a Consumer or Business user's conversation-turns chart during the selected period`,
        })),
        (t[2] = o))
      : (o = t[2]),
    o
  );
}
var vi,
  yi,
  bi,
  xi = e(() => {
    ((vi = q()), ze(), (yi = t(r(), 1)), F(), We(), ct(), bt(), k(), Sn(), pi(), Jr(), (bi = K()));
  }),
  Si,
  Ci = e(() => {
    (F(),
      (Si = Xe({
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
        cli: {
          id: `settings.usage.surface.cli`,
          defaultMessage: `CLI`,
          description: `CLI usage surface`,
        },
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
        sdk: {
          id: `settings.usage.surface.sdk`,
          defaultMessage: `SDK`,
          description: `SDK usage surface`,
        },
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
  });
function wi({
  breakdown: e,
  data: t,
  intl: n,
  isPersonalUsage: r,
  scope: i,
  consumerAnalytics: a,
}) {
  let o = t != null && `bucketTotals` in t,
    s = [`codex`, `work`, ...Object.keys(Si)],
    c = (
      o
        ? t.series
        : [...(t?.series ?? [])].sort((t, n) =>
            i !== `workspace` && (t.key === `other` || n.key === `other`)
              ? Number(t.key === `other`) - Number(n.key === `other`)
              : i !== `workspace` && e === `product`
                ? s.indexOf(t.key) - s.indexOf(n.key)
                : n.total - t.total,
          )
    )
      .map(({ key: t, label: r, total: s }, c) => {
        if (o) return { key: t, name: r, total: s, color: Di[c % Di.length] };
        let l = a ? ve[c % ve.length] : void 0;
        return {
          key: t,
          name: i !== `workspace` && Ei(t) ? n.formatMessage(Si[t]) : Ti(t, r, e, n, i),
          total: s,
          color:
            i !== `workspace` && e === `product` && (t === `codex` || t === `work`)
              ? ve[+(t === `work`)]
              : l,
        };
      })
      .filter(({ key: e, total: n }) =>
        a ? t?.data.some((t) => (t.values[e] ?? 0) !== 0) : n > 0,
      ),
    l = !r && c.length > 3 ? c.filter(({ key: e }) => e !== `other`).slice(0, 3) : c,
    u = c.filter(({ key: e }) => !l.some((t) => t.key === e));
  return {
    availableSeries: c,
    barSeries:
      u.length === 0
        ? l
        : [
            ...l,
            {
              color: a ? xr(l) : void 0,
              key: Tr,
              name: n.formatMessage({
                id: `settings.usage.billing.history.other`,
                defaultMessage: `Other`,
                description: `Combined usage from models or surfaces outside the three most-used categories`,
              }),
            },
          ],
    otherSeries: u,
    otherSeriesKeys: u.map(({ key: e }) => e),
  };
}
function Ti(e, t, n, r, i) {
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
      return i === `workspace` ? t : e === `other` ? r.formatMessage(Si.other) : Be(t);
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
function Ei(e) {
  return Object.hasOwn(Si, e);
}
var Di,
  Oi = e(() => {
    (ce(),
      S(),
      Ci(),
      Dr(),
      (Di = [
        ...ve,
        `var(--color-chart-yellow)`,
        `var(--color-chart-red)`,
        `var(--color-chart-purple)`,
        `var(--color-text-tertiary)`,
      ]));
  });
function ki(e) {
  let t = (0, Pi.c)(257),
    {
      actions: n,
      ariaLabel: r,
      barSize: i,
      breakdown: o,
      data: s,
      estimatedSpendUsd: c,
      hideTotal: l,
      isPersonalUsage: u,
      preservePopulatedCardLayout: d,
      consumerAnalytics: f,
      scope: p,
      status: m,
      title: h,
    } = e,
    g = u !== void 0 && u,
    _ = d !== void 0 && d,
    v = f !== void 0 && f,
    y = E(),
    b = s != null && `bucketTotals` in s ? s : void 0,
    x = (0, Ii.useId)(),
    [S, C] = (0, Ii.useState)(null),
    [w, T] = (0, Ii.useState)(!1),
    [D, O] = (0, Ii.useState)(null),
    k;
  t[0] !== s?.series || t[1] !== S || t[2] !== g || t[3] !== p
    ? ((k =
        g &&
        p !== `workspace` &&
        S != null &&
        !s?.series.some((e) => {
          let { key: t } = e;
          return t === S;
        })
          ? null
          : S),
      (t[0] = s?.series),
      (t[1] = S),
      (t[2] = g),
      (t[3] = p),
      (t[4] = k))
    : (k = t[4]);
  let A = k,
    [j, M] = (0, Ii.useState)(null),
    [N, P] = (0, Ii.useState)(null),
    F = s?.total ?? 0,
    I = b != null || (g && (s == null || !(`units` in s) || s.units !== `credits`)),
    L = c == null || F <= 0 ? null : c / F,
    R;
  t[5] !== o || t[6] !== v || t[7] !== s || t[8] !== y || t[9] !== g || t[10] !== p
    ? ((R = wi({
        breakdown: o,
        data: s,
        intl: y,
        isPersonalUsage: g,
        scope: p,
        consumerAnalytics: v,
      })),
      (t[5] = o),
      (t[6] = v),
      (t[7] = s),
      (t[8] = y),
      (t[9] = g),
      (t[10] = p),
      (t[11] = R))
    : (R = t[11]);
  let { availableSeries: ee, barSeries: z, otherSeries: te, otherSeriesKeys: ne } = R,
    re;
  t[12] !== z || t[13] !== p || t[14] !== j
    ? ((re =
        p !== `workspace` &&
        j != null &&
        !z.some((e) => {
          let { key: t } = e;
          return !j.has(t);
        })
          ? null
          : j),
      (t[12] = z),
      (t[13] = p),
      (t[14] = j),
      (t[15] = re))
    : (re = t[15]);
  let ie = re,
    ae;
  t[16] !== z || t[17] !== v || t[18] !== ie || t[19] !== j
    ? ((ae = v ? Sr(j, z) : ie), (t[16] = z), (t[17] = v), (t[18] = ie), (t[19] = j), (t[20] = ae))
    : (ae = t[20]);
  let B = ae,
    oe = N != null && N.history === s && N.series === (v ? j : B),
    V;
  t[21] !== z ||
  t[22] !== v ||
  t[23] !== B ||
  t[24] !== oe ||
  t[25] !== b ||
  t[26] !== N ||
  t[27] !== m.reduceMotion
    ? ((V =
        v && b != null
          ? b.data.map(
              (e, t) =>
                (0, Fi.default)(z, (n) => {
                  let { key: r } = n;
                  return (
                    (!B?.has(r) || (!m.reduceMotion && oe && N.topSeriesKeys?.[t] === r)) &&
                    (e.values[r] ?? 0) > 0
                  );
                })?.key,
            )
          : void 0),
      (t[21] = z),
      (t[22] = v),
      (t[23] = B),
      (t[24] = oe),
      (t[25] = b),
      (t[26] = N),
      (t[27] = m.reduceMotion),
      (t[28] = V))
    : (V = t[28]);
  let se = V,
    ce;
  t[29] !== ee || t[30] !== z || t[31] !== s || t[32] !== B
    ? ((ce =
        s?.total == null
          ? void 0
          : s.total -
            ee.reduce(
              (e, t) =>
                B?.has(
                  z.some((e) => {
                    let { key: n } = e;
                    return n === t.key;
                  })
                    ? t.key
                    : `__other_usage_series__`,
                )
                  ? e + t.total
                  : e,
              0,
            )),
      (t[29] = ee),
      (t[30] = z),
      (t[31] = s),
      (t[32] = B),
      (t[33] = ce))
    : (ce = t[33]);
  let le = ce,
    ue;
  t[34] !== s?.data || t[35] !== b
    ? ((ue = s?.data.reduce(
        (e, t) =>
          Math.max(
            e,
            b == null ? Object.values(t.values).reduce(Mi, 0) : (b.bucketTotals[t.date] ?? 0),
          ),
        0,
      )),
      (t[34] = s?.data),
      (t[35] = b),
      (t[36] = ue))
    : (ue = t[36]);
  let de = ue,
    fe;
  t[37] === b
    ? (fe = t[38])
    : ((fe = b?.data.every((e) => {
        let { date: t } = e;
        return b.bucketTotals[t] != null;
      })
        ? b.data.reduce((e, t) => {
            let { date: n } = t;
            return e + (b.bucketTotals[n] ?? 0);
          }, 0)
        : 0),
      (t[37] = b),
      (t[38] = fe));
  let H = fe,
    U = b?.data[0]?.date,
    W;
  t[39] === b?.data ? (W = t[40]) : ((W = b?.data.at(-1)?.date), (t[39] = b?.data), (t[40] = W));
  let pe = W,
    G,
    me,
    he,
    ge,
    K,
    _e,
    ye,
    be,
    xe,
    Se,
    Ce,
    q,
    we,
    Te,
    Ee,
    De,
    J,
    Oe,
    ke,
    Ae,
    je,
    Me,
    Ne,
    Pe,
    Fe,
    Ie,
    Le,
    Re,
    ze,
    Be,
    Ve,
    He,
    Ue,
    We,
    Ge,
    Ke,
    qe,
    Je,
    Ye,
    Xe,
    Ze,
    Qe,
    $e,
    et;
  if (
    t[41] !== n ||
    t[42] !== A ||
    t[43] !== r ||
    t[44] !== z ||
    t[45] !== i ||
    t[46] !== v ||
    t[47] !== s ||
    t[48] !== c ||
    t[49] !== U ||
    t[50] !== B ||
    t[51] !== l ||
    t[52] !== y ||
    t[53] !== g ||
    t[54] !== I ||
    t[55] !== oe ||
    t[56] !== w ||
    t[57] !== pe ||
    t[58] !== de ||
    t[59] !== te ||
    t[60] !== ne ||
    t[61] !== H ||
    t[62] !== _ ||
    t[63] !== b ||
    t[64] !== N ||
    t[65] !== p ||
    t[66] !== x ||
    t[67] !== m ||
    t[68] !== j ||
    t[69] !== h ||
    t[70] !== se ||
    t[71] !== F ||
    t[72] !== L ||
    t[73] !== le
  ) {
    let e;
    (t[118] !== U || t[119] !== y || t[120] !== pe || t[121] !== H || t[122] !== b
      ? ((e = (e) =>
          b == null || H <= 0 || U == null || pe == null
            ? e
            : {
                ...e,
                tooltip: (0, Li.jsx)(a, {
                  id: `settings.usage.billing.chart.legend.totalUsagePeriodSummary`,
                  defaultMessage: `{series} · {share} of total usage · {period} UTC`,
                  description: `Tooltip for a usage chart legend item, showing its share of all plan and purchased-credit usage in the selected UTC period. Hiding series does not change this denominator`,
                  values: {
                    series: e.name,
                    share: y.formatNumber((e.total ?? 0) / H, {
                      style: `percent`,
                      maximumFractionDigits: 1,
                    }),
                    period: y.formatDateTimeRange(
                      new Date(`${U}T00:00:00Z`),
                      new Date(`${pe}T00:00:00Z`),
                      {
                        month: `short`,
                        day: `numeric`,
                        year: `numeric`,
                        timeZone: `UTC`,
                      },
                    ),
                  },
                }),
              }),
        (t[118] = U),
        (t[119] = y),
        (t[120] = pe),
        (t[121] = H),
        (t[122] = b),
        (t[123] = e))
      : (e = t[123]),
      (ye = z.map(e)));
    let { onAnimationEnd: o } = m,
      u;
    t[124] !== o || t[125] !== N
      ? ((u = () => {
          (o?.(), P((e) => (e === N ? null : e)));
        }),
        (t[124] = o),
        (t[125] = N),
        (t[126] = u))
      : (u = t[126]);
    let d = u,
      f;
    t[127] === o
      ? (f = t[128])
      : ((f = () => {
          (P(null), o?.());
        }),
        (t[127] = o),
        (t[128] = f));
    let S = f,
      E;
    t[129] !== s || t[130] !== se
      ? ((E = (e) => {
          (P(s == null ? null : { history: s, series: e, topSeriesKeys: se }), M(e));
        }),
        (t[129] = s),
        (t[130] = se),
        (t[131] = E))
      : (E = t[131]);
    let D = E,
      k;
    if (
      t[132] !== z ||
      t[133] !== v ||
      t[134] !== d ||
      t[135] !== S ||
      t[136] !== B ||
      t[137] !== g ||
      t[138] !== oe ||
      t[139] !== te ||
      t[140] !== ne ||
      t[141] !== p ||
      t[142] !== x ||
      t[143] !== m.animateDataChanges ||
      t[144] !== m.reduceMotion ||
      t[145] !== se
    ) {
      let e;
      (t[147] !== v ||
      t[148] !== d ||
      t[149] !== S ||
      t[150] !== B ||
      t[151] !== g ||
      t[152] !== oe ||
      t[153] !== te ||
      t[154] !== ne ||
      t[155] !== p ||
      t[156] !== x ||
      t[157] !== m.animateDataChanges ||
      t[158] !== m.reduceMotion ||
      t[159] !== se
        ? ((e = (e, t) =>
            v
              ? (0, Li.jsx)(
                  cr,
                  {
                    seriesKey: e.key,
                    name: e.name,
                    color: e.color,
                    hidden: !!B?.has(e.key),
                    otherSeriesKeys: e.key === `__other_usage_series__` ? ne : void 0,
                    stackId: `usage`,
                    stackClipId: se == null ? void 0 : x,
                    topSeriesKeys: se,
                    stackRadius: Er,
                    grow: !!m.animateDataChanges && !oe && !m.reduceMotion,
                    restack: oe && !m.reduceMotion,
                    onAnimationEnd: d,
                    onGrowEnd: S,
                    onHoverChange: C,
                  },
                  e.key,
                )
              : (0, Li.jsx)(
                  Ft,
                  {
                    animationDuration: 150,
                    animationEasing: `ease-out`,
                    dataKey: (t) =>
                      B?.has(e.key)
                        ? null
                        : e.key === `__other_usage_series__`
                          ? te.reduce((e, n) => e + (t.values[n.key] ?? 0), 0)
                          : (t.values[e.key] ?? 0),
                    fill: e.color ?? ve[t % ve.length],
                    isAnimationActive:
                      !m.reduceMotion && ((p !== `workspace` && !!m.animateDataChanges) || oe),
                    name: e.name,
                    onAnimationEnd: d,
                    onMouseEnter: () => {
                      C(e.key);
                    },
                    onMouseLeave: () => {
                      C(null);
                    },
                    radius: 0,
                    stackId: `usage`,
                  },
                  g ? t : e.key,
                )),
          (t[147] = v),
          (t[148] = d),
          (t[149] = S),
          (t[150] = B),
          (t[151] = g),
          (t[152] = oe),
          (t[153] = te),
          (t[154] = ne),
          (t[155] = p),
          (t[156] = x),
          (t[157] = m.animateDataChanges),
          (t[158] = m.reduceMotion),
          (t[159] = se),
          (t[160] = e))
        : (e = t[160]),
        (k = z.map(e)),
        (t[132] = z),
        (t[133] = v),
        (t[134] = d),
        (t[135] = S),
        (t[136] = B),
        (t[137] = g),
        (t[138] = oe),
        (t[139] = te),
        (t[140] = ne),
        (t[141] = p),
        (t[142] = x),
        (t[143] = m.animateDataChanges),
        (t[144] = m.reduceMotion),
        (t[145] = se),
        (t[146] = k));
    } else k = t[146];
    _e = k;
    let R;
    t[161] !== v || t[162] !== y || t[163] !== g || t[164] !== p
      ? ((R = Ni(y, g, p, v)), (t[161] = v), (t[162] = y), (t[163] = g), (t[164] = p), (t[165] = R))
      : (R = t[165]);
    let ee = R;
    ((K = Ln),
      (Re = v),
      (ze = n),
      (Be = b != null),
      (Ve = A),
      t[166] === g
        ? (He = t[167])
        : ((He = g
            ? (0, Li.jsx)(a, {
                id: `settings.usage.billing.chart.empty`,
                defaultMessage: `No usage recorded yet`,
                description: `Empty state for enterprise billing and usage charts`,
              })
            : (0, Li.jsx)(a, {
                id: `settings.usage.billing.credits.empty`,
                defaultMessage: `No plan usage or credits consumed during this period`,
                description: `Empty state when the selected enterprise workspace usage period has no plan usage or consumed credits`,
              })),
          (t[166] = g),
          (t[167] = He)),
      (Ue = B?.size && L != null && le != null ? le * L : c),
      (We = v ? F !== 0 || ye.length > 0 : F > 0),
      (Ge = B),
      (Ke = I || l),
      (qe = _),
      (Je = p),
      (Ye = ye),
      (Xe = m),
      (Ze = h === void 0 ? ee.title : h),
      (Qe = le),
      ($e = v
        ? (e) => {
            D(e == null ? new Set() : wr(e, ye, j));
          }
        : void 0),
      (et = (e) => {
        let t = Cr(B, e, ye, v ? j : B);
        t.has(e) !== !!B?.has(e) && D(t);
      }),
      (ge = hr),
      (Ne = v),
      (Pe = w),
      t[168] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Fe = () => {
            (O(null), C(null));
          }),
          (t[168] = Fe))
        : (Fe = t[168]),
      (Ie = T),
      (Le = p),
      (he = Lt),
      (q = r ?? ee.ariaLabel),
      (we = i),
      (Te = s?.data));
    let re = b == null ? 4 : 20;
    (t[169] === re
      ? (Ee = t[170])
      : ((Ee = { top: re, right: 0, left: 0, bottom: 0 }), (t[169] = re), (t[170] = Ee)),
      (De = p !== `workspace` && s?.data.length === 1 ? 44 : void 0),
      (J = p === `workspace` ? void 0 : ji),
      t[171] === v
        ? (Oe = t[172])
        : ((Oe = v ? () => O(null) : void 0), (t[171] = v), (t[172] = Oe)),
      t[173] === v
        ? (ke = t[174])
        : ((ke = v
            ? (e, t) => {
                O(er(t, !1, !0));
              }
            : void 0),
          (t[173] = v),
          (t[174] = ke)),
      t[175] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Ae = (0, Li.jsx)(Gt, { stroke: `var(--color-border-subtle)`, vertical: !1 })),
          (t[175] = Ae))
        : (Ae = t[175]));
    let ie = b != null,
      ae = I ? `percent` : `credits`;
    t[176] !== de || t[177] !== ie || t[178] !== ae
      ? ((je = (0, Li.jsx)(Cn, {
          hideValues: ie,
          maximumValue: de,
          showPercentageUnit: !1,
          unit: ae,
        })),
        (t[176] = de),
        (t[177] = ie),
        (t[178] = ae),
        (t[179] = je))
      : (je = t[179]);
    let V;
    t[180] === b
      ? (V = t[181])
      : ((V = b == null ? void 0 : { left: 20, right: 20 }), (t[180] = b), (t[181] = V));
    let ce = b == null ? wn : Ai,
      ue;
    t[182] === y ? (ue = t[183]) : ((ue = (e) => fr(e, y)), (t[182] = y), (t[183] = ue));
    let fe = s?.data,
      W;
    (t[184] === fe ? (W = t[185]) : ((W = pr(fe)), (t[184] = fe), (t[185] = W)),
      t[186] !== V || t[187] !== ce || t[188] !== ue || t[189] !== W
        ? ((Me = (0, Li.jsx)(Wt, {
            axisLine: !1,
            dataKey: `date`,
            height: 22,
            interval: 0,
            minTickGap: 32,
            padding: V,
            tick: ce,
            tickFormatter: ue,
            tickLine: !1,
            ticks: W,
          })),
          (t[186] = V),
          (t[187] = ce),
          (t[188] = ue),
          (t[189] = W),
          (t[190] = Me))
        : (Me = t[190]),
      (me = zt),
      (Se = !w && void 0),
      (Ce = !1),
      (G = Or),
      (be = v),
      (xe = ye.find((e) => e.key === A)?.name ?? null),
      (t[41] = n),
      (t[42] = A),
      (t[43] = r),
      (t[44] = z),
      (t[45] = i),
      (t[46] = v),
      (t[47] = s),
      (t[48] = c),
      (t[49] = U),
      (t[50] = B),
      (t[51] = l),
      (t[52] = y),
      (t[53] = g),
      (t[54] = I),
      (t[55] = oe),
      (t[56] = w),
      (t[57] = pe),
      (t[58] = de),
      (t[59] = te),
      (t[60] = ne),
      (t[61] = H),
      (t[62] = _),
      (t[63] = b),
      (t[64] = N),
      (t[65] = p),
      (t[66] = x),
      (t[67] = m),
      (t[68] = j),
      (t[69] = h),
      (t[70] = se),
      (t[71] = F),
      (t[72] = L),
      (t[73] = le),
      (t[74] = G),
      (t[75] = me),
      (t[76] = he),
      (t[77] = ge),
      (t[78] = K),
      (t[79] = _e),
      (t[80] = ye),
      (t[81] = be),
      (t[82] = xe),
      (t[83] = Se),
      (t[84] = Ce),
      (t[85] = q),
      (t[86] = we),
      (t[87] = Te),
      (t[88] = Ee),
      (t[89] = De),
      (t[90] = J),
      (t[91] = Oe),
      (t[92] = ke),
      (t[93] = Ae),
      (t[94] = je),
      (t[95] = Me),
      (t[96] = Ne),
      (t[97] = Pe),
      (t[98] = Fe),
      (t[99] = Ie),
      (t[100] = Le),
      (t[101] = Re),
      (t[102] = ze),
      (t[103] = Be),
      (t[104] = Ve),
      (t[105] = He),
      (t[106] = Ue),
      (t[107] = We),
      (t[108] = Ge),
      (t[109] = Ke),
      (t[110] = qe),
      (t[111] = Je),
      (t[112] = Ye),
      (t[113] = Xe),
      (t[114] = Ze),
      (t[115] = Qe),
      (t[116] = $e),
      (t[117] = et));
  } else
    ((G = t[74]),
      (me = t[75]),
      (he = t[76]),
      (ge = t[77]),
      (K = t[78]),
      (_e = t[79]),
      (ye = t[80]),
      (be = t[81]),
      (xe = t[82]),
      (Se = t[83]),
      (Ce = t[84]),
      (q = t[85]),
      (we = t[86]),
      (Te = t[87]),
      (Ee = t[88]),
      (De = t[89]),
      (J = t[90]),
      (Oe = t[91]),
      (ke = t[92]),
      (Ae = t[93]),
      (je = t[94]),
      (Me = t[95]),
      (Ne = t[96]),
      (Pe = t[97]),
      (Fe = t[98]),
      (Ie = t[99]),
      (Le = t[100]),
      (Re = t[101]),
      (ze = t[102]),
      (Be = t[103]),
      (Ve = t[104]),
      (He = t[105]),
      (Ue = t[106]),
      (We = t[107]),
      (Ge = t[108]),
      (Ke = t[109]),
      (qe = t[110]),
      (Je = t[111]),
      (Ye = t[112]),
      (Xe = t[113]),
      (Ze = t[114]),
      (Qe = t[115]),
      ($e = t[116]),
      (et = t[117]));
  let tt = I ? `percent` : `credits`,
    nt;
  t[191] !== G ||
  t[192] !== B ||
  t[193] !== I ||
  t[194] !== b ||
  t[195] !== p ||
  t[196] !== ye ||
  t[197] !== be ||
  t[198] !== xe ||
  t[199] !== tt ||
  t[200] !== L
    ? ((nt = (0, Li.jsx)(G, {
        consumerAnalytics: be,
        activeSeriesName: xe,
        hiddenSeriesKeys: B,
        isRelativeUsage: I,
        report: b,
        scope: p,
        series: ye,
        unit: tt,
        usdPerCredit: L,
      })),
      (t[191] = G),
      (t[192] = B),
      (t[193] = I),
      (t[194] = b),
      (t[195] = p),
      (t[196] = ye),
      (t[197] = be),
      (t[198] = xe),
      (t[199] = tt),
      (t[200] = L),
      (t[201] = nt))
    : (nt = t[201]);
  let rt;
  t[202] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((rt = (0, Li.jsx)(Tn, {})), (t[202] = rt))
    : (rt = t[202]);
  let it;
  t[203] === D ? (it = t[204]) : ((it = D == null ? void 0 : tr(D)), (t[203] = D), (t[204] = it));
  let at;
  t[205] !== me || t[206] !== Se || t[207] !== Ce || t[208] !== nt || t[209] !== it
    ? ((at = (0, Li.jsx)(me, {
        active: Se,
        isAnimationActive: Ce,
        content: nt,
        cursor: rt,
        position: it,
      })),
      (t[205] = me),
      (t[206] = Se),
      (t[207] = Ce),
      (t[208] = nt),
      (t[209] = it),
      (t[210] = at))
    : (at = t[210]);
  let ot;
  t[211] !== _e || t[212] !== se
    ? ((ot = se == null ? (0, Li.jsx)(Bt, { radius: Er, children: _e }) : _e),
      (t[211] = _e),
      (t[212] = se),
      (t[213] = ot))
    : (ot = t[213]);
  let st;
  t[214] !== he ||
  t[215] !== q ||
  t[216] !== we ||
  t[217] !== Te ||
  t[218] !== Ee ||
  t[219] !== De ||
  t[220] !== J ||
  t[221] !== Oe ||
  t[222] !== ke ||
  t[223] !== Ae ||
  t[224] !== je ||
  t[225] !== Me ||
  t[226] !== at ||
  t[227] !== ot
    ? ((st = (0, Li.jsxs)(he, {
        "aria-label": q,
        barSize: we,
        data: Te,
        margin: Ee,
        maxBarSize: De,
        onMouseDown: J,
        onMouseLeave: Oe,
        onMouseMove: ke,
        children: [Ae, je, Me, at, ot],
      })),
      (t[214] = he),
      (t[215] = q),
      (t[216] = we),
      (t[217] = Te),
      (t[218] = Ee),
      (t[219] = De),
      (t[220] = J),
      (t[221] = Oe),
      (t[222] = ke),
      (t[223] = Ae),
      (t[224] = je),
      (t[225] = Me),
      (t[226] = at),
      (t[227] = ot),
      (t[228] = st))
    : (st = t[228]);
  let ct;
  t[229] !== ge ||
  t[230] !== Ne ||
  t[231] !== Pe ||
  t[232] !== Fe ||
  t[233] !== Ie ||
  t[234] !== Le ||
  t[235] !== st
    ? ((ct = (0, Li.jsx)(ge, {
        consumerAnalytics: Ne,
        isTooltipDismissed: Pe,
        onResetHover: Fe,
        onTooltipDismissedChange: Ie,
        scope: Le,
        children: st,
      })),
      (t[229] = ge),
      (t[230] = Ne),
      (t[231] = Pe),
      (t[232] = Fe),
      (t[233] = Ie),
      (t[234] = Le),
      (t[235] = st),
      (t[236] = ct))
    : (ct = t[236]);
  let lt;
  return (
    t[237] !== K ||
    t[238] !== Re ||
    t[239] !== ze ||
    t[240] !== Be ||
    t[241] !== Ve ||
    t[242] !== He ||
    t[243] !== Ue ||
    t[244] !== We ||
    t[245] !== Ge ||
    t[246] !== Ke ||
    t[247] !== qe ||
    t[248] !== Je ||
    t[249] !== Ye ||
    t[250] !== Xe ||
    t[251] !== Ze ||
    t[252] !== Qe ||
    t[253] !== $e ||
    t[254] !== et ||
    t[255] !== ct
      ? ((lt = (0, Li.jsx)(K, {
          consumerAnalytics: Re,
          actions: ze,
          fillChartHeight: Be,
          activeSeriesKey: Ve,
          emptyMessage: He,
          estimatedSpendUsd: Ue,
          hasData: We,
          hiddenSeriesKeys: Ge,
          hideTotal: Ke,
          preservePopulatedCardLayout: qe,
          scope: Je,
          series: Ye,
          status: Xe,
          title: Ze,
          total: Qe,
          onChangeSeriesIsolation: $e,
          onToggleSeries: et,
          children: ct,
        })),
        (t[237] = K),
        (t[238] = Re),
        (t[239] = ze),
        (t[240] = Be),
        (t[241] = Ve),
        (t[242] = He),
        (t[243] = Ue),
        (t[244] = We),
        (t[245] = Ge),
        (t[246] = Ke),
        (t[247] = qe),
        (t[248] = Je),
        (t[249] = Ye),
        (t[250] = Xe),
        (t[251] = Ze),
        (t[252] = Qe),
        (t[253] = $e),
        (t[254] = et),
        (t[255] = ct),
        (t[256] = lt))
      : (lt = t[256]),
    lt
  );
}
function Ai(e) {
  return (0, Li.jsx)(wn, { ...e, centerLabels: !0 });
}
function ji(e, t) {
  t.preventDefault();
}
function Mi(e, t) {
  return e + t;
}
function Ni(e, t, n, r) {
  return t
    ? {
        title: (0, Li.jsx)(a, {
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
          title: (0, Li.jsx)(a, {
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
          title: (0, Li.jsx)(a, {
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
var Pi,
  Fi,
  Ii,
  Li,
  Ri = e(() => {
    ((Pi = q()),
      (Fi = t(xe(), 1)),
      (Ii = t(r(), 1)),
      F(),
      Ut(),
      J(),
      S(),
      On(),
      Kn(),
      dr(),
      Oi(),
      mr(),
      yr(),
      sr(),
      Dr(),
      Lr(),
      (Li = K()));
  });
function zi(e) {
  let t = (0, Hi.c)(135),
    { data: n, preservePopulatedCardLayout: r, selectedModel: i, scope: o, status: s } = e,
    c = r !== void 0 && r,
    l = E(),
    [u, d] = (0, Ui.useState)(null),
    [f, p] = (0, Ui.useState)(!1),
    [m, h] = (0, Ui.useState)(null),
    [g, _] = (0, Ui.useState)(null),
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    T,
    D,
    O,
    k,
    A,
    j,
    N,
    P,
    F,
    I,
    L,
    R,
    ee,
    z,
    te,
    ne,
    re,
    ie,
    ae,
    B,
    oe,
    V,
    se,
    ce,
    le,
    ue,
    de,
    fe,
    H;
  if (
    t[0] !== u ||
    t[1] !== n?.data ||
    t[2] !== n?.models ||
    t[3] !== n?.total ||
    t[4] !== l ||
    t[5] !== f ||
    t[6] !== c ||
    t[7] !== o ||
    t[8] !== i ||
    t[9] !== s ||
    t[10] !== g
  ) {
    ((D =
      o === `business`
        ? (n?.models ?? [])
            .filter((e) => {
              let { key: t, total: n } = e;
              return n > 0 && (i == null || t === i);
            })
            .map((e) => {
              let { key: t } = e;
              return { key: t, name: t === `other` ? l.formatMessage(Si.other) : Be(t) };
            })
        : [
            {
              key: `outputTokens`,
              name: l.formatMessage({
                id: `settings.usage.billing.tokens.output`,
                defaultMessage: `Output`,
                description: `Output token series in enterprise token usage charts`,
              }),
            },
            {
              key: `uncachedInputTokens`,
              name: l.formatMessage({
                id: `settings.usage.billing.tokens.uncachedInput`,
                defaultMessage: `Uncached input`,
                description: `Uncached input token series in enterprise token usage charts`,
              }),
            },
            {
              key: `cachedInputTokens`,
              name: l.formatMessage({
                id: `settings.usage.billing.tokens.cachedInput`,
                defaultMessage: `Cached input`,
                description: `Cached input token series in enterprise token usage charts`,
              }),
            },
          ]),
      (w =
        g != null &&
        !D.some((e) => {
          let { key: t } = e;
          return !g.has(t);
        })
          ? null
          : g),
      (C = n?.data.map((e) => {
        if (o === `business` || i == null) return e;
        let t = e.tokensByModel[i];
        return {
          ...e,
          uncachedInputTokens: t?.uncachedInputTokens ?? 0,
          cachedInputTokens: t?.cachedInputTokens ?? 0,
          outputTokens: t?.outputTokens ?? 0,
        };
      })));
    let e;
    t[47] !== n?.models || t[48] !== n?.total || t[49] !== i
      ? ((e =
          i == null
            ? n?.total
            : n?.models.find((e) => {
                let { key: t } = e;
                return t === i;
              })?.total),
        (t[47] = n?.models),
        (t[48] = n?.total),
        (t[49] = i),
        (t[50] = e))
      : (e = t[50]);
    let r = e,
      m;
    (t[51] === w
      ? (m = t[52])
      : ((m = (e) => {
          let { key: t } = e;
          return !w?.has(t);
        }),
        (t[51] = w),
        (t[52] = m)),
      (T = D.map(Vi).filter(m)));
    let E =
      r == null || !w?.size
        ? r
        : r -
          (C?.reduce(
            (e, t) =>
              e +
              D.reduce(
                (e, n) =>
                  w.has(n.key)
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
    ((S = Ln),
      (L = u),
      t[53] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((R = (0, Wi.jsx)(a, {
            id: `settings.usage.billing.tokens.empty`,
            defaultMessage: `No tokens used during this period`,
            description: `Empty state when the selected enterprise workspace usage period has no tokens consumed`,
          })),
          (t[53] = R))
        : (R = t[53]),
      (z = (r ?? 0) > 0),
      (te = c),
      (ne = (e) => {
        _(Cr(w, e, D, w));
      }),
      (re = o),
      (ie = w),
      (ae = D),
      (B = s),
      t[54] === o
        ? (oe = t[55])
        : ((oe =
            o === `workspace`
              ? (0, Wi.jsx)(a, {
                  id: `settings.usage.billing.tokens.title`,
                  defaultMessage: `Tokens used`,
                  description: `Label for the enterprise token usage chart`,
                })
              : (0, Wi.jsx)(a, {
                  id: `settings.usage.billing.tokens.personalTitle`,
                  defaultMessage: `Total tokens`,
                  description: `Chart title showing the total input, output, and cached tokens consumed by the current Business workspace member in Codex desktop analytics settings`,
                })),
          (t[54] = o),
          (t[55] = oe)),
      (V = E),
      (x = hr),
      (N = f),
      t[56] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((P = () => {
            (h(null), d(null));
          }),
          (t[56] = P))
        : (P = t[56]),
      (F = p),
      (I = o),
      (b = Vt),
      t[57] !== l || t[58] !== o
        ? ((le =
            o === `workspace`
              ? l.formatMessage({
                  id: `settings.usage.billing.tokens.chartLabel`,
                  defaultMessage: `Tokens used`,
                  description: `Accessible label for the enterprise token usage chart`,
                })
              : l.formatMessage({
                  id: `settings.usage.billing.tokens.personalChartLabel`,
                  defaultMessage: `Total tokens`,
                  description: `Accessible label for a Business workspace member's chart of total input, output, and cached tokens in Codex desktop analytics settings`,
                })),
          (t[57] = l),
          (t[58] = o),
          (t[59] = le))
        : (le = t[59]),
      (ue = C),
      t[60] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((de = { top: 4, right: 0, left: 0, bottom: 0 }), (t[60] = de))
        : (de = t[60]),
      (fe = o === `workspace` ? void 0 : Bi),
      t[61] === o
        ? ((O = t[62]), (H = t[63]))
        : ((H = () => {
            (h(null), o !== `workspace` && d(null));
          }),
          (O = (e, t) => {
            h(er(t, o === `workspace`));
          }),
          (t[61] = o),
          (t[62] = O),
          (t[63] = H)),
      t[64] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = (0, Wi.jsx)(Gt, { stroke: `var(--color-border-subtle)`, vertical: !1 })),
          (A = (0, Wi.jsx)(Cn, { unit: `tokens` })),
          (t[64] = k),
          (t[65] = A))
        : ((k = t[64]), (A = t[65])));
    let M;
    (t[66] === l ? (M = t[67]) : ((M = (e) => fr(e, l)), (t[66] = l), (t[67] = M)),
      (j = (0, Wi.jsx)(Wt, {
        axisLine: !1,
        dataKey: `date`,
        height: 22,
        interval: 0,
        minTickGap: 32,
        tick: wn,
        tickFormatter: M,
        tickLine: !1,
        ticks: pr(C),
      })),
      (y = zt),
      (se = !f && void 0),
      (ce = !1),
      (v = Or),
      (ee = D.find((e) => e.key === u)?.name ?? null),
      (t[0] = u),
      (t[1] = n?.data),
      (t[2] = n?.models),
      (t[3] = n?.total),
      (t[4] = l),
      (t[5] = f),
      (t[6] = c),
      (t[7] = o),
      (t[8] = i),
      (t[9] = s),
      (t[10] = g),
      (t[11] = v),
      (t[12] = y),
      (t[13] = b),
      (t[14] = x),
      (t[15] = S),
      (t[16] = C),
      (t[17] = w),
      (t[18] = T),
      (t[19] = D),
      (t[20] = O),
      (t[21] = k),
      (t[22] = A),
      (t[23] = j),
      (t[24] = N),
      (t[25] = P),
      (t[26] = F),
      (t[27] = I),
      (t[28] = L),
      (t[29] = R),
      (t[30] = ee),
      (t[31] = z),
      (t[32] = te),
      (t[33] = ne),
      (t[34] = re),
      (t[35] = ie),
      (t[36] = ae),
      (t[37] = B),
      (t[38] = oe),
      (t[39] = V),
      (t[40] = se),
      (t[41] = ce),
      (t[42] = le),
      (t[43] = ue),
      (t[44] = de),
      (t[45] = fe),
      (t[46] = H));
  } else
    ((v = t[11]),
      (y = t[12]),
      (b = t[13]),
      (x = t[14]),
      (S = t[15]),
      (C = t[16]),
      (w = t[17]),
      (T = t[18]),
      (D = t[19]),
      (O = t[20]),
      (k = t[21]),
      (A = t[22]),
      (j = t[23]),
      (N = t[24]),
      (P = t[25]),
      (F = t[26]),
      (I = t[27]),
      (L = t[28]),
      (R = t[29]),
      (ee = t[30]),
      (z = t[31]),
      (te = t[32]),
      (ne = t[33]),
      (re = t[34]),
      (ie = t[35]),
      (ae = t[36]),
      (B = t[37]),
      (oe = t[38]),
      (V = t[39]),
      (se = t[40]),
      (ce = t[41]),
      (le = t[42]),
      (ue = t[43]),
      (de = t[44]),
      (fe = t[45]),
      (H = t[46]));
  let U;
  t[68] !== v || t[69] !== w || t[70] !== o || t[71] !== D || t[72] !== ee
    ? ((U = (0, Wi.jsx)(v, {
        activeSeriesName: ee,
        hiddenSeriesKeys: w,
        scope: o,
        series: D,
        unit: `tokens`,
      })),
      (t[68] = v),
      (t[69] = w),
      (t[70] = o),
      (t[71] = D),
      (t[72] = ee),
      (t[73] = U))
    : (U = t[73]);
  let W;
  t[74] === m ? (W = t[75]) : ((W = m == null && (0, Wi.jsx)(Tn, {})), (t[74] = m), (t[75] = W));
  let pe;
  t[76] === m ? (pe = t[77]) : ((pe = m == null ? void 0 : tr(m)), (t[76] = m), (t[77] = pe));
  let G;
  t[78] !== y || t[79] !== U || t[80] !== se || t[81] !== W || t[82] !== pe || t[83] !== ce
    ? ((G = (0, Wi.jsx)(y, {
        active: se,
        isAnimationActive: ce,
        content: U,
        cursor: W,
        position: pe,
      })),
      (t[78] = y),
      (t[79] = U),
      (t[80] = se),
      (t[81] = W),
      (t[82] = pe),
      (t[83] = ce),
      (t[84] = G))
    : (G = t[84]);
  let me;
  if (t[85] !== w || t[86] !== o || t[87] !== D || t[88] !== m || t[89] !== s) {
    let e;
    (t[91] !== w || t[92] !== o || t[93] !== m || t[94] !== s
      ? ((e = (e, t) => {
          let n =
            e.key === `outputTokens` ||
            e.key === `uncachedInputTokens` ||
            e.key === `cachedInputTokens`
              ? e.key
              : (t) => t.tokensByModel[e.key]?.totalTokens ?? 0;
          return (0, Wi.jsx)(
            It,
            {
              className: M(
                !s.reduceMotion &&
                  `transition-opacity duration-basic ease-basic motion-reduce:transition-none`,
                w?.has(e.key) && `pointer-events-none opacity-0`,
              ),
              activeDot: !1,
              animationDuration: 200,
              animationEasing: `ease-out`,
              animationInterpolateFn: or,
              animationMatchBy: ir,
              dataKey: n,
              dot: !1,
              isAnimationActive:
                !s.reduceMotion && !!s.animateDataChanges && (o === `workspace` || m == null),
              name: e.name,
              onMouseEnter: () => {
                d(e.key);
              },
              onMouseLeave: () => {
                d(null);
              },
              shape: { visibleLength: null },
              stroke: ve[t % ve.length],
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              strokeWidth: 2,
              type: `linear`,
            },
            e.key,
          );
        }),
        (t[91] = w),
        (t[92] = o),
        (t[93] = m),
        (t[94] = s),
        (t[95] = e))
      : (e = t[95]),
      (me = D.map(e)),
      (t[85] = w),
      (t[86] = o),
      (t[87] = D),
      (t[88] = m),
      (t[89] = s),
      (t[90] = me));
  } else me = t[90];
  let he;
  t[96] !== C || t[97] !== T || t[98] !== m
    ? ((he = (0, Wi.jsx)(gr, { data: C, pointer: m, series: T })),
      (t[96] = C),
      (t[97] = T),
      (t[98] = m),
      (t[99] = he))
    : (he = t[99]);
  let ge;
  t[100] !== b ||
  t[101] !== O ||
  t[102] !== k ||
  t[103] !== A ||
  t[104] !== j ||
  t[105] !== G ||
  t[106] !== me ||
  t[107] !== he ||
  t[108] !== le ||
  t[109] !== ue ||
  t[110] !== de ||
  t[111] !== fe ||
  t[112] !== H
    ? ((ge = (0, Wi.jsxs)(b, {
        "aria-label": le,
        data: ue,
        margin: de,
        onMouseDown: fe,
        onMouseLeave: H,
        onMouseMove: O,
        children: [k, A, j, G, me, he],
      })),
      (t[100] = b),
      (t[101] = O),
      (t[102] = k),
      (t[103] = A),
      (t[104] = j),
      (t[105] = G),
      (t[106] = me),
      (t[107] = he),
      (t[108] = le),
      (t[109] = ue),
      (t[110] = de),
      (t[111] = fe),
      (t[112] = H),
      (t[113] = ge))
    : (ge = t[113]);
  let K;
  t[114] !== x || t[115] !== N || t[116] !== P || t[117] !== F || t[118] !== I || t[119] !== ge
    ? ((K = (0, Wi.jsx)(x, {
        isTooltipDismissed: N,
        onResetHover: P,
        onTooltipDismissedChange: F,
        scope: I,
        children: ge,
      })),
      (t[114] = x),
      (t[115] = N),
      (t[116] = P),
      (t[117] = F),
      (t[118] = I),
      (t[119] = ge),
      (t[120] = K))
    : (K = t[120]);
  let _e;
  return (
    t[121] !== S ||
    t[122] !== L ||
    t[123] !== R ||
    t[124] !== z ||
    t[125] !== te ||
    t[126] !== ne ||
    t[127] !== re ||
    t[128] !== ie ||
    t[129] !== ae ||
    t[130] !== B ||
    t[131] !== oe ||
    t[132] !== V ||
    t[133] !== K
      ? ((_e = (0, Wi.jsx)(S, {
          activeSeriesKey: L,
          emptyMessage: R,
          hasData: z,
          preservePopulatedCardLayout: te,
          onToggleSeries: ne,
          scope: re,
          hiddenSeriesKeys: ie,
          series: ae,
          status: B,
          title: oe,
          total: V,
          children: K,
        })),
        (t[121] = S),
        (t[122] = L),
        (t[123] = R),
        (t[124] = z),
        (t[125] = te),
        (t[126] = ne),
        (t[127] = re),
        (t[128] = ie),
        (t[129] = ae),
        (t[130] = B),
        (t[131] = oe),
        (t[132] = V),
        (t[133] = K),
        (t[134] = _e))
      : (_e = t[134]),
    _e
  );
}
function Bi(e, t) {
  t.preventDefault();
}
function Vi(e, t) {
  return {
    key: e.key,
    name: e.name,
    color: ve[t % ve.length],
    value: (t) =>
      e.key === `outputTokens` || e.key === `uncachedInputTokens` || e.key === `cachedInputTokens`
        ? t[e.key]
        : (t.tokensByModel[e.key]?.totalTokens ?? 0),
  };
}
var Hi,
  Ui,
  Wi,
  Gi = e(() => {
    ((Hi = q()),
      $e(),
      (Ui = t(r(), 1)),
      F(),
      Ut(),
      ce(),
      S(),
      Ci(),
      On(),
      Kn(),
      mr(),
      yr(),
      sr(),
      Dr(),
      Lr(),
      (Wi = K()));
  });
function Ki(e, t, n) {
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
        feature: i.thread_source,
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
var qi = e(() => {});
function Ji(e) {
  let t = (0, Xi.c)(11),
    { ariaLabel: n, breakdown: r, onChange: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = (0, Zi.jsx)(`span`, {
        className: `truncate`,
        children: (0, Zi.jsx)(Yi, { breakdown: r }),
      })),
      (t[0] = r),
      (t[1] = a));
  let o;
  t[2] !== n || t[3] !== a
    ? ((o = (0, Zi.jsx)(j, { className: `w-32 shrink-0`, "aria-label": n, children: a })),
      (t[2] = n),
      (t[3] = a),
      (t[4] = o))
    : (o = t[4]);
  let s;
  t[5] !== r || t[6] !== i
    ? ((s = Qi.map((e) =>
        (0, Zi.jsx)(
          m.Item,
          {
            "aria-checked": r === e,
            RightIcon: r === e ? De : void 0,
            role: `menuitemradio`,
            onSelect: () => i(e),
            children: (0, Zi.jsx)(Yi, { breakdown: e }),
          },
          e,
        ),
      )),
      (t[5] = r),
      (t[6] = i),
      (t[7] = s))
    : (s = t[7]);
  let c;
  return (
    t[8] !== o || t[9] !== s
      ? ((c = (0, Zi.jsx)(_, {
          align: `start`,
          contentWidth: `menuNarrow`,
          triggerButton: o,
          children: s,
        })),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]),
    c
  );
}
function Yi(e) {
  let t = (0, Xi.c)(2),
    { breakdown: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Zi.jsx)(a, {
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
var Xi,
  Zi,
  Qi,
  $i = e(() => {
    ((Xi = q()),
      F(),
      ae(),
      re(),
      z(),
      (Zi = K()),
      (Qi = [`feature`, `model`, `surface`, `turn-start`]));
  });
function ea(e, t) {
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
    case `other`:
      return e.formatMessage(Si[t]);
    default:
      break;
  }
  return t.startsWith(`start-`)
    ? e.formatMessage(
        {
          id: `consumerUsage.series.turnTrigger`,
          defaultMessage: `{trigger, select,
        user {User messages}
        composer {User messages}
        composer_queue {Queued messages}
        composer_queue_run_now {Queued messages run now}
        automation_cron_scheduled {Scheduled automations}
        automation_cron_run_now {Automations run now}
        automation_heartbeat_scheduled {Scheduled follow-ups}
        automation_heartbeat_run_now {Follow-ups run now}
        app_tool_create_thread {Agent-created tasks}
        app_tool_send_message {Agent follow-ups}
        app_update_resume {Resumed after app update}
        artifact_comment {Artifact comments}
        avatar_quick_chat {Avatar quick chat}
        avatar_follow_up {Avatar follow-ups}
        avatar_implement_plan {Avatar plan implementation}
        capacity_retry_automatic {Automatic capacity retries}
        capacity_retry_manual {Manual capacity retries}
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
        pull_request_fix_setup {Pull request fix setup}
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
        visualization_sites_handoff {Visualization handoffs}
        goal {Goals}
        queue {Queue}
        retry {Retries}
        realtime {Realtime}
        persistent_mode {Persistent mode}
        unknown {Unknown}
        other {{key}}
      }`,
          description: `Legend label for the recorded reason a task turn started. User messages come from the composer. Automations run on a recurring schedule; follow-ups are scheduled within an existing task. Run now means manually started. Queued messages wait for an active turn to finish. Unrecognized values are shown as recorded identifiers.`,
        },
        { key: t, trigger: t.slice(6) },
      )
    : e.formatMessage(
        {
          id: `consumerUsage.series.recordedSource`,
          defaultMessage: `{key, select,
        agent_created_thread {Agent-created tasks}
        agent_forked_thread {Agent-forked tasks}
        ambient_suggestion_safety {Ambient suggestion safety}
        ambient_suggestion_task {Ambient suggestion task}
        ambient_suggestions {Proactive suggestions}
        automated_review {Auto review}
        automation {Automations}
        avatar_quick_chat {Avatar quick chat}
        chatgpt_handoff {Chatgpt handoff}
        code_review {Code review}
        codex_replay {Codex replay}
        codex_web_code_review {Codex web code review}
        codex_web_pr {Codex web PR}
        codex_web_qa {Codex web QA}
        codex_web_security_review {Codex web security review}
        commit_message {Commit message}
        commit_pull_request_message {Commit pull request message}
        conversation_digest {Conversation digest}
        conversational_onboarding {Conversational onboarding}
        dictation_cleanup {Dictation cleanup}
        guardian_classifier {Guardian classifier}
        guardian_review {Guardian review}
        implement_todo {Implement todo}
        inline_edit {Inline edit}
        local_environment_configuration {Local environment configuration}
        mcp_app_follow_up {MCP app follow up}
        mcp_extension_host {MCP extension host}
        memory_consolidation {Memory consolidation}
        onboarding_checklist {Onboarding checklist}
        pull_request_fix_automation {Pull request fix automation}
        pull_request_message {Pull request message}
        realtime_voice {Realtime voice}
        security_remediation {Security remediation}
        security_scan {Security scan}
        subagent {Subagents}
        system {System}
        thread_description {Thread description}
        thread_summary {Thread summary}
        thread_title {Thread title}
        thread_title_reconsideration {Thread title reconsideration}
        title {Title}
        title_generation {Title generation}
        user {Tasks}
        voice_chat {Voice chats}
        worktree_setup_auto_fix {Worktree setup auto fix}
        vscode {VS Code}
        web {Web}
        work_web {Work web}
        work_mobile {Work mobile}
        desktop_app {Desktop app}
        work_desktop {Work desktop}
        agent_identity {Workspace agents}
        unknown {Unknown}
      other {{key}}
    }`,
          description: `Legend label for a recorded consumer usage source. Tasks are user-created tasks; technical sources are separate categories. Preserve brand names. Unrecognized identifiers, including model names, remain unchanged.`,
        },
        { key: t },
      );
}
var ta = e(() => {
  Ci();
});
function na(e) {
  let t = (0, ra.c)(41),
    { buckets: n, days: r, onDaysChange: i, status: o } = e,
    s = E(),
    [c, l] = (0, ia.useState)(`feature`),
    [u, d] = (0, ia.useState)(!1),
    f;
  t[0] !== c || t[1] !== n || t[2] !== s
    ? ((f = n == null ? void 0 : Ki(n, c, (e) => ea(s, e))),
      (t[0] = c),
      (t[1] = n),
      (t[2] = s),
      (t[3] = f))
    : (f = t[3]);
  let p = f,
    m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, aa.jsx)(a, {
        id: `consumerUsage.history.title`,
        defaultMessage: `Total usage history`,
        description: `Heading for total usage across plan allowances and purchased credits`,
      })),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === c
    ? (h = t[6])
    : ((h =
        c === `turn-start`
          ? (0, aa.jsx)(a, {
              id: `consumerUsage.chart.turnStartsDescription`,
              defaultMessage: `All usage by how each turn started`,
              description: `Description for usage from all features grouped by what started each turn`,
            })
          : (0, aa.jsx)(a, {
              id: `consumerUsage.history.description`,
              defaultMessage: `See where your usage goes and how your activity changes over time`,
              description: `Description of relative total usage across plan allowances and purchased credits`,
            })),
      (t[5] = c),
      (t[6] = h));
  let g;
  t[7] === s
    ? (g = t[8])
    : ((g = s.formatMessage({
        id: `consumerAnalyticsPreview.history.period`,
        defaultMessage: `Usage history date range`,
        description: `Accessible label for the date range of total usage history, including plan usage and credits`,
      })),
      (t[7] = s),
      (t[8] = g));
  let _;
  t[9] !== r || t[10] !== i || t[11] !== g
    ? ((_ = (0, aa.jsx)(mn, { ariaLabel: g, days: r, onChange: i })),
      (t[9] = r),
      (t[10] = i),
      (t[11] = g),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === s
    ? (v = t[14])
    : ((v = s.formatMessage({
        id: `consumerUsage.history.breakdown`,
        defaultMessage: `Group usage history`,
        description: `Accessible label for grouping total usage by feature, model, surface, or how each turn started`,
      })),
      (t[13] = s),
      (t[14] = v));
  let y;
  t[15] === c
    ? (y = t[16])
    : ((y = (e) => {
        e !== c && (d(!0), l(e));
      }),
      (t[15] = c),
      (t[16] = y));
  let b;
  t[17] !== c || t[18] !== v || t[19] !== y
    ? ((b = (0, aa.jsx)(Ji, { ariaLabel: v, breakdown: c, onChange: y })),
      (t[17] = c),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] !== _ || t[22] !== b
    ? ((x = (0, aa.jsxs)(`div`, {
        className: `flex flex-wrap items-center gap-2 select-none`,
        children: [_, b],
      })),
      (t[21] = _),
      (t[22] = b),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] !== h || t[25] !== x
    ? ((S = (0, aa.jsx)(B.Header, {
        className: `@max-2xl:flex-col @max-2xl:items-start`,
        actionsAlignment: `end`,
        title: m,
        subtitle: h,
        actions: x,
      })),
      (t[24] = h),
      (t[25] = x),
      (t[26] = S))
    : (S = t[26]);
  let C;
  t[27] === s
    ? (C = t[28])
    : ((C = s.formatMessage({
        id: `consumerUsage.history.chartLabel`,
        defaultMessage: `Compare total usage by day, including plan usage and credits.`,
        description: `Accessible description of relative daily usage across plan allowances and purchased credits`,
      })),
      (t[27] = s),
      (t[28] = C));
  let w = (p?.data.length ?? r) > 7 ? 18 : 38,
    T = !o.reduceMotion && (u || o.animateDataChanges),
    D;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => d(!1)), (t[29] = D))
    : (D = t[29]);
  let O;
  t[30] !== o || t[31] !== T
    ? ((O = { ...o, animateDataChanges: T, onAnimationEnd: D }),
      (t[30] = o),
      (t[31] = T),
      (t[32] = O))
    : (O = t[32]);
  let k;
  t[33] !== p || t[34] !== C || t[35] !== w || t[36] !== O
    ? ((k = (0, aa.jsx)(B.Content, {
        className: `gap-3`,
        children: (0, aa.jsx)(ki, {
          consumerAnalytics: !0,
          breakdown: `model`,
          scope: `consumer`,
          isPersonalUsage: !0,
          preservePopulatedCardLayout: !0,
          ariaLabel: C,
          data: p,
          hideTotal: !0,
          barSize: w,
          status: O,
          title: null,
        }),
      })),
      (t[33] = p),
      (t[34] = C),
      (t[35] = w),
      (t[36] = O),
      (t[37] = k))
    : (k = t[37]);
  let A;
  return (
    t[38] !== S || t[39] !== k
      ? ((A = (0, aa.jsxs)(B, { className: `@container`, children: [S, k] })),
        (t[38] = S),
        (t[39] = k),
        (t[40] = A))
      : (A = t[40]),
    A
  );
}
var ra,
  ia,
  aa,
  oa = e(() => {
    ((ra = q()), (ia = t(r(), 1)), F(), k(), Sn(), Ri(), qi(), $i(), ta(), (aa = K()));
  });
function sa(e, t) {
  if (e?.data_as_of == null) return;
  let n = Date.parse(e.data_as_of),
    r = {
      feature: `thread_source`,
      "turn-start": `turn_trigger`,
      model: `model`,
      surface: `surface`,
    }[t.breakdown];
  return {
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
var ca = e(() => {}),
  la,
  ua = e(() => {
    (se(),
      (la = Qe({
        name: `chevron-down-md-regular-12`,
        canvas: {
          width: 12,
          height: 12,
          viewBox: `0 0 12 12`,
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 2.5, y: 4.5, width: 7, height: 3.896484 },
          visualBounds: { x: 2.5, y: 4.5, width: 7, height: 3.896484 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 2.5, y: 4.5, width: 7, height: 3.896484 },
          center: { x: 6, y: 6.448242 },
          insets: { top: 4.5, right: 2.5, bottom: 3.603516, left: 2.5 },
          anchors: {
            frame: { x: 6, y: 6 },
            ink: { x: 6, y: 6.448242 },
            foreground: { x: 6, y: 6.448242 },
          },
        },
        capabilities: [`icon`],
        body: `<path d="M8.64645 4.64645C8.84171 4.45118 9.15822 4.45118 9.35348 4.64645C9.54874 4.84171 9.54874 5.15822 9.35348 5.35348L6.53024 8.17672C6.23735 8.46959 5.76258 8.46959 5.46969 8.17672L2.64645 5.35348C2.45118 5.15822 2.45118 4.84171 2.64645 4.64645C2.84171 4.45118 3.15822 4.45118 3.35348 4.64645L5.99996 7.29293L8.64645 4.64645Z" fill="currentColor"/>`,
      })));
  }),
  da,
  fa = e(() => {
    (se(),
      (da = Qe({
        name: `chevron-right-md-regular-12`,
        canvas: {
          width: 12,
          height: 12,
          viewBox: `0 0 12 12`,
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 4, y: 2.5, width: 3.896484, height: 7 },
          visualBounds: { x: 4, y: 2.5, width: 3.896484, height: 7 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 4, y: 2.5, width: 3.896484, height: 7 },
          center: { x: 5.948242, y: 6 },
          insets: { top: 2.5, right: 4.103516, bottom: 2.5, left: 4 },
          anchors: {
            frame: { x: 6, y: 6 },
            ink: { x: 5.948242, y: 6 },
            foreground: { x: 5.948242, y: 6 },
          },
        },
        capabilities: [`icon`],
        body: `<path d="M4.14645 8.64645C3.95118 8.84171 3.95118 9.15822 4.14645 9.35348C4.34171 9.54874 4.65822 9.54874 4.85348 9.35348L7.67672 6.53024C7.96959 6.23735 7.96959 5.76258 7.67672 5.46969L4.85348 2.64645C4.65822 2.45118 4.34171 2.45118 4.14645 2.64645C3.95118 2.84171 3.95118 3.15822 4.14645 3.35348L6.79293 5.99996L4.14645 8.64645Z" fill="currentColor"/>`,
      })));
  });
function pa(e) {
  let t = (0, ya.c)(49),
    { period: n, limit: r, expanded: i, onToggle: o, reduceMotion: s } = e,
    c = E(),
    l = (0, ba.useId)(),
    u;
  t[0] !== c ||
  t[1] !== r ||
  t[2] !== n.interval.endAt ||
  t[3] !== n.interval.startAt ||
  t[4] !== n.status
    ? ((u = c.formatMessage(
        {
          id: `consumerAnalyticsPreview.limitHistory.openPeriod`,
          defaultMessage: `{limit, select, fiveHour {5-hour period} other {Weekly period}} from {start} to {end} UTC{current, select, yes {, current at last update} other {}}`,
          description: `Expand or collapse the usage details for this exact reset period, including full dates and current-period status`,
        },
        {
          limit: r,
          start: c.formatDate(n.interval.startAt, {
            year: `numeric`,
            month: `short`,
            day: `numeric`,
            hour: `numeric`,
            minute: `2-digit`,
            timeZone: `UTC`,
          }),
          end: c.formatDate(n.interval.endAt, {
            year: `numeric`,
            month: `short`,
            day: `numeric`,
            hour: `numeric`,
            minute: `2-digit`,
            timeZone: `UTC`,
          }),
          current: n.status === `current` ? `yes` : `no`,
        },
      )),
      (t[0] = c),
      (t[1] = r),
      (t[2] = n.interval.endAt),
      (t[3] = n.interval.startAt),
      (t[4] = n.status),
      (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  t[6] !== i || t[7] !== o || t[8] !== d || t[9] !== l
    ? ((f = (0, xa.jsx)(Se, {
        className: `absolute inset-0 w-full`,
        "aria-controls": l,
        "aria-expanded": i,
        "aria-label": d,
        color: `ghostMuted`,
        focusRing: `inset`,
        size: `inline`,
        onPointerDown: ma,
        onClick: o,
      })),
      (t[6] = i),
      (t[7] = o),
      (t[8] = d),
      (t[9] = l),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] !== d || t[12] !== f
    ? ((p = (0, xa.jsx)(y, { tooltipContent: d, closeOnTriggerClick: !0, children: f })),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== c || t[15] !== r || t[16] !== n.interval.endAt || t[17] !== n.interval.startAt
    ? ((m = c.formatDateTimeRange(n.interval.startAt, n.interval.endAt, {
        month: `short`,
        day: `numeric`,
        ...(r === `fiveHour` ? { hour: `numeric`, minute: `2-digit` } : {}),
        timeZone: `UTC`,
      })),
      (t[14] = c),
      (t[15] = r),
      (t[16] = n.interval.endAt),
      (t[17] = n.interval.startAt),
      (t[18] = m))
    : (m = t[18]);
  let h;
  t[19] === m
    ? (h = t[20])
    : ((h = (0, xa.jsx)(`span`, { className: `min-w-0 whitespace-normal`, children: m })),
      (t[19] = m),
      (t[20] = h));
  let g = i ? la : da,
    _;
  t[21] === g
    ? (_ = t[22])
    : ((_ = (0, xa.jsx)(ge, { className: `shrink-0`, asset: g, focusable: `false` })),
      (t[21] = g),
      (t[22] = _));
  let v;
  t[23] !== h || t[24] !== _
    ? ((v = (0, xa.jsxs)(`span`, {
        className: `pointer-events-none relative flex items-center gap-2`,
        children: [h, _],
      })),
      (t[23] = h),
      (t[24] = _),
      (t[25] = v))
    : (v = t[25]);
  let b;
  t[26] !== p || t[27] !== v
    ? ((b = (0, xa.jsxs)(`th`, {
        className: `px-4 py-3 text-start font-normal`,
        scope: `row`,
        children: [p, v],
      })),
      (t[26] = p),
      (t[27] = v),
      (t[28] = b))
    : (b = t[28]);
  let x;
  t[29] === n.usedBasisPoints
    ? (x = t[30])
    : ((x = (0, xa.jsx)(`td`, {
        className: `pointer-events-none px-4 py-3 text-end font-semibold tabular-nums`,
        children:
          n.usedBasisPoints == null
            ? (0, xa.jsx)(a, {
                id: `consumerAnalyticsPreview.limitHistory.totalUnavailable`,
                defaultMessage: `Not available`,
                description: `The total for this period was not provided; never display it as zero`,
              })
            : (0, xa.jsx)(va, { basisPoints: n.usedBasisPoints }),
      })),
      (t[29] = n.usedBasisPoints),
      (t[30] = x));
  let S;
  t[31] !== x || t[32] !== b
    ? ((S = (0, xa.jsxs)(`tr`, {
        className: `relative border-t border-default hover:bg-primary-ghost-hover has-[:focus-visible]:bg-primary-ghost-hover`,
        children: [b, x],
      })),
      (t[31] = x),
      (t[32] = b),
      (t[33] = S))
    : (S = t[33]);
  let C = !i,
    w;
  t[34] !== i || t[35] !== n || t[36] !== s
    ? ((w = i ? (0, xa.jsx)(ha, { period: n, reduceMotion: s }) : null),
      (t[34] = i),
      (t[35] = n),
      (t[36] = s),
      (t[37] = w))
    : (w = t[37]);
  let T;
  t[38] === w
    ? (T = t[39])
    : ((T = (0, xa.jsx)(ye, { initial: !1, children: w })), (t[38] = w), (t[39] = T));
  let D;
  t[40] !== l || t[41] !== T
    ? ((D = (0, xa.jsx)(`td`, { id: l, className: `p-0`, colSpan: 2, children: T })),
      (t[40] = l),
      (t[41] = T),
      (t[42] = D))
    : (D = t[42]);
  let O;
  t[43] !== C || t[44] !== D
    ? ((O = (0, xa.jsx)(`tr`, { "aria-hidden": C, children: D })),
      (t[43] = C),
      (t[44] = D),
      (t[45] = O))
    : (O = t[45]);
  let k;
  return (
    t[46] !== S || t[47] !== O
      ? ((k = (0, xa.jsxs)(xa.Fragment, { children: [S, O] })),
        (t[46] = S),
        (t[47] = O),
        (t[48] = k))
      : (k = t[48]),
    k
  );
}
function ma(e) {
  e.button === 0 && e.currentTarget.blur();
}
function ha(e) {
  let t = (0, ya.c)(21),
    { period: n, reduceMotion: r } = e,
    i = E(),
    [s, c] = (0, ba.useState)(),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e) => {
        c(de(e).height);
      }),
      (t[0] = l))
    : (l = t[0]);
  let u = Ee(l),
    d = s ?? `auto`,
    f;
  t[1] === d ? (f = t[2]) : ((f = { height: d }), (t[1] = d), (t[2] = f));
  let p, m;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = { height: 0 }), (m = { height: 0 }), (t[3] = p), (t[4] = m))
    : ((p = t[3]), (m = t[4]));
  let h;
  t[5] === r ? (h = t[6]) : ((h = r ? { duration: 0 } : ue), (t[5] = r), (t[6] = h));
  let g;
  t[7] === n.accountingComplete
    ? (g = t[8])
    : ((g = n.accountingComplete
        ? null
        : (0, xa.jsx)(`p`, {
            className: `text-secondary`,
            children: (0, xa.jsx)(a, {
              id: `consumerUsage.limitHistory.incompleteAccounting`,
              defaultMessage: `Some usage is unavailable; this period may be incomplete`,
              description: `Some observations could not be accounted for, even when a known approximate amount is shown`,
            }),
          })),
      (t[7] = n.accountingComplete),
      (t[8] = g));
  let _;
  t[9] !== i || t[10] !== n.accountingComplete || t[11] !== n.breakdown
    ? ((_ =
        n.breakdown == null
          ? (0, xa.jsx)(`p`, {
              className: `text-xs text-secondary`,
              children: (0, xa.jsx)(a, {
                id: `consumerAnalyticsPreview.limitHistory.breakdownUnavailable`,
                defaultMessage: `Breakdown isn't available for this period`,
                description: `A known limit period can lack attribution data; never substitute another period's data or sample rows`,
              }),
            })
          : (0, xa.jsxs)(xa.Fragment, {
              children: [
                (0, xa.jsx)(`dl`, {
                  className: `flex flex-col gap-2.5`,
                  children: n.breakdown.rows.filter(_a).map((e) =>
                    (0, xa.jsxs)(
                      `div`,
                      {
                        className: `flex items-start justify-between gap-4`,
                        children: [
                          (0, xa.jsx)(`dt`, {
                            className: `text-secondary`,
                            children: ea(i, e.key),
                          }),
                          (0, xa.jsx)(`dd`, {
                            className: `text-end tabular-nums`,
                            children: (0, xa.jsx)(va, { basisPoints: e.basisPoints }),
                          }),
                        ],
                      },
                      e.key,
                    ),
                  ),
                }),
                n.accountingComplete && n.breakdown.rows.every(ga)
                  ? (0, xa.jsx)(`p`, {
                      className: `text-secondary`,
                      children: (0, xa.jsx)(a, {
                        id: `consumerAnalyticsPreview.limitHistory.noContributions`,
                        defaultMessage: `No usage to show for this breakdown`,
                        description: `No positive contributions exist for this grouping in the selected period`,
                      }),
                    })
                  : null,
              ],
            })),
      (t[9] = i),
      (t[10] = n.accountingComplete),
      (t[11] = n.breakdown),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] !== u || t[14] !== g || t[15] !== _
    ? ((v = (0, xa.jsxs)(`div`, {
        ref: u,
        className: `flex flex-col gap-3 px-4 pb-3`,
        children: [g, _],
      })),
      (t[13] = u),
      (t[14] = g),
      (t[15] = _),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== f || t[18] !== h || t[19] !== v
      ? ((y = (0, xa.jsx)(o.div, {
          className: `overflow-hidden`,
          animate: f,
          exit: p,
          initial: m,
          transition: h,
          children: v,
        })),
        (t[17] = f),
        (t[18] = h),
        (t[19] = v),
        (t[20] = y))
      : (y = t[20]),
    y
  );
}
function ga(e) {
  return e.basisPoints === 0;
}
function _a(e) {
  return e.basisPoints > 0;
}
function va(e) {
  let t = (0, ya.c)(2),
    { basisPoints: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n > 0 && n < 10
            ? (0, xa.jsx)(a, {
                id: `consumerAnalyticsPreview.limitHistory.belowPrecision`,
                defaultMessage: `<{threshold}`,
                description: `Positive plan usage below the displayed one-decimal percentage precision; less than 0.1 percent, not zero usage`,
                values: {
                  threshold: (0, xa.jsx)(Ke, {
                    value: 0.001,
                    style: `percent`,
                    maximumFractionDigits: 1,
                  }),
                },
              })
            : (0, xa.jsx)(Ke, { value: n / 1e4, style: `percent`, maximumFractionDigits: 1 })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var ya,
  ba,
  xa,
  Sa = e(() => {
    ((ya = q()),
      ua(),
      fa(),
      Ae(),
      (ba = t(r(), 1)),
      F(),
      n(),
      pe(),
      g(),
      W(),
      Ve(),
      J(),
      ta(),
      (xa = K()));
  }),
  Ca,
  wa = e(() => {
    (Re(),
      (Ca = L({
        data_as_of: p({ offset: !0 }).nullable(),
        coverage_start: p({ offset: !0 }).nullable(),
        coverage_complete: me(),
        approximate: me().default(!0),
        boundary_tolerance_seconds: Je().nullable(),
        periods: Oe(
          L({
            id: we(),
            window_minutes: be([Ze(300), Ze(10080)]),
            plan_type: we(),
            starts_at: p({ offset: !0 }),
            ends_at: p({ offset: !0 }),
            accounting_complete: me(),
            used_basis_points: Je().nullable(),
            breakdowns: Oe(
              L({
                dimension: H([`thread_source`, `turn_trigger`, `model`, `surface`]),
                rows: Oe(L({ key: we(), basis_points: Je() })),
              }),
            ).nullable(),
          }),
        ),
      })));
  });
function Ta({ accountId: e, userId: t, authMethod: n }, r = !0) {
  return {
    queryKey: [`consumer-plan-limit-history`, e, t, 7],
    enabled: r && n === `chatgpt` && e != null && t != null,
    queryFn: async ({ signal: e }) => {
      try {
        let t = await c.safeGet(`/wham/usage/plan_limit_history`, {
          parameters: { query: { days: 7 } },
          signal: e,
          expectedErrorStatuses: [404],
        });
        return Ca.parse(t);
      } catch (e) {
        if (e instanceof P && e.status === 404) return null;
        throw e;
      }
    },
    retry: !1,
    staleTime: qe.FIVE_MINUTES,
    refetchInterval: qe.FIVE_MINUTES,
    refetchOnWindowFocus: !1,
  };
}
var Ea = e(() => {
  (I(), A(), Ye(), wa());
});
function Da(e) {
  let t = (0, ja.c)(58),
    { isActive: n, reduceMotion: r } = e,
    i = fe(),
    o;
  t[0] !== i || t[1] !== n ? ((o = Ta(i, n)), (t[0] = i), (t[1] = n), (t[2] = o)) : (o = t[2]);
  let { data: s, isLoading: c, isError: l, refetch: u } = N(o),
    d = s ?? void 0,
    f;
  t[3] !== l || t[4] !== c
    ? ((f = `ready`), c ? (f = `loading`) : l && (f = `error`), (t[3] = l), (t[4] = c), (t[5] = f))
    : (f = t[5]);
  let p = E(),
    [m, h] = (0, Ma.useState)(`feature`),
    g;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = [`fiveHour`, `weekly`]), (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] !== d || t[8] !== f
    ? ((_ = g.filter(
        (e) =>
          f !== `ready` ||
          d?.data_as_of == null ||
          d.periods.length === 0 ||
          d.periods.some((t) => t.window_minutes === (e === `fiveHour` ? 300 : 10080)),
      )),
      (t[7] = d),
      (t[8] = f),
      (t[9] = _))
    : (_ = t[9]);
  let v = _,
    b;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(a, {
        id: `consumerAnalyticsPreview.limitHistory.title`,
        defaultMessage: `Plan usage history`,
        description: `Analytics section for exploring current and past five-hour and weekly plan allowances separately`,
      })),
      (t[10] = b))
    : (b = t[10]);
  let x;
  t[11] !== d?.data_as_of || t[12] !== f
    ? ((x =
        d?.data_as_of == null || f !== `ready`
          ? (0, Z.jsx)(`p`, {
              children: (0, Z.jsx)(a, {
                id: `consumerAnalyticsPreview.limitHistory.description`,
                defaultMessage: `See what used each of your plan limits`,
                description: `Explains the period-by-period allowance breakdown, separate from total usage and purchased credit history`,
              }),
            })
          : null),
      (t[11] = d?.data_as_of),
      (t[12] = f),
      (t[13] = x))
    : (x = t[13]);
  let S;
  t[14] === m
    ? (S = t[15])
    : ((S =
        m === `turn-start`
          ? (0, Z.jsx)(`p`, {
              children: (0, Z.jsx)(a, {
                id: `consumerUsage.limitHistory.tasksOnly`,
                defaultMessage: `By turn start includes Tasks only; percentages use the full period limit`,
                description: `Allowance history turn-trigger breakdown excludes other features and need not sum to the period total`,
              }),
            })
          : null),
      (t[14] = m),
      (t[15] = S));
  let C;
  t[16] !== d || t[17] !== f
    ? ((C =
        d?.data_as_of != null && f === `ready`
          ? (0, Z.jsx)(`p`, {
              children: (0, Z.jsx)(a, {
                id: `consumerUsage.limitHistory.snapshotSummary`,
                defaultMessage: `{approximate, select, yes {Approximate usage as of {asOf}; recent activity may be delayed} other {Usage as of {asOf}; recent activity may be delayed}}`,
                description: `Tooltip explaining the history snapshot time and that usage may be approximate or delayed`,
                values: {
                  asOf: (0, Z.jsx)(G, {
                    value: d.data_as_of,
                    month: `short`,
                    day: `numeric`,
                    hour: `numeric`,
                    minute: `2-digit`,
                    timeZone: `UTC`,
                    timeZoneName: `short`,
                  }),
                  approximate: d.approximate ? `yes` : `no`,
                },
              }),
            })
          : null),
      (t[16] = d),
      (t[17] = f),
      (t[18] = C))
    : (C = t[18]);
  let w;
  t[19] !== d || t[20] !== f
    ? ((w =
        f === `ready` && d?.coverage_complete === !1 && d.periods.length > 0
          ? (0, Z.jsx)(`p`, {
              children: (0, Z.jsx)(a, {
                id: `consumerAnalyticsPreview.limitHistory.partial`,
                defaultMessage: `Some periods aren't available yet`,
                description: `The response does not cover the full selected lookback; absence of rows must not imply no usage`,
              }),
            })
          : null),
      (t[19] = d),
      (t[20] = f),
      (t[21] = w))
    : (w = t[21]);
  let T;
  t[22] !== x || t[23] !== S || t[24] !== C || t[25] !== w
    ? ((T = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-2`, children: [x, S, C, w] })),
      (t[22] = x),
      (t[23] = S),
      (t[24] = C),
      (t[25] = w),
      (t[26] = T))
    : (T = t[26]);
  let D;
  t[27] === p
    ? (D = t[28])
    : ((D = p.formatMessage({
        id: `consumerUsage.limitHistory.details`,
        defaultMessage: `About plan usage history`,
        description: `Accessible label for the tooltip explaining plan usage history coverage and timing`,
      })),
      (t[27] = p),
      (t[28] = D));
  let O;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(ge, { asset: nt })), (t[29] = O))
    : (O = t[29]);
  let k;
  t[30] === D
    ? (k = t[31])
    : ((k = (0, Z.jsx)(Se, {
        "aria-label": D,
        color: `ghostTertiary`,
        size: `inline`,
        children: O,
      })),
      (t[30] = D),
      (t[31] = k));
  let A;
  t[32] !== k || t[33] !== T
    ? ((A = (0, Z.jsxs)(`span`, {
        className: `inline-flex items-center gap-2`,
        children: [
          b,
          (0, Z.jsx)(y, {
            cloneCustomTrigger: !0,
            side: `bottom`,
            align: `start`,
            tooltipContent: T,
            children: k,
          }),
        ],
      })),
      (t[32] = k),
      (t[33] = T),
      (t[34] = A))
    : (A = t[34]);
  let j;
  t[35] === p
    ? (j = t[36])
    : ((j = p.formatMessage({
        id: `consumerAnalyticsPreview.limitHistory.sharedGroup`,
        defaultMessage: `Group plan usage history`,
        description: `Choose the breakdown for both the five-hour and weekly limit tables without changing their periods, total percentages, or other analytics sections`,
      })),
      (t[35] = p),
      (t[36] = j));
  let P;
  t[37] !== m || t[38] !== j
    ? ((P = (0, Z.jsx)(Ji, { ariaLabel: j, breakdown: m, onChange: h })),
      (t[37] = m),
      (t[38] = j),
      (t[39] = P))
    : (P = t[39]);
  let F;
  t[40] !== A || t[41] !== P
    ? ((F = (0, Z.jsx)(B.Header, {
        className: `@max-2xl:flex-col @max-2xl:items-start`,
        actionsAlignment: `end`,
        title: A,
        actions: P,
      })),
      (t[40] = A),
      (t[41] = P),
      (t[42] = F))
    : (F = t[42]);
  let I = v.length > 1 && `@2xl:grid-cols-2`,
    L;
  t[43] === I
    ? (L = t[44])
    : ((L = M(`grid grid-cols-1 items-start gap-6`, I)), (t[43] = I), (t[44] = L));
  let R;
  t[45] !== m || t[46] !== d || t[47] !== v || t[48] !== r || t[49] !== u || t[50] !== f
    ? ((R = v.map((e) =>
        (0, Z.jsx)(
          Oa,
          { limit: e, breakdown: m, data: d, state: f, onRetry: () => void u(), reduceMotion: r },
          `${e}:${d?.data_as_of}`,
        ),
      )),
      (t[45] = m),
      (t[46] = d),
      (t[47] = v),
      (t[48] = r),
      (t[49] = u),
      (t[50] = f),
      (t[51] = R))
    : (R = t[51]);
  let ee;
  t[52] !== L || t[53] !== R
    ? ((ee = (0, Z.jsx)(B.Content, {
        className: `gap-4`,
        children: (0, Z.jsx)(`div`, { className: L, children: R }),
      })),
      (t[52] = L),
      (t[53] = R),
      (t[54] = ee))
    : (ee = t[54]);
  let z;
  return (
    t[55] !== F || t[56] !== ee
      ? ((z = (0, Z.jsxs)(B, {
          id: `consumer-plan-limit-history`,
          className: `@container`,
          children: [F, ee],
        })),
        (t[55] = F),
        (t[56] = ee),
        (t[57] = z))
      : (z = t[57]),
    z
  );
}
function Oa(e) {
  let t = (0, ja.c)(30),
    { limit: n, breakdown: r, data: i, state: o, onRetry: s, reduceMotion: c } = e,
    [l, u] = (0, Ma.useState)(),
    [d, f] = (0, Ma.useState)(!1),
    p,
    m,
    h,
    g;
  t[0] !== r || t[1] !== i || t[2] !== l || t[3] !== n || t[4] !== d
    ? ((m = sa(i, { limit: n, breakdown: r })),
      (p = m?.periods),
      (g = p?.slice(0, d ? void 0 : 5)),
      (h =
        l !== void 0 && l == null
          ? null
          : (g?.find((e) => e.id === l)?.id ?? g?.find(ka)?.id ?? g?.[0]?.id)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = l),
      (t[3] = n),
      (t[4] = d),
      (t[5] = p),
      (t[6] = m),
      (t[7] = h),
      (t[8] = g))
    : ((p = t[5]), (m = t[6]), (h = t[7]), (g = t[8]));
  let _ = h,
    v;
  t[9] === n
    ? (v = t[10])
    : ((v = (0, Z.jsx)(B.Header, {
        size: `compact`,
        title: (0, Z.jsx)(a, {
          id: `consumerAnalyticsPreview.limitHistory.limitHeading`,
          defaultMessage: `{limit, select, fiveHour {5-hour limits} other {Weekly limits}}`,
          description: `Separate headings for five-hour and weekly allowances; one shared grouping control applies to both tables`,
          values: { limit: n },
        }),
      })),
      (t[9] = n),
      (t[10] = v));
  let y;
  t[11] !== n ||
  t[12] !== s ||
  t[13] !== c ||
  t[14] !== m ||
  t[15] !== _ ||
  t[16] !== o ||
  t[17] !== g
    ? ((y = (0, Z.jsx)(te, {
        children: (0, Z.jsx)(Aa, {
          limit: n,
          report: m,
          visiblePeriods: g,
          selectedId: _,
          onSelect: u,
          state: o,
          onRetry: s,
          reduceMotion: c,
        }),
      })),
      (t[11] = n),
      (t[12] = s),
      (t[13] = c),
      (t[14] = m),
      (t[15] = _),
      (t[16] = o),
      (t[17] = g),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== p || t[20] !== _ || t[21] !== d || t[22] !== o
    ? ((b =
        o === `ready` && p != null && p.length > 5
          ? (0, Z.jsx)(Se, {
              className: `self-start`,
              color: `secondary`,
              size: `compact`,
              onClick: () => {
                (d && !p.slice(0, 5).some((e) => e.id === _) && u(void 0), f(!d));
              },
              children: (0, Z.jsx)(a, {
                id: `consumerAnalyticsPreview.limitHistory.toggleRows`,
                defaultMessage: `{expanded, select, yes {Show less} other {Show more}}`,
                description: `Expand or collapse older periods in this limit table only; the other table and date range stay unchanged`,
                values: { expanded: d ? `yes` : `no` },
              }),
            })
          : null),
      (t[19] = p),
      (t[20] = _),
      (t[21] = d),
      (t[22] = o),
      (t[23] = b))
    : (b = t[23]);
  let x;
  t[24] !== y || t[25] !== b
    ? ((x = (0, Z.jsxs)(B.Content, { className: `gap-3`, children: [y, b] })),
      (t[24] = y),
      (t[25] = b),
      (t[26] = x))
    : (x = t[26]);
  let S;
  return (
    t[27] !== v || t[28] !== x
      ? ((S = (0, Z.jsxs)(B, { className: `@container min-w-0`, children: [v, x] })),
        (t[27] = v),
        (t[28] = x),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function ka(e) {
  return e.status === `current`;
}
function Aa(e) {
  let t = (0, ja.c)(24),
    {
      limit: n,
      report: r,
      visiblePeriods: i,
      selectedId: o,
      onSelect: s,
      state: c,
      onRetry: l,
      reduceMotion: u,
    } = e,
    d = E();
  if (c === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(Ct, {
            children: (0, Z.jsx)(a, {
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
  if (c === `error`) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Z.jsx)(a, {
          id: `consumerAnalyticsPreview.limitHistory.error`,
          defaultMessage: `Couldn't load limit history`,
          description: `Error state for one plan limit history table`,
        })),
        (t[1] = e))
      : (e = t[1]);
    let n;
    t[2] === l
      ? (n = t[3])
      : ((n =
          l == null
            ? void 0
            : (0, Z.jsx)(Se, {
                color: `secondary`,
                size: `compact`,
                onClick: l,
                children: (0, Z.jsx)(a, {
                  id: `consumerAnalyticsPreview.limitHistory.retry`,
                  defaultMessage: `Retry`,
                  description: `Retry loading limit period history`,
                }),
              })),
        (t[2] = l),
        (t[3] = n));
    let r;
    return (
      t[4] === n
        ? (r = t[5])
        : ((r = (0, Z.jsx)(Pe, { label: e, control: n })), (t[4] = n), (t[5] = r)),
      r
    );
  }
  if (r == null || (r.coverage === `partial` && r.periods.length === 0)) {
    let e;
    return (
      t[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(T, {
            layout: `settings-row`,
            children: (0, Z.jsx)(a, {
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
  if (c === `empty` || r.periods.length === 0) {
    let e;
    return (
      t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(T, {
            layout: `settings-row`,
            children: (0, Z.jsx)(a, {
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
  let f;
  t[8] !== d || t[9] !== n
    ? ((f = d.formatMessage(
        {
          id: `consumerAnalyticsPreview.limitHistory.tableName`,
          defaultMessage: `{limit, select, fiveHour {5-hour limits} other {Weekly limits}}`,
          description: `Accessible names of the two independent allowance history tables`,
        },
        { limit: n },
      )),
      (t[8] = d),
      (t[9] = n),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, Z.jsx)(`th`, {
        className: `px-4 py-2 text-start font-medium`,
        scope: `col`,
        children: (0, Z.jsx)(a, {
          id: `consumerAnalyticsPreview.limitHistory.period`,
          defaultMessage: `Period`,
          description: `Column containing the actual beginning and reset time of one plan allowance`,
        }),
      })),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(`thead`, {
        className: `bg-surface-secondary/92 text-secondary`,
        children: (0, Z.jsxs)(`tr`, {
          children: [
            p,
            (0, Z.jsx)(`th`, {
              className: `px-4 py-2 text-end font-medium`,
              scope: `col`,
              children: (0, Z.jsx)(a, {
                id: `consumerAnalyticsPreview.limitHistory.used`,
                defaultMessage: `% of limit used`,
                description: `Percentage consumed from the particular allowance identified by this row, not a share of all usage`,
              }),
            }),
          ],
        }),
      })),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] !== n || t[14] !== s || t[15] !== u || t[16] !== o || t[17] !== i
    ? ((h = i?.map((e) =>
        (0, Z.jsx)(
          pa,
          {
            period: e,
            limit: n,
            expanded: o === e.id,
            onToggle: () => s(o === e.id ? null : e.id),
            reduceMotion: u,
          },
          e.id,
        ),
      )),
      (t[13] = n),
      (t[14] = s),
      (t[15] = u),
      (t[16] = o),
      (t[17] = i),
      (t[18] = h))
    : (h = t[18]);
  let g;
  t[19] === h
    ? (g = t[20])
    : ((g = (0, Z.jsx)(`tbody`, { children: h })), (t[19] = h), (t[20] = g));
  let _;
  return (
    t[21] !== f || t[22] !== g
      ? ((_ = (0, Z.jsxs)(`table`, {
          className: `w-full text-xs leading-4`,
          "aria-label": f,
          children: [m, g],
        })),
        (t[21] = f),
        (t[22] = g),
        (t[23] = _))
      : (_ = t[23]),
    _
  );
}
var ja,
  Ma,
  Z,
  Na = e(() => {
    ((ja = q()),
      it(),
      ze(),
      $e(),
      (Ma = t(r(), 1)),
      F(),
      We(),
      n(),
      pe(),
      Ce(),
      g(),
      k(),
      St(),
      ie(),
      d(),
      $i(),
      ca(),
      Sa(),
      Ea(),
      (Z = K()));
  });
function Pa(e) {
  let t = (0, Fa.c)(4),
    { isActive: n, reduceMotion: r } = e,
    i = fe();
  if (!He(`1504786190`)) return null;
  let a = `${i.accountId}:${i.userId}`,
    o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== a
      ? ((o = (0, Ia.jsx)(Da, { isActive: n, reduceMotion: r }, a)),
        (t[0] = n),
        (t[1] = r),
        (t[2] = a),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
var Fa,
  Ia,
  La = e(() => {
    ((Fa = q()), We(), V(), Na(), (Ia = K()));
  });
function Ra(e) {
  let t = (0, Ba.c)(2),
    { metric: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Va.jsx)(a, {
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
function za(e) {
  let t = (0, Ba.c)(5),
    { value: n, metric: r } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Va.jsx)(a, {
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
    o = i ? n : n / 100,
    s = i ? `decimal` : `percent`,
    c = n !== 0 && Math.abs(n) < 0.01 ? 2 : void 0,
    l;
  return (
    t[1] !== o || t[2] !== s || t[3] !== c
      ? ((l = (0, Va.jsx)(Ke, {
          value: o,
          style: s,
          maximumFractionDigits: 2,
          maximumSignificantDigits: c,
        })),
        (t[1] = o),
        (t[2] = s),
        (t[3] = c),
        (t[4] = l))
      : (l = t[4]),
    l
  );
}
var Ba,
  Va,
  Ha = e(() => {
    ((Ba = q()), F(), (Va = K()));
  });
function Ua(e) {
  let t = (0, Wa.c)(16),
    { row: n, title: r, metrics: i } = e,
    o = n.usage,
    s;
  t[0] === r
    ? (s = t[1])
    : ((s =
        r ||
        (0, Ga.jsx)(a, {
          id: `consumerUsage.chats.untitled`,
          defaultMessage: `Untitled chat`,
          description: `Fallback title for a chat without a name or preview`,
        })),
      (t[0] = r),
      (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, Ga.jsx)(`span`, { className: `font-semibold text-default`, children: s })),
      (t[2] = s),
      (t[3] = c));
  let l = o?.usage_source ?? `unknown`,
    u;
  t[4] === l
    ? (u = t[5])
    : ((u = (0, Ga.jsx)(`span`, {
        children: (0, Ga.jsx)(a, {
          id: `consumerUsage.chats.funding`,
          defaultMessage: `{source, select, included_plan {Plan usage} plan_and_credits {Plan usage and credits} credits {Credits} none {No plan or credit drawdown} other {Funding unavailable}}`,
          description: `Funding source recorded by billing; credits include purchased and granted balance credits`,
          values: { source: l },
        }),
      })),
      (t[4] = l),
      (t[5] = u));
  let d;
  t[6] === n.subagentCount
    ? (d = t[7])
    : ((d =
        n.subagentCount == null
          ? null
          : (0, Ga.jsx)(`span`, {
              children: (0, Ga.jsx)(a, {
                id: `consumerUsage.chats.subagents`,
                defaultMessage: `{count, plural, one {# subagent} other {# subagents}}`,
                description: `Number of discovered subagent tasks included under this root chat`,
                values: { count: n.subagentCount },
              }),
            })),
      (t[6] = n.subagentCount),
      (t[7] = d));
  let f;
  t[8] !== i || t[9] !== o
    ? ((f =
        o?.data_status === `unavailable` || o == null
          ? (0, Ga.jsx)(a, {
              id: `consumerUsage.chats.unavailable`,
              defaultMessage: `-`,
              description: `An amount is unknown; it is not zero`,
            })
          : o.groups.map((e) =>
              (0, Ga.jsxs)(
                `div`,
                {
                  className: `flex flex-col gap-1.5`,
                  children: [
                    (0, Ga.jsxs)(`div`, {
                      className: `flex flex-wrap items-center gap-2`,
                      children: [
                        (0, Ga.jsx)(`span`, {
                          children: (0, Ga.jsx)(Et, { dimension: `model`, value: e.model }),
                        }),
                        (0, Ga.jsx)(`span`, {
                          children: (0, Ga.jsx)(Et, {
                            dimension: `reasoning_effort`,
                            value: e.reasoning_effort,
                          }),
                        }),
                        (0, Ga.jsx)(`span`, {
                          children: (0, Ga.jsx)(Et, { dimension: `speed`, value: e.speed }),
                        }),
                      ],
                    }),
                    i.map((t) =>
                      (0, Ga.jsxs)(
                        `div`,
                        {
                          className: `flex items-center justify-between gap-3`,
                          children: [
                            (0, Ga.jsx)(`span`, {
                              className: `text-secondary`,
                              children: (0, Ga.jsx)(Ra, { metric: t }),
                            }),
                            (0, Ga.jsx)(`span`, {
                              className: `tabular-nums`,
                              children: (0, Ga.jsx)(za, {
                                metric: t,
                                value: e[t] == null ? null : Number(e[t]),
                              }),
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  ],
                },
                JSON.stringify([e.product_experience, e.model, e.reasoning_effort, e.speed]),
              ),
            )),
      (t[8] = i),
      (t[9] = o),
      (t[10] = f))
    : (f = t[10]);
  let p;
  return (
    t[11] !== c || t[12] !== u || t[13] !== d || t[14] !== f
      ? ((p = (0, Ga.jsxs)(`div`, {
          className: `flex w-96 max-w-full flex-col gap-3 px-3 py-2 text-xs leading-4 select-none`,
          children: [c, u, d, f],
        })),
        (t[11] = c),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
var Wa,
  Ga,
  Ka = e(() => {
    ((Wa = q()), F(), Tt(), Ha(), (Ga = K()));
  }),
  qa,
  Ja = e(() => {
    qa = [`five_hour_limit_percent`, `weekly_limit_percent`, `balance_usage_credits`];
  }),
  Ya,
  Xa,
  Za,
  Qa,
  $a,
  eo = e(() => {
    ((Ya = t(u(), 1)),
      w(),
      i(),
      _e(),
      s(),
      je(),
      v(),
      I(),
      A(),
      (Xa = 2),
      (Za = 100),
      (Qa = 1e3),
      ($a = R(oe, ({ accountId: e, userId: t, threads: n }, { scope: r }) => {
        let i = n
            .filter((e) => !D(e))
            .sort((e, t) => t.updatedAt - e.updatedAt || e.id.localeCompare(t.id)),
          a = i.slice(0, Za);
        return {
          enabled: n.length > 0,
          queryKey: [
            `consumer-task-usage-v2`,
            e,
            t,
            U,
            a.map(({ id: e, createdAt: t }) => [e, t]).sort(([e], [t]) => e.localeCompare(t)),
            i.length > a.length,
          ],
          queryFn: async ({ signal: e }) => {
            let t = [],
              n = [];
            for (let i of (0, Ya.default)(a, Xa)) {
              e.throwIfAborted();
              let a = await Promise.all(
                i.map((e) =>
                  Fe(r, U).discoverSubagentDescendantSnapshot(Ue(e.id), { reconcile: !1 }),
                ),
              );
              (e.throwIfAborted(),
                i.forEach((e, r) => {
                  let i = a[r],
                    o = [...new Set(i.descendantThreads.map(({ id: e }) => e))];
                  (t.push({
                    thread: e,
                    usage: null,
                    subagentCount: i.isComplete ? o.length : null,
                  }),
                    !(!i.isComplete || o.length >= Qa) &&
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
              l = 0,
              u = new Set();
            for (let e of n) {
              let t = [e.thread_id, ...(e.descendant_thread_ids ?? [])];
              if (t.some((e) => u.has(e))) throw Error(`Task usage groups overlap`);
              (t.forEach((e) => u.add(e)),
                (s.length === Za || l + t.length > Qa) && (o.push(s), (s = []), (l = 0)),
                s.push(e),
                (l += t.length));
            }
            s.length > 0 && o.push(s);
            let d = [];
            for (let t of (0, Ya.default)(o, Xa)) {
              e.throwIfAborted();
              let n = await Promise.all(
                t.map((t) =>
                  c.safePost(`/wham/usage/thread_usage/query_v2`, {
                    requestBody: { threads: t },
                    signal: e,
                  }),
                ),
              );
              d.push(...n);
            }
            let f = new Map(d.flatMap((e) => e.threads.map((e) => [e.thread_id, e]))),
              p = d.map((e) => e.data_as_of);
            return {
              isTruncated: a.length < i.length,
              dataAsOf: p.every((e) => e != null)
                ? (p.sort((e, t) => Date.parse(e) - Date.parse(t))[0] ?? null)
                : null,
              rows: t.map((e) => ({ ...e, usage: f.get(e.thread.id) ?? null })),
            };
          },
          retry: !1,
          staleTime: qe.FIVE_MINUTES,
          refetchInterval: qe.FIVE_MINUTES,
        };
      })));
  });
function to(e) {
  let t = (0, uo.c)(15),
    { accountId: n, userId: r } = e,
    i;
  t[0] !== n || t[1] !== r
    ? ((i = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let { data: a, isPending: o, isError: s, refetch: c } = x(Zt, i);
  if (o || s) {
    let e;
    t[3] !== s || t[4] !== o ? ((e = lo(s, o)), (t[3] = s), (t[4] = o), (t[5] = e)) : (e = t[5]);
    let n;
    t[6] === c ? (n = t[7]) : ((n = () => void c()), (t[6] = c), (t[7] = n));
    let r;
    return (
      t[8] !== e || t[9] !== n
        ? ((r = (0, Q.jsx)(ro, { rows: void 0, dataAsOf: null, status: e, onRetry: n })),
          (t[8] = e),
          (t[9] = n),
          (t[10] = r))
        : (r = t[10]),
      r
    );
  }
  let l;
  return (
    t[11] !== n || t[12] !== a || t[13] !== r
      ? ((l = (0, Q.jsx)(no, { accountId: n, userId: r, threads: a })),
        (t[11] = n),
        (t[12] = a),
        (t[13] = r),
        (t[14] = l))
      : (l = t[14]),
    l
  );
}
function no(e) {
  let t = (0, uo.c)(18),
    { accountId: n, userId: r, threads: i } = e,
    a;
  t[0] !== n || t[1] !== i || t[2] !== r
    ? ((a = { accountId: n, userId: r, threads: i }),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = a))
    : (a = t[3]);
  let { data: o, isPending: s, isError: c, refetch: l } = x($a, a),
    u;
  t[4] !== o?.rows || t[5] !== i.length
    ? ((u = i.length === 0 ? [] : o?.rows), (t[4] = o?.rows), (t[5] = i.length), (t[6] = u))
    : (u = t[6]);
  let d = o?.dataAsOf ?? null,
    f = o?.isTruncated,
    p = i.length > 0 && s,
    m;
  t[7] !== c || t[8] !== p ? ((m = lo(c, p)), (t[7] = c), (t[8] = p), (t[9] = m)) : (m = t[9]);
  let h;
  t[10] === l ? (h = t[11]) : ((h = () => void l()), (t[10] = l), (t[11] = h));
  let g;
  return (
    t[12] !== u || t[13] !== d || t[14] !== f || t[15] !== m || t[16] !== h
      ? ((g = (0, Q.jsx)(ro, { rows: u, dataAsOf: d, isTruncated: f, status: m, onRetry: h })),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f),
        (t[15] = m),
        (t[16] = h),
        (t[17] = g))
      : (g = t[17]),
    g
  );
}
function ro(e) {
  let t = (0, uo.c)(33),
    { rows: n, dataAsOf: r, status: i, onRetry: o, isTruncated: s } = e,
    c = s !== void 0 && s,
    [l, u] = (0, fo.useState)(!1),
    [d, f] = (0, fo.useState)(`weekly_limit_percent`),
    p,
    m;
  if (t[0] !== n || t[1] !== d) {
    let e;
    (t[4] === n
      ? (e = t[5])
      : ((e = (e) =>
          e === `balance_usage_credits` ||
          n?.some((t) => {
            let { usage: n } = t;
            return co(n, e) != null;
          })),
        (t[4] = n),
        (t[5] = e)),
      (p = qa.filter(e)),
      (m = p.includes(d) ? d : (p[0] ?? `balance_usage_credits`)),
      (t[0] = n),
      (t[1] = d),
      (t[2] = p),
      (t[3] = m));
  } else ((p = t[2]), (m = t[3]));
  let h = m,
    g;
  t[6] !== h || t[7] !== n
    ? ((g = n?.slice().sort((e, t) => {
        let n = co(e.usage, h),
          r = co(t.usage, h);
        return n == null ? (r == null ? 0 : 1) : r == null ? -1 : r - n;
      })),
      (t[6] = h),
      (t[7] = n),
      (t[8] = g))
    : (g = t[8]);
  let _ = g,
    v;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(B.Header, {
        title: (0, Q.jsx)(a, {
          id: `consumerUsage.chats.title`,
          defaultMessage: `Top chats`,
          description: `Heading for task usage ranked by the selected allowance or credit metric`,
        }),
        subtitle: (0, Q.jsx)(a, {
          id: `consumerUsage.chats.recentDescription`,
          defaultMessage: `Up to 100 chats active on this device in the last 30 days, ranked by lifetime usage. Percentages compare against your current full limits and may exceed 100%.`,
          description: `At most the 100 most recently active local root chats from the last thirty days are checked. Amounts cover each chat's lifetime including subagents.`,
        }),
      })),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== h || t[11] !== p || t[12] !== o || t[13] !== l || t[14] !== _ || t[15] !== i
    ? ((y = (0, Q.jsx)(te, {
        children: (0, Q.jsx)(ao, {
          rows: _,
          status: i,
          onRetry: o,
          metric: h,
          metrics: p,
          setMetric: f,
          showAll: l,
        }),
      })),
      (t[10] = h),
      (t[11] = p),
      (t[12] = o),
      (t[13] = l),
      (t[14] = _),
      (t[15] = i),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] !== c || t[18] !== n || t[19] !== i
    ? ((b =
        i === `ready` && (c || n?.some(io))
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-secondary`,
              children: (0, Q.jsx)(a, {
                id: `consumerUsage.chats.incompleteCoverage`,
                defaultMessage: `Some chats or usage are not included; this ranking may be incomplete`,
                description: `The candidate limit, incomplete descendant discovery, or missing usage may prevent a complete ranking`,
              }),
            })
          : null),
      (t[17] = c),
      (t[18] = n),
      (t[19] = i),
      (t[20] = b))
    : (b = t[20]);
  let x;
  t[21] !== r || t[22] !== i
    ? ((x =
        i === `ready` && r != null
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-secondary`,
              children: (0, Q.jsx)(a, {
                id: `consumerUsage.chats.freshness`,
                defaultMessage: `Usage estimates before {date} UTC; recent activity may be delayed`,
                description: `Exclusive UTC source-hour bound for the least recent query batch. Totals may still be missing delayed activity; this is not a completeness timestamp or allowance reset time.`,
                values: {
                  date: (0, Q.jsx)(G, {
                    value: r,
                    month: `short`,
                    day: `numeric`,
                    hour: `numeric`,
                    minute: `2-digit`,
                    timeZone: `UTC`,
                  }),
                },
              }),
            })
          : null),
      (t[21] = r),
      (t[22] = i),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] !== n || t[25] !== l || t[26] !== i
    ? ((S =
        i === `ready` && n != null && n.length > 5
          ? (0, Q.jsx)(Se, {
              className: `self-start`,
              color: `secondary`,
              size: `compact`,
              onClick: () => u(!l),
              children: (0, Q.jsx)(a, {
                id: `consumerAnalyticsPreview.chats.toggleRows`,
                defaultMessage: `{expanded, select, yes {Show less} other {Show more}}`,
                description: `Expand or collapse the full chat table`,
                values: { expanded: l ? `yes` : `no` },
              }),
            })
          : null),
      (t[24] = n),
      (t[25] = l),
      (t[26] = i),
      (t[27] = S))
    : (S = t[27]);
  let C;
  return (
    t[28] !== y || t[29] !== b || t[30] !== x || t[31] !== S
      ? ((C = (0, Q.jsxs)(B, {
          id: `consumer-top-chats`,
          children: [v, (0, Q.jsxs)(B.Content, { className: `gap-3`, children: [y, b, x, S] })],
        })),
        (t[28] = y),
        (t[29] = b),
        (t[30] = x),
        (t[31] = S),
        (t[32] = C))
      : (C = t[32]),
    C
  );
}
function io(e) {
  let { usage: t } = e;
  return t?.data_status !== `available`;
}
function ao(e) {
  let t = (0, uo.c)(35),
    { rows: n, status: r, onRetry: i, metric: o, metrics: s, setMetric: c, showAll: l } = e,
    u = (0, fo.useId)();
  if (r === `loading`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Ct, {
            children: (0, Q.jsx)(a, {
              id: `consumerAnalyticsPreview.chats.loading`,
              defaultMessage: `Loading chat usage…`,
              description: `Loading the consumer chat-usage table`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r === `error`) {
    let e;
    t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(a, {
          id: `consumerAnalyticsPreview.chats.error`,
          defaultMessage: `Couldn't load chat usage`,
          description: `Chat usage could not be fetched; previous results are not presented as fresh usage`,
        })),
        (t[1] = e))
      : (e = t[1]);
    let n;
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(a, {
          id: `consumerAnalyticsPreview.chats.retry`,
          defaultMessage: `Retry`,
          description: `Reload chat usage`,
        })),
        (t[2] = n))
      : (n = t[2]);
    let r;
    return (
      t[3] === i
        ? (r = t[4])
        : ((r = (0, Q.jsx)(Pe, {
            label: e,
            control: (0, Q.jsx)(Se, {
              color: `secondary`,
              size: `compact`,
              onClick: i,
              children: n,
            }),
          })),
          (t[3] = i),
          (t[4] = r)),
      r
    );
  }
  if (n == null || n.length === 0) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(T, {
            layout: `settings-row`,
            children: (0, Q.jsx)(a, {
              id: `consumerUsage.chats.empty`,
              defaultMessage: `No recent chats on this device`,
              description: `No local root tasks were active in the last thirty days`,
            }),
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let d;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(`col`, {})), (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === s ? (f = t[8]) : ((f = s.map(oo)), (t[7] = s), (t[8] = f));
  let p;
  t[9] === f
    ? (p = t[10])
    : ((p = (0, Q.jsxs)(`colgroup`, { children: [d, f] })), (t[9] = f), (t[10] = p));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(`th`, {
        className: `px-4 py-2 text-start font-medium`,
        scope: `col`,
        children: (0, Q.jsx)(a, {
          id: `consumerAnalyticsPreview.chats.chat`,
          defaultMessage: `Chat`,
          description: `Column heading for the chat title`,
        }),
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  if (t[12] !== u || t[13] !== o || t[14] !== s || t[15] !== c) {
    let e;
    (t[17] !== u || t[18] !== o || t[19] !== c
      ? ((e = (e) =>
          (0, Q.jsx)(
            `th`,
            {
              className: `py-2 ps-2 pe-4 text-end font-medium`,
              scope: `col`,
              "aria-labelledby": `${u}-${e}`,
              "aria-sort": e === o ? `descending` : `none`,
              children: (0, Q.jsx)(`div`, {
                className: `flex justify-end`,
                children: (0, Q.jsx)(Se, {
                  allowShrink: !0,
                  color: `ghostMuted`,
                  size: `inline`,
                  onClick: () => c(e),
                  children: (0, Q.jsx)(`span`, {
                    id: `${u}-${e}`,
                    className: `text-end break-words whitespace-normal`,
                    children: (0, Q.jsx)(Ra, { metric: e }),
                  }),
                }),
              }),
            },
            e,
          )),
        (t[17] = u),
        (t[18] = o),
        (t[19] = c),
        (t[20] = e))
      : (e = t[20]),
      (h = s.map(e)),
      (t[12] = u),
      (t[13] = o),
      (t[14] = s),
      (t[15] = c),
      (t[16] = h));
  } else h = t[16];
  let g;
  t[21] === h
    ? (g = t[22])
    : ((g = (0, Q.jsx)(`thead`, {
        className: `bg-surface-secondary/92 text-secondary`,
        children: (0, Q.jsxs)(`tr`, { children: [m, h] }),
      })),
      (t[21] = h),
      (t[22] = g));
  let _;
  if (t[23] !== s || t[24] !== n || t[25] !== l) {
    let e;
    (t[27] === s
      ? (e = t[28])
      : ((e = (e) => (0, Q.jsx)(so, { row: e, metrics: s }, e.thread.id)),
        (t[27] = s),
        (t[28] = e)),
      (_ = n.slice(0, l ? void 0 : 5).map(e)),
      (t[23] = s),
      (t[24] = n),
      (t[25] = l),
      (t[26] = _));
  } else _ = t[26];
  let v;
  t[29] === _
    ? (v = t[30])
    : ((v = (0, Q.jsx)(`tbody`, { children: _ })), (t[29] = _), (t[30] = v));
  let y;
  return (
    t[31] !== p || t[32] !== g || t[33] !== v
      ? ((y = (0, Q.jsx)(`div`, {
          className: `@container min-w-0`,
          children: (0, Q.jsxs)(`table`, {
            className: `w-full table-fixed text-xs leading-4`,
            children: [p, g, v],
          }),
        })),
        (t[31] = p),
        (t[32] = g),
        (t[33] = v),
        (t[34] = y))
      : (y = t[34]),
    y
  );
}
function oo(e) {
  return (0, Q.jsx)(`col`, { className: `w-1/4 @2xl:w-36` }, e);
}
function so(e) {
  let t = (0, uo.c)(28),
    { row: n, metrics: r } = e,
    i = Te(),
    o;
  t[0] !== n.thread.name || t[1] !== n.thread.preview
    ? ((o = n.thread.name?.trim() || n.thread.preview.trim()),
      (t[0] = n.thread.name),
      (t[1] = n.thread.preview),
      (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] !== r || t[4] !== n || t[5] !== s
    ? ((c = (0, Q.jsx)(Ua, { row: n, title: s, metrics: r })),
      (t[3] = r),
      (t[4] = n),
      (t[5] = s),
      (t[6] = c))
    : (c = t[6]);
  let l;
  t[7] !== i || t[8] !== n.thread.id
    ? ((l = () => {
        (Me(), i(Ue(n.thread.id), U));
      }),
      (t[7] = i),
      (t[8] = n.thread.id),
      (t[9] = l))
    : (l = t[9]);
  let u;
  t[10] === s
    ? (u = t[11])
    : ((u =
        s ||
        (0, Q.jsx)(a, {
          id: `consumerUsage.chats.untitled`,
          defaultMessage: `Untitled chat`,
          description: `Fallback title for a chat without a name or preview`,
        })),
      (t[10] = s),
      (t[11] = u));
  let d;
  t[12] === u
    ? (d = t[13])
    : ((d = (0, Q.jsx)(`span`, { className: `wrap-anywhere whitespace-normal`, children: u })),
      (t[12] = u),
      (t[13] = d));
  let f;
  t[14] !== l || t[15] !== d
    ? ((f = (0, Q.jsx)(`td`, {
        className: `px-4 py-3 text-default`,
        children: (0, Q.jsx)(Se, {
          className: `w-full text-start`,
          color: `ghostMuted`,
          size: `inline`,
          onClick: l,
          children: d,
        }),
      })),
      (t[14] = l),
      (t[15] = d),
      (t[16] = f))
    : (f = t[16]);
  let p;
  if (t[17] !== r || t[18] !== n.usage) {
    let e;
    (t[20] === n.usage
      ? (e = t[21])
      : ((e = (e) =>
          (0, Q.jsx)(
            `td`,
            {
              className: `py-3 ps-2 pe-4 text-end tabular-nums`,
              children: (0, Q.jsx)(za, { value: co(n.usage, e), metric: e }),
            },
            e,
          )),
        (t[20] = n.usage),
        (t[21] = e)),
      (p = r.map(e)),
      (t[17] = r),
      (t[18] = n.usage),
      (t[19] = p));
  } else p = t[19];
  let m;
  t[22] !== f || t[23] !== p
    ? ((m = (0, Q.jsxs)(`tr`, {
        className: `border-t border-default focus-within:bg-primary-ghost-hover hover:bg-primary-ghost-hover`,
        children: [f, p],
      })),
      (t[22] = f),
      (t[23] = p),
      (t[24] = m))
    : (m = t[24]);
  let h;
  return (
    t[25] !== c || t[26] !== m
      ? ((h = (0, Q.jsx)(y, {
          delayDuration: 0,
          side: `top`,
          variant: `rich`,
          tooltipContent: c,
          children: m,
        })),
        (t[25] = c),
        (t[26] = m),
        (t[27] = h))
      : (h = t[27]),
    h
  );
}
function co(e, t) {
  return e == null || e.data_status === `unavailable` || e[t] == null ? null : Number(e[t]);
}
function lo(e, t) {
  return e ? `error` : t ? `loading` : `ready`;
}
var uo,
  fo,
  Q,
  po = e(() => {
    ((uo = q()),
      w(),
      i(),
      (fo = t(r(), 1)),
      F(),
      n(),
      Ce(),
      g(),
      ke(),
      k(),
      St(),
      ie(),
      d(),
      v(),
      Qt(),
      le(),
      Ha(),
      Ka(),
      Ja(),
      eo(),
      (Q = K()));
  });
function mo(e) {
  let t = (0, Ao.c)(9),
    { canViewCreditSettings: n, reduceMotion: r, scope: i, workspaceTaskUsage: a } = e,
    o = n === void 0 || n,
    s = r !== void 0 && r,
    c = i === void 0 ? `workspace` : i,
    l = a !== void 0 && a;
  if (c === `workspace`) {
    let e;
    return (
      t[0] !== o || t[1] !== s || t[2] !== c
        ? ((e = (0, $.jsx)(_o, {
            canViewCreditSettings: o,
            reduceMotion: s,
            scope: c,
            workspaceTaskUsage: !0,
          })),
          (t[0] = o),
          (t[1] = s),
          (t[2] = c),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  let u;
  return (
    t[4] !== o || t[5] !== s || t[6] !== c || t[7] !== l
      ? ((u = (0, $.jsx)(ho, {
          canViewCreditSettings: o,
          reduceMotion: s,
          scope: c,
          workspaceTaskUsage: l,
        })),
        (t[4] = o),
        (t[5] = s),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u))
      : (u = t[8]),
    u
  );
}
function ho(e) {
  let t = (0, Ao.c)(37),
    { canViewCreditSettings: n, reduceMotion: r, scope: i, workspaceTaskUsage: o } = e,
    s = fe(),
    c = E(),
    [l, u] = (0, jo.useState)(`usage`),
    d;
  t[0] !== s || t[1] !== i
    ? ((d = gt({ auth: s, days: 30, refetchInterval: !1, retry: 1, scope: i })),
      (t[0] = s),
      (t[1] = i),
      (t[2] = d))
    : (d = t[2]);
  let { data: f, isError: p } = N(d),
    m;
  t[3] !== f?.data || t[4] !== p
    ? ((m = p || f?.data.some(go)), (t[3] = f?.data), (t[4] = p), (t[5] = m))
    : (m = t[5]);
  let h = m,
    g;
  t[6] !== l || t[7] !== h || t[8] !== c || t[9] !== i
    ? ((g = h
        ? (0, $.jsx)(st, {
            ariaLabel: c.formatMessage({
              id: `settings.usage.billing.analytics.tabs.ariaLabel`,
              defaultMessage: `Usage analytics views`,
              description: `Accessible label for the tabs that switch between personal usage analytics and Code Review analytics in desktop usage settings`,
            }),
            selectedKey: l,
            tabs: [
              {
                key: `usage`,
                name:
                  i === `business`
                    ? (0, $.jsx)(a, {
                        id: `settings.usage.billing.analytics.tabs.personalUsage`,
                        defaultMessage: `Personal usage`,
                        description: `Business account tab that displays the current workspace member's personal Codex usage analytics`,
                      })
                    : (0, $.jsx)(a, {
                        id: `settings.usage.billing.analytics.tabs.usage`,
                        defaultMessage: `Usage`,
                        description: `Consumer account tab that displays personal Codex usage analytics`,
                      }),
                panelId: `usage-billing-personal-analytics`,
              },
              {
                key: `codeReview`,
                name: (0, $.jsx)(a, {
                  id: `settings.usage.billing.analytics.tabs.codeReview`,
                  defaultMessage: `Code review`,
                  description: `Tab that displays the account holder's Codex code review activity, issues, and reactions`,
                }),
                panelId: `usage-billing-code-review-analytics`,
              },
            ],
            variant: `toolbar`,
            onSelect: u,
          })
        : null),
      (t[6] = l),
      (t[7] = h),
      (t[8] = c),
      (t[9] = i),
      (t[10] = g))
    : (g = t[10]);
  let _ = h ? `usage-billing-personal-analytics` : void 0,
    v =
      h &&
      l === `codeReview` &&
      `invisible pointer-events-none absolute inset-x-0 top-0 h-0 overflow-hidden`,
    y;
  t[11] === v ? (y = t[12]) : ((y = M(v)), (t[11] = v), (t[12] = y));
  let b = h && l === `codeReview` ? !0 : void 0,
    x = h && l === `codeReview` ? !0 : void 0,
    S = h ? `tabpanel` : void 0,
    C = !h || l === `usage`,
    w;
  t[13] !== n || t[14] !== r || t[15] !== i || t[16] !== C || t[17] !== o
    ? ((w = (0, $.jsx)(_o, {
        canViewCreditSettings: n,
        isActive: C,
        reduceMotion: r,
        scope: i,
        workspaceTaskUsage: o,
      })),
      (t[13] = n),
      (t[14] = r),
      (t[15] = i),
      (t[16] = C),
      (t[17] = o),
      (t[18] = w))
    : (w = t[18]);
  let T;
  t[19] !== w || t[20] !== _ || t[21] !== y || t[22] !== b || t[23] !== x || t[24] !== S
    ? ((T = (0, $.jsx)(`div`, {
        id: _,
        className: y,
        "aria-hidden": b,
        inert: x,
        role: S,
        children: w,
      })),
      (t[19] = w),
      (t[20] = _),
      (t[21] = y),
      (t[22] = b),
      (t[23] = x),
      (t[24] = S),
      (t[25] = T))
    : (T = t[25]);
  let D;
  t[26] !== l || t[27] !== h || t[28] !== r || t[29] !== i
    ? ((D = h
        ? (0, $.jsx)(`div`, {
            id: `usage-billing-code-review-analytics`,
            className: M(
              l !== `codeReview` &&
                `invisible pointer-events-none absolute inset-x-0 top-0 h-0 overflow-hidden`,
            ),
            "aria-hidden": l !== `codeReview` || void 0,
            inert: l !== `codeReview` || void 0,
            role: `tabpanel`,
            children: (0, $.jsx)(oi, { isActive: l === `codeReview`, reduceMotion: r, scope: i }),
          })
        : null),
      (t[26] = l),
      (t[27] = h),
      (t[28] = r),
      (t[29] = i),
      (t[30] = D))
    : (D = t[30]);
  let O;
  t[31] !== T || t[32] !== D
    ? ((O = (0, $.jsxs)(`div`, { className: `relative`, children: [T, D] })),
      (t[31] = T),
      (t[32] = D),
      (t[33] = O))
    : (O = t[33]);
  let k;
  return (
    t[34] !== O || t[35] !== g
      ? ((k = (0, $.jsxs)(`div`, { className: `flex w-full flex-col gap-5`, children: [g, O] })),
        (t[34] = O),
        (t[35] = g),
        (t[36] = k))
      : (k = t[36]),
    k
  );
}
function go(e) {
  let { n_comments: t, n_reactions: n, n_reviews: r } = e;
  return t > 0 || n > 0 || r > 0;
}
function _o(e) {
  let t = (0, Ao.c)(293),
    { canViewCreditSettings: n, isActive: r, reduceMotion: i, scope: o, workspaceTaskUsage: s } = e,
    c = r === void 0 || r,
    u = i !== void 0 && i,
    d = E(),
    { accountId: f, userId: p } = fe(),
    { data: m } = Ge(),
    h = o === `workspace` ? (m?.id ?? null) : f,
    g = o === `consumer`,
    _ = He(g ? `393259752` : !1),
    v = g && _,
    y = He(v && !s ? `1034085511` : !1),
    [b, x] = (0, jo.useState)(7),
    [S, C] = (0, jo.useState)(`surface`),
    [w, D] = (0, jo.useState)(null),
    [O, k] = (0, jo.useState)(null),
    [A, j] = (0, jo.useState)(7),
    [N, P] = (0, jo.useState)(null),
    [F, I] = (0, jo.useState)(o === `workspace` ? 30 : 7),
    L = h ?? null,
    R = p ?? null,
    ee,
    z,
    ne;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = { hasManualSelection: !1, hasResolved: !1 }),
      (z = { hasManualSelection: !1, hasResolved: !1 }),
      (ne = { hasManualSelection: !1, hasResolved: !1 }),
      (t[0] = ee),
      (t[1] = z),
      (t[2] = ne))
    : ((ee = t[0]), (z = t[1]), (ne = t[2]));
  let re;
  t[3] !== o || t[4] !== L || t[5] !== R
    ? ((re = { accountId: L, userId: R, scope: o, usage: ee, tokens: z, tools: ne }),
      (t[3] = o),
      (t[4] = L),
      (t[5] = R),
      (t[6] = re))
    : (re = t[6]);
  let [ie, ae] = (0, jo.useState)(re),
    oe =
      o === `workspace` ||
      (ie.accountId === (h ?? null) && ie.userId === (p ?? null) && ie.scope === o);
  oe ||
    (ae({
      accountId: h ?? null,
      userId: p ?? null,
      scope: o,
      usage: { hasManualSelection: !1, hasResolved: !1 },
      tokens: { hasManualSelection: !1, hasResolved: !1 },
      tools: { hasManualSelection: !1, hasResolved: !1 },
    }),
    x(7),
    C(`surface`),
    D(null),
    k(null),
    j(7),
    P(null),
    I(7));
  let [V, se] = (0, jo.useState)(!1),
    [ce, le] = (0, jo.useState)(!1),
    [ue, de] = (0, jo.useState)(!1),
    [H, U] = (0, jo.useState)(!1),
    [W, pe] = (0, jo.useState)(null),
    [G, me] = (0, jo.useState)(null),
    [he, K] = (0, jo.useState)(null),
    [_e, ve] = (0, jo.useState)(null),
    [ye, be] = (0, jo.useState)(null),
    xe = g || (o === `business` && O === `reasoning`) ? `product` : (O ?? `product`),
    Se = c && o !== `workspace` && oe,
    Ce;
  t[7] !== Se || t[8] !== b
    ? ((Ce = { days: b, enabled: Se }), (t[7] = Se), (t[8] = b), (t[9] = Ce))
    : (Ce = t[9]);
  let { data: q, isLoading: we, isError: Te, refetch: Ee } = yt(Ce),
    De = we && !Te && q == null && W?.accountId === (h ?? null) && W.userId === (p ?? null),
    J = De ? W.data : q,
    Oe =
      o !== `workspace` &&
      W?.accountId === (h ?? null) &&
      W.userId === (p ?? null) &&
      Math.max(W.data.total, W.data.byModel.total) > 0 &&
      J != null &&
      Math.max(J.total, J.byModel.total) === 0,
    ke;
  t[10] === J?.byModel.series
    ? (ke = t[11])
    : ((ke = J?.byModel.series.some(Do) ?? !1), (t[10] = J?.byModel.series), (t[11] = ke));
  let Ae = ke,
    je = J?.series.some(Eo) ?? !1,
    Me = Ae && (S === `model` || !je) ? `model` : `surface`,
    Ne = c && (!g || n),
    Pe;
  t[12] !== o || t[13] !== xe || t[14] !== Ne || t[15] !== b
    ? ((Pe = { breakdown: xe, days: b, enabled: Ne, scope: o }),
      (t[12] = o),
      (t[13] = xe),
      (t[14] = Ne),
      (t[15] = b),
      (t[16] = Pe))
    : (Pe = t[16]);
  let { data: Fe, isLoading: Ie, isError: Le, refetch: Re } = _t(Pe),
    ze =
      o === `business` &&
      O == null &&
      (Me === `model` || Fe?.total === 0) &&
      (Fe?.paidModelTotal ?? 0) > 0,
    Be = c && ze,
    Ve;
  t[17] !== o || t[18] !== Be || t[19] !== b
    ? ((Ve = { breakdown: `model`, days: b, enabled: Be, scope: o }),
      (t[17] = o),
      (t[18] = Be),
      (t[19] = b),
      (t[20] = Ve))
    : (Ve = t[20]);
  let { data: Ue, isLoading: We, isError: Ke, refetch: qe } = _t(Ve),
    Je = ze ? Ue : Fe,
    Ye = ze ? We : Ie,
    Xe = ze ? Ke : Le,
    Ze = ze ? qe : Re,
    Qe = ze ? `model` : xe,
    $e = {
      current: [
        {
          total: q == null ? void 0 : Math.max(q.total, q.byModel.total),
          isLoading: we,
          isError: Te,
        },
        ...(!g || n
          ? [
              {
                total: Je == null ? void 0 : Math.max(Je.total, Je.paidModelTotal ?? 0),
                isLoading: Ye,
                isError: Xe,
              },
            ]
          : []),
      ],
      days: b,
      enabled: c && o !== `workspace` && oe,
      ...ie.usage,
    },
    { shouldProbe: et } = fi($e),
    { data: tt, isLoading: nt, isError: rt } = yt({ days: 30, enabled: et }),
    {
      data: it,
      isLoading: at,
      isError: ot,
    } = _t({ breakdown: xe, days: 30, enabled: et && (!g || n), scope: o }),
    st = fi({
      ...$e,
      fallback: [
        {
          total: tt == null ? void 0 : Math.max(tt.total, tt.byModel.total),
          isLoading: nt,
          isError: rt,
        },
        ...(!g || n
          ? [
              {
                total: it == null ? void 0 : Math.max(it.total, it.paidModelTotal ?? 0),
                isLoading: at,
                isError: ot,
              },
            ]
          : []),
      ],
    }),
    ct = (et && !st.shouldResolve) || (Ye && !Te);
  st.shouldResolve && (ae(To), st.shouldSelectThirtyDays && x(30));
  let ut = Ye && !Xe && Je == null && G?.accountId === (h ?? null) && G.userId === (p ?? null),
    dt = ut ? G.data : Je,
    ft =
      dt?.dataFreshnessTimestamp ??
      (Ye && !Xe && Je == null && he?.accountId === (h ?? null) && he.userId === (p ?? null)
        ? he.data
        : null),
    mt;
  t[21] !== h || t[22] !== ft || t[23] !== p
    ? ((mt = () => {
        K(ft == null ? null : { accountId: h ?? null, data: ft, userId: p ?? null });
      }),
      (t[21] = h),
      (t[22] = ft),
      (t[23] = p),
      (t[24] = mt))
    : (mt = t[24]);
  let gt = mt,
    vt;
  t[25] !== h || t[26] !== dt || t[27] !== J || t[28] !== gt || t[29] !== p
    ? ((vt = (e) => {
        let t = J == null ? void 0 : Math.max(J.total, J.byModel.total);
        (se(t === 0),
          pe(
            J != null && (t ?? 0) > 0 ? { accountId: h ?? null, data: J, userId: p ?? null } : null,
          ),
          gt(),
          le(dt?.total === 0),
          me(
            dt != null && dt.total > 0
              ? { accountId: h ?? null, data: dt, userId: p ?? null }
              : null,
          ),
          ae(wo),
          x(e));
      }),
      (t[25] = h),
      (t[26] = dt),
      (t[27] = J),
      (t[28] = gt),
      (t[29] = p),
      (t[30] = vt))
    : (vt = t[30]);
  let bt = vt,
    St =
      !u && Je != null && G?.accountId === (h ?? null) && G.userId === (p ?? null) && G.data !== Je,
    Ct;
  t[31] === Ze
    ? (Ct = t[32])
    : ((Ct = () => {
        Ze();
      }),
      (t[31] = Ze),
      (t[32] = Ct));
  let wt;
  t[33] !== Xe ||
  t[34] !== Ye ||
  t[35] !== ut ||
  t[36] !== ce ||
  t[37] !== u ||
  t[38] !== St ||
  t[39] !== Ct
    ? ((wt = {
        animateDataChanges: St,
        isError: Xe,
        isLoading: Ye,
        isUpdating: ut,
        preserveEmptyLayout: ce,
        reduceMotion: u,
        onRetry: Ct,
      }),
      (t[33] = Xe),
      (t[34] = Ye),
      (t[35] = ut),
      (t[36] = ce),
      (t[37] = u),
      (t[38] = St),
      (t[39] = Ct),
      (t[40] = wt))
    : (wt = t[40]);
  let Tt = wt,
    Et = c && !g,
    Dt;
  t[41] !== o || t[42] !== Et || t[43] !== A
    ? ((Dt = { days: A, enabled: Et, scope: o }),
      (t[41] = o),
      (t[42] = Et),
      (t[43] = A),
      (t[44] = Dt))
    : (Dt = t[44]);
  let { data: Ot, isLoading: kt, isError: At, refetch: jt } = xt(Dt),
    Mt = {
      current: [{ total: Ot?.total, isLoading: kt, isError: At }],
      days: A,
      enabled: c && o === `business` && oe,
      ...ie.tokens,
    },
    { shouldProbe: Nt } = fi(Mt),
    { data: Pt, isLoading: Ft, isError: It } = xt({ days: 30, enabled: Nt, scope: o }),
    Lt = fi({ ...Mt, fallback: [{ total: Pt?.total, isLoading: Ft, isError: It }] }),
    Rt = Nt && !Lt.shouldResolve;
  Lt.shouldResolve && (ae(Co), Lt.shouldSelectThirtyDays && j(30));
  let zt = kt && !At && Ot == null && _e?.accountId === (h ?? null) && _e.userId === (p ?? null),
    Bt = zt ? _e.data : Ot,
    Vt;
  t[45] !== Bt?.models || t[46] !== o
    ? ((Vt = o === `business` ? Bt?.models.filter(So) : Bt?.models),
      (t[45] = Bt?.models),
      (t[46] = o),
      (t[47] = Vt))
    : (Vt = t[47]);
  let Ht = Vt,
    Ut;
  t[48] !== N || t[49] !== Ht
    ? ((Ut =
        N != null &&
        Ht?.some((e) => {
          let { key: t } = e;
          return t === N;
        })
          ? N
          : null),
      (t[48] = N),
      (t[49] = Ht),
      (t[50] = Ut))
    : (Ut = t[50]);
  let Wt = Ut,
    Gt =
      !u &&
      Ot != null &&
      _e?.accountId === (h ?? null) &&
      _e.userId === (p ?? null) &&
      _e.data !== Ot,
    Kt = kt || Rt,
    qt;
  t[51] === jt
    ? (qt = t[52])
    : ((qt = () => {
        jt();
      }),
      (t[51] = jt),
      (t[52] = qt));
  let Jt;
  t[53] !== At ||
  t[54] !== zt ||
  t[55] !== ue ||
  t[56] !== u ||
  t[57] !== Gt ||
  t[58] !== Kt ||
  t[59] !== qt
    ? ((Jt = {
        animateDataChanges: Gt,
        isError: At,
        isLoading: Kt,
        isUpdating: zt,
        preserveEmptyLayout: ue,
        reduceMotion: u,
        onRetry: qt,
      }),
      (t[53] = At),
      (t[54] = zt),
      (t[55] = ue),
      (t[56] = u),
      (t[57] = Gt),
      (t[58] = Kt),
      (t[59] = qt),
      (t[60] = Jt))
    : (Jt = t[60]);
  let Yt = Jt,
    Xt;
  t[61] !== F || t[62] !== c || t[63] !== o
    ? ((Xt = { days: F, enabled: c, scope: o }),
      (t[61] = F),
      (t[62] = c),
      (t[63] = o),
      (t[64] = Xt))
    : (Xt = t[64]);
  let { data: Zt, isLoading: Qt, isError: en, refetch: tn } = pt(Xt),
    nn;
  t[65] !== F || t[66] !== c || t[67] !== o
    ? ((nn = { days: F, enabled: c, scope: o }),
      (t[65] = F),
      (t[66] = c),
      (t[67] = o),
      (t[68] = nn))
    : (nn = t[68]);
  let { data: rn, isLoading: an, isError: on, refetch: sn } = ht(nn),
    Y = {
      current: [
        { total: Zt?.total, isLoading: Qt, isError: en },
        { total: rn?.total, isLoading: an, isError: on },
      ],
      days: F,
      enabled: c && o !== `workspace` && oe,
      ...ie.tools,
    },
    { shouldProbe: cn } = fi(Y),
    { data: ln, isLoading: fn, isError: vn } = pt({ days: 30, enabled: cn, scope: o }),
    { data: yn, isLoading: bn, isError: xn } = ht({ days: 30, enabled: cn, scope: o }),
    Sn = fi({
      ...Y,
      fallback: [
        { total: ln?.total, isLoading: fn, isError: vn },
        { total: yn?.total, isLoading: bn, isError: xn },
      ],
    });
  Sn.shouldResolve && (ae(xo), Sn.shouldSelectThirtyDays && I(30));
  let Cn = ye?.accountId === (h ?? null) && ye.userId === (p ?? null),
    wn;
  t[69] !== Cn || t[70] !== u
    ? ((wn = (e, t) => !u && e != null && Cn && t != null && t !== e),
      (t[69] = Cn),
      (t[70] = u),
      (t[71] = wn))
    : (wn = t[71]);
  let Tn = wn,
    En = Qt && !en && Zt == null && Cn && ye.data.plugins != null,
    Dn = an && !on && rn == null && Cn && ye.data.skills != null,
    On = En ? ye.data.plugins : Zt,
    kn = Dn ? ye.data.skills : rn,
    An = o !== `workspace` && Cn && (ye.data.plugins?.total ?? 0) > 0 && On?.total === 0,
    jn = o !== `workspace` && Cn && (ye.data.skills?.total ?? 0) > 0 && kn?.total === 0,
    Mn,
    Nn,
    Pn,
    Fn,
    In,
    Ln,
    zn,
    Bn,
    Vn,
    Hn,
    Un,
    Wn,
    Gn,
    X,
    Kn,
    qn;
  if (
    t[72] !== h ||
    t[73] !== n ||
    t[74] !== v ||
    t[75] !== ft ||
    t[76] !== Tt ||
    t[77] !== Qe ||
    t[78] !== dt ||
    t[79] !== J ||
    t[80] !== On?.dataFreshnessTimestamp ||
    t[81] !== On?.total ||
    t[82] !== kn?.dataFreshnessTimestamp ||
    t[83] !== kn?.total ||
    t[84] !== Bt ||
    t[85] !== Ae ||
    t[86] !== d ||
    t[87] !== c ||
    t[88] !== g ||
    t[89] !== Xe ||
    t[90] !== Te ||
    t[91] !== we ||
    t[92] !== De ||
    t[93] !== en ||
    t[94] !== Qt ||
    t[95] !== on ||
    t[96] !== an ||
    t[97] !== ct ||
    t[98] !== q ||
    t[99] !== Zt ||
    t[100] !== H ||
    t[101] !== V ||
    t[102] !== Oe ||
    t[103] !== w ||
    t[104] !== W ||
    t[105] !== _e ||
    t[106] !== u ||
    t[107] !== Ee ||
    t[108] !== gt ||
    t[109] !== o ||
    t[110] !== Me ||
    t[111] !== Wt ||
    t[112] !== cn ||
    t[113] !== rn ||
    t[114] !== A ||
    t[115] !== Yt ||
    t[116] !== Ht ||
    t[117] !== Sn.shouldResolve ||
    t[118] !== bt ||
    t[119] !== b ||
    t[120] !== p
  ) {
    let e = dn(On?.dataFreshnessTimestamp, kn?.dataFreshnessTimestamp);
    ((Pn =
      Zt != null && rn != null && Zt.total === 0 && rn.total === 0 && !Qt && !an && !en && !on),
      (Fn = H && (Qt || an) && (Zt?.total ?? 0) === 0 && (rn?.total ?? 0) === 0 && !en && !on),
      (In =
        o !== `workspace` &&
        ((Qt && Zt == null) || (an && rn == null) || (cn && !Sn.shouldResolve)) &&
        (On?.total ?? 0) === 0 &&
        (kn?.total ?? 0) === 0 &&
        !en &&
        !on));
    let r;
    t[137] !== v || t[138] !== J
      ? ((r = v && (J == null || J.attribution.every(bo))),
        (t[137] = v),
        (t[138] = J),
        (t[139] = r))
      : (r = t[139]);
    let i = r;
    ((Hn = `flex w-full flex-col gap-[22px]`),
      t[140] !== h ||
      t[141] !== J?.attribution ||
      t[142] !== Te ||
      t[143] !== we ||
      t[144] !== De ||
      t[145] !== ct ||
      t[146] !== q ||
      t[147] !== V ||
      t[148] !== W ||
      t[149] !== u ||
      t[150] !== Ee ||
      t[151] !== i ||
      t[152] !== bt ||
      t[153] !== b ||
      t[154] !== p
        ? ((Un = i
            ? (0, $.jsx)(
                na,
                {
                  buckets: J?.attribution,
                  days: b,
                  onDaysChange: bt,
                  status: {
                    animateDataChanges:
                      q != null &&
                      W?.accountId === (h ?? null) &&
                      W.userId === (p ?? null) &&
                      W.data !== q,
                    isError: Te,
                    isLoading: we || ct,
                    isUpdating: De,
                    preserveEmptyLayout: V,
                    reduceMotion: u,
                    onRetry: () => {
                      Ee();
                    },
                  },
                },
                `${h}:${p}`,
              )
            : null),
          (t[140] = h),
          (t[141] = J?.attribution),
          (t[142] = Te),
          (t[143] = we),
          (t[144] = De),
          (t[145] = ct),
          (t[146] = q),
          (t[147] = V),
          (t[148] = W),
          (t[149] = u),
          (t[150] = Ee),
          (t[151] = i),
          (t[152] = bt),
          (t[153] = b),
          (t[154] = p),
          (t[155] = Un))
        : (Un = t[155]),
      t[156] !== h ||
      t[157] !== v ||
      t[158] !== J ||
      t[159] !== Ae ||
      t[160] !== d ||
      t[161] !== Te ||
      t[162] !== we ||
      t[163] !== De ||
      t[164] !== ct ||
      t[165] !== q ||
      t[166] !== V ||
      t[167] !== Oe ||
      t[168] !== w ||
      t[169] !== W ||
      t[170] !== u ||
      t[171] !== Ee ||
      t[172] !== o ||
      t[173] !== Me ||
      t[174] !== i ||
      t[175] !== bt ||
      t[176] !== b ||
      t[177] !== p
        ? ((Wn =
            !i && o !== `workspace`
              ? (0, $.jsxs)(B, {
                  children: [
                    (0, $.jsx)(B.Header, {
                      actionsAlignment: `end`,
                      size: `default`,
                      title: (0, $.jsx)(a, {
                        id: `settings.usage.billing.personalUsage.history.title`,
                        defaultMessage: `Usage history`,
                        description: `Heading above a Consumer or Business user's own included-plan usage history in Codex desktop analytics settings; the chart does not show remaining plan allowance`,
                      }),
                      subtitle: (0, $.jsx)(a, {
                        id: `settings.usage.billing.personalUsage.history.subtitle`,
                        defaultMessage: `See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.`,
                        description: `Supporting text beneath Usage history in Codex desktop analytics settings. Explains that a Consumer or Business user's included-plan activity and credit charts include Work, Codex, and other agentic tasks, but exclude ordinary Chat conversations. Work, Codex, and Chat are OpenAI product names.`,
                      }),
                      actions: (0, $.jsx)(mn, {
                        ariaLabel: d.formatMessage({
                          id: `settings.usage.billing.personalUsage.history.periodLabel`,
                          defaultMessage: `Personal usage history time range`,
                          description: `Accessible label for a Consumer or Business user's historical personal Codex usage date-range selector`,
                        }),
                        days: b,
                        onChange: bt,
                      }),
                    }),
                    (0, $.jsx)(B.Content, {
                      children: (0, $.jsx)(Oo, {
                        consumerAnalytics: v,
                        actions: Ae
                          ? (0, $.jsx)(lt, {
                              ariaLabel: d.formatMessage({
                                id: `settings.usage.billing.personalUsage.breakdownLabel`,
                                defaultMessage: `Group personal usage by product or model`,
                                description: `Accessible label for the selector that groups a Consumer or Business account holder’s personal usage by the Codex or Work product, or by AI model`,
                              }),
                              options: [
                                { id: `surface`, label: (0, $.jsx)(gn, { breakdown: `product` }) },
                                { id: `model`, label: (0, $.jsx)(pn, { breakdown: `model` }) },
                              ],
                              selectedId: Me,
                              variant: `inset`,
                              onSelect: (e) => {
                                (D(Me), C(e));
                              },
                            })
                          : void 0,
                        breakdown: Me === `model` ? `model` : `product`,
                        data: Me === `model` ? J?.byModel : J,
                        isPersonalUsage: !0,
                        preservePopulatedCardLayout: Oe,
                        scope: o,
                        status: {
                          animateDataChanges:
                            !u &&
                            ((w != null && w !== Me) ||
                              (q != null &&
                                W?.accountId === (h ?? null) &&
                                W.userId === (p ?? null) &&
                                W.data !== q)),
                          isError: Te,
                          isLoading: we || ct,
                          isUpdating: De,
                          preserveEmptyLayout: V,
                          reduceMotion: u,
                          onAnimationEnd: () => D(null),
                          onRetry: () => {
                            Ee();
                          },
                        },
                      }),
                    }),
                    (0, $.jsxs)(B.Footer, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, $.jsx)(ge, { className: `shrink-0`, asset: l }),
                        (0, $.jsx)(a, {
                          id: `settings.usage.daily.subtitle`,
                          defaultMessage: `Usage data is approximate and may be delayed by up to 6 hours`,
                          description: `Description for daily usage in usage settings`,
                        }),
                      ],
                    }),
                  ],
                })
              : null),
          (t[156] = h),
          (t[157] = v),
          (t[158] = J),
          (t[159] = Ae),
          (t[160] = d),
          (t[161] = Te),
          (t[162] = we),
          (t[163] = De),
          (t[164] = ct),
          (t[165] = q),
          (t[166] = V),
          (t[167] = Oe),
          (t[168] = w),
          (t[169] = W),
          (t[170] = u),
          (t[171] = Ee),
          (t[172] = o),
          (t[173] = Me),
          (t[174] = i),
          (t[175] = bt),
          (t[176] = b),
          (t[177] = p),
          (t[178] = Wn))
        : (Wn = t[178]),
      t[179] !== v || t[180] !== c || t[181] !== u
        ? ((Gn = v ? (0, $.jsx)(Pa, { isActive: c, reduceMotion: u }) : null),
          (t[179] = v),
          (t[180] = c),
          (t[181] = u),
          (t[182] = Gn))
        : (Gn = t[182]),
      t[183] !== h ||
      t[184] !== n ||
      t[185] !== v ||
      t[186] !== ft ||
      t[187] !== Tt ||
      t[188] !== Qe ||
      t[189] !== dt ||
      t[190] !== d ||
      t[191] !== g ||
      t[192] !== Xe ||
      t[193] !== gt ||
      t[194] !== o ||
      t[195] !== bt ||
      t[196] !== b ||
      t[197] !== p
        ? ((X =
            (!g || n) &&
            (o === `workspace` || Xe || (dt?.total ?? 0) > 0 || (dt?.paidModelTotal ?? 0) > 0)
              ? (0, $.jsxs)(B, {
                  children: [
                    (0, $.jsx)(B.Header, {
                      className:
                        o === `workspace` ? void 0 : `max-sm:flex-col max-sm:items-stretch`,
                      actionsAlignment: `end`,
                      size: `default`,
                      title: (0, $.jsx)(ko, { scope: o, consumerAnalytics: v }),
                      subtitle:
                        ft == null
                          ? (0, $.jsx)(a, {
                              id: `settings.usage.billing.credits.history.subtitle`,
                              defaultMessage: `Track credits usage over time`,
                              description: `Description for the credit usage history chart when freshness is unavailable`,
                            })
                          : (0, $.jsx)(a, {
                              id: `settings.usage.billing.credits.history.subtitle.updated`,
                              defaultMessage: `Track credits usage over time. Updated {date}`,
                              description: `Description and source freshness timestamp for the credit usage history chart`,
                              values: { date: un(ft, d) },
                            }),
                      actions: (0, $.jsxs)(`div`, {
                        className: `flex flex-wrap items-center justify-end gap-2`,
                        children: [
                          (0, $.jsx)(mn, {
                            ariaLabel: v
                              ? d.formatMessage({
                                  id: `settings.usage.billing.credits.consumer.history.periodLabel`,
                                  defaultMessage: `Credits history time range`,
                                  description: `Accessible label for the Consumer credit history date-range selector`,
                                })
                              : d.formatMessage({
                                  id: `settings.usage.billing.credits.history.periodLabel`,
                                  defaultMessage: `Credit usage history time range`,
                                  description: `Accessible label for the enterprise credit usage history date-range selector`,
                                }),
                            days: b,
                            onChange: (e) => {
                              if (o !== `workspace`) {
                                bt(e);
                                return;
                              }
                              (gt(),
                                le(dt?.total === 0),
                                me(
                                  dt != null && dt.total > 0
                                    ? { accountId: h ?? null, data: dt, userId: p ?? null }
                                    : null,
                                ),
                                x(e));
                            },
                          }),
                          (0, $.jsx)(hn, {
                            breakdown: Qe,
                            scope: o,
                            onChange: (e) => {
                              (gt(), le(dt?.total === 0), me(null), k(e));
                            },
                          }),
                        ],
                      }),
                    }),
                    (0, $.jsx)(B.Content, {
                      children: (0, $.jsx)(Oo, {
                        consumerAnalytics: v,
                        breakdown: Qe,
                        data: dt,
                        scope: o,
                        status: Tt,
                      }),
                    }),
                  ],
                })
              : null),
          (t[183] = h),
          (t[184] = n),
          (t[185] = v),
          (t[186] = ft),
          (t[187] = Tt),
          (t[188] = Qe),
          (t[189] = dt),
          (t[190] = d),
          (t[191] = g),
          (t[192] = Xe),
          (t[193] = gt),
          (t[194] = o),
          (t[195] = bt),
          (t[196] = b),
          (t[197] = p),
          (t[198] = X))
        : (X = t[198]),
      t[199] !== h ||
      t[200] !== Bt ||
      t[201] !== d ||
      t[202] !== g ||
      t[203] !== _e ||
      t[204] !== o ||
      t[205] !== Wt ||
      t[206] !== A ||
      t[207] !== Yt ||
      t[208] !== Ht ||
      t[209] !== p
        ? ((Kn = g
            ? null
            : (0, $.jsxs)(B, {
                children: [
                  (0, $.jsx)(B.Header, {
                    className: o === `workspace` ? void 0 : `max-sm:flex-col max-sm:items-stretch`,
                    actionsAlignment: `end`,
                    size: `default`,
                    title:
                      o === `workspace`
                        ? (0, $.jsx)(a, {
                            id: `settings.usage.billing.tokens.history.title`,
                            defaultMessage: `Token usage history`,
                            description: `Title for the token usage history chart in enterprise billing settings`,
                          })
                        : (0, $.jsx)(a, {
                            id: `settings.usage.billing.tokens.business.history.title`,
                            defaultMessage: `Tokens by model`,
                            description: `Heading above a Business workspace member's own token usage grouped by AI model in Codex desktop analytics settings`,
                          }),
                    subtitle:
                      Bt?.dataFreshnessTimestamp == null
                        ? (0, $.jsx)(a, {
                            id: `settings.usage.billing.tokens.history.subtitle`,
                            defaultMessage: `Track token usage over time`,
                            description: `Description for the token usage history chart when freshness is unavailable`,
                          })
                        : (0, $.jsx)(a, {
                            id: `settings.usage.billing.tokens.history.subtitle.updated`,
                            defaultMessage: `Track token usage over time. Updated {date}`,
                            description: `Description and source freshness timestamp for the token usage history chart`,
                            values: { date: un(Bt.dataFreshnessTimestamp, d) },
                          }),
                    actions: (0, $.jsxs)(`div`, {
                      className: `flex flex-wrap items-center justify-end gap-2`,
                      children: [
                        (0, $.jsx)(mn, {
                          ariaLabel: d.formatMessage({
                            id: `settings.usage.billing.tokens.history.periodLabel`,
                            defaultMessage: `Token usage history time range`,
                            description: `Accessible label for the enterprise token usage history date-range selector`,
                          }),
                          days: A,
                          onChange: (e) => {
                            (de(Bt?.total === 0),
                              ve((e) =>
                                Bt?.total
                                  ? { accountId: h ?? null, data: Bt, userId: p ?? null }
                                  : o === `business` &&
                                      e?.accountId === (h ?? null) &&
                                      e.userId === (p ?? null)
                                    ? e
                                    : null,
                              ),
                              ae(yo),
                              j(e));
                          },
                        }),
                        (0, $.jsx)(_n, { models: Ht ?? [], selectedModel: Wt, onChange: P }),
                      ],
                    }),
                  }),
                  (0, $.jsx)(B.Content, {
                    children: (0, $.jsx)(zi, {
                      data: Bt,
                      preservePopulatedCardLayout:
                        o === `business` &&
                        _e?.accountId === (h ?? null) &&
                        _e.userId === (p ?? null) &&
                        _e.data.total > 0 &&
                        Bt?.total === 0,
                      selectedModel: Wt,
                      scope: o,
                      status: Yt,
                    }),
                  }),
                ],
              })),
          (t[199] = h),
          (t[200] = Bt),
          (t[201] = d),
          (t[202] = g),
          (t[203] = _e),
          (t[204] = o),
          (t[205] = Wt),
          (t[206] = A),
          (t[207] = Yt),
          (t[208] = Ht),
          (t[209] = p),
          (t[210] = Kn))
        : (Kn = t[210]),
      t[211] !== v || t[212] !== c || t[213] !== u || t[214] !== o
        ? ((qn =
            o === `consumer` || o === `business`
              ? (0, $.jsx)(mi, { consumerAnalytics: v, isActive: c, reduceMotion: u, scope: o })
              : null),
          (t[211] = v),
          (t[212] = c),
          (t[213] = u),
          (t[214] = o),
          (t[215] = qn))
        : (qn = t[215]),
      (Nn = B),
      (Mn = B.Header),
      (Ln = `end`),
      (zn = `default`),
      t[216] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((Bn = (0, $.jsx)(a, {
            id: `settings.usage.billing.activity.title`,
            defaultMessage: `Tool activity`,
            description: `Title for skill and plugin usage charts in enterprise billing settings`,
          })),
          (t[216] = Bn))
        : (Bn = t[216]),
      (Vn =
        e == null
          ? (0, $.jsx)(a, {
              id: `settings.usage.billing.activity.subtitle`,
              defaultMessage: `See which plugins and skills were used over time`,
              description: `Description for plugin and skill activity charts when freshness is unavailable`,
            })
          : (0, $.jsx)(a, {
              id: `settings.usage.billing.activity.subtitle.updated`,
              defaultMessage: `See which plugins and skills were used over time. Updated {date}`,
              description: `Description and oldest source freshness timestamp for the combined plugin and skill activity charts`,
              values: { date: un(e, d) },
            })),
      (t[72] = h),
      (t[73] = n),
      (t[74] = v),
      (t[75] = ft),
      (t[76] = Tt),
      (t[77] = Qe),
      (t[78] = dt),
      (t[79] = J),
      (t[80] = On?.dataFreshnessTimestamp),
      (t[81] = On?.total),
      (t[82] = kn?.dataFreshnessTimestamp),
      (t[83] = kn?.total),
      (t[84] = Bt),
      (t[85] = Ae),
      (t[86] = d),
      (t[87] = c),
      (t[88] = g),
      (t[89] = Xe),
      (t[90] = Te),
      (t[91] = we),
      (t[92] = De),
      (t[93] = en),
      (t[94] = Qt),
      (t[95] = on),
      (t[96] = an),
      (t[97] = ct),
      (t[98] = q),
      (t[99] = Zt),
      (t[100] = H),
      (t[101] = V),
      (t[102] = Oe),
      (t[103] = w),
      (t[104] = W),
      (t[105] = _e),
      (t[106] = u),
      (t[107] = Ee),
      (t[108] = gt),
      (t[109] = o),
      (t[110] = Me),
      (t[111] = Wt),
      (t[112] = cn),
      (t[113] = rn),
      (t[114] = A),
      (t[115] = Yt),
      (t[116] = Ht),
      (t[117] = Sn.shouldResolve),
      (t[118] = bt),
      (t[119] = b),
      (t[120] = p),
      (t[121] = Mn),
      (t[122] = Nn),
      (t[123] = Pn),
      (t[124] = Fn),
      (t[125] = In),
      (t[126] = Ln),
      (t[127] = zn),
      (t[128] = Bn),
      (t[129] = Vn),
      (t[130] = Hn),
      (t[131] = Un),
      (t[132] = Wn),
      (t[133] = Gn),
      (t[134] = X),
      (t[135] = Kn),
      (t[136] = qn));
  } else
    ((Mn = t[121]),
      (Nn = t[122]),
      (Pn = t[123]),
      (Fn = t[124]),
      (In = t[125]),
      (Ln = t[126]),
      (zn = t[127]),
      (Bn = t[128]),
      (Vn = t[129]),
      (Hn = t[130]),
      (Un = t[131]),
      (Wn = t[132]),
      (Gn = t[133]),
      (X = t[134]),
      (Kn = t[135]),
      (qn = t[136]));
  let Jn;
  t[217] === d
    ? (Jn = t[218])
    : ((Jn = d.formatMessage({
        id: `settings.usage.billing.activity.periodLabel`,
        defaultMessage: `Tool activity time range`,
        description: `Accessible label for the enterprise tool activity date-range selector`,
      })),
      (t[217] = d),
      (t[218] = Jn));
  let Yn;
  t[219] !== h || t[220] !== On || t[221] !== kn || t[222] !== Pn || t[223] !== p
    ? ((Yn = (e) => {
        (U(Pn),
          be(
            (On?.total ?? 0) > 0 || (kn?.total ?? 0) > 0
              ? { accountId: h ?? null, data: { plugins: On, skills: kn }, userId: p ?? null }
              : null,
          ),
          ae(vo),
          I(e));
      }),
      (t[219] = h),
      (t[220] = On),
      (t[221] = kn),
      (t[222] = Pn),
      (t[223] = p),
      (t[224] = Yn))
    : (Yn = t[224]);
  let Xn;
  t[225] !== F || t[226] !== Jn || t[227] !== Yn
    ? ((Xn = (0, $.jsx)(mn, { ariaLabel: Jn, days: F, onChange: Yn })),
      (t[225] = F),
      (t[226] = Jn),
      (t[227] = Yn),
      (t[228] = Xn))
    : (Xn = t[228]);
  let Zn;
  t[229] !== Mn || t[230] !== Ln || t[231] !== zn || t[232] !== Bn || t[233] !== Vn || t[234] !== Xn
    ? ((Zn = (0, $.jsx)(Mn, {
        actionsAlignment: Ln,
        size: zn,
        title: Bn,
        subtitle: Vn,
        actions: Xn,
      })),
      (t[229] = Mn),
      (t[230] = Ln),
      (t[231] = zn),
      (t[232] = Bn),
      (t[233] = Vn),
      (t[234] = Xn),
      (t[235] = Zn))
    : (Zn = t[235]);
  let Qn =
      o === `workspace` &&
      `transition-all duration-relaxed ease-basic motion-reduce:transition-none`,
    $n = o === `workspace` && (Pn || Fn ? `min-h-16 justify-center` : `min-h-128`),
    er;
  t[236] !== Qn || t[237] !== $n
    ? ((er = M(`gap-3`, Qn, $n)), (t[236] = Qn), (t[237] = $n), (t[238] = er))
    : (er = t[238]);
  let tr;
  t[239] !== v ||
  t[240] !== On ||
  t[241] !== kn ||
  t[242] !== Pn ||
  t[243] !== Fn ||
  t[244] !== In ||
  t[245] !== en ||
  t[246] !== Qt ||
  t[247] !== En ||
  t[248] !== on ||
  t[249] !== an ||
  t[250] !== Dn ||
  t[251] !== Zt ||
  t[252] !== H ||
  t[253] !== An ||
  t[254] !== jn ||
  t[255] !== ye?.data ||
  t[256] !== u ||
  t[257] !== tn ||
  t[258] !== sn ||
  t[259] !== o ||
  t[260] !== Tn ||
  t[261] !== rn
    ? ((tr =
        (Pn && !An && !jn) || Fn || In
          ? (0, $.jsx)(te, {
              children: (0, $.jsx)(T, {
                layout: `settings-row`,
                children:
                  Fn || In
                    ? (0, $.jsx)(Rn, { compact: !0, reduceMotion: u })
                    : (0, $.jsx)(a, {
                        id: `settings.usage.billing.activity.empty`,
                        defaultMessage: `No plugin calls or skills used during this period`,
                        description: `Empty state when neither plugins nor skills were used during the selected enterprise workspace usage period`,
                      }),
              }),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                o === `workspace` || (On?.total ?? 0) > 0 || en || An
                  ? (0, $.jsx)(Rr, {
                      consumerAnalytics: v,
                      data: On,
                      preservePopulatedCardLayout: An,
                      scope: o,
                      status: {
                        animateDataChanges: Tn(Zt, ye?.data.plugins),
                        isError: en,
                        isLoading: Qt,
                        isUpdating: En,
                        preserveEmptyLayout: H,
                        reduceMotion: u,
                        onRetry: () => {
                          tn();
                        },
                      },
                      title:
                        o === `workspace` || v
                          ? (0, $.jsx)(a, {
                              id: `settings.usage.billing.activity.plugins`,
                              defaultMessage: `Plugins called`,
                              description: `Label for Consumer or enterprise plugin invocation activity`,
                            })
                          : (0, $.jsx)(a, {
                              id: `settings.usage.billing.activity.personalPluginCalls`,
                              defaultMessage: `Plugin calls`,
                              description: `Chart title showing the number of plugins called by the current Consumer or Business workspace member in Codex desktop analytics settings`,
                            }),
                      unit: `calls`,
                    })
                  : null,
                o === `workspace` || (kn?.total ?? 0) > 0 || on || jn
                  ? (0, $.jsx)(Rr, {
                      consumerAnalytics: v,
                      data: kn,
                      preservePopulatedCardLayout: jn,
                      scope: o,
                      status: {
                        animateDataChanges: Tn(rn, ye?.data.skills),
                        isError: on,
                        isLoading: an,
                        isUpdating: Dn,
                        preserveEmptyLayout: H,
                        reduceMotion: u,
                        onRetry: () => {
                          sn();
                        },
                      },
                      title: (0, $.jsx)(a, {
                        id: `settings.usage.billing.activity.skills`,
                        defaultMessage: `Skills used`,
                        description: `Label for enterprise skill invocation activity`,
                      }),
                      unit: `uses`,
                    })
                  : null,
              ],
            })),
      (t[239] = v),
      (t[240] = On),
      (t[241] = kn),
      (t[242] = Pn),
      (t[243] = Fn),
      (t[244] = In),
      (t[245] = en),
      (t[246] = Qt),
      (t[247] = En),
      (t[248] = on),
      (t[249] = an),
      (t[250] = Dn),
      (t[251] = Zt),
      (t[252] = H),
      (t[253] = An),
      (t[254] = jn),
      (t[255] = ye?.data),
      (t[256] = u),
      (t[257] = tn),
      (t[258] = sn),
      (t[259] = o),
      (t[260] = Tn),
      (t[261] = rn),
      (t[262] = tr))
    : (tr = t[262]);
  let nr;
  t[263] !== er || t[264] !== tr
    ? ((nr = (0, $.jsx)(B.Content, { className: er, children: tr })),
      (t[263] = er),
      (t[264] = tr),
      (t[265] = nr))
    : (nr = t[265]);
  let rr;
  t[266] !== Nn || t[267] !== Zn || t[268] !== nr
    ? ((rr = (0, $.jsxs)(Nn, { children: [Zn, nr] })),
      (t[266] = Nn),
      (t[267] = Zn),
      (t[268] = nr),
      (t[269] = rr))
    : (rr = t[269]);
  let ir;
  t[270] !== h || t[271] !== v || t[272] !== c || t[273] !== y || t[274] !== p || t[275] !== s
    ? ((ir =
        v && !s && y && c && h != null && p != null
          ? (0, $.jsx)(to, { accountId: h, userId: p }, `${h}:${p}`)
          : null),
      (t[270] = h),
      (t[271] = v),
      (t[272] = c),
      (t[273] = y),
      (t[274] = p),
      (t[275] = s),
      (t[276] = ir))
    : (ir = t[276]);
  let ar;
  t[277] !== h || t[278] !== c || t[279] !== p || t[280] !== s
    ? ((ar =
        !s || !c || h == null || p == null ? null : (0, $.jsx)($t, { accountId: h, userId: p })),
      (t[277] = h),
      (t[278] = c),
      (t[279] = p),
      (t[280] = s),
      (t[281] = ar))
    : (ar = t[281]);
  let or;
  return (
    t[282] !== Hn ||
    t[283] !== Un ||
    t[284] !== Wn ||
    t[285] !== Gn ||
    t[286] !== X ||
    t[287] !== Kn ||
    t[288] !== qn ||
    t[289] !== rr ||
    t[290] !== ir ||
    t[291] !== ar
      ? ((or = (0, $.jsxs)(`div`, {
          className: Hn,
          children: [Un, Wn, Gn, X, Kn, qn, rr, ir, ar],
        })),
        (t[282] = Hn),
        (t[283] = Un),
        (t[284] = Wn),
        (t[285] = Gn),
        (t[286] = X),
        (t[287] = Kn),
        (t[288] = qn),
        (t[289] = rr),
        (t[290] = ir),
        (t[291] = ar),
        (t[292] = or))
      : (or = t[292]),
    or
  );
}
function vo(e) {
  return { ...e, tools: { ...e.tools, hasManualSelection: !0 } };
}
function yo(e) {
  return { ...e, tokens: { ...e.tokens, hasManualSelection: !0 } };
}
function bo(e) {
  return e.attribution != null;
}
function xo(e) {
  return { ...e, tools: { ...e.tools, hasResolved: !0 } };
}
function So(e) {
  let { total: t } = e;
  return t > 0;
}
function Co(e) {
  return { ...e, tokens: { ...e.tokens, hasResolved: !0 } };
}
function wo(e) {
  return { ...e, usage: { ...e.usage, hasManualSelection: !0 } };
}
function To(e) {
  return { ...e, usage: { ...e.usage, hasResolved: !0 } };
}
function Eo(e) {
  let { total: t } = e;
  return t > 0;
}
function Do(e) {
  let { total: t } = e;
  return t > 0;
}
function Oo(e) {
  let t = (0, Ao.c)(13),
    {
      actions: n,
      breakdown: r,
      data: i,
      isPersonalUsage: a,
      preservePopulatedCardLayout: o,
      consumerAnalytics: s,
      scope: c,
      status: l,
    } = e,
    u = s !== void 0 && s,
    d = i?.total ?? 0,
    f = c === `workspace` && (i?.total ?? 0) > 0,
    p;
  t[0] !== d || t[1] !== f
    ? ((p = { credits: d, enabled: f }), (t[0] = d), (t[1] = f), (t[2] = p))
    : (p = t[2]);
  let { data: m } = ft(p),
    h =
      c !== `workspace` || m?.estimated_usage_usd_micros == null
        ? null
        : m.estimated_usage_usd_micros / 1e6,
    g;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== u ||
    t[6] !== i ||
    t[7] !== a ||
    t[8] !== o ||
    t[9] !== c ||
    t[10] !== l ||
    t[11] !== h
      ? ((g = (0, $.jsx)(ki, {
          consumerAnalytics: u,
          actions: n,
          breakdown: r,
          data: i,
          estimatedSpendUsd: h,
          isPersonalUsage: a,
          preservePopulatedCardLayout: o,
          scope: c,
          status: l,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = u),
        (t[6] = i),
        (t[7] = a),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = h),
        (t[12] = g))
      : (g = t[12]),
    g
  );
}
function ko(e) {
  let t = (0, Ao.c)(3),
    { consumerAnalytics: n, scope: r } = e;
  if (n !== void 0 && n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(a, {
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
        ? ((e = (0, $.jsx)(a, {
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
      ? ((i = (0, $.jsx)(a, {
          id: `settings.usage.billing.credits.history.title`,
          defaultMessage: `Credit usage history`,
          description: `Title for the credit usage history chart in usage settings`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
var Ao,
  jo,
  $,
  Mo = e(() => {
    ((Ao = q()),
      f(),
      ze(),
      $e(),
      (jo = t(r(), 1)),
      F(),
      We(),
      Le(),
      pe(),
      Ce(),
      ct(),
      ot(),
      bt(),
      k(),
      d(),
      V(),
      ln(),
      fn(),
      Sn(),
      di(),
      pi(),
      xi(),
      Jr(),
      Kn(),
      Ri(),
      Gi(),
      oa(),
      La(),
      po(),
      ($ = K()));
  });
export { Mo as n, mo as t };
//# sourceMappingURL=billing-analytics-3bae5ee4e65b.js.map
