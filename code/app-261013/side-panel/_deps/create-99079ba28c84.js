const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./initial-update-d3e606276e81.js",
      "./initial-update-8c4775a22ffc.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-initial-5851df3f6cb1.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
      "./workbook-2a2fa1be98a2.js",
      "./linear-679e303fb101.js",
      "./string-963febbec52f.js",
      "./defaultLocale-1a6eeada7f42.js",
      "./init-cd6c1f803e47.js",
      "./ordinal-654830f58ee1.js",
      "./pow-8b9b02ff1564.js",
      "./nice-2b3cc20611af.js",
      "./band-7f9eb19564f9.js",
      "./treemap-4d58692b5de2.js",
      "./Tableau10-232fa539940a.js",
      "./arc-a62fdff23ebe.js",
      "./path-3b8129ebc7ff.js",
      "./constant-363a14bf6d8f.js",
      "./math-de3a0e0db4e2.js",
      "./linear-51abf1a86c3b.js",
      "./line-5171f1d885cc.js",
      "./array-15adaa1bc228.js",
      "./area-76377dfd01aa.js",
      "./pie-f34043ff89c8.js",
      "./catmullRom-b244076d0269.js",
      "./monotone-68fb4f84bd88.js",
      "./expand-f3906952405c.js",
      "./presentation-c2faa0e77c2e.js",
      "./collab-schema-1362362c8a67.js",
      "./presentation-image-assets-a76b94db6072.js",
      "./color-fe822360a2e9.js",
      "./address-utils-7bbbc06d8767.js",
      "./spreadsheet-b1cd26f1820c.js",
      "./pdf-font-registry-efaf3d8e56f9.js",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./merged-range-index-daa96769090a.js",
      "./three.module-859594e5f29f.js",
      "./core-51383d4e7880.js",
      "./union-2f12e2dfc01f.js",
      "./zipObject-b39425e8947b.js",
      "./map-3ea4bc6d7205.js",
      "./collaboration-schemas-9ad991c40494.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bpt as t, Rpt as n, fPt as r, hrt as i, pPt as a, vrt as o } from "./app-shared-bbfeca5e5737.js";
import {
  $2 as s,
  Aar as c,
  Dar as l,
  Ear as u,
  Har as d,
  Oor as f,
  X2 as p,
  Z2 as m,
  iPr as h,
  lsn as g,
  sPr as _,
  ssn as v,
  ucn as y,
  xsn as b,
} from "./app-initial-5851df3f6cb1.js";
import { r as x, t as S } from "./collaboration-schemas-9ad991c40494.js";
async function C(
  e,
  {
    accountId: a,
    expectedIdentity: o,
    assertRequestCurrent: s,
    title: u,
    documentType: _,
    destination: b,
    parentPageId: x,
    initialUpdate: C,
    attempt: w,
    onOutcomeUnknown: T,
    signal: E,
  },
) {
  let D = w?.requestBody?.agent_provenance != null && w.requestBody.idempotency_key != null,
    O = f(e, a),
    k = E == null ? O.signal : AbortSignal.any([O.signal, E]),
    A;
  try {
    if ((k.throwIfAborted(), !D)) {
      let r = t();
      if (
        ((A = e.watch((e) => {
          (e.get(l, _), (!e.get(c).isPending || e.query.getOptions(c).enabled !== !0) && r.resolve(void 0));
        })),
        await n(r.promise, k),
        k.throwIfAborted(),
        !e.get(l, _))
      )
        throw Error(`native_page_creation_disabled`);
    }
    let f = w?.requestBody;
    if (f == null) {
      m(e, x);
      let t = !1;
      if (x != null) {
        let { metadata: e } = await h.safeGet(`/pages/{page_id}`, {
          parameters: { path: { page_id: x }, query: { include_content: !1 } },
          signal: k,
        });
        if (!e.access.can_write || e.deleted_at != null) throw Error(`The parent Page is not writable.`);
        if (e.site_project_id != null || !y(e))
          throw new p(e.drive_space_id === void 0 ? `unknown` : `native`);
        t = e.drive_scope === `personal`;
      }
      k.throwIfAborted();
      let n =
        _ === `granola_document`
          ? C
          : (C ??
            (
              await r(
                async () => {
                  let { createNativePageInitialUpdate: e } = await import(`./initial-update-d3e606276e81.js`);
                  return { createNativePageInitialUpdate: e };
                },
                __vite__mapDeps([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
                ]),
                import.meta.url,
              )
            ).createNativePageInitialUpdate(_, _ === `granola_presentation` ? e.get(d) : void 0));
      k.throwIfAborted();
      let i = b ?? (x == null ? `personal_file_drive` : void 0),
        a = typeof n == `string` ? void 0 : n;
      ((f = {
        client_manifest: a
          ? Object.fromEntries(
              Object.entries(S).map(([e, t]) => [
                e,
                { readableSchemas: [...t.readableSchemas], writableSchemas: [...t.writableSchemas] },
              ]),
            )
          : void 0,
        artifact_schema_version: a?.schemaVersion,
        destination: i,
        document_type: _,
        title: u,
        initial_update: typeof n == `string` ? n : n.update,
        parent_page_id: x,
        idempotency_key: w?.key ?? (i != null || t ? crypto.randomUUID() : void 0),
      }),
        w != null && (w.requestBody = f));
    }
    if ((await w?.beforeSubmit(f), k.throwIfAborted(), !D && !e.get(l, _)))
      throw Error(`native_page_creation_disabled`);
    let E;
    try {
      E =
        w?.submit == null
          ? await e
              .get(g)
              .mutateAsync({
                accountId: a,
                expectedIdentity: o,
                assertRequestCurrent: s,
                requestBody: f,
                signal: k,
              })
          : await w.submit(f, k);
    } catch (e) {
      if (
        w?.submit != null ||
        (e instanceof i && (e.retryable === !1 || (e.status >= 400 && e.status < 500 && e.status !== 499)))
      )
        throw e;
      try {
        T?.(e);
      } catch {}
      return `outcome_unknown`;
    }
    return (k.throwIfAborted(), v(e, a, E), E);
  } finally {
    (A?.(), O.stop());
  }
}
function w() {
  return (w = e(() => {
    (x(), u(), b(), _(), o(), s(), a());
  }))();
}
export { w as n, C as t };
//# sourceMappingURL=create-99079ba28c84.js.map
