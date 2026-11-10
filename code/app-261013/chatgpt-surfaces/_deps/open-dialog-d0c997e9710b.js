const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./suggestion-dialog-c167598bd81a.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./app-primary-fe8a450b3b04.js",
      "./app-primary-71492d0e9e92.css",
      "./chatgpt_reference_images-1ef80e77bfff.js",
      "./form-dialog-9e4d61b26f6d.js",
      "./src-c65a930b3c0e.js",
      "./dialog-bd1854abad10.js",
      "./pin-analytics-417acc826387.js",
      "./site-preview-b226ffd1d9b7.js",
      "./telemetry-754c57f9b0cd.js",
      "./src-693e88997826.css",
      "./form-dialog-4d4a3510afc5.js",
      "./manage-dialog-1f52fb492e01.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { fPt as t, pPt as n } from "./app-shared-bbfeca5e5737.js";
import { Ann as r, G4n as i, J4n as a } from "./app-initial-5851df3f6cb1.js";
import { eo as o, mr as s, to as c } from "./app-primary-fe8a450b3b04.js";
async function l(e, n) {
  let i = e.get(r);
  if (i == null || !e.get(c)) return;
  let { ReferenceImageSuggestionDialog: o } = await t(
    async () => {
      let { ReferenceImageSuggestionDialog: e } = await import(`./suggestion-dialog-c167598bd81a.js`);
      return { ReferenceImageSuggestionDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]),
    import.meta.url,
  );
  e.get(c) && e.get(r) === i && a(e, o, { ...n, referenceImagesAccountId: i });
}
async function u(e, { onSaved: n } = {}) {
  let i = e.get(r);
  if (i == null || !e.get(c)) return;
  let { ReferenceImageFormDialog: o } = await t(
    async () => {
      let { ReferenceImageFormDialog: e } = await import(`./form-dialog-4d4a3510afc5.js`);
      return { ReferenceImageFormDialog: e };
    },
    __vite__mapDeps([16, 2, 1, 3, 9, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 8]),
    import.meta.url,
  );
  e.get(c) && e.get(r) === i && a(e, o, { referenceImagesAccountId: i, onSaved: n });
}
async function d(e, n) {
  let i = e.get(r);
  if (i == null || !e.get(c)) return;
  let { ReferenceImageManageDialog: o } = await t(
    async () => {
      let { ReferenceImageManageDialog: e } = await import(`./manage-dialog-1f52fb492e01.js`);
      return { ReferenceImageManageDialog: e };
    },
    __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 8]),
    import.meta.url,
  );
  e.get(c) && e.get(r) === i && a(e, o, { referenceImage: n, referenceImagesAccountId: i });
}
function f() {
  return (f = e(() => {
    (i(), o(), s(), n());
  }))();
}
export { l as i, u as n, d as r, f as t };
//# sourceMappingURL=open-dialog-d0c997e9710b.js.map
