import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  Qst as r,
  ZSt as i,
  ast as a,
  gCt as o,
  ist as s,
  tit as c,
  zst as l,
} from "./app-shared-2feb3d4c6fcc.js";
async function u(e) {
  return c(s.computerUseSettings.removeAppApproval(e));
}
async function d(e, t) {
  let n = y.then(() => (t.throwIfAborted(), c(s.computerUseSettings.searchMessagesChats(e))));
  y = n.then(
    () => void 0,
    () => void 0,
  );
  let r = await n;
  return (t.throwIfAborted(), r);
}
async function f(e) {
  return c(s.computerUseSettings.setMessagesReadAccessPolicy(e));
}
async function p(e, t, n) {
  return c(s.computerUseSettings.setMessagesReadDecision(e, t, n));
}
async function m(e) {
  return c(s.computerUseSettings.removeMessagesReadDecision(e));
}
async function h(e) {
  return c(s.computerUseSettings.setMessagesSendAllowAllChats(e));
}
async function g(e) {
  return c(s.computerUseSettings.removeMessagesSendApproval(e));
}
async function _(e) {
  return c(s.computerUseSettings.setSoundMode(e));
}
async function v(e) {
  return c(s.computerUseSettings.setLockedUseEnabled(e));
}
var y, b, x, S, C, w;
function T() {
  return (T = e(() => {
    (i(),
      a(),
      t(),
      n(),
      (y = Promise.resolve()),
      (b = o(r, () => ({
        queryFn: ({ signal: e }) => c(s.computerUseSettings.getAppApprovals(), e),
        queryKey: [`computer-use-app-approvals`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: l.ONE_MINUTE,
      }))),
      (x = o(r, () => ({
        queryFn: ({ signal: e }) => c(s.computerUseSettings.getMessagesReadDecisions(), e),
        queryKey: [`messages-read-decisions`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: l.ONE_MINUTE,
      }))),
      (S = o(r, () => ({
        queryFn: ({ signal: e }) => c(s.computerUseSettings.getMessagesSendApprovals(), e),
        queryKey: [`messages-send-approvals`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: l.ONE_MINUTE,
      }))),
      (C = o(r, () => ({
        queryFn: ({ signal: e }) => c(s.computerUseSettings.getSoundMode(), e),
        queryKey: [`computer-use-sound-mode`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: l.FIVE_SECONDS,
      }))),
      (w = o(r, () => ({
        queryFn: ({ signal: e }) => c(s.computerUseSettings.getLockedUseState(), e),
        queryKey: [`locked-computer-use`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: l.FIVE_SECONDS,
      }))));
  }))();
}
export {
  x as a,
  m as c,
  v as d,
  f,
  _ as h,
  w as i,
  g as l,
  h as m,
  C as n,
  S as o,
  p,
  T as r,
  u as s,
  b as t,
  d as u,
};
//# sourceMappingURL=computer-use-app-approvals-query-a7f2e7f52037.js.map
