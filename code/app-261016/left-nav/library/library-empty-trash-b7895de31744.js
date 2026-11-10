import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  HO as n,
  IO as r,
  JO as i,
  LNt as a,
  LO as o,
  PBt as s,
  Vrt as c,
  WO as l,
  XOt as u,
  Y3 as d,
  Z3 as f,
  ZSt as p,
  aCt as m,
  iCt as h,
  kCt as g,
  qO as _,
  qrt as v,
  tkt as y,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $x as b,
  BRr as x,
  Blr as S,
  CIr as C,
  DKn as w,
  Fpn as T,
  HRn as E,
  Imt as D,
  Lpn as O,
  Nmt as k,
  Ozn as A,
  SIr as j,
  Xfn as M,
  Xx as N,
  Yx as P,
  _ur as F,
  eht as I,
  gur as L,
  kKn as R,
  lS as z,
  mlr as B,
  pur as V,
  wLr as H,
  zlr as U,
} from "./app-initial-ad16eaadf81f.js";
import { n as W, t as G } from "./library-trash-analytics-87135fb4164d.js";
function K(e) {
  let t = (0, X.c)(10),
    { accountId: n, userId: r, sessionId: i, action: a, onClose: o } = e,
    s;
  t[0] !== n || t[1] !== r
    ? ((s = { accountId: n, userId: r }), (t[0] = n), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] !== a || t[4] !== o || t[5] !== i
    ? ((c = (0, Z.jsx)(q, { sessionId: i, action: a, onClose: o })),
      (t[3] = a),
      (t[4] = o),
      (t[5] = i),
      (t[6] = c))
    : (c = t[6]);
  let l;
  return (
    t[7] !== s || t[8] !== c
      ? ((l = (0, Z.jsx)(m, { scope: M, value: s, children: c })), (t[7] = s), (t[8] = c), (t[9] = l))
      : (l = t[9]),
    l
  );
}
function q(e) {
  let n = (0, X.c)(35),
    { sessionId: i, action: a, onClose: s } = e,
    c = t(M),
    u = h(Q),
    f = h(S),
    p = h(L),
    m = h(x),
    g;
  n[0] !== a || n[1] !== s || n[2] !== c || n[3] !== i
    ? ((g = async () => {
        c.get(Q) ||
          (c.set(Q, !0),
          await (a == null ? J(c, i) : a.onConfirm())
            .then((e) => {
              e && s();
            })
            .finally(() => c.set(Q, !1)));
      }),
      (n[0] = a),
      (n[1] = s),
      (n[2] = c),
      (n[3] = i),
      (n[4] = g))
    : (g = n[4]);
  let v = g;
  if (f && (p !== c.value.accountId || m !== (c.value.userId ?? null))) return null;
  let b;
  n[5] !== s || n[6] !== c
    ? ((b = (e) => {
        !e && !c.get(Q) && s();
      }),
      (n[5] = s),
      (n[6] = c),
      (n[7] = b))
    : (b = n[7]);
  let C;
  n[8] === v
    ? (C = n[9])
    : ((C = (e) => {
        (e.preventDefault(), v());
      }),
      (n[8] = v),
      (n[9] = C));
  let w;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Z.jsx)(_, {
        className: `heading-lg`,
        children: (0, Z.jsx)(y, {
          id: `library.emptyTrash.title`,
          defaultMessage: `Delete forever?`,
          description: `Confirmation title before permanently deleting all recently deleted pages and files`,
        }),
      })),
      (n[10] = w))
    : (w = n[10]);
  let T;
  n[11] !== a?.description || n[12] !== f
    ? ((T =
        a?.description ??
        (f
          ? (0, Z.jsx)(y, {
              id: `library.emptyTrash.description`,
              defaultMessage: `Items in Trash will be deleted forever. This can't be undone.`,
              description: `Warning in the Empty trash confirmation: confirming permanently deletes every recently deleted page and file, not only visible or selected files`,
            })
          : (0, Z.jsx)(y, {
              id: `library.emptyTrash.filesDescription`,
              defaultMessage: `Files in Trash will be deleted forever. This can't be undone.`,
              description: `Warning that Empty file trash permanently deletes all trashed files`,
            }))),
      (n[11] = a?.description),
      (n[12] = f),
      (n[13] = T))
    : (T = n[13]);
  let E;
  n[14] === T ? (E = n[15]) : ((E = (0, Z.jsx)(`p`, { children: T })), (n[14] = T), (n[15] = E));
  let D;
  n[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Z.jsx)(y, {
        id: `libraryNext.dialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Dismiss a Library action dialog without making changes`,
      })),
      (n[16] = D))
    : (D = n[16]);
  let O;
  n[17] !== s || n[18] !== u
    ? ((O = (0, Z.jsx)(d, { color: `ghost`, disabled: u, onClick: s, children: D })),
      (n[17] = s),
      (n[18] = u),
      (n[19] = O))
    : (O = n[19]);
  let k;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(y, {
        id: `library.emptyTrash.confirm`,
        defaultMessage: `Delete forever`,
        description: `Destructive confirmation button that permanently deletes all pages and files in Trash`,
      })),
      (n[20] = k))
    : (k = n[20]);
  let A;
  n[21] === u
    ? (A = n[22])
    : ((A = (0, Z.jsx)(d, { type: `submit`, color: `dangerSolid`, loading: u, children: k })),
      (n[21] = u),
      (n[22] = A));
  let j;
  n[23] !== A || n[24] !== O
    ? ((j = (0, Z.jsxs)(o, { children: [O, A] })), (n[23] = A), (n[24] = O), (n[25] = j))
    : (j = n[25]);
  let N;
  n[26] !== j || n[27] !== E
    ? ((N = (0, Z.jsxs)(`div`, { className: `flex flex-col gap-4`, children: [w, E, j] })),
      (n[26] = j),
      (n[27] = E),
      (n[28] = N))
    : (N = n[28]);
  let P;
  n[29] !== N || n[30] !== C
    ? ((P = (0, Z.jsx)(r, { as: `form`, onSubmit: C, children: N })), (n[29] = N), (n[30] = C), (n[31] = P))
    : (P = n[31]);
  let F;
  return (
    n[32] !== P || n[33] !== b
      ? ((F = (0, Z.jsx)(l, { open: !0, onOpenChange: b, children: P })),
        (n[32] = P),
        (n[33] = b),
        (n[34] = F))
      : (F = n[34]),
    F
  );
}
async function J(e, t) {
  let n = e.get(v),
    r = e.get(C);
  W(e, t, E.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE);
  try {
    let i = await Promise.allSettled([
      e.get(R) ? e.get(D).safeDelete(`/files/library/trash`) : void 0,
      e.get(S) ? Y(e) : void 0,
    ]);
    if (e.get(S) && (e.get(L) !== e.value.accountId || e.get(x) !== (e.value.userId ?? null))) return !1;
    let a = i.find((e) => e.status === `rejected`),
      o = i.reduce(
        (e, t) => ({
          deleted_count: e.deleted_count + (t.status === `fulfilled` ? (t.value?.deleted_count ?? 0) : 0),
          failed_count: e.failed_count + (t.status === `fulfilled` ? (t.value?.failed_count ?? 0) : 1),
        }),
        { deleted_count: 0, failed_count: 0 },
      );
    return (
      (o.deleted_count > 0 || o.failed_count === 0) && e.set(I, []),
      Promise.allSettled([
        o.deleted_count > 0 ? z(e.queryClient) : void 0,
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
              ? E.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED
              : E.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_PARTIAL,
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
        : (W(e, t, E.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_SUCCEEDED),
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
      W(e, t, E.CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED, i instanceof Error ? i : void 0),
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
  let t = F(e, e.value.accountId, e.value.userId ?? null);
  try {
    let n = new Map(),
      r = null;
    do {
      t.signal.throwIfAborted();
      let i = await T(
        e.get(D),
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
          includeTrashedSpaces: e.get(U),
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
        (await b(e, r.node.id, `deleteForever`, r.space == null ? `page` : `space`), (i += 1));
      } catch {}
    }
    return (N(e), { deleted_count: i, failed_count: n.size - i });
  } finally {
    t.stop();
  }
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = s()),
      A(),
      p(),
      u(),
      H(),
      f(),
      i(),
      n(),
      c(),
      j(),
      V(),
      B(),
      P(),
      w(),
      O(),
      k(),
      G(),
      (Z = a()),
      (Q = g(M, !1)));
  }))();
}
$();
export { K as EmptyLibraryTrashDialog };
//# sourceMappingURL=library-empty-trash-b7895de31744.js.map
