import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  Ext as r,
  Hxt as i,
  Ixt as a,
  Mz as o,
  Nz as s,
  Pxt as c,
  VDt as l,
  Vxt as u,
  Zxt as d,
  _xt as f,
  aSt as p,
  cz as m,
  hot as h,
  i2 as g,
  ix as _,
  jDt as v,
  lot as y,
  r2 as ee,
  rx as b,
  sz as te,
  t3 as x,
  vzt as S,
  xMt as C,
  zxt as w,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bdr as T,
  Dpt as E,
  GMr as D,
  Gx as O,
  Hdr as k,
  Hx as A,
  Jx as j,
  Kx as M,
  Lmt as N,
  QDr as P,
  Vdr as ne,
  XDr as re,
  XMr as F,
  Yx as ie,
  ZMr as ae,
  aIr as oe,
  oIr as se,
  qdr as ce,
  qx as I,
  tNr as L,
  tln as R,
  wpt as z,
} from "./app-initial-5851df3f6cb1.js";
import { n as B, t as V } from "./favorite-folder-menu-2542785c765c.js";
import { a as H, i as U, r as W, t as le } from "./image-favorite-actions-308dd8bfc2aa.js";
function ue(e) {
  let t = e.searchResult;
  return t?.contentSrc == null || t.isProxied || !/^https?:/i.test(t.contentSrc)
    ? null
    : { content_url: t.contentSrc, original_content_url: t.originalSrc };
}
function G(e) {
  let t = e.original_content_url ?? e.content_url,
    n = URL.parse(t);
  return n == null ? t : ((n.hash = ``), n.href);
}
function de(e) {
  return T({
    scheduler: k({ windowMs: 10, maxBatchSize: 50 }),
    fetcher: async (t) => {
      let n = t.filter(({ signal: e }) => !e.aborted);
      if (n.length === 0) return new Map();
      let r = await e.safePost(`/files/library/image-favorites/status`, {
        requestBody: { sources: n.map(({ source: e }) => e) },
        signal: n.length === 1 ? n[0].signal : void 0,
      });
      if (r.length !== n.length) throw Error(`Incomplete image favorite status response.`);
      return new Map(n.map(({ source: e }, t) => [G(e), r[t]]));
    },
    resolver: (e, { source: t, signal: n }) => {
      n.throwIfAborted();
      let r = e.get(G(t));
      if (r == null) throw Error(`Incomplete image favorite status response.`);
      return r;
    },
  });
}
async function fe(e, { source: t, previous: n, save: r, surface: i, showToast: a, onView: o }) {
  let s = () => e.get(D) === e.value.accountId && e.get(F) === e.value.userId,
    c = G(t);
  if (!e.get(N)) return null;
  let l;
  if (r) {
    let n = {
      operationId: crypto.randomUUID(),
      action: `save`,
      entityKind: `image`,
      surface: i,
      source: `conversation`,
    };
    P(e, I, { ...n, eventType: j.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_CLICKED });
    try {
      if (
        ((l = await e.get(E).safePost(`/files/library/image-favorites`, { requestBody: t })),
        l.favorite_id == null || l.library_file_id == null)
      )
        throw Error(`Image favorite response did not include its Library file.`);
      s() &&
        (P(e, I, {
          ...n,
          result: `success`,
          eventType: j.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_SUCCESS,
        }),
        a && M(e, { isFavorited: !0, onView: o }));
    } catch {
      return (
        s() &&
          (P(e, I, {
            ...n,
            result: `error`,
            eventType: j.CHATGPT_GLOBAL_FAVORITES_INTERACTION_EVENT_TYPE_SAVE_ERROR,
          }),
          e
            .get(h)
            .danger(
              e
                .get(se)
                .formatMessage({
                  id: `library.favorites.failed`,
                  defaultMessage: `Could not update favorite`,
                  description: `Error when saving or removing a Library favorite fails; the item remains available for retry`,
                }),
              { errorAnalytics: { toastId: `searchImageFavorites.setSearchImageFavorite.failed` } },
            )),
        null
      );
    }
  } else {
    if (
      n.library_file_id == null ||
      n.favorite_id == null ||
      !(await O(e, {
        libraryFileId: n.library_file_id,
        favoriteId: n.favorite_id,
        isFavorited: !1,
        surface: i,
        entityKind: `image`,
        source: `conversation`,
        showToast: a,
      }))
    )
      return null;
    l = {};
  }
  let u = {
    queryKey: [`library-image-favorites-status`, e.value.accountId, e.value.userId],
    predicate: (e) => {
      let t = e.queryKey[3];
      return Array.isArray(t) && t.includes(c);
    },
  };
  (await e.queryClient.cancelQueries(u),
    e.queryClient.setQueriesData(u, (e) => (e == null || !(c in e) ? e : { ...e, [c]: l })),
    e.queryClient.refetchQueries({ ...u, predicate: (e) => u.predicate(e) && e.state.data === void 0 }));
  let d = l.library_file_id ?? n.library_file_id;
  if (d != null) {
    let t = {
      queryKey: [`library-favorites-status`, e.value.accountId, e.value.userId],
      predicate: (e) => {
        let t = e.queryKey[3];
        return Array.isArray(t) && t.includes(d);
      },
    };
    (await e.queryClient.cancelQueries(t),
      e.queryClient.setQueriesData(t, (e) =>
        e == null || !(d in e)
          ? e
          : { ...e, [d]: { favoriteId: l.favorite_id ?? null, isFavorited: l.favorite_id != null } },
      ),
      e.queryClient.refetchQueries({ ...t, predicate: (e) => t.predicate(e) && e.state.data === void 0 }));
  }
  return (e.queryClient.invalidateQueries({ queryKey: [`library-api`, e.value.accountId] }), d ?? null);
}
var K, q, J, Y;
function X() {
  return (X = e(() => {
    (ie(),
      ne(),
      (K = t(ce(), 1)),
      c(),
      L(),
      y(),
      oe(),
      z(),
      A(),
      re(),
      (q = new WeakMap()),
      (J = p(R, (e) => !1)),
      (Y = d(R, (e, { get: t, scope: n }) => {
        let r = [...new Map(e.map((e) => [G(e), e])).values()],
          i = t(E);
        return {
          queryKey: [`library-image-favorites-status`, n.value.accountId, n.value.userId, r.map(G).sort()],
          enabled: r.length > 0 && t(N),
          staleTime: 3e4,
          retry: 1,
          refetchOnMount: !0,
          queryFn: async ({ signal: e }) => {
            if (r.length === 1) {
              let t = JSON.stringify([n.value.accountId, n.value.userId]),
                a = q.get(n.queryClient);
              a ?? ((a = new Map()), q.set(n.queryClient, a));
              let o = a.get(t);
              o ?? ((o = de(i)), a.set(t, o));
              let s = await o.fetch({ source: r[0], signal: e });
              return { [G(r[0])]: s };
            }
            let t = await Promise.all(
              (0, K.default)(r, 50).map(async (t) => {
                let n = await i.safePost(`/files/library/image-favorites/status`, {
                  requestBody: { sources: t },
                  signal: e,
                });
                if (n.length !== t.length) throw Error(`Incomplete image favorite status response.`);
                return t.map((e, t) => [G(e), n[t]]);
              }),
            );
            return Object.fromEntries(t.flat());
          },
        };
      })));
  }))();
}
function pe(e) {
  let t = (0, Z.c)(11),
    n = u(N),
    r = u(ae),
    a = u(D),
    o = u(F);
  if (!n || r.status !== `allowed` || a == null || o == null) return null;
  let s;
  t[0] !== a || t[1] !== o
    ? ((s = { accountId: a, userId: o }), (t[0] = a), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let c;
  t[3] === e.source ? (c = t[4]) : ((c = G(e.source)), (t[3] = e.source), (t[4] = c));
  let l;
  t[5] !== e || t[6] !== c
    ? ((l = (0, Q.jsx)(me, { ...e }, c)), (t[5] = e), (t[6] = c), (t[7] = l))
    : (l = t[7]);
  let d;
  return (
    t[8] !== s || t[9] !== l
      ? ((d = (0, Q.jsx)(i, { scope: R, value: s, children: l })), (t[8] = s), (t[9] = l), (t[10] = d))
      : (d = t[10]),
    d
  );
}
function me(e) {
  let t = (0, Z.c)(48),
    { source: i, sources: s, conversationId: c, messageId: u, surface: d, presentation: f } = e,
    p = a(R),
    m = r(),
    h = l(),
    g;
  t[0] === i ? (g = t[1]) : ((g = G(i)), (t[0] = i), (t[1] = g));
  let _ = g,
    { data: v, isError: y } = w(Y, s),
    x = w(J, _),
    S = v?.[_],
    C;
  t[2] !== c ||
  t[3] !== y ||
  t[4] !== _ ||
  t[5] !== u ||
  t[6] !== m ||
  t[7] !== p ||
  t[8] !== i ||
  t[9] !== s ||
  t[10] !== S ||
  t[11] !== d
    ? ((C = async (e, t) => {
        let n = t !== void 0 && t;
        S == null ||
          y ||
          p.get(J, _) ||
          (p.set(J, _, !0),
          await W(p, {
            conversationId: c,
            messageId: u,
            libraryFileId: S.library_file_id,
            status: { favoriteId: S.favorite_id ?? null, isFavorited: S.favorite_id != null },
            surface: d,
            folder: e,
            created: n,
            onView: (e) => {
              m(e);
            },
            updateFavorite: (e, t, n) =>
              fe(p, { source: i, previous: S, save: e, surface: d, showToast: t, onView: n }),
          })
            .then(async () => {
              e != null && (await p.query.invalidate(Y, s));
            })
            .finally(() => {
              p.set(J, _, !1);
            }));
      }),
      (t[2] = c),
      (t[3] = y),
      (t[4] = _),
      (t[5] = u),
      (t[6] = m),
      (t[7] = p),
      (t[8] = i),
      (t[9] = s),
      (t[10] = S),
      (t[11] = d),
      (t[12] = C))
    : (C = t[12]);
  let T = C;
  if (y) return null;
  if (f === `menuItem`) {
    let e = S?.favorite_id != null,
      n = x || S == null,
      r;
    t[13] === T ? (r = t[14]) : ((r = () => void T()), (t[13] = T), (t[14] = r));
    let i;
    return (
      t[15] !== e || t[16] !== n || t[17] !== r
        ? ((i = (0, Q.jsx)(U, { isFavorited: e, disabled: n, onSelect: r })),
          (t[15] = e),
          (t[16] = n),
          (t[17] = r),
          (t[18] = i))
        : (i = t[18]),
      i
    );
  }
  if (f === `button`) {
    let e = S?.favorite_id != null,
      r;
    t[19] === h
      ? (r = t[20])
      : ((r = h.formatMessage({
          id: `library.favorites.add`,
          defaultMessage: `Add to Favorites`,
          description: `Action to save a Library file as a favorite`,
        })),
        (t[19] = h),
        (t[20] = r));
    let i = r;
    if (S == null) {
      let e;
      (t[21] === h
        ? (e = t[22])
        : ((e = h.formatMessage({
            id: `library.favoriteFolder.checking`,
            defaultMessage: `Checking Favorites status`,
            description: `Accessible status for a bookmark while checking whether the item is already saved`,
          })),
          (t[21] = h),
          (t[22] = e)),
        (i = e));
    } else if (e) {
      let e;
      (t[23] === h
        ? (e = t[24])
        : ((e = h.formatMessage({
            id: `library.favorites.remove`,
            defaultMessage: `Remove from Favorites`,
            description: `Action in a Library item menu or preview to remove the item from Favorites`,
          })),
          (t[23] = h),
          (t[24] = e)),
        (i = e));
    }
    let a = x || S == null || void 0,
      s = x || S == null,
      c;
    t[25] === T
      ? (c = t[26])
      : ((c = (e) => {
          (e.stopPropagation(), T());
        }),
        (t[25] = T),
        (t[26] = c));
    let l = e ? b : ee,
      u;
    t[27] === l ? (u = t[28]) : ((u = (0, Q.jsx)(o, { asset: l })), (t[27] = l), (t[28] = u));
    let d;
    t[29] !== e || t[30] !== i || t[31] !== a || t[32] !== s || t[33] !== c || t[34] !== u
      ? ((d = (0, Q.jsx)(n, {
          "aria-label": i,
          "aria-pressed": e,
          "aria-busy": a,
          color: `mediaOverlay`,
          radius: `full`,
          size: `inputIcon`,
          disabled: s,
          onClick: c,
          children: u,
        })),
        (t[29] = e),
        (t[30] = i),
        (t[31] = a),
        (t[32] = s),
        (t[33] = c),
        (t[34] = u),
        (t[35] = d))
      : (d = t[35]);
    let f;
    return (
      t[36] !== i || t[37] !== d
        ? ((f = (0, Q.jsx)(te, { tooltipContent: i, children: d })), (t[36] = i), (t[37] = d), (t[38] = f))
        : (f = t[38]),
      f
    );
  }
  let E = S?.favorite_id != null,
    D = S == null,
    O = S?.directory_id ?? null,
    k;
  t[39] === T ? (k = t[40]) : ((k = () => void T()), (t[39] = T), (t[40] = k));
  let A;
  return (
    t[41] !== x || t[42] !== E || t[43] !== D || t[44] !== O || t[45] !== k || t[46] !== T
      ? ((A = (0, Q.jsx)(V, {
          isSaved: E,
          isBusy: x,
          isCheckingStatus: D,
          selectedFolderId: O,
          visibility: `hover`,
          onToggleFavorite: k,
          onSelectFolder: T,
        })),
        (t[41] = x),
        (t[42] = E),
        (t[43] = D),
        (t[44] = O),
        (t[45] = k),
        (t[46] = T),
        (t[47] = A))
      : (A = t[47]),
    A
  );
}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = S()), _(), g(), c(), v(), f(), L(), x(), s(), m(), B(), z(), H(), A(), le(), X(), (Q = C()));
  }))();
}
export { ue as i, $ as n, X as r, pe as t };
//# sourceMappingURL=action-2329974d646c.js.map
