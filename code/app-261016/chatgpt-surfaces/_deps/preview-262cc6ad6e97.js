import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $st as n,
  Bst as r,
  Eit as i,
  LNt as a,
  Oit as o,
  PBt as s,
  Qst as c,
  XCt as l,
  XOt as u,
  Y3 as d,
  YCt as f,
  Z3 as p,
  ZSt as m,
  e6 as h,
  fCt as g,
  mCt as _,
  nCt as v,
  okt as y,
  tkt as b,
  zst as x,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BYn as S,
  CMr as C,
  Dzn as w,
  HYn as T,
  Ozn as E,
  iRr as D,
  tyr as O,
  yMr as k,
} from "./app-initial-ad16eaadf81f.js";
import { n as A, t as j } from "./editable-writing-block-c63092446a34.js";
import { i as M, t as N } from "./writing-block-surface-2bef314d86c0.js";
async function P({ fileId: e, serverConversationId: t, signal: n }) {
  n?.throwIfAborted();
  let r = await T(e, { checkContextScopesForConversationId: t, downloadIntent: !1 });
  return (
    n?.throwIfAborted(),
    (await i.getInstance().fetch(r.downloadUrl, { headers: r.requestHeaders, signal: n })).text()
  );
}
function F() {
  return (F = e(() => {
    (S(), o());
  }))();
}
var I, L;
function R() {
  return (R = e(() => {
    (E(),
      l(),
      m(),
      O(),
      k(),
      n(),
      r(),
      F(),
      (I = g(c, ({ libraryFileId: e, requestedVersionNumber: t, serverConversationId: n }, { scope: r }) => ({
        initialPageParam: ``,
        getNextPageParam: (e, t, n) => e.cursor ?? void 0,
        queryFn: async ({ pageParam: n, signal: i }) => {
          let a = async (t, n) => {
              try {
                let a = await D.safeGet(`/files/library/files/{library_file_id}/versions`, {
                  parameters: { path: { library_file_id: e }, query: { cursor: t || void 0, limit: n } },
                  signal: i,
                });
                return (
                  i.throwIfAborted(),
                  r.get(C).trackCounter(w.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOAD_SUCCEEDED),
                  a.items.length > 0 &&
                    r
                      .get(C)
                      .trackCounter(
                        w.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOADED_ITEMS,
                        a.items.length,
                      ),
                  a
                );
              } catch (e) {
                throw (
                  !i.aborted &&
                    !(e instanceof f) &&
                    !(e instanceof Error && e.name === `AbortError`) &&
                    r.get(C).trackCounter(w.CHATGPT_FILE_LIBRARY_VERSION_HISTORY_COUNTER_LOAD_FAILED),
                  e
                );
              }
            },
            o = await a(n, 20);
          if (n !== ``) return o;
          let s = [...o.items],
            c = o.cursor;
          for (; t != null && c != null && !s.some((e) => e.version_number === t);) {
            i.throwIfAborted();
            let e = await a(c, 100);
            (s.push(...e.items), (c = e.cursor));
          }
          return { items: s, cursor: c };
        },
        queryKey: [`writing-block-library-history`, e, t, n],
        refetchOnWindowFocus: !1,
        retry: !1,
        staleTime: 0,
      }))),
      (L = _(c, ({ fileId: e, serverConversationId: t }) => ({
        queryFn: ({ signal: n }) => P({ fileId: e, serverConversationId: t, signal: n }),
        queryKey: [`writing-block-library-version-content`, e, t],
        retry: !1,
        staleTime: x.INFINITE,
      }))));
  }))();
}
function z() {
  let e = (0, V.c)(1),
    n;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, H.jsxs)(`div`, {
          role: `status`,
          className: `flex items-center gap-2 p-3 text-sm text-secondary select-none`,
          children: [
            (0, H.jsx)(t, { className: `icon-xs` }),
            (0, H.jsx)(b, {
              id: `codex.writingBlock.history.loading`,
              defaultMessage: `Loading…`,
              description: `Status while saved writing-block history or a selected revision preview is loading`,
            }),
          ],
        })),
        (e[0] = n))
      : (n = e[0]),
    n
  );
}
function B(e) {
  let t = (0, V.c)(9),
    { children: n, loading: r, onRetry: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a = (0, H.jsx)(`span`, { className: `text-sm text-secondary`, children: n })),
      (t[0] = n),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, H.jsx)(b, {
        id: `codex.writingBlock.history.retry`,
        defaultMessage: `Try again`,
        description: `Button that retries loading writing-block version history or a saved revision after a failed request`,
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] !== r || t[4] !== i
    ? ((s = (0, H.jsx)(d, { color: `secondary`, loading: r, size: `compact`, onClick: i, children: o })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] !== a || t[7] !== s
      ? ((c = (0, H.jsxs)(`div`, {
          role: `alert`,
          className: `flex items-center justify-between gap-3 p-3 select-none`,
          children: [a, s],
        })),
        (t[6] = a),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
var V, H;
function U() {
  return (U = e(() => {
    ((V = s()), u(), p(), h(), (H = a()));
  }))();
}
function W(e) {
  let t = (0, K.c)(18),
    { serverConversationId: n, version: r } = e,
    i = y(),
    a;
  t[0] !== n || t[1] !== r.file_id
    ? ((a = { fileId: r.file_id, serverConversationId: n }), (t[0] = n), (t[1] = r.file_id), (t[2] = a))
    : (a = t[2]);
  let { data: o, isError: s, isPending: c, refetch: l } = v(L, a);
  if (c) {
    let e;
    return (
      t[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = (0, q.jsx)(z, {})), (t[3] = e)) : (e = t[3]),
      e
    );
  }
  if (s) {
    let e;
    t[4] === l ? (e = t[5]) : ((e = () => void l()), (t[4] = l), (t[5] = e));
    let n;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, q.jsx)(b, {
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
  let u;
  t[9] !== i || t[10] !== r.version_number
    ? ((u = i.formatMessage(
        {
          id: `codex.writingBlock.history.previewLabel`,
          defaultMessage: `Version {version} preview`,
          description: `Accessible label for the read-only content of a selected writing-block revision`,
        },
        { version: r.version_number },
      )),
      (t[9] = i),
      (t[10] = r.version_number),
      (t[11] = u))
    : (u = t[11]);
  let d = `history:${r.file_id}`,
    f;
  t[12] !== o || t[13] !== d
    ? ((f = (0, q.jsx)(j, {
        content: o,
        editorKey: d,
        emailMetadata: void 0,
        isEditable: !1,
        hideFormatToolbar: !0,
        hideSlashMenu: !0,
        renderFrame: G,
        testId: `writing-block-version-preview`,
        title: void 0,
        variant: `document`,
      })),
      (t[12] = o),
      (t[13] = d),
      (t[14] = f))
    : (f = t[14]);
  let p;
  return (
    t[15] !== u || t[16] !== f
      ? ((p = (0, q.jsx)(`section`, { "aria-label": u, children: f })), (t[15] = u), (t[16] = f), (t[17] = p))
      : (p = t[17]),
    p
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
    ((K = s()), m(), u(), A(), M(), R(), U(), (q = a()));
  }))();
}
export { P as a, I as i, J as n, F as o, R as r, W as t };
//# sourceMappingURL=preview-262cc6ad6e97.js.map
