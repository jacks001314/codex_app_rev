import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, fSt as r, sPt as i, uPt as a, wot as o } from "./app-shared-bbfeca5e5737.js";
function s(e, t, n) {
  e.set(l, (e) =>
    a(e, (e) => {
      let r = typeof n == `function` ? n(e[t]) : n;
      r === void 0 ? delete e[t] : (e[t] = r);
    }),
  );
}
var c, l, u;
function d() {
  return (d = e(() => {
    (i(),
      n(),
      o(),
      (c = (function (e) {
        return (
          (e.IgnoredMicrophonePrompt = `userIgnoredMicrophonePrompt`),
          (e.DeniedMicrophonePrompt = `userDeniedMicrophonePrompt`),
          (e.LimitReached = `limitReached`),
          (e.HangupTool = `hangupTool`),
          (e.UserAbort = `userAbort`),
          (e.UserRequest = `userRequest`),
          (e.NetworkDisconnected = `networkDisconnected`),
          (e.UserNavigatedAway = `userNavigatedAway`),
          (e.UserSwitchedToStandard = `userSwitchedToStandard`),
          (e.Failed = `failed`),
          (e.ElectronAppMinimized = `electron-app-minimized`),
          e
        );
      })({})),
      (l = r(t, () => ({}))),
      (u = r(t, () => [])));
  }))();
}
export { l as a, u as i, d as n, s as r, c as t };
//# sourceMappingURL=command-state-7dc5a32fb56e.js.map
