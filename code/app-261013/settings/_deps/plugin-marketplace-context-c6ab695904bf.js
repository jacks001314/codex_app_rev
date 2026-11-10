import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, jDt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { AEr as a, D1n as o, E1n as s, hEr as c, kEr as l, vEr as u } from "./app-initial-5851df3f6cb1.js";
function d(e) {
  let n = (0, f.c)(5),
    { source: r, adminLabel: i } = e;
  if (r === `IMPLICIT_CANONICAL_APP`) {
    let e;
    return (
      n[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, p.jsx)(t, {
            id: `plugins.requiredByChatGPT.actionLabel`,
            defaultMessage: `Required by ChatGPT`,
            description: `Disabled uninstall action for a plugin automatically provided and required by ChatGPT, rather than installed by a workspace admin`,
          })),
          (n[0] = e))
        : (e = n[0]),
      e
    );
  }
  let a;
  n[1] === i
    ? (a = n[2])
    : ((a =
        i ??
        (0, p.jsx)(t, {
          id: `plugins.installedByDefault.actionLabel`,
          defaultMessage: `Installed by admin`,
          description: `Disabled action label shown for a plugin installed by an admin`,
        })),
      (n[1] = i),
      (n[2] = a));
  let o;
  return (
    n[3] === a ? (o = n[4]) : ((o = (0, p.jsx)(p.Fragment, { children: a })), (n[3] = a), (n[4] = o)),
    o
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = r()), n(), (p = i()));
  }))();
}
function h(e, t) {
  if (!e.get(a)) return;
  let n = e.get(c);
  if (n != null)
    return {
      productExperience: n === `chat` ? s.CHATGPT_PRODUCT_EXPERIENCE_CHAT : s.CHATGPT_PRODUCT_EXPERIENCE_WORK,
      surface: t,
    };
}
function g() {
  return (g = e(() => {
    (o(), u(), l());
  }))();
}
export { m as i, g as n, d as r, h as t };
//# sourceMappingURL=plugin-marketplace-context-c6ab695904bf.js.map
