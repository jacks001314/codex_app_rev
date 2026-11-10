const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./picker-dialog-a5ee48f9c821.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
import { A5n as r, D5n as i, K_r as a, Q_r as o } from "./app-initial-ad16eaadf81f.js";
async function s(e) {
  let { PrimaryOrbitPickerDialog: n } = await t(
    async () => {
      let { PrimaryOrbitPickerDialog: e } = await import(`./picker-dialog-a5ee48f9c821.js`);
      return { PrimaryOrbitPickerDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5]),
    import.meta.url,
  );
  e.get(o) && r(e, n);
}
function c() {
  return (c = e(() => {
    (i(), a(), n());
  }))();
}
export { s as n, c as t };
//# sourceMappingURL=open-picker-590970999d1f.js.map
