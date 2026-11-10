import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Am as n,
  Cot as r,
  Ext as i,
  IDt as a,
  Ixt as o,
  Mm as s,
  Mz as c,
  Nz as l,
  Pxt as u,
  TJ as d,
  VDt as f,
  Zxt as p,
  _xt as m,
  cz as h,
  gG as g,
  i3 as _,
  jDt as v,
  jm as y,
  km as b,
  r3 as x,
  sz as S,
  t3 as C,
  uV as w,
  vzt as T,
  wot as E,
  xMt as D,
  yzt as O,
  zxt as k,
} from "./app-shared-bbfeca5e5737.js";
import {
  ACn as A,
  CCn as j,
  Cyn as M,
  GMr as N,
  Jyr as P,
  OPr as F,
  TCn as I,
  ZMr as L,
  Zyr as R,
  aAr as z,
  iPr as B,
  jCn as V,
  kPr as H,
  lAr as U,
  sPr as ee,
  tAr as te,
  tNr as ne,
  wyn as re,
} from "./app-initial-5851df3f6cb1.js";
import { n as ie, t as ae } from "./run-now-49b74db2bf75.js";
import { i as oe, r as se } from "./conversation-actions-2dd1edaae253.js";
import { n as ce, r as le, t as ue } from "./task-unread-7620ebd43694.js";
import { r as de, t as fe } from "./menu-items-18cfbf2a8c48.js";
import {
  a as W,
  i as pe,
  n as me,
  o as he,
  r as ge,
  s as _e,
  t as ve,
} from "./update-content-3518078bea44.js";
var G;
function K() {
  return (K = e(() => {
    (u(),
      ne(),
      E(),
      ee(),
      (G = p(r, (e, { get: t }) => {
        let n = t(L),
          r = t(N);
        return {
          enabled: n.status === `allowed` && r != null,
          queryKey: [`cloud-automations`, `latest-update`, r, e],
          queryFn: ({ signal: t }) =>
            B.safeGet(`/automation/{automation_id}/latest_backing_run`, {
              parameters: { path: { automation_id: e }, query: { include_snapshot: !0 } },
              signal: t,
            }),
          refetchOnMount: `always`,
          retry: !1,
          staleTime: 0,
        };
      })));
  }))();
}
function q(e, t = document.querySelector(`[data-scheduled-tasks-main]`), n = `pointerdown`) {
  if (!(t instanceof HTMLElement)) return;
  let r = (r) => {
      (n === `click` && r.defaultPrevented) ||
        !(r.target instanceof Element) ||
        !t.contains(r.target) ||
        r.target.closest(
          `[data-automation-card], [data-automation-list], [data-type="unified-composer"], [data-composer-density]`,
        ) ||
        e();
    },
    i = (t) => {
      t.key === `Escape` && !t.defaultPrevented && e();
    },
    a = n === `click` ? document : t;
  return (
    a.addEventListener(n, r),
    document.addEventListener(`keydown`, i),
    () => {
      (a.removeEventListener(n, r), document.removeEventListener(`keydown`, i));
    }
  );
}
function J() {
  return (J = e(() => {}))();
}
function ye(e) {
  let n = (0, Z.c)(46),
    {
      item: s,
      relatedActions: c,
      onClose: l,
      onEdit: u,
      onRunNow: d,
      isRunNowPending: f,
      summary: p,
      children: m,
    } = e,
    h = f !== void 0 && f,
    g = o(r),
    { isPending: _ } = k(ie, s.automation.id),
    v = h || _,
    y = i(),
    b = (0, Q.useEffectEvent)(l),
    x;
  n[0] === b ? (x = n[1]) : ((x = () => q(b)), (n[0] = b), (n[1] = x));
  let S;
  (n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = []), (n[2] = S)) : (S = n[2]),
    (0, Q.useEffect)(x, S));
  let { automation: C } = s,
    T;
  n[3] === C ? (T = n[4]) : ((T = te(C)), (n[3] = C), (n[4] = T));
  let { canManage: E } = T,
    D = E && z(C) !== `completed`,
    O;
  n[5] !== C || n[6] !== E
    ? ((O = E && C.executor !== `local` && z(C) !== `completed`), (n[5] = C), (n[6] = E), (n[7] = O))
    : (O = n[7]);
  let A = O,
    j = C.conversation_id,
    M = j != null && s.teamId == null,
    N;
  n[8] !== s || n[9] !== y || n[10] !== g
    ? ((N = () => {
        oe(g, s, y);
      }),
      (n[8] = s),
      (n[9] = y),
      (n[10] = g),
      (n[11] = N))
    : (N = n[11]);
  let P = N,
    F;
  n[12] === C.display_emoji
    ? (F = n[13])
    : ((F = C.display_emoji || (0, $.jsx)(w, {})), (n[12] = C.display_emoji), (n[13] = F));
  let I;
  n[14] !== C || n[15] !== s || n[16] !== p
    ? ((I = p ?? (0, $.jsx)(ge, { item: s, status: z(C) })),
      (n[14] = C),
      (n[15] = s),
      (n[16] = p),
      (n[17] = I))
    : (I = n[17]);
  let L = A ? d : void 0,
    R;
  n[18] !== v || n[19] !== s || n[20] !== l || n[21] !== L
    ? ((R = (0, $.jsx)(fe, { item: s, onDeleted: l, onRunNow: L, isRunNowPending: v, source: `editor` })),
      (n[18] = v),
      (n[19] = s),
      (n[20] = l),
      (n[21] = L),
      (n[22] = R))
    : (R = n[22]);
  let B = D ? u : void 0,
    V;
  n[23] !== M || n[24] !== m || n[25] !== P || n[26] !== c
    ? ((V =
        m == null && (c != null || M)
          ? (0, $.jsxs)(`div`, {
              className: c == null ? void 0 : `ms-2 mb-2 flex flex-wrap items-center justify-end gap-2`,
              children: [
                c,
                M
                  ? (0, $.jsx)(t, {
                      className: c == null ? `ms-2 mb-2 w-fit` : `w-fit`,
                      color: `outlineSurface`,
                      radius: `full`,
                      size: `panelAction`,
                      onClick: P,
                      children: (0, $.jsx)(a, {
                        id: `automations.editor.openChat.button.label`,
                        defaultMessage: `Open chat`,
                        description: `Button in the Scheduled task details panel that opens the task's conversation`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (n[23] = M),
      (n[24] = m),
      (n[25] = P),
      (n[26] = c),
      (n[27] = V))
    : (V = n[27]);
  let H;
  n[28] !== M ||
  n[29] !== A ||
  n[30] !== m ||
  n[31] !== j ||
  n[32] !== v ||
  n[33] !== s ||
  n[34] !== d ||
  n[35] !== P
    ? ((H =
        m ??
        (j == null
          ? (0, $.jsx)(X, { item: s })
          : (0, $.jsx)(be, {
              item: s,
              isRunNowPending: v,
              onOpenConversation: M ? P : void 0,
              onRunNow: A ? d : void 0,
            }))),
      (n[28] = M),
      (n[29] = A),
      (n[30] = m),
      (n[31] = j),
      (n[32] = v),
      (n[33] = s),
      (n[34] = d),
      (n[35] = P),
      (n[36] = H))
    : (H = n[36]);
  let U;
  return (
    n[37] !== C.title ||
    n[38] !== l ||
    n[39] !== R ||
    n[40] !== B ||
    n[41] !== V ||
    n[42] !== H ||
    n[43] !== F ||
    n[44] !== I
      ? ((U = (0, $.jsx)(Y, {
          title: C.title,
          icon: F,
          summary: I,
          actions: R,
          onEdit: B,
          footer: V,
          onClose: l,
          children: H,
        })),
        (n[37] = C.title),
        (n[38] = l),
        (n[39] = R),
        (n[40] = B),
        (n[41] = V),
        (n[42] = H),
        (n[43] = F),
        (n[44] = I),
        (n[45] = U))
      : (U = n[45]),
    U
  );
}
function Y(e) {
  let n = (0, Z.c)(29),
    { title: r, icon: i, summary: a, actions: o, onEdit: s, onClose: c, footer: l, children: u } = e,
    d = f(),
    p;
  n[0] === d
    ? (p = n[1])
    : ((p = d.formatMessage({
        id: `automations.editor.editTask`,
        defaultMessage: `Edit task`,
        description: `Accessible label for the pencil button in the Scheduled task details panel that opens the task editor`,
      })),
      (n[0] = d),
      (n[1] = p));
  let m = p,
    h;
  n[2] !== m || n[3] !== s
    ? ((h =
        s == null
          ? null
          : (0, $.jsx)(S, {
              tooltipContent: m,
              children: (0, $.jsx)(t, {
                "aria-label": m,
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                onClick: s,
                children: (0, $.jsx)(g, {}),
              }),
            })),
      (n[2] = m),
      (n[3] = s),
      (n[4] = h))
    : (h = n[4]);
  let _;
  n[5] !== o || n[6] !== h
    ? ((_ = (0, $.jsxs)($.Fragment, { children: [o, h] })), (n[5] = o), (n[6] = h), (n[7] = _))
    : (_ = n[7]);
  let v;
  n[8] === d
    ? (v = n[9])
    : ((v = d.formatMessage({
        id: `automations.scheduled.detail.close`,
        defaultMessage: `Close task details`,
        description: `Accessible label to close the scheduled task details panel`,
      })),
      (n[8] = d),
      (n[9] = v));
  let y;
  n[10] === i
    ? (y = n[11])
    : ((y = (0, $.jsx)(`span`, {
        className: `flex size-8 shrink-0 items-center justify-center select-none`,
        "aria-hidden": !0,
        children: i,
      })),
      (n[10] = i),
      (n[11] = y));
  let b;
  n[12] === r
    ? (b = n[13])
    : ((b = (0, $.jsx)(`h2`, {
        className: `text-lg leading-7 font-medium break-words text-default select-text`,
        children: r,
      })),
      (n[12] = r),
      (n[13] = b));
  let x;
  n[14] === a
    ? (x = n[15])
    : ((x = (0, $.jsx)(`div`, { className: `text-sm leading-5 text-tertiary select-none`, children: a })),
      (n[14] = a),
      (n[15] = x));
  let C;
  n[16] !== b || n[17] !== x
    ? ((C = (0, $.jsxs)(`div`, { className: `min-w-0`, children: [b, x] })),
      (n[16] = b),
      (n[17] = x),
      (n[18] = C))
    : (C = n[18]);
  let w;
  n[19] !== y || n[20] !== C
    ? ((w = (0, $.jsxs)(`div`, { className: `flex min-w-0 items-center gap-3`, children: [y, C] })),
      (n[19] = y),
      (n[20] = C),
      (n[21] = w))
    : (w = n[21]);
  let T;
  return (
    n[22] !== u || n[23] !== l || n[24] !== c || n[25] !== _ || n[26] !== v || n[27] !== w
      ? ((T = (0, $.jsx)(j, {
          variant: `summary`,
          actions: _,
          closeLabel: v,
          footer: l,
          leading: w,
          onClose: c,
          children: u,
        })),
        (n[22] = u),
        (n[23] = l),
        (n[24] = c),
        (n[25] = _),
        (n[26] = v),
        (n[27] = w),
        (n[28] = T))
      : (T = n[28]),
    T
  );
}
function be(e) {
  let n = (0, Z.c)(51),
    { item: i, isRunNowPending: s, onOpenConversation: c, onRunNow: l } = e,
    u = o(r),
    d = k(H, `3092648596`),
    { data: f, isPending: p, isError: m, refetch: h } = k(G, i.automation.id),
    g = f != null && `latest_update` in f ? f.latest_update : f,
    _ = f != null && `last_backing_run` in f ? f.last_backing_run : null,
    v = g?.metadata.automation_requires_user_action === !0,
    y;
  n[0] !== m || n[1] !== v || n[2] !== g
    ? ((y = !m && g != null && (v || (!!g.content_text && !R(g.content_text)))),
      (n[0] = m),
      (n[1] = v),
      (n[2] = g),
      (n[3] = y))
    : (y = n[3]);
  let b = y,
    S;
  n[4] === i ? (S = n[5]) : ((S = ue(i)), (n[4] = i), (n[5] = S));
  let C = S,
    w;
  n[6] !== i || n[7] !== u
    ? ((w = () => {
        le(u, i).catch(xe);
      }),
      (n[6] = i),
      (n[7] = u),
      (n[8] = w))
    : (w = n[8]);
  let T = (0, Q.useEffectEvent)(w),
    E;
  n[9] !== b || n[10] !== T || n[11] !== u || n[12] !== C
    ? ((E = () => {
        if (!b || C == null) return;
        let e = !1;
        return u.watch((t) => {
          let { get: n } = t;
          if (n(re, C) === !0) {
            if (e) return;
            e = !0;
          }
          T();
        });
      }),
      (n[9] = b),
      (n[10] = T),
      (n[11] = u),
      (n[12] = C),
      (n[13] = E))
    : (E = n[13]);
  let D = g?.id,
    O;
  (n[14] !== b || n[15] !== u || n[16] !== C || n[17] !== D
    ? ((O = [b, u, C, D]), (n[14] = b), (n[15] = u), (n[16] = C), (n[17] = D), (n[18] = O))
    : (O = n[18]),
    (0, Q.useEffect)(E, O));
  let j = _?.status === `failed` || g?.metadata.automation_last_backing_run_failed === !0;
  if (p) {
    let e;
    n[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(x, {})), (n[19] = e)) : (e = n[19]);
    let t;
    return (
      n[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsxs)(`div`, {
            className: `flex flex-1 items-center justify-center`,
            role: `status`,
            children: [
              e,
              (0, $.jsx)(`span`, {
                className: `sr-only`,
                children: (0, $.jsx)(a, {
                  id: `automations.editor.latestUpdate.loading`,
                  defaultMessage: `Loading latest update`,
                  description: `Screen-reader status while the Scheduled task's latest update loads`,
                }),
              }),
            ],
          })),
          (n[20] = t))
        : (t = n[20]),
      t
    );
  }
  if (m) {
    let e;
    n[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(a, {
          id: `automations.editor.latestUpdate.loadError`,
          defaultMessage: `Couldn’t load the latest update`,
          description: `Error state in Scheduled task details when the latest update request fails`,
        })),
        (n[21] = e))
      : (e = n[21]);
    let r;
    n[22] === h ? (r = n[23]) : ((r = () => void h()), (n[22] = h), (n[23] = r));
    let i;
    n[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(a, {
          id: `automations.editor.latestUpdate.retryLoad`,
          defaultMessage: `Try again`,
          description: `Button to retry loading a Scheduled task's latest update`,
        })),
        (n[24] = i))
      : (i = n[24]);
    let o;
    return (
      n[25] === r
        ? (o = n[26])
        : ((o = (0, $.jsx)(A, {
            className: `flex-1 select-none`,
            title: e,
            actions: (0, $.jsx)(t, { color: `outline`, onClick: r, children: i }),
          })),
          (n[25] = r),
          (n[26] = o)),
      o
    );
  }
  if (!b || g == null) {
    let e;
    return (
      n[27] !== s || n[28] !== i || n[29] !== j || n[30] !== l
        ? ((e = (0, $.jsx)(X, { item: i, lastRunFailed: j, onRunNow: l, isRunNowPending: s })),
          (n[27] = s),
          (n[28] = i),
          (n[29] = j),
          (n[30] = l),
          (n[31] = e))
        : (e = n[31]),
      e
    );
  }
  let M;
  n[32] === g.created_at
    ? (M = n[33])
    : ((M = (0, $.jsx)(`p`, {
        className: `text-sm text-secondary select-none`,
        children: (0, $.jsx)(he, { value: g.created_at }),
      })),
      (n[32] = g.created_at),
      (n[33] = M));
  let N;
  n[34] !== i.automation.conversation_id || n[35] !== v || n[36] !== c || n[37] !== d || n[38] !== g
    ? ((N = v
        ? (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              (0, $.jsx)(`p`, {
                "aria-live": `polite`,
                role: `status`,
                className: `text-sm leading-5 text-default select-none`,
                children: d
                  ? (0, $.jsx)(a, {
                      id: `automations.routines.latestUpdate.attention.message`,
                      defaultMessage: `This routine needs your attention`,
                      description: `Status in the Routines details drawer when a routine cannot continue until the user approves an action, connects an app, or responds`,
                    })
                  : (0, $.jsx)(a, {
                      id: `automations.editor.latestUpdate.taskNeedsAttention`,
                      defaultMessage: `This task needs your attention`,
                      description: `Shown in Scheduled task details when a task needs the user's input or approval; hidden task content is not displayed`,
                    }),
              }),
              c == null
                ? null
                : (0, $.jsx)(t, {
                    className: `w-full`,
                    color: `primary`,
                    onClick: c,
                    children: (0, $.jsx)(a, {
                      id: `automations.editor.latestUpdate.attentionFollowUp`,
                      defaultMessage: `Follow-up`,
                      description: `Button that opens a Scheduled task's chat so the user can provide required input or approval`,
                    }),
                  }),
            ],
          })
        : (0, $.jsx)(ve, { conversationId: i.automation.conversation_id ?? ``, update: g })),
      (n[34] = i.automation.conversation_id),
      (n[35] = v),
      (n[36] = c),
      (n[37] = d),
      (n[38] = g),
      (n[39] = N))
    : (N = n[39]);
  let P;
  n[40] !== s || n[41] !== i.automation || n[42] !== j || n[43] !== v || n[44] !== l || n[45] !== g.metadata
    ? ((P =
        j && !v
          ? (0, $.jsx)(Se, { onRunNow: l, isRunNowPending: s })
          : (0, $.jsx)(W, {
              automation: i.automation,
              footer: !0,
              showLastRun: g.metadata.automation_latest_update_is_from_latest_run !== !0,
            })),
      (n[40] = s),
      (n[41] = i.automation),
      (n[42] = j),
      (n[43] = v),
      (n[44] = l),
      (n[45] = g.metadata),
      (n[46] = P))
    : (P = n[46]);
  let F;
  return (
    n[47] !== M || n[48] !== N || n[49] !== P
      ? ((F = (0, $.jsxs)(`section`, {
          className: `flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-6 pt-4 pb-24`,
          children: [M, N, P],
        })),
        (n[47] = M),
        (n[48] = N),
        (n[49] = P),
        (n[50] = F))
      : (F = n[50]),
    F
  );
}
function xe() {}
function X(e) {
  let n = (0, Z.c)(17),
    { item: r, lastRunFailed: i, onRunNow: o, isRunNowPending: s } = e,
    l = i !== void 0 && i,
    u = s !== void 0 && s,
    d = l ? b : y,
    f = l ? `text-warning` : `text-secondary`,
    p;
  n[0] !== d || n[1] !== f
    ? ((p = (0, $.jsx)(c, { asset: d, className: f })), (n[0] = d), (n[1] = f), (n[2] = p))
    : (p = n[2]);
  let m;
  n[3] === l
    ? (m = n[4])
    : ((m = l
        ? (0, $.jsx)(`span`, {
            "aria-live": `polite`,
            role: `status`,
            children: (0, $.jsx)(a, {
              id: `automations.editor.latestUpdate.lastRunFailed`,
              defaultMessage: `Last run failed`,
              description: `Status in Scheduled task details when the last task run failed`,
            }),
          })
        : (0, $.jsx)(a, {
            id: `automations.editor.latestUpdate.emptyState.title`,
            defaultMessage: `No updates available`,
            description: `Empty state in Scheduled task details before a task produces a visible update`,
          })),
      (n[3] = l),
      (n[4] = m));
  let h;
  n[5] !== r.automation || n[6] !== l
    ? ((h = (0, $.jsx)(W, { automation: r.automation, lastRunFailed: l })),
      (n[5] = r.automation),
      (n[6] = l),
      (n[7] = h))
    : (h = n[7]);
  let g;
  n[8] !== u || n[9] !== l || n[10] !== o
    ? ((g =
        l && o != null
          ? (0, $.jsx)(t, {
              color: `outline`,
              disabled: u,
              loading: u,
              onClick: o,
              children: (0, $.jsx)(a, {
                id: `automations.editor.latestUpdate.retry`,
                defaultMessage: `Retry`,
                description: `Button to run a Scheduled task again after its last run failed`,
              }),
            })
          : void 0),
      (n[8] = u),
      (n[9] = l),
      (n[10] = o),
      (n[11] = g))
    : (g = n[11]);
  let _;
  return (
    n[12] !== p || n[13] !== m || n[14] !== h || n[15] !== g
      ? ((_ = (0, $.jsx)(A, {
          className: `flex-1 select-none`,
          illustration: p,
          title: m,
          description: h,
          actions: g,
        })),
        (n[12] = p),
        (n[13] = m),
        (n[14] = h),
        (n[15] = g),
        (n[16] = _))
      : (_ = n[16]),
    _
  );
}
function Se(e) {
  let n = (0, Z.c)(6),
    { onRunNow: r, isRunNowPending: i } = e,
    o;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`p`, {
        "aria-live": `polite`,
        role: `status`,
        className: `text-sm text-warning`,
        children: (0, $.jsx)(a, {
          id: `automations.editor.latestUpdate.lastRunFailed`,
          defaultMessage: `Last run failed`,
          description: `Status in Scheduled task details when the last task run failed`,
        }),
      })),
      (n[0] = o))
    : (o = n[0]);
  let s;
  n[1] !== i || n[2] !== r
    ? ((s =
        r == null
          ? null
          : (0, $.jsx)(t, {
              color: `outline`,
              disabled: i,
              loading: i,
              onClick: r,
              children: (0, $.jsx)(a, {
                id: `automations.editor.latestUpdate.retry`,
                defaultMessage: `Retry`,
                description: `Button to run a Scheduled task again after its last run failed`,
              }),
            })),
      (n[1] = i),
      (n[2] = r),
      (n[3] = s))
    : (s = n[3]);
  let c;
  return (
    n[4] === s
      ? (c = n[5])
      : ((c = (0, $.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 border-t border-default pt-4 select-none`,
          children: [o, s],
        })),
        (n[4] = s),
        (n[5] = c)),
    c
  );
}
var Z, Q, $;
function Ce() {
  return (Ce = e(() => {
    ((Z = T()),
      s(),
      n(),
      u(),
      P(),
      (Q = O()),
      v(),
      m(),
      I(),
      C(),
      l(),
      d(),
      V(),
      _(),
      h(),
      E(),
      M(),
      F(),
      U(),
      se(),
      K(),
      de(),
      ae(),
      _e(),
      pe(),
      ce(),
      me(),
      ($ = D()));
  }))();
}
export { q as a, J as i, Y as n, Ce as r, ye as t };
//# sourceMappingURL=detail-panel-3d932275f681.js.map
