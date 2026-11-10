import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { Trn as t, krn as n, rrn as r, xrn as i } from "./app-initial-f094ef01c64d.js";
function a(e) {
  let t = c.safeParse(e);
  return t.success && t.data.passkeyEnrollmentCompleted === !0;
}
function o(e) {
  let t = c.safeParse(e);
  return t.success && t.data.returnToPreviousHistoryEntry === !0;
}
function s(e) {
  let t = c.safeParse(e);
  return !t.success || !Object.hasOwn(t.data, `workspaceRoot`)
    ? { hasValue: !1, workspaceRoot: null }
    : { hasValue: !0, workspaceRoot: t.data.workspaceRoot ?? null };
}
var c,
  l = e(() => {
    (r(),
      (c = t({
        passkeyEnrollmentCompleted: i(!0).optional(),
        returnToPreviousHistoryEntry: i(!0).optional(),
        workspaceRoot: n().min(1).nullable().optional(),
      }).loose()));
  });
export { l as i, o as n, s as r, a as t };
//# sourceMappingURL=settings-route-state-24ba1ff4c511.js.map
