const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./open-chatgpt-file-6fc1fe73a6ed.js",
      "./app-shared-bbfeca5e5737.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-5851df3f6cb1.js",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Eft as n,
  Pxt as r,
  fPt as i,
  fSt as a,
  hot as o,
  lot as s,
  pPt as c,
  rst as l,
  spt as u,
  wot as d,
} from "./app-shared-bbfeca5e5737.js";
import {
  EKn as f,
  Fp as p,
  Fy as m,
  GGn as h,
  GMr as g,
  Ny as _,
  Pp as v,
  Py as y,
  QGn as b,
  Qmr as x,
  TKn as S,
  XGn as C,
  XMr as w,
  Ymr as T,
  _Wn as E,
  aIr as D,
  ehr as O,
  fVt as k,
  hVt as A,
  inr as j,
  oIr as M,
  rnr as N,
  tNr as P,
  wKn as F,
  xKn as I,
  xfr as L,
  yWn as R,
} from "./app-initial-5851df3f6cb1.js";
import { n as z, t as B } from "./library-file-metadata-18e455d7ac7c.js";
function V(e, t) {
  let n = N(e);
  return n == null ? U.has(t?.split(`;`, 1)[0]?.trim().toLowerCase() ?? ``) : H.has(n);
}
var H, U;
function W() {
  return (W = e(() => {
    (j(),
      (H = new Set([`7z`, `bz2`, `gz`, `rar`, `tar`, `tbz2`, `tgz`, `txz`, `xz`, `zip`, `zst`])),
      (U = new Set([
        `application/gzip`,
        `application/vnd.rar`,
        `application/x-7z-compressed`,
        `application/x-bzip2`,
        `application/x-rar-compressed`,
        `application/x-tar`,
        `application/x-xz`,
        `application/zip`,
        `application/zstd`,
      ])));
  }))();
}
async function G(e, t, r, a = new AbortController().signal) {
  let s = e.get(g),
    c = e.get(w);
  if (s == null || c == null) return;
  let l = JSON.stringify([s, c, r.roomId, r.fileId]);
  if (e.get(K).has(l)) return;
  e.set(K, new Set([...e.get(K), l]));
  let d = e.get(M),
    f = () => {
      if ((a.throwIfAborted(), e.get(g) !== s || e.get(w) !== c))
        throw new DOMException(`Account changed`, `AbortError`);
    },
    _ = async (e = a) => {
      f();
      let t = await T.safeGet(`/messaging/rooms/{room_id}/files/{file_id}`, {
        additionalHeaders: { [u]: s },
        expectedErrorStatuses: [401, 403, 404],
        retry: !1,
        signal: AbortSignal.any([a, e]),
        parameters: { path: { room_id: r.roomId, file_id: r.fileId } },
      });
      return (f(), e.throwIfAborted(), t);
    },
    v = async (e, t) => {
      if ((f(), t.throwIfAborted(), e.download_url == null)) throw Error(`File download is unavailable`);
      let n = S(e.download_url),
        r = n == null ? I({ download_url: e.download_url }) : { downloadUrl: n, requestHeaders: x() },
        i = await C(
          { ...r, requestHeaders: r.requestHeaders == null ? void 0 : { ...r.requestHeaders, [u]: s } },
          AbortSignal.any([a, t]),
        );
      return (f(), i);
    },
    b = async () => {
      let e = await _();
      h(await v(e, a), e.name || r.name);
    };
  try {
    let l = await _(),
      u = l.name || r.name;
    if (V(u, l.mime_type)) {
      h(await v(l, a), u);
      return;
    }
    let x = k(u, `audio`) === `audio`;
    if (l.library_file_id != null && n(l.library_file_id) && !x && y.isAvailable(e)) {
      let t = await B(l.library_file_id, s, a).then(
        () => !0,
        () => !1,
      );
      if ((f(), t)) {
        m(e, l.library_file_id, u);
        return;
      }
      e.get(o).warning(
        d.formatMessage({
          id: `restricted.aeon.messaging.libraryFileUnavailable`,
          defaultMessage: `Couldn’t access this file in Library, so we’ll use the message attachment instead`,
          description: `Shown when a dot message attachment cannot be opened through Library but may still be opened from its message`,
        }),
      );
    }
    let S = E(u, l.mime_type),
      C = `orbit-document:${r.roomId}:${r.fileId}`;
    if ((S === `markdown` || S === `plain-text`) && (r.sizeBytes == null || r.sizeBytes <= 10485760)) {
      p(e, u, {
        allowTaskPreview: !0,
        hostId: t,
        loadText: async (e) => {
          let t = await v(await _(e), e);
          if (t.size > 10485760) throw Error(`Attachment is too large to preview`);
          return t.text();
        },
        onDownload: b,
        previewKind: S,
        tabId: C,
        target: `right`,
        title: u,
      });
      return;
    }
    let { canOpenChatGptFilePreview: T, openChatGptFile: D } = await i(
      async () => {
        let { canOpenChatGptFilePreview: e, openChatGptFile: t } = await import(
          `./open-chatgpt-file-6fc1fe73a6ed.js`
        );
        return { canOpenChatGptFilePreview: e, openChatGptFile: t };
      },
      __vite__mapDeps([0, 1, 2, 3, 4, 5]),
      import.meta.url,
    );
    if (l.download_url == null || !T({ browserPreview: !0 })) {
      await b();
      return;
    }
    (f(),
      await D(e, {
        allowTaskPreview: !0,
        browserPreview: !0,
        conversationId: null,
        downloadFallback: !1,
        fileName: u,
        fullWidth: !1,
        mimeType: l.mime_type,
        onDownload: b,
        signal: a,
        tabKey: C,
        isAccessBlocked: (e) => e.get(g) !== s || e.get(w) !== c,
        target: { type: `download-url`, ...I({ download_url: l.download_url }) },
      }));
  } catch (t) {
    if (t instanceof Error && t.name === `AbortError`) return;
    e.get(o).danger(
      d.formatMessage({
        id: `restricted.aeon.messaging.fileOpenFailed`,
        defaultMessage: `Couldn’t open this file. Try again`,
        description: `Error when a dot message file cannot be opened`,
      }),
      { errorAnalytics: { toastId: `restricted.aeon.messaging.fileOpenFailed` } },
    );
  } finally {
    e.set(K, (e) => {
      let t = new Set(e);
      return (t.delete(l), t);
    });
  }
}
var K;
function q() {
  return (q = e(() => {
    (r(),
      l(),
      P(),
      f(),
      O(),
      v(),
      R(),
      F(),
      s(),
      L(),
      D(),
      z(),
      _(),
      A(),
      d(),
      b(),
      W(),
      c(),
      (K = a(t, () => new Set())));
  }))();
}
export { V as i, G as n, W as r, q as t };
//# sourceMappingURL=open-file-143d4c1a924b.js.map
