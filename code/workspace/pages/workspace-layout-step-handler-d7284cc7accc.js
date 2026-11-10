import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  B7 as n,
  F3t as r,
  ILt as i,
  O3t as a,
  Opn as o,
  QLt as s,
  SFt as c,
  SRt as l,
  Spn as u,
  TFt as d,
  V7 as f,
  VLt as p,
  c6t as m,
  gRt as h,
  jLt as g,
  kmn as _,
  mR as v,
  pR as y,
  xRt as b,
} from "./app-initial-f094ef01c64d.js";
import { n as x, t as S } from "./panel-visibility-6143cd2f2ec9.js";
import {
  a as C,
  i as w,
  n as T,
  o as E,
  r as D,
  t as O,
} from "./view-control-labels-12b31a484acb.js";
function k() {
  let e = (0, j.c)(21),
    n = t(h),
    a = o(),
    c = r(i),
    l = r(M),
    u = r(D),
    p = r(T),
    m = r(d.tabIds$).length > 0,
    g;
  e[0] === n ? (g = e[1]) : ((g = () => A(n)), (e[0] = n), (e[1] = g));
  let _ = !c || l,
    v;
  e[2] !== c || e[3] !== a || e[4] !== u
    ? ((v = c
        ? {
            title: u,
            description: a.formatMessage({
              id: `codex.commandDescription.stepWorkspaceLayout`,
              defaultMessage: `Show or hide content tabs beside Chat`,
              description: `Description for the command that toggles content tabs`,
            }),
          }
        : {
            title: a.formatMessage({
              id: `codex.command.toggleBrowserPanel`,
              defaultMessage: `Toggle browser panel`,
              description: `Title for the command that shows or hides the browser panel`,
            }),
            description: a.formatMessage({
              id: `codex.commandDescription.toggleBrowserPanel`,
              defaultMessage: `Show or hide the browser panel`,
              description: `Description for the command that toggles the browser panel`,
            }),
          }),
      (e[2] = c),
      (e[3] = a),
      (e[4] = u),
      (e[5] = v))
    : (v = e[5]);
  let y;
  (e[6] !== _ || e[7] !== v
    ? ((y = { enabled: _, menuItem: v }), (e[6] = _), (e[7] = v), (e[8] = y))
    : (y = e[8]),
    f(`stepWorkspaceLayout`, g, y));
  let b;
  e[9] === n ? (b = e[10]) : ((b = () => C(n, `full`)), (e[9] = n), (e[10] = b));
  let x;
  e[11] === n ? (x = e[12]) : ((x = () => n.get(s) != null), (e[11] = n), (e[12] = x));
  let S;
  e[13] !== p || e[14] !== m || e[15] !== a
    ? ((S = m
        ? void 0
        : {
            title: p,
            description: a.formatMessage({
              id: `codex.commandDescription.newTabInFullView`,
              defaultMessage: `Create a content tab that fills the workspace`,
              description: `Description for creating a new tab in full view`,
            }),
          }),
      (e[13] = p),
      (e[14] = m),
      (e[15] = a),
      (e[16] = S))
    : (S = e[16]);
  let w;
  return (
    e[17] !== l || e[18] !== x || e[19] !== S
      ? ((w = { enabled: l, isActive: x, menuItem: S }),
        (e[17] = l),
        (e[18] = x),
        (e[19] = S),
        (e[20] = w))
      : (w = e[20]),
    f(`showWorkspaceTabView`, b, w),
    null
  );
}
function A(e) {
  let t = e.get(y, { name: `browser.in-app` }).isCapable;
  if (e.get(s) == null) {
    t && x(e, { initiator: `toggle_browser_command`, source: `manual` });
    return;
  }
  E(e);
}
var j, M;
e(() => {
  ((j = _()),
    a(),
    u(),
    v(),
    p(),
    c(),
    S(),
    n(),
    b(),
    w(),
    O(),
    (M = m(
      h,
      ({ get: e }) =>
        e(i) &&
        !e(l) &&
        (e(d.tabs$).length > 0 || (e(g) && e(y, { name: `browser.in-app` }).isCapable)),
    )));
})();
export { k as WorkspaceLayoutStepHandler };
//# sourceMappingURL=workspace-layout-step-handler-d7284cc7accc.js.map
