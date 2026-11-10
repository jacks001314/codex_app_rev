const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./state-5f95b6866277.js",
      "./state-52f12724d28a.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
      "./artifact-session-image-references-47806b52fdd0.js",
      "./api-d4f3b59d2f9b.js",
      "./collaboration-schemas-9ad991c40494.js",
      "./worker-preparation-d9be38efd913.js",
      "./controller-worker-ea4bbc58c1e6.js",
      "./worker-34f50f45f328.js",
      "./snapshot-7d3edd47ebe2.js",
      "./document-c6f04e376b44.js",
      "./presentation-c2faa0e77c2e.js",
      "./spreadsheet-b1cd26f1820c.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { SPt as t, fPt as n, pPt as r } from "./app-shared-bbfeca5e5737.js";
import {
  $2 as i,
  $fr as a,
  Dar as o,
  Ear as s,
  Lsn as c,
  Qfn as l,
  UGr as u,
  WGr as d,
  XMr as f,
  Xjr as p,
  Yjr as m,
  epn as h,
  mKr as g,
  t4 as _,
  tNr as v,
  tpr as y,
  ucn as b,
  xsn as x,
} from "./app-initial-5851df3f6cb1.js";
import { m as S, n as C, p as w, t as T } from "./workbook-2a2fa1be98a2.js";
import { n as E } from "./artifact-session-image-references-47806b52fdd0.js";
import { a as D, l as O } from "./api-d4f3b59d2f9b.js";
import { c as k, n as A, s as j, t as M } from "./limits-121b5b51476f.js";
import { n as N, t as P } from "./create-99079ba28c84.js";
import { n as F, o as I, r as L, s as R } from "./creation-intents-432d9bada664.js";
import { n as z, t as B } from "./progress-88ad9ddbac59.js";
function V(e, t, n = {}) {}
function H() {
  return (H = e(() => {
    t();
  }))();
}
async function U(
  e,
  { accountId: t, title: r, documentType: i, prepared: a, signal: s, onSaveRetry: m, onPageCreated: h },
) {
  performance.now();
  let g = !1,
    v,
    x;
  try {
    if ((s.throwIfAborted(), !e.get(o, i))) throw Error(`native_page_creation_disabled`);
    if ((A(a), (a.kind === `presentation`) != (i === `granola_presentation`)))
      throw Error(`artifact_import_document_type_mismatch`);
    let S = e.get(f);
    if (S == null) throw Error(`native_page_creation_account_changed`);
    let C = y(a.update),
      D = {
        accountId: t,
        userId: S,
        localPageId: `local-page-${crypto.randomUUID()}`,
        documentType: i,
        title: r,
        initialUpdate: C,
        destination: `personal_file_drive`,
        createdAt: new Date().toISOString(),
        progress: { outcome: `unconfirmed` },
      },
      j = {
        key: D.localPageId,
        beforeSubmit: async () => {
          (s.throwIfAborted(), await I(D));
        },
      },
      M = async () => {
        try {
          return await P(e, {
            accountId: t,
            title: r,
            documentType: i,
            initialUpdate: C,
            destination: `personal_file_drive`,
            attempt: j,
            signal: s,
          });
        } catch (e) {
          throw (_(e) && (await R(D, { outcome: `rejected`, retryable: !1 })), e);
        }
      };
    performance.now();
    let N = await M();
    for (N === `outcome_unknown` && (N = await M()); N === `outcome_unknown`;) {
      if (m == null) throw Error(`artifact_handoff_outcome_unknown`);
      try {
        await new Promise((e, t) => {
          let n = () => {
            (m(null),
              t(
                s.reason instanceof Error
                  ? s.reason
                  : Error(`artifact_import_cancelled`, { cause: s.reason }),
              ));
          };
          (s.addEventListener(`abort`, n, { once: !0 }),
            m(() => {
              (s.removeEventListener(`abort`, n), e());
            }),
            s.aborted && n());
        });
      } finally {
        m(null);
      }
      (s.throwIfAborted(), (N = await M()));
    }
    (performance.now(), await F(D));
    let L = N.metadata,
      z = L.page_id;
    if (!b(L) || L.drive_scope !== `personal`) throw Error(`artifact_handoff_image_destination_unavailable`);
    (s.throwIfAborted(),
      (v = z),
      e.set(B, z, { accountId: t, userId: S, phase: `uploading` }),
      (x = e.watch(({ get: e }) => {
        e(B, z);
      })),
      await h?.(z),
      s.throwIfAborted(),
      performance.now());
    let { nativeDocument$: V } = await n(
        async () => {
          let { nativeDocument$: e } = await import(`./state-5f95b6866277.js`);
          return { nativeDocument$: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]),
        import.meta.url,
      ),
      H = e.get(V, { pageId: e.get(c, z), documentType: i }),
      U = e.watch(({ get: e }) => {
        e(H);
      }),
      W = !1;
    try {
      let n = e.get(H);
      if (n == null) throw Error(`native_artifact_unavailable`);
      (n.showCreatedSnapshot?.(a.update), performance.now());
      let r = await p(
        a.assets,
        async (t, n) => {
          (s.throwIfAborted(), performance.now());
          try {
            let n = await O({
              scope: e,
              beforeRequest: () => s.throwIfAborted(),
              file: new File([new Uint8Array(t.data)], t.sha256, { type: t.contentType }),
              hideFromFileSearch: !0,
              page: L,
              signal: s,
              onStage: (e) => {
                performance.now();
              },
            });
            return { imageIds: t.imageIds, uri: l(n) };
          } catch {
            return (s.throwIfAborted(), null);
          } finally {
            t.data.byteLength;
          }
        },
        { concurrency: 8, stopOnError: !1 },
      );
      (a.assets.length, s.throwIfAborted());
      let i = r.filter((e) => e != null),
        o = a.assets.filter((e, t) => r[t] != null),
        c = i.length !== a.assets.length,
        f = () => {
          e.set(B, z, c ? { accountId: t, userId: S, phase: `partial_failure` } : null);
        },
        h = e.get(H);
      if (h == null) throw Error(`native_artifact_unavailable`);
      if (i.length === 0)
        return (f(), a.update.byteLength, (W = !0), { pageId: z, releaseNativeDocument: U });
      (e.set(B, z, { accountId: t, userId: S, phase: `saving` }), performance.now());
      let _ = await h.captureArtifactState(s, !1);
      performance.now();
      let v = a.kind === `presentation` ? w.create() : T.create(),
        y;
      try {
        v.loadInitialCrdtStateV2(u(_.updateV1));
        let e = E(v.toProto()),
          t = new Set(
            o.flatMap((t) =>
              t.imageIds.filter((n) => {
                let r = v.resolveImageAsset(n);
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
          return (f(), i.length, a.update.byteLength, (W = !0), { pageId: z, releaseNativeDocument: U });
        y = v.record(() =>
          k(
            v,
            o
              .map((e) => ({ ...e, imageIds: e.imageIds.filter((e) => t.has(e)) }))
              .filter((e) => e.imageIds.length > 0),
            i
              .map((e) => ({ ...e, imageIds: e.imageIds.filter((e) => t.has(e)) }))
              .filter((e) => e.imageIds.length > 0),
          ),
        ).crdtUpdateV2;
      } finally {
        v.getCrdtDoc().destroy();
      }
      if (y == null) throw Error(`artifact_import_image_update_missing`);
      let b = d(y);
      (b.byteLength, performance.now(), (g = !0));
      let x = await h.applyArtifactUpdate(_, b, s, () => s.throwIfAborted(), !1);
      if ((x.status, x.status === `not_committed`)) throw ((g = !1), Error(x.errorCode));
      if (x.status === `unknown`) {
        let n = () => {
            let t = e.get(H);
            t?.applyArtifactUpdate === h.applyArtifactUpdate && t.reconnect();
          },
          r = e.watch(({ get: r }) => {
            let i = r(H),
              a =
                i?.applyArtifactUpdate === h.applyArtifactUpdate &&
                i.status.pendingCount > 0 &&
                (i.status.phase === `error` || i.status.phase === `closed`)
                  ? n
                  : void 0;
            (e.set(B, z, { accountId: t, userId: S, phase: `saving`, retrySave: a }), m?.(a ?? null));
          });
        try {
          await e.when(({ get: e }) => {
            let t = e(H);
            return (
              t == null ||
              t.applyArtifactUpdate !== h.applyArtifactUpdate ||
              t.status.saved ||
              t.status.documentRevoked ||
              t.status.unsavedChangesLost > 0
            );
          });
        } finally {
          (r(), m?.(null));
        }
        let i = e.get(H);
        if (
          i == null ||
          i.applyArtifactUpdate !== h.applyArtifactUpdate ||
          !i.status.saved ||
          i.status.documentRevoked ||
          i.status.unsavedChangesLost > 0
        )
          throw Error(x.errorCode);
      }
      return (i.length, a.update.byteLength, f(), (W = !0), { pageId: z, releaseNativeDocument: U });
    } finally {
      W || U();
    }
  } catch (t) {
    if (v != null) {
      let t = e.get(B, v);
      e.set(B, v, t == null ? null : { accountId: t.accountId, userId: t.userId, phase: `failed` });
    }
    throw (s.aborted, g ? t : new W(t));
  } finally {
    x?.();
  }
}
var W;
function G() {
  return (G = e(() => {
    (j(),
      S(),
      C(),
      m(),
      g(),
      v(),
      a(),
      i(),
      s(),
      D(),
      h(),
      N(),
      L(),
      x(),
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
//# sourceMappingURL=import-c17621d7da6d.js.map
