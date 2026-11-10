import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Hnt as n,
  Jbt as r,
  Myt as i,
  Pxt as a,
  Wnt as o,
  bvt as s,
  fSt as c,
  oSt as l,
  pvt as u,
  rst as d,
  slt as f,
  wot as p,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as ee,
  $on as te,
  Cvn as ne,
  Cyn as m,
  Ggn as h,
  Gon as g,
  Got as _,
  H1 as re,
  Her as v,
  Hgn as ie,
  Hon as ae,
  Ier as oe,
  J9n as se,
  Kgn as ce,
  Kon as le,
  Ler as ue,
  P5n as de,
  Qer as fe,
  Qon as y,
  S5n as pe,
  Sbn as me,
  Uer as b,
  Uon as x,
  V1 as S,
  Von as C,
  Won as w,
  Wot as T,
  Xer as E,
  Xgn as D,
  Ygn as O,
  Yon as k,
  Z9n as A,
  _8n as j,
  abn as M,
  bbn as N,
  d_n as P,
  esn as F,
  etr as I,
  i5n as L,
  iNr as R,
  kyn as z,
  nSn as he,
  nbn as ge,
  nst as _e,
  oFr as ve,
  obn as ye,
  rNr as be,
  rSn as xe,
  rst as Se,
  tbn as Ce,
  tsn as we,
  u_n as Te,
  v8n as B,
  wvn as Ee,
  xyn as De,
  zgn as Oe,
} from "./app-initial-5851df3f6cb1.js";
import { i as ke, r as V } from "./codex-micro-commands-fdc168b3622a.js";
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
  return i?.clientThreadId === t ? H(e, i.agentKeyId, { hostId: r, threadKey: E(n), title: a }) : null;
}
function je(e, t, n) {
  return i(n) ? (e.set(q, { agentKeyId: t, clientThreadId: n }), !0) : !1;
}
function Me(e, t, n) {
  (e.set(K, H(e.get(K) ?? G, t, n)), e.get(q)?.agentKeyId === t && e.set(q, null));
}
function Ne(e, t, r) {
  if (!i(t) || n(e.get, f.agentSource) !== `custom`) return !1;
  let a = e.get(q),
    o = Ae({
      assignments: e.get(K) ?? G,
      clientThreadId: t,
      conversationId: r,
      hostId: e.get(j, r) ?? `local`,
      pending: a,
      title: e.get(ye, r),
    });
  return o != null && (e.set(K, o), e.get(q) === a && e.set(q, null), !0);
}
function Pe(e, t, i) {
  if (n(e.get, f.agentSource) !== `custom`) return;
  let a = U(t),
    o = a == null ? null : (e.get(K) ?? G)[a];
  if (o == null || !(`threadKey` in o) || o.threadKey !== i || o.hostId == null) return;
  let s = fe(o.threadKey);
  s != null && L(e, r(s), o.hostId);
}
function U(e) {
  return u[e] ?? null;
}
var W, G, K, q;
function J() {
  return (J = e(() => {
    (a(),
      d(),
      B(),
      M(),
      p(),
      o(),
      ve(),
      I(),
      be(),
      (W = `codex-micro-custom-agent-assignments`),
      (G = { AG00: null, AG01: null, AG02: null, AG03: null, AG04: null, AG05: null }),
      (K = R(W, G)),
      (q = c(t, null)));
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
  return x(
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
    w();
  }))();
}
var Z, Q;
function $() {
  return ($ = e(() => {
    (a(),
      d(),
      B(),
      xe(),
      X(),
      Se(),
      N(),
      Ce(),
      p(),
      o(),
      k(),
      g(),
      S(),
      F(),
      ue(),
      h(),
      P(),
      T(),
      A(),
      m(),
      O(),
      ae(),
      Ee(),
      Oe(),
      ke(),
      J(),
      (Z = l(t, ({ get: e }) => {
        let { pinnedThreadKeys: t } = e(D),
          r = n(e, f.agentSource),
          i = e(K) ?? G,
          a = e(te),
          o = e(we),
          s = e(le, { canStartProjectlessChat: a, localProjectActionsEnabled: o, sidebarMode: `codex` }),
          c = t,
          l = [];
        if (r === `recent`) l = e(_);
        else if (r === `pinned`) {
          let t = e(s),
            n = e(oe(t.pinnedThreadKeys)),
            r = Te(t.pinnedProjectGroups, e(y, `codex`).pinnedProjectThreadKeys),
            i = new Map(t.pinnedThreadKeys.map((e) => [b(e), e])),
            a = new Map(r.map((e) => [v(e.projectId), e.threadKeys]));
          c = ne({
            entries: [
              ...t.pinnedThreadKeys.map((e) => ({ key: b(e) })),
              ...r.map((e) => ({ key: v(e.projectId) })),
            ],
            pinnedOrder: e(ie),
            pinnedSortMode: e(ce),
            pinnedKeyAliases: n?.visibleKeyByStoredKey,
            serverOrderedPinnedThreadHostIds: n?.hostIdByKey,
            serverOrderedPinnedThreadKeys: n?.keys,
          }).flatMap((e) => {
            let t = i.get(e);
            return t == null ? (a.get(e) ?? []) : [t];
          });
        }
        let d = [];
        if (r === `priority`) {
          let t = e(y, `codex`);
          d = Le({
            threadKeys: t.threadKeys,
            attentionStateByThreadKey: new Map(t.threadKeys.map((t) => [t, C(e, t)])),
            recencyAtByThreadKey: new Map(t.threadKeys.map((t) => [t, De(e, t)])),
          });
        }
        let p = Ie({
            source: r,
            pinnedThreadKeys: c,
            pinnedProjectThreadKeys: [],
            recentlyUpdatedThreadKeys: l,
            priorityThreadKeys: d,
            customAgentThreadKeys: u.map((t) => {
              let n = i[t];
              if (n == null) return null;
              if (`threadKey` in n) return n.threadKey;
              let a = r === `custom` && n.type === `command` ? V(n.commandId) : null;
              return a == null ? null : (e(_)[a] ?? null);
            }),
          }),
          m = p.flatMap((t, n) => {
            if (t == null) return [];
            let a = e(z, t);
            if (a == null) return [];
            switch (a.kind) {
              case `local`: {
                if (a.summary == null)
                  return [
                    {
                      slotId: n,
                      threadKey: t,
                      title: a.pendingThreadStart?.title ?? a.pendingWorktree?.label ?? ``,
                    },
                  ];
                let o = u[n],
                  s = r === `custom` && o != null ? i[o] : null,
                  c =
                    (s != null && `threadKey` in s ? s.hostId : null) ??
                    a.summary.hostId ??
                    e(ee, a.summary.conversationId),
                  l = { hostId: c, threadId: a.summary.conversationId },
                  d = e(pe, l)?.summary ?? e(de, { hostId: c, conversationId: a.summary.conversationId });
                return [
                  {
                    slotId: n,
                    threadKey: t,
                    title: e(re, l),
                    localStatus: {
                      attention: e(ge, { conversationId: a.summary.conversationId, hostId: c }),
                      status: e(me, { hostId: c, conversationId: a.summary.conversationId }),
                      unread: d?.hasUnreadTurn === !0,
                    },
                  },
                ];
              }
              case `remote`: {
                let e = a.task.task_status_display?.latest_turn_status_display?.turn_status,
                  r = e === `pending` || e === `in_progress` || e === `failed` ? e : null;
                return [
                  {
                    slotId: n,
                    threadKey: t,
                    title: a.task.title ?? null,
                    remoteStatus: { latestTurnStatus: r, unread: a.task.has_unread_turn === !0 },
                  },
                ];
              }
            }
          });
        if (r === `custom`) {
          let e = new Set(m.map((e) => e.threadKey));
          for (let t of Object.values(i))
            t != null &&
              `threadKey` in t &&
              !e.has(t.threadKey) &&
              m.push({ threadKey: t.threadKey, title: t.title });
        }
        let h = Fe({ isAppWindowFocused: e(he) === !0, threadKeys: p, threads: m, selectedThreadKey: e(se) });
        return r === `custom`
          ? h.map((e) => {
              let t = u[e.id],
                n = t == null ? null : i[t];
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
      (Q = l(t, ({ get: e }) => ({
        brightness: n(e, f.lightingBrightness) / 100,
        inactivityTimeoutMs: s(n(e, f.lightingAutoOff)),
        slots: e(Z),
        voiceState: e(_e),
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
//# sourceMappingURL=codex-micro-slot-signals-838363a53538.js.map
