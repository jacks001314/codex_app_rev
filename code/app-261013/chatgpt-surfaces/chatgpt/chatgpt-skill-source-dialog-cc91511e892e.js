import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { B4 as t, TJ as n, YK as r, vzt as i, xMt as a, z4 as o } from "./app-shared-bbfeca5e5737.js";
import { Mut as s, Nut as c } from "./app-initial-5851df3f6cb1.js";
import { r as l, t as u } from "./plugin-skill-preview-4eaa4ba9469e.js";
function d(e) {
  let t = (0, f.c)(10),
    { source: n, shouldBlockExternalEgress: i, onClose: a } = e;
  if (n.pluginId != null) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, p.jsx)(r, {})), (t[0] = e)) : (e = t[0]);
    let o;
    return (
      t[1] !== a || t[2] !== i || t[3] !== n.label || t[4] !== n.pluginId || t[5] !== n.pluginName
        ? ((o = (0, p.jsx)(u, {
            skillName: n.label,
            title: n.label,
            description: n.pluginName,
            icon: e,
            pluginId: n.pluginId,
            shouldBlockExternalEgress: i,
            onClose: a,
          })),
          (t[1] = a),
          (t[2] = i),
          (t[3] = n.label),
          (t[4] = n.pluginId),
          (t[5] = n.pluginName),
          (t[6] = o))
        : (o = t[6]),
      o
    );
  }
  let o;
  return (
    t[7] !== a || t[8] !== n.skillId
      ? ((o = n.skillId == null ? null : (0, p.jsx)(m, { skillId: n.skillId, onClose: a })),
        (t[7] = a),
        (t[8] = n.skillId),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
var f, p, m;
function h() {
  return (h = e(() => {
    ((f = i()), s(), n(), o(), l(), (p = a()), (m = t(c)));
  }))();
}
h();
export { d as ChatGptSkillSourceDialog };
//# sourceMappingURL=chatgpt-skill-source-dialog-cc91511e892e.js.map
