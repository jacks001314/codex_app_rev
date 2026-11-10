import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  EK as t,
  FK as n,
  OK as r,
  TK as i,
  jK as a,
  zK as o,
} from "./app-initial-f094ef01c64d.js";
function s(
  e,
  {
    allowDebugMenu: t,
    browserEnabled: r,
    commandAccess: i,
    fileLanguageFeaturesEnabled: o,
    isAutomationsEnabled: s,
    isDictationEnabled: l,
    isGlobalDictationEnabled: u,
    isHotkeyWindowEnabled: d,
    isPriorityFilterEnabled: f,
    isRealtimeVoiceCommandEnabled: p,
    isUnifiedTabStripEnabled: m,
    modeSwitchAvailable: h,
    platform: g,
  },
) {
  let _ = a(e);
  return (_ != null && !n(_, i)) ||
    !c(e, {
      allowDebugMenu: t,
      fileLanguageFeaturesEnabled: o,
      isAutomationsEnabled: s,
      isDictationEnabled: l,
      isGlobalDictationEnabled: u,
      isHotkeyWindowEnabled: d,
      isPriorityFilterEnabled: f,
      isRealtimeVoiceCommandEnabled: p,
      isUnifiedTabStripEnabled: m,
      modeSwitchAvailable: h,
    })
    ? !1
    : e === `copyConversationPath`
      ? g === `macOS`
      : e === `stepWorkspaceLayout`
        ? m || r
        : e === `hardReloadBrowserPage` || e === `openBrowserTab` || e === `reloadBrowserPage`
          ? r
          : e !== `toggleTraceRecording`;
}
function c(
  e,
  {
    allowDebugMenu: t,
    fileLanguageFeaturesEnabled: n,
    isAutomationsEnabled: i,
    isDictationEnabled: a,
    isGlobalDictationEnabled: s,
    isHotkeyWindowEnabled: c,
    isPriorityFilterEnabled: l,
    isRealtimeVoiceCommandEnabled: u,
    isUnifiedTabStripEnabled: d,
    modeSwitchAvailable: f,
  },
) {
  return e === `showWorkspaceTabView` || r.some((t) => t === e)
    ? d
    : e === `toggleDebugModal`
      ? t === !0
      : !n &&
          (e === `file.goToDefinition` || e === `file.navigateBack` || e === `file.navigateForward`)
        ? !1
        : e === `hotkeyWindow`
          ? c
          : e === `manageTasks`
            ? i
            : e === `switchToMode1` || e === `switchToMode2` || e === `switchToMode3`
              ? f
              : e === `togglePriorityFilter`
                ? l
                : o(e)
                  ? u
                  : e === `composer.startDictation`
                    ? a
                    : e === `globalDictationHold` || e === `globalDictationToggle`
                      ? s
                      : !0;
}
function l(e, t) {
  return e.id === `personalitySettings` || !n(e, t) ? !1 : c(e.id, t);
}
var u = e(() => {
  i();
});
function d(e, t) {
  let n = p(e) - p(t);
  if (n !== 0) return n;
  let r = f(e.id) - f(t.id);
  return r === 0 ? e.id.localeCompare(t.id) : r;
}
function f(e) {
  let t = m.indexOf(e);
  return t === -1 ? m.length : t;
}
function p(e) {
  return e.kind !== `webview` || e.commandMenuGroupKey == null
    ? t.length
    : t.indexOf(e.commandMenuGroupKey);
}
var m,
  h = e(() => {
    (i(),
      (m = [
        `newTask`,
        `temporaryChat`,
        `quickChat`,
        `archiveThread`,
        `newProjectlessTask`,
        `openSideChat`,
      ]));
  });
export { l as a, s as i, h as n, u as r, d as t };
//# sourceMappingURL=keyboard-shortcut-command-order-d509233d7b05.js.map
