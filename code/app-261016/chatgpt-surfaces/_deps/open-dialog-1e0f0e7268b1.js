const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./suggestion-dialog-9012864fa5de.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./app-primary-3e00728c2a4c.js",
      "./app-primary-4d86db640757.css",
      "./chatgpt_reference_images-f5207aa3f1c3.js",
      "./form-dialog-629e5e2bdd9e.js",
      "./src-64808839b2f3.js",
      "./dialog-893b24a048e2.js",
      "./pin-analytics-33d324ed1f7b.js",
      "./telemetry-ec8e0eb23919.js",
      "./site-preview-4f8756af126e.js",
      "./items-408453923691.js",
      "./src-693e88997826.css",
      "./form-dialog-1a7f3b2289b2.js",
      "./manage-dialog-2f7a3dad9c78.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, kFt as n } from "./app-shared-2feb3d4c6fcc.js";
import { A5n as r, D5n as i, Zan as a } from "./app-initial-ad16eaadf81f.js";
import { Cr as o, do as s, uo as c } from "./app-primary-3e00728c2a4c.js";
async function l(e, n) {
  let i = e.get(a);
  if (i == null || !e.get(s)) return;
  let { ReferenceImageSuggestionDialog: o } = await t(
    async () => {
      let { ReferenceImageSuggestionDialog: e } = await import(`./suggestion-dialog-9012864fa5de.js`);
      return { ReferenceImageSuggestionDialog: e };
    },
    __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
    import.meta.url,
  );
  e.get(s) && e.get(a) === i && r(e, o, { ...n, referenceImagesAccountId: i });
}
async function u(e, { onSaved: n } = {}) {
  let i = e.get(a);
  if (i == null || !e.get(s)) return;
  let { ReferenceImageFormDialog: o } = await t(
    async () => {
      let { ReferenceImageFormDialog: e } = await import(`./form-dialog-1a7f3b2289b2.js`);
      return { ReferenceImageFormDialog: e };
    },
    __vite__mapDeps([17, 2, 1, 3, 9, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 8]),
    import.meta.url,
  );
  e.get(s) && e.get(a) === i && r(e, o, { referenceImagesAccountId: i, onSaved: n });
}
async function d(e, n, { onClose: i } = {}) {
  let o = e.get(a);
  if (o == null || !e.get(s)) return;
  let { ReferenceImageManageDialog: c } = await t(
    async () => {
      let { ReferenceImageManageDialog: e } = await import(`./manage-dialog-2f7a3dad9c78.js`);
      return { ReferenceImageManageDialog: e };
    },
    __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 8]),
    import.meta.url,
  );
  e.get(s) && e.get(a) === o && r(e, c, { onClose: i, referenceImage: n, referenceImagesAccountId: o });
}
function f() {
  return (f = e(() => {
    (i(), c(), o(), n());
  }))();
}
export { l as i, u as n, d as r, f as t };
//# sourceMappingURL=open-dialog-1e0f0e7268b1.js.map
