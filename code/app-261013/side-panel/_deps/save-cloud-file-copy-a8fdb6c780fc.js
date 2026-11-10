import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FR as n,
  Jbt as r,
  Kat as i,
  LR as a,
  ldt as o,
  lgt as s,
  qat as c,
  qft as l,
  rst as u,
  znt as d,
} from "./app-shared-bbfeca5e5737.js";
import { $fr as f, XPr as p, YPr as m, epr as h, gAn as g, hAn as _ } from "./app-initial-5851df3f6cb1.js";
function v(e, t) {
  let n = t.environmentId,
    i = t.cwd;
  if (n == null) {
    let a = e.get(
      g,
      t.conversationId == null ? null : { kind: `app-server`, conversationId: r(t.conversationId) },
    );
    if (a?.hostId !== `durable`) throw Error(`Cloud environment unavailable`);
    ((n = a.environmentId), (i = a.cwd == null ? null : l(a.cwd)));
  }
  let a = t.path;
  if (!b.default.posix.isAbsolute(a)) {
    if (i == null || !b.default.posix.isAbsolute(i)) throw Error(`Cloud working directory unavailable`);
    a = b.default.posix.resolve(i, a);
  }
  return { environmentId: n, cwd: i, path: a };
}
async function y(e, { environmentId: t, path: r }) {
  if (t == null || i.workspaceFiles.saveCopy == null) throw Error(`Cloud file download is unavailable`);
  let a = { environmentId: t, path: r },
    { dataBase64: o } = await d(m(e, s).sendRequest(`fs/readFile`, a)),
    c = h(o);
  if (c.byteLength > 268435456) throw Error(`File is too large to download`);
  return d(i.workspaceFiles.saveCopy({ bytes: c, fileName: n(r) }));
}
var b;
function x() {
  return (x = e(() => {
    ((b = t(o(), 1)), u(), p(), c(), _(), f(), a());
  }))();
}
export { x as n, y as r, v as t };
//# sourceMappingURL=save-cloud-file-copy-a8fdb6c780fc.js.map
