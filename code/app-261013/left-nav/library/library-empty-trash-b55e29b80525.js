import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Hxt as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  Vxt as o,
  _O as s,
  fO as c,
  fSt as l,
  hot as u,
  jDt as d,
  lot as f,
  mO as p,
  oO as m,
  sO as h,
  t3 as g,
  vO as _,
  vzt as v,
  xMt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bln as b,
  Cx as x,
  Dor as S,
  Dpt as C,
  Ear as w,
  Fx as T,
  Gpt as E,
  Hln as D,
  Oor as O,
  Qar as k,
  Tx as A,
  XMr as j,
  Zar as M,
  aIr as N,
  eIn as P,
  fUn as F,
  gFn as I,
  oIr as L,
  tNr as R,
  tln as z,
  uUn as B,
  wor as V,
  wpt as H,
  wx as U,
} from "./app-initial-5851df3f6cb1.js";
import { n as W, t as G } from "./library-trash-analytics-b5f56547a9f3.js";
function K(e) {
  let t = (0, X.c)(10),
    { accountId: r, userId: i, sessionId: a, action: o, onClose: s } = e,
    c;
  t[0] !== r || t[1] !== i
    ? ((c = { accountId: r, userId: i }), (t[0] = r), (t[1] = i), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] !== o || t[4] !== s || t[5] !== a
    ? ((l = (0, Z.jsx)(q, { sessionId: a, action: o, onClose: s })),
      (t[3] = o),
      (t[4] = s),
      (t[5] = a),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== c || t[8] !== l
      ? ((u = (0, Z.jsx)(n, { scope: z, value: c, children: l })), (t[7] = c), (t[8] = l), (t[9] = u))
      : (u = t[9]),
    u
  );
}
function q(e) {
  let n = (0, X.c)(35),
    { sessionId: a, action: c, onClose: l } = e,
    u = i(z),
    d = o(Q),
    f = o(k),
    g = o(S),
    _ = o(j),
    v;
  n[0] !== c || n[1] !== l || n[2] !== u || n[3] !== a
    ? ((v = async () => {
        u.get(Q) ||
          (u.set(Q, !0),
          await (c == null ? J(u, a) : c.onConfirm())
            .then((e) => {
              e && l();
            })
            .finally(() => u.set(Q, !1)));
      }),
      (n[0] = c),
      (n[1] = l),
      (n[2] = u),
      (n[3] = a),
      (n[4] = v))
    : (v = n[4]);
  let y = v;
  if (f && (g !== u.value.accountId || _ !== (u.value.userId ?? null))) return null;
  let b;
  n[5] !== l || n[6] !== u
    ? ((b = (e) => {
        !e && !u.get(Q) && l();
      }),
      (n[5] = l),
      (n[6] = u),
      (n[7] = b))
    : (b = n[7]);
  let x;
  n[8] === y
    ? (x = n[9])
    : ((x = (e) => {
        (e.preventDefault(), y());
      }),
      (n[8] = y),
      (n[9] = x));
  let C;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(s, {
        className: `heading-lg`,
        children: (0, Z.jsx)(r, {
          id: `library.emptyTrash.title`,
          defaultMessage: `Delete forever?`,
          description: `Confirmation title before permanently deleting all recently deleted pages and files`,
        }),
      })),
      (n[10] = C))
    : (C = n[10]);
  let w;
  n[11] !== c?.description || n[12] !== f
    ? ((w =
        c?.description ??
        (f
          ? (0, Z.jsx)(r, {
              id: `library.emptyTrash.description`,
              defaultMessage: `Items in Trash will be deleted forever. This can't be undone.`,
              description: `Warning in the Empty trash confirmation: confirming permanently deletes every recently deleted page and file, not only visible or selected files`,
            })
          : (0, Z.jsx)(r, {
              id: `library.emptyTrash.filesDescription`,
              defaultMessage: `Files in Trash will be deleted forever. This can't be undone.`,
              description: `Warning that Empty file trash permanently deletes all trashed files`,
            }))),
      (n[11] = c?.description),
      (n[12] = f),
      (n[13] = w))
    : (w = n[13]);
  let T;
  n[14] === w ? (T = n[15]) : ((T = (0, Z.jsx)(`p`, { children: w })), (n[14] = w), (n[15] = T));
  let E;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(r, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (n[16] = E))
    : (E = n[16]);
  let D;
  n[17] !== l || n[18] !== d
    ? ((D = (0, Z.jsx)(t, { color: `ghost`, disabled: d, onClick: l, children: E })),
      (n[17] = l),
      (n[18] = d),
      (n[19] = D))
    : (D = n[19]);
  let O;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, Z.jsx)(r, {
        id: `library.emptyTrash.confirm`,
        defaultMessage: `Delete forever`,
        description: `Destructive confirmation button that permanently deletes all pages and files in Trash`,
      })),
      (n[20] = O))
    : (O = n[20]);
  let A;
  n[21] === d
    ? (A = n[22])
    : ((A = (0, Z.jsx)(t, { type: `submit`, color: `dangerSolid`, loading: d, children: O })),
      (n[21] = d),
      (n[22] = A));
  let M;
  n[23] !== A || n[24] !== D
    ? ((M = (0, Z.jsxs)(h, { children: [D, A] })), (n[23] = A), (n[24] = D), (n[25] = M))
    : (M = n[25]);
  let N;
  n[26] !== M || n[27] !== T
    ? ((N = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [C, T, M] })),
      (n[26] = M),
      (n[27] = T),
      (n[28] = N))
    : (N = n[28]);
  let P;
  n[29] !== N || n[30] !== x
    ? ((P = (0, Z.jsx)(m, { as: `form`, onSubmit: x, children: N })), (n[29] = N), (n[30] = x), (n[31] = P))
    : (P = n[31]);
  let F;
  return (
    n[32] !== P || n[33] !== b
      ? ((F = (0, Z.jsx)(p, { open: !0, onOpenChange: b, children: P })),
        (n[32] = P),
        (n[33] = b),
        (n[34] = F))
      : (F = n[34]),
    F
  );
}
async function J(e, t) {
  let n = e.get(u),
    r = e.get(L);
  W(e, t, I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE);
  try {
    let i = await Promise.allSettled([
      e.get(F) ? e.get(C).safeDelete(`/files/library/trash`) : void 0,
      e.get(k) ? Y(e) : void 0,
    ]);
    if (e.get(k) && (e.get(S) !== e.value.accountId || e.get(j) !== (e.value.userId ?? null))) return !1;
    let a = i.find((e) => e.status === `rejected`),
      o = i.reduce(
        (e, t) => ({
          deleted_count: e.deleted_count + (t.status === `fulfilled` ? (t.value?.deleted_count ?? 0) : 0),
          failed_count: e.failed_count + (t.status === `fulfilled` ? (t.value?.failed_count ?? 0) : 1),
        }),
        { deleted_count: 0, failed_count: 0 },
      );
    return (
      (o.deleted_count > 0 || o.failed_count === 0) && e.set(E, []),
      Promise.allSettled([
        o.deleted_count > 0 ? T(e.queryClient) : void 0,
        ...[
          [`library-api`, e.value.accountId],
          [`chatgpt-composer-library-files`, e.value.accountId],
          [`4231797315`],
        ].map((t) => e.queryClient.invalidateQueries({ queryKey: t })),
      ]),
      o.failed_count > 0
        ? (W(
            e,
            t,
            o.deleted_count === 0
              ? I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED
              : I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_PARTIAL,
            a?.status === `rejected` && a.reason instanceof Error ? a.reason : void 0,
          ),
          n.danger(
            r.formatMessage({
              id: `library.emptyTrash.partialFailure`,
              defaultMessage: `Some items couldn't be deleted. Try again.`,
              description: `Library Empty trash result when at least one file could not be permanently deleted; the remaining items can be retried`,
            }),
            { errorAnalytics: { toastId: `library.emptyTrash.partialFailure` } },
          ))
        : (W(e, t, I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_SUCCEEDED),
          n.success(
            r.formatMessage({
              id: `library.emptyTrash.success`,
              defaultMessage: `Trash emptied`,
              description: `Success toast after all recently deleted pages and files have been permanently deleted`,
            }),
          )),
      o.failed_count === 0
    );
  } catch (i) {
    return (
      W(e, t, I.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED, i instanceof Error ? i : void 0),
      n.danger(
        r.formatMessage({
          id: `library.emptyTrash.failed`,
          defaultMessage: `Failed to empty trash`,
          description: `Failure toast when the request to permanently delete all recently deleted pages and files fails; the confirmation remains open for retry or cancel`,
        }),
        { errorAnalytics: { toastId: `library.emptyTrash.failed` } },
      ),
      !1
    );
  }
}
async function Y(e) {
  let t = O(e, e.value.accountId, e.value.userId ?? null);
  try {
    let n = new Map(),
      r = null;
    do {
      t.signal.throwIfAborted();
      let i = await b(
        e.get(C),
        {
          tab: `all`,
          directoryId: null,
          search: ``,
          categories: [],
          source: null,
          includeHiddenFiles: !1,
          providers: [],
          deleted: !0,
          includeTrashedPages: !0,
          includeTrashedSpaces: e.get(M),
          includeLibraryFiles: !1,
        },
        r,
        t.signal,
      );
      for (let e of i.items) n.set(e.node.id, e);
      r = i.cursor ?? null;
    } while (r != null);
    let i = 0;
    for (let r of [...n.values()].sort((e, t) => Number(e.space != null) - Number(t.space != null))) {
      t.signal.throwIfAborted();
      try {
        (await A(e, r.node.id, `deleteForever`, r.space == null ? `page` : `space`), (i += 1));
      } catch {}
    }
    return (U(e), { deleted_count: i, failed_count: n.size - i });
  } finally {
    t.stop();
  }
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = v()),
      P(),
      a(),
      d(),
      R(),
      g(),
      _(),
      c(),
      f(),
      N(),
      V(),
      w(),
      x(),
      B(),
      D(),
      H(),
      G(),
      (Z = y()),
      (Q = l(z, !1)));
  }))();
}
$();
export { K as EmptyLibraryTrashDialog };
//# sourceMappingURL=library-empty-trash-b55e29b80525.js.map
