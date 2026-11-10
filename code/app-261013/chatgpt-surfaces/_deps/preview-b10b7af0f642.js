import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ASt as n,
  Cot as r,
  Fat as i,
  IDt as a,
  Pat as o,
  Pxt as s,
  VDt as c,
  Yxt as l,
  Zxt as u,
  frt as d,
  i3 as f,
  jDt as p,
  jSt as m,
  r3 as h,
  t3 as g,
  urt as _,
  vzt as v,
  wot as y,
  xMt as b,
  zxt as x,
} from "./app-shared-bbfeca5e5737.js";
import {
  $Fn as S,
  XDr as C,
  Ymr as w,
  _Kn as T,
  eIn as E,
  eOr as D,
  ehr as O,
  yKn as k,
} from "./app-initial-5851df3f6cb1.js";
import { n as A, t as j } from "./editable-writing-block-67c0bb761270.js";
import { i as M, t as N } from "./writing-block-surface-635635c06cb8.js";
async function P({ fileId: e, serverConversationId: t, signal: n }) {
  n?.throwIfAborted();
  let r = await k(e, { checkContextScopesForConversationId: t, downloadIntent: !1 });
  return (
    n?.throwIfAborted(),
    (await _.getInstance().fetch(r.downloadUrl, { headers: r.requestHeaders, signal: n })).text()
  );
}
function F() {
  return (F = e(() => {
    (T(), d());
  }))();
}
var I, L;
function R() {
  return (R = e(() => {
    (E(),
      m(),
      s(),
      O(),
      C(),
      y(),
      i(),
      F(),
      (I = l(r, ({ libraryFileId: e, requestedVersionNumber: t, serverConversationId: r }, { scope: i }) => ({
        initialPageParam: ``,
        getNextPageParam: (e, t, n) => e.cursor ?? void 0,
        queryFn: async ({ pageParam: r, signal: a }) => {
          let o = async (t, r) => {
              try {
                let n = await w.safeGet(`/files/library/files/{library_file_id}/versions`, {
                  parameters: { path: { library_file_id: e }, query: { cursor: t || void 0, limit: r } },
                  signal: a,
                });
                return (
                  a.throwIfAborted(),
                  i.get(D).trackCounter(S.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOAD_SUCCEEDED),
                  n.items.length > 0 &&
                    i
                      .get(D)
                      .trackCounter(
                        S.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOADED_ITEMS,
                        n.items.length,
                      ),
                  n
                );
              } catch (e) {
                throw (
                  !a.aborted &&
                    !(e instanceof n) &&
                    !(e instanceof Error && e.name === `AbortError`) &&
                    i.get(D).trackCounter(S.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOAD_FAILED),
                  e
                );
              }
            },
            s = await o(r, 20);
          if (r !== ``) return s;
          let c = [...s.items],
            l = s.cursor;
          for (; t != null && l != null && !c.some((e) => e.version_number === t);) {
            a.throwIfAborted();
            let e = await o(l, 100);
            (c.push(...e.items), (l = e.cursor));
          }
          return { items: c, cursor: l };
        },
        queryKey: [`writing-block-library-history`, e, t, r],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 0,
      }))),
      (L = u(r, ({ fileId: e, serverConversationId: t }) => ({
        queryFn: ({ signal: n }) => P({ fileId: e, serverConversationId: t, signal: n }),
        queryKey: [`writing-block-library-version-content`, e, t],
        retry: !1,
        staleTime: o.INFINITE,
      }))));
  }))();
}
function z() {
  let e = (0, V.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, H.jsxs)(`div`, {
          role: `status`,
          className: `flex items-center gap-2 p-3 text-sm text-secondary select-none`,
          children: [
            (0, H.jsx)(h, { className: `icon-xs` }),
            (0, H.jsx)(a, {
              id: `codex.writingBlock.history.loading`,
              defaultMessage: `Loading…`,
              description: `Status while saved writing-block history or a selected revision preview is loading`,
            }),
          ],
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function B(e) {
  let n = (0, V.c)(9),
    { children: r, loading: i, onRetry: o } = e,
    s;
  n[0] === r
    ? (s = n[1])
    : ((s = (0, H.jsx)(`span`, { className: `text-sm text-secondary`, children: r })),
      (n[0] = r),
      (n[1] = s));
  let c;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, H.jsx)(a, {
        id: `codex.writingBlock.history.retry`,
        defaultMessage: `Try again`,
        description: `Button that retries loading writing-block version history or a saved revision after a failed request`,
      })),
      (n[2] = c))
    : (c = n[2]);
  let l;
  n[3] !== i || n[4] !== o
    ? ((l = (0, H.jsx)(t, { color: `secondary`, loading: i, size: `compact`, onClick: o, children: c })),
      (n[3] = i),
      (n[4] = o),
      (n[5] = l))
    : (l = n[5]);
  let u;
  return (
    n[6] !== s || n[7] !== l
      ? ((u = (0, H.jsxs)(`div`, {
          role: `alert`,
          className: `flex items-center justify-between gap-3 p-3 select-none`,
          children: [s, l],
        })),
        (n[6] = s),
        (n[7] = l),
        (n[8] = u))
      : (u = n[8]),
    u
  );
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = v()), p(), g(), f(), (H = b()));
  }))();
}
function W(e) {
  let t = (0, K.c)(18),
    { serverConversationId: n, version: r } = e,
    i = c(),
    o;
  t[0] !== n || t[1] !== r.file_id
    ? ((o = { fileId: r.file_id, serverConversationId: n }), (t[0] = n), (t[1] = r.file_id), (t[2] = o))
    : (o = t[2]);
  let { data: s, isError: l, isPending: u, refetch: d } = x(L, o);
  if (u) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, q.jsx)(z, {})), (t[3] = e)) : (e = t[3]),
      e
    );
  }
  if (l) {
    let e;
    t[4] === d ? (e = t[5]) : ((e = () => void d()), (t[4] = d), (t[5] = e));
    let n;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, q.jsx)(a, {
          id: `codex.writingBlock.history.previewError`,
          defaultMessage: `Could not load this version`,
          description: `Error when the exact saved writing-block revision cannot be downloaded for read-only preview`,
        })),
        (t[6] = n))
      : (n = t[6]);
    let r;
    return (
      t[7] === e ? (r = t[8]) : ((r = (0, q.jsx)(B, { onRetry: e, children: n })), (t[7] = e), (t[8] = r)),
      r
    );
  }
  let f;
  t[9] !== i || t[10] !== r.version_number
    ? ((f = i.formatMessage(
        {
          id: `codex.writingBlock.history.previewLabel`,
          defaultMessage: `Version {version} preview`,
          description: `Accessible label for the read-only content of a selected writing-block revision`,
        },
        { version: r.version_number },
      )),
      (t[9] = i),
      (t[10] = r.version_number),
      (t[11] = f))
    : (f = t[11]);
  let p = `history:${r.file_id}`,
    m;
  t[12] !== s || t[13] !== p
    ? ((m = (0, q.jsx)(j, {
        content: s,
        editorKey: p,
        emailMetadata: void 0,
        isEditable: !1,
        hideFormatToolbar: !0,
        hideSlashMenu: !0,
        renderFrame: G,
        testId: `writing-block-version-preview`,
        title: void 0,
        variant: `document`,
      })),
      (t[12] = s),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== f || t[16] !== m
      ? ((h = (0, q.jsx)(`section`, { "aria-label": f, children: m })), (t[15] = f), (t[16] = m), (t[17] = h))
      : (h = t[17]),
    h
  );
}
function G(e) {
  let { children: t } = e;
  return (0, q.jsx)(N, {
    className: `mx-auto w-full max-w-(--thread-content-max-width) px-toolbar py-8 [--wb-editor-page-top-inset:0px]`,
    children: t,
  });
}
var K, q;
function J() {
  return (J = e(() => {
    ((K = v()), s(), p(), A(), M(), R(), U(), (q = b()));
  }))();
}
export { P as a, I as i, J as n, F as o, R as r, W as t };
//# sourceMappingURL=preview-b10b7af0f642.js.map
