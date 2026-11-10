import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { F3 as t, I3 as n, LNt as r, PBt as i, TY as a, Yq as o } from "./app-shared-2feb3d4c6fcc.js";
import { Ldt as s, Rdt as c } from "./app-initial-ad16eaadf81f.js";
import { r as l, t as u } from "./plugin-skill-preview-9078c0eb7255.js";
function d(e) {
  let t = (0, f.c)(10),
    { source: n, shouldBlockExternalEgress: r, onClose: i } = e;
  if (n.pluginId != null) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, p.jsx)(o, {})), (t[0] = e)) : (e = t[0]);
    let a;
    return (
      t[1] !== i || t[2] !== r || t[3] !== n.label || t[4] !== n.pluginId || t[5] !== n.pluginName
        ? ((a = (0, p.jsx)(u, {
            skillName: n.label,
            title: n.label,
            description: n.pluginName,
            icon: e,
            pluginId: n.pluginId,
            shouldBlockExternalEgress: r,
            onClose: i,
          })),
          (t[1] = i),
          (t[2] = r),
          (t[3] = n.label),
          (t[4] = n.pluginId),
          (t[5] = n.pluginName),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  let a;
  return (
    t[7] !== i || t[8] !== n.skillId
      ? ((a = n.skillId == null ? null : (0, p.jsx)(m, { skillId: n.skillId, onClose: i })),
        (t[7] = i),
        (t[8] = n.skillId),
        (t[9] = a))
      : (a = t[9]),
    a
  );
}
var f, p, m;
function h() {
  return (h = e(() => {
    ((f = i()), s(), a(), t(), l(), (p = r()), (m = n(c)));
  }))();
}
h();
export { d as ChatGptSkillSourceDialog };
//# sourceMappingURL=chatgpt-skill-source-dialog-cf45c2dc0636.js.map
