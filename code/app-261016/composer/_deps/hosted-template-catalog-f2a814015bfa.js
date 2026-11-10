import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CI as t, SI as n, eN as r, gI as i, mI as a, nN as o } from "./app-shared-2feb3d4c6fcc.js";
function s(e) {
  return e.name.startsWith(`artifact-template-`)
    ? e.files[`assets/reference.docx`]
      ? `document`
      : e.files[`assets/reference.pptx`]
        ? `presentation`
        : e.files[`assets/reference.xlsx`]
          ? `spreadsheet`
          : n(e.description)
    : null;
}
function c(e) {
  return e.flatMap(({ servicePlugin: e }) =>
    e == null || !(`enabled` in e) || !e.enabled || e.status !== `ENABLED`
      ? []
      : (e.release.skills ?? []).flatMap((t) => {
          if (!t.name.startsWith(`artifact-template-`) || e.disabled_skill_names.includes(t.name)) return [];
          let r = n(t.description);
          return r == null || a(r) == null ? [] : [{ plugin: e, skill: t, type: r }];
        }),
  );
}
function l(e) {
  return r(e.display_name?.trim() || e.name, s(e));
}
function u() {
  return (u = e(() => {
    (i(), t(), o());
  }))();
}
export { u as i, s as n, c as r, l as t };
//# sourceMappingURL=hosted-template-catalog-f2a814015bfa.js.map
