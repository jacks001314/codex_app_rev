import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import { CPt as n, Kat as r, SPt as i, qat as a, rst as o } from "./app-shared-bbfeca5e5737.js";
import {
  $fr as s,
  Bar as c,
  DGr as l,
  Dor as u,
  Ea as d,
  Ear as f,
  IGr as p,
  Lsn as m,
  Mv as h,
  OPr as g,
  Oor as ee,
  Qfn as te,
  Ta as ne,
  VGr as _,
  WGr as v,
  aIr as y,
  dIn as b,
  epn as x,
  epr as S,
  jv as C,
  kPr as w,
  mKr as T,
  oFr as E,
  oIr as D,
  pAn as O,
  pIn as k,
  sPr as A,
  tpr as j,
  uIn as M,
  xsn as N,
  zfn as P,
} from "./app-initial-5851df3f6cb1.js";
import { a as F, c as I, i as L } from "./collab-schema-1362362c8a67.js";
import { a as R } from "./api-d4f3b59d2f9b.js";
import { o as z, r as re, t as ie } from "./progress-1945f894d035.js";
import {
  a as ae,
  c as oe,
  i as B,
  l as se,
  n as V,
  o as H,
  r as U,
  s as W,
  t as G,
} from "./state-52f12724d28a.js";
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
function q(e, t, r, i, a, o) {
  try {
    if (!t.isCurrent()) return;
  } catch {
    return;
  }
  try {
    e.get(M).count(`codex_pages`, r, i);
  } catch {}
  if (a != null)
    try {
      e.get(M).hist(
        `codex_pages`,
        r === `local_artifact_binding`
          ? `local_artifact_binding_lifetime_ms`
          : `local_artifact_operation_duration_ms`,
        i,
        a,
      );
    } catch {}
  try {
    n.info(`Pages local artifact session observation`, {
      safe: { eventName: r, ...(0, Y.default)(i, (e, t) => (0, J.default)(t)), durationMs: a },
      sensitive: {
        taskThreadId: t.threadId,
        invocationId: t.invocationId,
        pageId: t.pageId,
        bindingInstanceId: o,
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
    ((J = t(h(), 1)), (Y = t(C(), 1)), b(), i());
  }))();
}
function de(e, { accountId: t, pageId: n }, r, i) {
  let a = { accountId: t, pageId: n };
  if (!e.get(w, `821992342`) || e.get(re, a) == null) return;
  let o = new l();
  try {
    _(o, r);
    let t = L(o),
      n = I(t),
      s = new Set();
    (n?.observeDeep((e) => {
      for (let t of e) {
        let e = t.path[0];
        if (typeof e == `string`) s.add(e);
        else if (t instanceof p) for (let e of t.keysChanged) typeof e == `string` && s.add(e);
      }
    }),
      _(o, i));
    let c = I(t),
      l = (n == null ? [...(c?.keys() ?? [])] : [...s]).findLast((e) => c?.has(e)) ?? null;
    l != null && e.set(z, a, (e) => ({ ...e, slideId: l }));
  } catch {
  } finally {
    o.destroy();
  }
}
function Z() {
  return (Z = e(() => {
    (F(), T(), g(), ie());
  }))();
}
function fe(e, t, n, i, a, o) {
  if (n === `granola_whiteboard`) throw Error(`native_artifact_unavailable`);
  let s = t.accountId,
    l = new AbortController(),
    d = `threadId` in t ? t : void 0,
    f = i,
    p = a,
    h = o,
    g = ee(e, s),
    _ = AbortSignal.any([l.signal, g.signal]),
    y,
    b,
    x = 0,
    C,
    w = () => {
      if (
        l.signal.aborted ||
        g.signal.aborted ||
        !e.get(c) ||
        e.get(u) !== s ||
        (d != null && b != null && b !== d.threadId)
      )
        throw Error(
          e
            .get(D)
            .formatMessage({
              id: `codex.page.artifactSession.contextChanged`,
              defaultMessage: `Keep the selected document open in this chat`,
              description: `Error when a Page artifact operation no longer belongs to the open document and chat`,
            }),
        );
      (d == null && `validateCurrent` in t && t.validateCurrent(b), f?.());
    },
    T = () =>
      e.watch(({ get: e }) => {
        e(e(V, { pageId: e(m, t.pageId), documentType: n }));
      }),
    E = d == null ? void 0 : T(),
    O = () => {
      w();
      let r = e.get(e.get(V, { pageId: e.get(m, t.pageId), documentType: n }));
      if (r == null) throw Error(`native_artifact_unavailable`);
      return r;
    },
    A = () => {
      let e = O().status;
      return e.phase === `ready` && e.scope === `write` && !e.documentRevoked;
    },
    M = (r, i) =>
      ce(
        e,
        {
          artifactType: Q[n],
          threadId: b,
          pageId: t.pageId,
          invocationId: i,
          isCurrent: () => !g.signal.aborted && e.get(u) === s,
        },
        r,
      ),
    N = async () => {
      let n = M(`capture`);
      try {
        if (b == null) throw Error(`native_artifact_unavailable`);
        let r = ++x;
        C = void 0;
        let i = d;
        h != null && (await h());
        let a = p?.(),
          o = () => {
            if (d !== i) throw Error(`native_artifact_unavailable`);
            a?.();
          },
          s = await O().captureArtifactState(l.signal, d == null);
        if ((w(), o(), r !== x)) throw Error(`native_artifact_snapshot_superseded`);
        let c = crypto.randomUUID(),
          u = O().status.viewer;
        C = {
          id: c,
          snapshot: s,
          assertTaskCurrent: o,
          noteAuthor:
            u == null
              ? void 0
              : {
                  userId: u.accountUserId,
                  displayName: e
                    .get(D)
                    .formatMessage(
                      {
                        id: `codex.page.canvas.agentNoteAuthor`,
                        defaultMessage: `{name}'s ChatGPT`,
                        description: `Attribution on a Canvas note created by the named person's ChatGPT`,
                      },
                      { name: u.displayName },
                    ),
                  kind: `agent`,
                },
        };
        let f = {
          snapshotId: c,
          stateVersion: s.canonicalSequence,
          artifactSchemaVersion: s.artifactSchemaVersion,
          crdtStateBase64: j(s.updateV1),
          crdtFormat: `v1`,
          title: O().status.title ?? t.title,
        };
        return (n(`succeeded`), f);
      } catch (e) {
        throw (n(_.aborted ? `canceled` : `failed`, e instanceof Error ? e.message : `other`), e);
      }
    },
    P = async (r) => {
      let i = M(`apply`, r.invocationId);
      try {
        let a = C;
        if (((C = void 0), a == null || a.id !== r.snapshotId))
          return (
            i(`rejected`, `native_artifact_snapshot_used`),
            { status: `rejected`, message: `native_artifact_snapshot_used` }
          );
        let o, s;
        try {
          (h != null && (await h()), a.assertTaskCurrent?.(), (o = O()), (s = v(S(r.crdtUpdateBase64))));
        } catch {
          return (
            i(_.aborted ? `canceled` : `rejected`, `native_artifact_unavailable`),
            { status: `rejected`, message: `native_artifact_unavailable` }
          );
        }
        let c = await o.applyArtifactUpdate(
          a.snapshot,
          s,
          l.signal,
          () => {
            (w(), a.assertTaskCurrent?.());
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
                : (i(_.aborted ? `canceled` : `rejected`, c.errorCode),
                  { status: `rejected`, message: c.errorCode })
        );
      } catch (e) {
        throw (i(_.aborted ? `canceled` : `failed`, e instanceof Error ? e.message : `other`), e);
      }
    },
    F = (t) => B(k(e), n, () => P(t)),
    I = (e) => {
      let t = O();
      if (C == null || C.id !== e || t.status.documentRevoked)
        throw Error(`native_artifact_image_unavailable`);
      C.assertTaskCurrent?.();
    },
    L = async (e) => {
      (h != null && (await h()), I(e.snapshotId));
      let r = C;
      if (r == null || ((r.imageUris ??= ae(n, r.snapshot.updateV1)), !(await r.imageUris).has(e.uri)))
        throw Error(`native_artifact_image_unavailable`);
      let i = await W(e.uri, { pageId: t.pageId, signal: l.signal, assertCurrent: () => I(e.snapshotId) });
      return { contentType: i.contentType, dataBase64: j(i.data) };
    },
    R = async (n) => {
      if (
        (h != null && (await h()),
        I(n.snapshotId),
        !n.contentType.startsWith(`image/`) || n.dataBase64.length > 89478488)
      )
        throw Error(`native_artifact_image_invalid`);
      let r = S(n.dataBase64);
      if (r.byteLength === 0 || r.byteLength > 67108864) throw Error(`native_artifact_image_invalid`);
      let i = await se({
        scope: e,
        accountId: s,
        pageId: t.pageId,
        signal: l.signal,
        canWrite: () => (I(n.snapshotId), A()),
        file: new File([new Uint8Array(r)], n.fileName ?? `image`, { type: n.contentType }),
        onStage: () => {},
      });
      return (I(n.snapshotId), { uri: te(i) });
    },
    z = () => {
      if ((w(), y == null)) {
        let e = r.artifactSessions;
        if (e == null) throw Error(`native_artifact_unavailable`);
        y = Promise.resolve(
          e.bindExternalDocument(
            {
              documentId: t.pageId,
              artifactRef: d?.artifactRef,
              kind: Q[n],
              title: t.title,
              targetUri: ne(s, t.pageId),
            },
            N,
            F,
            void 0,
            void 0,
            n === `granola_whiteboard` ? void 0 : L,
            n === `granola_whiteboard` ? void 0 : R,
          ),
        ).then(
          (e) => (e.status === `unsupported` && ((y = void 0), e[Symbol.dispose]()), e),
          (e) => {
            throw ((y = void 0), e);
          },
        );
      }
      return y;
    };
  return {
    prepare: async () => {
      let e = await z();
      if ((w(), e.status === `unsupported`)) return null;
      if (!(await O().flushLocalEdits(l.signal, d == null))) throw Error(`native_artifact_unavailable`);
      return (
        w(),
        {
          artifactRef: e.artifactRef,
          canUploadVisualization: e.canUploadVisualization,
          canUploadImage: e.canUploadImage,
          canvasSkillPath: void 0,
        }
      );
    },
    activate: async (e) => {
      if ((w(), b != null && b !== e)) throw Error(`native_artifact_unavailable`);
      let t = await z();
      (w(), t.status !== `unsupported` && ((b = e), w(), await t.binding.activate(e), w()));
    },
    transferToTask: (e, n, r, i) => {
      if (
        (w(),
        e.accountId !== s ||
          e.pageId !== t.pageId ||
          (d != null && d.threadId !== e.threadId) ||
          (b != null && b !== e.threadId))
      )
        throw Error(`native_artifact_unavailable`);
      ((d = e), (f = n), (p = r), (h = i), (C = void 0), (E ??= T()));
    },
    moveCursorTo: (e, t) => {
      throw (w(), Error(`canvas_cursor_unavailable`));
    },
    dispose: () => {
      l.signal.aborted ||
        (l.abort(),
        g.stop(),
        E?.(),
        (x += 1),
        (C = void 0),
        y
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
    (o(),
      T(),
      b(),
      y(),
      R(),
      P(),
      a(),
      E(),
      O(),
      s(),
      i(),
      A(),
      f(),
      x(),
      oe(),
      N(),
      X(),
      d(),
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
//# sourceMappingURL=artifact-session-binding-6769673df157.js.map
