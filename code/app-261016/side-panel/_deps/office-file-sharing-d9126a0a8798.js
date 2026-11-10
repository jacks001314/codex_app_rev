import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { RFt as t, Zst as n, zFt as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  A5n as i,
  BRr as a,
  D5n as o,
  Oar as s,
  POr as c,
  _ur as l,
  gur as u,
  hL as d,
  hdn as f,
  hlr as p,
  kar as m,
  mlr as h,
  pL as g,
  wLr as _,
  zOr as v,
} from "./app-initial-ad16eaadf81f.js";
import { $ as y, $t as b } from "./presentation-20e3999371ab.js";
import { Un as x, Wn as S } from "./spreadsheet-f01a044561f7.js";
import { ja as C, ka as w } from "./app-primary-3e00728c2a4c.js";
import { a as T, n as E, o as D, s as O, t as k } from "./limits-697647f44c89.js";
import { a as A, i as j, n as M, r as N } from "./import-3d08c29cfe8a.js";
import { a as P, i as F, n as I, o as L, r as R, t as z } from "./open-uploaded-page-1d54a6099675.js";
import { r as B, t as V } from "./native-output-e8af8cfd8fc1.js";
async function H(
  e,
  {
    accountId: t,
    userId: n,
    path: r,
    bytes: i,
    title: a,
    signal: o,
    onBeforeUpload: c,
    onSaveRetry: u,
    onPageCreated: d,
  },
) {
  let f = performance.now(),
    m = s(r);
  if (m !== `pptx` && m !== `xlsx`) throw Error(`artifact_upload_unsupported_file`);
  let h = m === `pptx` ? `presentation` : `spreadsheet`,
    g = m === `pptx` ? `granola_presentation` : `granola_workbook`,
    _ = l(e, t, n),
    v = AbortSignal.any([o, _.signal]),
    b;
  try {
    if ((v.throwIfAborted(), !e.get(p, g))) throw Error(`native_page_creation_disabled`);
    if ((await c?.()) === !1) throw Error(`artifact_upload_local_save_failed`);
    v.throwIfAborted();
    let n = await B({ path: r, bytes: i, kind: h, signal: v });
    try {
      let e = 0;
      for (let t of n.getImageAssetItems()) ((e += t.dataByteLength), t.uri != null && (e += t.uri.length));
      if (e > 209715200) throw Error(`artifact_import_source_too_large`);
      let t = T(n);
      if (
        (t.kind === `presentation` ? y.encode(t.artifactProto).finish() : x.encode(t.artifactProto).finish())
          .byteLength +
          (t.nativeStateV2?.byteLength ?? 0) >
        209715200
      )
        throw Error(`artifact_import_source_too_large`);
      b = await D(t, {
        format: `v1`,
        signal: v,
        resolveAsset: async () => {
          throw Error(`artifact_import_external_asset_unsupported`);
        },
      });
    } finally {
      n.getCrdtDoc().destroy();
    }
    return (
      v.throwIfAborted(),
      E(b),
      A(`office_preparation`, f, {
        imageCount: b.assets.length,
        imageBytes: b.assets.reduce((e, t) => e + t.data.byteLength, 0),
        documentBytes: b.update.byteLength,
      }),
      await M(e, {
        accountId: t,
        title: a,
        documentType: g,
        prepared: b,
        signal: v,
        onSaveRetry: u,
        onPageCreated: d,
      })
    );
  } finally {
    _.stop();
  }
}
function U() {
  return (U = e(() => {
    (O(), b(), S(), m(), V(), h(), f(), N(), k(), j());
  }))();
}
function W(e, { path: t, bytes: n, source: o, intent: l = `share`, title: f, tabId: p, onBeforeUpload: m }) {
  let h = e.get(u),
    g = e.get(a);
  if (h == null || g == null) return;
  let _ = s(t) === `pptx` ? `presentation` : `spreadsheet`,
    v = c(e.value, { includeChatGpt: !0 }),
    y = o ?? (v == null ? null : { accountId: h, userId: g, hostId: `local`, threadId: v, path: t });
  i(e, R, {
    title: f,
    intent: l,
    accountId: h,
    userId: g,
    onUpload: (i, a, o) => (
      L(_).catch(() => {}),
      H(e, {
        accountId: h,
        userId: g,
        path: t,
        bytes: n,
        title: f,
        signal: i,
        onSaveRetry: a,
        onPageCreated: (t) => {
          (i.throwIfAborted(),
            o(t),
            y != null &&
              C(e, {
                source: y,
                pageId: t,
                title: f,
                documentType: _ === `presentation` ? `granola_presentation` : `granola_workbook`,
              }).catch((e) => {
                r.warning(`Failed to record uploaded Office Page`, { safe: {}, sensitive: { error: e } });
              }));
        },
        onBeforeUpload: m,
      })
    ),
    onShared: (t, n, r) =>
      I(e, { accountId: h, userId: g, pageId: t, kind: _, title: f, tabId: p, signal: n, revealAfter: r }),
    onOpenPage: (t) => {
      e.get(u) === h && e.get(a) === g && d(e, t, { title: f, replaceTabId: p });
    },
  });
}
function G() {
  return (G = e(() => {
    (_(), o(), m(), v(), n(), t(), P(), g(), f(), F(), U(), w(), z());
  }))();
}
G();
export { W as openOfficeFileDialog };
//# sourceMappingURL=office-file-sharing-d9126a0a8798.js.map
