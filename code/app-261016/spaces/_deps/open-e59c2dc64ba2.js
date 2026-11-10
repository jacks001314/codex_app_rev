import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  Mz as n,
  Oz as r,
  Vrt as i,
  jz as a,
  kgt as o,
  qrt as s,
  qst as c,
  sct as l,
  uSt as u,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $6t as d,
  $ir as f,
  Aer as p,
  Bur as m,
  CIr as h,
  FBr as g,
  FDn as _,
  Fer as v,
  H9n as y,
  IBr as b,
  K8t as x,
  Mdn as S,
  Q6t as C,
  SIr as w,
  Swn as T,
  Vur as E,
  Zir as D,
  _ur as O,
  eer as k,
  f9t as A,
  gur as j,
  hdn as M,
  np as N,
  q8t as P,
  rp as F,
  vdn as I,
  xwn as L,
} from "./app-initial-ad16eaadf81f.js";
import { a as R, n as z } from "./references-3c35b3bb7f76.js";
import { n as B, t as V } from "./icons-76a84b9e5e87.js";
import { n as H, t as U } from "./output-files-query-c74aafe65432.js";
async function W(e, t, r, i, { fullWidth: l = !1 } = {}) {
  try {
    if ((r.throwIfAborted(), `fileId` in t)) {
      await G(e, t, r, i, l);
      return;
    }
    let s = u(t.threadId),
      h = e.get(v, s),
      b = t.relativePath?.startsWith(`outputs/`)
        ? [t.relativePath, t.relativePath.slice(8)]
        : [t.relativePath],
      S;
    if (t.relativePath != null) {
      let n = await e.query.getOrFetch(H).catch(() => void 0);
      for (let e of b)
        if (
          ((S = n?.find(
            (n) => n.threadId === t.threadId && n.relativePath === e && n.name === t.fileName,
          )?.path),
          S != null)
        )
          break;
    }
    if ((r.throwIfAborted(), S == null)) {
      let i = g(e, h);
      (await i.hydrateBackgroundThreads([s], { includeTurns: t.relativePath == null }), r.throwIfAborted());
      let o = e.get(p, s);
      if (t.relativePath == null)
        try {
          var f = c();
          let e = f.u(await i.getConversation(s).catch(() => null));
          (r.throwIfAborted(),
            e != null &&
              (S = z(t, D(m(e), { includeGeneratedImages: !1, projectlessOutputDirectory: o }))?.path));
        } catch (e) {
          f.e = e;
        } finally {
          f.d();
        }
      if (S == null) {
        let c = o ?? e.get(y, s) ?? (await i.readThread(s, { includeTurns: !1 })).thread.cwd;
        r.throwIfAborted();
        for (let e of b) {
          let s = null;
          e != null && (s = a(o == null ? `outputs/${e}` : e));
          let { files: l } = await i.sendRequest(`fuzzyFileSearch`, {
            query: s ?? t.fileName,
            roots: [c],
            cancellationToken: null,
          });
          r.throwIfAborted();
          let u = l.filter(
            (e) => e.match_type === `file` && e.file_name === t.fileName && (s == null || a(e.path) === s),
          );
          if (u.length === 1) {
            S = n(u[0].root, u[0].path);
            break;
          }
        }
      }
    }
    if ((r.throwIfAborted(), S == null)) throw Error(`Page artifact output is unavailable`);
    let { existingPaths: C } = await e.query.getOrFetch(x, { hostId: h, paths: [S] });
    if ((r.throwIfAborted(), !C.some((e) => o(e, S)))) throw Error(`Page artifact file is unavailable`);
    d(e, S, { hostId: h, icon: (0, K.createElement)(B[t.kind]), title: t.fileName, target: `right` }) &&
      L(e, `artifact:${h}:${S}`) === `right` &&
      _(e, l);
  } catch {
    r.aborted ||
      e
        .get(s)
        .danger(
          e
            .get(h)
            .formatMessage({
              id: `codex.space.page.artifact.openError`,
              defaultMessage: `Could not open this artifact`,
              description: `Error shown when an artifact linked in a Page is no longer available`,
            }),
          { errorAnalytics: { toastId: `codex.space.page.artifact.openError` } },
        );
  }
}
async function G(e, t, n, r, i) {
  let a = e.get(S, r),
    o = e.get(j);
  if (o == null) return;
  let s = `page:${o}:${a}:${t.fileId}`,
    c = L(e, `chatgpt-file:unknown:${s}`),
    l = O(e, o),
    u = new AbortController(),
    d = AbortSignal.any([n, l.signal, u.signal]),
    f = e.watch(({ get: e }) => {
      let t = e(I, a);
      (t?.access.can_read === !1 || t?.deleted_at != null) && u.abort();
    }),
    p = () => {
      (l.stop(), f(), d.removeEventListener(`abort`, p));
    };
  d.addEventListener(`abort`, p, { once: !0 });
  try {
    (d.throwIfAborted(),
      await F(e, {
        allowTaskPreview: !0,
        browserPreview: !0,
        conversationId: null,
        downloadFallback: !1,
        fileName: t.fileName,
        fullWidth: i,
        icon: (0, K.createElement)(B[t.kind]),
        onClose: () => u.abort(),
        signal: d,
        tabKey: s,
        target: { type: `page-file`, fileId: t.fileId, pageId: a },
      }),
      c != null && p());
  } catch (e) {
    if ((p(), !d.aborted)) throw e;
  }
}
var K;
function q() {
  return (q = e(() => {
    (l(), (K = t()), b(), k(), E(), A(), C(), N(), i(), w(), U(), P(), M(), T(), f(), r(), V(), R());
  }))();
}
export { W as n, q as t };
//# sourceMappingURL=open-e59c2dc64ba2.js.map
