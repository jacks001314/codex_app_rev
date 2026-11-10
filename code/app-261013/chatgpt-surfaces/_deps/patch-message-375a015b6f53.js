import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, vzt as n, xMt as r, zxt as i } from "./app-shared-bbfeca5e5737.js";
import { Ka as a, Ya as o } from "./app-primary-fe8a450b3b04.js";
import { n as s, t as c } from "./content-reference-b728d37a71e6.js";
function l(e) {
  let t = (0, u.c)(12),
    { result: n, turnContext: r } = e,
    a;
  t[0] !== n.libraryFileId || t[1] !== r.conversationId
    ? ((a = { conversationId: r.conversationId, libraryFileId: n.libraryFileId }),
      (t[0] = n.libraryFileId),
      (t[1] = r.conversationId),
      (t[2] = a))
    : (a = t[2]);
  let s = i(o, a),
    l;
  t[3] !== s?.source || t[4] !== n.libraryFileId
    ? ((l = s?.source ?? { preview_type: `sites`, library_file_id: n.libraryFileId }),
      (t[3] = s?.source),
      (t[4] = n.libraryFileId),
      (t[5] = l))
    : (l = t[5]);
  let f;
  t[6] === l ? (f = t[7]) : ((f = { data: l }), (t[6] = l), (t[7] = f));
  let p;
  return (
    t[8] !== n || t[9] !== f || t[10] !== r
      ? ((p = (0, d.jsx)(c, { reference: f, patchResult: n, turnContext: r })),
        (t[8] = n),
        (t[9] = f),
        (t[10] = r),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), t(), a(), s(), (d = r()));
  }))();
}
f();
export { l as SitesPreviewPatchMessage };
//# sourceMappingURL=patch-message-375a015b6f53.js.map
