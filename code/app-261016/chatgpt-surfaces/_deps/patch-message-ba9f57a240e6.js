import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, ZSt as r, nCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { ao as a, no as o } from "./app-primary-3e00728c2a4c.js";
import { n as s, t as c } from "./content-reference-54dfe3f33e9e.js";
function l(e) {
  let t = (0, u.c)(12),
    { result: n, turnContext: r } = e,
    o;
  t[0] !== n.libraryFileId || t[1] !== r.conversationId
    ? ((o = { conversationId: r.conversationId, libraryFileId: n.libraryFileId }),
      (t[0] = n.libraryFileId),
      (t[1] = r.conversationId),
      (t[2] = o))
    : (o = t[2]);
  let s = i(a, o),
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
    ((u = n()), r(), o(), s(), (d = t()));
  }))();
}
f();
export { l as SitesPreviewPatchMessage };
//# sourceMappingURL=patch-message-ba9f57a240e6.js.map
