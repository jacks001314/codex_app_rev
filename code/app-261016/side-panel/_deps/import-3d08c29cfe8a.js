const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./state-4d859cdc4cec.js",
      "./state-e401e787f9be.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-ad16eaadf81f.js",
      "./app-initial-9d42883ac737.css",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./api-4f89419a04a6.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./worker-preparation-34996f08ab5a.js",
      "./controller-worker-e1d0bc0048e6.js",
      "./worker-baab70085b2c.js",
      "./snapshot-26295b9b71a7.js",
      "./document-2523b236390c.js",
      "./presentation-20e3999371ab.js",
      "./spreadsheet-f01a044561f7.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { OFt as t, RFt as n, kFt as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  $gr as i,
  BRr as a,
  LXr as o,
  RXr as s,
  S3 as c,
  Zgr as l,
  cZr as u,
  hdn as d,
  hhn as f,
  hlr as p,
  ifn as m,
  jdn as h,
  mlr as g,
  phn as _,
  vIr as v,
  w3 as y,
  wLr as b,
  yIr as x,
} from "./app-initial-ad16eaadf81f.js";
import { m as S, n as C, p as w, t as T } from "./workbook-1fd3f253a266.js";
import { n as E } from "./artifact-session-image-references-47806b52fdd0.js";
import { a as D, l as O } from "./api-4f89419a04a6.js";
import { c as k, n as A, s as j, t as M } from "./limits-697647f44c89.js";
import { n as N, t as P } from "./create-2f871ff61c0e.js";
import { n as F, o as I, r as L, s as R } from "./creation-intents-51ddf095b952.js";
import { n as z, t as B } from "./progress-c4e37b986ec3.js";
function V(e, t, n = {}) {}
function H() {
  return (H = e(() => {
    n();
  }))();
}
async function U(
  e,
  { accountId: n, title: r, documentType: c, prepared: l, signal: u, onSaveRetry: d, onPageCreated: f },
) {
  performance.now();
  let g = !1,
    v,
    b;
  try {
    if ((u.throwIfAborted(), !e.get(p, c))) throw Error(`native_page_creation_disabled`);
    if ((A(l), (l.kind === `presentation`) != (c === `granola_presentation`)))
      throw Error(`artifact_import_document_type_mismatch`);
    let S = e.get(a);
    if (S == null) throw Error(`native_page_creation_account_changed`);
    let C = i(l.update),
      D = {
        accountId: n,
        userId: S,
        localPageId: `local-page-${crypto.randomUUID()}`,
        documentType: c,
        title: r,
        initialUpdate: C,
        destination: `personal_file_drive`,
        createdAt: new Date().toISOString(),
        progress: { outcome: `unconfirmed` },
      },
      j = {
        key: D.localPageId,
        beforeSubmit: async () => {
          (u.throwIfAborted(), await I(D));
        },
      },
      M = async () => {
        try {
          return await P(e, {
            accountId: n,
            title: r,
            documentType: c,
            initialUpdate: C,
            destination: `personal_file_drive`,
            attempt: j,
            signal: u,
          });
        } catch (e) {
          throw (y(e) && (await R(D, { outcome: `rejected`, retryable: !1 })), e);
        }
      };
    performance.now();
    let N = await M();
    for (N === `outcome_unknown` && (N = await M()); N === `outcome_unknown`;) {
      if (d == null) throw Error(`artifact_handoff_outcome_unknown`);
      try {
        await new Promise((e, t) => {
          let n = () => {
            (d(null),
              t(
                u.reason instanceof Error
                  ? u.reason
                  : Error(`artifact_import_cancelled`, { cause: u.reason }),
              ));
          };
          (u.addEventListener(`abort`, n, { once: !0 }),
            d(() => {
              (u.removeEventListener(`abort`, n), e());
            }),
            u.aborted && n());
        });
      } finally {
        d(null);
      }
      (u.throwIfAborted(), (N = await M()));
    }
    (performance.now(), await F(D));
    let L = N.metadata,
      z = L.page_id;
    if (!m(L) || L.drive_scope !== `personal`) throw Error(`artifact_handoff_image_destination_unavailable`);
    (u.throwIfAborted(),
      (v = z),
      e.set(B, z, { accountId: n, userId: S, phase: `uploading` }),
      (b = e.watch(({ get: e }) => {
        e(B, z);
      })),
      await f?.(z),
      u.throwIfAborted(),
      performance.now());
    let { nativeDocument$: V } = await t(
        async () => {
          let { nativeDocument$: e } = await import(`./state-4d859cdc4cec.js`);
          return { nativeDocument$: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
        import.meta.url,
      ),
      H = e.get(V, { pageId: e.get(h, z), documentType: c }),
      U = e.watch(({ get: e }) => {
        e(H);
      }),
      W = !1;
    try {
      let t = e.get(H);
      if (t == null) throw Error(`native_artifact_unavailable`);
      (t.showCreatedSnapshot?.(l.update), performance.now());
      let r = await x(
        l.assets,
        async (t, n) => {
          (u.throwIfAborted(), performance.now());
          try {
            let n = await O({
              scope: e,
              beforeRequest: () => u.throwIfAborted(),
              file: new File([new Uint8Array(t.data)], t.sha256, { type: t.contentType }),
              hideFromFileSearch: !0,
              page: L,
              signal: u,
              onStage: (e) => {
                performance.now();
              },
            });
            return { imageIds: t.imageIds, uri: _(n) };
          } catch {
            return (u.throwIfAborted(), null);
          } finally {
            t.data.byteLength;
          }
        },
        { concurrency: 8, stopOnError: !1 },
      );
      (l.assets.length, u.throwIfAborted());
      let i = r.filter((e) => e != null),
        a = l.assets.filter((e, t) => r[t] != null),
        c = i.length !== l.assets.length,
        f = () => {
          e.set(B, z, c ? { accountId: n, userId: S, phase: `partial_failure` } : null);
        },
        p = e.get(H);
      if (p == null) throw Error(`native_artifact_unavailable`);
      if (i.length === 0)
        return (f(), l.update.byteLength, (W = !0), { pageId: z, releaseNativeDocument: U });
      (e.set(B, z, { accountId: n, userId: S, phase: `saving` }), performance.now());
      let m = await p.captureArtifactState(u, !1);
      performance.now();
      let h = l.kind === `presentation` ? w.create() : T.create(),
        v;
      try {
        h.loadInitialCrdtStateV2(o(m.updateV1));
        let e = E(h.toProto()),
          t = new Set(
            a.flatMap((t) =>
              t.imageIds.filter((n) => {
                let r = h.resolveImageAsset(n);
                return (
                  e.has(n) &&
                  r != null &&
                  r.uri === void 0 &&
                  r.dataByteLength === 0 &&
                  r.contentType === t.contentType
                );
              }),
            ),
          );
        if (t.size === 0)
          return (f(), i.length, l.update.byteLength, (W = !0), { pageId: z, releaseNativeDocument: U });
        v = h.record(() =>
          k(
            h,
            a
              .map((e) => ({ ...e, imageIds: e.imageIds.filter((e) => t.has(e)) }))
              .filter((e) => e.imageIds.length > 0),
            i
              .map((e) => ({ ...e, imageIds: e.imageIds.filter((e) => t.has(e)) }))
              .filter((e) => e.imageIds.length > 0),
          ),
        ).crdtUpdateV2;
      } finally {
        h.getCrdtDoc().destroy();
      }
      if (v == null) throw Error(`artifact_import_image_update_missing`);
      let y = s(v);
      (y.byteLength, performance.now(), (g = !0));
      let b = await p.applyArtifactUpdate(m, y, u, () => u.throwIfAborted(), !1);
      if ((b.status, b.status === `not_committed`)) throw ((g = !1), Error(b.errorCode));
      if (b.status === `unknown`) {
        let t = () => {
            let t = e.get(H);
            t?.applyArtifactUpdate === p.applyArtifactUpdate && t.reconnect();
          },
          r = e.watch(({ get: r }) => {
            let i = r(H),
              a =
                i?.applyArtifactUpdate === p.applyArtifactUpdate &&
                i.status.pendingCount > 0 &&
                (i.status.phase === `error` || i.status.phase === `closed`)
                  ? t
                  : void 0;
            (e.set(B, z, { accountId: n, userId: S, phase: `saving`, retrySave: a }), d?.(a ?? null));
          });
        try {
          await e.when(({ get: e }) => {
            let t = e(H);
            return (
              t == null ||
              t.applyArtifactUpdate !== p.applyArtifactUpdate ||
              t.status.saved ||
              t.status.documentRevoked ||
              t.status.unsavedChangesLost > 0
            );
          });
        } finally {
          (r(), d?.(null));
        }
        let i = e.get(H);
        if (
          i == null ||
          i.applyArtifactUpdate !== p.applyArtifactUpdate ||
          !i.status.saved ||
          i.status.documentRevoked ||
          i.status.unsavedChangesLost > 0
        )
          throw Error(b.errorCode);
      }
      return (i.length, l.update.byteLength, f(), (W = !0), { pageId: z, releaseNativeDocument: U });
    } finally {
      W || U();
    }
  } catch (t) {
    if (v != null) {
      let t = e.get(B, v);
      e.set(B, v, t == null ? null : { accountId: t.accountId, userId: t.userId, phase: `failed` });
    }
    throw (u.aborted, g ? t : new W(t));
  } finally {
    b?.();
  }
}
var W;
function G() {
  return (G = e(() => {
    (j(),
      S(),
      C(),
      v(),
      u(),
      b(),
      l(),
      c(),
      g(),
      D(),
      f(),
      N(),
      L(),
      d(),
      M(),
      z(),
      H(),
      r(),
      (W = class extends Error {
        constructor(e) {
          (super(e instanceof Error ? e.message : `artifact_import_failed`, { cause: e }),
            (this.name = `ArtifactImportNotCommittedError`));
        }
      }));
  }))();
}
export { V as a, H as i, U as n, G as r, W as t };
//# sourceMappingURL=import-3d08c29cfe8a.js.map
