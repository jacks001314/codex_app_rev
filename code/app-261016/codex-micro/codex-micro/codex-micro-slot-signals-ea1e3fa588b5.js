import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  CCt as n,
  Iyt as r,
  Jbt as i,
  Qst as a,
  ZSt as o,
  dut as s,
  iit as c,
  kCt as l,
  kyt as u,
  oit as d,
  sct as f,
  uSt as p,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $9n as m,
  ALr as h,
  Ayn as ee,
  Ber as g,
  Bun as _,
  ESn as te,
  Exn as ne,
  Fer as re,
  Fun as ie,
  Iun as ae,
  Jrr as oe,
  Jun as se,
  KBr as ce,
  Kun as v,
  Lun as le,
  NCn as ue,
  OSn as de,
  PSn as fe,
  Run as pe,
  Txn as me,
  Uun as he,
  Yrr as y,
  Yun as b,
  _Cn as x,
  ayn as S,
  cir as C,
  cyn as w,
  dTn as T,
  dyn as E,
  eer as D,
  eir as O,
  fCn as k,
  fir as A,
  fyn as j,
  gCn as M,
  grr as N,
  gtr as P,
  gyn as F,
  hct as I,
  hyn as L,
  itr as R,
  jCn as ge,
  jyn as _e,
  kLr as ve,
  mct as ye,
  nct as be,
  o2 as xe,
  pCn as Se,
  qun as Ce,
  rct as z,
  s2 as we,
  tir as B,
  uTn as Te,
  uir as Ee,
  yrr as De,
  zun as Oe,
} from "./app-initial-ad16eaadf81f.js";
import { i as ke, r as V } from "./codex-micro-commands-a9ca1690e672.js";
function H(e, t, n) {
  let r = { ...e };
  if (n != null && `threadKey` in n)
    for (let e of u) {
      let t = r[e];
      t != null && `threadKey` in t && t.threadKey === n.threadKey && t.hostId === n.hostId && (r[e] = null);
    }
  return ((r[t] = n), r);
}
function Ae({ assignments: e, clientThreadId: t, conversationId: n, hostId: r, pending: i, title: a }) {
  return i?.clientThreadId === t ? H(e, i.agentKeyId, { hostId: r, threadKey: C(n), title: a }) : null;
}
function je(e, t, n) {
  return i(n) ? (e.set(q, { agentKeyId: t, clientThreadId: n }), !0) : !1;
}
function Me(e, t, n) {
  (e.set(K, H(e.get(K) ?? G, t, n)), e.get(q)?.agentKeyId === t && e.set(q, null));
}
function Ne(e, t, n) {
  if (!i(t) || c(e.get, s.agentSource) !== `custom`) return !1;
  let r = e.get(q),
    a = Ae({
      assignments: e.get(K) ?? G,
      clientThreadId: t,
      conversationId: n,
      hostId: e.get(m, n) ?? `local`,
      pending: r,
      title: e.get(x, n),
    });
  return a != null && (e.set(K, a), e.get(q) === r && e.set(q, null), !0);
}
function Pe(e, t, n) {
  if (c(e.get, s.agentSource) !== `custom`) return;
  let r = U(t),
    i = r == null ? null : (e.get(K) ?? G)[r];
  if (i == null || !(`threadKey` in i) || i.threadKey !== n || i.hostId == null) return;
  let a = Ee(i.threadKey);
  a != null && g(e, p(a), i.hostId);
}
function U(e) {
  return u[e] ?? null;
}
var W, G, K, q;
function J() {
  return (J = e(() => {
    (o(),
      f(),
      D(),
      M(),
      t(),
      d(),
      ce(),
      A(),
      ve(),
      (W = `codex-micro-custom-agent-assignments`),
      (G = { AG00: null, AG01: null, AG02: null, AG03: null, AG04: null, AG05: null }),
      (K = h(W, G)),
      (q = l(a, null)));
  }))();
}
function Y(e) {
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
function Fe({ isAppWindowFocused: e, threadKeys: t, threads: n, selectedThreadKey: r }) {
  return Array.from({ length: 6 }, (i, a) => {
    let o = t[a];
    if (o == null) return { id: a, threadKey: null, title: null, status: `off`, selected: !1 };
    let s = n.find((e) => e.threadKey === o && (e.slotId == null || e.slotId === a)) ?? {
        threadKey: o,
        title: null,
      },
      c = o === r,
      l = Re(s);
    return {
      id: a,
      threadKey: o,
      title: s.title,
      status: c && e && l === `unread` ? `idle` : l,
      selected: c,
    };
  });
}
function Ie({
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
function Le({ threadKeys: e, attentionStateByThreadKey: t, recencyAtByThreadKey: n }) {
  return le(
    e.map((e) => ({ threadKey: e, attentionState: t.get(e) ?? `idle`, recencyAt: n.get(e) ?? 0 })),
  ).map(({ threadKey: e }) => e);
}
function Re(e) {
  if (e.localStatus != null) {
    let { attention: t, status: n, unread: r } = e.localStatus;
    return n === `error`
      ? `error`
      : t?.kind === `approval`
        ? `awaiting-approval`
        : t?.kind === `input`
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
function X() {
  return (X = e(() => {
    pe();
  }))();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (o(),
      f(),
      D(),
      T(),
      X(),
      I(),
      ge(),
      k(),
      t(),
      d(),
      he(),
      Oe(),
      xe(),
      se(),
      y(),
      E(),
      _e(),
      be(),
      De(),
      de(),
      L(),
      ae(),
      ne(),
      S(),
      ke(),
      J(),
      (Z = n(a, ({ get: e }) => {
        let { pinnedThreadKeys: t } = e(F),
          n = c(e, s.agentSource),
          r = e(K) ?? G,
          i = e(Ce),
          a = e(b),
          o = e(_, { canStartProjectlessChat: i, localProjectActionsEnabled: a, sidebarMode: `codex` }),
          l = t,
          d = [];
        if (n === `recent`) d = e(z);
        else if (n === `pinned`) {
          let t = e(o),
            n = e(oe(t.pinnedThreadKeys)),
            r = ee(t.pinnedProjectGroups, e(v, `codex`).pinnedProjectThreadKeys),
            i = new Map(t.pinnedThreadKeys.map((e) => [B(e), e])),
            a = new Map(r.map((e) => [O(e.projectId), e.threadKeys]));
          l = me({
            entries: [
              ...t.pinnedThreadKeys.map((e) => ({ key: B(e) })),
              ...r.map((e) => ({ key: O(e.projectId) })),
            ],
            pinnedOrder: e(w),
            pinnedSortMode: e(j),
            pinnedKeyAliases: n?.visibleKeyByStoredKey,
            serverOrderedPinnedThreadHostIds: n?.hostIdByKey,
            serverOrderedPinnedThreadKeys: n?.keys,
          }).flatMap((e) => {
            let t = i.get(e);
            return t == null ? (a.get(e) ?? []) : [t];
          });
        }
        let f = [];
        if (n === `priority`) {
          let t = e(v, `codex`);
          f = Le({
            threadKeys: t.threadKeys,
            attentionStateByThreadKey: new Map(t.threadKeys.map((t) => [t, ie(e, t)])),
            recencyAtByThreadKey: new Map(t.threadKeys.map((t) => [t, te(e, t)])),
          });
        }
        let p = Ie({
            source: n,
            pinnedThreadKeys: l,
            pinnedProjectThreadKeys: [],
            recentlyUpdatedThreadKeys: d,
            priorityThreadKeys: f,
            customAgentThreadKeys: u.map((t) => {
              let i = r[t];
              if (i == null) return null;
              if (`threadKey` in i) return i.threadKey;
              let a = n === `custom` && i.type === `command` ? V(i.commandId) : null;
              return a == null ? null : (e(z)[a] ?? null);
            }),
          }),
          m = p.flatMap((t, i) => {
            if (t == null) return [];
            let a = e(fe, t);
            if (a == null) return [];
            switch (a.kind) {
              case `local`: {
                if (a.summary == null)
                  return [
                    {
                      slotId: i,
                      threadKey: t,
                      title: a.pendingThreadStart?.title ?? a.pendingWorktree?.label ?? ``,
                    },
                  ];
                let o = u[i],
                  s = n === `custom` && o != null ? r[o] : null,
                  c =
                    (s != null && `threadKey` in s ? s.hostId : null) ??
                    a.summary.hostId ??
                    e(re, a.summary.conversationId),
                  l = { hostId: c, threadId: a.summary.conversationId },
                  d = e(R, l)?.summary ?? e(P, { hostId: c, conversationId: a.summary.conversationId });
                return [
                  {
                    slotId: i,
                    threadKey: t,
                    title: e(we, l),
                    localStatus: {
                      attention: e(Se, { conversationId: a.summary.conversationId, hostId: c }),
                      status: e(ue, { hostId: c, conversationId: a.summary.conversationId }),
                      unread: d?.hasUnreadTurn === !0,
                    },
                  },
                ];
              }
              case `remote`: {
                let e = a.task.task_status_display?.latest_turn_status_display?.turn_status,
                  n = e === `pending` || e === `in_progress` || e === `failed` ? e : null;
                return [
                  {
                    slotId: i,
                    threadKey: t,
                    title: a.task.title ?? null,
                    remoteStatus: { latestTurnStatus: n, unread: a.task.has_unread_turn === !0 },
                  },
                ];
              }
            }
          });
        if (n === `custom`) {
          let e = new Set(m.map((e) => e.threadKey));
          for (let t of Object.values(r))
            t != null &&
              `threadKey` in t &&
              !e.has(t.threadKey) &&
              m.push({ threadKey: t.threadKey, title: t.title });
        }
        let h = Fe({ isAppWindowFocused: e(Te) === !0, threadKeys: p, threads: m, selectedThreadKey: e(N) });
        return n === `custom`
          ? h.map((e) => {
              let t = u[e.id],
                n = t == null ? null : r[t];
              return n == null || `threadKey` in n || (n.type === `command` && V(n.commandId) != null)
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
      (Q = n(a, ({ get: e }) => ({
        brightness: c(e, s.lightingBrightness) / 100,
        inactivityTimeoutMs: r(c(e, s.lightingAutoOff)),
        slots: e(Z),
        voiceState: e(ye),
      }))));
  }))();
}
export {
  X as a,
  Me as c,
  U as d,
  J as f,
  Y as i,
  Ne as l,
  Z as n,
  G as o,
  Pe as p,
  $ as r,
  je as s,
  Q as t,
  K as u,
};
//# sourceMappingURL=codex-micro-slot-signals-ea1e3fa588b5.js.map
