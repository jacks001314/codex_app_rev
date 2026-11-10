import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, XOt as r, tkt as i } from "./app-shared-2feb3d4c6fcc.js";
function a(e) {
  let t = (0, o.c)(2),
    { namespace: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r =
          n === `not_sensitive`
            ? (0, s.jsx)(i, {
                id: `personalVault.variableType`,
                defaultMessage: `Environment variable`,
                description: `Type label for a personal variable whose value is visible to the task`,
              })
            : (0, s.jsx)(i, {
                id: `personalVault.networkSecretType`,
                defaultMessage: `Network secret`,
                description: `Type label for a personal secret delivered by the network proxy`,
              })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = n()), r(), (s = t()));
  }))();
}
export { c as n, a as t };
//# sourceMappingURL=entry-type-c9ae5f86f136.js.map
