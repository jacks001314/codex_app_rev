import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CPt as t, SPt as n, oot as r } from "./app-shared-bbfeca5e5737.js";
import {
  AI as i,
  Cwr as a,
  Dar as o,
  Dor as s,
  Ear as c,
  G4n as l,
  J4n as u,
  MI as d,
  Oor as f,
  XMr as p,
  inr as m,
  rnr as h,
  tNr as g,
  vwr as _,
  xsn as v,
} from "./app-initial-5851df3f6cb1.js";
import { $ as y, $t as b } from "./presentation-c2faa0e77c2e.js";
import { Un as x, Wn as S } from "./spreadsheet-b1cd26f1820c.js";
import { xa as C, ya as w } from "./app-primary-fe8a450b3b04.js";
import { a as T, n as E, o as D, s as O, t as k } from "./limits-121b5b51476f.js";
import { a as A, i as j, n as M, r as N } from "./import-c17621d7da6d.js";
import { a as P, i as F, n as I, o as L, r as R, t as z } from "./open-uploaded-page-401ebff35bc0.js";
import { r as B, t as V } from "./native-output-4bece9e84c04.js";
async function H(
  e,
  {
    accountId: t,
    userId: n,
    path: r,
    bytes: i,
    title: a,
    signal: s,
    onBeforeUpload: c,
    onSaveRetry: l,
    onPageCreated: u,
  },
) {
  let d = performance.now(),
    p = h(r);
  if (p !== `pptx` && p !== `xlsx`) throw Error(`artifact_upload_unsupported_file`);
  let m = p === `pptx` ? `presentation` : `spreadsheet`,
    g = p === `pptx` ? `granola_presentation` : `granola_workbook`,
    _ = f(e, t, n),
    v = AbortSignal.any([s, _.signal]),
    b;
  try {
    if ((v.throwIfAborted(), !e.get(o, g))) throw Error(`native_page_creation_disabled`);
    if ((await c?.()) === !1) throw Error(`artifact_upload_local_save_failed`);
    v.throwIfAborted();
    let n = await B({ path: r, bytes: i, kind: m, signal: v });
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
      A(`office_preparation`, d, {
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
        onSaveRetry: l,
        onPageCreated: u,
      })
    );
  } finally {
    _.stop();
  }
}
function U() {
  return (U = e(() => {
    (O(), b(), S(), m(), V(), c(), v(), N(), k(), j());
  }))();
}
function W(e, { path: n, bytes: r, source: i, intent: a = `share`, title: o, tabId: c, onBeforeUpload: l }) {
  let f = e.get(s),
    m = e.get(p);
  if (f == null || m == null) return;
  let g = h(n) === `pptx` ? `presentation` : `spreadsheet`,
    v = _(e.value, { includeChatGpt: !0 }),
    y = i ?? (v == null ? null : { accountId: f, userId: m, hostId: `local`, threadId: v, path: n });
  u(e, R, {
    title: o,
    intent: a,
    accountId: f,
    userId: m,
    onUpload: (i, a, s) => (
      L(g).catch(() => {}),
      H(e, {
        accountId: f,
        userId: m,
        path: n,
        bytes: r,
        title: o,
        signal: i,
        onSaveRetry: a,
        onPageCreated: (n) => {
          (i.throwIfAborted(),
            s(n),
            y != null &&
              C(e, {
                source: y,
                pageId: n,
                title: o,
                documentType: g === `presentation` ? `granola_presentation` : `granola_workbook`,
              }).catch((e) => {
                t.warning(`Failed to record uploaded Office Page`, { safe: {}, sensitive: { error: e } });
              }));
        },
        onBeforeUpload: l,
      })
    ),
    onShared: (t, n, r) =>
      I(e, { accountId: f, userId: m, pageId: t, kind: g, title: o, tabId: c, signal: n, revealAfter: r }),
    onOpenPage: (t) => {
      e.get(s) === f && e.get(p) === m && d(e, t, { title: o, replaceTabId: c });
    },
  });
}
function G() {
  return (G = e(() => {
    (g(), l(), m(), a(), r(), n(), P(), i(), v(), F(), U(), w(), z());
  }))();
}
G();
export { W as openOfficeFileDialog };
//# sourceMappingURL=office-file-sharing-966f804d0195.js.map
