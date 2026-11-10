import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $xt as t,
  Cot as n,
  Fat as r,
  Kat as i,
  Pat as a,
  Pxt as o,
  qat as s,
  wot as c,
  znt as l,
} from "./app-shared-bbfeca5e5737.js";
async function u(e) {
  return l(i.computerUseSettings.removeAppApproval(e));
}
async function d(e, t) {
  let n = y.then(() => (t.throwIfAborted(), l(i.computerUseSettings.searchMessagesChats(e))));
  y = n.then(
    () => void 0,
    () => void 0,
  );
  let r = await n;
  return (t.throwIfAborted(), r);
}
async function f(e) {
  return l(i.computerUseSettings.setMessagesReadAccessPolicy(e));
}
async function p(e, t, n) {
  return l(i.computerUseSettings.setMessagesReadDecision(e, t, n));
}
async function m(e) {
  return l(i.computerUseSettings.removeMessagesReadDecision(e));
}
async function h(e) {
  return l(i.computerUseSettings.setMessagesSendAllowAllChats(e));
}
async function g(e) {
  return l(i.computerUseSettings.removeMessagesSendApproval(e));
}
async function _(e) {
  return l(i.computerUseSettings.setSoundMode(e));
}
async function v(e) {
  return l(i.computerUseSettings.setLockedUseEnabled(e));
}
var y, b, x, S, C, w;
function T() {
  return (T = e(() => {
    (o(),
      s(),
      c(),
      r(),
      (y = Promise.resolve()),
      (b = t(n, () => ({
        queryFn: ({ signal: e }) => l(i.computerUseSettings.getAppApprovals(), e),
        queryKey: [`computer-use-app-approvals`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: a.ONE_MINUTE,
      }))),
      (x = t(n, () => ({
        queryFn: ({ signal: e }) => l(i.computerUseSettings.getMessagesReadDecisions(), e),
        queryKey: [`messages-read-decisions`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: a.ONE_MINUTE,
      }))),
      (S = t(n, () => ({
        queryFn: ({ signal: e }) => l(i.computerUseSettings.getMessagesSendApprovals(), e),
        queryKey: [`messages-send-approvals`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: a.ONE_MINUTE,
      }))),
      (C = t(n, () => ({
        queryFn: ({ signal: e }) => l(i.computerUseSettings.getSoundMode(), e),
        queryKey: [`computer-use-sound-mode`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: a.FIVE_SECONDS,
      }))),
      (w = t(n, () => ({
        queryFn: ({ signal: e }) => l(i.computerUseSettings.getLockedUseState(), e),
        queryKey: [`locked-computer-use`],
        refetchOnMount: `always`,
        refetchOnWindowFocus: !0,
        staleTime: a.FIVE_SECONDS,
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
//# sourceMappingURL=computer-use-app-approvals-query-3da9853157ef.js.map
