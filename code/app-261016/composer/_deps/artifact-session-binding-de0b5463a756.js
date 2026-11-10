import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { RFt as n, ast as r, ist as i, sct as a, zFt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  $gr as s,
  AXr as c,
  CIr as l,
  FNn as u,
  FXr as d,
  KBr as f,
  Olr as p,
  Qgr as m,
  RXr as ee,
  Rzn as h,
  SIr as g,
  Vzn as _,
  Zgr as v,
  _ur as y,
  ay as b,
  ba as x,
  cZr as S,
  ehn as C,
  gur as w,
  hdn as T,
  hhn as E,
  iy as D,
  jdn as O,
  lBr as k,
  mlr as A,
  phn as te,
  sRr as j,
  uBr as M,
  xXr as N,
  ya as ne,
  zzn as P,
} from "./app-initial-ad16eaadf81f.js";
import { a as F, c as I, i as L } from "./collab-schema-5e12eae11b34.js";
import { a as R } from "./api-4f89419a04a6.js";
import { o as z, r as re, t as ie } from "./progress-3dff812c5a6d.js";
import {
  a as ae,
  c as oe,
  i as se,
  l as B,
  n as V,
  o as H,
  r as U,
  s as W,
  t as G,
} from "./state-e401e787f9be.js";
function ce(e, t, n) {
  let r = performance.now();
  K(e, t, n, `started`, `none`);
  let i = !1;
  return (a, o = `none`) => {
    i || ((i = !0), K(e, t, n, a, ue(o), performance.now() - r));
  };
}
function le(e, t, n, r, i, a) {
  q(e, t, `local_artifact_binding`, { artifact_type: t.artifactType, state: r, reason: i }, a, n);
}
function K(e, t, n, r, i, a) {
  q(
    e,
    t,
    r === `started` ? `local_artifact_operation_started` : `local_artifact_operation_result`,
    { artifact_type: t.artifactType, operation: n, outcome: r, reason: i },
    a,
  );
}
function q(e, t, n, r, i, a) {
  try {
    if (!t.isCurrent()) return;
  } catch {
    return;
  }
  try {
    e.get(h).count(`codex_pages`, n, r);
  } catch {}
  if (i != null)
    try {
      e.get(h).hist(
        `codex_pages`,
        n === `local_artifact_binding`
          ? `local_artifact_binding_lifetime_ms`
          : `local_artifact_operation_duration_ms`,
        r,
        i,
      );
    } catch {}
  try {
    o.info(`Pages local artifact session observation`, {
      safe: { eventName: n, ...(0, Y.default)(r, (e, t) => (0, J.default)(t)), durationMs: i },
      sensitive: {
        taskThreadId: t.threadId,
        invocationId: t.invocationId,
        pageId: t.pageId,
        bindingInstanceId: a,
      },
    });
  } catch {}
}
function ue(e) {
  switch (e) {
    case `none`:
    case `native_artifact_snapshot_used`:
    case `native_artifact_unavailable`:
    case `native_artifact_conflict`:
    case `native_artifact_outcome_unknown`:
    case `native_artifact_snapshot_superseded`:
    case `native_artifact_task_inactive`:
    case `page_limit_exceeded`:
    case `invalid_native_artifact_update`:
      return e;
    default:
      return `other`;
  }
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = t(b(), 1)), (Y = t(D(), 1)), P(), n());
  }))();
}
function de(e, { accountId: t, pageId: n }, r, i) {
  let a = { accountId: t, pageId: n };
  if (!e.get(M, `821992342`) || e.get(re, a) == null) return;
  let o = new N();
  try {
    d(o, r);
    let t = L(o),
      n = I(t),
      s = new Set();
    (n?.observeDeep((e) => {
      for (let t of e) {
        let e = t.path[0];
        if (typeof e == `string`) s.add(e);
        else if (t instanceof c) for (let e of t.keysChanged) typeof e == `string` && s.add(e);
      }
    }),
      d(o, i));
    let l = I(t),
      u = (n == null ? [...(l?.keys() ?? [])] : [...s]).findLast((e) => l?.has(e)) ?? null;
    u != null && e.set(z, a, (e) => ({ ...e, slideId: u }));
  } catch {
  } finally {
    o.destroy();
  }
}
function Z() {
  return (Z = e(() => {
    (F(), S(), k(), ie());
  }))();
}
function fe(e, t, n, r, a, o) {
  if (n === `granola_whiteboard`) throw Error(`native_artifact_unavailable`);
  let c = t.accountId,
    u = new AbortController(),
    d = `threadId` in t ? t : void 0,
    f = r,
    h = a,
    g = o,
    v = y(e, c),
    b = AbortSignal.any([u.signal, v.signal]),
    x,
    S,
    C = 0,
    T,
    E = () => {
      if (
        u.signal.aborted ||
        v.signal.aborted ||
        !e.get(p) ||
        e.get(w) !== c ||
        (d != null && S != null && S !== d.threadId)
      )
        throw Error(
          e
            .get(l)
            .formatMessage({
              id: `codex.page.artifactSession.contextChanged`,
              defaultMessage: `Keep the selected document open in this chat`,
              description: `Error when a Page artifact operation no longer belongs to the open document and chat`,
            }),
        );
      (d == null && `validateCurrent` in t && t.validateCurrent(S), f?.());
    },
    D = () =>
      e.watch(({ get: e }) => {
        e(e(V, { pageId: e(O, t.pageId), documentType: n }));
      }),
    k = d == null ? void 0 : D(),
    A = () => {
      E();
      let r = e.get(e.get(V, { pageId: e.get(O, t.pageId), documentType: n }));
      if (r == null) throw Error(`native_artifact_unavailable`);
      return r;
    },
    j = () => {
      let e = A().status;
      return e.phase === `ready` && e.scope === `write` && !e.documentRevoked;
    },
    M = (r, i) =>
      ce(
        e,
        {
          artifactType: Q[n],
          threadId: S,
          pageId: t.pageId,
          invocationId: i,
          isCurrent: () => !v.signal.aborted && e.get(w) === c,
        },
        r,
      ),
    N = async () => {
      let n = M(`capture`);
      try {
        if (S == null) throw Error(`native_artifact_unavailable`);
        let r = ++C;
        T = void 0;
        let i = d;
        g != null && (await g());
        let a = h?.(),
          o = () => {
            if (d !== i) throw Error(`native_artifact_unavailable`);
            a?.();
          },
          c = await A().captureArtifactState(u.signal, d == null);
        if ((E(), o(), r !== C)) throw Error(`native_artifact_snapshot_superseded`);
        let f = crypto.randomUUID(),
          p = A().status.viewer;
        T = {
          id: f,
          snapshot: c,
          assertTaskCurrent: o,
          noteAuthor:
            p == null
              ? void 0
              : {
                  userId: p.accountUserId,
                  displayName: e
                    .get(l)
                    .formatMessage(
                      {
                        id: `codex.page.canvas.agentNoteAuthor`,
                        defaultMessage: `{name}'s ChatGPT`,
                        description: `Attribution on a Canvas note created by the named person's ChatGPT`,
                      },
                      { name: p.displayName },
                    ),
                  kind: `agent`,
                },
        };
        let m = {
          snapshotId: f,
          stateVersion: c.canonicalSequence,
          artifactSchemaVersion: c.artifactSchemaVersion,
          crdtStateBase64: s(c.updateV1),
          crdtFormat: `v1`,
          title: A().status.title ?? t.title,
        };
        return (n(`succeeded`), m);
      } catch (e) {
        throw (n(b.aborted ? `canceled` : `failed`, e instanceof Error ? e.message : `other`), e);
      }
    },
    P = async (r) => {
      let i = M(`apply`, r.invocationId);
      try {
        let a = T;
        if (((T = void 0), a == null || a.id !== r.snapshotId))
          return (
            i(`rejected`, `native_artifact_snapshot_used`),
            { status: `rejected`, message: `native_artifact_snapshot_used` }
          );
        let o, s;
        try {
          (g != null && (await g()), a.assertTaskCurrent?.(), (o = A()), (s = ee(m(r.crdtUpdateBase64))));
        } catch {
          return (
            i(b.aborted ? `canceled` : `rejected`, `native_artifact_unavailable`),
            { status: `rejected`, message: `native_artifact_unavailable` }
          );
        }
        let c = await o.applyArtifactUpdate(
          a.snapshot,
          s,
          u.signal,
          () => {
            (E(), a.assertTaskCurrent?.());
          },
          d == null,
          r.clientManifest,
          r.waitForPersistence,
        );
        return (
          n === `granola_presentation` &&
            (c.status === `accepted` || (c.status === `committed` && c.changed)) &&
            de(e, t, a.snapshot.updateV1, s),
          c.status === `accepted`
            ? (i(`accepted`), { status: `accepted` })
            : c.status === `committed`
              ? (i(c.changed ? `changed_saved` : `no_change`),
                { status: `committed`, stateVersion: c.throughSequence })
              : c.status === `unknown`
                ? (i(`unknown`, c.errorCode), { status: `unknown` })
                : (i(b.aborted ? `canceled` : `rejected`, c.errorCode),
                  { status: `rejected`, message: c.errorCode })
        );
      } catch (e) {
        throw (i(b.aborted ? `canceled` : `failed`, e instanceof Error ? e.message : `other`), e);
      }
    },
    F = (t) => se(_(e), n, () => P(t)),
    I = (e) => {
      let t = A();
      if (T == null || T.id !== e || t.status.documentRevoked)
        throw Error(`native_artifact_image_unavailable`);
      T.assertTaskCurrent?.();
    },
    L = async (e) => {
      (g != null && (await g()), I(e.snapshotId));
      let r = T;
      if (r == null || ((r.imageUris ??= ae(n, r.snapshot.updateV1)), !(await r.imageUris).has(e.uri)))
        throw Error(`native_artifact_image_unavailable`);
      let i = await W(e.uri, { pageId: t.pageId, signal: u.signal, assertCurrent: () => I(e.snapshotId) });
      return { contentType: i.contentType, dataBase64: s(i.data) };
    },
    R = async (n) => {
      if (
        (g != null && (await g()),
        I(n.snapshotId),
        !n.contentType.startsWith(`image/`) || n.dataBase64.length > 89478488)
      )
        throw Error(`native_artifact_image_invalid`);
      let r = m(n.dataBase64);
      if (r.byteLength === 0 || r.byteLength > 67108864) throw Error(`native_artifact_image_invalid`);
      let i = await B({
        scope: e,
        accountId: c,
        pageId: t.pageId,
        signal: u.signal,
        canWrite: () => (I(n.snapshotId), j()),
        file: new File([new Uint8Array(r)], n.fileName ?? `image`, { type: n.contentType }),
        onStage: () => {},
      });
      return (I(n.snapshotId), { uri: te(i) });
    },
    z = () => {
      if ((E(), x == null)) {
        let e = i.artifactSessions;
        if (e == null) throw Error(`native_artifact_unavailable`);
        x = Promise.resolve(
          e.bindExternalDocument(
            {
              documentId: t.pageId,
              artifactRef: d?.artifactRef,
              kind: Q[n],
              title: t.title,
              targetUri: ne(c, t.pageId),
            },
            N,
            F,
            void 0,
            void 0,
            n === `granola_whiteboard` ? void 0 : L,
            n === `granola_whiteboard` ? void 0 : R,
          ),
        ).then(
          (e) => (e.status === `unsupported` && ((x = void 0), e[Symbol.dispose]()), e),
          (e) => {
            throw ((x = void 0), e);
          },
        );
      }
      return x;
    };
  return {
    prepare: async () => {
      let e = await z();
      if ((E(), e.status === `unsupported`)) return null;
      if (!(await A().flushLocalEdits(u.signal, d == null))) throw Error(`native_artifact_unavailable`);
      return (
        E(),
        {
          artifactRef: e.artifactRef,
          canUploadVisualization: e.canUploadVisualization,
          canUploadImage: e.canUploadImage,
          canvasSkillPath: void 0,
        }
      );
    },
    activate: async (e) => {
      if ((E(), S != null && S !== e)) throw Error(`native_artifact_unavailable`);
      let t = await z();
      (E(), t.status !== `unsupported` && ((S = e), E(), await t.binding.activate(e), E()));
    },
    transferToTask: (e, n, r, i) => {
      if (
        (E(),
        e.accountId !== c ||
          e.pageId !== t.pageId ||
          (d != null && d.threadId !== e.threadId) ||
          (S != null && S !== e.threadId))
      )
        throw Error(`native_artifact_unavailable`);
      ((d = e), (f = n), (h = r), (g = i), (T = void 0), (k ??= D()));
    },
    moveCursorTo: (e, t) => {
      throw (E(), Error(`canvas_cursor_unavailable`));
    },
    dispose: () => {
      u.signal.aborted ||
        (u.abort(),
        v.stop(),
        k?.(),
        (C += 1),
        (T = void 0),
        x
          ?.then(async (e) => {
            if (e.status === `bound`)
              try {
                await e.binding.unbind();
              } finally {
                e[Symbol.dispose]();
              }
          })
          .catch(() => void 0));
    },
  };
}
function pe(e, t, n, r = !1, i) {
  return e === `granola_presentation`
    ? `Read and edit this open presentation using artifact_session.js and artifactSession.run(async ({ presentation }) => { /* inspect or edit the existing presentation */ }, { artifactRef: ${JSON.stringify(t)}, artifactType: "presentation" }). This artifactRef is already bound to the user's presentation and saves through Pages. Use the prebound presentation and preserve slide and element identities. Do not create a separate presentation, session, or file. Use a fresh run callback for every edit. Only report saved changes after a successful committed run; an unknown result requires inspecting the presentation before another edit.`
    : `Edit this open Page using artifact_session.js and artifactSession.run(async ({ workbook }) => { /* inspect or edit the existing workbook */ }, { artifactRef: ${JSON.stringify(t)} }). This artifactRef is already bound to the user's sheet and saves through Pages. Do not create a separate workbook, session, or file. Keep workbook and worksheet identities. Use a fresh run callback for every edit. Only report saved changes after a successful committed run; an unknown result requires inspecting the sheet before another edit.`;
}
var Q;
function $() {
  return ($ = e(() => {
    (a(),
      S(),
      P(),
      g(),
      R(),
      C(),
      r(),
      f(),
      u(),
      v(),
      n(),
      j(),
      A(),
      E(),
      oe(),
      T(),
      X(),
      x(),
      H(),
      Z(),
      U(),
      G(),
      (Q = {
        granola_workbook: `spreadsheet`,
        granola_presentation: `presentation`,
        granola_whiteboard: `whiteboard`,
      }));
  }))();
}
export { X as a, $ as i, fe as n, le as o, pe as r, Q as t };
//# sourceMappingURL=artifact-session-binding-de0b5463a756.js.map
