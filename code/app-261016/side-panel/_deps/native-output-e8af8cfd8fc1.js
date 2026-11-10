import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ez as t,
  HFt as n,
  Mz as r,
  Oz as i,
  VRt as a,
  Yst as o,
  ZA as s,
  Zst as c,
  ast as l,
  ist as u,
  kRt as d,
  qst as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $gr as p,
  Dgn as m,
  Gqn as h,
  Mgn as g,
  Ngn as _,
  Ogn as v,
  Qgr as y,
  Uqn as b,
  Zgr as x,
  aJr as S,
  cZr as C,
  eZr as w,
  lJr as T,
} from "./app-initial-ad16eaadf81f.js";
import { m as E, n as D, p as O, t as k } from "./workbook-1fd3f253a266.js";
import { n as A, t as j } from "./artifact-preview-loaders.electron-ebf8f3b81e33.js";
import { r as M, t as N } from "./error-21e6fb16598c.js";
import { r as P, t as F } from "./snapshot-26295b9b71a7.js";
import { a as I, o as L, r as R } from "./references-3c35b3bb7f76.js";
function z(e) {
  if (e.byteLength > 134217728) throw Error(`artifact_import_file_too_large`);
  let t = 0,
    n = 0;
  if (
    (T(e, {
      filter: (e) => {
        if ((t++, (n += e.originalSize), t > V || !Number.isSafeInteger(n) || n > H))
          throw Error(`artifact_import_archive_too_large`);
        return !1;
      },
    }),
    t === 0)
  )
    throw Error(`artifact_import_empty_archive`);
}
var B, V, H;
function U() {
  return (U = e(() => {
    (S(), (B = 134217728), (V = 1e4), (H = 536870912));
  }))();
}
async function W({ outputDirectory: e, kind: t, signal: n }) {
  try {
    var i = f();
    if ((n.throwIfAborted(), t === `canvas`)) throw new N(`empty`);
    let a = i.u(
      await u.workspaceFiles.read({
        hostId: o,
        path: r(e, `page-artifact.json`),
        representation: `text`,
        maxBytes: 16384,
      }),
    );
    if ((n.throwIfAborted(), !(`text` in a))) throw new N(`empty`);
    let s;
    try {
      s = Y.parse(JSON.parse(a.text));
    } catch {
      throw new N(`empty`);
    }
    let { title: c, fileName: l } = s;
    return await G({ path: r(e, l), title: c, kind: t, signal: n });
  } catch (e) {
    i.e = e;
  } finally {
    i.d();
  }
}
async function G({ path: e, title: t, kind: n, signal: r }) {
  let { fileName: i, importKind: a, bytes: o } = await q({ path: e, kind: n, signal: r });
  if (a == null) throw new N(`empty`);
  let s = await A(o, a);
  r.throwIfAborted();
  let c;
  switch (s.kind) {
    case `spreadsheet`: {
      let e = k.load(s.proto);
      try {
        c = g(e);
      } finally {
        e.getCrdtDoc().destroy();
      }
      break;
    }
    case `presentation`: {
      let e = O.load(s.proto);
      try {
        for (let t of e.getImageAssetItems())
          !t.uri && t.dataByteLength > 0 && (t.uri = `data:${t.contentType};base64,${p(t.data)}`);
        c = g(e);
      } finally {
        e.getCrdtDoc().destroy();
      }
      break;
    }
    case `document`: {
      let e = m(P(s.proto));
      try {
        c = w(e);
      } finally {
        e.destroy();
      }
      break;
    }
  }
  return {
    title: t,
    file: new File([o], i, { type: (0, J.lookup)(i) || `application/octet-stream` }),
    documentType: L[n],
    initialUpdate: p(c),
  };
}
async function K({ path: e, bytes: t, kind: n, signal: r }) {
  let { bytes: i, importKind: a } = await q({ path: e, bytes: t, kind: n, signal: r });
  if (a !== `pptx` && a !== `xlsx`) throw new N(`empty`);
  let o = await A(i, a);
  switch ((r.throwIfAborted(), o.kind)) {
    case `presentation`:
      return O.load(o.proto);
    case `spreadsheet`:
      return k.load(o.proto);
    case `document`:
      throw new N(`empty`);
  }
}
async function q({ path: e, bytes: n, kind: r, signal: i }) {
  i.throwIfAborted();
  let a = t(e),
    s = b(a);
  if (r === `canvas` ? !a.endsWith(`.whiteboard`) : s == null || R(a) !== r) throw new N(`empty`);
  let c = n;
  if (c == null)
    try {
      var l = f();
      let t = l.u(
        await u.workspaceFiles.read({
          hostId: o,
          path: e,
          representation: `blob`,
          maxBytes: s === `pptx` || s === `xlsx` ? B : void 0,
        }),
      );
      if ((i.throwIfAborted(), !(`blob` in t))) throw new N(`empty`);
      c = y(t.blob);
    } catch (e) {
      l.e = e;
    } finally {
      l.d();
    }
  return ((s === `pptx` || s === `xlsx`) && z(c), { fileName: a, importKind: s, bytes: c });
}
var J, Y;
function X() {
  return (X = e(() => {
    (E(),
      D(),
      v(),
      _(),
      (J = s()),
      C(),
      n(),
      j(),
      h(),
      F(),
      M(),
      l(),
      c(),
      x(),
      i(),
      U(),
      I(),
      (Y = d({
        title: a().trim().min(1).max(200),
        fileName: a()
          .min(1)
          .max(255)
          .regex(/^[^/\\:\u0000-\u001f]+$/u),
      })));
  }))();
}
export { W as n, K as r, X as t };
//# sourceMappingURL=native-output-e8af8cfd8fc1.js.map
