import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $bt as t,
  B3 as n,
  B6t as r,
  C6 as i,
  K4 as a,
  K6 as o,
  KKt as s,
  KTt as c,
  KYt as l,
  L8t as u,
  O3t as d,
  O4 as f,
  QAt as p,
  Qbt as ee,
  S6 as te,
  U4 as m,
  U6 as ne,
  X1 as h,
  XAt as g,
  YAt as _,
  Z2 as re,
  a3 as v,
  a3t as y,
  akt as ie,
  b4 as ae,
  c6t as b,
  d4 as x,
  ekt as S,
  ern as C,
  i3 as w,
  iHt as T,
  j3 as oe,
  k4 as se,
  ktn as E,
  lOt as ce,
  m6t as le,
  mOt as ue,
  n0 as D,
  n4 as de,
  nTt as fe,
  nkt as O,
  o3t as k,
  q4 as A,
  qKt as j,
  qnn as M,
  rHt as N,
  rTt as P,
  snn as F,
  tTt as I,
  u4 as L,
  v6 as R,
  x4 as z,
  x6 as B,
  y6 as V,
} from "./app-initial-f094ef01c64d.js";
import {
  $m as pe,
  Q_ as H,
  Qm as me,
  Z_ as he,
  _v as ge,
  vv as _e,
} from "./app-primary-4c40d73a1074.js";
import { i as ve, r as U } from "./codex-micro-commands-86f6cdcdb48d.js";
function W(e, t, n) {
  let r = { ...e };
  if (n != null && `threadKey` in n)
    for (let e of M) {
      let t = r[e];
      t != null &&
        `threadKey` in t &&
        t.threadKey === n.threadKey &&
        t.hostId === n.hostId &&
        (r[e] = null);
    }
  return ((r[t] = n), r);
}
function ye({
  assignments: e,
  clientThreadId: t,
  conversationId: n,
  hostId: r,
  pending: i,
  title: a,
}) {
  return i?.clientThreadId === t
    ? W(e, i.agentKeyId, { hostId: r, threadKey: S(n), title: a })
    : null;
}
function be(e, t, n) {
  return E(n) ? (e.set(Y, { agentKeyId: t, clientThreadId: n }), !0) : !1;
}
function xe(e, t, n) {
  (e.set(J, W(e.get(J) ?? q, t, n)), e.get(Y)?.agentKeyId === t && e.set(Y, null));
}
function Se(e, t, n) {
  if (!E(t) || s(e.get, u.agentSource) !== `custom`) return !1;
  let r = e.get(Y),
    i = ye({
      assignments: e.get(J) ?? q,
      clientThreadId: t,
      conversationId: n,
      hostId: e.get(fe, n) ?? `local`,
      pending: r,
      title: e.get(V, n),
    });
  return i == null ? !1 : (e.set(J, i), e.get(Y) === r && e.set(Y, null), !0);
}
function Ce(e, t, n) {
  if (s(e.get, u.agentSource) !== `custom`) return;
  let r = G(t),
    i = r == null ? null : (e.get(J) ?? q)[r];
  if (i == null || !(`threadKey` in i) || i.threadKey !== n || i.hostId == null) return;
  let a = O(i.threadKey);
  a != null && c(e, F(a), i.hostId);
}
function G(e) {
  return M[e] ?? null;
}
var K,
  q,
  J,
  Y,
  X = e(() => {
    (d(),
      r(),
      P(),
      R(),
      k(),
      j(),
      l(),
      ie(),
      N(),
      (K = `codex-micro-custom-agent-assignments`),
      (q = { AG00: null, AG01: null, AG02: null, AG03: null, AG04: null, AG05: null }),
      (J = T(K, q)),
      (Y = le(y, null)));
  });
function we(e) {
  return JSON.stringify({
    brightness: e.brightness,
    inactivityTimeoutMs: e.inactivityTimeoutMs,
    preserveSelectionLighting: !!e.preserveSelectionLighting,
    snakingAmbientStatus: e.snakingAmbientStatus,
    suspendDeviceStatusRefresh: !!e.suspendDeviceStatusRefresh,
    slots: e.slots.map(({ id: e, pulsing: t, selected: n, status: r, threadKey: i }) => ({
      id: e,
      pulsing: !!t,
      selected: n,
      status: r,
      threadKey: i,
    })),
    voiceState: e.voiceState,
  });
}
function Te({ isAppWindowFocused: e, threadKeys: t, threads: n, selectedThreadKey: r }) {
  return Array.from({ length: 6 }, (i, a) => {
    let o = t[a];
    if (o == null) return { id: a, threadKey: null, title: null, status: `off`, selected: !1 };
    let s = n.find((e) => e.threadKey === o) ?? { threadKey: o, title: null },
      c = o === r,
      l = Oe(s);
    return {
      id: a,
      threadKey: o,
      title: s.title,
      status: c && e && l === `unread` ? `idle` : l,
      selected: c,
    };
  });
}
function Ee({
  source: e,
  pinnedThreadKeys: t,
  pinnedProjectThreadKeys: n,
  recentlyUpdatedThreadKeys: r,
  priorityThreadKeys: i,
  customAgentThreadKeys: a,
}) {
  switch (e) {
    case `pinned`:
      return [...t, ...n].slice(0, 6);
    case `recent`:
      return r.slice(0, 6);
    case `priority`:
      return i.slice(0, 6);
    case `custom`:
      return a.slice(0, 6);
  }
}
function De({ threadKeys: e, attentionStateByThreadKey: t, recencyAtByThreadKey: n }) {
  return w(
    e.map((e) => ({ threadKey: e, attentionState: t.get(e) ?? `idle`, recencyAt: n.get(e) ?? 0 })),
  ).map(({ threadKey: e }) => e);
}
function Oe(e) {
  if (e.localStatus != null) {
    let { pendingChip: t, status: n, unread: r } = e.localStatus;
    return n === `error`
      ? `error`
      : t === `approval`
        ? `awaiting-approval`
        : t === `response`
          ? `awaiting-response`
          : n === `loading`
            ? `working`
            : r
              ? `unread`
              : `idle`;
  }
  let t = e.remoteStatus;
  return t == null
    ? `idle`
    : t.latestTurnStatus === `failed`
      ? `error`
      : t.latestTurnStatus === `pending` || t.latestTurnStatus === `in_progress`
        ? `working`
        : t.unread
          ? `unread`
          : `idle`;
}
var Z = e(() => {
    v();
  }),
  Q,
  $,
  ke = e(() => {
    (d(),
      r(),
      P(),
      t(),
      Z(),
      _e(),
      B(),
      R(),
      k(),
      j(),
      p(),
      h(),
      me(),
      a(),
      ae(),
      o(),
      he(),
      ue(),
      oe(),
      f(),
      x(),
      re(),
      ve(),
      X(),
      (Q = b(y, ({ get: e }) => {
        let { pinnedThreadKeys: t } = e(se),
          r = s(e, u.agentSource),
          a = e(J) ?? q,
          o = e(pe, {
            canStartProjectlessChat: e(m),
            localProjectActionsEnabled: e(A),
            sidebarMode: `codex`,
          }),
          c = t,
          l = [];
        if (r === `recent`) l = e(H);
        else if (r === `pinned`) {
          let t = e(o),
            n = ne(t.pinnedProjectGroups, e(D, `codex`).pinnedProjectThreadKeys),
            r = new Map(t.pinnedThreadKeys.map((e) => [g(e), e])),
            i = new Map(n.map((e) => [_(e.projectId), e.threadKeys]));
          c = L({
            entries: [
              ...t.pinnedThreadKeys.map((e) => ({ key: g(e) })),
              ...n.map((e) => ({ key: _(e.projectId) })),
            ],
            pinnedOrder: e(de),
            pinnedSortMode: e(z),
          }).flatMap((e) => {
            let t = r.get(e);
            return t == null ? (i.get(e) ?? []) : [t];
          });
        }
        let d = [];
        if (r === `priority`) {
          let t = e(D, `codex`);
          d = De({
            threadKeys: t.threadKeys,
            attentionStateByThreadKey: t.threadAttentionStateByKey,
            recencyAtByThreadKey: t.threadRecencyAtByKey,
          });
        }
        let f = Ee({
            source: r,
            pinnedThreadKeys: c,
            pinnedProjectThreadKeys: [],
            recentlyUpdatedThreadKeys: l,
            priorityThreadKeys: d,
            customAgentThreadKeys: M.map((t) => {
              let n = a[t];
              if (n == null) return null;
              if (`threadKey` in n) return n.threadKey;
              let i = r === `custom` && n.type === `command` ? U(n.commandId) : null;
              return i == null ? null : (e(H)[i] ?? null);
            }),
          }),
          p = f.flatMap((t) => {
            if (t == null) return [];
            let r = e(n, t);
            if (r == null) return [];
            switch (r.kind) {
              case `local`:
                return r.conversation == null
                  ? [{ threadKey: t, title: r.pendingWorktree.label }]
                  : [
                      {
                        threadKey: t,
                        title: e(V, r.conversation.id),
                        localStatus: {
                          status: e(i, r.conversation.id),
                          pendingChip: e(te, r.conversation.id),
                          unread: e(I, r.conversation.id) === !0,
                        },
                      },
                    ];
              case `remote`: {
                let e = r.task.task_status_display?.latest_turn_status_display?.turn_status,
                  n = e === `pending` || e === `in_progress` || e === `failed` ? e : null;
                return [
                  {
                    threadKey: t,
                    title: r.task.title ?? null,
                    remoteStatus: { latestTurnStatus: n, unread: r.task.has_unread_turn === !0 },
                  },
                ];
              }
            }
          });
        if (r === `custom`) {
          let e = new Set(p.map((e) => e.threadKey));
          for (let t of Object.values(a))
            t != null &&
              `threadKey` in t &&
              !e.has(t.threadKey) &&
              p.push({ threadKey: t.threadKey, title: t.title });
        }
        let h = Te({
          isAppWindowFocused: e(ee) === !0,
          threadKeys: f,
          threads: p,
          selectedThreadKey: e(ce),
        });
        return r === `custom`
          ? h.map((e) => {
              let t = M[e.id],
                n = t == null ? null : a[t];
              return n == null ||
                `threadKey` in n ||
                (n.type === `command` && U(n.commandId) != null)
                ? e
                : {
                    ...e,
                    title:
                      n.type === `command`
                        ? n.commandId
                        : n.type === `skill`
                          ? `$${n.skillName}`
                          : n.keycapId,
                    status: `idle`,
                  };
            })
          : h;
      })),
      ($ = b(y, ({ get: e }) => ({
        brightness: s(e, u.lightingBrightness) / 100,
        inactivityTimeoutMs: C(s(e, u.lightingAutoOff)),
        slots: e(Q),
        voiceState: e(ge),
      }))));
  });
export {
  Z as a,
  xe as c,
  G as d,
  X as f,
  we as i,
  Se as l,
  Q as n,
  q as o,
  Ce as p,
  ke as r,
  be as s,
  $ as t,
  J as u,
};
//# sourceMappingURL=codex-micro-slot-signals-3a7fc1172911.js.map
