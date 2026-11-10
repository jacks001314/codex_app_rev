import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BR as t,
  Jbt as n,
  LR as r,
  VR as i,
  hot as a,
  lot as o,
  mht as s,
  not as c,
  rst as l,
  yzt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as d,
  Cwt as f,
  Dor as p,
  Dtr as m,
  J8n as h,
  Oor as g,
  Qor as _,
  Rsn as v,
  U8t as y,
  XPr as b,
  YPr as x,
  Zor as S,
  _Tt as C,
  aIr as w,
  dxn as T,
  ep as E,
  gwn as D,
  ktr as O,
  o8n as k,
  oIr as A,
  tp as j,
  uxn as M,
  v8n as N,
  vTt as P,
  wsn as F,
  wwt as I,
  xsn as L,
} from "./app-initial-5851df3f6cb1.js";
import { a as R, n as z } from "./references-4e565b8c19a8.js";
import { n as B, t as V } from "./icons-ade0758d4408.js";
import { n as H, t as U } from "./output-files-query-f3729d8bfadc.js";
async function W(e, r, o, l, { fullWidth: u = !1 } = {}) {
  try {
    if ((o.throwIfAborted(), `fileId` in r)) {
      await G(e, r, o, l, u);
      return;
    }
    let a = n(r.threadId),
      p = e.get(d, a),
      g = r.relativePath?.startsWith(`outputs/`)
        ? [r.relativePath, r.relativePath.slice(8)]
        : [r.relativePath],
      _;
    if (r.relativePath != null) {
      let t = await e.query.getOrFetch(H).catch(() => void 0);
      for (let e of g)
        if (
          ((_ = t?.find(
            (t) => t.threadId === r.threadId && t.relativePath === e && t.name === r.fileName,
          )?.path),
          _ != null)
        )
          break;
    }
    if ((o.throwIfAborted(), _ == null)) {
      let n = x(e, p);
      (await n.hydrateBackgroundThreads([a], { includeTurns: r.relativePath == null }), o.throwIfAborted());
      let s = e.get(h, a);
      if (r.relativePath == null)
        try {
          var f = c();
          let e = f.u(await n.getConversation(a).catch(() => null));
          (o.throwIfAborted(),
            e != null &&
              (_ = z(r, m(S(e), { includeGeneratedImages: !1, projectlessOutputDirectory: s }))?.path));
        } catch (e) {
          f.e = e;
        } finally {
          f.d();
        }
      if (_ == null) {
        let c = s ?? e.get(k, a) ?? (await n.readThread(a, { includeTurns: !1 })).thread.cwd;
        o.throwIfAborted();
        for (let e of g) {
          let a = null;
          e != null && (a = t(s == null ? `outputs/${e}` : e));
          let { files: l } = await n.sendRequest(`fuzzyFileSearch`, {
            query: a ?? r.fileName,
            roots: [c],
            cancellationToken: null,
          });
          o.throwIfAborted();
          let u = l.filter(
            (e) => e.match_type === `file` && e.file_name === r.fileName && (a == null || t(e.path) === a),
          );
          if (u.length === 1) {
            _ = i(u[0].root, u[0].path);
            break;
          }
        }
      }
    }
    if ((o.throwIfAborted(), _ == null)) throw Error(`Page artifact output is unavailable`);
    let { existingPaths: v } = await e.query.getOrFetch(C, { hostId: p, paths: [_] });
    if ((o.throwIfAborted(), !v.some((e) => s(e, _)))) throw Error(`Page artifact file is unavailable`);
    I(e, _, { hostId: p, icon: (0, K.createElement)(B[r.kind]), title: r.fileName, target: `right` }) &&
      M(e, `artifact:${p}:${_}`) === `right` &&
      D(e, u);
  } catch {
    o.aborted ||
      e
        .get(a)
        .danger(
          e
            .get(A)
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
  let a = e.get(v, r),
    o = e.get(p);
  if (o == null) return;
  let s = `page:${o}:${a}:${t.fileId}`,
    c = M(e, `chatgpt-file:unknown:${s}`),
    l = g(e, o),
    u = new AbortController(),
    d = AbortSignal.any([n, l.signal, u.signal]),
    f = e.watch(({ get: e }) => {
      let t = e(F, a);
      (t?.access.can_read === !1 || t?.deleted_at != null) && u.abort();
    }),
    m = () => {
      (l.stop(), f(), d.removeEventListener(`abort`, m));
    };
  d.addEventListener(`abort`, m, { once: !0 });
  try {
    (d.throwIfAborted(),
      await j(e, {
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
      c != null && m());
  } catch (e) {
    if ((m(), !d.aborted)) throw e;
  }
}
var K;
function q() {
  return (q = e(() => {
    (l(), (K = u()), b(), N(), _(), y(), f(), E(), o(), w(), U(), P(), L(), T(), O(), r(), V(), R());
  }))();
}
export { W as n, q as t };
//# sourceMappingURL=open-e3532d78fe23.js.map
