import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $St as n,
  $st as r,
  DB as i,
  FBt as a,
  LNt as o,
  NSt as s,
  OB as c,
  PBt as l,
  Qst as u,
  TY as d,
  USt as f,
  XOt as p,
  Y3 as m,
  Z3 as h,
  ZSt as g,
  ch as _,
  e6 as v,
  lh as y,
  mCt as b,
  nB as x,
  nCt as S,
  oH as C,
  okt as w,
  pK as T,
  rB as E,
  sh as D,
  tkt as O,
  uh as k,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  HEn as A,
  NPr as j,
  OSn as M,
  QCr as N,
  TPr as P,
  WEn as F,
  XEn as I,
  YEn as L,
  iRr as R,
  kPr as z,
  kSn as B,
  lBr as V,
  sRr as H,
  twr as U,
  uBr as W,
  wLr as ee,
  xLr as te,
  zRr as ne,
} from "./app-initial-ad16eaadf81f.js";
import { n as re, t as ie } from "./run-now-051c45dd9d07.js";
import { i as ae, r as oe } from "./conversation-actions-12bca687c7ef.js";
import { n as se, r as ce, t as le } from "./task-unread-edc42e4e5066.js";
import { r as ue, t as de } from "./menu-items-d31be3c38abb.js";
import {
  a as G,
  i as fe,
  n as pe,
  o as me,
  r as he,
  s as ge,
  t as _e,
} from "./update-content-eef9deb1d68d.js";
var K;
function q() {
  return (q = e(() => {
    (g(),
      ee(),
      r(),
      H(),
      (K = b(u, (e, { get: t }) => {
        let n = t(te),
          r = t(ne);
        return {
          enabled: n.status === `allowed` && r != null,
          queryKey: [`cloud-automations`, `latest-update`, r, e],
          queryFn: ({ signal: t }) =>
            R.safeGet(`/automation/{automation_id}/latest_backing_run`, {
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
function J(e, t = document.querySelector(`[data-scheduled-tasks-main]`), n = `pointerdown`) {
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
function Y() {
  return (Y = e(() => {}))();
}
function ve(e) {
  let t = (0, Z.c)(46),
    {
      item: r,
      relatedActions: i,
      onClose: a,
      onEdit: o,
      onRunNow: s,
      isRunNowPending: c,
      summary: l,
      children: d,
    } = e,
    p = c !== void 0 && c,
    h = n(u),
    { isPending: g } = S(re, r.automation.id),
    _ = p || g,
    v = f(),
    y = (0, Q.useEffectEvent)(a),
    b;
  t[0] === y ? (b = t[1]) : ((b = () => J(y)), (t[0] = y), (t[1] = b));
  let x;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((x = []), (t[2] = x)) : (x = t[2]),
    (0, Q.useEffect)(b, x));
  let { automation: w } = r,
    T;
  t[3] === w ? (T = t[4]) : ((T = P(w)), (t[3] = w), (t[4] = T));
  let { canManage: E } = T,
    D = E && z(w) !== `completed`,
    k;
  t[5] !== w || t[6] !== E
    ? ((k = E && w.executor !== `local` && z(w) !== `completed`), (t[5] = w), (t[6] = E), (t[7] = k))
    : (k = t[7]);
  let A = k,
    j = w.conversation_id,
    M = j != null && r.teamId == null,
    N;
  t[8] !== r || t[9] !== v || t[10] !== h
    ? ((N = () => {
        ae(h, r, v);
      }),
      (t[8] = r),
      (t[9] = v),
      (t[10] = h),
      (t[11] = N))
    : (N = t[11]);
  let F = N,
    I;
  t[12] === w.display_emoji
    ? (I = t[13])
    : ((I = w.display_emoji || (0, $.jsx)(C, {})), (t[12] = w.display_emoji), (t[13] = I));
  let L;
  t[14] !== w || t[15] !== r || t[16] !== l
    ? ((L = l ?? (0, $.jsx)(he, { item: r, status: z(w) })),
      (t[14] = w),
      (t[15] = r),
      (t[16] = l),
      (t[17] = L))
    : (L = t[17]);
  let R = A ? s : void 0,
    B;
  t[18] !== _ || t[19] !== r || t[20] !== a || t[21] !== R
    ? ((B = (0, $.jsx)(de, { item: r, onDeleted: a, onRunNow: R, isRunNowPending: _, source: `editor` })),
      (t[18] = _),
      (t[19] = r),
      (t[20] = a),
      (t[21] = R),
      (t[22] = B))
    : (B = t[22]);
  let V = D ? o : void 0,
    H;
  t[23] !== M || t[24] !== d || t[25] !== F || t[26] !== i
    ? ((H =
        d == null && (i != null || M)
          ? (0, $.jsxs)(`div`, {
              className: i == null ? void 0 : `ms-2 mb-2 flex flex-wrap items-center justify-end gap-2`,
              children: [
                i,
                M
                  ? (0, $.jsx)(m, {
                      className: i == null ? `ms-2 mb-2 w-fit` : `w-fit`,
                      color: `outlineSurface`,
                      radius: `full`,
                      size: `panelAction`,
                      onClick: F,
                      children: (0, $.jsx)(O, {
                        id: `automations.editor.openChat.button.label`,
                        defaultMessage: `Open chat`,
                        description: `Button in the Scheduled task details panel that opens the task's conversation`,
                      }),
                    })
                  : null,
              ],
            })
          : null),
      (t[23] = M),
      (t[24] = d),
      (t[25] = F),
      (t[26] = i),
      (t[27] = H))
    : (H = t[27]);
  let U;
  t[28] !== M ||
  t[29] !== A ||
  t[30] !== d ||
  t[31] !== j ||
  t[32] !== _ ||
  t[33] !== r ||
  t[34] !== s ||
  t[35] !== F
    ? ((U =
        d ??
        (j == null
          ? (0, $.jsx)(xe, { item: r })
          : (0, $.jsx)(ye, {
              item: r,
              isRunNowPending: _,
              onOpenConversation: M ? F : void 0,
              onRunNow: A ? s : void 0,
            }))),
      (t[28] = M),
      (t[29] = A),
      (t[30] = d),
      (t[31] = j),
      (t[32] = _),
      (t[33] = r),
      (t[34] = s),
      (t[35] = F),
      (t[36] = U))
    : (U = t[36]);
  let W;
  return (
    t[37] !== w.title ||
    t[38] !== a ||
    t[39] !== B ||
    t[40] !== V ||
    t[41] !== H ||
    t[42] !== U ||
    t[43] !== I ||
    t[44] !== L
      ? ((W = (0, $.jsx)(X, {
          title: w.title,
          icon: I,
          summary: L,
          actions: B,
          onEdit: V,
          footer: H,
          onClose: a,
          children: U,
        })),
        (t[37] = w.title),
        (t[38] = a),
        (t[39] = B),
        (t[40] = V),
        (t[41] = H),
        (t[42] = U),
        (t[43] = I),
        (t[44] = L),
        (t[45] = W))
      : (W = t[45]),
    W
  );
}
function X(e) {
  let t = (0, Z.c)(29),
    { title: n, icon: r, summary: i, actions: a, onEdit: o, onClose: s, footer: c, children: l } = e,
    u = w(),
    d;
  t[0] === u
    ? (d = t[1])
    : ((d = u.formatMessage({
        id: `automations.editor.editTask`,
        defaultMessage: `Edit task`,
        description: `Accessible label for the pencil button in the Scheduled task details panel that opens the task editor`,
      })),
      (t[0] = u),
      (t[1] = d));
  let f = d,
    p;
  t[2] !== f || t[3] !== o
    ? ((p =
        o == null
          ? null
          : (0, $.jsx)(x, {
              tooltipContent: f,
              children: (0, $.jsx)(m, {
                "aria-label": f,
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                onClick: o,
                children: (0, $.jsx)(T, {}),
              }),
            })),
      (t[2] = f),
      (t[3] = o),
      (t[4] = p))
    : (p = t[4]);
  let h;
  t[5] !== a || t[6] !== p
    ? ((h = (0, $.jsxs)($.Fragment, { children: [a, p] })), (t[5] = a), (t[6] = p), (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === u
    ? (g = t[9])
    : ((g = u.formatMessage({
        id: `automations.scheduled.detail.close`,
        defaultMessage: `Close task details`,
        description: `Accessible label to close the scheduled task details panel`,
      })),
      (t[8] = u),
      (t[9] = g));
  let _;
  t[10] === r
    ? (_ = t[11])
    : ((_ = (0, $.jsx)(`span`, {
        className: `flex size-8 shrink-0 items-center justify-center select-none`,
        "aria-hidden": !0,
        children: r,
      })),
      (t[10] = r),
      (t[11] = _));
  let v;
  t[12] === n
    ? (v = t[13])
    : ((v = (0, $.jsx)(`h2`, {
        className: `text-lg leading-7 font-medium break-words text-default select-text`,
        children: n,
      })),
      (t[12] = n),
      (t[13] = v));
  let y;
  t[14] === i
    ? (y = t[15])
    : ((y = (0, $.jsx)(`div`, { className: `text-sm leading-5 text-tertiary select-none`, children: i })),
      (t[14] = i),
      (t[15] = y));
  let b;
  t[16] !== v || t[17] !== y
    ? ((b = (0, $.jsxs)(`div`, { className: `min-w-0`, children: [v, y] })),
      (t[16] = v),
      (t[17] = y),
      (t[18] = b))
    : (b = t[18]);
  let S;
  t[19] !== _ || t[20] !== b
    ? ((S = (0, $.jsxs)(`div`, { className: `flex min-w-0 items-center gap-3`, children: [_, b] })),
      (t[19] = _),
      (t[20] = b),
      (t[21] = S))
    : (S = t[21]);
  let C;
  return (
    t[22] !== l || t[23] !== c || t[24] !== s || t[25] !== h || t[26] !== g || t[27] !== S
      ? ((C = (0, $.jsx)(A, {
          variant: `summary`,
          actions: h,
          closeLabel: g,
          footer: c,
          leading: S,
          onClose: s,
          children: l,
        })),
        (t[22] = l),
        (t[23] = c),
        (t[24] = s),
        (t[25] = h),
        (t[26] = g),
        (t[27] = S),
        (t[28] = C))
      : (C = t[28]),
    C
  );
}
function ye(e) {
  let r = (0, Z.c)(51),
    { item: i, isRunNowPending: a, onOpenConversation: o, onRunNow: s } = e,
    c = n(u),
    l = S(W, `3092648596`),
    { data: d, isPending: f, isError: p, refetch: h } = S(K, i.automation.id),
    g = d != null && `latest_update` in d ? d.latest_update : d,
    _ = d != null && `last_backing_run` in d ? d.last_backing_run : null,
    v = g?.metadata.automation_requires_user_action === !0,
    y;
  r[0] !== p || r[1] !== v || r[2] !== g
    ? ((y = !p && g != null && (v || (!!g.content_text && !U(g.content_text)))),
      (r[0] = p),
      (r[1] = v),
      (r[2] = g),
      (r[3] = y))
    : (y = r[3]);
  let b = y,
    x;
  r[4] === i ? (x = r[5]) : ((x = le(i)), (r[4] = i), (r[5] = x));
  let C = x,
    w;
  r[6] !== i || r[7] !== c
    ? ((w = () => {
        ce(c, i).catch(be);
      }),
      (r[6] = i),
      (r[7] = c),
      (r[8] = w))
    : (w = r[8]);
  let T = (0, Q.useEffectEvent)(w),
    E;
  r[9] !== b || r[10] !== T || r[11] !== c || r[12] !== C
    ? ((E = () => {
        if (!b || C == null) return;
        let e = !1;
        return c.watch((t) => {
          let { get: n } = t;
          if (n(B, C) === !0) {
            if (e) return;
            e = !0;
          }
          T();
        });
      }),
      (r[9] = b),
      (r[10] = T),
      (r[11] = c),
      (r[12] = C),
      (r[13] = E))
    : (E = r[13]);
  let D = g?.id,
    k;
  (r[14] !== b || r[15] !== c || r[16] !== C || r[17] !== D
    ? ((k = [b, c, C, D]), (r[14] = b), (r[15] = c), (r[16] = C), (r[17] = D), (r[18] = k))
    : (k = r[18]),
    (0, Q.useEffect)(E, k));
  let A = _?.status === `failed` || g?.metadata.automation_last_backing_run_failed === !0;
  if (f) {
    let e;
    r[19] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, $.jsx)(t, {})), (r[19] = e)) : (e = r[19]);
    let n;
    return (
      r[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsxs)(`div`, {
            className: `flex flex-1 items-center justify-center`,
            role: `status`,
            children: [
              e,
              (0, $.jsx)(`span`, {
                className: `sr-only`,
                children: (0, $.jsx)(O, {
                  id: `automations.editor.latestUpdate.loading`,
                  defaultMessage: `Loading latest update`,
                  description: `Screen-reader status while the Scheduled task's latest update loads`,
                }),
              }),
            ],
          })),
          (r[20] = n))
        : (n = r[20]),
      n
    );
  }
  if (p) {
    let e;
    r[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(O, {
          id: `automations.editor.latestUpdate.loadError`,
          defaultMessage: `Couldn’t load the latest update`,
          description: `Error state in Scheduled task details when the latest update request fails`,
        })),
        (r[21] = e))
      : (e = r[21]);
    let t;
    r[22] === h ? (t = r[23]) : ((t = () => void h()), (r[22] = h), (r[23] = t));
    let n;
    r[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(O, {
          id: `automations.editor.latestUpdate.retryLoad`,
          defaultMessage: `Try again`,
          description: `Button to retry loading a Scheduled task's latest update`,
        })),
        (r[24] = n))
      : (n = r[24]);
    let i;
    return (
      r[25] === t
        ? (i = r[26])
        : ((i = (0, $.jsx)(L, {
            className: `flex-1 select-none`,
            title: e,
            actions: (0, $.jsx)(m, { color: `outline`, onClick: t, children: n }),
          })),
          (r[25] = t),
          (r[26] = i)),
      i
    );
  }
  if (!b || g == null) {
    let e;
    return (
      r[27] !== a || r[28] !== i || r[29] !== A || r[30] !== s
        ? ((e = (0, $.jsx)(xe, { item: i, lastRunFailed: A, onRunNow: s, isRunNowPending: a })),
          (r[27] = a),
          (r[28] = i),
          (r[29] = A),
          (r[30] = s),
          (r[31] = e))
        : (e = r[31]),
      e
    );
  }
  let j;
  r[32] === g.created_at
    ? (j = r[33])
    : ((j = (0, $.jsx)(`p`, {
        className: `text-sm text-secondary select-none`,
        children: (0, $.jsx)(me, { value: g.created_at }),
      })),
      (r[32] = g.created_at),
      (r[33] = j));
  let M;
  r[34] !== i.automation.conversation_id || r[35] !== v || r[36] !== o || r[37] !== l || r[38] !== g
    ? ((M = v
        ? (0, $.jsxs)(`div`, {
            className: `flex flex-col gap-3`,
            children: [
              (0, $.jsx)(`p`, {
                "aria-live": `polite`,
                role: `status`,
                className: `text-sm leading-5 text-default select-none`,
                children: l
                  ? (0, $.jsx)(O, {
                      id: `automations.routines.latestUpdate.attention.message`,
                      defaultMessage: `This routine needs your attention`,
                      description: `Status in the Routines details drawer when a routine cannot continue until the user approves an action, connects an app, or responds`,
                    })
                  : (0, $.jsx)(O, {
                      id: `automations.editor.latestUpdate.taskNeedsAttention`,
                      defaultMessage: `This task needs your attention`,
                      description: `Shown in Scheduled task details when a task needs the user's input or approval; hidden task content is not displayed`,
                    }),
              }),
              o == null
                ? null
                : (0, $.jsx)(m, {
                    className: `w-full`,
                    color: `primary`,
                    onClick: o,
                    children: (0, $.jsx)(O, {
                      id: `automations.editor.latestUpdate.attentionFollowUp`,
                      defaultMessage: `Follow-up`,
                      description: `Button that opens a Scheduled task's chat so the user can provide required input or approval`,
                    }),
                  }),
            ],
          })
        : (0, $.jsx)(_e, { conversationId: i.automation.conversation_id ?? ``, update: g })),
      (r[34] = i.automation.conversation_id),
      (r[35] = v),
      (r[36] = o),
      (r[37] = l),
      (r[38] = g),
      (r[39] = M))
    : (M = r[39]);
  let N;
  r[40] !== a || r[41] !== i.automation || r[42] !== A || r[43] !== v || r[44] !== s || r[45] !== g.metadata
    ? ((N =
        A && !v
          ? (0, $.jsx)(Se, { onRunNow: s, isRunNowPending: a })
          : (0, $.jsx)(G, {
              automation: i.automation,
              footer: !0,
              showLastRun: g.metadata.automation_latest_update_is_from_latest_run !== !0,
            })),
      (r[40] = a),
      (r[41] = i.automation),
      (r[42] = A),
      (r[43] = v),
      (r[44] = s),
      (r[45] = g.metadata),
      (r[46] = N))
    : (N = r[46]);
  let P;
  return (
    r[47] !== j || r[48] !== M || r[49] !== N
      ? ((P = (0, $.jsxs)(`section`, {
          className: `flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-6 pt-4 pb-24`,
          children: [j, M, N],
        })),
        (r[47] = j),
        (r[48] = M),
        (r[49] = N),
        (r[50] = P))
      : (P = r[50]),
    P
  );
}
function be() {}
function xe(e) {
  let t = (0, Z.c)(17),
    { item: n, lastRunFailed: r, onRunNow: a, isRunNowPending: o } = e,
    s = r !== void 0 && r,
    c = o !== void 0 && o,
    l = s ? D : y,
    u = s ? `text-warning` : `text-secondary`,
    d;
  t[0] !== l || t[1] !== u
    ? ((d = (0, $.jsx)(i, { asset: l, className: u })), (t[0] = l), (t[1] = u), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === s
    ? (f = t[4])
    : ((f = s
        ? (0, $.jsx)(`span`, {
            "aria-live": `polite`,
            role: `status`,
            children: (0, $.jsx)(O, {
              id: `automations.editor.latestUpdate.lastRunFailed`,
              defaultMessage: `Last run failed`,
              description: `Status in Scheduled task details when the last task run failed`,
            }),
          })
        : (0, $.jsx)(O, {
            id: `automations.editor.latestUpdate.emptyState.title`,
            defaultMessage: `No updates available`,
            description: `Empty state in Scheduled task details before a task produces a visible update`,
          })),
      (t[3] = s),
      (t[4] = f));
  let p;
  t[5] !== n.automation || t[6] !== s
    ? ((p = (0, $.jsx)(G, { automation: n.automation, lastRunFailed: s })),
      (t[5] = n.automation),
      (t[6] = s),
      (t[7] = p))
    : (p = t[7]);
  let h;
  t[8] !== c || t[9] !== s || t[10] !== a
    ? ((h =
        s && a != null
          ? (0, $.jsx)(m, {
              color: `outline`,
              disabled: c,
              loading: c,
              onClick: a,
              children: (0, $.jsx)(O, {
                id: `automations.editor.latestUpdate.retry`,
                defaultMessage: `Retry`,
                description: `Button to run a Scheduled task again after its last run failed`,
              }),
            })
          : void 0),
      (t[8] = c),
      (t[9] = s),
      (t[10] = a),
      (t[11] = h))
    : (h = t[11]);
  let g;
  return (
    t[12] !== d || t[13] !== f || t[14] !== p || t[15] !== h
      ? ((g = (0, $.jsx)(L, {
          className: `flex-1 select-none`,
          illustration: d,
          title: f,
          description: p,
          actions: h,
        })),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p),
        (t[15] = h),
        (t[16] = g))
      : (g = t[16]),
    g
  );
}
function Se(e) {
  let t = (0, Z.c)(6),
    { onRunNow: n, isRunNowPending: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`p`, {
        "aria-live": `polite`,
        role: `status`,
        className: `text-sm text-warning`,
        children: (0, $.jsx)(O, {
          id: `automations.editor.latestUpdate.lastRunFailed`,
          defaultMessage: `Last run failed`,
          description: `Status in Scheduled task details when the last task run failed`,
        }),
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] !== r || t[2] !== n
    ? ((a =
        n == null
          ? null
          : (0, $.jsx)(m, {
              color: `outline`,
              disabled: r,
              loading: r,
              onClick: n,
              children: (0, $.jsx)(O, {
                id: `automations.editor.latestUpdate.retry`,
                defaultMessage: `Retry`,
                description: `Button to run a Scheduled task again after its last run failed`,
              }),
            })),
      (t[1] = r),
      (t[2] = n),
      (t[3] = a))
    : (a = t[3]);
  let o;
  return (
    t[4] === a
      ? (o = t[5])
      : ((o = (0, $.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 border-t border-default pt-4 select-none`,
          children: [i, a],
        })),
        (t[4] = a),
        (t[5] = o)),
    o
  );
}
var Z, Q, $;
function Ce() {
  return (Ce = e(() => {
    ((Z = l()),
      k(),
      _(),
      g(),
      N(),
      (Q = a()),
      p(),
      s(),
      F(),
      h(),
      c(),
      d(),
      I(),
      v(),
      E(),
      r(),
      M(),
      V(),
      j(),
      oe(),
      q(),
      ue(),
      ie(),
      ge(),
      fe(),
      se(),
      pe(),
      ($ = o()));
  }))();
}
export { J as a, Y as i, X as n, Ce as r, ve as t };
//# sourceMappingURL=detail-panel-6b30613f7f54.js.map
