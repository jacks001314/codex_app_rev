import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  FR as n,
  Kat as r,
  LR as i,
  TLt as a,
  VR as o,
  cA as s,
  iot as c,
  not as l,
  oot as u,
  pLt as d,
  qat as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  $fr as p,
  SWn as m,
  bWn as h,
  dUr as g,
  epr as _,
  fmn as v,
  gmn as y,
  hUr as b,
  hmn as x,
  mKr as S,
  oKr as C,
  pmn as w,
  tpr as T,
} from "./app-initial-5851df3f6cb1.js";
import { m as E, n as D, p as O, t as k } from "./workbook-2a2fa1be98a2.js";
import { n as A, t as j } from "./artifact-preview-loaders.electron-4810e097be82.js";
import { r as M, t as N } from "./error-21e6fb16598c.js";
import { r as P, t as F } from "./snapshot-7d3edd47ebe2.js";
import { a as I, o as L, r as R } from "./references-4e565b8c19a8.js";
function z(e) {
  if (e.byteLength > 134217728) throw Error(`artifact_import_file_too_large`);
  let t = 0,
    n = 0;
  if (
    (b(e, {
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
    (g(), (B = 134217728), (V = 1e4), (H = 536870912));
  }))();
}
async function W({ outputDirectory: e, kind: t, signal: n }) {
  try {
    var i = l();
    if ((n.throwIfAborted(), t === `canvas`)) throw new N(`empty`);
    let a = i.u(
      await r.workspaceFiles.read({
        hostId: c,
        path: o(e, `page-artifact.json`),
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
    let { title: u, fileName: d } = s;
    return await G({ path: o(e, d), title: u, kind: t, signal: n });
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
        c = x(e);
      } finally {
        e.getCrdtDoc().destroy();
      }
      break;
    }
    case `presentation`: {
      let e = O.load(s.proto);
      try {
        for (let t of e.getImageAssetItems())
          !t.uri && t.dataByteLength > 0 && (t.uri = `data:${t.contentType};base64,${T(t.data)}`);
        c = x(e);
      } finally {
        e.getCrdtDoc().destroy();
      }
      break;
    }
    case `document`: {
      let e = v(P(s.proto));
      try {
        c = C(e);
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
    initialUpdate: T(c),
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
async function q({ path: e, bytes: t, kind: i, signal: a }) {
  a.throwIfAborted();
  let o = n(e),
    s = h(o);
  if (i === `canvas` ? !o.endsWith(`.whiteboard`) : s == null || R(o) !== i) throw new N(`empty`);
  let u = t;
  if (u == null)
    try {
      var d = l();
      let t = d.u(
        await r.workspaceFiles.read({
          hostId: c,
          path: e,
          representation: `blob`,
          maxBytes: s === `pptx` || s === `xlsx` ? B : void 0,
        }),
      );
      if ((a.throwIfAborted(), !(`blob` in t))) throw new N(`empty`);
      u = _(t.blob);
    } catch (e) {
      d.e = e;
    } finally {
      d.d();
    }
  return ((s === `pptx` || s === `xlsx`) && z(u), { fileName: o, importKind: s, bytes: u });
}
var J, Y;
function X() {
  return (X = e(() => {
    (E(),
      D(),
      w(),
      y(),
      (J = s()),
      S(),
      t(),
      j(),
      m(),
      F(),
      M(),
      f(),
      u(),
      p(),
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
//# sourceMappingURL=native-output-4bece9e84c04.js.map
