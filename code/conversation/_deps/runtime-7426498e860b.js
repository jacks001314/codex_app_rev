import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Pt as n,
  AE as r,
  ALt as i,
  B4t as a,
  B6t as o,
  BRt as s,
  CFt as c,
  CQ as l,
  DFt as u,
  DXt as d,
  EFt as f,
  H4t as p,
  J2 as m,
  JPt as h,
  JY as g,
  KKt as _,
  KY as v,
  M4t as y,
  N4t as b,
  O3t as x,
  O8t as S,
  OXt as C,
  QPt as ee,
  SFt as te,
  SRt as w,
  TFt as T,
  V2 as ne,
  VLt as re,
  Vnn as ie,
  XPt as E,
  YY as ae,
  _Q as oe,
  aFt as se,
  c6t as D,
  cFt as ce,
  gRt as O,
  iLt as k,
  jE as le,
  jLt as ue,
  kRt as de,
  lLt as A,
  m6t as fe,
  nFt as pe,
  qKt as me,
  qY as j,
  rLt as he,
  v6 as ge,
  vLt as _e,
  xFt as M,
  xRt as ve,
  y6 as ye,
  yQ as N,
} from "./app-initial-f094ef01c64d.js";
import { r as P, t as be } from "./terminal-workspace-warning-state-9c3cd18f8e4e.js";
function F(e, t, n, r, i) {
  let o = e?.trim();
  if (o != null && o.length > 0) return o;
  if (t != null && t.trim().length > 0) {
    let e = a(t) || t;
    return r > 1 ? `${e} ${n + 1}` : e;
  }
  return i.formatMessage(
    {
      id: `terminal.tabs.title`,
      defaultMessage: `Terminal {index}`,
      description: `Terminal tab title with a 1-based tab index`,
    },
    { index: n + 1 },
  );
}
var xe = e(() => {
  p();
});
function Se(e) {
  (h(e, `right`), requestAnimationFrame(pe));
}
function Ce(e) {
  I(e, void 0, `bottom`);
}
function we(e, t, n = H(e), r = {}) {
  return $.open(e, t, n, r);
}
function I(e, t, n = H(e), { activate: r = !0, cwd: i, hostId: a, insertAfterTabId: o } = {}) {
  let s = t == null ? n : ke(e, t, n),
    c = G(e);
  if (c == null) return null;
  let l = { ...c, cwd: i === void 0 ? c.cwd : i, hostId: a === void 0 ? c.hostId : a },
    u = b.getConversationSnapshot(l.conversationId);
  t != null && !u?.sessionIds.includes(t) && b.addSessionForConversation(l.conversationId, t);
  let d = t ?? Ne(e, s, u?.sessionIds ?? []) ?? b.addSessionForConversation(l.conversationId);
  return (
    b.setActiveSessionForConversation(l.conversationId, d), W(e, l, s), U(e, l, d, r, s, d, o), d
  );
}
function L(e) {
  return G(e) != null;
}
function R(e) {
  B(e, `bottom`);
}
function Te(e) {
  n(e, `bottom`, { allowEmpty: !0 }) && e.set(Y, !0);
}
function Ee(e) {
  return e.watch((e) => {
    if (e.get(Y)) {
      if (!e.get(k) || e.get(M.tabs$).length > 0 || e.get(m) === `failed`) {
        e.set(Y, !1);
        return;
      }
      e.get(ue) && L(e) && (e.set(Y, !1), R(e));
    }
  });
}
function z(e) {
  B(e, `right`);
}
function B(e, t, n) {
  let r = G(e);
  if (r == null) return;
  let i = b.addSessionForConversation(r.conversationId);
  (W(e, r, t), U(e, r, i, !0, t, i, void 0, n));
}
function De(e, { panel: t, sessionId: n, snapshot: r }) {
  let i = G(e);
  i != null &&
    (b.seedSessionForConversation(i.conversationId, n, r, i.cwd), W(e, i, t), U(e, i, n, !1, t, n));
}
function V(e) {
  if (!e.get(w)) {
    if (e.get(X)) {
      h(e, `bottom`);
      return;
    }
    Ce(e);
  }
}
function Oe(e, t = H(e)) {
  if (!e.get(w)) {
    if (t === `bottom`) {
      V(e);
      return;
    }
    if (e.get(Z)) {
      Se(e);
      return;
    }
    I(e, void 0, `right`);
  }
}
function H(e) {
  return e.get(Q);
}
function ke(e, t, n) {
  let r = j(t);
  return e.get(M.tabs$).some((e) => e.tabId === r)
    ? `bottom`
    : e.get(T.tabs$).some((e) => e.tabId === r)
      ? `right`
      : n;
}
function U(e, t, r, i, a, o, s, l) {
  let u = b.getConversationSnapshot(t.conversationId),
    d = u?.sessionIds ?? [],
    f = e.get(C),
    p = E(a);
  Me(e, d, a);
  let m = Pe(e, a, d, o),
    h = new Map(e.get(p.tabs$).map((e) => [e.tabId, e]));
  for (let [n, r] of m.entries()) {
    let i = j(r),
      d = b.getWorkspaceBinding(r),
      g = u?.cwdBySessionId[r] || (d == null ? t.cwd : d.workspaceRoot),
      _ = d == null ? t.hostId : d.hostId,
      v = F(u?.tabTitlesBySessionId[r], g, n, m.length, f),
      y = { ...t, cwd: g, hostId: _, onNewTerminalTab: a === `bottom` ? R : z, sessionId: r },
      x = h.get(i);
    if (x != null) {
      (x.title !== v || !(0, Ie.default)(x.props, y)) && p.updateTab(e, i, { props: y, title: v });
      continue;
    }
    let S = null;
    c(e, $, {
      activate: !1,
      insertAfterTabId: r === o ? s : void 0,
      target: a,
      replaceTabId: r === o ? l : void 0,
      onActivate: (e) => {
        je(e, t, r, a);
      },
      onClose: (e) => {
        let n = b.getSnapshot(r);
        if (n != null) {
          ((S = n), e.set(P, r, null), J.add(r));
          try {
            b.closeSessionForConversation(t.conversationId, r);
          } finally {
            J.delete(r);
          }
        }
      },
      onUndoClose: (e, n) => {
        S != null && (b.seedSessionForConversation(t.conversationId, r, S, g), W(e, t, n));
      },
      onMove: (e, n) => {
        if (n.panelId !== `bottom` && n.panelId !== `right`) return;
        let i = n.panelId;
        return (
          W(e, t, i),
          {
            onActivate: (e) => {
              je(e, t, r, i);
            },
            props: {
              ...t,
              cwd: g,
              hostId: _,
              onNewTerminalTab: i === `bottom` ? R : z,
              sessionId: r,
            },
          }
        );
      },
      requiresWorkspaceReady: !1,
      props: y,
    });
  }
  i && (p.activateTab(e, j(r)), n(e, a));
}
function Ae(e, { conversationId: t, cwd: n, onNewTerminalTab: r, sessionId: i }) {
  let a = b.getConversationSnapshot(t),
    o = Pe(e, r === R ? `bottom` : `right`, a?.sessionIds ?? [], i),
    s = b.getWorkspaceBinding(i);
  return F(
    a?.tabTitlesBySessionId[i],
    a?.cwdBySessionId[i] || (s == null ? n : s.workspaceRoot),
    o.indexOf(i),
    o.length,
    e.get(C),
  );
}
function je(e, t, n, r) {
  let a = E(r);
  if (!b.getConversationSnapshot(t.conversationId)?.sessionIds.includes(n)) {
    let t = j(n);
    a.closeTab(e, t, { recordCloseUndo: !1 });
    return;
  }
  (b.setActiveSessionForConversation(t.conversationId, n), U(e, t, n, !1, r));
  let o = j(n),
    s = r === `bottom` ? `bottom-panel` : `right-panel`;
  requestAnimationFrame(() => {
    let t = document.querySelector(
      `[role="tabpanel"][data-app-shell-tab-panel-controller="${r}"][data-tab-id="${o}"]`,
    );
    if (t == null) return;
    let n = () =>
      !(r === `bottom` ? e.get(k) : e.get(A)) ||
      e.get(i) !== s ||
      e.get(a.activeTab$)?.tabId !== o ||
      !t.isConnected
        ? !0
        : t.querySelector(`textarea`) == null
          ? !1
          : (se(t), !0);
    if (n()) return;
    let c = new MutationObserver(() => {
      n() && c.disconnect();
    });
    c.observe(t, { childList: !0, subtree: !0 });
  });
}
function W(e, t, n) {
  let r = String(t.conversationId),
    i = q.get(r);
  if (i != null) {
    i.panels.add(n);
    return;
  }
  let a = b.subscribeToConversation(t.conversationId, () => {
    let n = b.getConversationSnapshot(t.conversationId);
    if (n == null) {
      let t = q.get(r);
      if (t != null) {
        for (let n of t.panels) Me(e, [], n);
        t.unsubscribe();
      }
      q.delete(r);
      return;
    }
    let i = q.get(r);
    if (i != null) {
      i.target = G(e) ?? i.target;
      for (let t of i.panels) U(e, i.target, n.activeSessionId, !1, t);
    }
  });
  q.set(r, { panels: new Set([n]), target: t, unsubscribe: a });
}
function Me(e, t, n) {
  let r = E(n),
    i = new Set(t),
    a = !1;
  for (let t of e.get(r.tabs$)) {
    let n = K(t.tabId);
    n != null &&
      !i.has(n) &&
      !J.has(n) &&
      !u(e, r, t.tabId) &&
      (e.set(P, n, null), r.closeTab(e, t.tabId, { recordCloseUndo: !1 }), (a = !0));
  }
  a && e.get(r.tabs$).length === 0 && h(e, n);
}
function Ne(e, t, n) {
  let r = new Set(n),
    i = E(t),
    a = K(e.get(i.activeTab$)?.tabId ?? null);
  if (a != null && r.has(a)) return a;
  for (let t of e.get(i.tabs$)) {
    let e = K(t.tabId);
    if (e != null && r.has(e)) return e;
  }
  return null;
}
function Pe(e, t, n, r) {
  let i = new Set(n),
    a = e.get(E(t).tabs$).flatMap((e) => {
      let t = K(e.tabId);
      return t != null && i.has(t) ? [t] : [];
    });
  return r == null || !i.has(r) || a.includes(r) ? a : [...a, r];
}
function G(e) {
  if (e.get(w)) return null;
  switch (e.value.routeKind) {
    case `home`: {
      let t = e.get(N),
        n = e.get(l);
      return { conversationId: e.value.clientThreadId, conversationTitle: null, cwd: t, hostId: n };
    }
    case `local-thread`:
      return {
        conversationId: r(e, e.value.conversationId),
        conversationTitle: e.get(ye, e.value.conversationId),
        cwd: e.get(N),
        hostId: e.get(l),
      };
    case `new-thread-panel`:
    case `chatgpt-thread`:
    case `client-local-thread`:
    case `remote-thread`:
    case `other`:
      return null;
  }
}
function K(e) {
  return e?.startsWith(`terminal:`) ? e.slice(v.length) : null;
}
function Fe(e) {
  return e.startsWith(v);
}
var Ie,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  Le = e(() => {
    ((Ie = t(ie(), 1)),
      x(),
      o(),
      re(),
      te(),
      f(),
      _e(),
      ce(),
      d(),
      ge(),
      ve(),
      oe(),
      s(),
      me(),
      le(),
      y(),
      xe(),
      be(),
      ee(),
      ne(),
      g(),
      (q = new Map()),
      (J = new Set()),
      (Y = fe(de, !1)),
      (X = D(O, ({ get: e }) => {
        let t = e(M.activeTab$);
        return e(k) && t != null && Fe(t.tabId);
      })),
      (Z = D(O, ({ get: e }) => {
        let t = e(T.activeTab$);
        return e(A) && t != null && Fe(t.tabId);
      })),
      (Q = D(O, ({ get: e, scope: t }) =>
        e(he) === !1 ? `right` : _(t.get, S.defaultTerminalLocation),
      )),
      ($ = ae({
        conversationTransfer: {
          canTransfer: (e, t, n) =>
            b.canTransferSessionToConversation(t.conversationId, r(e, n.threadId), t.sessionId),
          start: (e, t, n, i) =>
            b.transferSessionOwnership(t.conversationId, r(e, n.threadId), t.sessionId, i),
        },
        getId: j,
        getTitle: Ae,
        open: I,
      })));
  });
export {
  R as a,
  X as c,
  $ as d,
  V as f,
  De as i,
  Q as l,
  Ee as m,
  Le as n,
  B as o,
  Oe as p,
  we as r,
  Te as s,
  L as t,
  Z as u,
};
//# sourceMappingURL=runtime-7426498e860b.js.map
