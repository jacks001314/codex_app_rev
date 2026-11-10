import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { iHt as t, rHt as n } from "./app-initial-f094ef01c64d.js";
function r(e) {
  return typeof e == `boolean` ? e : (e?.[`full-access`] ?? !0);
}
function i({
  canShowDefaultPermissions: e,
  canSelectGuardianMode: t,
  canShowConfigCustom: n,
  canShowConfigFullAccess: r,
  canShowGuardianOption: i,
  selectionAgentModes: a,
  visibleAgentModes: o,
}) {
  let s = r && o.includes(`full-access`),
    c = n && a.includes(`custom`),
    l = i;
  return {
    canShowCustom: c,
    canShowFullAccess: s,
    optionCount: +!!e + (l && t ? 1 : 0) + +!!s + +!!c,
    showGuardianOption: l,
  };
}
function a({ availableAgentModes: e, showFullAccessInComposer: t }) {
  return e.filter((e) => {
    switch (e) {
      case `full-access`:
        return t;
      case `custom`:
        return !1;
      case `auto`:
      case `granular`:
      case `guardian-approvals`:
      case `read-only`:
        return !0;
    }
  });
}
function o({ availableAgentModes: e, visibleAgentModes: t }) {
  return e.includes(`custom`) ? [...t, `custom`] : t;
}
var s,
  c = e(() => {
    (n(), (s = t(`composer-permission-mode-visibility`, !0)));
  });
export { c as a, a as i, o as n, s as o, r, i as t };
//# sourceMappingURL=permissions-mode-visibility-db970a26e43f.js.map
