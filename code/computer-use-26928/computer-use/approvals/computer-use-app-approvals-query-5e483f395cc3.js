import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Gwt as t,
  Hk as n,
  NNt as r,
  O5t as i,
  PNt as a,
  Rwt as o,
  Vk as s,
  X5t as c,
  Zqt as l,
  _jt as u,
  dJt as d,
  fJt as f,
  gjt as p,
  q5t as m,
  vMt as h,
  yMt as g,
} from "./app-shared-7552fc8d5d82.js";
import { n as _, r as v } from "./remote-control-connections-visibility-ea9c5521e811.js";
var y;
function b() {
  return (b = e(() => {
    (i(),
      t(),
      _(),
      f(),
      a(),
      h(),
      (y = c(
        d,
        (e, { get: t }) =>
          t(g, `2296472986`) &&
          v({
            remoteControlConnectionsState: r(t, `remote_control_connections_state`),
            slingshotEnabled: t(g, `1042620455`),
          }) &&
          t(o, { hostId: e }).data?.requirements?.computerUse?.allowLockedComputerUse !== !1,
      )));
  }))();
}
async function x(e) {
  return l(s.computerUseSettings.removeAppApproval(e));
}
async function S(e, t) {
  let n = A.then(() => (t.throwIfAborted(), l(s.computerUseSettings.searchMessagesChats(e))));
  A = n.then(
    () => void 0,
    () => void 0,
  );
  let r = await n;
  return (t.throwIfAborted(), r);
}
async function C(e) {
  return l(s.computerUseSettings.setMessagesReadAccessPolicy(e));
}
async function w(e, t, n) {
  return l(s.computerUseSettings.setMessagesReadDecision(e, t, n));
}
async function T(e) {
  return l(s.computerUseSettings.removeMessagesReadDecision(e));
}
async function E(e) {
  return l(s.computerUseSettings.setMessagesSendAllowAllChats(e));
}
async function D(e) {
  return l(s.computerUseSettings.removeMessagesSendApproval(e));
}
async function O(e) {
  return l(s.computerUseSettings.setSoundMode(e));
}
async function k(e) {
  return l(s.computerUseSettings.setLockedUseEnabled(e));
}
var A, j, M, N, P, F;
function I() {
  return (I = e(() => {
    (i(),
      n(),
      f(),
      u(),
      (A = Promise.resolve()),
      (j = m(d, () => ({
        queryFn: ({ signal: e }) => l(s.computerUseSettings.getAppApprovals(), e),
        queryKey: [`computer-use-app-approvals`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: p.ONE_MINUTE,
      }))),
      (M = m(d, () => ({
        queryFn: ({ signal: e }) => l(s.computerUseSettings.getMessagesReadDecisions(), e),
        queryKey: [`messages-read-decisions`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: p.ONE_MINUTE,
      }))),
      (N = m(d, () => ({
        queryFn: ({ signal: e }) => l(s.computerUseSettings.getMessagesSendApprovals(), e),
        queryKey: [`messages-send-approvals`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: p.ONE_MINUTE,
      }))),
      (P = m(d, () => ({
        queryFn: ({ signal: e }) => l(s.computerUseSettings.getSoundMode(), e),
        queryKey: [`computer-use-sound-mode`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: p.FIVE_SECONDS,
      }))),
      (F = m(d, () => ({
        queryFn: ({ signal: e }) => l(s.computerUseSettings.getLockedUseState(), e),
        queryKey: [`locked-computer-use`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: p.FIVE_SECONDS,
      }))));
  }))();
}
export {
  b as _,
  M as a,
  T as c,
  k as d,
  C as f,
  y as g,
  O as h,
  F as i,
  D as l,
  E as m,
  P as n,
  N as o,
  w as p,
  I as r,
  x as s,
  j as t,
  S as u,
};
//# sourceMappingURL=computer-use-app-approvals-query-5e483f395cc3.js.map
