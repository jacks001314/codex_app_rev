const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./initial-update-342d3d8134e6.js",
      "./initial-update-87a2af1a286b.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-initial-ad16eaadf81f.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-9d42883ac737.css",
      "./workbook-1fd3f253a266.js",
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
      "./presentation-20e3999371ab.js",
      "./collab-schema-5e12eae11b34.js",
      "./presentation-image-assets-2852083e62f1.js",
      "./color-72a92632a961.js",
      "./address-utils-7bbbc06d8767.js",
      "./spreadsheet-f01a044561f7.js",
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
import { $mt as t, OFt as n, Pit as r, jit as i, kFt as a, tht as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  Alr as s,
  S3 as c,
  _ur as l,
  b3 as u,
  hdn as d,
  hlr as f,
  iRr as p,
  ifn as m,
  mlr as h,
  rdn as g,
  sRr as _,
  tdn as v,
  vlr as y,
  y3 as b,
} from "./app-initial-ad16eaadf81f.js";
import { r as x, t as S } from "./collaboration-schemas-9ad991c40494.js";
async function C(
  e,
  {
    accountId: r,
    expectedIdentity: a,
    assertRequestCurrent: c,
    title: d,
    documentType: h,
    destination: _,
    parentPageId: x,
    initialUpdate: C,
    attempt: w,
    onOutcomeUnknown: T,
    signal: E,
  },
) {
  let D = w?.requestBody?.agent_provenance != null && w.requestBody.idempotency_key != null,
    O = l(e, r),
    k = E == null ? O.signal : AbortSignal.any([O.signal, E]),
    A;
  try {
    if ((k.throwIfAborted(), !D)) {
      let n = o();
      if (
        ((A = e.watch((e) => {
          (e.get(f, h), (!e.get(y).isPending || e.query.getOptions(y).enabled !== !0) && n.resolve(void 0));
        })),
        await t(n.promise, k),
        k.throwIfAborted(),
        !e.get(f, h))
      )
        throw Error(`native_page_creation_disabled`);
    }
    let l = w?.requestBody;
    if (l == null) {
      u(e, x);
      let t = !1;
      if (x != null) {
        let { metadata: e } = await p.safeGet(`/pages/{page_id}`, {
          parameters: { path: { page_id: x }, query: { include_content: !1 } },
          signal: k,
        });
        if (!e.access.can_write || e.deleted_at != null) throw Error(`The parent Page is not writable.`);
        if (e.site_project_id != null || !m(e))
          throw new b(e.drive_space_id === void 0 ? `unknown` : `native`);
        t = e.drive_scope === `personal`;
      }
      k.throwIfAborted();
      let r =
        h === `granola_document`
          ? C
          : (C ??
            (
              await n(
                async () => {
                  let { createNativePageInitialUpdate: e } = await import(`./initial-update-342d3d8134e6.js`);
                  return { createNativePageInitialUpdate: e };
                },
                __vite__mapDeps([
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
                  25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
                ]),
                import.meta.url,
              )
            ).createNativePageInitialUpdate(h, h === `granola_presentation` ? e.get(s) : void 0));
      k.throwIfAborted();
      let i = _ ?? (x == null ? `personal_file_drive` : void 0),
        a = typeof r == `string` ? void 0 : r;
      ((l = {
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
        document_type: h,
        title: d,
        initial_update: typeof r == `string` ? r : r.update,
        parent_page_id: x,
        idempotency_key: w?.key ?? (i != null || t ? crypto.randomUUID() : void 0),
      }),
        w != null && (w.requestBody = l));
    }
    if ((await w?.beforeSubmit(l), k.throwIfAborted(), !D && !e.get(f, h)))
      throw Error(`native_page_creation_disabled`);
    let E;
    try {
      E =
        w?.submit == null
          ? await e
              .get(g)
              .mutateAsync({
                accountId: r,
                expectedIdentity: a,
                assertRequestCurrent: c,
                requestBody: l,
                signal: k,
              })
          : await w.submit(l, k);
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
    return (k.throwIfAborted(), v(e, r, E), E);
  } finally {
    (A?.(), O.stop());
  }
}
function w() {
  return (w = e(() => {
    (x(), h(), d(), _(), r(), c(), a());
  }))();
}
export { w as n, C as t };
//# sourceMappingURL=create-2f871ff61c0e.js.map
