import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { ESn as t, MSn as n, RSn as r, vSn as i, xSn as a, ySn as o } from "./app-initial-5851df3f6cb1.js";
function s(
  e,
  {
    allowDebugMenu: r,
    browserEnabled: i,
    commandAccess: a,
    fileLanguageFeaturesEnabled: o,
    isAutomationsEnabled: s,
    isDictationShortcutEnabled: l,
    isHotkeyWindowEnabled: u,
    isScreenshotSelectionEnabled: d,
    isPriorityFilterEnabled: f,
    isRealtimeVoiceCommandEnabled: p,
    isSpotlightEnabled: m,
    isUnifiedTabStripEnabled: h,
    isSidebarCollapsible: g,
    modeSwitchAvailable: _,
    platform: v,
  },
) {
  let y = t(e);
  return (y != null && !n(y, a)) ||
    !c(e, {
      allowDebugMenu: r,
      fileLanguageFeaturesEnabled: o,
      isAutomationsEnabled: s,
      isDictationShortcutEnabled: l,
      isHotkeyWindowEnabled: u,
      isScreenshotSelectionEnabled: d,
      isPriorityFilterEnabled: f,
      isRealtimeVoiceCommandEnabled: p,
      isSpotlightEnabled: m,
      isUnifiedTabStripEnabled: h,
      isSidebarCollapsible: g,
      modeSwitchAvailable: _,
    })
    ? !1
    : e === `copyConversationPath` || e === `screenshotToCurrentChat` || e === `screenshotToNewChat`
      ? v === `macOS`
      : e === `stepWorkspaceLayout`
        ? h || i
        : e === `hardReloadBrowserPage` || e === `openBrowserTab` || e === `reloadBrowserPage`
          ? i
          : e !== `toggleTraceRecording`;
}
function c(
  e,
  {
    allowDebugMenu: t,
    fileLanguageFeaturesEnabled: n,
    isAutomationsEnabled: i,
    isDictationShortcutEnabled: o,
    isHotkeyWindowEnabled: s,
    isScreenshotSelectionEnabled: c,
    isPriorityFilterEnabled: l,
    isRealtimeVoiceCommandEnabled: u,
    isSpotlightEnabled: d,
    isUnifiedTabStripEnabled: f,
    isSidebarCollapsible: p,
    modeSwitchAvailable: m,
  },
) {
  return e === `showWorkspaceTabView` || a.some((t) => t === e)
    ? f
    : e === `toggleSidebar`
      ? p
      : e === `toggleDebugModal`
        ? t === !0
        : !n && (e === `file.goToDefinition` || e === `file.navigateBack` || e === `file.navigateForward`)
          ? !1
          : e === `screenshotToCurrentChat` || e === `screenshotToNewChat`
            ? c
            : e === `hotkeyWindow`
              ? s
              : e === `spotlightSearch`
                ? d
                : e === `manageTasks`
                  ? i
                  : e === `switchToMode1` || e === `switchToMode2` || e === `switchToMode3`
                    ? m
                    : e === `togglePriorityFilter`
                      ? l
                      : r(e) || e === `notchVoice`
                        ? u
                        : e === `globalDictationHold` || e === `globalDictationSingleTap`
                          ? o
                          : !0;
}
function l(e, t) {
  return e.id === `toggleNotch` || e.id === `notchVoice`
    ? !1
    : e.id === `screenshotToCurrentChat` || e.id === `screenshotToNewChat`
      ? t.isScreenshotSelectionEnabled && t.desktopShortcuts === !0 && t.platform === `macOS` && n(e, t)
      : e.id === `personalitySettings` || !n(e, t)
        ? !1
        : e.id === `toggleSidebar` || c(e.id, t);
}
function u() {
  return (u = e(() => {
    i();
  }))();
}
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
  return e.kind !== `webview` || e.commandMenuGroupKey == null ? o.length : o.indexOf(e.commandMenuGroupKey);
}
var m;
function h() {
  return (h = e(() => {
    (i(), (m = [`newTask`, `temporaryChat`, `archiveThread`, `newProjectlessTask`, `openSideChat`]));
  }))();
}
export { l as a, s as i, h as n, u as r, d as t };
//# sourceMappingURL=keyboard-shortcut-command-order-20a2fd5df6d6.js.map
